# Creative Brief — *Be an Automotive Industry CEO*

**One document. The single source of visual and editorial truth.**
If a new contributor — human or AI — reads only this, they should build the same game.

Version 0.1 · June 2026 · Owner: Eshan

---

## 00 · The one-line vision

> A strategy game that feels less like a game and more like being handed the keys to a century-old company — and the archive that comes with it.

You are not playing a CEO. You *are* the CEO, reading the same memos, facing the same irreversible choices, judged by the same history. The interface is a boardroom, an archive, and an annual report — never a HUD.

---

## 01 · Philosophy

The product's real moat is its **verified historical database** — real timelines, real financials, real executive decisions. The design exists to make that data feel *consequential*, not decorative. Every screen should make the player feel the weight of a real decision made by a real person who could not undo it.

We borrow the visual authority of institutions that already command trust: the annual report, the broadsheet newspaper, the museum wall text, the board memo. We never borrow from the visual language of mobile games, which signals "this is frivolous."

The aesthetic is **editorial, archival, restrained**. But restraint is in service of *legibility and consequence*, not austerity for its own sake. (See §05 guardrail.)

---

## 02 · Emotional pillars

Five feelings. Every design decision is tested against them.

1. **Authority** — The player should feel *"I've just become CEO,"* not *"I'm playing a game."* Interfaces address the player as a principal, not a user.
2. **Weight** — Every decision should feel expensive and irreversible. No undo button. No frictionless taps. The UI slows you down at the moment of commitment.
3. **History** — Everything belongs in an archive. Dates, document numbers, fiscal-quarter stamps. The player is leafing through records, not navigating menus.
4. **Legacy** — Every screen quietly reminds you: *people will remember this.* Your tenure is being written down as you play.
5. **Intelligence** — The player should leave feeling *smarter*, not merely entertained. Educated by the real history they just lived through.

---

## 03 · Things we never do

A hard list. Any one of these on screen is a bug.

- No glassmorphism, no neon, no cyberpunk
- No glowing or gradient-filled buttons
- No RPG inventories, skill trees, or sci-fi holograms
- No floating cards or floating dashboards
- No gratuitous gradients
- No emojis, anywhere
- No confetti, bounce, or "juice" animations
- No game-isms: no "+50 points!!", no "Great job!", no XP bars styled like a mobile game
- No rounded-everything; corners are crisp or barely softened
- No stock-photo gloss

---

## 04 · Narrative voice

Every word on screen should read like it was written by one of these: *Harvard Business Review*, the *Financial Times*, a Walter Isaacson biography, or an internal board memo.

**Tone:** measured, literate, consequential, never breathless.

| Don't write | Write |
|---|---|
| "Nice! You earned +12 reputation!" | "The market rewarded restraint. Reputation: 92.5 → 80.5." |
| "Uh oh, cash is low!" | "Liquidity is tightening. Reserves now cover two quarters." |
| "Choose your upgrade!" | "The board awaits your decision." |
| "Game Over" | "Your tenure concluded in Q3 2009. History recorded the following." |

Numbers are spoken plainly. Outcomes are reported, not celebrated. The game never congratulates; it *records*.

---

## 05 · Visual language (direction, not system)

The full design system is **discovered by building the North Star screens, then documented** — not declared here. This section sets direction only.

**Mood anchors** (six is enough — don't collect 200):
*Financial Times Weekend* · a Porsche or Mercedes annual report · *Monocle* magazine · Swiss railway timetable · museum exhibition wall text · a patent drawing.

**Working direction:**

- **Palette** — paper and ink. Warm off-white/parchment grounds, near-black ink text, one restrained accent (oxblood / deep ink-blue) used *sparingly* for consequence and the single hero element. Stat changes use muted, serious red/green — desaturated, never traffic-light.
- **Type** — a serif for editorial authority (headlines, body, document text) paired with a precise grotesque or monospace for data, figures, and labels (dates, KPIs, document numbers). The data face is where "archive" lives.
- **Layout** — generous margins, a real typographic grid, rules and hairlines instead of boxes and shadows. Think printed page, not card stack.
- **Hierarchy** — **one hero per screen, never two.** On the crisis screen the hero is *the question*. On the annual report it's *one KPI*. On the ending it's *the legacy line*.

> **Guardrail — legibility & game-feel.** This is still a strategy game. The player reads five stat vectors (Cash, Reputation, Quality, Market Share, CAPEX) every turn and needs fast, unambiguous feedback. Austerity must never cost clarity. "No flashy UI" and "the player must instantly see what changed" are *both* requirements. When they conflict, clarity wins.

---

## 06 · Motion

Motion tells the story of documents and time — never of a game engine.

| Never | Instead |
|---|---|
| Fade / scale / bounce | A document unfolds |
| Pop-in modals | A folder slides; a page turns |
| Spinner | Ink appears, line by line |
| Score tally animation | The figure is struck through and rewritten |

Transitions are paper-paced: deliberate, weighted, slightly slow. Nothing springs.

---

## 07 · Audio

| Moment | Not | Instead |
|---|---|---|
| Decision committed | Ding | A pen signing paper |
| Failure / loss | Explosion | Silence, then a chair scraping, a distant news bulletin |
| New turn | Chime | A page turning; muffled boardroom ambience |

Audio is sparse. Silence is a legitimate, deliberate sound.

---

## 08 · Screen intent (emotion, not layout)

Each screen is defined by what the player should *feel*, with one hero.

- **Company Selection** — *"I've been invited into a boardroom."* Not "choosing a character." Hero: the institution.
- **The Board Crisis Meeting** — *"The decision is mine, the advisors disagree, and I cannot take it back."* Hero: the question.
- **The World Timeline** — *"History is unfolding across decades, and I am inside it."* Hero: the moving present moment.
- **The Annual Report** — *"I am proud — or accountable."* Hero: one KPI.
- **The Legacy Page** — *"Someone wrote a biography of my tenure."* Hero: the legacy line.

---

## 09 · The five North Star screens

If the game shipped with only these five images on its website, a stranger should instantly understand the experience. Every other screen must look like it belongs in the same universe.

1. **The CEO Appointment** — the moment you accept leadership. The hire letter.
2. **The Board Crisis Meeting** — high tension, conflicting advice, one irreversible decision. *(Built first — see prototype.)*
3. **The World Timeline** — history unfolding across decades.
4. **The Legacy Page** — a museum-quality retrospective of your tenure.
5. **The Global Operations Map** — the industrial empire, rendered with restraint.

---

## 10 · How we use this brief

1. Build North Star screens as **real prototypes with real data** — never mockups, never Lorem Ipsum.
2. Extract the **design system from what worked** — tokens, type scale, spacing — and append it as §11 once proven.
3. Then, and only then, instruct the implementer: *"Do not design. Implement this exactly."*

Order of operations is deliberate: **direction → prototype → extracted system → production.** We do not write the system in the abstract.
