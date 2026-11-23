# Publish to GitHub + Cloudflare

Local state: the Figma Make project was synced from file
`ET2RToKRZ5x6mIt5XiOEHw` (66 resources). It is a Git repo on branch `main`
with one commit. No remote is configured and no cloud account is authenticated,
so the two remaining steps need your credentials.

## 1. GitHub

This machine has no `gh` CLI, token, or GitHub connector. Pick one:

- Install `gh`, then run `gh auth login` and:

      gh repo create <owner>/owr-clean-landing --source . --private --push

  Use `--public` instead if you want it public.
- Or set a token with `repo` scope in `GITHUB_TOKEN` and use the REST API:

      curl -s -X POST -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github+json" \
        https://api.github.com/user/repos \
        -d '{"name":"owr-clean-landing","private":true}'
      git remote add origin https://github.com/<your-login>/owr-clean-landing.git
      git push -u origin main

The commit author is currently `Hermes Agent <hermes@localhost>` because no
git identity is configured here. To change it before publishing:

    git -C /home/samowr/figma-build-course-landing-page config user.name "Your Name"
    git -C /home/samowr/figma-build-course-landing-page config user.email "you@example.com"
    git commit --amend --reset-author --no-edit

## 2. Cloudflare

Wrangler is not authenticated here. Either run `wrangler login` in a browser,
or create an API token (Account → My Profile → API Tokens → Edit Workers)
and set `CLOUDFLARE_API_TOKEN` plus `CLOUDFLARE_ACCOUNT_ID`.

One-time from this machine after auth:

    cd /home/samowr/figma-build-course-landing-page
    pnpm exec opennextjs-cloudflare deploy

For automated deploys, add these secrets to the GitHub repo (Settings →
Secrets and variables → Actions):

    CLOUDFLARE_API_TOKEN
    CLOUDFLARE_ACCOUNT_ID

`CLOUDFLARE_ACCOUNT_ID` is already set (`5db78876e16f179e2132cef45a513d63`).
The token cannot be minted from this session: the OAuth login deliberately has
no token-management scope, and the dashboard is behind a bot challenge. Create
one in the Cloudflare dashboard with **Account: Read** and **Workers Scripts:
Edit** for this account, then hand it to the helper without pasting it in chat:

    mkdir -p ~/.config/cloudflare
    # write the token value into ~/.config/cloudflare/ci-token
    bash scripts/set-cloudflare-secret.sh

The script verifies the token, sets the GitHub secret via stdin, and deletes
the local token file. You can also run it with a different file path as its
first argument.

The workflow `.github/workflows/deploy-cloudflare.yml` then builds and deploys
on every push to `main`.

## PostHog analytics

Client-side PostHog is set up in `instrumentation-client.ts`: pageviews and
exception capture; successful early-access submissions also fire an
`early_access_requested` event. Server-side OpenTelemetry logging was removed:
OpenNext cannot load its external chunk in the Worker and every page returned
HTTP 500.

Two build-time env vars are required — without them PostHog silently captures
nothing:

    NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN   # project token (phc_...)
    NEXT_PUBLIC_POSTHOG_HOST           # e.g. https://us.i.posthog.com or https://eu.i.posthog.com

Set them in `.env.local` for local builds, and as GitHub repo secrets for CI
(the workflow passes them to the build step, where Next.js inlines them).
The token is a public project token, not a secret API key. No Google Analytics
is used.

The site is French/EU-facing; analytics cookies normally need prior consent
under GDPR/CNIL. No consent banner is implemented yet.

## Verified locally

- `pnpm exec opennextjs-cloudflare build` → worker saved to `.open-next/worker.js`
- `pnpm exec opennextjs-cloudflare preview --port 8799` → `GET /` 200 with the
  updated page (new sections, "OWR CLEAN" copy) and `POST /api/early-access` 200
- `pnpm exec tsc --noEmit` → exit 0

## Early-access form email

`src/components/early-access-form.tsx` submits directly to FormSubmit's free
AJAX endpoint from the visitor's browser, so no domain or paid email plan is
needed. The destination is `revivaltent91@gmail.com`; the browser call avoids
the Worker's shared egress IP, which FormSubmit rate limits. The API route
keeps the same forwarding logic as a fallback. The address appears only in
client JS, not in page HTML text.

One-time step: FormSubmit has sent an "Activate Form" email to the destination
address. Open it and click the activation link. Until that is done, submissions
are accepted by the site but not delivered. Repeated test submissions from one
IP can trigger FormSubmit's rate limit (HTTP 429); it clears after a cooldown.

## Local-only changes applied to the retrieved source

- `.figma/make/site.json` recreated (Figma injects it but does not export it)
- `next.config.ts`: Payload wrapper only when `FIGMA_EID` is set;
  `agentUpgrade: false` so unattended builds do not stop for the upgrade prompt
- `src/app/(payload)/custom.css`: Figma exported an error placeholder instead of
  CSS; replaced with an empty stylesheet. Admin routes are not available locally.
- `package.json`: `build` now runs `next build`; original is `build:payload`
- OpenNext config generated by `opennextjs-cloudflare migrate`
