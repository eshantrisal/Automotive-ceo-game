# Research Dossier: Volkswagen Group (CEO Mode)

Prepared for the "Be an Automotive Industry CEO" narrative strategy game.
Format reference: `DATA.tesla` / `DATA.mercedes` blocks in `automotive-ceo-game-v3.html`.
All facts below are sourced via web search of primary/major-press sources. Anything that could not be independently verified is flagged explicitly as **UNVERIFIED** — do not write it into game data as a `hist:` fact without further checking.

---

## 1. Company Snapshot — Candidate KPI Dimensions

Volkswagen Group's central strategic tension across 2007–2026 is: **immense industrial scale and engineering pride, repeatedly undermined by governance/compliance failures and an unusually powerful labor co-determination structure that can veto or slow management's biggest moves.** Three KPIs that capture this:

1. **`scale` — Global Volume & Market Position** — Label: "Global Scale." Desc: "Units sold, market share vs. Toyota/GM/BYD. The original obsession (Strategy 2018) and the thing China is now taking away." VW is unusual among the game's companies so far in that volume/share was an explicit, numerically stated CEO mandate (10 million cars/year by 2018), so this KPI has strong narrative grounding.
2. **`trust` — Trust & Compliance** — Label: "Trust / Compliance Standing." Desc: "Regulatory, legal and public trust. Cratered by Dieselgate in 2015; every subsequent CEO has had to manage it as a balance sheet of its own (fines, criminal exposure, brand reputation)."
3. **`labor` — Works Council / Cost Position** — Label: "Labor Peace & Cost Discipline." Desc: "Relationship with IG Metall and the works council (which holds half the supervisory board seats and can block plant closures), versus the cost competitiveness VW needs against Tesla and Chinese EV makers." This is the distinctly VW-flavored third KPI — no other company in the game has co-determination as a structural constraint on the CEO the way VW does (works council chair sits on the supervisory board; the State of Lower Saxony holds ~20% of voting shares and a blocking minority).

Alternate/optional 3rd KPI if `labor` feels too close to `trust`: **`future` — EV/Software Readiness** (Cariad, MEB/Trinity, China JV competitiveness vs BYD) — modeled closely on Mercedes' `future` KPI but VW-specific (software delays are VW's own distinct failure mode, separate from Daimler's).

Recommended trio for the dossier write-up below: **scale, trust, labor** (with future/software readiness folded into the Diess/Blume era narrative rather than as a 4th KPI, exactly as Mercedes folds "future" thinking into multiple eras).

---

## 2. Eras

### Era A — "Strategy 2018" / The Winterkorn Ascent (2007–2015)
**Central tension:** An audacious, numerically explicit goal — overtake Toyota and GM to become the world's largest automaker by 2018, set in 2007 by CEO Martin Winterkorn with chairman Ferdinand Piëch's backing — collides with the cheapest way to hit US emissions targets on diesel engines. The era is defined by real industrial achievement (VW actually hit the volume target *three years early*, in mid-2015) sitting directly on top of a buried fraud that was already accelerating toward discovery by the time the volume crown was claimed.

### Era B — Dieselgate and the Reckoning (Sept 2015–2018)
**Central tension:** Survive an existential scandal — ~11 million rigged vehicles worldwide, a CEO resignation within days, billions in fines, criminal indictments of top executives — while simultaneously trying to convince the world (and your own engineers) that the company's future is electric, not diesel. Matthias Müller's brief, consequential tenure: pay the bill, keep the company solvent and out of structural collapse, and place the bet (MEB platform) that will define the 2020s.

### Era C — The Diess EV Offensive and Its Limits (2018–2022)
**Central tension:** Herbert Diess tries to turn a 12-brand, works-council-constrained industrial conglomerate into something resembling a software-and-EV company at Tesla speed — ID.3/ID.4, the Trinity moonshot, the Cariad software unit — and repeatedly collides with the one force in the company more powerful than the CEO: the works council and the Piëch/Porsche family supervisory board, which ultimately fires him.

### Era D — Blume, China, and the Cost Crisis (Sept 2022–2026)
**Central tension:** Oliver Blume inherits a company losing share to BYD and Chinese rivals in its most important market, a software unit (Cariad) still not delivering, and a German cost base no longer competitive — forcing VW, for the first time in its 87-year history, to negotiate closing domestic factories and cutting tens of thousands of jobs, all while running Porsche simultaneously.

---

## 3. Decision Points

### ERA A — "Strategy 2018" (2007–2015)

#### 1. The 10-Million-Car Bet
- **Date:** 2007 (formal unveiling widely dated to 2007–2008, with Piëch's backing)
- **CEO:** Martin Winterkorn (became CEO Jan 2007)
- **Situation:** Winterkorn, with chairman Ferdinand Piëch's support, sets "Strategy 2018": grow VW from ~6 million vehicles/year to become the world's largest automaker by volume, profitability and technology by 2018 — overtaking Toyota and GM. Analysts call the target absurd for a company that size.
- **Alternative paths:** (a) Set a more modest, profitability-first target; (b) pursue the volume crown but via organic growth/M&A only, without leaning on a single "clean diesel" technology bet for the critical US market; (c) the path taken — bet heavily on marketing "clean diesel" as the technology that cracks the US market while scaling China and Europe.
- **What actually happened:** VW pursued the goal aggressively across a decade of capacity expansion (China JVs, new plants, brand acquisitions). It did become the world's largest automaker by vehicle sales in H1 2015 — ahead of schedule — but the "clean diesel" pillar of the US strategy was, unknown to the public, being achieved through a defeat-device software fraud that had been running since at least 2006–2009 depending on the engine generation.
- **Quote:** Multiple retrospectives describe the 10-million target as set in 2007 "with the support of chairman Ferdinand Piëch." No single verbatim Winterkorn quote about the original announcement was found in available sources — treat any quote attributed to this specific announcement as **UNVERIFIED**.
- **Source:** https://www.studocu.com/en-us/document/northern-arizona-university/strategic-management/volkswagen-management-harvard-article/49735203 ; https://www.kbb.com/archive/vw-will-invest-858-billion-to-become-worlds-premier-automaker ; BBC "VW boss Martin Winterkorn's rise and fall" https://feeds.bbci.co.uk/news/business-34334621

#### 2. Clean Diesel for America
- **Date:** ~2008–2009 (EA189 2.0L diesel engine program development for US market)
- **CEO:** Martin Winterkorn
- **Situation:** The US market is resistant to diesel passenger cars culturally, but VW needs a fuel-efficient, "green"-marketable powertrain to hit Strategy 2018's US volume targets without the cost of a huge NOx-reduction hardware investment (urea/SCR systems were expensive). Engineers are tasked with meeting strict EPA NOx limits on a tight budget and timeline.
- **Alternative paths:** (a) Invest in full SCR/AdBlue NOx-cleanup hardware on every diesel (the more expensive, "do it right" option — what Daimler's dossier-comparable scenario frames as the honest alternative); (b) accept higher real-world emissions and lobby for looser standards; (c) the path taken — install software ("defeat device") that detected dynamometer test conditions and activated full emissions controls only during testing, while relaxing them in real-world driving to preserve performance/fuel economy.
- **What actually happened:** The defeat device software was installed across EA189 (2.0L) and later EA288/3.0L diesel engines, ultimately found in roughly 11 million vehicles worldwide (about 580,000 in the US across both engine families, ~499,000 of which were the 2.0L cars).
- **Quote:** Not independently verified for this specific internal decision point (no on-record quote from a named engineer admitting intent at this stage has been confirmed in available sources). **UNVERIFIED.**
- **Source:** https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement ; https://www.congress.gov/crs_external_products/R/PDF/R44372/R44372.9.pdf

#### 3. The West Virginia University Test
- **Date:** May 2014 (test conducted 2013–2014; ICCT report published May 2014)
- **CEO:** Martin Winterkorn
- **Situation:** The International Council on Clean Transportation (ICCT) commissions West Virginia University's Center for Alternative Fuels, Engines and Emissions (CAFEE), led by Dan Carder, to do real-world (not just lab/dynamometer) emissions testing on diesel vehicles, partly to showcase how clean US diesels were compared to Europe's. They test two VW models and one BMW.
- **Alternative paths:** This is a regulator/researcher-driven decision point, not a VW management choice — but VW's internal choice once results emerged was: (a) admit the discrepancy and disclose voluntarily; (b) contest the methodology and stall; (c) the path taken — VW representatives, when confronted by CARB/EPA over the following year, repeatedly offered technical explanations (software calibration issues, unexpected use conditions) rather than admitting a defeat device, prolonging the investigation into 2015.
- **What actually happened:** WVU's tests found the BMW emitted at or below certified levels, but the VW vehicles emitted up to 40x the legal NOx limit on the road. ICCT reported the findings to CARB and EPA in May 2014. CARB ran its own confirmatory testing through 2014–2015 and found VW's explanations did not account for the gap, eventually concluding a defeat device was present.
- **Quote:** Drew Kodjak (ICCT executive director) and Dan Carder have spoken publicly about this discovery in later retrospectives (e.g., IEEE Spectrum's "How Professors Caught VW Cheating"), but no contemporaneous 2014 quote from VW executives was found responding to the WVU data specifically.
- **Source:** https://theicct.org/sites/default/files/publications/WVU_LDDV_in-use_ICCT_Report_Final_may2014.pdf ; https://spectrum.ieee.org/cars-that-think/transportation/advanced-cars/how-professors-caught-vw-cheating

#### 4. Piëch vs. Winterkorn — The Boardroom Coup That Wasn't
- **Date:** April 2015
- **CEO:** Martin Winterkorn (chairman: Ferdinand Piëch, until his resignation)
- **Situation:** Patriarch and supervisory board chairman Ferdinand Piëch — who had already maneuvered to install ex-BMW executive Herbert Diess as VW-brand CEO in December 2014, stripping that role from Winterkorn — publicly tells a magazine he is "distancing himself" from Winterkorn, igniting a public power struggle just five months before Dieselgate breaks.
- **Alternative paths:** (a) The supervisory board could have sided with Piëch and ousted Winterkorn early, which might have changed who was CEO when Dieselgate broke; (b) a negotiated transition naming a successor; (c) the path taken — the board's leadership committee publicly backed Winterkorn as the "best possible" CEO with its "full support," forcing Piëch to step down instead.
- **What actually happened:** Piëch resigned as supervisory board chairman by late April 2015. Winterkorn survived — but only for five more months, resigning himself once Dieselgate broke in September 2015.
- **Quote:** VW's supervisory board leadership committee stated Winterkorn was the "best possible" chief executive with the board's "full support" (April 2015).
- **Source:** https://www.autonews.com/article/20150417/OEM02/150419888/vw-s-top-board-group-backs-winterkorn-as-best-possible-ceo ; https://www.autonews.com/article/20150413/COPY01/304139920/vw-board-members-back-winterkorn-after-piech-criticism-creates-crisis ; https://fortune.com/2015/04/25/piech-volkswagen-quits

#### 5. The Notice of Violation
- **Date:** September 18, 2015
- **CEO:** Martin Winterkorn
- **Situation:** The EPA issues a formal Notice of Violation of the Clean Air Act, publicly alleging VW and Audi 2.0L diesel vehicles (model years 2009–2015) used a defeat device producing NOx emissions up to 40x the legal standard. Reports indicate VW representatives had quietly informed EPA officials of the deception just before a public conference appearance — VW had effectively already capitulated days earlier, but the public notice detonates the story globally.
- **Alternative paths:** (a) Continue contesting/explaining technical discrepancies (the path VW had been on for over a year); (b) get ahead of the EPA notice with a voluntary public admission first; (c) the path effectively taken — quiet disclosure to regulators just ahead of the public notice, followed by full public confirmation days later.
- **What actually happened:** EPA's notice went public Sept 18, 2015. VW initially said little publicly, then on September 20–22 admitted to installing the software in roughly 11 million vehicles worldwide. A second EPA Notice of Violation followed Nov 2, 2015, covering 3.0L diesel engines (2014–2016 model years), alleging emissions up to 9x the standard.
- **Quote:** EPA's notice stated VW vehicles' NOx emissions were "up to 40 times" the standard when on the road versus in lab testing.
- **Source:** https://www.fraserlawfirm.com/blog/2015/09/will-volkswagens-deliberate-violations-of-the-federal-clean-air-act-lead-to-the-criminal-prosecution-of-the-company-of-any-of-its-executives/ ; https://theicct.org/epas-notice-of-violation-of-the-clean-air-act-to-volkswagen-press-statement/ ; https://www.justice.gov/archives/opa/pr/united-states-files-complaint-against-volkswagen-audi-and-porsche-alleged-clean-air-act

#### 6. The Resignation
- **Date:** September 23, 2015
- **CEO:** Martin Winterkorn (resigning)
- **Situation:** Four days after VW's public admission, with the supervisory board meeting to decide his fate, Winterkorn must choose how to exit: fight to stay, claim ignorance and resign "voluntarily," or be fired outright.
- **Alternative paths:** (a) Resist removal and force a board vote; (b) resign immediately with a full personal apology and admission of oversight failure; (c) the path taken — resign while explicitly denying personal wrongdoing, framing the exit as enabling a "fresh start" for the company.
- **What actually happened:** Winterkorn resigned as CEO on September 23, 2015.
- **Quote:** "I am shocked by the events of the past few days. Above all, I am stunned that misconduct on such a scale was possible in the Volkswagen Group." He added he was "not aware of any wrongdoing on my part" but accepted "responsibility for the irregularities that have been found in diesel engines" and had asked the supervisory board "to agree on terminating my function as CEO of the Volkswagen Group."
- **Source:** https://www.cnbc.com/2015/09/23/martin-winterkorn-resigns-as-volkswagen-ceo.html ; https://www.france24.com/en/20150923-business-volkswagen-ceo-winterkorn-resigns-amid-emissions-scandal

---

### ERA B — Dieselgate and the Reckoning (2015–2018)

#### 7. Müller Takes the Wheel
- **Date:** September 25, 2015 (named CEO 2 days after Winterkorn's resignation)
- **CEO:** Matthias Müller (incoming; previously Porsche CEO)
- **Situation:** The supervisory board needs a credible, "clean hands" successor immediately. Müller, who ran Porsche and was seen as untainted by the diesel program, is installed within 48 hours of Winterkorn's departure, inheriting a company facing potential criminal liability, a collapsing share price, and a workforce of over 600,000 wondering if the company survives.
- **Alternative paths:** (a) Promote from within the implicated VW brand leadership (risky, optics of continuity with the cheating regime); (b) bring in an outsider with no VW Group history at all; (c) the path taken — an insider from a different, "clean" VW Group brand (Porsche).
- **What actually happened:** Müller became Group CEO, beginning an immediate strategic pivot toward electrification and a public "cultural change" narrative, while overseeing the buyback/settlement process in the US.
- **Quote:** Not independently verified for his exact words on appointment day; treat as **UNVERIFIED** pending a primary-source quote.
- **Source:** https://www.thedrive.com/news/20056/volkswagen-replaces-the-ceo-who-saved-the-company

#### 8. Pay the Americans
- **Date:** Settlements primarily 2016–2017 (announced incrementally); largest civil/criminal settlement finalized 2016–2017
- **CEO:** Matthias Müller
- **Situation:** VW must decide how aggressively to settle with US regulators, the DOJ, FTC, 44 state attorneys general, and ~500,000 affected 2.0L diesel owners, versus litigating. The scale of potential liability is unprecedented for an automaker.
- **Alternative paths:** (a) Fight every claim in court for years (drags out uncertainty, risks even larger penalties if found to have obstructed); (b) negotiate a fast, generous settlement to draw a line under it; (c) a partial settlement strategy that resolves civil claims but contests criminal liability.
- **What actually happened:** VW agreed to spend up to $14.7 billion to settle the 2.0L allegations, including a buyback/lease-termination program for nearly 500,000 vehicles (up to $10.03 billion in compensation) and $4.7 billion for environmental mitigation and green vehicle investment. Separately, VW pleaded guilty to criminal charges and a federal judge in Detroit ordered a $2.8 billion criminal penalty.
- **Quote:** DOJ's press release framed the settlement as resolving "allegations of cheating emissions tests and deceiving customers."
- **Source:** https://www.justice.gov/archives/opa/pr/volkswagen-spend-147-billion-settle-allegations-cheating-emissions-tests-and-deceiving ; https://www.nbcnews.com/business/autos/judge-approves-largest-fine-u-s-history-volkswagen-n749406

#### 9. The Braunschweig Fine
- **Date:** June 13, 2018
- **CEO:** Matthias Müller (still CEO at time of this fine; Diess took over the following spring transition window — confirm overlap)
- **Situation:** German prosecutors in Braunschweig conclude their investigation into VW AG's corporate (not individual) liability for selling more than 10.7 million defeat-device-equipped cars between mid-2007 and 2015, and must set an administrative fine.
- **Alternative paths:** (a) VW could contest/appeal the fine; (b) negotiate it down; (c) accept it without appeal to close the matter quickly.
- **What actually happened:** Braunschweig prosecutors imposed a €1 billion fine — composed of the maximum statutory penalty of €5 million plus disgorgement of €995 million in economic benefit. VW accepted the fine and did not appeal.
- **Quote:** Prosecutors' order is described as one of the highest administrative fines ever imposed on a company in Germany.
- **Source:** https://dieselnet.com/news/2018/06vw2.php ; https://www.bloomberg.com/news/articles/2018-06-13/vw-agrees-to-1-2-billion-diesel-fine-from-german-prosecutors ; https://www.volkswagen-group.com/en/ad-hoc/administrative-order-imposing-a-fine-bussgeldbescheid-being-issued-by-the-braunschweig-public-prosecutor-against-volkswagen-in-the-context-of-the-diesel-crisis-15939

#### 10. Charging the Executives
- **Date:** Indictments primarily 2017–2019; Winterkorn charged by US DOJ May 3, 2018; German charges against Winterkorn filed 2019
- **CEO:** Matthias Müller (then transitioning to Herbert Diess by April 2018)
- **Situation:** US and German prosecutors pursue individual criminal liability, not just corporate fines. The company must decide how to handle current and former executives — cooperate with prosecutors against its own former leadership, or shield them.
- **Alternative paths:** (a) Support/fund legal defense for implicated executives as a show of loyalty; (b) cooperate fully with prosecutors, even against former CEO Winterkorn; (c) a middle path of quiet severance deals while staying publicly neutral.
- **What actually happened:** Oliver Schmidt, a former VW engineer/US compliance executive, pleaded guilty and was sentenced to 84 months (7 years) in US federal prison. Martin Winterkorn was indicted by the US DOJ on May 3, 2018 on four counts (conspiracy and three counts of wire fraud) — the indictment alleges he was told of the cheating in May 2014 and again in July 2015 yet "agreed with other senior VW executives to continue to perpetrate the fraud." He has not faced US trial (he remains in Germany, which generally does not extradite citizens for offenses also chargeable domestically). German prosecutors separately charged Winterkorn with fraud in 2019.
- **Quote:** US indictment language: Winterkorn allegedly "agreed with other senior VW executives to continue to perpetrate the fraud and deceive U.S. regulators" after being informed of the cheating.
- **Source:** https://www.justice.gov/usao-edmi/pr/former-ceo-volkswagen-ag-charged-conspiracy-and-wire-fraud-diesel-emissions-scandal-0 ; https://www.bloomberg.com/news/articles/2018-05-03/ex-vw-ceo-winterkorn-charged-by-u-s-in-diesel-cheating-case ; https://www.nbcnews.com/business/autos/german-prosecutors-charge-former-volkswagen-ceo-martin-winterkorn-fraud-n994461

#### 11. Betting on MEB
- **Date:** Platform development from ~2016; publicly detailed at Paris Motor Show Sept 2016 and in subsequent "Roadmap E" (Sept 2017)
- **CEO:** Matthias Müller
- **Situation:** With diesel's reputation destroyed and EV adoption clearly accelerating (Tesla's Model 3 reveal looms in 2016), Müller must decide how far to commit VW's enormous capital and engineering base to a dedicated, ground-up electric vehicle architecture (MEB) versus retrofitting existing combustion platforms for hybrids/EVs.
- **Alternative paths:** (a) Minimal EV investment, hedge with hybrids on existing platforms (lower risk, slower transition); (b) buy EV technology/expertise via acquisition or partnership rather than build in-house; (c) the path taken — commit to a dedicated, modular EV-only architecture (MEB) shared across the entire Group's mass-market brands, plus a 2017 "Roadmap E" pledge to electrify the entire portfolio by 2030.
- **What actually happened:** VW announced "Roadmap E" in September 2017, committing to electrified versions of all ~300 Group models by 2030, including 50 pure-EVs and 30 plug-in hybrids by 2025, with over €20 billion earmarked at the time (later figures grew to €30B+/€60B in subsequent strategy updates under Diess). MEB launched its first production vehicle, the ID.3, in 2020.
- **Quote:** Group materials describe Roadmap E as electrifying "across its entire model portfolio by 2030 at the latest."
- **Source:** https://www.fleetnews.co.uk/news/manufacturer-news/2017/09/12/volkswagen-group-to-electrify-entire-model-portfolio-by-2030-with-roadmap-e ; https://www.greencarcongress.com/2016/10/20161005-meb.html

#### 12. 30,000 Jobs for a Different Future
- **Date:** November 2016
- **CEO:** Matthias Müller
- **Situation:** To fund the diesel settlements and the EV pivot simultaneously, Müller's team and the works council negotiate a major restructuring of the VW brand: cut tens of thousands of jobs over five years while promising no forced layoffs in Germany, in exchange for the workforce accepting the electrification transition.
- **Alternative paths:** (a) Across-the-board layoffs without union negotiation (likely to trigger major strikes given works council's board power); (b) freeze hiring and attrition-only cuts (slower savings); (c) the negotiated path taken — a formal deal trading job cuts for job-security guarantees and new EV-related investment commitments.
- **What actually happened:** VW announced plans to cut around 30,000 jobs worldwide (mostly in Germany) over several years as part of a savings plan, aiming to double the VW brand's operating margin and fund the shift to electromobility, while pledging no compulsory redundancies in Germany.
- **Quote:** Not independently verified verbatim for Müller at this announcement; treat specific phrasing as **UNVERIFIED**.
- **Source:** https://fortune.com/2016/11/18/vw-job-cuts-restructuring-volkswagen ; https://www.fortune.com/2016/11/18/vw-job-cuts-restructuring-volkswagen

---

### ERA C — The Diess EV Offensive and Its Limits (2018–2022)

#### 13. The Handover
- **Date:** April 12, 2018
- **CEO:** Matthias Müller (outgoing) → Herbert Diess (incoming)
- **Situation:** Less than three years after steering VW through the worst of the criminal/financial fallout, Müller is pushed out by the supervisory board in favor of Herbert Diess, the VW-brand CEO (and former BMW purchasing chief) seen as a faster, more aggressive driver of digitalization and EVs. The board restructures Group governance into six business areas plus a China region at the same time.
- **Alternative paths:** (a) Keep Müller through a longer transition given the ongoing legal cleanup; (b) choose a different internal candidate; (c) the path taken — install Diess, already proven as a cost-cutter and EV advocate at the VW brand level, as full Group CEO.
- **What actually happened:** Diess became VW Group CEO on April 12, 2018 (effective shortly after), with Müller stepping down. Diess retained influence over the VW brand and made electrification and digitalization the explicit centerpiece of his mandate.
- **Quote:** Group statements at the time framed the change around the need to "pick up speed" in e-mobility, digitalization and new mobility services amid "profound upheaval" in the industry.
- **Source:** https://www.cnbc.com/2018/04/12/volkswagen-supervisory-board-ousts-ceo-matthias-mueller.html ; https://www.thelocal.de/20180413/volkswagen-names-herbert-diess-as-new-ceo/

#### 14. "EBIT macht frei"
- **Date:** March 2019 (remark made at an internal VW Autostadt event in Wolfsburg)
- **CEO:** Herbert Diess
- **Situation:** Trying to drive home a cost/profitability message to staff in a public-facing internal address, Diess uses a German phrase, "Ebit macht frei" ("EBIT sets you free"), an obvious echo of the Nazi concentration-camp slogan "Arbeit macht frei" ("work sets you free"). The remark is captured and leaked.
- **Alternative paths:** (a) Use a different, non-loaded turn of phrase to make the same profitability point; (b) once said, immediately and fully apologize; (c) the path taken initially — downplay it as unintentional wordplay before public/supervisory-board pressure forced a fuller apology.
- **What actually happened:** The remark caused a major scandal; Volkswagen's supervisory board publicly condemned it, and Diess apologized, but the episode became a recurring symbol of his rocky relationship with optics, labor representatives, and German public sentiment.
- **Quote:** Diess's phrase, "Ebit macht frei," is the load-bearing quote itself; the supervisory board "condemned" the remark.
- **Source:** https://investing.com/news/stock-market-news/volkswagen-supervisory-board-condemns-ceos-ebit-macht-frei-remark-1809183 ; https://en.wikipedia.org/wiki/Herbert_Diess

#### 15. Announcing the Cuts Through the Press
- **Date:** November 2019 (Supervisory Board meeting where Diess's restructuring plan was discussed/leaked)
- **CEO:** Herbert Diess
- **Situation:** Diess tells the supervisory board that up to 30,000 jobs — roughly one in four roles at the core VW brand — could become superfluous due to the shift to electric vehicles (which require less labor to build than combustion cars) and digitalization, and the figure is immediately leaked to media before being formally negotiated with labor.
- **Alternative paths:** (a) Negotiate the full figure privately with the works council before any public framing; (b) phase the disclosure gradually; (c) the path effectively taken — the stark "1 in 4 jobs superfluous" framing reached the press essentially in parallel with or ahead of the formal negotiation, inflaming tensions with labor leader Bernd Osterloh.
- **What actually happened:** After negotiation, management and labor agreed in November 2019 to cut 30,000 jobs at the VW brand through 2023 in exchange for a commitment to avoid compulsory redundancies in Germany until 2029, while also pledging to add ~9,000 new jobs in EV/battery/software areas — a net framing of "transformation," not pure downsizing.
- **Quote:** Coverage describes labor leaders accusing Diess — known as a cost-cutter from his BMW background — of pushing to cut jobs "more swiftly and deeply" than the works council wanted.
- **Source:** https://europe.autonews.com/automakers/vw-management-works-council-divided-over-restructuring-report-says ; https://europe.autonews.com/automakers/vw-labor-chief-may-leave-board-shake-report-says

#### 16. The ID.3's 300 Bugs a Day
- **Date:** Software issues surfaced through late 2019–mid 2020; European deliveries delayed to September 2020
- **CEO:** Herbert Diess
- **Situation:** The ID.3 — VW's flagship MEB-platform EV and the symbolic proof that Diess's strategy works — is found to have deeply unstable software, with test drivers logging as many as 300 bugs per day on a single vehicle. VW's own engineers concede the basic software architecture was developed "too hastily."
- **Alternative paths:** (a) Delay the launch significantly until software is fully stable; (b) ship as planned and patch later (accepting reputational risk); (c) ship a reduced feature set on time and add features via over-the-air updates afterward.
- **What actually happened:** VW chose a hybrid of (b) and (c): European deliveries were delayed from mid-2020 to September 2020, and the first cars shipped without some advertised features (App Connect, a head-up display distance feature) to be added via a software update months later. The episode became a major embarrassment and a direct contributor to VW's board removing Diess as VW-brand CEO that same year (while he remained Group CEO) and to the eventual creation/scrutiny of the Cariad software unit (founded 2020).
- **Quote:** VW insiders described the software situation as "no longer a laughing matter"; engineers attributed bugs to the "too hastily" developed software architecture and insufficient programming resources.
- **Source:** https://insideevs.com/news/406375/vw-id3-software-problem-update/ ; https://electrek.co/2019/12/19/volkswagen-id3-has-massive-software-problems-as-company-begins-year-of-ev-introductions/ ; https://www.greencarreports.com/news/1128452_volkswagen-id-3-delayed-to-september-for-first-european-deliveries

#### 17. Project Trinity and the Software Wall
- **Date:** Trinity announced 2021; first delay reported November 2022 (2026→2028); further delays reported through 2024
- **CEO:** Herbert Diess (2021–22 announcement and first delay); Oliver Blume (subsequent delays from 2022 onward)
- **Situation:** Diess champions "Project Trinity," a next-generation flagship EV at a new Wolfsburg factory meant to showcase highly automated production and a unified next-gen software stack (to be built by Cariad), originally targeted for 2026. But Cariad's software — also blamed for delaying EVs across Audi, Porsche, and Bentley — repeatedly fails to reach the maturity required.
- **Alternative paths:** (a) Decouple Trinity's launch from Cariad's unfinished next-gen software stack and ship with proven, existing software instead; (b) cancel/scale back the dedicated factory commitment until software is ready; (c) the path effectively taken — repeatedly push the launch date outward (2026 → 2028, with the dedicated Wolfsburg factory plan itself reportedly pushed toward 2030) while developing an interim updated MEB platform (MEB+) for a new ID.4 generation as a stopgap.
- **What actually happened:** Trinity's launch slipped multiple times; Cariad's E3 2.0 software platform was reported delayed from 2026 to 2029; VW brand CEO Thomas Schäfer confirmed the 2026→2028 slip; the dedicated Wolfsburg factory was also reported delayed, with some reports suggesting the standalone factory plan could be scrapped altogether in favor of building Trinity-derived tech into existing platforms/plants.
- **Quote:** Industry coverage (InsideEVs) explicitly states Cariad's software problems were "delaying EVs" across "Audi, Porsche, and Bentley," not just VW brand.
- **Source:** https://www.carexpert.com.au/car-news/volkswagen-trinity-ev-delayed-report ; https://insideevs.com/news/597624/vw-group-software-unit-delaying-key-evs-audi-porsche-bentley/ ; https://www.wardsauto.com/volkswagen/volkswagen-delays-trinity-luxury-bev-to-2028

#### 18. The Ouster
- **Date:** Announced July 22, 2022; effective September 1, 2022
- **CEO:** Herbert Diess (outgoing) → Oliver Blume (incoming, while remaining Porsche CEO)
- **Situation:** Years of friction with the works council and supervisory board — over the pace and method of job cuts, software delays (Cariad, ID.3, Trinity), and Diess's blunt public style (including the "Ebit macht frei" episode) — culminate in the supervisory board deciding to remove him roughly a year before his contract was due to expire, despite his having pushed for an early extension.
- **Alternative paths:** (a) Extend Diess's contract and let him see the EV strategy through; (b) remove him but split Group CEO and VW-brand CEO duties further among internal candidates; (c) the path taken — replace him with Porsche CEO Oliver Blume, who would unusually retain the Porsche CEO title concurrently, with CFO Arno Antlitz elevated to COO.
- **What actually happened:** Diess's departure was announced July 22, 2022, effective Sept 1, 2022; Blume became Group CEO while remaining Porsche AG CEO. Coverage attributed the ouster primarily to "frequent clashes with the German manufacturer's powerful labor unions and other key stakeholders over a deeper strategic overhaul and cost cuts," compounded by Diess's tendency to "rub people up the wrong way."
- **Quote:** Reporting characterizes the central cause as repeated clashes "over a deeper strategic overhaul and cost cuts" with labor and supervisory-board stakeholders.
- **Source:** https://www.autonews.com/automakers-suppliers/vw-group-ceo-herbert-diess-leave-company-porsche-boss-oliver-blume-will-take/ ; https://techcrunch.com/2022/07/22/vw-group-ceo-herbert-diess-is-out/ ; https://newmobility.news/2022/07/26/vw-boss-diess-finally-ousted-his-successor-will-be-porsche-ceo-oliver-blume/

---

### ERA D — Blume, China, and the Cost Crisis (2022–2026)

#### 19. Running Two Companies at Once
- **Date:** September 1, 2022 (effective date of Blume's VW Group CEO appointment)
- **CEO:** Oliver Blume
- **Situation:** Unlike any prior VW Group CEO, Blume takes the top job while remaining concurrently CEO of Porsche AG (itself recently prepared for/undergoing IPO). Critics question whether one person can run both a freshly-public premium sports-car maker and the entire mass-market Group, especially one facing a software crisis and softening Chinese demand.
- **Alternative paths:** (a) Resign the Porsche CEO role to focus solely on VW Group; (b) appoint a strong, empowered deputy/COO to run day-to-day VW Group operations under Blume; (c) the path taken — keep both titles, with CFO Arno Antlitz elevated to Group COO to share the operational load.
- **What actually happened:** Blume retained both roles through the dossier's current date (June 2026), drawing periodic criticism about divided attention, particularly as VW Group's China and software problems deepened.
- **Quote:** Coverage at the time framed VW's "new CEO faces twin challenges of Porsche, software problems."
- **Source:** https://www.malaymail.com/news/money/2022/07/26/vws-new-ceo-faces-twin-challenges-of-porsche-software-problems/19496 ; https://www.marketscreener.com/news/porsche-ag-announces-ceo-changes-ce7d5adddc80f720

#### 20. Losing China
- **Date:** Ongoing 2023–2025; inflection point widely cited as 2024 when BYD overtook VW in China sales
- **CEO:** Oliver Blume
- **Situation:** China — VW's largest market for decades — shifts decisively toward homegrown, software-savvy EV brands (BYD, and later Geely) just as VW's own EV/software rollout (MEB, Cariad-based features) lags. VW's combined China JV market share falls from roughly 19% (2019) toward ~14.5% (2024) and lower; German brands collectively hold only around 5% share of China's NEV (new energy vehicle) segment by 2024.
- **Alternative paths:** (a) Double down on exporting VW's existing global EV platforms unchanged into China; (b) exit or shrink the China JV business to focus capital elsewhere; (c) the path taken — form new local partnerships, notably with Chinese EV maker XPeng, to co-develop China-specific EVs and software faster than VW's own systems could deliver.
- **What actually happened:** VW was overtaken by BYD in China sales in 2024, and slipped to third place behind fast-growing Geely by 2025. VW partnered with XPeng for EV platform/software technology to accelerate China-specific development. Blume publicly stated German carmakers could learn from China's "disciplined industrial planning," and VW said it would take until 2026 to begin regaining China share.
- **Quote:** Oliver Blume: German automakers could learn from China's "disciplined industrial planning" (paraphrased framing from interview coverage — exact verbatim wording not independently confirmed; treat exact phrasing as **UNVERIFIED**, though the substance is corroborated by multiple outlets).
- **Source:** https://fortune.com/europe/2024/04/22/byd-volkswagen-doubtful-investors-persuade-them-turnaround-plan-mercedes-benz-bmw/ ; https://www.marketscreener.com/news/volkswagen-drops-to-third-in-china-sales-as-fast-growing-geely-auto-overtakes-ce7e58dada80ff24

#### 21. The First Profit Warning
- **Date:** September 2024 (first); second profit warning September 30, 2024
- **CEO:** Oliver Blume
- **Situation:** VW brand's second-quarter 2024 earnings drop 68% year-on-year, with operating margin cratering to 0.9% (from 4% in Q1). Blume must decide how aggressively to signal the severity of the crisis to investors and the public — and how directly to put German factory jobs and plants on the table.
- **Alternative paths:** (a) Manage the message gradually with incremental guidance cuts; (b) immediately propose the most aggressive possible restructuring including plant closures; (c) issue a stark public warning while opening (initially informal) discussions about historic factory closures.
- **What actually happened:** VW issued its first profit warning in September 2024, then a second on September 30, 2024, as the company signaled it would consider closing domestic factories for the first time in company history and warned of a need to cut costs by roughly €10 billion at the VW brand by 2026.
- **Quote:** Financial press coverage cites VW brand's Q2 2024 operating margin falling to 0.9%, down from 4% in Q1 2024 — a load-bearing figure for the crisis narrative.
- **Source:** https://fortune.com/europe/2024/09/04/volkswagen-ceo-oliver-blume-factory-closures-germany-workers-labor-union-cost-cutting ; https://dc.fortune.com/europe/2024/09/30/volkswagen-second-profit-warning

#### 22. The Unthinkable Announcement
- **Date:** October 28, 2024
- **CEO:** Oliver Blume
- **Situation:** VW management formally proposes closing at least three German factories and cutting tens of thousands of jobs, plus a 10% pay cut for remaining staff — the first plant closures in the company's domestic history, and a direct challenge to the job-security agreements works council leaders had extracted from previous CEOs (Müller's 2016 deal, Diess's 2019 deal).
- **Alternative paths:** (a) Avoid closures entirely and rely solely on attrition/hiring freezes (works council's preferred floor); (b) close only non-German (e.g., other European) capacity instead; (c) the path taken — put closures of multiple German plants explicitly on the table as a opening negotiating position.
- **What actually happened:** VW announced it was considering closing "at least" three German plants. Works council chief Daniela Cavallo responded that this was "the plan of Germany's largest industrial group to start the sell-off in its home country," stating "All German VW plants are affected by this. None of them are safe!" and vowed the works council would "fight bitterly" against the proposals.
- **Quote:** Daniela Cavallo: "This is the plan of Germany's largest industrial group to start the sell-off in its home country. All German VW plants are affected by this. None of them are safe!"
- **Source:** https://www.cnn.com/2024/10/28/business/volkswagen-factory-closures-layoffs ; https://www.euronews.com/business/2024/10/28/volkswagen-set-to-close-three-german-plants-and-cut-thousands-of-jobs

#### 23. Workers Offer a Pay Cut to Save the Plants
- **Date:** November 2024
- **CEO:** Oliver Blume (management side); Daniela Cavallo (works council)
- **Situation:** With a strike threat looming (IG Metall said a strike was possible starting December 1, with "tens of thousands" of workers ready to act), the works council shifts from pure opposition to a counter-proposal: workers offer to accept real wage reductions themselves in exchange for ironclad guarantees that no German factory would close and no compulsory layoffs would occur.
- **Alternative paths:** (a) Reject the counter-offer and hold firm on closures; (b) accept the counter-offer at face value immediately; (c) continue negotiating on the specific savings number and time horizon.
- **What actually happened:** The works council proposed cutting labor expenses by €1.5 billion in exchange for guarantees that all German factories stay open and jobs are secured — a major concession from labor that reframed the negotiation away from closures and toward a pay/cost compromise.
- **Quote:** IG Metall stated "tens of thousands" of workers were "ready to express their dissatisfaction with management" if talks failed.
- **Source:** https://www.euronews.com/business/2024/11/21/volkswagen-workers-offer-to-take-pay-cut-as-wage-talks-continue ; https://www.nbcnews.com/business/business-news/volkswagen-braces-showdown-unions-warning-possible-german-plant-closur-rcna169389

#### 24. The 70-Hour Deal
- **Date:** Agreement reached December 20, 2024 (after roughly 70 hours of continuous talks)
- **CEO:** Oliver Blume
- **Situation:** With a strike deadline bearing down, management and IG Metall/the works council enter a marathon final negotiating session to settle the future of VW's German manufacturing footprint, headcount, and wage structure for the rest of the decade.
- **Alternative paths:** (a) Let talks fail and proceed toward closures/a strike, accepting massive near-term disruption; (b) management capitulates entirely to the works council's earlier "keep every plant open, no cuts" position; (c) the negotiated middle path actually reached.
- **What actually happened:** After more than 70 hours of talks, VW agreed to keep all 10 German factories open and guarantee jobs through the end of 2030, while the two sides agreed to cut more than 35,000 jobs across Germany "in a socially responsible manner" (i.e., via attrition, early retirement, and voluntary buyouts rather than forced layoffs) by 2030, saving roughly €15 billion. A previously agreed 5% wage increase was suspended for 2025 and 2026, and the number of apprenticeships offered annually in Germany was cut from 1,400 to 600 starting 2026.
- **Quote:** IG Metall and works council statements characterized the outcome as avoiding compulsory layoffs and plant closures while still delivering "billions in wage reductions" and the largest job-cut figure in VW's history; one outlet described it as marking a "new era" in VW's German social policy.
- **Source:** https://feeds.bbci.co.uk/news/articles/cje9kv3q94po ; https://www.euronews.com/2024/12/20/union-reaches-agreement-with-volkswagen-to-avoid-plant-closures ; https://www.wsws.org/en/articles/2024/12/21/zscx-d21.html ; https://www.wsws.org/en/articles/2024/12/14/owde-d14.html

#### 25. Doubling Down on Cuts (the crisis continues)
- **Date:** Reports through early 2026 (e.g., February/March 2026 coverage)
- **CEO:** Oliver Blume
- **Situation:** Despite the December 2024 deal, VW brand reportedly continues to struggle to hit its €10 billion cost-cutting target (described in Handelsblatt-sourced reporting as running billions of euros short), forcing management to consider deepening cuts even further, including reports the job-cut target could be raised toward 50,000 amid a "deepening" cost crisis.
- **Alternative paths:** (a) Hold the line at the December 2024 deal's terms and absorb the shortfall through other means (capital raises, brand-level cuts elsewhere); (b) reopen negotiations with labor for an even larger cut; (c) extend timelines/targets rather than deepen them.
- **What actually happened (most recent verifiable reporting):** Coverage from 2026 describes VW raising its job-cut target toward 50,000 as the cost crisis deepens, and the VW passenger-car brand struggling to hit its original cost-cutting goal, per Handelsblatt-sourced reporting. **Note:** because this extends to the game's "through 2026" boundary and beyond typical pre-2026 verification, treat the precise 50,000 figure and exact 2026 dates as provisional — corroborate against the most current reporting before finalizing as a `hist:` fact, since this is very recent/ongoing news at time of writing.
- **Quote:** Handelsblatt-sourced reporting (via Investing.com) describes the VW passenger-car brand as "struggling to hit its cost-cutting goal."
- **Source:** https://www.malaymail.com/amp/news/money/2026/03/10/europes-biggest-carmaker-vw-raises-job-cut-target-to-50000-as-cost-crisis-deepens/212093 ; https://investing.com/news/stock-market-news/volkswagen-passenger-cars-brand-struggles-to-hit-costcutting-goal-says-handelsblatt-3590175 ; https://www.electrive.com/2026/02/17/vw-aims-to-cut-costs-even-further/

---

## Notes on Gaps / Unverifiable Claims (do not write into final game data without further checking)

- No verbatim, primary-sourced Winterkorn quote was found for the original 2007 Strategy 2018 unveiling itself (only paraphrased framing in retrospectives).
- No primary-sourced internal quote was found documenting the specific moment/individual who ordered the EA189 defeat device's creation — this remains genuinely murky even in court records reviewed via secondary sources; treat any single "smoking gun" quote as fictionalized/dramatized unless a primary court document is cited.
- Matthias Müller's exact words upon becoming CEO (Sept 25, 2015) were not found in the sources gathered here.
- The specific phrase "declaration of war" regarding the October 2024 closures appears to be commentary/framing rather than a verified direct Cavallo quote — use her verified quote ("All German VW plants are affected... None of them are safe!") instead.
- Oliver Blume's "disciplined industrial planning" quote about China is corroborated in substance by multiple outlets but exact verbatim wording should be re-verified against a primary transcript/interview before use as a direct quote.
- The most recent items (Era D, #25, 2026 cost-crisis escalation and the 50,000 job-cut figure) are very recent/ongoing reporting near the dossier's research cutoff — figures should be re-confirmed against the latest reporting before being locked into final game data, since these numbers were still moving at time of writing.
- Total Dieselgate cost: commonly cited aggregate figures (~$33B, ~€30B+) are consistent across sources for the global total through ~2020, combining the $14.7B 2.0L US consumer/environmental settlement, the $2.8B US criminal penalty, additional 3.0L settlements, the €1B German fine, and various smaller settlements (e.g., the ~€750M German civil settlement in 2020) — but no single authoritative source enumerates one final, complete global total; treat ~$33B as a reasonable, multiply-corroborated approximation rather than an exact audited figure.
