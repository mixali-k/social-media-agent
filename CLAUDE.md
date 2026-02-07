# Social Media Agent - Claude Code Configuration

## Project Overview

This is a forked version of the LangChain Social Media Agent, customized for Atlas Fire.

## Allowed Commands

The following commands are pre-approved for this project:

```yaml
allowedTools:
  - Bash(yarn langgraph:in_mem:up)
  - Bash(yarn generate_post)
  - Bash(yarn install)
  - Bash(yarn start:auth)
  - Bash(yarn build)
  - Bash(yarn test)
  - Bash(yarn lint)
  - Bash(npx*)
  - Bash(node*)
  - Bash(git*)
  - Read(C:\Users\*\AppData\Local\Temp\claude\*)
```

## Environment Variables

Required environment variables are configured in `.env`:
- `ANTHROPIC_API_KEY` - For Claude AI content generation
- `FIRECRAWL_API_KEY` - For web scraping
- `ARCADE_API_KEY` - For social media OAuth
- LinkedIn credentials for company page posting
- Twitter credentials (Phase 2)

## Quick Commands

| Command | Purpose |
|---------|---------|
| `yarn langgraph:in_mem:up` | Start LangGraph development server |
| `yarn generate_post` | Generate a test social media post |
| `yarn start:auth` | Run OAuth authentication flow |

## Project Status

- **Phase 1:** LinkedIn company page posting (waiting for API approval)
- **Phase 2:** Twitter/X integration (pending)
- **Phase 3:** Content library automation (pending)

---

*Configured for Atlas Fire Social Media Agent*
