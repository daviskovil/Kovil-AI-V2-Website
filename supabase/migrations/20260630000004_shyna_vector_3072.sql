-- gemini-embedding-001 outputs 3072 dims by default but supports Matryoshka
-- truncation via outputDimensionality. We use 768 to stay within pgvector's
-- IVFFlat 2000-dim limit and keep the original schema intact.
-- The partial run of this migration altered the column to vector(3072),
-- so we reset it back to vector(768) here.

truncate table kb_chunks;

drop index if exists kb_chunks_embedding_idx;

alter table kb_chunks
  alter column embedding type vector(768)
  using null::vector(768);

create index kb_chunks_embedding_idx
  on kb_chunks using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- Ensure the search function matches vector(768)
create or replace function match_kb_chunks(
  query_embedding  vector(768),
  match_count      int   default 6,
  similarity_threshold float default 0.5
)
returns table (
  id         uuid,
  url        text,
  title      text,
  content    text,
  similarity float
)
language sql stable
as $$
  select
    id,
    url,
    title,
    content,
    1 - (embedding <=> query_embedding) as similarity
  from kb_chunks
  where is_stale = false
    and 1 - (embedding <=> query_embedding) >= similarity_threshold
  order by embedding <=> query_embedding
  limit match_count;
$$;
