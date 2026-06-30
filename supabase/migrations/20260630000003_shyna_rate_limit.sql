create table if not exists api_rate_limits (
  ip_hash       text        not null,
  window_start  timestamptz not null,
  request_count int         not null default 1,
  primary key (ip_hash, window_start)
);

create index if not exists api_rate_limits_window_idx
  on api_rate_limits(window_start);

-- Atomically increments the counter and returns whether the request is allowed.
create or replace function increment_rate_limit(
  p_ip_hash      text,
  p_window_start timestamptz,
  p_limit        int
)
returns jsonb
language plpgsql
as $$
declare
  v_count int;
begin
  insert into api_rate_limits (ip_hash, window_start, request_count)
  values (p_ip_hash, p_window_start, 1)
  on conflict (ip_hash, window_start)
  do update set request_count = api_rate_limits.request_count + 1
  returning request_count into v_count;

  return jsonb_build_object(
    'allowed',    v_count <= p_limit,
    'remaining',  greatest(0, p_limit - v_count)
  );
end;
$$;

-- Clean up entries older than 2 hours (safe to run anytime).
create or replace function cleanup_rate_limits()
returns void language sql as $$
  delete from api_rate_limits
  where window_start < now() - interval '2 hours';
$$;
