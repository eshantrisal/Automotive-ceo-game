DATA.toyota = {
 name:"Toyota", short:"Toyota", logo:"⛩", theme:"theme-toyota", ipo:28,
 pitch:"The world's most disciplined, highest-volume car company — built on a sacred manufacturing religion that just got a self-inflicted crisis of faith. Low margin for error, civilization-scale upside.",
 kpis:[
  {key:"trust", label:"Brand Trust", desc:"Public and regulatory confidence in Toyota's quality and safety. Recalls and scandals burn it; reform and candor rebuild it. Hit zero and the 'quality' brand is a punchline."},
  {key:"prod", label:"Production Resilience", desc:"Ability to actually build and ship cars at record volume despite shocks to the supply chain. Hit zero and the assembly lines stop."},
  {key:"future", label:"Future Readiness", desc:"Competitiveness in EVs, batteries and software versus the safer, profitable hybrid-and-hydrogen path. Hit zero and Toyota becomes the Kodak of cars."}
 ],
 ticker:"TM",
 bankruptcy:"The Toyota Production System — the most studied manufacturing religion on Earth — finally meets a crisis it cannot kaizen its way out of. The line stops, this time for good.",
 legendary:"You took the company that invented lean manufacturing through a recall crisis, an earthquake, an EV reckoning and a scandal wave — and somehow it's still the most trusted name in cars, still #1 by volume, and still betting on a battery nobody else has built yet.",
 eras:{
  a:{
   name:"The Reckoning", years:"2009–2013", start:{trust:55, prod:60, future:45}, stock0:38, deep:true,
   intro:"June 2009. You are Akio Toyoda, great-grandson of the founder, and you have just inherited the presidency of the world's newly-crowned #1 automaker at the exact moment it posts its first net loss in fifty-nine years. The 'Global 30' expansion that won Toyota the crown is being blamed, quietly and then loudly, for diluting the obsessive quality culture the company was built on. You promised to go 'back to basics.' History is about to test whether you meant it.",
   scenarios:[
    {id:"crown", year:"JAN 2009", title:"The Crown Nobody Wanted",
     text:"Toyota's 2008 sales of 8.97 million vehicles edge out GM's 8.36 million, making it the world's #1 automaker for the first time in 77 years — but the news lands in the deepest auto downturn since the Depression, with Toyota's own sales down 4% for the first time in a decade. The 'Global 30' plan that won this crown is increasingly blamed for stretching the quality culture thin.",
     voice:"Paul Ingrassia, auto journalist: \"Toyota is suffering from trying to get too big, too fast.\"",
     choices:[
      {label:"Celebrate the milestone and keep the expansion momentum going", fx:{prod:+10,trust:-8,future:+4}, set:["expand_proud"],
       result:"The press release reads triumphant. Inside the company, engineers who've been flagging quality slippage for two years feel quietly unheard."},
      {label:"Quietly slow expansion and reinvest in quality systems now, before anything breaks", fx:{trust:+10,prod:-6}, set:["slow_quality"],
       result:"Wall Street doesn't notice a deceleration dressed as discipline. The board does. It buys you nothing in headlines and everything in foundation."},
      {label:"Downplay the crown entirely; refocus all messaging on cost control given the crisis", fx:{prod:+4,trust:+2},
       result:"Toyota publicly treats #1 as incidental. A month later the company forecasts its first operating loss in 71 years, which makes the modesty look prophetic rather than humble.",
       hist:"Real: Toyota downplayed the achievement given the economic backdrop, and Watanabe announced he would step down as the board moved toward a Toyoda family president."}
     ]},
    {id:"family", year:"JUN 2009", title:"The Family Returns",
     text:"Akio Toyoda, 53, is named President — the first family member to lead the company since 1995. He inherits an $8.6 billion net loss for fiscal year 2009, Toyota's first loss in nearly six decades, after the financial crisis forced idled factories built during a decade of breakneck growth.",
     voice:"Akio Toyoda, on taking the job: he pledged to steer Toyota \"back to the basics\" of building cars that made customers happy.",
     choices:[
      {label:"Install Toyoda as a symbolic return to founding values", fx:{trust:+12,future:-2}, set:["toyoda_pres"],
       result:"The market reads it as Toyota admitting, without quite saying so, that it lost its way. The bet is that blood and history can re-anchor a company that grew too fast.",
       hist:"Real: the board chose Akio Toyoda, who pledged to bring the company 'back to the basics' and greater transparency to its sprawling culture."},
      {label:"Bring in an outside professional manager to signal a clean break from the expansion era", fx:{future:+8,trust:-6},
       result:"Modern, credible to analysts, and culturally radioactive inside a company that has never had a non-family, non-lifer president in this era."},
      {label:"Promote from the existing non-family executive bench instead", fx:{trust:-2,prod:+4},
       result:"Continuity without inspiration. The press asks, not unfairly, what exactly has changed."}
     ]},
    {id:"floormats", year:"OCT 2009", title:"3.8 Million Floor Mats", cond:"toyoda_pres",
     text:"After the fatal August 28, 2009 crash of a Lexus ES350 near San Diego — a 911 call captured the car accelerating to over 100 mph, killing CHP officer Mark Saylor and three family members — Toyota traces the cause to floor mats trapping accelerator pedals and recalls 3.8 million vehicles, the largest recall in company history. Internally, Toyota also has unresolved information about a separate, mechanical 'sticky pedal' defect it has not yet disclosed.",
     choices:[
      {label:"Recall broadly and immediately for every plausible cause, including the unconfirmed sticky-pedal mechanism", fx:{trust:+14,prod:-10}, set:["broad_recall"],
       result:"Expensive and slow, and it costs you a quarter of bad press about 'Toyota can't even diagnose its own cars.' But there is no second recall to walk back later."},
      {label:"Recall narrowly for the confirmed floor-mat cause only, citing insufficient evidence on the rest", fx:{prod:+6,trust:-4}, set:["narrow_recall"],
       result:"Cheaper and faster today. The Department of Justice will later conclude Toyota knew weeks before its public statements that other vehicles had similar pedal-entrapment risk — and that calling floor mats the 'root cause' was misleading.",
       hist:"Real: Toyota recalled narrowly for floor mats; this became the central allegation in the 2014 $1.2B DOJ settlement."},
      {label:"Resist a recall entirely; characterize incidents as driver error pending further study", fx:{trust:-16,prod:+6}, set:["resisted"],
       result:"The position does not survive contact with a 911 recording played on cable news in a loop."}
     ]},
    {id:"sticky", year:"JAN 2010", title:"The Sticky Pedal Recall", cond:"narrow_recall",
     text:"On January 16, 2010, Toyota informs NHTSA that CTS-brand accelerator pedals can stick in a partially depressed position. Toyota recalls 2.3 million vehicles on January 21, then under NHTSA pressure expands by another 1.1 million on January 27 — and takes the extraordinary step of briefly halting sales and production of eight US models.",
     alt:[{if:"broad_recall", text:"Because you recalled broadly back in October, the January CTS pedal disclosure lands as confirmation of a risk you'd already hedged against, not a humiliating second admission. NHTSA still wants the recall widened by 1.1 million vehicles. The politics are softer; the math is the same."}],
     choices:[
      {label:"Recall and halt sales/production immediately and broadly across all affected models", fx:{trust:+10,prod:-14}, set:["halted_sales"],
       fxIf:[{if:"broad_recall", fx:{trust:+4}, note:"Because October's recall was already broad, this looks like consistency, not panic."}],
       result:"Toyota suspends sales of new vehicles using the CTS pedal and halts production at five North American plants for about a week — a step rarely taken by any automaker for a single supplier defect.",
       hist:"Real: Toyota recalled the additional 1.1 million vehicles and suspended sales/production, an unusually drastic move."},
      {label:"Recall but keep selling and building while a fix is engineered", fx:{prod:+8,trust:-10},
       result:"Dealers keep moving inventory with a known defect on the lot. The headlines write themselves: 'Toyota knew and kept selling.'"},
      {label:"Push back on NHTSA's demand for a wider recall", fx:{trust:-14,prod:+4},
       result:"Regulators do not respond well to an automaker arguing with them about how many of its cars might suddenly accelerate."}
     ]},
    {id:"congress", year:"FEB 24, 2010", title:"Toyoda Goes to Washington",
     text:"The House Committee on Oversight holds a hearing titled 'Toyota Gas Pedals: Is the Public at Risk?' Toyota has now recalled roughly 8.5 million vehicles worldwide, with allegations the defects are linked to claims of as many as 89 deaths. Akio Toyoda personally flies to testify — an unusual move for a Japanese company president, one his US team reportedly debated at length.",
     voice:"Akio Toyoda, to Congress: \"We pursued growth over the speed at which we are able to develop our people and our organization, and I am deeply sorry for any accidents that Toyota drivers have experienced.\"",
     choices:[
      {label:"Testify personally, apologize directly, and accept responsibility while defending the engineering", fx:{trust:+8,future:+2}, set:["toyoda_testified"],
       result:"Toyoda apologizes repeatedly and states he is 'absolutely confident' there is no electronic defect. Lawmakers are unmoved by the contrition and keep pressing him; the hearing is broadly seen as bruising despite the apology.",
       hist:"Real: Toyoda testified personally on Feb 24, 2010, delivering the quote above, and maintained Toyota's floor-mat/sticky-pedal position under hostile questioning."},
      {label:"Send Toyota's North American executives to testify instead of the president", fx:{trust:-10},
       result:"It reads exactly as it is: the man whose name is on the building decided this wasn't worth his own face. Congress notices. So does the press."},
      {label:"Have Toyoda testify, but stick strictly to narrow technical and legal points via counsel", fx:{trust:-2,prod:+4},
       result:"Lawyered and bloodless. It protects Toyota's legal exposure and forfeits any chance of the apology actually landing as human."}
     ]},
    {id:"qualityczar", year:"MAR 2010", title:"Building a Quality Czar Structure",
     text:"With the recall crisis still raging and Toyota accused of letting safety concerns get lost between regions and Japan headquarters, Toyoda convenes the first meeting of a new Special Committee for Global Quality, which he chairs personally.",
     choices:[
      {label:"Create regional Chief Quality Officer positions empowered to escalate concerns directly, bypassing the regional sales hierarchy", fx:{trust:+14,prod:+2}, set:["cqo"],
       result:"Toyota creates CQO positions for North America, Europe, Asia/Oceania, China and more, each sitting on the new global quality committee, plus 'customer first' training centers and a faster escalation process. This becomes the template for Toyota's post-crisis quality governance.",
       hist:"Real: Toyota established regional Chief Quality Officers and a faster information-escalation process under the new Special Committee for Global Quality."},
      {label:"Centralize all quality decisions in Toyota City, Japan", fx:{trust:+4,prod:-4},
       result:"It solves the escalation problem by making everything escalate to the same room, which solves nothing about regional blind spots."},
      {label:"Outsource quality auditing to a third party for outside credibility", fx:{trust:+2,future:-2},
       result:"Tidy on paper. It also quietly admits Toyota doesn't fully trust its own quality organization to mark its own homework — a worse story than the one it's trying to avoid."}
     ]},
    {id:"exoneration", year:"FEB 2011", title:"The Exoneration Nobody Believed",
     text:"After a 10-month joint investigation, NASA and NHTSA conclude there is no electronic-based cause of unintended acceleration in Toyota vehicles; the only confirmed causes remain the floor-mat and sticky-pedal defects already recalled. The finding vindicates Toyota's core technical defense — but plaintiffs' lawyers contest the report's independence, since Toyota's own outside expert was involved in aspects of the investigation.",
     choices:[
      {label:"Use the exoneration aggressively in PR and litigation to rehabilitate Toyota's image", fx:{trust:+10,prod:+2}, set:["aggressive_pr"],
       result:"It works in the news cycle and backfires in the courtroom: thousands of lawsuits remain unresolved, and three years later a $1.2B federal settlement lands — not over whether electronics caused the defect, but over how Toyota handled disclosure.",
       hist:"Real: Toyota welcomed the NASA/NHTSA finding publicly, but litigation and the disclosure question continued regardless."},
      {label:"Accept the finding quietly, without triumphalism, given the ongoing litigation", fx:{trust:+6},
       result:"Measured and a little anticlimactic. It costs you a news cycle of vindication you'd technically earned, and buys you a less combative posture heading into 2014's settlement talks."},
      {label:"Push for further independent review to remove any doubt entirely", fx:{trust:+4,prod:-4},
       result:"Diligent, expensive, and ultimately redundant — the controversy was never really about the data."}
     ]},
    {id:"earthquake", year:"MAR 2011", title:"The Earthquake Breaks the Machine",
     text:"The March 11, 2011 Tōhoku earthquake and tsunami devastate northeastern Japan, wiping out tier-1 and tier-2 suppliers — especially semiconductors and specialty parts — that Toyota's famously lean, just-in-time system depended on. Global output falls 78% year-over-year in April 2011; all 12 main domestic assembly plants halt, costing roughly 150,000+ units of lost production.",
     choices:[
      {label:"Begin building strategic safety-stock inventory and multi-sourcing critical components, even at higher cost", fx:{prod:+12,future:+6}, set:["multisource"],
       result:"Toyota starts a multi-year shift toward multi-sourcing and higher safety stocks of key components — a change credited a decade later with helping Toyota weather the 2021 chip shortage better than rivals.",
       hist:"Real: Toyota built multi-sourcing and safety-stock buffers after Tohoku, which softened (though didn't prevent) the 2021 chip crisis."},
      {label:"Maintain the pure just-in-time model and absorb the disruption as a one-off", fx:{prod:-6},
       result:"The lean religion survives untouched. So does its exposure to the next disaster, whenever it arrives."},
      {label:"Vertically integrate critical chip and component production to reduce future exposure", fx:{prod:+8,future:+2},
       result:"The most expensive, most thorough answer. It will take the rest of the decade to pay off, if it ever fully does."}
     ]},
    {id:"nummi", year:"APR 2010", title:"Selling the Cathedral",
     text:"Toyota's 70%-owned NUMMI joint venture with GM in Fremont, California — 5.5 million square feet, built for 500,000+ cars a year — is being abandoned by GM amid its own bankruptcy. Toyota must decide what to do with its half of a plant that once employed thousands of UAW workers, while still fighting recall fires at home. A small EV startup called Tesla has approached Toyota directly about the building.",
     voice:"Akio Toyoda, after an enthusiastic personal test drive of the Tesla Roadster, championed the deal himself.",
     choices:[
      {label:"Close NUMMI, but sell the Fremont plant to Tesla and invest in the startup directly", fx:{future:+10,trust:-4}, set:["tesla_deal"],
       result:"Toyota closes NUMMI on March 31, 2010, idling roughly 4,700 UAW jobs — and in May 2010 sells the Fremont plant to Tesla for $42M while investing $50M in the company, a deal Toyoda personally championed.",
       hist:"Real: Toyota closed NUMMI, then sold Fremont to Tesla and invested $50M in May 2010."},
      {label:"Keep operating NUMMI alone, absorbing GM's exit", fx:{prod:+6,trust:+2},
       result:"Loyal to the workforce, costly to the balance sheet, and a strange use of capital while you're also paying for a global recall."},
      {label:"Close the plant entirely and write off the investment, full stop", fx:{trust:-6},
       result:"Clean on a spreadsheet, brutal in Fremont, and it leaves a perfectly good cathedral sitting empty for someone else to discover."}
     ]},
    {id:"doj", year:"MAR 2014", title:"Paying the Price for Silence", cond:"narrow_recall",
     text:"The DOJ's multi-year investigation concludes. Prosecutors find that in fall 2009 Toyota told consumers and NHTSA it had identified and addressed the 'root cause' of unintended acceleration (floor mats) while internally aware that other vehicles, with different pedal designs, posed similar risk from the undisclosed sticky-pedal mechanism.",
     alt:[{if:"broad_recall", text:"Because you recalled broadly back in October 2009 rather than narrowly, the DOJ's multi-year review finds a thinner version of the same allegation — slower initial disclosure, but no clean 'root cause' statement to contradict later. The settlement conversation is shorter and less expensive."}],
     choices:[
      {label:"Settle and admit the misleading conduct in a deferred prosecution agreement", fx:{trust:+8,prod:-4}, set:["doj_settled"],
       fxIf:[{if:"broad_recall", fx:{trust:+4,prod:+2}, note:"The broader 2009 recall makes the admission narrower and the settlement cheaper in reputational terms."}],
       result:"On March 19, 2014, Toyota agrees to a $1.2 billion payment, admitting it 'misled U.S. consumers by concealing and making deceptive statements about two safety-related issues' — at the time the largest criminal penalty ever imposed on an automaker in the US.",
       hist:"Real: Toyota's $1.2B deferred prosecution agreement, March 19, 2014, was the largest such penalty against an automaker to that point."},
      {label:"Fight the wire fraud charge in court", fx:{trust:-14,prod:-6},
       result:"A multi-year trial keeps 'Toyota knew' in headlines for years longer than a settlement ever would have."},
      {label:"Settle without admissions, paying a fine but disputing the characterization", fx:{trust:-4,prod:+2},
       result:"It satisfies no one. Prosecutors wanted contrition, the press wanted a verdict, and 'no admission of wrongdoing' reads as exactly what it is."}
     ]}
   ]
  },
  b:{
   name:"Hybrid Conviction, Hydrogen Bet", years:"2014–2020", start:{trust:62, prod:64, future:42}, stock0:58,
   intro:"The recall crisis and the Tōhoku earthquake are behind you. Toyota is stable, profitable, and convinced it knows the right way to decarbonize: the hybrid technology it pioneered with the Prius, and a genuinely contrarian bet on hydrogen fuel cells. Meanwhile, a small company in Fremont — the one whose old factory you sold them — is proving electric cars can be desirable. The decade's question: is Toyota's caution wisdom, or the first sign it mistimed history's biggest automotive technology shift?",
   scenarios:[
    {id:"mirai", year:"NOV 2014", title:"Betting on Hydrogen, Not Just Batteries",
     text:"Toyota unveils the Mirai — a hydrogen fuel-cell sedan — at the Los Angeles Auto Show, with Japan sales starting at ¥6.7 million (~$57,400) and US sales beginning October 2015. Toyota commits to building only 700 units globally in year one, a deliberately small, expensive halo project, even as Tesla's Model S proves battery EVs can be desirable and profitable-trending. Toyota frames hydrogen — three decades of in-house R&D — as a path to a whole 'hydrogen society,' not just a car.",
     choices:[
      {label:"Launch hydrogen as a low-volume halo/R&D project while still scaling hybrids as the mass-market core", fx:{future:+8,prod:+4}, set:["hydrogen_halo"],
       result:"Mirai launches as a small-volume technology showcase while Prius and hybrid technology remain the actual sales volume driver, and full BEV investment stays comparatively modest through the rest of the decade.",
       hist:"Real: Toyota chose the halo-project path — Mirai as showcase, hybrids as the volume engine."},
      {label:"Commit fully to battery-electric development instead, given Tesla's market validation", fx:{future:+14,trust:-2},
       result:"It would have meant admitting, in 2014, that the company's three-decade hydrogen R&D program was a detour. Nobody in Toyota City is ready to say that out loud yet."},
      {label:"Pursue both hydrogen and BEVs aggressively and simultaneously at full scale", fx:{future:+10,prod:-10},
       result:"Two moonshots at once, funded from the same hybrid profits. The capital allocation math doesn't survive its first hard year."}
     ]},
    {id:"nev", year:"2017", title:"China Demands an EV, Right Now",
     text:"China's New Energy Vehicle credit mandate forces every automaker selling there to produce or source a quota of plug-in/EV credits or pay penalties — sudden pressure on Toyota, whose China lineup is hybrid-heavy, to either build compliant BEVs or partner for credits.",
     choices:[
      {label:"Partner with Chinese automakers and battery makers to source NEV credits and co-develop compliance EVs", fx:{future:+8,prod:+2}, set:["china_partner"],
       result:"Toyota pursues partnerships — including with BYD and other Chinese players in subsequent years — and accelerates localized BEV variants for China through the late 2010s, while keeping a hybrid-first strategy everywhere else.",
       hist:"Real: Toyota leaned on Chinese partnerships and localized BEV variants to meet NEV pressure while preserving its hybrid-first global strategy."},
      {label:"Rapidly localize a dedicated BEV for China alone, even as a low-margin compliance product", fx:{future:+4,prod:-4},
       result:"Fast, narrow, and built entirely to satisfy a regulator rather than a customer — which is a strange way to learn how to build EVs."},
      {label:"Lean harder into plug-in hybrids, which partially qualify under some local rules, to delay full commitment", fx:{prod:+4,future:-4},
       result:"A clever stall. China's rules keep tightening anyway, and the delay just moves the reckoning a few years down the calendar."}
     ]},
    {id:"solidstate", year:"SEP 2017", title:"The Solid-State Promise",
     text:"Toyota announces it is developing solid-state batteries — promising faster charging and greater range and safety than conventional lithium-ion — and targets commercialization in the early 2020s, a promise that will recur, and slip, for years afterward.",
     choices:[
      {label:"Announce an aggressive near-term commercialization timeline to reassure markets Toyota isn't ceding the EV future", fx:{future:+10,trust:-2}, set:["solidstate_promise"],
       result:"The announcement generates significant press about a 'game-changing' battery — but the commercialization date slips repeatedly over the following years, with later guidance landing at 2027–2028 alongside partner Idemitsu.",
       hist:"Real: Toyota's solid-state battery commercialization timeline, first floated for the early 2020s, slipped repeatedly toward a 2027–2028 target."},
      {label:"Stay quiet about R&D timelines and let products speak when ready", fx:{future:+4,trust:+2},
       result:"Disciplined and unglamorous. It also means ceding the 'battery breakthrough' headlines to whoever is loudest, even if they're less far along."},
      {label:"Partner with an established battery maker rather than developing proprietary solid-state tech in-house", fx:{future:+6,prod:+2},
       result:"Faster to a product, slower to full control of the technology that may define the next decade of the industry."}
     ]},
    {id:"genchi", year:"2019–2020", title:"COVID Tests Genchi Genbutsu",
     text:"The COVID-19 pandemic disrupts global supply chains and forces remote work, directly challenging one of Toyota's foundational principles — genchi genbutsu, 'go and see for yourself' — which assumes managers can physically visit the production floor or supplier site to solve problems. Toyota's profits decline sharply.",
     voice:"Akio Toyoda, FY2020 results press conference, May 2020: \"We're taking a fresh look at the assumptions of genchi genbutsu.\"",
     choices:[
      {label:"Openly question and adapt the principle for a remote-first crisis", fx:{prod:+6,future:+4}, set:["genchi_adapted"],
       result:"Toyoda publicly muses that the pandemic is forcing a 'fresh look at the assumptions of genchi genbutsu' — a notable moment of a Toyota leader questioning a sacred Toyota Way tenet in public.",
       hist:"Real: Toyoda made exactly this remark at the May 2020 FY2020 results press conference."},
      {label:"Insist on maintaining genchi genbutsu in modified, distanced form", fx:{prod:-4,trust:+2},
       result:"Doctrinally faithful. Operationally, a lot of problems just don't get seen in person for a very long time."},
      {label:"Suspend the principle temporarily and revert once travel resumes", fx:{prod:+2},
       result:"A pragmatic shrug dressed as policy. Nobody outside the company notices; inside, it quietly reopens a debate about which Toyota Way tenets are sacred and which are just habits."}
     ]}
   ]
  },
  c:{
   name:"The EV Reckoning and the Succession", years:"2021–2023", start:{trust:64, prod:58, future:48}, stock0:70,
   intro:"Pressure has peaked. The press calls Toyota an EV laggard with a straight face, even as the company quietly out-survives the chip shortage better than most rivals. Akio Toyoda is about to make the biggest, loudest BEV commitment of his presidency — and then, a little over a year later, hand the company to someone else entirely.",
   scenarios:[
    {id:"chipshortage", year:"AUG 2021", title:"The Chip Shortage Test",
     text:"The global semiconductor shortage, worsened by COVID factory shutdowns in Southeast Asia, forces Toyota — which built a safety-stock buffer after the 2011 earthquake — to cut global production by as much as 40% in some months: September 2021's planned ~900,000 units fall to ~540,000. The earlier resilience investment delayed but did not prevent significant pain.",
     choices:[
      {label:"Protect the safety stock and prioritize high-margin, high-demand models with available chips", fx:{prod:+8,trust:+2}, set:["chip_protected"],
       result:"Toyota draws on its safety stock to outlast peers initially, faring comparatively better than GM and Ford in the shortage's first year — though by autumn 2021 it's still forced into major production cuts as the shortage deepens and outlasts the buffer.",
       hist:"Real: Toyota's post-2011 safety-stock strategy helped it weather the early shortage better than rivals, before still taking major cuts later in 2021."},
      {label:"Draw down all available inventory immediately to maximize near-term output regardless of model mix", fx:{prod:+4,trust:-4},
       result:"A short-term volume sugar high that leaves the cupboard bare exactly when the shortage proves longer than anyone hoped."},
      {label:"Renegotiate aggressively with chip suppliers for guaranteed allocation at higher cost", fx:{prod:+6,trust:-2},
       result:"It buys some supply security and a permanently higher cost base — a toll every car will quietly pay from now on."}
     ]},
    {id:"pivot", year:"DEC 14, 2021", title:"The $35 Billion Pivot",
     text:"Akio Toyoda holds a major press conference unveiling Toyota's electrification plan: 30 new BEV models by 2030, a target of 3.5 million annual BEV sales by 2030, and roughly $35 billion ($70B combined with hybrids) in planned investment — staged with 16 EV and Lexus concept vehicles on stage, a far larger public BEV commitment than anything Toyota had previously announced.",
     choices:[
      {label:"Announce a sweeping multi-billion-dollar BEV commitment to directly answer 'behind on EVs' critics", fx:{future:+16,trust:+4}, set:["big_pivot"],
       result:"Toyota stages the sweeping announcement with 16 concepts, explicitly to counter the media narrative that Toyota is lagging in the EV race — while Toyoda simultaneously keeps defending hybrids and a 'multi-pathway' approach in the very same period.",
       hist:"Real: Toyota's Dec 14, 2021 press conference unveiled the $35B/30-model BEV plan with 16 concept vehicles on stage."},
      {label:"Make a symbolic, modest BEV announcement and continue prioritizing hybrids", fx:{future:+4,trust:-4},
       result:"Safer, cheaper, and it does nothing to quiet the 'Toyota is behind' headlines that have been building for two years."},
      {label:"Avoid a single big-bang announcement and let incremental product launches speak for themselves", fx:{future:+2,trust:-6},
       result:"Quietly principled. It also cedes the entire news cycle to rivals who are happy to announce first and ship later."}
     ]},
    {id:"overhyped", year:"2022", title:"Overhyped", cond:"big_pivot",
     text:"As rivals race toward EV-only futures and press coverage intensifies around Toyota's 'laggard' reputation — having launched only one BEV, the bZ4X, by 2023 — Akio Toyoda pushes back publicly and repeatedly, arguing the industry's all-in EV consensus is mistaken and that combustion, hybrids and hydrogen will all remain relevant.",
     alt:[{if:"!big_pivot", text:"Without a big public BEV pledge to defend, Toyoda's 'overhyped' rhetoric this year reads less like a contrarian counterpunch and more like the absence of a plan at all. The criticism lands harder for having nothing concrete to push back against."}],
     voice:"Akio Toyoda: \"All they say is that Toyota lags behind on BEVs... For the three years before that, I was the only person in the auto industry to propose [multi-pathway decarbonization], and I took a lot of flak.\" He separately said EVs would likely \"cap at 30% of market.\"",
     choices:[
      {label:"Publicly defend the multi-pathway position despite the criticism, accepting the reputational cost", fx:{trust:-6,future:+6}, set:["multipathway"],
       result:"Toyoda continues defending multi-pathway forcefully and personally, framing himself as an early, lonely voice later vindicated when Japan's government endorsed 'multi-pathway' language at the 2023 G7 summit.",
       hist:"Real: Toyoda made these statements in 2022-2023 press coverage, and the G7's 2023 framing later echoed his position."},
      {label:"Soften public rhetoric while privately accelerating BEV investment", fx:{trust:+4,future:+4},
       result:"The quieter, more diplomatic path. It buys goodwill with critics and gives up the chance to actually shape the industry argument."},
      {label:"Abandon the multi-pathway message entirely and align public statements with the December 2021 BEV pledge", fx:{trust:+2,future:+8},
       result:"Consistent messaging, at the cost of admitting the contrarian conviction was mostly posture. The press notices the about-face."}
     ]},
    {id:"bz4x", year:"JUN 2022", title:"The Wheels Came Off",
     text:"Toyota's first dedicated global BEV, the bZ4X (and its Subaru-badged twin, the Solterra), is recalled within weeks of launch after Toyota discovers hub bolts on all four wheels could loosen with repeated hard cornering or braking, in the worst cases causing a wheel to detach entirely while driving — confirmed in at least two real-world incidents. Only 2,700 units had been built or sold globally. Toyota has no fix and tells owners not to drive the cars at all.",
     choices:[
      {label:"Issue a global stop-drive recall and pause all production until a permanent fix exists", fx:{trust:+10,prod:-8,future:-2}, set:["bz4x_haltsold"],
       result:"Toyota chooses the most conservative path — a global stop-drive recall and production/sales pause — even though only ~2,700 vehicles existed. Engineers find and validate a fix (new hub bolts/hardware) by October 2022, after which bZ4X production and sales resume in the US.",
       hist:"Real: Toyota issued a global stop-drive recall for the bZ4X and resumed production/sales after an October 2022 fix."},
      {label:"Issue a more limited advisory and continue limited sales while investigating", fx:{prod:+4,trust:-10},
       result:"Selling a car you've just told some owners not to drive is the kind of headline that writes its own outrage."},
      {label:"Attempt a quick interim fix — a torque or inspection bulletin — without halting sales", fx:{prod:+6,trust:-6},
       result:"Faster to market, riskier to trust: a wheel literally detaching is not a problem you want to be seen managing with a service bulletin."}
     ]},
    {id:"hando", year:"JAN 26, 2023", title:"Toyoda Hands Off the Wheel",
     text:"After nearly 14 years as President — surviving the recall crisis, the 2011 earthquake, and weathering 'EV laggard' criticism while still becoming the world's top-selling automaker — 66-year-old Akio Toyoda announces he will step down effective April 1, 2023. His successor is 53-year-old Koji Sato, then president of Lexus and Gazoo Racing, notably not a Toyoda family member and notably from a performance/motorsport background rather than pure engineering or finance.",
     choices:[
      {label:"Hand the presidency to a younger executive seen as more credible on EVs and software, while Toyoda stays on as Chairman", fx:{future:+10,trust:+6}, set:["sato_ceo"],
       result:"Sato takes over day-to-day operations and the EV portfolio, while Toyoda moves to Chairman — a role from which he continues to speak publicly and influentially on strategy, including continuing to defend hybrids.",
       hist:"Real: Sato became President/CEO effective April 1, 2023; Toyoda became Chairman and remained an influential voice on strategy."},
      {label:"Remain as President/CEO and continue personally steering the EV strategy", fx:{trust:-4,future:-4},
       result:"Continuity, and the unspoken question of how much longer one man's personal conviction about hydrogen and hybrids should set strategy for a trillion-dollar company."},
      {label:"Hand the presidency to another long-tenured insider with an engineering background", fx:{trust:+2,future:-2},
       result:"Safe, internally legible, and it sends no signal at all to a press corps hunting for evidence that Toyota takes the EV transition seriously."}
     ]},
    {id:"satosfirst", year:"APR 2023", title:"Sato's First Move: Double the EV Bet", cond:"sato_ceo",
     text:"In his first press conference as President/CEO, Koji Sato unveils an accelerated EV plan: 10 new BEV models by 2026 and a target of 1.5 million annual BEV sales, plus a new dedicated organizational unit — the 'BEV Factory,' established May 2023 — to oversee next-generation EV development separate from Toyota's traditional engineering structure.",
     choices:[
      {label:"Announce an accelerated, more EV-forward strategy to signal a generational shift, while preserving hybrids as the profit engine", fx:{future:+12,trust:+4}, set:["bev_factory"],
       result:"Sato's notably more EV-forward tone and the dedicated BEV Factory organization land well — while Toyota's hybrid sales, in practice, continue to dominate volume and revenue. Targets are later trimmed by roughly 40% as actual BEV demand growth slows industry-wide.",
       hist:"Real: Sato unveiled the BEV Factory and accelerated targets in April/May 2023; the targets were later cut as EV demand growth slowed."},
      {label:"Continue Toyoda's measured multi-pathway messaging with only incremental changes", fx:{trust:+2,future:-2},
       result:"Steady, unremarkable, and it does little to mark Sato's tenure as genuinely different from his predecessor's."},
      {label:"Make a hard, near-total pivot away from hybrids and hydrogen toward EVs to match Tesla, BYD and Chinese rivals directly", fx:{future:+16,trust:-8,prod:-6},
       result:"Bold on a slide deck, reckless against a balance sheet still built on hybrid margins. The hybrid profit engine that funds everything else doesn't disappear just because the strategy memo says to pivot."}
     ]}
   ]
  },
  d:{
   name:"Scandal and the Empire's Scale", years:"2023–2026", start:{trust:60, prod:66, future:50}, stock0:78,
   intro:"Toyota is posting record global sales — #1 worldwide for a fifth consecutive year in 2024 — even as a wave of certification and safety-test falsification scandals rips through the Toyota Group's subsidiaries: Daihatsu, Hino, Toyota Industries. Koji Sato and Chairman Toyoda are recalibrating the EV strategy again, trimming targets while teasing a solid-state battery breakthrough. The tension: can the empire police itself while still being trusted as the engineering gold standard?",
   scenarios:[
    {id:"hino", year:"MAR 2023", title:"Hino's Reckoning Begins",
     text:"Hino Motors, Toyota's commercial-truck subsidiary, admitted as early as March 2022 to systematically falsifying engine emissions and fuel-economy certification data — eventually traced back to 2003, affecting more than 640,000 vehicles. By 2023 the scope is clear enough that Toyota and partner organizations take punitive action.",
     choices:[
      {label:"Expel Hino from the Toyota-led commercial vehicle alliance as a punitive, trust-restoring signal", fx:{trust:+10,prod:-2}, set:["hino_expelled"],
       result:"Toyota and partners take the most severe step available, expelling Hino from the joint commercial-vehicle partnership framework — among the most punitive internal actions Toyota Group has taken against one of its own subsidiaries.",
       hist:"Real: Hino was expelled from the Toyota-led commercial vehicle alliance framework in 2022 following the scandal's escalation."},
      {label:"Keep Hino fully inside the alliance and manage the cleanup internally", fx:{trust:-8,prod:+4},
       result:"It reads as the parent company protecting a subsidiary that lied for two decades — exactly the optics Toyota cannot afford mid-scandal."},
      {label:"Absorb Hino more tightly under direct Toyota control to enforce compliance", fx:{trust:-2,prod:+2},
       result:"More oversight, less independence, and no clean signal that Toyota is willing to actually punish bad behavior inside its own family."}
     ]},
    {id:"daihatsu", year:"DEC 20, 2023", title:"Daihatsu Shuts Down",
     text:"An independent investigative committee finds Daihatsu, Toyota's small-car subsidiary, falsified safety certification test data across 64 models over roughly 30 years — the oldest documented case dating to 1989 — including 174 newly identified irregularity cases beyond an initial set already disclosed earlier in 2023. 88,000 vehicles built in Thailand and Malaysia in 2022–2023 alone are directly implicated; 24 of the 64 affected models carry the Toyota brand. Daihatsu's own president resigns.",
     choices:[
      {label:"Suspend ALL Daihatsu domestic and international shipments pending full safety re-certification, even at major revenue cost", fx:{trust:+14,prod:-12}, set:["daihatsu_halt"],
       result:"Daihatsu suspends all domestic and international vehicle shipments and halts all factory production in Japan from late December 2023, resuming only partial domestic production in February 2024 after government-supervised re-testing.",
       hist:"Real: Daihatsu's full shipment/production halt ran from late Dec 2023 to partial resumption in Feb 2024."},
      {label:"Suspend only the specific models with confirmed falsified tests", fx:{trust:+2,prod:+2},
       result:"Narrower and faster to resume, and it leaves an obvious question hanging: if the falsification ran 30 years deep, how confident is anyone that the untouched models are actually clean?"},
      {label:"Restructure Daihatsu's management and governance immediately while continuing shipments under enhanced oversight", fx:{trust:-4,prod:+6},
       result:"Keeping the line running while announcing a governance review reads, to regulators and the public alike, like prioritizing production over safety — the precise accusation Toyota is trying to escape."}
     ]},
    {id:"forklifts", year:"JAN 29, 2024", title:"The Forklifts, Too",
     text:"Toyota Industries Corporation — the Toyota Group company that, among other things, makes the engines used in Toyota's own forklifts — is found to have cheated on emissions certification testing for multiple gasoline and diesel forklift engine models over more than a decade, including data substitution and unauthorized parts swaps during testing.",
     choices:[
      {label:"Suspend all affected engine shipments pending recertification and accept the financial and legal exposure", fx:{trust:+8,prod:-6}, set:["forklift_halt"],
       result:"Toyota Industries suspends shipments of the affected engines and, in the US, ultimately settles a related class-action lawsuit for $299.5 million — a separate matter from Hino and Daihatsu, but part of the same pattern of Toyota Group certification failures surfacing in 2022–2024.",
       hist:"Real: Toyota Industries suspended shipments and settled a US class action for $299.5M, per its 2024 disclosure."},
      {label:"Limit corrective action to the specific non-compliant engine models", fx:{trust:+2,prod:+2},
       result:"Targeted and tidy, and it asks the public to take the company's word that 'multiple models over more than a decade' really does stop exactly where the recall list ends."},
      {label:"Attempt a negotiated remediation with regulators without halting shipments", fx:{trust:-6,prod:+4},
       result:"It is, by now, the third Toyota Group subsidiary trying this exact move. Regulators have stopped giving the group the benefit of the doubt."}
     ]},
    {id:"recordyear", year:"2024", title:"Record Sales, Record Scandal — At the Same Time",
     text:"Despite the Daihatsu, Hino, and Toyota Industries scandals all becoming public within roughly a 24-month window, Toyota and Lexus combined post global sales of just over 10.8 million vehicles for 2024, retaining the #1 global automaker title for a fifth consecutive year — even as total Toyota Group sales fell 3.7% due to a 13.8% domestic sales drop in Japan caused by the certification-driven production halts.",
     choices:[
      {label:"Lead public communications with the sales record to reassure markets, while continuing scandal remediation in parallel", fx:{trust:+6,prod:+6}, set:["led_with_sales"],
       result:"Toyota's public messaging emphasizes the continued global #1 sales position and the growth of electrified hybrid sales — up 23.2% year-over-year to 4.53 million units, 40.8% of global sales — while the Group-wide scandal fallout is acknowledged primarily in financial disclosures explaining the Japan sales decline.",
       hist:"Real: Toyota's 2024 communications foregrounded the #1 sales record and hybrid growth, with scandal fallout addressed mainly in financial filings."},
      {label:"Lead with the scandal response and accept a 'lost year' narrative in messaging", fx:{trust:+10,prod:-4},
       result:"Honest, even penitential — and it hands the news cycle a 'Toyota's terrible year' headline that the actual sales numbers didn't really support."},
      {label:"Attempt to separate 'Toyota brand' messaging entirely from 'Toyota Group subsidiary' scandals in investor communications", fx:{trust:-6,prod:+2},
       result:"Analysts and journalists alike find the distinction unconvincing. A subsidiary is still the empire, and everyone knows whose name is on the holding company."}
     ]},
    {id:"solidstate2", year:"2024–2025", title:"Betting Again on Solid-State",
     text:"Toyota and battery partner Idemitsu announce a formal cooperation to begin mass production of all-solid-state batteries for BEVs, projecting commercialization between 2027 and 2028, with a flagship claim of roughly 750 miles (1,200 km) of range and about 10-minute charging — a bet that, if delivered on schedule, could leapfrog current lithium-ion EV competitors including Tesla and Chinese rivals.",
     alt:[{if:"solidstate_promise", text:"This is the second time Toyota has promised a solid-state breakthrough on a specific calendar date — the first slipped for years after the 2017 announcement. The Idemitsu partnership and 2027–2028 target carry the unmistakable shadow of a promise the company has already broken once."}],
     choices:[
      {label:"Make the solid-state bet the centerpiece of Toyota's public EV narrative going forward, accepting the risk of another timeline slip", fx:{future:+14,trust:-2}, set:["solidstate_centerpiece"],
       fxIf:[{if:"solidstate_promise", fx:{trust:-4}, note:"Markets and press remember 2017's unmet promise; the second go-round gets a more skeptical reception even with a real industrial partner attached."}],
       result:"Toyota publicly commits to the Idemitsu partnership and the 2027–2028 commercialization target as a signature long-term differentiator, while continuing to scale conventional hybrids as the near-term sales and profit engine.",
       hist:"Real: Toyota and Idemitsu announced the solid-state battery cooperation with a 2027-2028 commercialization target."},
      {label:"Downplay solid-state publicly and focus messaging on near-term, deliverable hybrid and conventional-battery BEV products", fx:{trust:+4,future:+2},
       result:"Safer, more credible quarter to quarter, and it gives up the one story that could let Toyota leapfrog the entire EV conversation in one announcement."},
      {label:"Abandon in-house solid-state development and license or partner for next-gen battery tech from an outside leader", fx:{future:-6,trust:+2},
       result:"It would save years of R&D spend and concede, definitively, that Toyota's three-decade instinct to build its own future in-house has limits."}
     ]}
   ]
  }
 }
};
EVENTS.toyota = [
 {title:"Kaizen Suggestion Box Overflows", text:"A line worker's suggestion shaves four seconds off a door-panel install. Multiplied across every plant on Earth, it's worth millions.", fx:{prod:+5}, up:"The Toyota Production System does, occasionally, work exactly as advertised."},
 {title:"Yen Swings Hard", text:"A sudden currency move adds or subtracts a fortune from repatriated profits this quarter, depending entirely on which way the dial spun.", fx:{prod:-4}, up:"The hedging desk earns its keep. Most of the damage is absorbed."},
 {title:"J.D. Power Crowns Toyota Again", text:"An independent reliability study ranks Toyota and Lexus at the top of the charts, again, like it's 1998.", fx:{trust:+6}, up:"Reviewers note, dryly, that 'boring' remains the highest compliment in this industry."},
 {title:"A Rival's Battery Plant Catches Fire", text:"A competitor's new EV gigafactory suffers a costly fire and a monthslong delay. Toyota's hybrid-heavy hedge looks, for one news cycle, like genius.", fx:{future:+4}, up:"Nobody in Toyota City says 'told you so' out loud. Everybody thinks it."},
 {title:"Dealer Network Grumbles", text:"US dealers, flush with hybrid waiting lists, quietly ask headquarters to please stop apologizing for not having enough EVs.", fx:{trust:+3}, up:"Turns out a profitable hybrid lot is a difficult thing to be embarrassed about."},
 {title:"Chip Supplier Diversifies Further", text:"A second-source semiconductor deal closes quietly, years after Tohoku taught the lesson the hard way.", fx:{prod:+4}, up:"Redundancy is boring until the day it isn't."}
];
TICKER.toyota = [
 "Prius resale values remain inexplicably indestructible",
 "Analyst: 'multi-pathway' strategy either genius or stalling, TBD",
 "Lexus quietly outsells half the German lineup combined",
 "BYD opens another factory; Nagoya takes notes",
 "Genchi genbutsu Zoom call still feels wrong to everyone involved",
 "Toyota City vending machines still dispense astonishing efficiency",
 "Hydrogen station count remains smaller than Tokyo's ramen shop count",
 "Solid-state battery promised again; calendar quietly skeptical"
];
