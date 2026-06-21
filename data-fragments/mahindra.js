DATA.mahindra = {
 name:"Mahindra & Mahindra", short:"Mahindra", logo:"🐂", theme:"theme-mahindra", ipo:22,
 pitch:"A tractor company that keeps betting the farm on cars. Modest margins, stubborn ambition, and a chairman who wants the world to take an Indian engineer's SUV seriously.",
 kpis:[
  {key:"capital", label:"Capital Discipline", desc:"Group financial discipline. The tractor business funds your automotive swings — burn through its patience and the board cuts you off."},
  {key:"suv", label:"SUV Credibility", desc:"Product heat and brand trust as 'India's SUV specialist'. Lose it and you're just another assembler."},
  {key:"global", label:"Global & EV Readiness", desc:"Your bets beyond protected home turf — SsangYong, Ford, EVs. Hit zero and the world stops taking your global ambitions seriously."}
 ],
 ticker:"M&M",
 bankruptcy:"The tractor money finally runs dry. The board, the Mahindra family, and Dalal Street all arrive at the same conclusion at once: the automotive division has spent the family silver chasing a horizon it never reached.",
 legendary:"Scorpio to Thar to BE 6 — three decades, one unbroken thread: an Indian engineering team that refused to just assemble someone else's car. Anand Mahindra gets his global SUV brand, on India's terms.",
 eras:{
  a:{
   name:"The SUV Specialist Is Born", years:"1991–2010", start:{capital:55, suv:30, global:20}, stock0:6, deep:true,
   intro:"July 1991. India's economy has just been thrown open after decades behind license-raj walls, and your company's entire utility-vehicle lineup is a Willys Jeep design older than your engineers. Suzuki is already here through Maruti; GM, Ford and Toyota are circling. You are Deputy Managing Director under your uncle Keshub Mahindra, and the tractor business is the only thing keeping the lights on. Everyone expects you to keep licensing other people's cars. You're not sure you want to.",
   scenarios:[
    {id:"licence_raj", year:"JUL 1991", title:"The Licence Raj Ends",
     text:"Liberalization has ended the import protection that let Mahindra coast on 1940s-era Jeep derivatives — the CJ-340, the MM540 — for decades. Foreign automakers can now enter India more freely. The board has to decide what kind of company Mahindra's automotive arm actually wants to be.",
     choices:[
      {label:"Keep licensing and assembling foreign designs — it's worked for 40 years", fx:{capital:+8,suv:-10,global:-5}, set:["licensed"],
       result:"Safe, cheap, and exactly the strategy every competitor with deeper pockets can out-execute. The board likes the math. You don't.",
       hist:""},
      {label:"Build a genuine in-house R&D and engineering capability from scratch", fx:{capital:-10,suv:+12,global:+8}, set:["inhouse_rd"],
       result:"Expensive and unproven — Indian engineers designing a competitive modern vehicle has never really been tried. But it's the only path that doesn't end with Mahindra as someone else's badge.",
       hist:"Real: Mahindra chose to build in-house engineering capability, hiring GM (Detroit) veteran Dr. Pawan Goenka in 1993 as General Manager of R&D — the seed of the Scorpio program."},
      {label:"Exit utility vehicles entirely and focus purely on the more profitable tractor business", fx:{capital:+15,suv:-25,global:-15}, set:["exited_uvs"],
       result:"Tractors are calmer, more profitable, and far less competitive. They are also not why anyone remembers a car company.",
       hist:""}
     ]},
    {id:"goenka_hire", year:"1993", title:"Hiring the Man Who'll Build the Scorpio", cond:"inhouse_rd",
     text:"With the board's grudging blessing to build real engineering capability, you need someone to lead it. Dr. Pawan Goenka — a GM Detroit veteran with a Cornell PhD — is available, and he has a track record outside India that Mahindra has never employed before.",
     voice:"Goenka would later describe the period: spending \"the first 4-5 years... putting basics in place\" before product development even began.",
     choices:[
      {label:"Hire Goenka and give him a long runway to build basics before any product mandate", fx:{capital:-5,suv:+10,global:+5}, set:["goenka"],
       result:"Years of unglamorous infrastructure-building follow — test rigs, processes, hiring. The board asks, periodically and pointedly, what exactly it's paying for.",
       hist:"Real: Mahindra hired Pawan Goenka in 1993 as GM of R&D to build a domestic product-development organization rather than keep depending on foreign licensors."},
      {label:"Hire Goenka but demand a marketable product within two years", fx:{capital:+3,suv:+2,global:+2}, result:"Goenka pushes back hard on the timeline; what ships is rushed and forgettable. The talent stays, the rushed car doesn't."},
      {label:"Pass on Goenka and promote from within the existing assembly organization", fx:{capital:+5,suv:-8,global:-5}, result:"A safe, familiar choice. The org keeps assembling other people's designs, competently, forever."}
     ]},
    {id:"scorpio_bet", year:"1995–1997", title:"Build the Scorpio In-House, From Scratch", cond:"goenka",
     text:"Indian carmakers typically badge-engineer or license Japanese and Korean designs. Goenka's team proposes something nobody here has tried: a fully indigenous, from-scratch SUV, eventually costing around ₹600 crore over roughly five years to develop.",
     alt:[{if:"licensed", text:"Having chosen the licensing path in 1991, Goenka's team still pitches a from-scratch SUV — but now they're fighting institutional muscle memory built over 40 years of assembling other people's designs. ₹600 crore is a number the licensing wing of the company finds faintly absurd."}],
     choices:[
      {label:"Commit fully to in-house design with an integrated design-and-manufacturing team", fx:{capital:-12,suv:+18,global:+8}, set:["scorpio_inhouse"],
       result:"Five years of expensive, unglamorous engineering work that the board funds reluctantly, quarter after quarter, on faith alone.",
       hist:"Real: Mahindra committed to full in-house design, unveiling a prototype at the 2002 Auto Expo. Mahindra's own marketing avoided calling it an \"SUV,\" branding it simply a \"car\" to signal the leap into mainstream passenger vehicles."},
      {label:"License an existing Korean or Japanese SUV platform to move faster and cheaper", fx:{capital:+8,suv:-5,global:-5}, set:["licensed_platform"],
       result:"Faster to market, cheaper to fund, and indistinguishable from what every other Indian assembler is doing this decade."},
      {label:"Skip new development — facelift the existing Jeep-derived models instead", fx:{capital:+10,suv:-15,global:-10}, result:"The facelifts buy a few quarters of sales. They buy nothing for 2002, when the market will have moved on."}
     ]},
    {id:"scorpio_launch", year:"JUN 2002", title:"The Scorpio Launch Gamble", cond:"scorpio_inhouse",
     text:"The Scorpio is Mahindra's referendum on whether Indian engineering can deliver a competitive modern SUV. A timid launch protects the downside; a confident one stakes the company's credibility on day one.",
     choices:[
      {label:"Launch at an aggressive value price — Rs 5.99 lakh — to signal confidence, not caution", fx:{capital:-5,suv:+20,global:+12}, set:["scorpio_hit"],
       result:"The diesel-powered Scorpio, with a Renault-sourced petrol option, lands as both critically praised and commercially immediate — proof the in-house bet paid off.",
       hist:"Real: launched June 20, 2002 at Rs 5.99 lakh ex-showroom; it won \"Car of the Year\" (Business Standard Motoring) and \"Best SUV/Car of the Year\" (BBC World Wheels)."},
      {label:"Price conservatively to minimize downside risk", fx:{capital:+5,suv:+6,global:+2}, result:"It sells fine. 'Fine' was not the point of spending five years and ₹600 crore."},
      {label:"Delay further for additional refinement", fx:{capital:-8,suv:-5,global:-3}, result:"The refinement is real. So is the year of competitor launches that fill the gap you left open."}
     ]},
    {id:"renault_logan", year:"2005–2007", title:"Partner With Renault for a Sedan",
     text:"The Scorpio proved Mahindra could do SUVs, but the company has zero presence in the much larger passenger sedan segment. Renault wants an India entry without building from scratch, and proposes a joint venture — Mahindra Renault Ltd, 51% Mahindra, 49% Renault — to build the Logan locally.",
     choices:[
      {label:"Joint-venture with Renault on the Logan", fx:{capital:-8,suv:-3,global:+5}, set:["logan_jv"],
       result:"The JV launches the Logan in 2007. It moves into a segment Mahindra has never touched, with a partner who's never built a car in India.",
       hist:"Real: the JV launched the Logan in 2007, selling ~28,000 units in 2008 before collapsing to ~5,000 by end of 2009 — hurt by its dated, boxy design and India's 2006 tax restructuring penalizing cars marginally over 4 meters."},
      {label:"Build an independent Mahindra-badged sedan instead", fx:{capital:-12,suv:-2,global:+2}, result:"Slower, costlier, and entirely on Mahindra's own engineering bandwidth — which is still mostly busy with the Scorpio's successor."},
      {label:"Skip sedans entirely and stay SUV/UV focused", fx:{capital:+6,global:-5}, result:"Discipline has a cost: the much larger sedan volume pool simply isn't yours, this decade or the next."}
     ]},
    {id:"logan_flop", year:"APR 2010", title:"The Logan Flop: Buy Renault Out", cond:"logan_jv",
     text:"The Logan's sales have collapsed from 28,000 units to about 5,000 amid criticism of its dated design and a tax bracket that penalizes its length. Renault wants out of the JV entirely.",
     voice:"Headline at the time: \"Renault ends Indian car alliance over Logan flop.\"",
     choices:[
      {label:"Buy out Renault's stake and rebrand the car as the Verito, taking full control", fx:{capital:-6,suv:+2,global:+3}, result:"Mahindra inherits a flop and a factory. Neither is glamorous; both keep the sedan door open for whatever comes next.",
       hist:"Real: Renault exited the JV in April 2010; Mahindra bought out Renault's stake and rebranded the car the \"Verito.\""},
      {label:"Let Renault keep the platform and exit the segment entirely", fx:{capital:+8,suv:-2,global:-5}, result:"Clean exit, zero sedan presence going forward. The capital saved funds the next SUV instead."},
      {label:"Negotiate a smaller residual stake rather than full buyout", fx:{capital:+2,global:-2}, result:"A half-measure that satisfies no one and leaves Mahindra answering for a car it doesn't fully control."}
     ]},
    {id:"punjab_tractors", year:"MAR 2007", title:"Buying a Wounded Rival: Punjab Tractors",
     text:"Punjab Tractors, owner of the respected 'Swaraj' brand, has fallen from the #2 tractor maker in India to #5 under poor management. Actis Group and the Burman family investment vehicles are looking to sell their stake.",
     choices:[
      {label:"Acquire Punjab Tractors to add the Swaraj brand and consolidate the tractor market", fx:{capital:+15,suv:+2,global:0}, set:["punjab"],
       result:"A 43.3% stake at Rs 360/share, valued around Rs 1,489 crore. The tractor cash machine — the thing funding every automotive adventure on this list — just got bigger and stronger.",
       hist:"Real: Mahindra agreed on March 9, 2007 to acquire a 43.3% stake in Punjab Tractors, also picking up a 14% indirect stake in Swaraj Mazda. It was later merged outright into Mahindra & Mahindra."},
      {label:"Let a rival acquire Punjab Tractors instead", fx:{capital:-10,global:-2}, result:"Someone else gets Swaraj's loyal customer base. Your tractor business — and by extension every car bet it funds — is a little less dominant for it."},
      {label:"Let it compete itself into irrelevance organically", fx:{capital:-5}, result:"Patience without action. A rival or private equity will eventually take the asset you declined."}
     ]},
    {id:"xuv500", year:"SEP 2011", title:"The XUV500: India's First Indigenous Monocoque SUV",
     text:"Nine years after the Scorpio, Mahindra needs a more modern, globally credible SUV. The proposal: India's first indigenously developed monocoque SUV with a transverse engine — a real engineering step up from the Scorpio's body-on-frame design — built entirely in-house at the new Mahindra Research Valley in Chennai.",
     alt:[{if:"licensed_platform", text:"Having leaned on a licensed platform for the Scorpio, the case for an all-new in-house monocoque SUV now has to overcome a board that remembers how much cheaper licensing was. The argument for going fully indigenous this time is harder to win, not easier."}],
     choices:[
      {label:"Build a wholly new in-house 'Mahindra Global SUV platform'", fx:{capital:-15,suv:+20,global:+15}, set:["xuv_hit"],
       result:"Unveiled in Pune with a distinctive 'pouncing cheetah' design language drawn from customer input across global markets — Mahindra's most ambitious engineering bet since the Scorpio.",
       hist:"Real: Mahindra unveiled the XUV500 in Pune on September 28, 2011, built on its own new global SUV platform. It became one of Mahindra's most important models of the decade."},
      {label:"License a foreign monocoque platform to move faster", fx:{capital:+5,suv:+5,global:-5}, result:"Faster and cheaper. It also quietly concedes that the in-house engineering story has limits."},
      {label:"Keep refining the Scorpio's body-on-frame architecture instead", fx:{capital:+8,suv:-10,global:-8}, result:"The Scorpio ages another generation. So does Mahindra's claim to be a modern SUV engineering company."}
     ]}
   ]
  },
  b:{
   name:"Going Global, Going Electric", years:"2010–2016", start:{capital:50, suv:55, global:25}, stock0:14,
   intro:"2010. Flush with cash and confidence off the Scorpio and the about-to-launch XUV500, Anand Mahindra wants the company on the world stage for the first time. Two audacious, expensive bets are on the table at once: a $463M run at bankrupt South Korean automaker SsangYong, and an early, unfashionable wager on electric vehicles. Both could make Mahindra a real global player. Either could also just burn cash that the tractor business worked hard to generate.",
   scenarios:[
    {id:"reva", year:"MAY 2010", title:"Buying an Electric Car Company Nobody Wants Yet",
     text:"REVA, a small Bangalore EV maker founded in 1994 as a JV between the Maini Group and US-based AEV LLC, is a commercial niche product in a market with no real EV demand or policy support yet. Mahindra has to decide whether to make a speculative early bet on EVs years ahead of the market.",
     choices:[
      {label:"Acquire REVA outright and commit engineering resources to EVs", fx:{capital:-8,global:+15}, set:["reva_buy"],
       result:"Mahindra acquires 55.2% equity through a mix of buying out promoters' shares and a fresh equity infusion of over Rs 45 crore (~$10M). Dr. Pawan Goenka becomes chairman of the renamed Mahindra REVA Electric Vehicle Company; REVA co-founder Chetan Maini stays on as Chief of Technology & Strategy.",
       hist:"Real: Mahindra acquired 55.2% of REVA in May 2010, renaming it Mahindra REVA Electric Vehicle Company."},
      {label:"Watch and wait for the EV market to mature before investing", fx:{capital:+5,global:-10}, result:"Prudent. It also means watching from the sidelines for most of a decade that the EV story turns out to need."},
      {label:"Develop EV technology purely in-house without acquiring REVA", fx:{capital:-5,global:+3}, result:"Slower and more expensive than buying an existing EV maker's decade of hard-won lessons outright."}
     ]},
    {id:"ssangyong_gamble", year:"NOV 2010–FEB 2011", title:"The SsangYong Gamble",
     text:"South Korea's SsangYong Motor — a SUV-focused automaker that went bankrupt in 2009 under prior Chinese owner SAIC — is being auctioned by creditors. Mahindra has no prior international manufacturing presence and is weighing whether to become the controlling owner of a foreign automaker for the first time.",
     choices:[
      {label:"Acquire a controlling stake to gain SUV engineering, diesel tech, and Korean/European/Russian market access", fx:{capital:-15,suv:+5,global:+18}, set:["ssangyong"],
       result:"Mahindra signs a definitive agreement for a 70% stake for $463 million — $378M of new shares plus $85M of corporate bonds — closing after Korean creditor approval. The tractor cash machine has just bought a turnaround project, not a sure thing.",
       hist:"Real: Mahindra acquired 70% of SsangYong for $463 million, with the deal closing in early 2011. Mahindra later raised its stake further, to ~73% in 2013 and ~74.65% by 2019."},
      {label:"Pursue a smaller technology-licensing or supply partnership instead of ownership", fx:{capital:+5,global:+5}, set:["ssangyong_partner"],
       result:"Lower risk, lower reward — and no seat at the table when SsangYong's next owner decides its strategy."},
      {label:"Skip international M&A and stay focused on the Indian domestic market", fx:{capital:+10,global:-15}, set:["no_ssangyong"],
       result:"Capital stays safe at home. Mahindra's global ambitions stay exactly where they started — nowhere."}
     ]},
    {id:"stake_raise", year:"2012–2013", title:"How Much More Korean Stock to Buy?", cond:"ssangyong",
     text:"Having taken control at 70%, Mahindra must decide how much further to consolidate ownership of SsangYong as the turnaround unfolds. Full ownership offers more control but ties up more group capital in a still-unproven foreign subsidiary.",
     choices:[
      {label:"Raise the stake further to deepen control and signal long-term commitment", fx:{capital:-6,global:+8}, set:["stake_raised"],
       result:"Mahindra raises its stake to 73% by February 2013, continuing to increase it over subsequent years, reaching roughly 74.65% by 2019. Commitment, for better or worse, is now total.",
       hist:"Real: Mahindra raised its SsangYong stake to 73% by February 2013, eventually reaching ~74.65% by 2019."},
      {label:"Hold steady at 70%", fx:{capital:+2,global:+2}, result:"A measured pace. SsangYong's fate stays tied to Mahindra's wallet, just slightly less so."},
      {label:"Reduce exposure pending clearer turnaround signs", fx:{capital:+6,global:-8}, result:"A vote of low confidence in your own acquisition, delivered just as the Tivoli program needs every ounce of parent-company conviction."}
     ]},
    {id:"tivoli", year:"2011–2014", title:"Rebuild SsangYong's Product Line: Bet on the Tivoli", cond:"ssangyong",
     text:"Having bought a distressed automaker, SsangYong management must decide where to spend scarce development capital for the brand's comeback. The proposal: an all-new compact crossover, the Tivoli, the first clean-sheet model since the Mahindra takeover.",
     choices:[
      {label:"Invest heavily in one flagship new model to re-establish credibility", fx:{capital:-10,global:+15}, set:["tivoli"],
       result:"SsangYong spends roughly 350 billion Korean won and 42 months developing the Tivoli, launched January 2015 — the first new SsangYong model since the buyout.",
       hist:"Real: SsangYong targeted 35,000 Tivoli units in 2015 and exceeded it — about 64,000 were built/sold globally that year, becoming SsangYong's most successful new model in years, though brand awareness remained a persistent weakness."},
      {label:"Spread limited capital across refreshing multiple existing aging models", fx:{capital:-4,global:+3}, result:"No single model gets enough investment to truly compete. The lineup ages gracefully into irrelevance instead."},
      {label:"Deprioritize new product and focus purely on cost-cutting and restructuring", fx:{capital:+5,global:-8}, result:"The balance sheet looks tidier. The showroom looks like it has nothing to sell."}
     ]},
    {id:"reva_scale", year:"2012–2014", title:"Scaling Mahindra REVA", cond:"reva_buy",
     text:"With REVA renamed and reorganized, the question becomes how hard to push the still-tiny EV business while SsangYong and the XUV500 are absorbing most of the group's automotive attention and capital.",
     choices:[
      {label:"Keep funding REVA's e2o development as a long-term bet, modest sales or not", fx:{capital:-5,global:+10}, set:["reva_committed"],
       result:"The e2o sells in the low thousands. Commercially it is closer to a novelty act than a product line — but the engineering and policy relationships being built now will matter later, when EVs stop being a novelty.",
       hist:""},
      {label:"Scale back REVA investment to focus capital on SsangYong and the XUV500", fx:{capital:+6,global:-8}, result:"The sensible allocation, by 2013's numbers. It also means starting the next decade's EV race from further behind."},
      {label:"Spin REVA off to find outside investors and dilute Mahindra's exposure", fx:{capital:+4,global:-3}, result:"Lower risk, lower control. The EV unit's destiny is no longer fully Mahindra's to write."}
     ]}
   ]
  },
  c:{
   name:"SUV Boom, Korean Bust, Pandemic Reckoning", years:"2016–2021", start:{capital:45, suv:60, global:35}, stock0:22,
   intro:"2016. Domestically, Mahindra is riding a genuine SUV boom. Internationally, the SsangYong bet you made in Era B is starting to curdle. Pawan Goenka is now MD & CEO, steering both the high points — a reborn Thar, a flashy new Ford alliance — and the low ones: a pandemic, a collapsing Korean subsidiary, and his own retirement after 27 years.",
   scenarios:[
    {id:"ford_jv", year:"OCT 2019", title:"The Ford Alliance: Sharing the EV Burden",
     text:"Developing new SUV platforms and electric powertrains is increasingly expensive, and Mahindra wants scale partners to share the cost. Ford, struggling for relevance and profitability in India, is looking for a way to stay in the market without bearing the full cost alone.",
     choices:[
      {label:"Form a joint venture with Ford to co-develop SUVs and EVs, sharing suppliers and powertrains", fx:{capital:-6,global:+15}, set:["ford_jv"],
       result:"Ford and Mahindra enter a definitive agreement for a $275 million joint venture — Mahindra 51%, Ford 49% — to develop and sell vehicles in India and export to emerging markets, including at least three new SUVs and electric variants under the Ford brand.",
       hist:"Real: Ford and Mahindra signed the JV agreement in October 2019."},
      {label:"Go it alone on EV/SUV platform development", fx:{capital:-10,global:+5}, result:"More expensive, fully yours. No partner to blame, and no partner's engineering shortcuts either."},
      {label:"Seek a different, Asian partner instead of Ford", fx:{capital:-4,global:+6}, result:"A road not taken with Ford specifically — and one this dossier didn't see fully play out."}
     ]},
    {id:"thar_reborn", year:"SEP–OCT 2020", title:"The Thar Reborn",
     text:"The Thar — descended directly from the original Jeep CKD lineage — is overdue for a generational redesign that can compete on modern road manners and features while keeping its rugged, off-road identity intact, just as lifestyle SUVs are surging in India.",
     choices:[
      {label:"Launch an all-new, more refined and feature-rich Thar for a broader lifestyle audience, without losing real off-road capability", fx:{capital:-5,suv:+20,global:+5}, set:["thar_hit"],
       result:"Unveiled in early August 2020, launched commercially October 2, 2020. Roughly 9,000 bookings land within the first four days, 20,000 within a month, ultimately surpassing 50,000 — with waiting periods stretching to 7–11 months in various cities, later worsened by the global chip shortage.",
       hist:"Real: the new-generation Thar launched October 2, 2020 and became one of Mahindra's biggest booking successes."},
      {label:"Keep the Thar a niche, barebones off-roader to avoid diluting its identity", fx:{capital:+3,suv:+2,global:-3}, result:"Purists approve. Volume, and the lifestyle-SUV wave passing it by, do not."},
      {label:"Delay the redesign given pandemic uncertainty", fx:{capital:+5,suv:-10,global:-5}, result:"Caution costs you the exact window when bored, locked-down India started dreaming about weekend off-roading."}
     ]},
    {id:"covid_halt", year:"MAR–APR 2020", title:"COVID Hits: Halt Production, Conserve Cash",
     text:"The COVID-19 pandemic forces an unprecedented nationwide lockdown in India. Mahindra must decide how aggressively to shut down operations and how to triage cash across its businesses — including SsangYong, already in financial distress before the pandemic.",
     choices:[
      {label:"Suspend manufacturing entirely and prioritize liquidity preservation across the group", fx:{capital:+10,suv:-5,global:-5}, set:["covid_conserve"],
       result:"Mahindra suspends manufacturing at Nagpur and halts production at Chakan and Kandivali, alongside Maruti and Honda. M&M's stock hits its lowest level since April 2010, tanking 51% in a month, and group net profit plummets roughly 85% with no near-term revival in sight.",
       hist:"Real: Mahindra suspended production across its plants in March 2020 as part of the broader Indian auto-industry shutdown."},
      {label:"Continue limited operations to protect market share", fx:{capital:-8,suv:+5,global:-3}, result:"A defiant skeleton crew keeps lines moving. Regulators and the headlines are not impressed."},
      {label:"Keep funding SsangYong regardless of group cash pressure", fx:{capital:-15,global:+5}, result:"Loyalty to the Korean bet, at a moment the Indian core can least afford it."}
     ]},
    {id:"ssangyong_no", year:"APR 2020", title:"Cutting SsangYong Loose: The Board Says No", cond:"ssangyong",
     text:"SsangYong needs a fresh equity injection of around $406 million (Rs 3,078 crore) to stay solvent, just as Mahindra itself is reeling from COVID-19's hit to its core Indian business. The board must decide whether to keep bailing out the Korean subsidiary or finally cut the cord.",
     alt:[{if:"covid_conserve", text:"Having already chosen liquidity preservation over keeping every line running, the board walks into this SsangYong vote having already proven, to itself, that it can say no to a cash drain. The discipline built in March makes April's decision easier — and harder to walk back from."}],
     voice:"Mahindra & Mahindra company statement, April 2020: \"The magnitude of the unfortunate and unforeseen crisis created by Covid-19 has compelled us to take the difficult decision.\"",
     choices:[
      {label:"Refuse further investment and ask SsangYong to seek outside investors instead", fx:{capital:+12,global:-15}, set:["ssangyong_cut"],
       result:"On April 4, 2020, the board rejects the plan to inject roughly Rs 3,078 crore of fresh equity into SsangYong, signaling Mahindra will not fund it further. A decade of Korean ambition ends with one board vote.",
       hist:"Real: Mahindra & Mahindra's board rejected the SsangYong equity injection on April 4, 2020, with the company citing the COVID-19 crisis directly."},
      {label:"Approve the fresh equity injection to keep SsangYong alive", fx:{capital:-18,global:+10}, result:"The lifeline holds, for now, at a cost the group's own COVID-battered cash position can barely absorb."},
      {label:"Provide partial bridge funding while a longer-term solution is found", fx:{capital:-8,global:0}, result:"A half-measure that buys SsangYong a few more months without solving anything."}
     ]},
    {id:"ssangyong_bankrupt", year:"DEC 2020", title:"SsangYong Files for Bankruptcy", cond:"ssangyong_cut",
     text:"Without fresh capital from Mahindra and unable to meet loan repayments of about 60 billion won or persuade creditors to reschedule, SsangYong is forced into court receivership.",
     choices:[
      {label:"Let SsangYong go through court receivership while searching for a new investor", fx:{capital:+5,global:-10}, set:["ssangyong_receivership"],
       result:"SsangYong files for court receivership on December 21, 2020, after missing the loan repayment. By mid-2021, Mahindra confirms it's willing to relinquish its position as largest shareholder if a suitable new investor emerges — while ruling out further capital injection itself.",
       hist:"Real: SsangYong filed for bankruptcy/court receivership on December 21, 2020."},
      {label:"Attempt an eleventh-hour rescue financing despite the board's earlier refusal", fx:{capital:-15,global:+8}, result:"Reversing the April decision now would be expensive and would say, out loud, that the board's discipline was theater."},
      {label:"Abandon the subsidiary entirely and write it off immediately", fx:{capital:+8,global:-18}, result:"The cleanest break, and the bluntest signal that an 11-year global ambition has failed outright."}
     ]},
    {id:"ford_jv_dies", year:"DEC 31, 2020 / JAN 2021", title:"Letting the Ford JV Die", cond:"ford_jv",
     text:"The Ford-Mahindra JV's definitive agreement carried a December 31, 2020 deadline. Pandemic-driven shifts in both companies' global strategies — Ford was simultaneously restructuring its international operations under new CEO Jim Farley — made the original deal's economics look outdated.",
     voice:"Ford/Mahindra joint statement: \"...driven by fundamental changes in global economic and business conditions... over the past 15 months.\"",
     choices:[
      {label:"Let the agreement lapse and formally end the partnership", fx:{capital:+4,global:-12}, set:["ford_jv_dead"],
       result:"Ford and Mahindra mutually determine they will not complete the joint venture after the deadline passes, confirming in early January 2021 — with a fuller joint statement around April 1, 2021 — that they will not collaborate on any of the previously agreed projects.",
       hist:"Real: Ford and Mahindra confirmed the end of their JV collaboration in January and April 2021 statements."},
      {label:"Renegotiate the JV's terms to reflect new conditions", fx:{capital:-8,global:+8}, result:"Possible, in theory. In practice, two companies retrenching from a pandemic rarely find new shared math."},
      {label:"Extend the deadline while continuing talks", fx:{capital:-3,global:+2}, result:"A stalling tactic. It delays the inevitable announcement by a few months at modest cost."}
     ]},
    {id:"goenka_retires", year:"MAR 2021", title:"Pawan Goenka Hands Over the Keys",
     text:"After 27 years at Mahindra — steering the Scorpio and XUV era, the SsangYong acquisition's aftermath, the Ford JV, and the pandemic crisis — Goenka's tenure as MD & CEO ends, coinciding with broader Mahindra Group leadership renewal.",
     choices:[
      {label:"Bring in a finance/strategy executive — Anish Shah — to professionalize group-wide capital allocation", fx:{capital:+10,global:+5}, set:["shah_ceo"],
       result:"Mahindra Group announces Pawan Goenka's retirement effective April 2, 2021, with Anish Shah taking over. Rajesh Jejurikar, as Executive Director, takes full operational charge of the Automobile and Farm Equipment sectors, reporting to Shah — separating group strategy from auto/farm operating leadership.",
       hist:"Real: Anish Shah became MD & CEO from April 2021; later that year, when Anand Mahindra became Non-Executive Chairman, Shah became the first professional MD & CEO with complete oversight of the whole Mahindra Group."},
      {label:"Promote an internal operations-focused successor with deep automotive engineering pedigree", fx:{capital:-3,suv:+8,global:-3}, result:"Continuity of engineering culture, less change in financial discipline at exactly the moment SsangYong's losses demand it."},
      {label:"Have Anand Mahindra resume a more hands-on executive role himself", fx:{capital:-5,global:0}, result:"A chairman returning to day-to-day operations is rarely the stable transition a 27-year veteran's exit calls for."}
     ]}
   ]
  },
  d:{
   name:"Born Electric", years:"2021–2026", start:{capital:50, suv:65, global:30}, stock0:55,
   intro:"2021. Anish Shah is MD & CEO, Rajesh Jejurikar runs Auto and Farm Sectors, and the SsangYong wound is still open. The next five years will be about closing the book on the costliest legacy liability in Mahindra's history and pivoting hard into a dedicated, purpose-built EV strategy — while fending off recurring whispers that the whole conglomerate should finally be split apart.",
   scenarios:[
    {id:"edison_motors", year:"JAN–APR 2022", title:"Selling SsangYong: The Edison Motors Deal That Wasn't",
     text:"With SsangYong in court receivership and Mahindra no longer willing to fund it, creditors run a bid process. A consortium led by Korean EV startup Edison Motors emerges as the winning bidder.",
     choices:[
      {label:"Accept the Edison Motors consortium's winning bid and proceed to finalize the sale", fx:{capital:+5,global:+3}, set:["edison_deal"],
       result:"In January 2022, the Edison Motors-led consortium agrees to pay approximately 305 billion won (~$255M) for SsangYong. It looks, briefly, like the exit Mahindra has wanted for two years.",
       hist:"Real: Edison Motors failed to deposit the agreed bid amount, and Mahindra/SsangYong terminated the deal in April 2022 — the rescue effort collapsed and the search for a buyer had to restart."},
      {label:"Hold out for a stronger, more reliable bidder", fx:{capital:-3,global:-2}, result:"Skepticism about Edison Motors' financing turns out to be well founded — but holding out costs more months of uncertainty either way."},
      {label:"Retain a residual minority stake rather than exit completely", fx:{capital:-5,global:+5}, result:"A hedge against total loss of relevance in Korea, at the cost of never fully closing the chapter."}
     ]},
    {id:"kg_group", year:"2022", title:"Finally Exiting SsangYong: KG Group Takes Over", cond:"edison_deal",
     text:"After the Edison Motors collapse, a new bidder — the KG Group consortium — steps in to acquire SsangYong via the Seoul Bankruptcy Court's approved rehabilitation plan, finally allowing Mahindra to close the book on an asset that consumed capital and management attention for over a decade.",
     choices:[
      {label:"Accept the KG Group consortium deal and exit fully", fx:{capital:+15,global:+10}, set:["kg_exit"],
       result:"The KG Group consortium acquires SsangYong for approximately Rs 5,523 crore, taking an 80.50% stake; SsangYong retains 5.15% and Mahindra Electric Mobility Limited holds a residual 0.04% plus a cash payment. SsangYong is later renamed KG Mobility. Mahindra's 11-year, ultimately loss-making SsangYong chapter closes.",
       hist:"Real: the Seoul Bankruptcy Court approved KG Group's rehabilitation plan for SsangYong in 2022."},
      {label:"Continue searching for a higher-value buyer", fx:{capital:-6,global:-5}, result:"Another round of due diligence on an asset everyone already knows is damaged goods. The clock, and the capital tied up, keep running."},
      {label:"Attempt to retain a strategic minority position", fx:{capital:-4,global:+4}, result:"A smaller foothold in a company you spent a decade trying to fully control. The irony is not lost on the board."}
     ]},
    {id:"born_electric", year:"AUG 2022", title:"Born Electric: Committing Over $1 Billion to a New EV Platform",
     text:"With SsangYong no longer absorbing capital and attention, and rival Tata Motors moving early into Indian EVs, Mahindra must decide how aggressively to commit capital to a dedicated, purpose-built electric architecture rather than retrofitting existing combustion platforms.",
     alt:[{if:"kg_exit", text:"With the SsangYong chapter finally closed and its capital freed up, the case for a billion-dollar EV platform commitment is the cleanest it has ever been — there's no decade-old Korean subsidiary left to argue the money is needed elsewhere."}],
     choices:[
      {label:"Commit over $1 billion to a new bespoke EV platform (\"INGLO\") and launch a dedicated electric-only sub-brand", fx:{capital:-15,suv:+5,global:+20}, set:["inglo"],
       result:"On August 15, 2022, Mahindra unveils its \"Born Electric Vision,\" revealing five new electric SUV concepts under two brands — the existing XUV line and a new electric-only brand called \"BE\" — built on the new INGLO platform, plus plans to invest roughly Rs 10,000 crore over 7–8 years on manufacturing, development and production.",
       hist:"Real: Mahindra unveiled the Born Electric Vision and committed over $1 billion to the INGLO platform on August 15, 2022."},
      {label:"Continue converting existing ICE platforms to EVs at lower cost and risk", fx:{capital:+5,global:-8}, result:"Cheaper, faster, and exactly the compromised-architecture EV that reviewers will spend years comparing unfavorably to purpose-built rivals."},
      {label:"Wait for India's EV market and charging infrastructure to mature further before committing major capital", fx:{capital:+8,global:-15}, result:"Patience that hands Tata Motors, and eventually Tesla and Chinese entrants, a multi-year head start in defining what an Indian EV SUV looks like."}
     ]},
    {id:"be6_launch", year:"NOV 2024–MAR 2025", title:"Launching BE 6 and XEV 9e Into a Skeptical Market", cond:"inglo",
     text:"After two years of platform development, Mahindra must bring its first INGLO-based EVs to market, against mixed broader EV adoption in India and competition from Tata's established EV lineup and the looming entry of global players.",
     choices:[
      {label:"Launch with premium positioning and advanced features (e.g., Monroe intelligent suspension) to differentiate on technology", fx:{capital:-5,suv:+15,global:+15}, set:["be6_premium"],
       result:"The BE 6 and XEV 9e are unveiled in November 2024; bookings open February 14, 2025; pricing lands around ₹18.90 lakh (BE 6) and ₹21.90 lakh (XEV 9e), with deliveries beginning February–March 2025. By September 2025 the pair post their best-ever monthly production, sales and export figures; by November 2025 combined deliveries surpass 30,000 units since launch.",
       hist:"Real: the BE 6 and XEV 9e launched with premium tech positioning starting late 2024/early 2025 and went on to post record monthly sales by September 2025."},
      {label:"Compete primarily on price to maximize early volume", fx:{capital:+3,suv:+5,global:+5}, result:"More units move sooner. The 'premium tech flagship' positioning Mahindra spent two years building gets diluted before it ever gets a chance to prove itself."},
      {label:"Stagger the launch further to ensure full production readiness across all variants before any bookings open", fx:{capital:-3,suv:-5,global:-3}, result:"Cleaner production ramp, slower momentum — and a longer window for Tata and incoming global rivals to define the conversation first."}
     ]},
    {id:"demerger", year:"OCT 2025", title:"Should Auto and Tractors Finally Split?",
     text:"Media reports surface that Mahindra Group is weighing separating its tractor, passenger-vehicle/EV, and truck businesses into independent entities — a recurring idea given how differently the capital-intensive, cyclical auto/EV business and the steadier, highly profitable tractor business behave, and given peers like Tata Motors pursuing their own demergers around the same period.",
     alt:[{if:"be6_premium", text:"The demerger question arrives just as BE 6 and XEV 9e are finally proving the EV bet can work commercially — which makes the case for keeping the tractor cash machine attached to the EV business, just a little longer, easier to make out loud."}],
     choices:[
      {label:"Retain the conglomerate structure to preserve sourcing, supply chain and R&D synergies", fx:{capital:+10,global:+3}, set:["no_demerger"],
       result:"Mahindra & Mahindra denies the demerger reports in October 2025, reaffirming it sees continued value in keeping auto and tractor businesses together, citing sourcing, supply chain and R&D synergies — and noting prior internal demerger discussions had been shelved over fears a standalone tractor company could become a takeover target.",
       hist:"Real: Mahindra & Mahindra publicly denied demerger reports in October 2025, reaffirming the conglomerate structure."},
      {label:"Proceed with a demerger to let capital markets value each business independently", fx:{capital:-8,global:+8}, result:"Bankers love the math. The decades-old cross-subsidy that funded the Scorpio, SsangYong, and INGLO alike disappears with it."},
      {label:"Pursue a partial restructuring — a separate listing for EVs only — short of a full demerger", fx:{capital:-3,global:+5}, result:"A middle path nobody has actually tried yet, which is precisely why it satisfies neither the synergy purists nor the value-unlock crowd."}
     ]}
   ]
  }
 }
};
EVENTS.mahindra = [
 {title:"Monsoon Tractor Boom", text:"A strong monsoon sends rural incomes — and tractor sales — soaring. The farm equipment division just bought the auto business another quarter of patience.", fx:{capital:+6}, up:"Nobody in Mumbai notices. Everybody in the boardroom does."},
 {title:"Rupee Wobbles", text:"A sudden rupee depreciation makes every dollar of SsangYong or INGLO spending quietly more expensive to fund from India.", fx:{capital:-4}, up:"The treasury team hedges what it can and absorbs the rest with a shrug."},
 {title:"Waiting List Goes Viral", text:"A Thar owner's 11-month-wait complaint thread goes viral on social media — equal parts frustration and bragging rights.", fx:{suv:+5}, up:"Scarcity, it turns out, is its own kind of marketing."},
 {title:"Chip Shortage Bites", text:"The global semiconductor shortage delays a production ramp Mahindra was counting on this quarter.", fx:{suv:-4,global:-3}, up:"Engineers reroute around whatever chips are actually available. Slowly."},
 {title:"Analyst Downgrade", text:"A foreign brokerage cuts its rating, citing 'unresolved questions about Mahindra's global ambitions.'", fx:{global:-5}, up:"The stock dips for a week and the comment section argues about it for longer."},
 {title:"Export Order Lands", text:"A surprise SUV export order from a neighboring market lands on the books, with little fanfare.", fx:{global:+4}, up:"Small money, but proof the 'global' in the strategy deck isn't entirely aspirational."}
];
TICKER.mahindra = [
 "Maruti Suzuki still owns half the Indian car market",
 "Tata Motors' EV lineup keeps the pressure on",
 "Rural tractor demand props up another quarter",
 "BYD and other Chinese entrants eye the Indian SUV segment",
 "Anand Mahindra tweets something the internet enjoys",
 "Thar waiting lists remain the stuff of dealer legend",
 "Bookings open for the next INGLO-based launch",
 "Analysts debate the conglomerate discount, again"
];
