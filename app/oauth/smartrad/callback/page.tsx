'use client'
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Deriv OAuth redirect URL for the SMARTRAD desktop app (HTTPS relay).
 *
 * Deriv sends the browser here with `code` + `state` (or `error`). The page
 * forwards those parameters, unchanged, to the desktop app's local listener
 * at a FIXED loopback address — never to a caller-supplied URL, so it cannot
 * act as an open redirect. The code is useless without the PKCE verifier
 * that only the desktop app holds, and the app verifies `state` itself.
 */
const DESKTOP_CALLBACK = 'http://127.0.0.1:53682/callback';
const FORWARDED = ['code', 'state', 'error', 'error_description', 'scope'];

function Relay() {
  const params = useSearchParams();
  const [manual, setManual] = useState(false);

  const target = useMemo(() => {
    const q = new URLSearchParams();
    for (const k of FORWARDED) {
      const v = params.get(k);
      if (v) q.set(k, v);
    }
    const qs = q.toString();
    return qs ? `${DESKTOP_CALLBACK}?${qs}` : '';
  }, [params]);

  const error = params.get('error');
  const hasCode = !!params.get('code');

  useEffect(() => {
    if (!target) return;
    window.location.replace(target);
    const t = setTimeout(() => setManual(true), 2500);
    return () => clearTimeout(t);
  }, [target]);

  return (
    <div className="max-w-xl mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold text-primary">SMARTRAD · Deriv sign-in</h1>
      {!target && (
        <p className="text-lg">
          No authorization data received. Start the connection again from
          SMARTRAD → Settings → API → Connect with Deriv.
        </p>
      )}
      {target && error && (
        <p className="text-lg">
          Deriv returned an error ({error}). Returning to SMARTRAD so it can
          show the details…
        </p>
      )}
      {target && hasCode && !error && (
        <p className="text-lg">Authorized. Returning to SMARTRAD…</p>
      )}
      {manual && target && (
        <div className="space-y-3 text-base text-white/70">
          <p>
            If SMARTRAD did not pick this up, make sure the app is open and
            waiting for the sign-in, then click:
          </p>
          <a
            href={target}
            className="inline-block px-6 py-3 rounded-lg bg-primary text-black font-semibold"
          >
            Return to SMARTRAD
          </a>
          <p className="text-sm">You can close this tab afterwards.</p>
        </div>
      )}
    </div>
  );
}

export default function SmartradOAuthCallbackPage() {
  return (
    <div className="bg-bg-less-dark text-white min-h-screen p-8 flex items-center">
      <Suspense fallback={<p className="mx-auto">Loading…</p>}>
        <Relay />
      </Suspense>
    </div>
  );
}
