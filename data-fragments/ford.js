DATA.ford = {
 name:"Ford", short:"Ford", logo:"🔵", theme:"theme-ford", ipo:22,
 pitch:"A 120-year-old industrial giant trying to mortgage, restructure, and reinvent itself into a software company before the cash-cow trucks that fund the whole experiment run out of road.",
 kpis:[
  {key:"cash", label:"Liquidity", desc:"Gross automotive cash and credit access. This is what 2006 was all about. Hit zero and the banks — not the board — decide your fate."},
  {key:"core", label:"Truck & Pro Engine", desc:"Health of the F-Series, SUV and Ford Pro commercial business that bankrolls everything else. Hit zero and there's no cash left to fund any future at all."},
  {key:"future", label:"EV / Software Readiness", desc:"Competitiveness on EVs, software-defined vehicles and autonomy versus Tesla and Chinese EV makers. Hit zero and Ford is a heritage brand selling nostalgia."}
 ],
 ticker:"F",
 bankruptcy:"The Blue Oval itself reverts to the banks that once held it as collateral. A century-old name plate ends up auctioned alongside the stamping presses, and Dearborn becomes a case study in how fast 'too big to fail' can fail anyway.",
 legendary:"You took a company that mortgaged its own trademark to survive and turned it into the one Detroit name that never needed a bailout, never went dark, and still builds the future on its own terms. Henry would recognize the stubbornness. He wouldn't recognize the balance sheet.",
 eras:{
  a:{
   name:"Bet the Company", years:"2006–2012", start:{cash:30, core:55, future:20}, stock0:8, deep:true,
   intro:"Dearborn, summer 2006. Ford just lost $1.4 billion in a single quarter and is on pace for the worst year in its history. Bill Ford Jr. — the founder's great-grandson — has concluded, in public, that he isn't the right man to fix this. Somewhere in Seattle, an airplane executive who has never sold a car in his life is about to get a phone call. Everything that happens next gets studied at Harvard.",
   scenarios:[
    {id:"outsider", year:"SEP 2006", title:"The Outsider",
     text:"Bill Ford Jr. has spent five years as CEO and concluded — to his own board, out loud — that Ford needs a turnaround specialist he simply isn't. The candidate he's quietly courted since July is Alan Mulally, who just led Boeing through 9/11's aftermath and the 787 program, and who has never worked in cars in his life.",
     voice:"Bill Ford Jr., on the rationale for going outside the industry entirely, in a joint interview announcing the hire.",
     choices:[
      {label:"Recruit Mulally — an outsider with zero auto-industry baggage", fx:{core:+6,future:+8}, set:["mulally"],
       result:"On September 5, 2006, Ford stuns the industry by naming an airplane executive President and CEO. Bill Ford stays on as Executive Chairman. Nobody in Dearborn has ever seen anything like it.",
       hist:"Real: Ford announced Alan Mulally as President and CEO on September 5, 2006, with Bill Ford Jr. remaining Executive Chairman."},
      {label:"Promote a Ford lifer — institutional knowledge over outside risk", fx:{core:+3,future:-6}, set:["lifer"],
       result:"The internal pick reassures the old guard and changes almost nothing about how the company actually operates. The losses keep compounding on schedule."},
      {label:"Bill Ford stays CEO, hires a strong outside COO/CFO instead", fx:{cash:+2,core:-2}, set:["hybrid_lead"],
       result:"A compromise that satisfies the org chart and nobody else. Bill Ford gets credit for staying loyal to the family name and blame for everything that doesn't improve."}
     ]},
    {id:"wayforward", year:"JAN–SEP 2006", title:"The Way Forward", cond:"mulally",
     text:"Before Mulally even arrived, Ford under Bill Ford had unveiled 'The Way Forward' — a plan to close 14 plants and cut up to 30,000 jobs as North American market share collapsed. Now the new CEO has to decide whether to inherit the plan as written or rip it up and go faster.",
     choices:[
      {label:"Accelerate it hard — pull the targets years earlier, add two more plant closures", fx:{cash:+4,core:+10,future:+2}, set:["accelerated"],
       result:"Mulally pushes the job cuts and capacity reductions to be completed by 2008 instead of 2012, adding Maumee Stamping and Essex Engine to the closure list. By 2008, Ford's assembly capacity is cut by roughly 26%.",
       hist:"Real: Mulally accelerated The Way Forward's targets to 2008 and added two more plant closures."},
      {label:"Stick to the original, slower timeline — protect jobs via attrition", fx:{cash:-3,core:+2}, set:["slow_restructure"],
       result:"Gentler on the workforce, slower on the balance sheet. The capacity cuts that should have been finished in two years stretch toward four."},
      {label:"Go even further — shut down underperforming brands immediately", fx:{cash:+2,core:+4,future:-2},
       result:"A more radical cut than even Mulally proposed. It saves money today and burns trust with dealers and unions who feel blindsided."}
     ]},
    {id:"mortgage", year:"NOV–DEC 2006", title:"Mortgage the Blue Oval", cond:"mulally",
     text:"Three months into the job, Mulally proposes something no major automaker has ever done: borrow against virtually everything Ford owns — plants, equipment, receivables, foreign subsidiary stock, and U.S. patents and trademarks, explicitly including the Blue Oval itself — to build a multibillion-dollar liquidity cushion against 'unexpected events.' No recession has been declared yet. Some in the room think this is paranoid. It is not.",
     voice:"Ford's Nov 29, 2006 SEC filing itemizes the Blue Oval trademark, line by line, on the loan's collateral schedule.",
     choices:[
      {label:"Mortgage everything — plants, patents, and the Blue Oval itself", fx:{cash:+20,core:-4,future:+2}, set:["mortgaged"],
       result:"Ford closes an $8B secured revolver, a $7B Term Loan B, and additional unsecured financing, totaling roughly $23.5 billion in new liquidity, funded December 15, 2006. The Blue Oval trademark is now, literally, loan collateral.",
       hist:"Real: Ford's Nov 29, 2006 8-K detailed an $8B revolver plus $7B Term Loan B and other tranches totaling approximately $23.5-23.6 billion, closed and funded Dec 15, 2006, with collateral including U.S. plant/equipment, receivables, subsidiary stock, and the Blue Oval trademark."},
      {label:"Raise smaller unsecured amounts — preserve flexibility and credit rating", fx:{cash:+6,core:+2}, set:["cautious_financing"],
       result:"Ford's ratings are already junk (S&P B, Moody's B3, both negative), so unsecured borrowing at scale is expensive or simply unavailable. The cushion built is thinner than the storm that's coming."},
      {label:"Sell assets first, borrow only the remaining gap", fx:{cash:+10,core:-6}, set:["asset_sale_first"],
       result:"Slower and more cautious. By the time the gap is calculated and filled, the financing window has narrowed and the terms are worse."}
     ]},
    {id:"pag", year:"2006–2008", title:"Selling the Crown Jewels", cond:"mulally",
     text:"Mulally inherits the Premier Automotive Group — Aston Martin, Jaguar, Land Rover, Volvo — assembled by his predecessor as a luxury-brand bet. Jaguar in particular hasn't reliably turned a profit in years. 'One Ford' demands the capital and attention go back to the core Ford and Lincoln brands.",
     alt:[{if:"mortgaged", text:"With the Blue Oval already pledged as collateral, every dollar PAG can raise matters even more — this isn't just refocusing the brand, it's deleveraging the company that just bet its own trademark."}],
     choices:[
      {label:"Sell it all — Aston Martin, then Jaguar/Land Rover, then Volvo", fx:{cash:+14,core:+6,future:+2}, set:["sold_pag"],
       result:"Aston Martin goes for $925M in March 2007, Jaguar Land Rover together to Tata Motors for roughly $2.3B (completed June 2008), and Volvo to Geely for $1.8B (completed August 2010). Jaguar Land Rover goes on to become highly profitable under Tata — a frequently cited irony.",
       hist:"Real: Ford sold Aston Martin (2007, $925M), Jaguar/Land Rover to Tata (2008, ~$2.3B), and Volvo to Geely (2010, $1.8B)."},
      {label:"Keep investing in PAG — try to fix Jaguar's profitability", fx:{cash:-10,core:-4}, set:["kept_pag"],
       result:"Capital keeps draining into brands that don't share Ford's platforms or its 'One Ford' discipline. The luxury empire stays a luxury anchor."},
      {label:"Sell only Jaguar, keep Land Rover and Volvo", fx:{cash:+5,core:+1}, set:["partial_pag"],
       result:"A half-measure. Some cash, some focus, and two more luxury brands still competing with Ford and Lincoln for capital and attention."}
     ]},
    {id:"hearing", year:"DEC 4, 2008", title:"The Hearing Room", cond:"mulally",
     text:"GM and Chrysler are publicly pleading for a federal bailout. Congress summons all three Detroit CEOs to testify before the Senate Banking Committee. Ford doesn't need money — but its supply chain is shared with GM and Chrysler, and if either collapses, Ford's parts pipeline could collapse with them.",
     voice:"Mulally, in testimony: \"From Day 1, we had no desire to access the government money.\"",
     choices:[
      {label:"Decline a bailout, but request a standby credit line as pure precaution", fx:{cash:+6,core:+4,future:+2}, set:["no_bailout"],
       result:"Mulally testifies Ford doesn't anticipate a 2009 liquidity crisis, supports help for GM and Chrysler to prevent supply-chain contagion, and requests contingency access Ford never ends up drawing on.",
       hist:"Real: Mulally testified Ford had 'no desire to access the government money,' requested a precautionary credit line, never drew on TARP, and avoided Chapter 11."},
      {label:"Refuse any government assistance on principle, for anyone", fx:{core:-8,future:+2}, set:["refused_all"],
       result:"Principled, and risky. If GM or Chrysler's suppliers go dark, Ford's own assembly lines could stall on parts shortages it had no hand in causing."},
      {label:"Lobby quietly for industry-wide supplier aid, skip the public testimony", fx:{cash:+2,core:+1},
       result:"Less theater, less credit. When Ford later wants to claim it never took a dime, the absence of a clear public moment dulls the story."}
     ]},
    {id:"dividend", year:"2009", title:"The Lone Survivor's Dividend", cond:"mortgaged && no_bailout",
     text:"GM and Chrysler are in bankruptcy and under government control. For the first time in a generation, Ford has a chance to be the only Detroit brand that never took a bailout or filed Chapter 11 — exactly when American consumers are deciding which of the Big Three to trust again.",
     alt:[{if:"refused_all", text:"Ford's no-bailout stance is now twofold — no money for itself, none requested for anyone. The story is cleaner, but the supply-chain risk it ran in 2008 makes 2009's victory lap feel a little more like survivor's luck than survivor's strategy."}],
     choices:[
      {label:"Lean hard into the 'we didn't take a bailout' narrative", fx:{cash:+8,core:+12,future:+4}, set:["bailout_pride"],
       result:"Ford posts a $2.7 billion net profit in 2009 — its first annual profit since 2005 — and gains U.S. market share for the first time since 1995, ending the year near 15% share.",
       hist:"Real: Ford posted a $2.7B net profit in 2009, its first profitable year since 2005, and gained market share for the first time since 1995."},
      {label:"Stay quiet — let the financial results speak for themselves", fx:{cash:+4,core:+8},
       result:"Modest and dignified. The turnaround is real, but the marketing opportunity of a generation goes mostly unspent."},
      {label:"Cut prices aggressively to grab share from weakened rivals", fx:{cash:-4,core:+10,future:-2},
       result:"Volume jumps. Margins thin. The 'didn't take your money' story gets muddied by discount stickers."}
     ]},
    {id:"blueoval", year:"2012", title:"Earning Back the Blue Oval", cond:"mortgaged",
     text:"By 2012, Ford's recovery is strong enough to consider paying down the 2006 secured debt and reclaiming the Blue Oval trademark and other pledged assets. The favorable rates on that debt are tempting to keep. So is the symbolism of getting the family name back.",
     choices:[
      {label:"Deleverage aggressively — earn the investment-grade rating back", fx:{cash:-6,core:+10,future:+4}, set:["deleveraged"],
       result:"Moody's upgrades Ford back to investment grade in May 2012, marking the symbolic and practical end of the 2006 mortgage era, even as some underlying facilities keep rolling off over subsequent years.",
       hist:"Real: Ford's credit rating was upgraded to investment grade by Moody's in May 2012."},
      {label:"Keep the cheap secured debt in place as long as possible", fx:{cash:+8,core:-2},
       result:"Financially rational. The symbolic overhang of 'we mortgaged the company' lingers in every retrospective article anyway."},
      {label:"Do a partial paydown — split the difference", fx:{cash:+2,core:+3},
       result:"Neither the full symbolic victory nor the full financial benefit. A reasonable, forgettable middle path."}
     ]}
   ]
  },
  b:{
   name:"The Lost Decade of Slow Pivot", years:"2014–2017", start:{cash:55, core:60, future:25}, stock0:14,
   intro:"July 2014. Alan Mulally hands the keys to Mark Fields, a 25-year Ford veteran, just as the industry's center of gravity starts shifting toward EVs, software, ride-sharing and autonomy. Ford is making record profits on trucks and SUVs. Wall Street doesn't seem to care.",
   scenarios:[
    {id:"handoff", year:"APR–JUL 2014", title:"The Handoff",
     text:"Mulally, 68, has led Ford for nearly eight years through crisis and recovery, and it's time to retire. COO Mark Fields — a Ford lifer who ran Ford of Europe and Ford Americas — is the clear heir apparent. The board has to decide how fast to make the change.",
     choices:[
      {label:"Promote Fields, and move the transition up six months on Mulally's own recommendation", fx:{core:+4,future:+2}, set:["fields"],
       result:"Ford announces May 1, 2014 that Mulally will retire and Fields will become President and CEO, with the transition completed July 1, 2014 — earlier than originally planned.",
       hist:"Real: Ford announced the Mulally-to-Fields transition May 1, 2014, completed July 1, 2014, about six months earlier than anticipated."},
      {label:"Recruit another outside turnaround specialist as a hedge", fx:{cash:-2,future:+4},
       result:"A second outsider so soon after Mulally signals the board doesn't trust its own bench — and risks losing the institutional momentum his tenure built."},
      {label:"Keep Mulally on longer given the strong results", fx:{core:+2,future:-2},
       result:"Comfortable, low-risk, and ultimately just a delay. The same handoff conversation happens a year later, on a less favorable industry clock."}
     ]},
    {id:"mobility", year:"2015–2016", title:"Mobility Talk, Truck Money", cond:"fields",
     text:"Under Fields, Ford is posting record profits — almost entirely from F-150 and Explorer — while publicly repositioning as 'an auto and a mobility company,' investing in Ford Smart Mobility, ride-sharing pilots, and a 2016 pledge to have a Level 4 autonomous vehicle in commercial service by 2021. The tension: how much of this quarter's truck money do you spend on a bet Wall Street doesn't yet believe in?",
     choices:[
      {label:"Spend aggressively and visibly on autonomy and mobility", fx:{cash:-8,future:+10}, set:["mobility_bet"],
       result:"Ford makes the 2021 self-driving pledge and spins up Ford Smart Mobility LLC in 2016. Investors still see a company that prices and behaves like old Detroit — the spending doesn't move the stock the way it moves GM's Cruise/Lyft headlines.",
       hist:"Real: Ford pledged a Level 4 autonomous vehicle in commercial operation by 2021 and created Ford Smart Mobility LLC in 2016, but was perceived as moving cautiously relative to Tesla and GM."},
      {label:"Stay disciplined — protect the dividend and core-business margins", fx:{cash:+6,core:+6,future:-6}, set:["dividend_discipline"],
       result:"Traditional auto investors are pleased. Everyone else writes the same headline: Ford talks about the future and invests in the present."},
      {label:"Acquire a mobility or tech startup outright instead of building in-house", fx:{cash:-10,future:+6},
       result:"Faster on paper, messier in practice. Integrating a Silicon Valley culture into a 113-year-old manufacturer turns out to be its own multi-year project."}
     ]},
    {id:"excised", year:"MAY 2017", title:"Excised", cond:"fields",
     text:"Ahead of the 2017 shareholder meeting, investors are openly furious about the stock's poor performance despite strong profits — Ford shares are down roughly 37% during Fields's nearly three-year tenure, with market cap at one point dropping below Tesla's. The board, led by Executive Chairman Bill Ford, has to decide whether to back Fields through the long mobility transition or act now.",
     alt:[{if:"mobility_bet", text:"Fields can point to real mobility and autonomy spending as proof the strategy was working — it just wasn't working fast enough for a stock price measured in quarters, not decades."},
          {if:"dividend_discipline", text:"Fields can point to protected margins and a steady dividend — cold comfort to a board watching Tesla's market cap pass Ford's anyway."}],
     voice:"Bill Ford Jr., to shareholders: \"Look, we're as frustrated as you are by the stock price... A time of great change requires a transformational leader.\"",
     choices:[
      {label:"Replace Fields with Jim Hackett — an outsider again, echoing 2006", fx:{core:-4,future:+8}, set:["hackett"],
       result:"On May 22, 2017, Ford abruptly replaces Fields with Hackett, who led Ford Smart Mobility but had zero prior automotive operating experience before joining Ford's board. Fields exits with a reported package potentially worth up to $57.5 million.",
       hist:"Real: Ford replaced Fields with Jim Hackett on May 22, 2017; Fields's exit package was reported as potentially worth up to $57.5 million."},
      {label:"Give Fields more time given the long-cycle nature of auto investment", fx:{cash:-4,core:+2,future:-2},
       result:"The board's patience buys nothing — the stock keeps sliding, and the same conversation returns a year later with less goodwill attached."},
      {label:"Make incremental changes below the CEO level instead", fx:{core:+2,future:-2},
       result:"A reshuffle that satisfies no one. Investors wanted a signal; they got a memo about reporting lines."}
     ]}
   ]
  },
  c:{
   name:"Fitness, Then Fight", years:"2017–2020", start:{cash:50, core:62, future:30}, stock0:11,
   intro:"Jim Hackett — formerly CEO of office-furniture maker Steelcase, with no prior auto operating experience — is installed to make Ford 'fit.' Cost discipline, speed, accountability. Investors want specifics, fast, and Tesla's stock-market ascent is making patience expensive.",
   scenarios:[
    {id:"redesign", year:"JUL 2018", title:"The $11 Billion Redesign",
     text:"Hackett has spent months talking about organizational 'fitness' without attaching real numbers to it. Investors and media are losing patience. The company needs a concrete restructuring plan, today, with figures attached.",
     voice:"Hackett, on the plan: a 'massive undertaking' that had to be 'very thoughtfully orchestrated.'",
     choices:[
      {label:"Go big — an ~$11B, multi-year restructuring touching plants, products and headcount", fx:{cash:-6,core:+10,future:+2}, set:["big_restructure"],
       result:"Ford details a plan expected to cost roughly $11B in EBIT charges and about $7B in cash costs, eventually cutting roughly 7,000 salaried jobs by mid-2019 and overhauling struggling European and South American operations.",
       hist:"Real: Ford's July 2018 restructuring plan totaled roughly $11B in EBIT charges and ~$7B in cash costs, with about 7,000 salaried job cuts confirmed by May 2019."},
      {label:"Go small — cut overhead only, move fast", fx:{cash:+4,core:+2,future:-4},
       result:"Quicker to execute, smaller in impact. Wall Street notes the modest scope and keeps asking when the 'real' plan is coming."},
      {label:"Delay the announcement further to refine the details", fx:{core:-6,future:-4},
       result:"More of the same criticism that got Hackett here in the first place. The market reads delay as indecision, not diligence."}
     ]},
    {id:"sedan", year:"APR 25, 2018", title:"Killing the Sedan", cond:"big_restructure",
     text:"Ford's North American car lineup — Fiesta, Focus, Fusion, C-Max, Taurus — is increasingly unprofitable as American buyers move en masse to trucks, SUVs and crossovers. The next-generation sedan investment decision can't be deferred any longer.",
     choices:[
      {label:"Stop selling nearly every traditional car in North America", fx:{cash:+8,core:+14,future:+2}, set:["killed_sedans"],
       result:"On April 25, 2018, Ford announces it will keep only the Mustang and a crossover-like 'Focus Active,' redirecting investment to trucks, SUVs and a new car-utility category. By the announcement, roughly 90% of Ford's North American volume is trucks, utilities and commercial vehicles.",
       hist:"Real: Ford announced April 25, 2018 it would phase out nearly all traditional North American sedans, keeping only Mustang and Focus Active; production wound down through 2018-2019."},
      {label:"Phase out only the weakest nameplates, keep Fusion and Focus", fx:{cash:-2,core:+4},
       result:"A half-retreat. Ford keeps funding a shrinking, low-margin segment instead of fully redeploying that capital to where the actual demand is."},
      {label:"Exit cars entirely except performance and halo models", fx:{cash:+6,core:+10,future:-2},
       result:"Even more aggressive than what Ford actually did. Dealers and rental-fleet relationships built on sedan volume take the hit immediately."}
     ]},
    {id:"machE", year:"NOV 17, 2019", title:"The Electric Mustang Gamble",
     text:"Ford needs a flagship to prove it can compete in EVs, where Tesla has years of head start and cultural cachet. Internally, the debate is whether to build a low-risk electric crossover under a new nameplate, or attach the Mustang name — Ford's most emotionally loaded badge — to a four-door electric SUV.",
     voice:"Bill Ford Jr., at the reveal in Hawthorne, California: \"We are really pushing our chips in on the table with this vehicle.\"",
     choices:[
      {label:"Badge it Mustang Mach-E — trade on the most loaded name in the lineup", fx:{cash:-4,future:+16}, set:["mache"],
       result:"Ford reveals the Mustang Mach-E on November 17, 2019: a 5-seat electric crossover with 210-300 miles of range, backed by a previously announced $11.5 billion electrification plan through 2022.",
       hist:"Real: Ford revealed the Mustang Mach-E on Nov 17, 2019, backed by an $11.5B electrification investment plan through 2022."},
      {label:"Launch a no-name-risk EV under an entirely new sub-brand", fx:{future:+6},
       result:"Safer for the Mustang faithful, far less attention-grabbing for everyone else. The launch barely registers against Tesla's gravitational pull."},
      {label:"Delay further to refine range and performance before any reveal", fx:{cash:+2,future:-6},
       result:"More polish, less momentum. Every month of delay is a month Tesla and the EV narrative compound without you."}
     ]},
    {id:"rivian", year:"APR 2019", title:"Backing a Pickup Startup",
     text:"Ford wants EV and 'skateboard platform' technology faster than it can build alone. Michigan startup Rivian, developing an electric pickup and SUV, looks like the fastest path to borrowed speed.",
     voice:"Bill Ford Jr., Executive Chairman: \"We are excited to invest in and partner with Rivian.\"",
     choices:[
      {label:"Take a $500 million equity stake and co-develop a BEV on Rivian's platform", fx:{cash:-6,future:+8}, set:["rivian_stake"],
       result:"Ford announces the investment in April 2019. The joint vehicle-development plan is cancelled in November 2021 as Ford pivots to building the F-150 Lightning on its own platform; Ford later sells down most of its Rivian stake (disclosed Feb 2023), banking gains from Rivian's 2021 IPO.",
       hist:"Real: Ford invested $500M in Rivian in April 2019; the joint development plan was cancelled Nov 2021; Ford disclosed selling down its Rivian stake in Feb 2023."},
      {label:"Build the platform entirely in-house instead", fx:{cash:-10,future:+4},
       result:"Slower and more expensive up front, but no dependency on a startup's roadmap or runway."},
      {label:"Acquire Rivian outright rather than taking a minority stake", fx:{cash:-20,future:+10},
       result:"A far bigger bet than Ford actually made — and a far bigger bill, with a pre-revenue EV startup's culture now fully Ford's problem to manage."}
     ]},
    {id:"handoff2", year:"AUG 2020", title:"Hackett Steps Aside",
     text:"Three years into Hackett's 'fitness' restructuring, Ford's stock has fallen further than it did under Fields — even as the foundational restructuring and EV pipeline (Mach-E shipped, Lightning in development) take shape. The board has to decide whether Hackett sees the EV launches through, or hands off to COO Jim Farley, a 'car guy' seen as the stronger product operator.",
     choices:[
      {label:"Hand off to Jim Farley, effective October 1, 2020", fx:{core:+2,future:+6}, set:["farley"],
       result:"Ford announces August 4, 2020 that Hackett will retire and Farley — COO since February 2020, previously head of Ford's global markets and Lincoln — becomes President and CEO. Hackett stays as special advisor through March 2021.",
       hist:"Real: Ford announced Hackett's retirement and Farley's appointment on Aug 4, 2020, effective Oct 1, 2020."},
      {label:"Let Hackett complete the Mach-E and Lightning launches first", fx:{cash:-2,future:+2},
       result:"More continuity, less urgency. The board's patience with a falling stock price is not infinite, and this just spends more of it."},
      {label:"Bring in yet another outside executive instead of Farley", fx:{core:-4,future:-2},
       result:"A third outsider in three transitions signals the board has no confidence in its own bench — and resets institutional knowledge again, right before the EV launches that matter most."}
     ]}
   ]
  },
  d:{
   name:"Electric Reckoning", years:"2020–2026", start:{cash:48, core:58, future:42}, stock0:9,
   intro:"October 2020. Jim Farley — a career 'car guy' — takes the wheel and moves fast: a $30B+ electrification commitment, a three-way split of the company to expose the EV business's true economics, and the F-150 Lightning riding a genuine demand boom. Then EV demand cools, Model e racks up billions in losses, and Farley has to publicly reverse course without losing the future he just proved Ford could build.",
   scenarios:[
    {id:"fordplus", year:"MAY 26, 2021", title:"'Ford+' and the $30 Billion Bet",
     text:"Eight months into his tenure, Farley needs to convince Wall Street that Ford can be a credible EV and software company — not just a truck company dabbling in electrification — while Tesla's market cap dwarfs all of Detroit combined.",
     voice:"Jim Farley: \"This is our biggest opportunity for growth and value creation since Henry Ford started to scale the Model T.\"",
     choices:[
      {label:"Raise electrification spending to more than $30 billion through 2025", fx:{cash:-10,future:+16}, set:["ford_plus"],
       result:"At the 'Delivering Ford+' Capital Markets Day, Farley lifts planned EV/electrification spending from ~$22B to more than $30B through 2025, targets 40% of global volume as all-electric by 2030, and stands up a new in-house battery effort and the standalone Ford Pro unit.",
       hist:"Real: Ford raised planned electrification spending to more than $30B through 2025 at its May 26, 2021 'Delivering Ford+' event, targeting 40% all-electric volume by 2030."},
      {label:"Grow the existing ~$22B budget incrementally", fx:{cash:+4,future:+4},
       result:"Steadier, less dramatic — and read by investors as Ford hedging rather than committing, at exactly the moment conviction was the product being sold."},
      {label:"Focus capital primarily on Ford Pro's commercial opportunity, not consumer EVs", fx:{cash:+2,core:+6,future:-4},
       result:"A more profitable near-term bet, and a much smaller story for the Tesla-watching half of Wall Street that wanted to hear about consumer EVs."}
     ]},
    {id:"lightning", year:"MAY 19, 2021", title:"The Lightning Strikes",
     text:"Ford's best-selling, most profitable product on Earth is the F-150. Electrifying it is the biggest opportunity Ford has — the truck buyer base is enormous — and the biggest risk, since any stumble damages the single most important franchise in the company.",
     choices:[
      {label:"Put the F-150 name on it — full flagship commitment", fx:{cash:-4,core:+4,future:+14}, set:["lightning_flagship"],
       result:"Ford unveils the F-150 Lightning May 19, 2021. Demand is extraordinary: ~20,000 reservations on day one, 44,000 within 48 hours, nearly 200,000 by December 2021 — described internally as roughly three years of backlog. Production begins April 26, 2022.",
       hist:"Real: the F-150 Lightning reveal drew ~20,000 day-one reservations, 44,000 within 48 hours, and nearly 200,000 by Dec 2021; production began April 26, 2022."},
      {label:"Launch the electric truck under a risk-isolating new sub-brand", fx:{cash:+2,future:+4},
       result:"Safer for the F-150's reputation, far less explosive as a headline. The reservation numbers that made Wall Street sit up never quite materialize without the F-150 name attached."},
      {label:"Wait for batteries and charging infrastructure to mature further", fx:{cash:+4,future:-6},
       result:"Prudent on paper. In practice it hands the 'first electric pickup that matters' headline to a competitor while Ford keeps refining specs in private."}
     ]},
    {id:"split3", year:"MAR 2, 2022", title:"Splitting the Company in Three", cond:"ford_plus",
     text:"Investors and analysts can't tell how profitable — or unprofitable — Ford's EV business actually is, because it's buried inside the same P&L as the highly profitable combustion business. Farley needs a structure that exposes the EV unit's true economics, both to discipline internal spending and to let Wall Street value it the way it values Tesla.",
     choices:[
      {label:"Split into Ford Blue, Ford Model e, and Ford Pro with separate reporting", fx:{cash:-4,core:+2,future:+10}, set:["three_way_split"],
       result:"On March 2, 2022, Ford creates three distinct units, each with separate financial reporting; Farley personally takes the title of President of Ford Model e. Subsequent earnings reveal Model e losing billions a year while Ford Pro and Ford Blue stay strongly profitable — vindicating the transparency, however uncomfortable the numbers.",
       hist:"Real: Ford announced the Ford Blue / Ford Model e / Ford Pro structure on March 2, 2022, with separate financial reporting; Model e's multibillion-dollar annual losses became a recurring disclosure through 2023-2024."},
      {label:"Keep one unified P&L, just improve internal disclosure", fx:{core:+4,future:-4},
       result:"Less organizational disruption, and the exact opacity problem that started this conversation remains unsolved for investors trying to value the EV business."},
      {label:"Spin off the EV business entirely as a separate public company", fx:{cash:+6,core:-4,future:+4},
       result:"A bigger structural move than Ford actually made — closer to GM's Cruise approach — that severs Model e from the combustion cash flow it still needs to fund losses."}
     ]},
    {id:"uaw", year:"SEP–OCT 2023", title:"The UAW Standoff",
     text:"The UAW's national contract with Ford, GM and Stellantis expires at midnight September 14, 2023. Under new president Shawn Fain, the union demands a 36% wage increase over four years, citing record automaker profits and concessions workers made during the 2009 crisis. Ford has to weigh labor costs against the capital it needs for the EV transition.",
     voice:"Jim Farley, on the UAW's strike expansion: \"grossly irresponsible\" — and after ratification, the deal added \"significant cost.\"",
     choices:[
      {label:"Negotiate to a settlement rather than holding a hard line through a long strike", fx:{cash:-8,core:-2,future:+2}, set:["uaw_deal"],
       result:"The UAW strikes Ford, GM and Stellantis starting Sept 15, 2023, escalating against Ford and GM on Sept 29. A tentative agreement lands October 25, 2023, including a 25% base wage increase over the contract term, ending the nearly six-week strike — at a cost Farley says Ford must offset with productivity gains.",
       hist:"Real: the UAW strike began Sept 15, 2023, escalated Sept 29, and a tentative agreement with a 25% base wage increase was reached Oct 25, 2023."},
      {label:"Hold a hard line on cost given EV investment needs", fx:{cash:+4,core:-10,future:-2},
       result:"A longer, costlier strike than the one Ford actually weathered, with production losses stacking up the longer the standoff runs."},
      {label:"Offer an early, generous settlement to avoid any production loss", fx:{cash:-14,core:+2},
       result:"Labor peace arrives faster and costs more than the deal Ford ultimately struck, with less room left over for the EV-affordability fight to come."}
     ]},
    {id:"retreat", year:"AUG 21, 2024", title:"Retreat from the Three-Row EV", cond:"three_way_split",
     text:"Model e is losing billions annually as EV demand growth slows across the industry. A planned three-row electric SUV can't meet Ford's own profitability discipline — no launch without a path to profitability within 12 months — given battery and manufacturing costs at the time.",
     voice:"Ford CFO John Lawler: the three-row electric SUV's cost structure couldn't meet Ford's 12-month profitability requirement.",
     choices:[
      {label:"Cancel the three-row EV, substitute a hybrid, and delay the next-gen electric truck plant", fx:{cash:+6,core:+6,future:-8}, set:["ev_retrenchment"],
       result:"On August 21, 2024, Ford cancels the three-row electric SUV in favor of hybrids and delays the next-generation electric pickup and its Tennessee 'BlueOval City' plant, while still expecting battery cell production there in 2025. Ford discloses a roughly $400M special charge, with up to $1.5B more possible.",
       hist:"Real: Ford cancelled its three-row electric SUV and delayed its next-gen electric truck and Tennessee plant on Aug 21, 2024, disclosing a ~$400M special charge with up to $1.5B more possible."},
      {label:"Launch the three-row EV anyway, at a loss, to protect market presence", fx:{cash:-12,future:+6},
       result:"A bigger near-term bet on EV credibility than Ford was willing to make. The losses pile onto an already bleeding Model e ledger."},
      {label:"Delay the SUV by a year or two to re-engineer costs down first", fx:{cash:-4,future:-2},
       result:"A softer version of the actual retreat — neither the full hybrid pivot nor a real commitment to ship, just a deferred decision."}
     ]},
    {id:"skunkworks", year:"FEB 2024", title:"The Skunkworks Bet on a $30,000 EV",
     text:"Having concluded that scaling first-generation EVs (Mach-E, Lightning) the way legacy automakers build combustion cars is structurally too expensive to compete with Tesla and Chinese EV makers on cost, Ford needs a fundamentally different, lower-cost engineering and manufacturing approach — essentially a clean-sheet redo.",
     alt:[{if:"ev_retrenchment", text:"After publicly retreating from the three-row EV, this secretive low-cost program is effectively Ford's answer to the obvious follow-up question: if not that, then what?"}],
     choices:[
      {label:"Fund the secretive Irvine 'skunkworks' team led by a former Tesla engineer", fx:{cash:-6,future:+14}, set:["universal_ev"],
       result:"Ford's quietly-built team — led by ex-Tesla engineer Alan Clarke alongside Anil Paryani — produces the 'Ford Universal EV Platform,' targeting a midsize electric pickup at Louisville Assembly for a 2027 launch, with roughly $5 billion committed to the platform, assembly process and truck program.",
       hist:"Real: Ford's skunkworks team, led by former Tesla engineer Alan Clarke, developed the Universal EV Platform targeting a 2027 midsize electric pickup at Louisville Assembly, with roughly $5B committed."},
      {label:"Keep iterating on the existing Mach-E/Lightning platforms instead", fx:{cash:+4,future:-6},
       result:"Cheaper to fund today, and it doesn't solve the structural cost problem that made Tesla and Chinese EV makers so hard to compete with in the first place."},
      {label:"License or partner with a Chinese low-cost EV platform provider", fx:{cash:-2,core:-4,future:+6},
       result:"Faster to a lower-cost platform, and politically combustible in a U.S. market increasingly suspicious of Chinese EV technology and supply chains."}
     ]}
   ]
  }
 }
};
EVENTS.ford = [
 {title:"UAW Warning Strike Vote", text:"Local union leadership authorizes a strike vote months ahead of contract talks, just to remind Dearborn the calendar matters.", fx:{core:-4}, up:"Negotiators schedule an early sit-down. Nothing's resolved, but nobody's picketing yet."},
 {title:"Chip Shortage Bites Again", text:"A single semiconductor supplier in Taiwan misses a shipment, and an F-150 plant idles for three days waiting on parts that cost about four dollars each.", fx:{cash:-4,core:-3}, up:"Engineers requalify a substitute chip in six weeks. The line restarts, slightly poorer for the detour."},
 {title:"J.D. Power Quality Surprise", text:"An unglamorous trim of the Explorer wins a quality award nobody at headquarters expected, and the press release writes itself.", fx:{core:+5}, up:"Marketing milks it for a full news cycle. The Explorer team milks it for a full year of bonuses."},
 {title:"Battery Raw Material Spike", text:"Lithium and nickel prices jump on a supply-chain scare, and Model e's per-unit losses get a little worse before anyone in Dearborn can do anything about it.", fx:{future:-4}, up:"Prices ease three quarters later. The damage to this year's numbers does not."},
 {title:"Rental Fleet Pulls Back", text:"A major rental company trims its annual Ford order, citing softer travel demand, and the news lands harder on the stock than the actual dollar figure deserves.", fx:{core:-3}, up:"Retail demand quietly fills most of the gap. Analysts notice a quarter later than they should have."},
 {title:"Software Recall, Solved Overnight", text:"A glitch in an infotainment update bricks a small batch of dashboards. Ford pushes a fix via OTA update before most owners even file a complaint.", fx:{future:+4}, up:"A decade ago, this would have been a dealership recall costing weeks. Tonight it's a software patch and a shrug."}
];
TICKER.ford = [
 "GM teases its own EV platform reset — sound familiar?",
 "Analyst note: 'Ford Pro is the best business nobody talks about'",
 "Rivian misses delivery targets, again",
 "UAW eyes the next contract cycle already",
 "Chinese EV maker undercuts Mach-E pricing in Europe",
 "Truck residual values hold steady — for now",
 "Tesla cuts prices; Lightning order book feels it",
 "Bond rating agencies quietly watch Model e's burn rate"
];
