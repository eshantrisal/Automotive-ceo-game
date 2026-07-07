# Working Rules

## Delegation & verification (mandatory)
- Delegate implementation tasks to subagents. Choose the cheapest model adequate for the job: Haiku for scoped, mechanical edits; Sonnet for larger multi-file changes.
- Give subagents precise, self-contained prompts including the exact code context they need.
- After a subagent finishes, verify its work directly (read/grep the changed code, run checks) before reporting done.
- Keep design decisions, audits, and final review with the lead agent.

## Project conventions
- The canonical game files are `automotive-ceo-v*-unified.html`; always glob for the highest version before assuming the latest.
- Ship changes as a new incremented version file with a changelog comment at the top.
- Keep player-facing text lean; never let authored option order leak the best answer (shuffle presentation).
- `Creative_Brief.md` is the design bible — editorial/archival aesthetic, no emojis in game UI.
