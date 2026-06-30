-- Enable pgvector extension (run once per Supabase project)
create extension if not exists vector;

-- ── Knowledge base chunks ──────────────────────────────────────────────────
-- Note: vector(768) not vector(1536) — Gemini text-embedding-004 outputs 768 dims.
-- OpenAI text-embedding-3-small is 1536; the SRS left this as a decision point.
create table if not exists kb_chunks (
  id               uuid        primary key default gen_random_uuid(),
  url              text        not null,
  title            text,
  chunk_index      int         not null,
  content          text        not null,
  embedding        vector(768),
  last_crawled_at  timestamptz not null default now(),
  is_stale         boolean     default false,
  unique (url, chunk_index)
);

-- IVFFlat index for fast cosine-similarity search.
-- lists=100 is fine for a few thousand chunks; revisit if corpus grows past 100k.
create index if not exists kb_chunks_embedding_idx
  on kb_chunks using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- ── Conversation sessions ──────────────────────────────────────────────────
create table if not exists chat_sessions (
  id              uuid        primary key default gen_random_uuid(),
  started_at      timestamptz not null default now(),
  last_active_at  timestamptz not null default now(),
  visitor_meta    jsonb,
  intent_score    numeric     default 0,
  status          text        default 'active'  -- active | lead_captured | abandoned
);

-- ── Individual messages ────────────────────────────────────────────────────
create table if not exists chat_messages (
  id          uuid        primary key default gen_random_uuid(),
  session_id  uuid        references chat_sessions(id) on delete cascade,
  role        text        not null,  -- user | assistant
  content     text        not null,
  created_at  timestamptz not null default now()
);

create index if not exists chat_messages_session_idx
  on chat_messages(session_id, created_at);

-- ── Captured leads ─────────────────────────────────────────────────────────
create table if not exists leads (
  id                   uuid        primary key default gen_random_uuid(),
  session_id           uuid        references chat_sessions(id),
  name                 text,
  email                text        not null,
  company              text,
  need_summary         text,
  source_page          text,
  intent_signals       jsonb,
  booking_link_shown   boolean     default false,
  booking_link_clicked boolean     default false,
  notified_at          timestamptz,
  created_at           timestamptz not null default now()
);

create index if not exists leads_created_idx on leads(created_at desc);
