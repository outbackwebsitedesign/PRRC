import { useEffect, useState } from 'react';

// Base path is proxied to the Express API in dev (see vite.config.js) and
// served from the same origin in production (see server/index.js).
export async function apiGet(path) {
  const res = await fetch(`/api${path}`);
  if (!res.ok) throw new Error(`GET /api${path} failed: ${res.status}`);
  return res.json();
}

// Fetch a resource once on mount. Returns { data, error, loading }.
// `data` is null until loaded; components render their shell and fill in
// lists as data arrives.
export function useApi(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setData(null);
    setError(null);
    apiGet(path)
      .then((d) => active && setData(d))
      .catch((e) => active && setError(e));
    return () => {
      active = false;
    };
  }, [path]);

  return { data, error, loading: data === null && error === null };
}
