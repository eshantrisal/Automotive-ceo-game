DATA.bmw = {
 name:"BMW Group", short:"BMW", logo:"◎", theme:"theme-bmw", ipo:32,
 pitch:"A 110-year-old Bavarian engineering house that prizes margin discipline above all else — until it doesn't, and bets billions of Deutschmarks (then euros) on the future of mobility instead.",
 kpis:[
  {key:"margin", label:"EBIT Margin", desc:"Profitability against BMW's self-imposed 8–10% automotive EBIT band. Hit zero and the board calls in a receiver."},
  {key:"brand", label:"Driving Pleasure", desc:"\"Freude am Fahren\" brand equity — the engineering purity and prestige BMW trades on. Lose it and you're an expensive Volkswagen."},
  {key:"future", label:"Tech Openness", desc:"Whether BMW is ahead of or behind the next powertrain transition versus Tesla, Mercedes and Chinese EV makers."}
 ],
 ticker:"BMW",
 bankruptcy:"The Quandt family's century-long stewardship ends in a forced sale. Munich's four-cylinder tower is sold off floor by floor, and the Ultimate Driving Machine becomes a case study in a business school's chapter on hubris.",
 legendary:"You proved a century-old engineering house could place billion-euro bets on the future without ever betting the whole company — and that \"Freude am Fahren\" survives the transition from pistons to electrons intact.",
 eras:{
  a:{
   name:"The Rover Gamble & The Premium Comeback", years:"1994–2001", start:{margin:45, brand:60, future:35}, stock0:8,
   intro:"January 1994. BMW has just outbid Honda for the Rover Group — Land Rover, Mini, MG, Triumph badges and all — chasing the volume scale a pure-premium carmaker has always lacked. Nobody in Munich yet knows they have just bought a decade-long financial sinkhole that insiders will quietly nickname \"The English Patient.\"",
   scenarios:[
    {id:"rover_buy", year:"JAN 1994", title:"The Rover Gamble", text:"British Aerospace has put the Rover Group up for sale — a tired British carmaker plus the prizes of Land Rover and Mini, plus aging UK factories. BMW wants scale and a UK manufacturing foothold. A rival Honda-led bid is also on the table.",
     voice:"Industry shorthand for what comes next: \"The English Patient.\"",
     choices:[
      {label:"Buy an 80% controlling stake in Rover Group outright", fx:{margin:-12,brand:+5,future:+5}, set:["rover"],
       result:"BMW pays roughly £800 million for control of Rover, Land Rover and Mini. The deal is hailed as bold industrial strategy. It will not stay hailed for long.",
       hist:"Real: BMW bought an 80% stake in Rover for ~£800m (~$1.2bn) in January 1994."},
      {label:"Deepen the existing Rover-Honda technology partnership instead, without buying equity", fx:{margin:+4,future:-3},
       result:"Cheaper, safer, and slower. BMW stays a pure-premium engineering house with no UK factories of its own — and no Mini, either."},
      {label:"Walk away entirely and stay organic-growth-only", fx:{margin:+6,brand:+2},
       result:"Discipline preserved. BMW remains small and profitable, and watches Mercedes and Audi chase scale without it."}
     ]},
    {id:"rover_breakup", year:"MAR 2000", title:"The Rover Breakup", cond:"rover", text:"By 1999, Rover passenger cars are reportedly losing roughly £2 million a day. The board concludes BMW cannot keep funding the loss-maker without risking the core BMW brand's own finances. Pischetsrieder has already been forced out as the crisis peaked.",
     choices:[
      {label:"Break up the group: give away Rover/Longbridge, sell Land Rover to Ford, keep only Mini", fx:{margin:+15,brand:+5}, set:["minisaved"],
       result:"The Phoenix Consortium takes MG, Rover and Longbridge for a symbolic £10. Land Rover goes to Ford for about £1.8 billion. BMW keeps the one part of the wreckage worth keeping.",
       hist:"Real: BMW broke up Rover Group in March 2000 — Phoenix Consortium got Rover/Longbridge for £10, Ford bought Land Rover for ~£1.8bn, BMW kept Mini."},
      {label:"Keep funding Rover indefinitely, betting the new Rover 75 turns it around", fx:{margin:-18,brand:-8},
       result:"The losses compound. BMW's own balance sheet starts to look fragile, and the supervisory board's patience runs out faster than the turnaround plan."},
      {label:"Sell the whole group in one block to a single buyer", fx:{margin:+8,brand:-5},
       result:"Tidier on paper. But selling Land Rover and Mini together to one buyer means BMW also gives away the only asset that was ever going to be worth anything."}
     ]},
    {id:"new_mini", year:"JUL 2001", title:"Reinventing the Mini", cond:"minisaved", text:"Having kept only the Mini brand from the Rover wreckage, Pischetsrieder's successor Joachim Milberg must decide how faithfully to reinterpret a 1959 British design icon for a modern, safety-regulated, BMW-engineered car — a project already underway since 1995.",
     choices:[
      {label:"Launch a thoroughly modern, BMW-engineered premium small car with strong styling continuity to the original", fx:{margin:+10,brand:+15,future:+5}, set:["mini_hit"],
       result:"The new Mini Hatch launches in July 2001 to immediate sales success in Europe and the US. Alongside Rolls-Royce, it becomes one of BMW Group's two genuine non-BMW-badge pillars.",
       hist:"Real: BMW launched the new Mini Hatch in July 2001; it was an immediate commercial success."},
      {label:"Build a nostalgic, low-volume retro reproduction instead", fx:{margin:-4,brand:+3},
       result:"Charming and niche. Collectors love it; it never becomes a real volume brand."},
      {label:"Abandon the Mini brand and absorb its IP into BMW's own small-car plans", fx:{margin:+2,brand:-6},
       result:"The Rover deal's one survivable prize quietly disappears into BMW's parts bin. Nobody outside Munich ever notices Mini existed."}
     ]},
    {id:"rolls_bid", year:"1998", title:"The Vickers Bidding War", text:"Vickers plc puts Rolls-Royce Motor Cars and Bentley up for sale as one unit. BMW, which already supplies Rolls-Royce engines, and Volkswagen both want it.",
     choices:[
      {label:"Let VW win the car business, but separately secure the Rolls-Royce brand name and badge from Rolls-Royce plc (the aerospace company)", fx:{margin:+6,brand:+12,future:+3}, set:["rr_name"],
       result:"A unique split outcome: Volkswagen gets the factory and keeps Bentley, while BMW gets the Rolls-Royce brand itself starting January 2003 — eventually becoming sole owner of new Rolls-Royce Motor Cars at Goodwood.",
       hist:"Real: VW won the Vickers car business, but BMW separately secured Rolls-Royce naming rights from Rolls-Royce plc, taking over the brand from 2003."},
      {label:"Outbid Volkswagen for the whole Vickers package", fx:{margin:-10,brand:+5},
       result:"An expensive, blunt-force win. BMW now owns Bentley too — a brand with an overlapping customer base and a factory it didn't especially want."},
      {label:"Walk away from the bidding war entirely", fx:{brand:-4},
       result:"BMW keeps its checkbook closed. Volkswagen ends up with both storied British marques, and BMW's halo ambitions go quiet for a few more years."}
     ]},
    {id:"quandt", year:"DEC 1959", title:"The Near-Sale to Daimler-Benz", text:"Decades before the Rover saga, BMW nearly ceased to exist: at a board meeting on 9 December 1959, a sale of the whole company to Daimler-Benz had almost been approved. Industrialist Herbert Quandt, originally inclined to support the sale, is reconsidering under pressure from BMW's own workforce.",
     voice:"A near-miss that still defines who controls BMW today.",
     choices:[
      {label:"Quandt increases his personal stake from roughly 30% to 50%, taking control and risking his own fortune", fx:{margin:+10,brand:+8}, set:["quandt_save"],
       result:"BMW survives as an independent company. The Quandt family bloc remains BMW's controlling shareholder to this day, and the BMW 1500 (1962) creates the compact luxury sedan segment BMW still leads.",
       hist:"Real: Herbert Quandt changed his mind under union pressure and raised his BMW stake to roughly 50%, saving the company's independence."},
      {label:"Approve the Daimler-Benz takeover and end BMW's independence", fx:{margin:+15,brand:-20},
       result:"BMW becomes a Daimler subsidiary. The badge survives; the company that bears it does not, not really. There is no \"Ultimate Driving Machine\" left to build."},
      {label:"Seek a different rescuing investor instead of Quandt", fx:{margin:-5,brand:-3},
       result:"A scramble for an alternative backer eats precious months. BMW survives, barely, under terms far less favorable than the ones on the table in December."}
     ]}
   ]
  },
  b:{
   name:"Strategy Number ONE & the BMW i Gamble", years:"2006–2015", start:{margin:50, brand:62, future:38}, deep:true, stock0:30,
   intro:"September 2006. Norbert Reithofer takes the chair with BMW's automotive EBIT margin sitting at a merely respectable 6.4% — and no published long-term roadmap to point to. Over the next decade he will rebuild group profitability through a publicly-announced target called Strategy Number ONE, survive a global financial crisis, and then gamble billions on an idea most of the industry thinks is insane: a carbon-fiber electric sub-brand built from a clean sheet. Every choice here compounds for fifteen years.",
   scenarios:[
    {id:"strategy_one", year:"SEP 2006", title:"Strategy Number ONE", text:"BMW's automotive EBIT margin sits around 6.4% — respectable, but below where Reithofer believes a true premium leader should sit, and BMW lacks a long-term published roadmap the company can be held to.",
     voice:"Reithofer's mandate: a vision of BMW as the leading provider of premium products and services for individual mobility by 2020.",
     choices:[
      {label:"Set an aggressive, publicly-announced 8–10% EBIT margin target with 2012/2016/2020 milestones", fx:{margin:+12,brand:+5}, set:["strategy1"],
       result:"Strategy Number ONE is born. By 2012, automotive EBIT margin reaches 10.9% and group profit before tax roughly doubles from 2007 — BMW's own messaging calls every intermediate goal \"fully achieved.\"",
       hist:"Real: Reithofer launched Strategy Number ONE in 2006, targeting 8–10% automotive EBIT margin; by 2012 margin hit 10.9%."},
      {label:"Continue incremental, model-by-model management with no headline target", fx:{margin:+3},
       result:"Steady, unglamorous, and unaccountable. Without a number to be measured against, BMW drifts rather than sprints."},
      {label:"Focus purely on volume growth and worry about margin later", fx:{margin:-6,brand:-3},
       result:"Sales climb. Profitability does not follow proportionally, and the board starts asking uncomfortable questions about discipline."}
     ]},
    {id:"crisis08", year:"LATE 2008", title:"Riding Out the Financial Crisis", text:"The global financial crisis crushes premium-car demand just as Strategy Number ONE gets underway. BMW posts a 2009 Automobiles-segment EBIT loss of roughly €265 million, even as the wider Group narrowly stays in the black overall.",
     alt:[{if:"strategy1", text:"The global financial crisis crushes demand just as Strategy Number ONE's first milestones come due. BMW posts a 2009 Automobiles-segment EBIT loss of roughly €265 million — an early, brutal test of whether a publicly-announced target survives contact with a recession."}],
     choices:[
      {label:"Take a personal pay cut (~39.5%) and lean on flexible short-time work schemes rather than mass layoffs", fx:{margin:+6,brand:+10}, set:["flex_crisis"],
       result:"Reithofer's salary falls to about €2.3 million. BMW avoids a full-company net loss in 2009 and emerges from the crisis faster than most rivals, helped by China's rapid recovery.",
       hist:"Real: Reithofer took a ~39.5% pay cut and BMW relied on short-time work rather than mass layoffs through the 2008–09 crisis."},
      {label:"Deep workforce cuts and plant closures to protect margin immediately", fx:{margin:+10,brand:-12},
       result:"The balance sheet looks better on paper. The workforce, and the unions, remember exactly who blinked first when things got hard."},
      {label:"Cut executive pay symbolically while protecting the broader workforce, but make no operational changes", fx:{margin:-8,brand:+4},
       result:"A goodwill gesture without a strategy behind it. The segment loss deepens before the wider recovery finally arrives."}
     ]},
    {id:"project_i", year:"FEB 2011", title:"Greenlighting Project i", text:"Reithofer's team concludes megacity electromobility is coming and that BMW cannot simply bolt batteries into an existing combustion platform — it needs a purpose-built lightweight architecture. The proposal: an entirely new sub-brand, BMW i, built around carbon-fiber-reinforced plastic (CFRP) bodies, a material never before used at automotive mass-production scale.",
     voice:"Reithofer, at the i3/i8 concept unveiling: \"[The i3 and i8] mark a milestone in the history of the company... sustainability across the entire value-added chain.\"",
     choices:[
      {label:"Create BMW i as announced — ground-up carbon-fiber EV architecture, a dedicated brand, new CFRP joint venture with SGL Group", fx:{margin:-15,future:+22}, set:["project_i"],
       result:"BMW sets up SGL Automotive Carbon Fibers and builds new CFRP plants in Moses Lake, Washington and Leipzig, Germany — roughly €400 million earmarked for facilities by 2013, about 800 new jobs in Leipzig alone.",
       hist:"Real: BMW announced the \"i\" sub-brand in February 2011 and built dedicated CFRP production facilities with SGL Group in Moses Lake and Leipzig."},
      {label:"Electrify existing 1-Series/3-Series platforms with batteries bolted into combustion architectures — the cheaper, conventional path", fx:{margin:+5,future:-8},
       result:"Far less expensive, far less radical. BMW gets EV-adjacent products quickly, but builds nothing that fundamentally differentiates it from rivals doing the same thing."},
      {label:"Wait and let Tesla and others prove the EV market before committing serious capital", fx:{margin:+8,future:-15},
       result:"Cautious and cash-preserving. By the time BMW is ready to commit, the carbon-fiber-architecture window — and the first-mover credibility that came with it — has closed."}
     ]},
    {id:"power_of_choice", year:"2011–2013", title:"\"Power of Choice\": Rejecting a Dedicated EV Platform", text:"Even as BMW commits hugely to the i3/i8 carbon-fiber program, the mainstream model range (3-Series, 5-Series, X-line) faces a separate platform question: build one shared, flexible architecture able to take combustion, plug-in hybrid and electric variants — or follow Tesla's logic of dedicated, EV-only platforms optimized purely around the battery pack?",
     alt:[{if:"project_i", text:"Even with BMW i's carbon-fiber halo already greenlit, the mainstream range needs its own platform answer. Having just spent billions proving a ground-up EV architecture works for a niche city car, does BMW now do the same for 3-Series and 5-Series volume — or hedge?"}],
     choices:[
      {label:"Commit the mainstream range to flexible, multi-powertrain shared architecture (CLAR, \"Power of Choice\"), keep i3/i8 as a standalone halo", fx:{margin:+14,future:-6}, set:["power_of_choice"],
       result:"BMW builds combustion, PHEV and BEV variants of the same model on one assembly line at lower fixed cost. The trade-off: BMW's later mainstream EVs (i4, iX) will be combustion-derived adaptations rather than ground-up designs — a hedge BMW won't fully reverse for over a decade.",
       hist:"Real: BMW chose flexible CLAR-based \"Power of Choice\" architecture for its mainstream range, explicitly declining a Tesla-style dedicated EV platform."},
      {label:"Split development into separate dedicated-EV and dedicated-combustion platforms, accepting higher R&D cost for better EV packaging", fx:{margin:-14,future:+15},
       result:"Bold, and very expensive. BMW now runs two parallel platform programs at a moment when Project i is already straining engineering capacity."},
      {label:"Do nothing different yet — extend the existing combustion platforms one more generation and revisit later", fx:{margin:+5,future:-10},
       result:"The cheapest option today becomes the most expensive option in 2019, when BMW's mainstream EVs visibly lag ground-up rivals."}
     ]},
    {id:"i3_launch", year:"JUL–NOV 2013", title:"Unveiling and Pricing the i3", cond:"project_i", text:"After roughly six years of gestation, the production i3 — the first premium car purpose-designed from a clean sheet as an all-electric vehicle — is ready. BMW must decide how to position and price a radically different-looking, carbon-fiber city car against both luxury-brand expectations and a still-nascent EV market.",
     voice:"Reithofer, at the New York world premiere: \"Innovation drives change. The i3 is more than just a car. It's a revolutionary step towards sustainable mobility.\"",
     choices:[
      {label:"Stage a simultaneous three-city world premiere (London, New York, Beijing) and price it as a premium halo product reflecting true cost (€34,950)", fx:{margin:+4,brand:+12,future:+8}, set:["i3_real_price"],
       result:"Six BMW board members unveil the car at once. Over 90,000 test-drive requests pour in. European deliveries begin November 2013 — but the i3 sells only about 250,000 units over nine years, respectable but far short of mass-market scale.",
       hist:"Real: BMW unveiled the i3 simultaneously in London, New York and Beijing on 29 July 2013 at a German base price of €34,950."},
      {label:"Subsidize the price below true production cost to drive volume and prove the EV thesis", fx:{margin:-15,future:+10},
       result:"Volume ticks up. So does the bleeding — every i3 sold loses more money than the last, and finance starts asking how long this can go on."},
      {label:"Launch only in test markets before a global rollout", fx:{brand:-3,future:+2},
       result:"Cautious and slow. By the time BMW commits to a global launch, some of the novelty — and the press cycle — has already moved on to rivals."}
     ]},
    {id:"i8_launch", year:"AUG 2014", title:"Launching the i8 Plug-In Hybrid Supercar", cond:"project_i", text:"Alongside the i3, BMW's carbon-fiber program also produces a halo sports car: the i8, a plug-in hybrid combining a 1.5-liter 3-cylinder turbo engine with an electric motor, intended to prove electrification could be thrilling, not just dutiful.",
     choices:[
      {label:"Position the i8 as a low-volume, ultra-premium halo car via a costly \"Pure Impulse World\" launch package, accepting it will never be a profit center", fx:{margin:-6,brand:+15,future:+6}, set:["i8_halo"],
       result:"Launched in the US on 17 August 2014 at $135,700, 0–60 in 3.8 seconds. Reviewers love it; lifetime sales settle around 20,000 units. Combined i3+i8 R&D divided by cars sold is estimated by industry commentary at roughly $11,000 per car — an estimate, not an audited BMW figure.",
       hist:"Real: BMW launched the i8 in the US in August 2014 at $135,700; lifetime sales were roughly 20,000 units."},
      {label:"Attempt higher-volume production to amortize the immense carbon-fiber tooling cost", fx:{margin:-10,future:+4},
       result:"The tooling math never quite works at higher volumes either — carbon fiber doesn't scale the way BMW hoped, and the cost-per-car barely improves."},
      {label:"Cancel the sports-car half of Project i and fund only the i3", fx:{margin:+5,brand:-8},
       result:"A cheaper, less audacious program. BMW loses the design-and-engineering halo the i8 would have provided, and Project i looks smaller in hindsight than it was meant to be."}
     ]},
    {id:"succession_b", year:"MAY 2015", title:"Choosing Reithofer's Successor", text:"With Strategy Number ONE's 2012 milestones hit and the i3/i8 launched, Reithofer — BMW's longest-serving modern-era CEO — moves up to chair the Supervisory Board. The Board must choose a successor to own both consolidating Project i's gains and answering what comes after the carbon-fiber experiment.",
     choices:[
      {label:"Promote Harald Krüger, BMW veteran and head of the global production network", fx:{margin:+2}, set:["kruger_ceo"],
       result:"Krüger becomes Chairman of the Board of Management in May 2015 — an engineering-and-production-track insider. His first major public moment will arrive within months, at the worst possible time.",
       hist:"Real: Harald Krüger, who had run BMW's global production, became Chairman of the Board of Management in May 2015."},
      {label:"Hire an external executive to bring outside disruption-era thinking", fx:{margin:-5,future:+5},
       result:"A clean break, in theory. In practice, an outsider spends a year learning Munich's culture before being able to act on any of that outside thinking."},
      {label:"Promote a sales-and-marketing-track insider instead", fx:{brand:+5,future:-3},
       result:"Strong on customer-facing instincts, lighter on the manufacturing realities of scaling Project i's lessons across the rest of the range."}
     ]}
   ]
  },
  c:{
   name:"The Krüger Stall & the China Pivot", years:"2015–2019", start:{margin:58, brand:64, future:34}, stock0:55,
   intro:"Harald Krüger inherits a company at its profitability peak, but a brand-new electric sub-brand that isn't scaling into mass-market volume. His tenure becomes synonymous, fairly or not, with caution read as paralysis — even as BMW quietly executes one of its most important real strategic moves of the decade in China.",
   scenarios:[
    {id:"frankfurt_collapse", year:"15 SEP 2015", title:"The Frankfurt Collapse", text:"At his very first IAA Frankfurt Motor Show press conference as new CEO, only minutes into his presentation, Krüger had been traveling heavily and was feeling unwell beforehand.",
     cond:"kruger_ceo",
     choices:[
      {label:"Proceed with the press conference as scheduled rather than signal weakness", fx:{brand:-8}, set:["frankfurt_fell"],
       result:"Krüger collapses roughly five minutes in, is examined by a doctor on-site, and the day's remaining appointments are cancelled. BMW's statement cites \"a moment of dizziness\"; a spokesman says doctors \"ruled out anything serious.\" The incident becomes a much-replayed symbol that dogs perceptions of his leadership for years, fairly or not.",
       hist:"Real: Krüger collapsed about five minutes into his first IAA Frankfurt press conference as CEO, on 15 September 2015."},
      {label:"Postpone or hand off the presentation given he feels unwell", fx:{brand:+3},
       result:"A quieter, less dramatic start to the tenure. No viral moment — and no sympathy narrative either, for better or worse."},
      {label:"Shorten the appearance to reduce strain without cancelling entirely", fx:{brand:-2},
       result:"A middle path. It doesn't prevent what happens next, only delays it by a few minutes."}
     ]},
    {id:"flexible_hold", year:"2016–2018", title:"Holding the Flexible-Architecture Line", text:"Mercedes-Benz launches its EQ sub-brand and a CASE strategy in 2016; Tesla's Model 3 reservations hit 400,000+ in weeks; Volkswagen, reeling from Dieselgate, announces sweeping all-electric pledges. Krüger's BMW continues defending flexible/shared architecture and a plug-in-hybrid-led approach rather than declaring a hard all-electric pivot.",
     alt:[{if:"frankfurt_fell", text:"Still trailed by the Frankfurt symbol, Krüger now faces a substantive test: Mercedes and VW are making loud all-electric pledges. Holding BMW's flexible-architecture line risks reading as more evidence of a leader who hesitates rather than commits."}],
     choices:[
      {label:"Hold the flexible-architecture line, expand plug-in hybrids across the range (\"iPerformance\"), argue nobody yet knows which powertrain wins", fx:{margin:+8,future:-10}, set:["flex_held"],
       result:"A BMW development chief makes no apologies for the cautious approach at the time. With hindsight, Bloomberg's 2019 reporting concludes the slow EV transition cost BMW ground versus Mercedes and Tesla — and becomes a central reason cited for Krüger's eventual ouster.",
       hist:"Real: BMW held its flexible-architecture position through 2016–2018; Bloomberg later cited the slow EV transition as central to Krüger's exit."},
      {label:"Match rivals with a public all-electric-by-[year] pledge", fx:{margin:-10,future:+12},
       result:"A bold reversal of BMW's long-standing doctrine. It buys headline parity with Mercedes and VW — and a credibility problem when the actual products aren't ready to back it up."},
      {label:"Accelerate a second, more mass-market dedicated EV architecture beyond i3/i8 immediately", fx:{margin:-12,future:+8},
       result:"The right instinct, years too early to execute well. The mass-market dedicated platform BMW eventually builds — Neue Klasse — is still a decade away."}
     ]},
    {id:"china_jv", year:"OCT 2018", title:"Deepening the China Bet", text:"China is BMW's largest single market, but the BMW Brilliance Automotive (BBA) joint-venture structure caps BMW at 50%, splitting profits and control with local partner Brilliance. Beijing is signaling it will relax foreign-ownership caps in the auto sector.",
     voice:"Krüger, in the BMW announcement: \"Success story goes hand in hand with BBA.\"",
     choices:[
      {label:"Negotiate an early extension of the BBA contract to 2040, invest over €3 billion in new capacity, and pre-commit to a future 75% stake once regulations allow", fx:{margin:+14,future:+8}, set:["china_committed"],
       result:"Total BBA production capacity rises to 650,000 units/year, roughly 5,000 new China jobs follow. This 2018 agreement is what makes the actual 75% stake increase possible in 2022 — widely regarded as one of Krüger's clearest strategic wins, even amid criticism of his EV caution.",
       hist:"Real: BMW announced the BBA joint-venture extension to 2040 and pre-commitment to a future 75% stake in October 2018."},
      {label:"Wait and see how foreign-ownership liberalization actually plays out before committing capital", fx:{margin:+3,future:-5},
       result:"Cautious, and costly in hindsight — competitors who commit early lock in capacity and goodwill BMW will have to fight to match later."},
      {label:"Seek a different, friendlier joint-venture partner instead of deepening with Brilliance", fx:{margin:-6,future:-3},
       result:"A protracted, expensive distraction. Years are lost to a partner search that ultimately goes nowhere, while Brilliance's relationship with BMW cools."}
     ]},
    {id:"diesel_recall", year:"FEB 2018", title:"The Diesel Software Recall", text:"In the shadow of Volkswagen's Dieselgate scandal, BMW's own internal testing turns up a problem: incorrect engine-control software was installed on a small number of diesel 5-Series and 7-Series models, raising the specter of a second German emissions scandal.",
     choices:[
      {label:"Disclose the issue proactively, characterize it as a \"manual, human mistake,\" and cooperate with KBA's recall", fx:{margin:-3,brand:+8}, set:["diesel_clean"],
       result:"Germany's KBA orders a recall of roughly 11,700–12,000 affected vehicles. BMW maintains — and the record supports — that this was not a Dieselgate-style intentional defeat device. The recall is contained; BMW avoids the multi-billion-dollar fines that hit Volkswagen.",
       hist:"Real: BMW disclosed the software error itself in February 2018; the KBA ordered a recall of roughly 11,700–12,000 vehicles."},
      {label:"Quietly correct the software without public disclosure", fx:{margin:+2,brand:-10},
       result:"It works for a while. Then a journalist finds the service bulletin, and \"BMW hid an emissions defect\" runs as a headline regardless of the underlying facts."},
      {label:"Contest that the error was meaningful at all", fx:{margin:+4,brand:-15},
       result:"Regulators do not appreciate being told their findings don't matter. The dispute drags on far longer, and far more publicly, than the actual defect ever warranted."}
     ]},
    {id:"kruger_exit", year:"5 JUL 2019", title:"Krüger Will Not Seek a Second Term", text:"With BMW's profits under pressure, an electrification roadmap widely seen as too tentative, and — fairly or not — the 2015 collapse incident as a lingering symbol, Krüger's contract comes up for renewal review by the Supervisory Board.",
     alt:[{if:"flex_held", text:"With Bloomberg and Automotive News Europe now openly framing BMW's slow EV transition as a strategic failure, and Krüger's contract up for renewal, the Supervisory Board's patience is visibly thinning."}],
     voice:"Reithofer, BMW's official statement: \"[Reithofer] has complete respect and understanding for [Krüger's] decision.\"",
     choices:[
      {label:"Inform the Supervisory Board he will not seek a second term, framing it as pursuing new opportunities after 27+ years at BMW", fx:{brand:+5}, set:["kruger_graceful"],
       result:"On 5 July 2019, Krüger tells Reithofer he won't seek renewal. Contemporary financial press explicitly frames the exit as driven by BMW's slow EV transition and falling profits — even though Krüger's own statement cites wanting new opportunities.",
       hist:"Real: Krüger informed the Supervisory Board on 5 July 2019 that he would not seek a second term; his successor was addressed at the 18 July 2019 board meeting."},
      {label:"Fight for a second term despite the criticism", fx:{margin:-8,brand:-10},
       result:"A bruising, public fight he ultimately loses anyway — the worst of both outcomes: the exit happens regardless, just messier and later."},
      {label:"Negotiate an early, abrupt exit rather than seeing out the contract review", fx:{brand:-4},
       result:"Faster, but it leaves the succession planning rushed and the narrative of crisis-driven departure even harder to manage."}
     ]}
   ]
  },
  d:{
   name:"Technology Openness Vindicated, Then Tested", years:"2019–2026", start:{margin:62, brand:66, future:40}, stock0:75,
   intro:"August 2019. Oliver Zipse, BMW's sitting production board member, inherits the \"flexible architecture is a weakness\" narrative — and spends his tenure converting it into \"technology openness is a strength.\" He will authorize BMW's largest-ever single capital commitment to a genuinely EV-dedicated platform, ride out a pandemic, and watch China turn from BMW's greatest asset into its biggest headache, all while refusing to copy rivals' all-electric pledges.",
   scenarios:[
    {id:"zipse_appoint", year:"AUG 2019", title:"Appointing Oliver Zipse", text:"The Supervisory Board, meeting in Spartanburg, South Carolina, must choose a successor capable of fixing the EV-perception problem without abandoning BMW's flexible-architecture instincts.",
     choices:[
      {label:"Appoint Oliver Zipse, BMW's sitting production board member since 2015", fx:{margin:+3}, set:["zipse_ceo"],
       result:"Zipse becomes Chairman of the Board of Management effective 16 August 2019 — a manufacturing-and-efficiency-focused executive who will spend his tenure reframing BMW's caution as deliberate, vindicated strategy.",
       hist:"Real: the Supervisory Board appointed Oliver Zipse as Chairman, effective 16 August 2019."},
      {label:"Hire an outside executive to signal a clean break from the Krüger era", fx:{margin:-5,future:+4},
       result:"A signal of change, at the cost of a year spent learning Munich's culture instead of acting on it."},
      {label:"Promote a sales-and-marketing leader instead", fx:{brand:+4,future:-3},
       result:"Strong on customer perception, lighter on the manufacturing discipline the looming Neue Klasse build-out will require."}
     ]},
    {id:"covid_response", year:"MAR–APR 2020", title:"COVID-19 — Shutting Plants, Protecting Cash", cond:"zipse_ceo", text:"The pandemic forces BMW to halt European and South African production. Tens of thousands of workers go onto government-backed short-time work schemes. The board must decide how to balance shareholder returns against crisis cash preservation, and what to do with idled factories.",
     voice:"Oliver Zipse: BMW was \"not in collective 'hibernation'\" during the shutdown.",
     choices:[
      {label:"Cut the dividend from €3.50 to €2.50/share, and use Munich plant downtime to begin converting the line for i4 production", fx:{margin:+10,future:+8}, set:["covid_pivot"],
       result:"BMW halts production until 19 April 2020; roughly 20,000–30,000+ German employees go on short-time work, topped up to 93% of normal pay. The forced shutdown becomes a head start for the 2021 i4 launch.",
       hist:"Real: BMW cut its dividend from €3.50 to €2.50/share and used Munich downtime to begin converting the plant for i4 production starting 2021."},
      {label:"Maintain the prior year's dividend to reassure markets", fx:{margin:-12},
       result:"Markets are briefly reassured. The cash burn during a global production halt makes the decision look reckless within two quarters."},
      {label:"Use the downtime purely for maintenance, not future-product prep", fx:{margin:+4,future:-6},
       result:"A missed opportunity — idle factory time that could have shortened the i4 timeline is instead spent on routine upkeep."}
     ]},
    {id:"china_majority", year:"11 FEB 2022", title:"Taking 75% Control of BMW Brilliance", cond:"china_committed", text:"Building on Krüger's 2018 agreement, China's foreign-ownership rules in autos finally relax enough to let BMW exercise its option to move from a 50/50 joint venture to majority control of BMW Brilliance Automotive (BBA) — at a politically sensitive moment for foreign companies in China.",
     voice:"Oliver Zipse: \"Today marks an important step, as we continue to expand our long and successful commitment to China.\"",
     choices:[
      {label:"Exercise the option immediately, consolidating BBA's full financials onto BMW's books", fx:{margin:+15,future:+5}, set:["china_majority_done"],
       result:"BMW AG completes the acquisition of a 75% stake in BBA, effective 11 February 2022, after receiving the relevant business license from Chinese authorities. The joint-venture contract is confirmed extended to 2040.",
       hist:"Real: BMW completed the 75% BBA stake acquisition effective 11 February 2022."},
      {label:"Delay further given rising China-related geopolitical risk", fx:{margin:-8,future:-5},
       result:"Caution costs BMW a stronger negotiating position and a year of full consolidation benefits it can never fully recover."},
      {label:"Renegotiate terms rather than proceed as originally agreed", fx:{margin:-3},
       result:"Brilliance is in no mood to renegotiate a deal it already signed. The relationship sours for no real gain."}
     ]},
    {id:"clar_evs", year:"2021", title:"Building i4 and iX on Adapted CLAR Architecture", cond:"power_of_choice", text:"BMW needs real-volume EVs to answer Tesla's Model 3/Y and Mercedes' EQ range. The question: launch them on a heavily modified version of the existing combustion-derived CLAR platform, or wait longer for a truly dedicated EV architecture.",
     alt:[{if:"!power_of_choice", text:"BMW needs real-volume EVs to answer Tesla's Model 3/Y and Mercedes' EQ range. Having already invested in dedicated-EV development earlier in the decade, the question is whether to fold that work into the mainstream i4/iX launch or hold it back for something bigger."}],
     choices:[
      {label:"Ship the i4 (sedan) and iX (SUV) in 2021 on an updated CLAR architecture with a redesigned central floor section", fx:{margin:+10,future:+2}, set:["clar_ev_done"],
       result:"BMW hits the market faster and reuses existing plants in Munich and Dingolfing — but continues packaging compromises versus ground-up EV rivals, a gap BMW sets out to close with Neue Klasse in the years that follow.",
       hist:"Real: BMW launched the i4 and iX in 2021 on an updated CLAR architecture rather than a clean-sheet EV platform."},
      {label:"Delay 2–3 years for a clean-sheet EV platform instead", fx:{margin:-10,future:+10},
       result:"The eventual product is better-packaged, and arrives just as Tesla and Mercedes have already captured the early-adopter EV buyers BMW needed."},
      {label:"License or co-develop a dedicated EV platform with an outside partner", fx:{margin:-6,future:+5},
       result:"Faster than building from scratch, slower than adapting CLAR — and BMW now shares EV architecture IP with a company that could become a future competitor."}
     ]},
    {id:"hydrogen", year:"AUG 2022 – FEB 2023", title:"Committing to Hydrogen as a Third Pillar", cond:"zipse_ceo", text:"As rivals narrow to a battery-EV-only message, BMW's technology-openness stance pushes it to keep hydrogen fuel cells alive as a third powertrain option — an extremely capital-intensive technology with almost no public refueling infrastructure outside a few markets.",
     choices:[
      {label:"Deepen the long-running Toyota fuel-cell partnership and launch a small pilot fleet of the BMW iX5 Hydrogen", fx:{margin:-4,future:+10}, set:["hydrogen_pilot"],
       result:"BMW begins producing fuel-cell components in August 2022 and launches the iX5 Hydrogen demonstration fleet in February 2023 — a 3–4 minute refuel time, roughly 313 miles WLTP range, explicitly for trial purposes. BMW later targets 2028 for a true series-production hydrogen model.",
       hist:"Real: BMW and Toyota deepened their fuel-cell collaboration, launching the iX5 Hydrogen pilot fleet in February 2023, targeting series production by 2028."},
      {label:"Abandon hydrogen entirely and focus all R&D on battery EVs and combustion", fx:{margin:+5,future:-8},
       result:"A leaner R&D budget today. If hydrogen ever does mature for passenger cars, BMW will be starting from zero alongside everyone else who made the same bet."},
      {label:"Develop hydrogen alone, at high cost and low scale, without a partner", fx:{margin:-12,future:+6},
       result:"Expensive and slow without Toyota's existing fuel-cell scale to share the cost and risk. The program advances, but far more slowly than it needed to."}
     ]},
    {id:"neue_klasse", year:"MAR 2023", title:"Announcing Neue Klasse", text:"Fifteen years after first betting on carbon-fiber EVs and then retreating to flexible architecture for the mainstream range, BMW concludes that to be genuinely cost- and performance-competitive with Tesla and Chinese EV makers in the 2025+ generation, it needs a clean-sheet, EV-only architecture after all.",
     voice:"Frank Weber, BMW Board Member for Development: Neue Klasse is BMW's \"biggest investment ever made.\" Oliver Zipse, to Bloomberg (Sept 2025): BMW invested \"well over\" €10 billion in Neue Klasse over the prior five years, while remaining profitable throughout.",
     choices:[
      {label:"Confirm at least six Neue Klasse models (2025–2027) on a \"born electric,\" 800-volt, combustion-incompatible platform, with new plants in Debrecen, Munich and San Luis Potosí", fx:{margin:-10,future:+22}, set:["neue_klasse"],
       result:"By September 2025, Zipse tells Bloomberg BMW has spent \"well over €10 billion\" on Neue Klasse — described as the single largest investment in BMW's history. The first production vehicle is confirmed to be the BMW iX3.",
       hist:"Real: BMW confirmed Neue Klasse in March 2023, with the first models from 2025 and over €10bn invested by 2025, per Zipse's September 2025 comments to Bloomberg."},
      {label:"Continue extending CLAR-derived EVs indefinitely instead", fx:{margin:+8,future:-15},
       result:"Cheaper in the near term. BMW's EVs remain adaptations rather than ground-up designs, just as Chinese EV makers and Tesla's next generation widen the packaging and cost gap further."},
      {label:"Acquire or license a ready-made EV platform from a partner instead of building one from scratch", fx:{margin:-4,future:+8},
       result:"Faster to market, but BMW now owns less of its own EV future — and pays licensing rents on the architecture underneath its most important upcoming cars."}
     ]},
    {id:"tech_openness_hold", year:"2024–2025", title:"Holding the Line as Rivals Reverse Course", cond:"neue_klasse", text:"By 2024, Volkswagen, Mercedes-Benz and GM have all begun publicly walking back or softening earlier all-electric-by-[year] commitments as EV demand growth slows. BMW must also decide how hard to defend its self-set EU CO2 compliance targets for 2025 amid industry-wide lobbying to relax them.",
     voice:"Oliver Zipse: \"Our technology-open approach is market-oriented... We make no distinctions — whether we are talking about combustion engines, plug-in hybrids, all-electric vehicles or, from 2028, a hydrogen-powered car.\" Also: technological openness is \"the key to Europe's competitiveness.\"",
     choices:[
      {label:"Publicly commit to meeting the existing 2025 CO2 targets as planned, framing technology openness as a competitive differentiator", fx:{margin:-5,brand:+12,future:+8}, set:["tech_openness_held"],
       result:"Reporting in 2025–2026 characterizes Zipse's strategy as \"vindicated\" by rivals' reversals — even as BMW's own 2024 results show real near-term financial pain from China and tariffs.",
       hist:"Real: Zipse stated BMW intended to stick to its existing 2025 CO2 targets rather than seek relief, framing technology openness as a long-term advantage."},
      {label:"Join other automakers lobbying Brussels to delay or soften the 2025 CO2 targets", fx:{margin:+8,brand:-8},
       result:"Short-term financial relief, at the cost of the credibility BMW had been building around \"we don't hedge, we commit.\""},
      {label:"Quietly under-deliver against the targets and pay fines if necessary", fx:{margin:-3,brand:-10},
       result:"The worst of both worlds: no lobbying credit, no compliance credit, and a fine on top."}
     ]},
    {id:"china_collapse", year:"NOV 2024 – OCT 2025", title:"Absorbing the China-Driven Profit Collapse", text:"BMW's largest and historically most profitable market turns into its biggest headache: Chinese domestic EV makers undercut BMW on price and tech features, luxury demand cools generally in China, and new tariff regimes squeeze margins from multiple directions simultaneously.",
     alt:[{if:"china_majority_done", text:"Having just taken full majority control of BBA in 2022 specifically to capture more of China's upside, BMW now absorbs more of China's downside too — full consolidation means BMW's books carry the China weakness directly, not at arm's length through a joint venture."}],
     choices:[
      {label:"Hold price/margin discipline, accept volume and market-share losses, and lean on accelerating Neue Klasse-derived products for China", fx:{margin:-12,brand:+5,future:+6}, set:["china_discipline"],
       result:"Full-year 2024 net profit falls 37% to about €7.7 billion on revenue down over 8%. Q2 2025 China sales fall 13.7% year-over-year, BEV sales down 21.2%. BMW cuts its full-year 2025 guidance in October 2025, projecting an automotive margin of just 5–7% — below its traditional 8%+ band.",
       hist:"Real: BMW's 2024 net profit fell 37% to ~€7.7bn; BMW cut full-year 2025 guidance in October 2025, projecting a 5–7% automotive margin."},
      {label:"Cut prices aggressively in China to defend volume share, sacrificing margin", fx:{margin:-18,brand:-5},
       result:"Volume holds up somewhat better. The margin damage is worse, and BMW now trains Chinese buyers to expect discounts on a brand built around not needing them."},
      {label:"Pull back from China investment and reallocate capital to other markets", fx:{margin:-6,future:-8},
       result:"A retreat from BMW's largest market just as it's investing billions in Neue Klasse capacity there. The two strategies actively contradict each other."}
     ]},
    {id:"nedeljkovic", year:"MAY 2026", title:"Handing Over to Milan Nedeljković", text:"Having had his contract previously extended specifically to steer Neue Klasse through its launch, Zipse reaches the end of his tenure just as the first Neue Klasse vehicles (iX3, then i3) begin reaching customers. The Supervisory Board must choose a successor to manage the mass-market scale-up and the China/EV margin recovery.",
     choices:[
      {label:"Select Milan Nedeljković — a 35-year BMW veteran and production board member since 2019 who oversaw the Neue Klasse plant build-outs", fx:{margin:+8,future:+8}, set:["nedeljkovic_ceo"],
       result:"Nedeljković succeeds Zipse as Chairman effective 14 May 2026, term through 2031. BMW frames the choice around \"strategic foresight, entrepreneurial thinking, and strong implementation skills\" at a decisive moment — continuity of strategy, not a change of direction.",
       hist:"Real: BMW's Supervisory Board selected Milan Nedeljković, effective 14 May 2026, succeeding Zipse."},
      {label:"Hire an external executive to bring fresh outside perspective at this pivotal moment", fx:{margin:-6,future:+3},
       result:"A leadership change at exactly the moment Neue Klasse needs continuity instead. The new hire spends months learning a launch program someone else designed."},
      {label:"Promote a finance-track executive to prioritize the margin recovery over manufacturing continuity", fx:{margin:+4,brand:-3},
       result:"Capital discipline improves. The Neue Klasse plant ramp, still mid-build-out in three countries, loses its most experienced internal champion."}
     ]}
   ]
  }
 }
};
EVENTS.bmw = [
 {title:"Quandt Family Stays Quiet", text:"A journalist asks the controlling family for comment on the latest strategy pivot. The answer, as ever, is a polite non-answer through a spokesperson.", fx:{brand:+3}, up:"Stability has its own kind of marketing value — even when it says nothing at all."},
 {title:"Supplier Strike in Bavaria", text:"A parts supplier strike in Bavaria slows deliveries to the Dingolfing plant for a week.", fx:{margin:-4}, up:"Inventory buffers absorb most of the damage; the line never fully stops."},
 {title:"Driving Dynamics Award", text:"A motoring magazine crowns BMW's latest chassis tuning 'best in class, again' — the seventeenth consecutive year someone has written that sentence.", fx:{brand:+5}, up:"Freude am Fahren remains, stubbornly, real."},
 {title:"Currency Swing", text:"A stronger euro shaves margin off cars exported and sold in dollars and renminbi this quarter.", fx:{margin:-5}, up:"The treasury desk's hedges absorb most of it. Most."},
 {title:"Battery Cell Shortage", text:"A cathode-material shortage tightens BMW's EV battery supply chain for a month.", fx:{future:-4}, up:"A backup supplier in Hungary covers the gap faster than anyone expected."},
 {title:"Engineering Talent Coup", text:"A respected battery chemist turns down Tesla to join BMW's Neue Klasse program, citing 'a company that still believes in engineering, not just software'.", fx:{future:+5}, up:"One hire, and the recruiting pipeline behind it, quietly accelerates."}
];
TICKER.bmw = [
 "Mercedes overtakes BMW in global luxury sales, again",
 "Tesla Model Y outsells the entire X-series in California",
 "Chinese EV maker #62 undercuts the iX3 by €8,000",
 "Brussels drafts stricter 2027 CO2 targets",
 "Audi e-tron successor leaks online ahead of schedule",
 "Munich tower lights stay on past midnight, again",
 "Analyst: 'technology openness' is either genius or a hedge for indecision",
 "Quandt family wealth ranking shifts one place, nobody comments"
];
