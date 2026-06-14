---
name: Deploy workflow
description: How to deploy — always use git push, never vercel deploy
type: feedback
---

Always deploy via `git push` to GitHub and let Vercel auto-deploy from the GitHub integration. Never use `vercel deploy`, `vercel link`, or the Vercel CLI for deployments.

**Why:** Vercel is connected to GitHub and auto-deploys on every push. CLI-based deploys are unnecessary and the project may not even be linked.

**How to apply:** After any commit, just run `git push`. Never suggest or attempt `vercel deploy`.
