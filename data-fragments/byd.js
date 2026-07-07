DATA.byd = {
 name:"BYD", short:"BYD", logo:"🔋", theme:"theme-byd", ipo:6,
 pitch:"A battery-chemistry shop that taught itself to build cars in a borrowed factory. No automotive pedigree, no shame about copying a Corolla, and by the time anyone took it seriously it was already winning.",
 kpis:[
  {key:"cash", label:"Capital", desc:"Cash, investor confidence, and access to capital markets. Hit zero and BYD can't fund its next bet."},
  {key:"prod", label:"Vertical Integration", desc:"Battery, chip and manufacturing self-sufficiency. Hit zero and a supply shock stops the line cold."},
  {key:"trust", label:"Brand & Global Standing", desc:"Consumer quality trust plus standing with foreign regulators. Hit zero and overseas expansion slams shut regardless of volume."}
 ],
 ticker:"BYD",
 bankruptcy:"The dealer network revolts, the regulators close the doors, and the cousin's 2.5 million yuan finally runs out for good. Build Your Dreams becomes a cautionary case study taught in Shenzhen business schools.",
 legendary:"From a rented battery workshop to the company that out-sold Tesla, ended the combustion engine, and shipped electric cars on its own ships. Wang Chuanfu spent his life on this industry, exactly as promised.",
 eras:{
  a:{
   name:"The Battery Maker's Gamble", years:"1995–2008", start:{cash:30, prod:25, trust:40}, stock0:4, deep:true,
   intro:"Shenzhen, February 1995. You've just quit a secure post running a state battery-research subsidiary to start a company with 2.5 million yuan, most of it borrowed from a cousin. China's battery market belongs to Sony and Sanyo, who have patents and robots you cannot afford. You have a chemistry degree, cheap labor, and a stubborn streak. Everything that happens next compounds.",
   scenarios:[
    {id:"founding", year:"FEB 1995", title:"2.5 Million Yuan and a Borrowed Idea",
     text:"You've broken down a Sony nickel-cadmium battery on your workbench. The Japanese build these on expensive automated lines you'll never afford. You could try to license the technology and pay royalties forever, or you could reverse-engineer the chemistry and substitute cheap manual labor and jigs for the robots.",
     choices:[
      {label:"Reverse-engineer the chemistry, build manual production lines instead of robots", fx:{cash:+10,prod:+12,trust:+4}, set:["reverse_eng"],
       result:"You cut unit costs roughly 5-6x versus the Japanese rivals by substituting people and jigs for robotic assembly. Within a few years BYD is China's largest NiCd/NiMH battery maker.",
       hist:"Real: Wang reverse-engineered Sony/Sanyo battery designs and rebuilt the process around inexpensive semi-manual production."},
      {label:"License the Japanese technology properly and pay the royalties", fx:{cash:-10,trust:+6},
       result:"Clean and legal, and the royalty payments eat the margin advantage you needed to undercut anyone. Growth is respectable, not explosive."},
      {label:"Stay in the safe state-research job", fx:{cash:+6,prod:-10,trust:-4},
       result:"You keep your pension and your evenings. BYD, as a company, never exists. This is not the game you're here to play."}
     ]},
    {id:"ipo2002", year:"JUL 2002", title:"Going Public in Hong Kong",
     text:"BYD is now a major rechargeable-battery supplier to global cellphone makers, and the Hong Kong Stock Exchange wants you. A listing means international capital and prestige — and outside shareholders watching your every move for the first time.",
     choices:[
      {label:"List on the HKEX (HK:1211)", fx:{cash:+14,trust:+6}, set:["hkex"],
       result:"BYD Company Limited lists on July 31, 2002. It's just a battery-company IPO today. In a year, this listing becomes the funding currency for something much stranger.",
       hist:"Real: BYD listed on the Hong Kong Stock Exchange on July 31, 2002."},
      {label:"Stay private, self-fund with bank debt and customer prepayments", fx:{cash:-6,trust:+2},
       result:"You keep total control and a smaller war chest. Every future bet will cost you a harder negotiation with a bank manager."},
      {label:"Seek a strategic private placement instead of a public listing", fx:{cash:+6,trust:-2},
       result:"A single strategic investor gets a board seat and a say in everything. Quieter than an IPO, and far less currency for what's coming."}
     ]},
    {id:"qinchuan", year:"JAN 2003", title:"Buying a Bankrupt Car Factory Nobody Wanted",
     text:"You announce BYD will acquire 77% of Tsinchuan Automobile, a failing state-owned car maker in Xi'an, for roughly 269 million yuan — pivoting a pure battery company into cars with zero automotive pedigree. It wasn't in your listing prospectus. A Hong Kong fund manager threatens to dump all his BYD stock the moment the deal closes.",
     voice:"Wang Chuanfu: \"I will focus on the automotive industry for the rest of my life, and it will be the new energy vehicle industry.\"",
     choices:[
      {label:"Buy Tsinchuan outright and build the car business from scratch", fx:{cash:-14,prod:+10,trust:-12}, set:["qinchuan"],
       result:"Institutional investors revolt and your Hong Kong shares take a beating. You proceed anyway. Nobody else in this industry believes batteries and cars are the same business yet. You do.",
       hist:"Real: BYD acquired 77% of Tsinchuan (Qinchuan) Automobile in January 2003 for roughly CNY 269 million, against fierce investor objection."},
      {label:"Stay a pure battery/electronics supplier — avoid capital-intensive car manufacturing", fx:{cash:+8,trust:+4,prod:-6},
       result:"The fund managers sleep easier. So does your bank account. Somewhere, a future you never builds the Blade Battery, because there's no car to put it in."},
      {label:"Partner with or supply batteries to an existing automaker instead", fx:{cash:+4,prod:+2},
       result:"Safer, slower, and someone else's name goes on the car. You learn the auto business at arm's length, which is to say you don't really learn it at all."}
     ]},
    {id:"f3", year:"2005", title:"The F3: Win Volume First, Fix Quality Later", cond:"qinchuan",
     text:"Your first mass-market sedan, the F3, looks close enough to a Toyota Corolla that the comparisons are immediate. You can price it under $10,000 in China. The question: invest more upfront in original engineering to dodge the copycat criticism, or lead with rock-bottom pricing and accept the reputation hit.",
     choices:[
      {label:"Lead with rock-bottom pricing and Corolla-adjacent styling to win volume fast", fx:{cash:+12,trust:-8}, set:["f3_volume"],
       result:"The F3 becomes the best-selling sedan in China by 2009 and sells over 1.6 million units globally before production ends in 2021. It also cements a decade-long reputation for derivative styling and so-so build quality.",
       hist:"Real: the F3 launched in 2005, became China's best-selling sedan by 2009, and sold 1.6M+ units lifetime — while drawing lasting copycat and quality criticism."},
      {label:"Invest more upfront in original design and engineering", fx:{cash:-10,trust:+8},
       result:"A more defensible car, sold in smaller numbers, at a moment when volume is the only thing that funds what comes next."},
      {label:"Skip passenger cars, focus on commercial/fleet vehicles where styling matters less", fx:{cash:+4,prod:-4},
       result:"Steadier, duller, and it cedes the entire private passenger-car market to rivals while you wait for a better moment that may not come."}
     ]},
    {id:"f3dm", year:"DEC 2008", title:"The World's First Mass-Production Plug-in Hybrid",
     text:"The F3DM (Dual Mode) is rough — reviewers cite poor build quality and awkward switching between electric and gasoline power — but it would be the world's first mass-produced plug-in hybrid, ahead of GM's Volt and Toyota's plug-in Prius, if you ship it now instead of waiting to polish it.",
     choices:[
      {label:"Launch early and imperfect — claim the milestone, sell mainly to fleets", fx:{cash:-6,prod:+10,trust:-2}, set:["f3dm"],
       result:"You sell mostly to government and corporate fleets given the rough edges, and start the learning curve toward the DM-series hybrids that will anchor BYD's 2020s sales boom.",
       hist:"Real: the F3DM launched Dec 2008, marketed as the world's first mass-produced plug-in hybrid, sold mainly to fleets at first."},
      {label:"Wait until the technology and quality are polished", fx:{cash:-4,trust:+4},
       result:"GM's Volt or Toyota's plug-in Prius gets to claim the world's-first headline instead. Polished, but second."},
      {label:"Abandon plug-in hybrids, focus only on pure EVs", fx:{prod:+4,trust:-2},
       result:"A purer bet, years before the market or the batteries are ready for it. The unglamorous hybrid groundwork that would fund the 2020s never gets laid."}
     ]},
    {id:"buffett", year:"SEP 2008", title:"Buffett's Man Comes Calling",
     text:"Charlie Munger has convinced Warren Buffett that you, personally, are an extraordinary operator — despite Buffett's aversion to tech, autos, and China. Berkshire Hathaway, through MidAmerican Energy, wants roughly 10% of BYD for about $232 million.",
     voice:"Wang Chuanfu, on the announcement: \"We are extremely pleased and grateful that Berkshire Hathaway and MidAmerican will be our long-term investor and partner, as we bring our electric vehicles and other environmental protection measures to the global space.\"",
     choices:[
      {label:"Accept the Berkshire/MidAmerican investment and the global spotlight", fx:{cash:+18,trust:+16}, set:["buffett"],
       result:"The deal, finalized September 2008, transforms BYD's global profile overnight and makes you briefly China's richest man in 2009. Berkshire holds the stake for 17 years before fully exiting in 2025 — a position that grows more than 20-fold.",
       hist:"Real: Berkshire/MidAmerican invested ~$232M for ~10% of BYD in Sept 2008; Munger called it a bet on the horseman, not the horse."},
      {label:"Accept a smaller, less prominent partner instead", fx:{cash:+8,trust:+4},
       result:"Quieter money, quieter headlines. You keep more control and forgo the validation that turns BYD into a household name overnight."},
      {label:"Decline Western capital, stay a primarily Chinese/Asian-investor company", fx:{cash:-4,trust:-6}, set:["no_buffett"],
       result:"Principled, and it costs you the single loudest credibility signal in BYD's history. The next decade gets harder to fund."}
     ]},
    {id:"battery_fluid", year:"~2009", title:"The Battery-Fluid Demonstration", cond:"buffett",
     text:"Buffett's scouts are evaluating BYD's battery safety. You could rely on lab data sheets and certifications alone, or you could do something visceral: drink a sample of the battery electrolyte in front of the visitors to prove it's non-toxic.",
     choices:[
      {label:"Drink the battery fluid in front of them", fx:{trust:+8}, set:["theatrics"],
       result:"The anecdote becomes widely repeated BYD lore — and foreshadows the company's later Blade Battery nail-penetration safety demonstrations. Prove safety theatrically, not just statistically.",
       hist:"Real: Wang reportedly drank a sample of BYD's battery electrolyte to demonstrate its safety to Buffett-affiliated visitors, an anecdote widely reported though not pinned to an exact date."},
      {label:"Rely on lab safety data sheets and third-party certifications alone", fx:{trust:+3},
       result:"Perfectly credible, and nobody tells this story at a dinner party twenty years from now."}
     ]}
   ]
  },
  b:{
   name:"Buffett's Bet and the Crash", years:"2008–2014", start:{cash:48, prod:35, trust:50}, stock0:18,
   intro:"The Berkshire money landed, the press loves you, and for one dizzying year you are briefly China's richest man. None of that fixes a dealer network built faster than it can be managed. The hype is about to outrun the company underneath it.",
   scenarios:[
    {id:"richest", year:"2009", title:"China's Richest Man, Briefly",
     text:"The Buffett-driven stock surge and BYD's expanding battery, auto and solar businesses briefly make you the richest person in mainland China, per Hurun's rankings — a startling ascent for a battery engineer from a poor farming family in Anhui. The real question: use the moment and the sky-high valuation to expand aggressively, or consolidate while the dealer network and quality systems catch up to the hype.",
     choices:[
      {label:"Use the spotlight to expand aggressively — add dealerships, raise sales targets", fx:{cash:+10,prod:+6,trust:-4}, set:["overexpand"],
       result:"Dealerships and sales targets balloon through 2009-2010. It feels like momentum. It is, in fact, the setup for the channel-stuffing crisis about to hit.",
       hist:"Real: BYD expanded its dealer network and sales targets aggressively through 2009-2010, which set up the 2011-2012 crash."},
      {label:"Consolidate and tighten operations before scaling further", fx:{cash:-4,trust:+8},
       result:"Slower growth, a healthier foundation. The richest-man headline fades faster than it would have otherwise — but so does the hangover waiting on the other side of it."}
     ]},
    {id:"denza", year:"2010", title:"The Daimler Joint Venture",
     text:"Daimler AG — itself an early Tesla investor — wants a 50/50 joint venture to build a new EV brand for China, eventually called Denza. It's a chance to absorb premium-brand engineering and quality discipline from a 120-year-old luxury automaker, but on Daimler's terms, with BYD's own brand pushed into the background.",
     choices:[
      {label:"Accept the JV — gain Daimler's engineering know-how and a credibility halo", fx:{cash:-6,trust:+10}, set:["denza"],
       result:"Denza launches its first model years later, in 2014. The partnership runs about a decade with limited commercial success — until you eventually buy out Daimler's stake (2021-2022) and Denza becomes commercially successful only after BYD takes full control.",
       hist:"Real: the Daimler-BYD Denza JV was formed in 2010; BYD bought out Daimler's stake in 2021-2022 and Denza succeeded commercially afterward."},
      {label:"Decline and keep all EV development fully in-house under the BYD brand", fx:{cash:+4,prod:+4,trust:-4},
       result:"Total control, no halo effect. You learn premium engineering the slow way, on your own dime and your own timeline."},
      {label:"Seek a partnership with a less control-seeking partner instead", fx:{cash:-2,trust:+2},
       result:"A smaller deal with a smaller name attached. Less prestige, less compromise — a wash."}
     ]},
    {id:"crash", year:"2011", title:"The Crash: Profits Down 88%", cond:"overexpand",
     text:"Years of breakneck dealership expansion hit a wall. First-half profit plunges roughly 88.6% year-on-year. Dealers, pushed to take on more inventory than they can sell, are in revolt, quality complaints are mounting, and China is rolling back some EV-purchase incentives. Keep pushing volume targets, or admit the overexpansion publicly and reset?",
     voice:"Wang Chuanfu, acknowledging the crisis: \"In the past, we pursued expansion of quantity and scale one-sidedly, neglecting to improve brand quality.\"",
     choices:[
      {label:"Publicly acknowledge the overexpansion and quality problems, reset the dealer network", fx:{cash:-10,trust:+10}, set:["mea_culpa"],
       result:"Sales VP Xia Zhibing resigns amid the fallout, sales-department layoffs follow, and Chinese media runs scathing pieces. Full-year 2012 net profit falls roughly 94% to about 81.4 million yuan, down from 1.38 billion the year before. The reckoning is total, and it's the only way through.",
       hist:"Real: BYD's first-half 2011 profit fell ~88.6% YoY; full-year 2012 net profit fell ~94% to ~CNY 81.4M; Wang publicly identified dealer networks, media relations, and quality as the three failure areas."},
      {label:"Keep pushing volume targets, wait for the market to absorb the inventory", fx:{cash:-16,trust:-12},
       result:"The inventory doesn't absorb. It just sits in dealer lots, depreciating, while the revolt gets louder."},
      {label:"Quietly trim targets without public acknowledgment", fx:{cash:-8,trust:-6},
       result:"A half-measure that satisfies no one — dealers still feel misled, and the press fills the silence with its own theories."}
     ]},
    {id:"rebuild", year:"2012", title:"Rebuilding Trust: Dealer Network Reform", cond:"mea_culpa",
     text:"With dealers in revolt and inventory bloated, you need to rebuild the sales channel — the same network whose collapse pattern will recur, at far greater scale, in 2025.",
     choices:[
      {label:"Cut dealer count sharply and lean harder into fleet sales (taxis, buses)", fx:{cash:-4,prod:+8,trust:+8}, set:["fleet_pivot"],
       result:"Trimming the weakest dealers while leaning into the Shenzhen e6 taxi program and K9 electric buses gives you commercial-vehicle ballast that doesn't depend on a healthy private-retail network — and helps BYD survive the lean 2012-2014 stretch.",
       hist:"Real: BYD trimmed its weakest dealers while leaning into fleet sales (e6 taxis, K9 buses) to survive the post-crash rebuild."},
      {label:"Prop up the existing network with discounts and incentives", fx:{cash:-10,trust:-2},
       result:"Expensive life support for a network that was already too big. The bleeding slows; it doesn't stop."}
     ]},
    {id:"e6taxi", year:"2013-2014", title:"Shenzhen e6: Betting on Taxi Fleets", cond:"fleet_pivot",
     text:"Private passenger-car sales are still recovering. You push the e6 pure-electric vehicle into Shenzhen's taxi fleet as a flagship use case — a high-utilization, high-visibility proving ground for EV reliability while private buyers remain skeptical of range and durability.",
     choices:[
      {label:"Use captive fleet deployments to generate volume, reliability data, and government goodwill", fx:{cash:+8,prod:+8,trust:+8},
       result:"Shenzhen's e6 taxi fleet becomes one of the most-cited proof points globally for EV taxi viability, and the K9 bus program expands into dozens of cities domestically and eventually abroad — a beachhead that subsidizes passenger-EV R&D through the recovery years.",
       hist:"Real: BYD's Shenzhen e6 taxi fleet and K9 electric bus program became major proof points for EV reliability during the post-crash recovery."},
      {label:"Wait for private consumer demand to mature before pushing EVs hard", fx:{cash:+2,prod:-4},
       result:"Cautious, and it costs you years of real-world reliability data you'll need later when the EV boom actually arrives."}
     ]}
   ]
  },
  c:{
   name:"Going All-In On Electric", years:"2015–2022", start:{cash:55, prod:55, trust:55}, stock0:30,
   intro:"China's NEV subsidy boom is in full swing. Electric buses, taxis and passenger cars are scaling. The bet underneath all of it — that batteries, not engines, are always the real business — is about to get its biggest test yet.",
   scenarios:[
    {id:"subsidy_cliff", year:"JUN 2019", title:"The Subsidy Cliff",
     text:"Beijing slashes national NEV purchase subsidies by roughly 45-60% for shorter-range vehicles, effective late June 2019, ending years of subsidy-fueled growth. Your July 2019 sales drop 38% month-on-month; pure-EV sales of popular long-range models fall by roughly half in a single month.",
     choices:[
      {label:"Accelerate cost-reduction through battery and chip vertical integration", fx:{cash:-6,prod:+14}, set:["vertical_push"],
       result:"You take near-term volume pain in 2019 but double down on in-house battery and semiconductor production — a multi-year strategy that pushes BYD's vertical-integration push into higher gear ahead of the 2020s EV boom.",
       hist:"Real: BYD leaned into vertical integration (battery/chip self-sufficiency) as the multi-year response to the June 2019 subsidy cut, which is widely viewed as the forcing function for the strategy."},
      {label:"Cut prices to offset the lost subsidy and protect volume", fx:{cash:-10,trust:+2},
       result:"Volume holds better short-term. Margins, already thin, get thinner — right as you need capital for the bets ahead."},
      {label:"Hold prices and accept lower volume", fx:{cash:+4,trust:-8},
       result:"Margins survive intact. Market share doesn't — rivals willing to eat the subsidy loss take the customers you didn't fight for."}
     ]},
    {id:"chips", year:"2020-2021", title:"Riding Out the Global Chip Shortage on In-House Chips", cond:"vertical_push",
     text:"A global semiconductor shortage cripples automakers worldwide — Ford, GM, Toyota all idle plants. You've been building your own automotive-grade IGBT chips through BYD Semiconductor since 2005, now at generation 4.0/5.0.",
     choices:[
      {label:"Lean on in-house IGBT production to insulate the power-electronics supply chain", fx:{cash:+6,prod:+18,trust:+6},
       result:"While rivals lose millions of units of production industry-wide during 2021-2022, your lines keep running. BYD Semiconductor raises IGBT/IPM prices at least 5% in July 2021 to reflect input costs, but supply keeps flowing — a crisis that hurt every competitor becomes your competitive advantage. Sales surge over 200% in 2022.",
       hist:"Real: BYD's in-house IGBT chip production (via BYD Semiconductor) let it keep production running through the 2020-2022 global chip shortage while rivals idled plants; BYD sales surged 200%+ in 2022."},
      {label:"Rely on the open chip market like most automakers", fx:{cash:+2,prod:-14,trust:-4},
       result:"You absorb shortage-driven production cuts right alongside Ford, GM, and Toyota. The in-house chip unit you built years ago sits there, underused, while the market you could have insulated yourself from punishes you anyway."}
     ]},
    {id:"han", year:"JUL 2020", title:"The Han: A Direct Shot at Tesla",
     text:"The Han EV — roughly Model-S-sized, priced $32,800 to $40,000 — launches as the debut showcase for the new Blade Battery. After 15 years of being associated with cheap, derivative cars, this is your first deliberate attempt at a premium, technology-forward flagship meant to be cross-shopped against Tesla.",
     choices:[
      {label:"Build a genuine flagship to change the brand's positioning", fx:{cash:-6,trust:+14}, set:["han_flagship"],
       result:"Capable of 0-62mph in as little as 3.9 seconds in AWD form, rated around 376 miles of range in its long-range trim, the Han becomes a strong seller in China — a signal, confirmed at scale three years later, that BYD intends to compete with Tesla across the entire price spectrum.",
       hist:"Real: the BYD Han launched July 2020 as a Model S-sized flagship priced $32,800-$40,000, built to showcase the Blade Battery."},
      {label:"Keep targeting the budget segment where BYD's cost advantages are strongest", fx:{cash:+6,trust:-4},
       result:"Safer, and it leaves the premium narrative entirely to Tesla and the legacy luxury brands for years longer than necessary."}
     ]},
    {id:"blade", year:"MAR 2020", title:"The Blade Battery and the Nail Test",
     text:"Your battery subsidiary FinDreams unveils the Blade Battery — an LFP cell in a thin, structural format, explicitly marketed on safety, while Tesla and most premium EV makers chase higher-energy-density NMC chemistry and the range numbers that come with it. The bet: trade some energy density for dramatically better safety and lower cost.",
     choices:[
      {label:"Commit to LFP/Blade and market safety and structural efficiency as the differentiator", fx:{cash:-4,prod:+16,trust:+12}, set:["blade_battery"],
       result:"A viral nail-penetration test shows an NMC cell catching fire immediately above 500°C, a standard LFP cell not burning but exceeding 200°C, and the Blade Battery producing no smoke or fire, staying in a 30-60°C range — cool enough to touch. The bet is validated industry-wide over the following years as LFP adoption, including by Tesla itself for standard-range models, grows sharply.",
       hist:"Real: BYD's March 2020 Blade Battery nail-penetration test video showed dramatically better thermal safety than NMC and standard LFP cells; LFP adoption industry-wide (including by Tesla) grew sharply afterward."},
      {label:"Follow the industry toward higher-energy-density NMC chemistry", fx:{cash:-8,prod:+4},
       result:"You chase the same range numbers as everyone else, on the same chemistry as everyone else, with none of the safety story that would later become BYD's signature."},
      {label:"Pursue a dual-chemistry strategy across different vehicle tiers", fx:{cash:-10,prod:+8},
       result:"More flexible, more expensive to engineer and market simultaneously, and it dilutes the singular safety narrative the nail test could have delivered."}
     ]},
    {id:"norway", year:"JUN 2021", title:"First Steps Into Europe: Norway",
     text:"You ship the first 100 European-spec Tang SUVs to Norway — your first deliberate entry into European passenger-vehicle retail, as distinct from earlier bus exports — chosen for its near-100% EV market share and a local dealer partnership.",
     choices:[
      {label:"Enter through a small, EV-friendly beachhead market to learn European retail and certification at low risk", fx:{cash:+4,trust:+10}, set:["europe_beachhead"],
       result:"You plan roughly 1,500 Tang EV deliveries in Norway in 2021 before expanding model lines and country count in subsequent years — a deliberate \"learn small, then scale\" playbook that precedes the much larger 2023-2025 European expansion, and the tariff fight that follows it.",
       hist:"Real: BYD's first 100 European-spec Tang SUVs shipped to Norway in June 2021, chosen as a low-risk EV-friendly beachhead market ahead of wider European expansion."},
      {label:"Enter Europe through a larger, central market (Germany, UK, France) to maximize volume immediately", fx:{cash:-8,trust:-4},
       result:"Bigger stakes, bigger scrutiny, and far less room to learn European certification and service requirements without an expensive misstep."},
      {label:"Delay European entry until the home market fully stabilizes", fx:{cash:+2,trust:-2},
       result:"Cautious. It also hands a multi-year head start in European EV retail to rivals who didn't wait."}
     ]},
    {id:"ice_exit", year:"APR 2022", title:"Killing the Internal Combustion Engine",
     text:"On April 3, 2022, you can announce BYD will stop producing pure gasoline vehicles entirely — becoming the first major global automaker to do so — focusing fully on battery-electric and plug-in-hybrid vehicles. NEV production already jumped roughly 5x year-on-year in March alone, so the announcement would be catching up to demand, not getting ahead of it.",
     choices:[
      {label:"Commit fully and publicly to ending ICE-only production", fx:{cash:-4,prod:+10,trust:+14}, set:["ice_killed"],
       result:"BYD continues making ICE parts and after-sales service for existing customers, but builds no new pure-gasoline models from this point forward — a milestone widely covered as a bellwether for the industry, two years before Western legacy automakers walk back their own EV-only target dates.",
       hist:"Real: BYD announced April 3, 2022 it would stop producing pure gasoline vehicles, the first major global automaker to do so, after NEV production rose roughly 5x YoY that March."},
      {label:"Keep a gasoline-vehicle line as a hedge while EV/PHEV demand matures further", fx:{cash:+6,trust:-8},
       result:"A safer hedge, and it costs you the symbolic first-mover headline — and the years of momentum that headline would have bought."},
      {label:"Phase out ICE production quietly, without a public announcement", fx:{cash:+2,trust:-4},
       result:"The transition happens anyway, just without anyone outside the company noticing or crediting you for it."}
     ]}
   ]
  },
  d:{
   name:"The World's Biggest EV Maker — and Its Backlash", years:"2023–2026", start:{cash:60, prod:65, trust:50}, stock0:55,
   intro:"Your volumes are exploding past Tesla's, quarter by quarter, then year by year, powered by ultra-cheap models like the Seagull and a plug-in-hybrid lineup Tesla doesn't even compete in. Europe, Southeast Asia, Brazil, and Mexico beckon — and so do tariff walls, labor scandals, and a price war you started that is about to draw a rebuke from your own government.",
   scenarios:[
    {id:"thailand", year:"MAR 2023", title:"Thailand: The First Wholly-Owned Overseas Passenger Plant",
     text:"You break ground on a $491 million, 150,000-unit factory in Rayong, Thailand — your first wholly BYD-owned overseas passenger-car plant, instead of the licensed-export approach used in earlier markets. Build it yourself to localize production and dodge tariffs, or keep exporting fully-built cars and eating the duties.",
     choices:[
      {label:"Build a wholly-owned local factory as a regional export hub", fx:{cash:-8,prod:+14,trust:+8}, set:["thailand_plant"],
       result:"Completed in just 16 months and inaugurated July 4, 2024 alongside BYD's 8-millionth global NEV, the plant becomes central to capturing roughly half of Thailand's EV market — with BYD overtaking Honda as Thailand's #2 best-selling car brand outright by June 2025.",
       hist:"Real: BYD's Rayong, Thailand plant broke ground March 2023, completed in 16 months, opened July 2024, and helped BYD capture roughly half of Thailand's EV market."},
      {label:"Continue exporting fully-built cars from China, accepting duties and shipping costs", fx:{cash:+4,prod:-6},
       result:"Cheaper upfront, slower to scale, and every car pays an import tax your localized rivals don't."},
      {label:"License production to a local partner rather than invest directly", fx:{cash:+2,trust:-2},
       result:"Lower capital risk, and you hand a share of the upside — and the manufacturing know-how — to someone else's balance sheet."}
     ]},
    {id:"overtake_tesla", year:"Q4 2023", title:"Overtaking Tesla, Quarterly",
     text:"For the first time, your quarterly global EV deliveries surpass Tesla's: roughly 526,400 BEVs in Q4 2023 versus Tesla's approximately 484,500 — though Tesla still leads full-year 2023 EV deliveries. The strategic question repeating through the year: chase the symbolic \"beat Tesla\" narrative aggressively via pricing and volume, or prioritize margin even if it means ceding the units crown longer.",
     choices:[
      {label:"Chase volume and share aggressively, accepting margin compression", fx:{cash:-6,trust:+10}, set:["volume_chase"],
       result:"You overtake Tesla in unit terms by quarter (Q4 2023), then in full-year revenue terms in 2024 — the cost of that crown is margin compression you'll feel acutely within two years.",
       hist:"Real: BYD's Q4 2023 BEV deliveries (~526,400) surpassed Tesla's (~484,500) for the first time, with BYD pursuing volume/share aggressively including price cuts."},
      {label:"Prioritize margin and profitability, even if it means trailing Tesla longer", fx:{cash:+10,trust:-6},
       result:"Healthier unit economics, and the headlines all still say \"Tesla beats BYD\" for another year you didn't need to give them."}
     ]},
    {id:"seagull", year:"EARLY 2024", title:"The Seagull: A $9,700 Car as a Weapon", cond:"volume_chase",
     text:"You cut the price of the tiny Seagull city EV roughly 5% to about $9,700, part of a much broader wave of price cuts across the lineup that ignites a sector-wide price war Tesla itself effectively started in China the year before.",
     choices:[
      {label:"Cut prices aggressively across the lineup to defend and grow market share", fx:{cash:-12,trust:+8}, set:["price_war"],
       result:"The strategy works at the level of market share — but by 2025 it triggers direct criticism from Chinese state media and regulators. The Seagull's price falls further still, to roughly $7,750 by May 2025, a cumulative 20%+ cut from its already rock-bottom 2024 starting price.",
       hist:"Real: BYD cut the Seagull's price ~5% to ~$9,700 in early 2024, part of a broader price war; the Seagull fell further to ~$7,750 by May 2025."},
      {label:"Hold prices and protect margins as smaller Chinese rivals struggle", fx:{cash:+10,trust:-10},
       result:"Margins survive. So do your higher-cost competitors, who you could have starved out while you had the advantage."}
     ]},
    {id:"eu_provisional", year:"JUL 2024", title:"EU Provisional Tariffs",
     text:"After a nine-month European Commission anti-subsidy investigation, the EU imposes provisional countervailing tariffs on Chinese-made EVs from early July 2024 — BYD facing roughly 17.4%, on top of the EU's standard 10% import duty. Fight it through trade channels, absorb it and stay export-based, or accelerate local European manufacturing to sidestep it entirely.",
     choices:[
      {label:"Cooperate with the EU investigation while accelerating local EU manufacturing", fx:{cash:-10,prod:+8,trust:+6}, set:["eu_cooperate"],
       result:"You press ahead with a €4 billion factory in Szeged, Hungary (300,000-unit capacity), while BYD and rivals like MG also begin selling plug-in hybrids in Europe specifically because PHEVs aren't subject to the same EV-targeted tariffs.",
       hist:"Real: BYD pursued a combination of cooperating with the EU investigation and accelerating Hungary (and later Turkey) manufacturing in response to the July 2024 provisional tariffs."},
      {label:"Contest the tariffs through WTO/legal channels while continuing to export from China", fx:{cash:-4,trust:-2},
       result:"A slower, more adversarial path — and the tariffs apply to every car you ship from China while the legal process grinds on."},
      {label:"Absorb the tariff cost into pricing and stay purely export-based", fx:{cash:-14,trust:+2},
       result:"You eat the cost rather than fight it or build around it. Margins, already thin from the price war, take another hit."}
     ]},
    {id:"eu_definitive", year:"OCT 2024", title:"Definitive EU Duties, and Choosing Diplomacy Over Defiance", cond:"eu_cooperate",
     text:"On October 4, 2024, the European Council adopts definitive countervailing duties on Chinese-made BEVs, ranging 7.8% to 35.3% by manufacturer. Your definitive rate comes in at 17.0% — slightly lower than the provisional rate, and notably lower than some rivals, because BYD was judged to have cooperated more fully with the investigation.",
     choices:[
      {label:"Continue the cooperative posture to preserve the lower rate and the localization relationship", fx:{cash:+6,trust:+8},
       result:"The relatively cooperative posture pays off in a lower individual tariff rate than several rivals, while BYD presses ahead with localizing production in Hungary and Turkey to make the tariff question moot for an increasing share of European volumes over time.",
       hist:"Real: BYD's October 2024 definitive EU tariff rate came in at 17.0%, lower than several rivals, attributed to fuller cooperation with the EU investigation."},
      {label:"Retaliate rhetorically and push for reciprocal Chinese tariffs on EU goods", fx:{cash:-4,trust:-8},
       result:"It plays well domestically and poorly in Brussels — exactly where you still need a seat at the table for your Hungary and Turkey plans."}
     ]},
    {id:"mexico_us", year:"2024-2025", title:"The US Tariff Wall and the Mexico Retreat",
     text:"In May 2024 the US announces it will raise tariffs on Chinese EVs to 100%, closing the US market to direct exports. You'd been evaluating Mexico as a manufacturing base specifically because USMCA-compliant vehicles could cross into the US tariff-free — a potential backdoor. Press ahead on the existing timeline, pause pending the 2024 US election outcome, or abandon North America entirely.",
     choices:[
      {label:"Pause the Mexico search pending clarity on the US political situation", fx:{cash:+4,trust:+4}, set:["mexico_paused"],
       result:"You stop actively scouting Mexican sites (having evaluated three) to await clarity. Following Trump's return to the White House and continued aggressive tariff rhetoric, you effectively shelve the major Mexico plan, redirecting capital toward Europe, Brazil, and Southeast Asia instead.",
       hist:"Real: BYD paused its Mexico plant search in 2025 amid US political uncertainty and ultimately shelved the plan after Trump's tariff policies, redirecting investment elsewhere."},
      {label:"Press ahead with a Mexico plant on the existing timeline, betting tensions ease", fx:{cash:-14,trust:-6},
       result:"A bet on trade tensions cooling that does not pay off — the 100% US tariff wall and Mexico-adjacent tariff threats make the bet look worse with each passing month."},
      {label:"Abandon the US/North American market ambition entirely", fx:{cash:+2,trust:-4},
       result:"Capital saved, ambition narrowed. The world's largest auto market is now simply off the table."}
     ]},
    {id:"brazil", year:"DEC 2023–2025", title:"Brazil: The Bahia Factory and the Forced-Labor Scandal",
     text:"You've acquired a former Ford site in Bahia, Brazil for a planned $1.28 billion EV factory complex — your first major Latin American investment. Construction, subcontracted partly to China's Jinjiang Group, draws labor-ministry scrutiny: in December 2024, authorities report roughly 220 Chinese nationals working in conditions described as \"analogous to slavery,\" including passport confiscation and illegal wage deductions; 163 workers are reported freed.",
     choices:[
      {label:"Cooperate fully with Brazilian investigators while contesting the characterization of the violations", fx:{cash:-8,trust:-6}, set:["brazil_cooperate"],
       result:"BYD states it cooperated with investigations \"since the start\" while it and Jinjiang Group deny the most severe allegations. Brazilian prosecutors nonetheless sue BYD and two contractors in May 2025 for roughly $50 million in damages and add BYD to a government \"slave labor\" employer registry — a serious reputational setback even as construction continues.",
       hist:"Real: Brazilian prosecutors sued BYD and contractors in May 2025 over forced-labor conditions at the Bahia site, seeking ~257 million reais (~$50M); BYD cooperated with the investigation while denying the most severe allegations."},
      {label:"Deny responsibility and let subcontractors absorb the legal and reputational fallout", fx:{cash:-2,trust:-14},
       result:"It looks exactly like what it is. The denial becomes its own headline, on top of the original scandal."},
      {label:"Halt the project pending an independent labor-conditions review", fx:{cash:-12,trust:+2},
       result:"The most credible response, and the most expensive — construction stalls on your most ambitious Latin American bet while the review runs its course."}
     ]},
    {id:"revenue_crown", year:"MAR 2025", title:"BYD's Revenue Passes Tesla's — But So Does the Pressure",
     text:"Full-year 2024 revenue hits roughly 777 billion yuan (~$107 billion), surpassing Tesla's reported ~$97.7 billion, on 4.27 million vehicle deliveries — a 29% year-on-year jump including 1.76 million pure-BEVs and a large plug-in-hybrid contribution Tesla doesn't compete in at all. Profit growth, though, has not kept pace with the revenue and volume growth. Lean further into the low-price/high-volume strategy, or pivot toward margin discipline now?",
     choices:[
      {label:"Keep pushing the volume/price strategy into 2025", fx:{cash:-6,trust:+6}, set:["kept_pushing"],
       result:"You ride the revenue crown into 2025, even as profit growth lags badly behind revenue and volume growth — setting up the price-war backlash that follows within months.",
       hist:"Real: BYD's 2024 revenue (~$107B) surpassed Tesla's (~$97.7B) on 4.27M deliveries; BYD initially kept pushing the volume/price strategy into 2025 despite lagging profit growth."},
      {label:"Pivot toward margin discipline given the lagging profitability", fx:{cash:+10,trust:-4},
       result:"A more sustainable footing, and it means voluntarily ceding some of the volume momentum that built the revenue crown in the first place."}
     ]},
    {id:"price_war_rebuke", year:"MAY-JUN 2025", title:"The Price War That Drew a State Rebuke", cond:"kept_pushing",
     text:"On May 23, 2025 you cut prices on more than 20 models, some by 30-34%. The reaction is different in kind this time: competitors warn of \"Evergrande-like\" systemic risk in the EV sector, state-run People's Daily criticizes the \"rat-race competition\" and warns it threatens the international reputation of \"Made in China,\" and regulators signal they'll act against \"vicious competition\" damaging margins and quality industry-wide.",
     voice:"Wang Chuanfu, on the competitive environment: the industry is entering a \"brutal knockout stage,\" and BYD's own profit slump reflects \"fever pitch\" competition in the domestic market.",
     choices:[
      {label:"Continue the price-cutting strategy regardless of the criticism, prioritizing share", fx:{cash:-10,trust:-10}, set:["defiant_pricewar"],
       result:"BYD shares fall on the backlash news. Q1 2026 results show a steeper-than-expected profit drop that Bloomberg and others tie directly to the ongoing price war eating into the entire Chinese industry's margins, BYD included.",
       hist:"Real: BYD's May 2025 price cuts (20+ models, up to 30-34%) drew state-media criticism and a stock selloff; its Q1 2026 results showed a steeper-than-expected profit drop tied to the price war."},
      {label:"Ease off price cuts and pivot messaging toward technology and value differentiation", fx:{cash:+6,trust:+8},
       result:"A more defensible public posture, and a tacit admission that the strategy that built the revenue crown has reached its limit."},
      {label:"Publicly accept some responsibility while reframing the pressure as industry-wide", fx:{cash:-2,trust:+2},
       result:"A careful middle path. Wang's actual public posture leans this way — acknowledging the brutality of a dynamic BYD helped create, without fully owning it."}
     ]},
    {id:"quality_2026", year:"2025-2026", title:"Quality Complaints Resurface at Scale",
     text:"As volumes and price-cutting both reach historic extremes, quality complaints — echoing the 2011-2012 crisis pattern — flood Chinese consumer platforms and start appearing internationally, alongside a wave of recalls (one tranche cited at over 110,000 vehicles) and dealer-side financial stress; a major eastern-China dealer network is reported to collapse in May 2025. This is the same structural choice you faced in 2011, now at far larger scale and with far more international scrutiny stacked on top of it.",
     alt:[{if:"defiant_pricewar", text:"As volumes and price-cutting both reach historic extremes — the same price war you chose to keep fighting — quality complaints flood Chinese consumer platforms and start appearing internationally, alongside a wave of recalls and a major eastern-China dealer network collapse in May 2025. This is 2011 again, except this time you're the one who poured the gasoline."}],
     choices:[
      {label:"Invest heavily in quality-control systems and dealer financial health, even at cost to growth", fx:{cash:-10,trust:+14},
       result:"A deliberate echo of the 2012 rebuild — except at a scale and under an international spotlight (EU tariffs, Brazil litigation, US market closure) the 2012 version of this company never faced. The real-world outcome of this choice is still unfolding as of the most recent reporting.",
       hist:"Real: as of mid-2026 reporting, BYD's response to the resurfacing quality and dealer-stress crisis was still unfolding — an open question rather than settled history."},
      {label:"Treat the complaints as the inevitable noise of being the largest-volume seller, keep prioritizing growth", fx:{cash:+6,trust:-12},
       result:"It worked, sort of, as a short-term posture in 2009. Whether it works at 2026's scale, with regulators and foreign governments now watching, is the open question the entire industry is asking about you."}
     ]}
   ]
  }
 }
};
EVENTS.byd = [
 {title:"Lithium Price Swing", text:"Global lithium carbonate prices lurch on a single mine's production hiccup in Australia, and your battery-cost models need a rewrite by Friday.", fx:{cash:-4}, up:"Your in-house refining gives you more cushion than rivals buying on the spot market — but not zero cushion."},
 {title:"State Media Praise", text:"China Central Television runs a glowing segment on BYD's export ships, calling the self-owned fleet a model of industrial self-sufficiency.", fx:{trust:+5}, up:"Free advertising, state-approved. Your PR team frames it on the wall."},
 {title:"Rival Recall", text:"A competing Chinese EV maker recalls 50,000 vehicles for a battery defect. Customers shopping that segment suddenly have one fewer option.", fx:{trust:+3}, up:"You didn't even have to do anything. Sometimes that's the best kind of win."},
 {title:"Port Congestion", text:"A backlog at a major European port delays several of your car-carrier ships by weeks, stranding thousands of units offshore.", fx:{prod:-4}, up:"You charter two more ships within the month. Owning your own fleet means you can actually do that."},
 {title:"Engineer Poaching War", text:"A rival battery startup offers triple salaries to lure away a team of your LFP chemists.", fx:{prod:-3}, up:"Most stay. BYD pays well, and FinDreams' lab budget is hard to walk away from."},
 {title:"Viral Showroom Moment", text:"A customer's video of a Blade Battery-equipped car surviving a minor collision without fire goes viral on Chinese social media.", fx:{trust:+4}, up:"The nail test, paying dividends years later, one viral clip at a time."}
];
TICKER.byd = [
 "Tesla cuts Shanghai prices again — again",
 "Analyst: 'BYD's margins are a magic trick nobody can explain'",
 "Another Chinese EV startup folds, parts auctioned for scrap",
 "Geely exec, asked about BYD: 'we respect them, deeply, through gritted teeth'",
 "Lithium futures dip; battery-cost spreadsheets industry-wide get rewritten",
 "EU customs officials report 'unprecedented' Chinese EV import volumes",
 "Brazilian senator calls for hearings on Chinese manufacturing labor practices",
 "Norwegian dealer: 'we sold out of Tangs by lunch'"
];