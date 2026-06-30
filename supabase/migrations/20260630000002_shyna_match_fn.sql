-- Similarity search function used by Shyna's retrieval pipeline.
-- Returns the top match_count chunks ordered by cosine similarity to the query embedding.
create or replace function match_kb_chunks(
  query_embedding  vector(768),
  match_count      int    default 6,
  similarity_threshold float default 0.5
)
returns table (
  id          uuid,
  url         text,
  title       text,
  content     text,
  similarity  float
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
