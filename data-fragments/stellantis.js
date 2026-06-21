DATA.stellantis = {
 name:"Stellantis", short:"Stellantis", logo:"🔧", theme:"theme-stellantis", ipo:22,
 pitch:"A bankrupt Italian carmaker bets on an even more bankrupt American one, with no cash down. Four companies, one balance sheet, infinite ways to blow it up.",
 kpis:[
  {key:"margin", label:"Margin Discipline", desc:"Operating profitability and capital discipline. Hit zero and the lenders take the keys."},
  {key:"trust", label:"Brand & Dealer Trust", desc:"Goodwill across Jeep, Ram, Chrysler, Dodge, Fiat, Peugeot and the dealers who sell them. Hit zero and the network turns on you publicly."},
  {key:"scale", label:"Industrial Scale", desc:"Merger logic, platform leverage, and your ability to convince anyone bigger is better. Hit zero and you're a fading regional player nobody wants to merge with."}
 ],
 ticker:"STLA",
 bankruptcy:"The lenders call the loans, the unions call an emergency session, and the Agnelli family's century-old industrial empire is broken up for parts in a Milan conference room. Somewhere in Turin, a portrait of the founder is quietly taken down.",
 legendary:"You took a hundred-year-old Italian also-ran, married it to a dying American carmaker for nothing down, then married THAT to a French rival — and somehow, for a few golden years, ran the most profitable mass-market automaker on Earth. History books will argue about the ending. They will not argue about the audacity.",
 eras:{
  a:{
   name:"The Turnaround and the Bargain", years:"2004–2009", start:{margin:25, trust:45, scale:20}, stock0:4, deep:true,
   intro:"June 2004. Fiat has churned through five CEOs in two years, the board is desperate, and they've just handed the keys to an outsider — the CEO of a Swiss inspection company who has never built a car. Turin is hemorrhaging money and credibility. Within five years you'll be running this company AND negotiating to rescue an even bigger broken American carmaker, for nothing down, while the U.S. government and the UAW watch warily. Nobody, including you, knows that part yet.",
   scenarios:[
    {id:"ceo", year:"JUN 2004", title:"The Fifth CEO in Two Years",
     text:"Fiat Group is rumored to be heading toward break-up or a GM bailout-style rescue. The board — desperate, embarrassed, out of internal candidates anyone trusts — has turned to you: a Fiat board member, but an outsider to the auto industry, currently running a Swiss product-testing firm. You have no honeymoon period. The press already has the knives out.",
     choices:[
      {label:"Take it, and move fast: flatten management, install young executives, force a turnaround in a year", fx:{margin:+12,trust:+4,scale:+2}, set:["fast_mover"],
       result:"You strip out layers of middle management nobody could explain the purpose of, promote engineers half their predecessors' age, and tell the board you'll be profitable within a year — and mean it.",
       hist:"Real: Marchionne became Fiat CEO June 1, 2004, and pushed the company back to profitability within about a year."},
      {label:"Take it, but go slow — study the org for six months before changing anything", fx:{margin:+3,trust:+6}, set:["slow_mover"],
       result:"Patient and well-advised. It also means six more months of the same bleeding the board just lost patience with twice before."},
      {label:"Decline — recommend the board sell Fiat Auto to GM under the existing alliance instead", fx:{margin:-6,scale:-10}, set:["sold_to_gm"],
       result:"You stay at the inspection company. Fiat Auto disappears into GM's org chart within two years, just another absorbed European nameplate. History does not remember your name."}
     ]},
    {id:"gmput", year:"2005", title:"Exit GM, Cash in Hand", cond:"!sold_to_gm",
     text:"Fiat holds a put option from a 2000 alliance with General Motors — leverage that could force GM to buy the rest of Fiat Auto outright. The alliance has been drifting and unproductive for years. You can let it die quietly, or use the option as a lever for a clean, lucrative exit.",
     alt:[{if:"fast_mover", text:"Fiat holds a put option from a 2000 alliance with General Motors. You've already shown the board you move fast and don't flinch — now the question is whether you'll spend that same nerve squeezing Detroit for cash, or let a tired alliance fade quietly."},
          {if:"slow_mover", text:"Fiat holds a put option from a 2000 alliance with General Motors. Six months of careful study taught you exactly how little this alliance is worth to either side — the only open question is how hard to press GM on the way out."}],
     choices:[
      {label:"Exercise the put hard — force GM to pay to walk away", fx:{margin:+14,scale:+6}, set:["gm_exit"],
       result:"GM pays roughly $2 billion to terminate the alliance and lets Fiat keep full ownership of Fiat Auto — a critical cash infusion right when the turnaround needs it most.",
       hist:"Real: Fiat exercised the put option and GM paid to exit the alliance, a widely corroborated (though not fully primary-sourced) figure near $2B."},
      {label:"Let the option lapse and keep negotiating a restructured alliance", fx:{margin:-4,scale:-4}, set:["gm_drift"],
       result:"The alliance limps on, contributing little, costing focus. You'll wish you'd taken the cash."},
      {label:"Sue for an even larger payout instead of a negotiated exit", fx:{margin:+4,trust:-4}, set:["gm_sued"],
       result:"Lawyers get rich. The settlement, two years and several headlines later, is barely better than what was on the table at the start."}
     ]},
    {id:"renewal", year:"2006–2008", title:"Profitable Again, But Europe Is Shrinking",
     text:"By 2006 Fiat has returned to profitability. The board's instinct is to bank the win. Yours is to keep spending — a new Fiat 500, an Alfa Romeo revival — while European mass-market volumes stagnate and storm clouds gather that nobody yet knows will become the 2008 financial crisis.",
     choices:[
      {label:"Keep investing in product at full speed — launch the new 500 anyway", fx:{margin:-6,trust:+10,scale:+4}, set:["invested_through_crisis"],
       result:"The new Fiat 500 launches in 2007 to genuine acclaim, right as the global economy starts to wobble. You've bet the renewal on timing you don't control.",
       hist:"Real: Fiat kept investing through the period; the new 500 launched in 2007 even as the 2008 crisis hit global auto sales hard."},
      {label:"Slow capital spending and bank the profits defensively", fx:{margin:+10,trust:-6,scale:-4}, set:["banked_profits"],
       result:"The balance sheet looks better on a slide. The product lineup ages a year you can't get back."},
      {label:"Start quietly shopping for a merger partner now, before the crisis forces your hand", fx:{margin:+2,scale:+8}, set:["early_partner_search"],
       result:"Premature, by most calendars. But you've started conversations that will matter later, when everyone else is calling at once."}
     ]},
    {id:"chrysler_open", year:"JAN 2009", title:"Chrysler Is Dying, and Cheap",
     text:"Chrysler — owned by Cerberus Capital since 2007 — is collapsing: burning cash, no money for new products, heading toward a politically explosive bankruptcy as the Obama administration's auto task force decides whether to rescue GM and Chrysler at all. You see opportunity nobody else sees: trade Fiat's small-car platforms and fuel-efficient engines for a stake in Chrysler — with no cash, because you have none to give.",
     voice:"Steven Rattner, Treasury auto task force, on the negotiations: Marchionne reportedly swore at underlings and once walked out to an Apple Store to cool off.",
     choices:[
      {label:"Open talks for a stake — technology for equity, zero cash down", fx:{scale:+16,margin:+2}, set:["chrysler_talks"],
       result:"You walk into the most consequential negotiation of your career offering Chrysler everything except money: small-car platforms, engine technology, and global distribution access they desperately lack.",
       hist:"Real: Fiat began talks for a stake in Chrysler in January 2009, offering technology rather than cash."},
      {label:"Stay out entirely — let Chrysler die or get absorbed by a domestic buyer", fx:{scale:-12,trust:+2}, set:["chrysler_pass"],
       result:"Prudent, by the numbers. You will spend the next decade watching Fiat remain a mid-sized European player while this exact opportunity becomes someone else's legend."},
      {label:"Demand a larger upfront equity stake with some capital contribution", fx:{margin:-8,scale:+6}, set:["chrysler_paid"],
       result:"Cerberus and the task force balk — you have less cash than Chrysler does. The negotiation stalls while better-funded suitors circle."}
     ]},
    {id:"bankruptcy42", year:"APR–JUN 2009", title:"42 Days in Bankruptcy", cond:"chrysler_talks",
     text:"Chrysler files Chapter 11 on April 30, 2009. The Fiat deal is contingent on Chrysler emerging fast — many feared a drawn-out bankruptcy could destroy what's left of the brand and dealer network entirely. You stake your entire involvement on speed nobody thinks is possible.",
     alt:[{if:"gm_exit", text:"Chrysler files Chapter 11 on April 30, 2009. The GM put-option cash is already in the bank, giving you a cushion most rescuers wouldn't have — but the Fiat-Chrysler deal still lives or dies on how fast this bankruptcy moves."},
          {if:"gm_drift", text:"Chrysler files Chapter 11 on April 30, 2009. You're walking into this with a GM alliance still unresolved and dragging on your attention — exactly the kind of distraction a 42-day bankruptcy clock has no patience for."}],
     choices:[
      {label:"Push for the fastest possible reorganization — bet everything on speed", fx:{scale:+14,trust:+8}, set:["fast_chrysler"],
       result:"Chrysler's bankruptcy closes in just 42 days — among the fastest major industrial bankruptcies on record. 'New Chrysler' emerges June 10, 2009, majority owned by the UAW retiree health trust, with Fiat holding 20% and management control. You become CEO of Chrysler the same day, while remaining CEO of Fiat.",
       hist:"Real: Chrysler's Chapter 11 closed in 42 days, emerging June 10, 2009; Marchionne became Chrysler CEO that day while remaining Fiat CEO."},
      {label:"Accept a slower, traditional reorganization to preserve more creditor claims", fx:{scale:-6,trust:+4}, set:["slow_chrysler"],
       result:"More orderly. Also slower — and every extra month in bankruptcy bleeds dealers and brand equity you don't get back."},
      {label:"Push for full liquidation instead — cut losses, take only the technology licensing", fx:{scale:-14,margin:+6}, set:["liquidated_chrysler"],
       result:"You get a tidy royalty stream and none of the headaches. You also get none of the upside when Chrysler — against every prediction — survives and thrives."}
     ]}
   ]
  },
  b:{
   name:"Building Fiat Chrysler", years:"2009–2014", start:{margin:35, trust:55, scale:45}, stock0:9,
   intro:"June 2009. You're now CEO of two car companies on two continents — Fiat in Turin, Chrysler in Auburn Hills — legally separate, culturally alien to each other, meant to share platforms and engineering. You commute by private jet and are reported to sleep only a few hours a night. The next five years are about turning twenty percent of a rescued American carmaker into all of it.",
   scenarios:[
    {id:"twocompanies", year:"2009–2010", title:"Running Two Car Companies at Once",
     text:"You are simultaneously CEO of Fiat S.p.A. and Chrysler Group LLC — different unions, different product cycles, different time zones — legally separate but meant to share everything from platforms to a 'World Class Manufacturing' quality discipline.",
     choices:[
      {label:"Run both personally, in parallel, and force shared platforms immediately", fx:{scale:+10,margin:+4}, set:["parallel_run"],
       result:"You push the Dodge Dart onto a Fiat Compact platform and share Jeep-Fiat 500X underpinnings, while flying between Turin and Auburn Hills on a schedule that alarms your doctors.",
       hist:"Real: Marchionne ran both companies in parallel for nearly five years, pushing shared platforms and a World Class Manufacturing push at Chrysler."},
      {label:"Appoint a dedicated Chrysler CEO and remain Fiat-only chairman", fx:{margin:+6,scale:-8}, set:["delegated_chrysler"],
       result:"Cleaner org chart, slower integration. Two companies that report to two different people rarely merge their instincts, let alone their platforms."},
      {label:"Merge the legal entities immediately rather than running parallel companies", fx:{margin:-8,trust:-4}, set:["forced_merge"],
       result:"The U.S. government, the UAW trust, and Canada all still hold stakes with milestone-based vesting. You can't legally force this yet — the attempt burns goodwill with all three for nothing."}
     ]},
    {id:"firststake", year:"JAN 2011", title:"First Stake Increase: 20% to 25%",
     text:"The first government performance milestone — building a fuel-efficient four-cylinder engine at Chrysler's Dundee, Michigan plant — is on the table. It's contractual, not discretionary, but how hard you push to actually hit it is your call.",
     choices:[
      {label:"Invest fully to meet the milestone on schedule", fx:{scale:+8,margin:+2}, set:["milestone1"],
       result:"Fiat's stake rises from 20% to 25% in January 2011 after meeting the engine-production milestone, right on schedule.",
       hist:"Real: Fiat's stake rose from 20% to 25% in January 2011 after the Dundee engine milestone was met."},
      {label:"Under-invest slightly and let the milestone slip a quarter", fx:{margin:+4,scale:-4},
       result:"You save some capital. The stake increase slips, and so does momentum on every subsequent milestone negotiation."},
      {label:"Over-deliver on the milestone to signal momentum to Washington", fx:{margin:-4,scale:+10}, set:["overdelivered"],
       result:"Expensive theater, but Washington notices a partner that beats its own targets — useful currency for what comes next."}
     ]},
    {id:"treasury", year:"APR 2011", title:"Buying Out the U.S. Treasury",
     text:"The U.S. government wants out of its Chrysler stake as fast as politically possible — both to recoup taxpayer money and end the 'government motors' stigma. You have a friendly, motivated counterparty and a chance to accelerate toward majority ownership years ahead of schedule.",
     choices:[
      {label:"Pay to buy out Treasury directly, now, ahead of schedule", fx:{scale:+16,margin:-6}, set:["bought_treasury"],
       result:"Fiat agrees to pay roughly $1.3 billion-plus to retire Chrysler's government loans and buy out Treasury's stake, pushing ownership toward 46% and then majority within the year — years ahead of the original milestone timeline.",
       hist:"Real: in spring 2011 Fiat paid roughly $1.3B+ to retire Chrysler's loans and buy out Treasury's stake, accelerating toward majority ownership."},
      {label:"Wait for Treasury to exit via a public sale or IPO instead", fx:{margin:+4,scale:-10},
       result:"Patient and cheaper, in theory. In practice, Washington's exit timeline answers to politics, not your patience, and the window narrows unpredictably."},
      {label:"Negotiate hard for a lower price by waiting out political pressure on Treasury to sell", fx:{margin:+2,scale:-4},
       fxIf:[{if:"overdelivered", fx:{scale:+4}, note:"Your track record of beating milestones gives you real leverage at the negotiating table."}],
       result:"You shave some cost off the deal. You also spend months you could have used consolidating, while the VEBA negotiation clock keeps ticking in parallel."}
     ]},
    {id:"dart", year:"2012", title:"The Dart and the Last Milestone",
     text:"The final government milestone requires Chrysler to build the new Dodge Dart — on a Fiat-derived small-car platform — at an Illinois plant and prove it hits 40 mpg combined. It's a major bet that Fiat's small-car engineering can translate into an American compact sedan.",
     choices:[
      {label:"Rush the Dart to market to hit the EPA target and the milestone window", fx:{scale:+10,trust:-4}, set:["rushed_dart"],
       result:"Chrysler and Fiat commit the Dart to the Belvidere plant and demonstrate the required fuel economy, triggering the final 5% ownership increase. The Dart itself underperforms commercially and is discontinued within a few years — a cautionary footnote to an otherwise successful milestone.",
       hist:"Real: the Dart hit its EPA milestone and triggered the final stake increase, but went on to underperform and was discontinued by around 2016."},
      {label:"Delay the launch to perfect the car, risking the milestone window", fx:{scale:-8,trust:+4},
       result:"A better car, later. The milestone clock doesn't care about your craftsmanship schedule, and the stake increase slips with it."},
      {label:"Abandon the Fiat-platform approach for a more conventional American compact", fx:{margin:-6,scale:-6}, set:["abandoned_dart"],
       result:"You forfeit the milestone path entirely and start a new small-car program from scratch, on Chrysler's dime, on Chrysler's timeline."}
     ]},
    {id:"veba_open", year:"2011–2012", title:"Buying Out the VEBA",
     text:"The remaining major outside shareholder is the VEBA — the UAW retiree healthcare trust holding the largest single stake in new Chrysler. It wants liquidity for retiree healthcare obligations. You want full ownership to finally merge the companies into one.",
     choices:[
      {label:"Open private buyout talks immediately, on your terms", fx:{scale:+6}, set:["veba_private"],
       result:"The VEBA's trustees have a contractual right to force a Chrysler IPO if you don't buy them out — a major lever they're not shy about mentioning.",
       hist:"Real: the VEBA held a contractual right to force a Chrysler IPO, which became a major lever in the 2013-2014 endgame."},
      {label:"Let the VEBA pursue its IPO threat and buy shares on the open market over time", fx:{margin:+4,scale:-8}, set:["veba_ipo_path"],
       result:"Slower, more dilutive to your eventual control, and it hands the VEBA exactly the leverage it wanted."},
      {label:"Offer a partial buyout now, leaving VEBA a long-term minority holder", fx:{margin:-2,scale:-4},
       result:"Half-measures satisfy nobody. The VEBA still has its IPO threat, and you've spent cash without solving the problem."}
     ]},
    {id:"wantitall", year:"MAY 2013", title:"Marchionne Wants It All",
     text:"Fiat's European business is badly hurt by the eurozone crisis; Chrysler is now Fiat's profit engine. You push publicly and aggressively to acquire full Chrysler ownership from the VEBA — well before the VEBA is ready to sell on your terms.",
     cond:"!veba_ipo_path",
     choices:[
      {label:"Go public with your intent to acquire full ownership, pressure the VEBA in the press", fx:{scale:+8,trust:-2}, set:["public_pressure"],
       result:"You state your intent publicly in 2013. The VEBA resists your offered price, eventually forcing Chrysler toward filing for a public stock offering as leverage — which, ironically, forces you to negotiate a final buyout price rather than let an IPO dilute control.",
       hist:"Real: Marchionne publicly stated his intent to acquire full Chrysler ownership in 2013; VEBA resistance pushed the matter toward an IPO filing as leverage."},
      {label:"Keep negotiations private and let the VEBA set the pace", fx:{margin:+4,scale:-4},
       result:"Quieter, slower, and the VEBA's trustees feel no urgency to move off their number."},
      {label:"Offer the VEBA a much higher price to close the deal immediately", fx:{margin:-10,scale:+12}, set:["overpaid_veba"],
       result:"Money talks. The deal accelerates dramatically — at a cost your CFO will mention every quarter for years."}
     ]},
    {id:"fcaborn", year:"JAN 2014", title:"Full Ownership, FCA Is Born",
     text:"The VEBA's threatened IPO route has forced the issue. Fiat and the VEBA reach for final terms on the trust's entire remaining stake — the last step to finally unify two companies into one.",
     choices:[
      {label:"Close the deal — buy the VEBA's full stake, unify the company as FCA", fx:{scale:+16,margin:+6,trust:+4}, set:["fca_unified"],
       result:"On January 1, 2014, Fiat announces a deal to acquire the VEBA's remaining roughly 41.5% stake for about $3.65–4.35 billion combined, giving Fiat 100% ownership. Fiat Chrysler Automobiles is formally created, with FCA shares trading and you leading one unified global company for the first time since 2009. Italian unions worry publicly the deal shifts Fiat's center of gravity to the U.S.",
       hist:"Real: Fiat announced the full VEBA buyout on January 1, 2014 for roughly $3.65–4.35B, creating FCA later that year."},
      {label:"Let the Chrysler IPO proceed and buy shares gradually afterward", fx:{margin:+4,scale:-12},
       result:"Cheaper in theory, slower in practice — and an IPO that prices well makes your eventual full buyout dramatically more expensive than the negotiated deal would have been."},
      {label:"Structure a stock-swap instead of a cash purchase to preserve liquidity", fx:{margin:+2,scale:+6},
       result:"Clever balance-sheet management. It also means diluting Fiat's own shareholders to absorb the VEBA's stake — a trade-off Turin's investors notice immediately."}
     ]}
   ]
  },
  c:{
   name:"Scale or Die: The Merger Crusade", years:"2014–2019", start:{margin:45, trust:60, scale:55}, stock0:11,
   intro:"FCA is finally one company. You're now convinced the entire auto industry is structurally unprofitable — duplicated R&D, duplicated capital spending, everyone reinventing the same wheel at ruinous cost. Only mega-mergers can fix it, and you intend to spend the rest of your career proving it, starting with the most profitable, recognizable asset in the portfolio.",
   scenarios:[
    {id:"ferrari", year:"OCT 2014", title:"Spin Off the Crown Jewel",
     text:"FCA is still capital-starved relative to its $60 billion product-investment ambitions. You propose spinning off Ferrari — FCA's most profitable and prestigious brand — into a separately listed company, partly to raise cash and partly to let Ferrari trade at luxury-goods multiples, like Hermès, instead of auto-industry multiples.",
     choices:[
      {label:"Spin off Ferrari via IPO — let it trade on its own luxury multiple", fx:{margin:+12,scale:+4}, set:["ferrari_spun"],
       result:"FCA announces the separation in October 2014; Ferrari's IPO prices on the NYSE in October 2015, raising capital for FCA's broader investment plan. Ferrari has since traded at a major valuation premium to FCA/Stellantis, vindicating the thesis completely.",
       hist:"Real: Ferrari's NYSE IPO priced October 2015 and has since traded at a major premium to FCA/Stellantis."},
      {label:"Keep Ferrari fully inside FCA as a permanent profit anchor", fx:{margin:-6,scale:-4},
       result:"Steady, comfortable, and you leave billions of unrealized luxury-multiple value sitting inside an auto-industry stock forever."},
      {label:"Spin off Maserati instead — a less iconic, less painful asset to let go", fx:{margin:+2,trust:-4},
       result:"Maserati's IPO interest is tepid; luxury investors wanted the Prancing Horse, not the trident. The raise disappoints."}
     ]},
    {id:"capitaljunkie", year:"APR–MAY 2015", title:"Confessions of a Capital Junkie",
     text:"You publish a 26-page deck arguing the industry wastes tens of billions duplicating R&D and capital spending on redundant technology, and that consolidation is the only cure. You aim the argument squarely at General Motors — and at its CEO, Mary Barra.",
     voice:"Mary Barra, GM CEO, June 2015: \"For the past few years, we've been merging with ourselves. We have scale and we're leveraging that. We're focused on that and not the other.\"",
     choices:[
      {label:"Release the deck publicly, then propose a merger directly to Barra", fx:{scale:+10,trust:+2}, set:["gm_approach"],
       result:"You release the presentation April 29, 2015, calling it an 'insider perspective on the cure for the industry's value-destroying addiction to capital.' Investors call the argument 'spot on' and shares briefly rally — but GM's board reviews and rejects your direct merger proposal.",
       hist:"Real: Marchionne released 'Confessions of a Capital Junkie' April 29, 2015 and proposed a merger to GM's Mary Barra; GM's board reviewed and rejected it."},
      {label:"Keep FCA independent and focus purely on internal cost discipline", fx:{margin:+8,scale:-10}, set:["went_alone"],
       result:"Disciplined and unglamorous. No merger headlines, no rejection either — just the slow grind of margin improvement without scale."},
      {label:"Approach a different target instead of GM — a Japanese or Korean automaker", fx:{scale:+4,trust:-2},
       result:"The overture goes nowhere fast; cross-Pacific merger logic moves at the speed of two boards that have never met, which is to say not at all."}
     ]},
    {id:"crusadecontinues", year:"2015–2017", title:"The Crusade Continues, Alone",
     text:"Rebuffed by GM, you don't give up on consolidation logic. You keep making the public case for industry mergers for years, while FCA invests heavily in Jeep and Ram — its most profitable brands — and scales back small-car and sedan programs in North America.",
     choices:[
      {label:"Cut sedans entirely in North America, double down on Jeep and Ram", fx:{margin:+14,trust:-4}, set:["cut_sedans"],
       result:"FCA stops building the Dodge Dart and Chrysler 200 sedans in the U.S. to focus capacity on Jeep/Ram trucks and SUVs — a hugely profitable bet during the SUV/truck boom — while you keep publicly floating merger ideas at every auto show that will have you.",
       hist:"Real: FCA announced in 2016 it would stop building the Dart and Chrysler 200 to focus on Jeep/Ram; Marchionne kept floating merger ideas through at least 2017."},
      {label:"Abandon the merger crusade and focus solely on FCA's own portfolio", fx:{margin:+6,scale:-12},
       result:"Quieter, more inward-looking. The duplicated-capital problem you diagnosed so loudly doesn't go away just because you stopped talking about it."},
      {label:"Pursue technology-sharing alliances short of a full merger, e.g. with Google/Waymo", fx:{scale:+6,margin:+2}, set:["waymo_alliance"],
       result:"FCA pursues a self-driving minivan partnership with Google's Waymo — a real alliance, just not the mega-merger you actually wanted."}
     ]},
    {id:"succession", year:"JUL 2018", title:"The Sudden Succession",
     text:"Shoulder surgery in early summer 2018 develops serious complications. Your health is failing fast, and FCA's board, chaired by John Elkann, must improvise a succession plan in real time.",
     voice:"John Elkann, on Marchionne's death: \"Unfortunately, what we feared has come to pass. Sergio Marchionne, man and friend, is gone.\"",
     choices:[
      {label:"Transfer authority to Mike Manley, the Jeep-builder who ran Asia-Pacific", fx:{trust:+6,scale:+2}, set:["manley_succeeds"],
       result:"As your health fails, the board transfers your FCA duties to Mike Manley — the British executive who built Jeep into a global success — even before you die. You pass away July 25, 2018, in Zürich, at age 66. Manley is confirmed as FCA CEO.",
       hist:"Real: Mike Manley was named successor as Marchionne's health failed; Marchionne died July 25, 2018, in Zürich at age 66."},
      {label:"Split your roles (FCA, Ferrari, CNH Industrial) among several executives", fx:{trust:-4,scale:-6},
       result:"Distributed leadership during a crisis is rarely a strength. Three executives now answer questions the board can't yet agree on."},
      {label:"Promote a different internal candidate from outside Jeep's leadership", fx:{trust:-2,scale:-2},
       result:"A reasonable name on paper, untested at this altitude. The board's confidence is thinner than the press release suggests."}
     ]},
    {id:"renault", year:"MAY–JUN 2019", title:"The Renault Deal That Almost Was", cond:"manley_succeeds",
     text:"Less than a year into the job, Manley revives the consolidation logic: on May 27, 2019, FCA proposes an all-stock 50/50 merger with Renault, creating the world's third-largest automaker by volume and promising roughly €5 billion a year in synergies.",
     choices:[
      {label:"Push the deal through to a board vote as fast as possible", fx:{scale:+10}, set:["renault_pushed"],
       result:"The Renault board is reportedly less than three hours from a joint announcement when the French government — citing job-security concerns and wanting to also fold in Nissan — asks for a delay. FCA withdraws its offer on June 5–6, 2019: 'It has become clear that the political conditions in France do not currently exist for such a combination to proceed successfully.'",
       hist:"Real: FCA and Renault came within roughly three hours of announcing a merger before the French government intervened; FCA withdrew the offer June 5-6, 2019."},
      {label:"Structure the deal with special protections for France's state stake up front", fx:{scale:+4,trust:+2},
       result:"More palatable to Paris, slower to negotiate. By the time the protections are drafted, the window of board enthusiasm has already started closing."},
      {label:"Wait for Renault's post-Ghosn governance crisis to settle before proposing anything", fx:{scale:-8},
       result:"Caution costs you the moment. By the time Renault's house is in order, someone else may already be courting them."}
     ]},
    {id:"psa", year:"OCT–DEC 2019", title:"Pivot to Peugeot",
     text:"Within months of the Renault collapse, you open talks with PSA Group — Peugeot, Citroën, Opel/Vauxhall — led by CEO Carlos Tavares. Unlike Renault, PSA doesn't have a state shareholder with the same veto leverage.",
     choices:[
      {label:"Move fast into binding merger talks with PSA", fx:{scale:+16,margin:+4}, set:["psa_deal"],
       result:"FCA and PSA confirm merger talks publicly on October 30, 2019, for a deal valued near $50 billion. On December 18, 2019, the two sides announce a binding 'Combination Agreement' to merge as equals.",
       hist:"Real: FCA-PSA talks were confirmed October 30, 2019; the binding Combination Agreement was announced December 18, 2019."},
      {label:"Keep shopping for other partners instead — a renewed Renault approach, or a Japanese/Korean automaker", fx:{scale:-6},
       result:"More options, less momentum. Nobody else on the list moves with PSA's urgency, and the crusade loses another year."},
      {label:"Abandon the merger strategy entirely and focus on North American truck/SUV profits", fx:{margin:+10,scale:-18}, set:["abandoned_merger"],
       result:"Profitable and lonely. The scale problem you spent five years diagnosing remains exactly as unsolved as the day you found it."}
     ]}
   ]
  },
  d:{
   name:"Stellantis: Margins, Mutiny, and a New CEO", years:"2020–2026", start:{margin:55, trust:50, scale:70}, stock0:14,
   intro:"January 2021. The FCA-PSA merger has formally closed amid a pandemic, creating Stellantis — fourteen brands, two legacy camps, one balance sheet. John Elkann chairs the board; Carlos Tavares, the former PSA chief famous for engineering his own company's margin turnaround, becomes CEO. The next five years will swing from the most profitable era in the company's history to a dealer revolt, a UAW strike, an abrupt resignation, and a return to V8 engines nobody saw coming.",
   scenarios:[
    {id:"stellantisborn", year:"JAN 2021", title:"Stellantis Is Born",
     text:"Shareholders have approved the merger; it completes January 16, 2021, with shares trading on Euronext Paris/Milan and the NYSE under ticker STLA within days. The combined company needs a name — chosen as 'Stellantis,' from the Latin for 'to brighten with stars' — and a CEO from one of two legacy camps.",
     choices:[
      {label:"Name Carlos Tavares CEO, with Elkann as Chairman", fx:{scale:+10,margin:+6}, set:["tavares_ceo"],
       result:"The board names Tavares CEO — notable since PSA, the smaller-revenue partner by some measures, supplies the chief executive, reflecting his reputation for engineering PSA's own dramatic margin turnaround in the 2010s.",
       hist:"Real: the merger completed January 16, 2021; Tavares was named CEO with Elkann as Chairman, and shares began trading as STLA."},
      {label:"Appoint Mike Manley, FCA's outgoing CEO, as overall CEO instead", fx:{trust:+4,scale:-6},
       result:"A safer, more continuity-minded choice for the American side of the business. It also signals PSA's margin discipline won't lead the combined company — a message the market reads clearly."},
      {label:"Retain separate FCA and PSA brand-management structures longer before full integration", fx:{margin:-6,scale:-4},
       result:"Gentler on culture, slower on synergies. The 'combination' starts to look like two companies sharing a logo."}
     ]},
    {id:"dareforward", year:"MAR 2022", title:"Dare Forward 2030", cond:"tavares_ceo",
     text:"With integration underway, you must set the long-term strategic plan for the newly merged giant — balancing the EU's accelerating EV mandates against North America's still-truck-hungry market and Stellantis's own ambitious margin targets.",
     choices:[
      {label:"Commit to aggressive BEV targets alongside double-digit margin promises", fx:{scale:+10,margin:+4}, set:["dare_forward"],
       result:"Stellantis unveils 'Dare Forward 2030' on March 1, 2022: carbon net-zero by 2038, 100% BEV sales mix in Europe and 50% in the U.S. by 2030, 5 million global BEV sales, doubled net revenue, and sustained double-digit adjusted operating income margin throughout the decade. The plan becomes the yardstick your entire tenure will be judged against.",
       hist:"Real: Stellantis unveiled Dare Forward 2030 on March 1, 2022, with 100% BEV mix in Europe and 50% in the US by 2030 among its headline targets."},
      {label:"Prioritize a faster, more capital-intensive all-EV pivot regardless of near-term margin hit", fx:{margin:-10,scale:+12},
       result:"Bold, and immediately expensive. The board signs off nervously, watching the capex line with visible discomfort."},
      {label:"Focus capital on fewer global brands and wind down weaker ones immediately", fx:{trust:-8,margin:+8},
       result:"Decisive, and it costs you political capital across two continents' worth of brand loyalists and dealers overnight."}
     ]},
    {id:"marginvolume", year:"2022–2023", title:"Margin Over Volume", cond:"tavares_ceo",
     text:"You push a deliberate strategy: raise vehicle prices, especially on Jeep and Ram in North America, and cut low-margin trims and fleet sales — driving Stellantis's adjusted operating margin toward roughly 13%, nearly double Volkswagen's or Renault's, even as it costs market share.",
     choices:[
      {label:"Push the price increases through 2023 and 2024 regardless of early dealer pushback", fx:{margin:+18,trust:-12}, set:["margin_pushed"],
       result:"Stellantis posts record 2023 profitability — operating margin near 12-13%. But seeking higher margins loses core customers, especially fleet buyers and price-sensitive retail buyers, to rivals — setting up the U.S. market-share collapse and dealer revolt that follows in 2024.",
       hist:"Real: Stellantis posted ~12-13% operating margin in 2023, among the best in the industry, while losing core customers to the pricing strategy — a dynamic Reuters and others directly tied to the 2024 collapse."},
      {label:"Match competitors' pricing and incentive moves to preserve volume and market share", fx:{margin:-10,trust:+8}, set:["matched_pricing"],
       result:"Lower margins, steadier dealer relationships. The headline profitability numbers are less impressive, and so is the board's enthusiasm."},
      {label:"Slow the price increases in response to early 2023 dealer pushback", fx:{margin:+4,trust:+2}, set:["slowed_pricing"],
       result:"A middle path. Margins stay healthy without the full collapse — but you've also blunted the very strategy the board hired you to execute."}
     ]},
    {id:"uawstrike", year:"SEP–OCT 2023", title:"The UAW Strike", cond:"tavares_ceo",
     text:"As the UAW's national contract expires, Stellantis faces a coordinated 'stand-up strike' targeting plants across Ford, GM, and Stellantis simultaneously — demanding large wage increases, restored cost-of-living adjustments, and job-security guarantees after years of plant idling.",
     voice:"UAW President Shawn Fain led the union's targeted strike strategy across all three automakers.",
     choices:[
      {label:"Negotiate a full package matching the industry pattern — wages, COLA, job guarantees", fx:{trust:+10,margin:-8}, set:["uaw_settled"],
       result:"After roughly six weeks of strikes, Stellantis and the UAW reach a tentative agreement on October 28, 2023: roughly 25% in general wage increases over 4.5 years (compounding to about 33% with COLA), saving 5,000 jobs and committing to add 5,000 new jobs by April 2028.",
       hist:"Real: Stellantis and the UAW reached a tentative agreement October 28, 2023, with ~25% wage increases over 4.5 years and job-security commitments."},
      {label:"Take a harder line on wages, risking a much longer strike", fx:{margin:+4,trust:-12},
       result:"The plants stay dark longer than anyone budgeted for. The eventual settlement looks almost identical to what was on the table at week two — just costlier in lost production and goodwill."},
      {label:"Settle early with a smaller package to avoid prolonged shutdowns", fx:{margin:-2,trust:+4},
       result:"Faster resolution, a thinner deal. The union's rank and file ratify it unenthusiastically, filing the experience away for the next contract."}
     ]},
    {id:"dealerrevolt", year:"SEP 2024", title:"The Dealers Revolt", cond:"margin_pushed",
     text:"By mid-2024, North American sales have fallen roughly 20% year-over-year in Q3; unsold Jeep/Ram/Chrysler/Dodge inventory is piling up on dealer lots due to overpricing relative to rivals. Dealers blame your decisions directly, in public, in writing.",
     voice:"Kevin Farrish, Stellantis National Dealer Council president, in an open letter: \"The reckless short-term decision-making to secure record profits in 2023 has had devastating yet entirely predictable consequences in the US market... brands like Jeep, Dodge, Ram, and Chrysler that have over a century of history in America.\"",
     choices:[
      {label:"Respond with steep incentives and price cuts to clear inventory, even sacrificing the margin story", fx:{trust:+8,margin:-12}, set:["cut_prices_2024"],
       result:"You let go of the margin narrative that defined your tenure to address dealer anger. The financial press notices immediately — and so does the board.",
       hist:"Real: dealers' public anger reached the press around September 12, 2024, via CNBC and Detroit News coverage of Farrish's letter and UAW criticism."},
      {label:"Engage dealers privately and defend the strategy publicly", fx:{trust:-10,margin:+4}, set:["defended_strategy"],
       result:"The letter campaign becomes a slow-burning public-relations crisis instead of a private dispute. North American chief Carlos Zarlenga is also blamed by dealers, who allege decisions are being made by European executives disconnected from the U.S. market."},
      {label:"Replace North American leadership before the situation becomes fully public", fx:{trust:+2,scale:-4},
       result:"A partial fix. It doesn't reverse the inventory pileup, and dealers note the change came only after the letters started leaking to reporters."}
     ]},
    {id:"inventorycut", year:"SEP–OCT 2024", title:"The Emergency Inventory Cut", cond:"margin_pushed",
     text:"Facing the dealer revolt and collapsing North American shipments, you must decide how aggressively to slash production and inventory versus protect near-term revenue and margin guidance.",
     choices:[
      {label:"Cut production sharply and revise full-year guidance downward immediately", fx:{margin:-10,trust:+6}, set:["sharp_cut"],
       result:"Stellantis revises its full-year 2024 guidance downward, targeting no more than 330,000 units of U.S. dealer inventory by year-end — cutting 100,000+ units — with North American shipments down by more than 200,000 vehicles in the second half of 2024 alone, plus increased incentives on older model-year vehicles.",
       hist:"Real: Stellantis cut US dealer inventory targets to ~330,000 units and cut North American H2 2024 shipments by more than 200,000 vehicles."},
      {label:"Maintain production and rely on heavier incentive spending to clear stock", fx:{margin:-6,trust:-2},
       result:"Lots stay full longer than dealers can stomach, and the incentive spend doesn't fully close the gap. The revolt simmers rather than resolves."},
      {label:"Cut production gradually over several quarters instead of an abrupt step-change", fx:{margin:-4,trust:+2},
       result:"Smoother for the supply chain, slower for dealers who needed relief months ago. Patience is not what the dealer council is asking for."}
     ]},
    {id:"tavaresresigns", year:"DEC 1, 2024", title:"Tavares Resigns", cond:"tavares_ceo",
     text:"With North American sales and profits collapsing, a profit warning already issued, and persistent disagreement with Chairman John Elkann over strategy, accountability for North America, and succession planning, the situation reaches a breaking point.",
     choices:[
      {label:"Accept the board's position — resign as CEO effective immediately", fx:{trust:+6,scale:-6}, set:["tavares_resigned"],
       result:"Stellantis announces on December 1, 2024 that its board, chaired by Elkann, has accepted your resignation as CEO, citing 'diverging views.' The board forms an Interim Executive Committee chaired by Elkann; Antonio Filosa, already Jeep CEO, is given expanded responsibility as North America COO. A Special Committee is tasked with finding a permanent CEO within the first half of 2025.",
       hist:"Real: Stellantis announced Tavares's resignation December 1, 2024, citing 'diverging views' with the board; Filosa was given expanded North America responsibility."},
      {label:"Propose your own succession timeline and stay through a defined handover", fx:{trust:-4,scale:+4},
       result:"The board's patience for a negotiated exit has already run out. The offer is politely declined, and the resignation happens on the board's terms instead."},
      {label:"Push back and ask the board to strip some authority but keep you as CEO", fx:{trust:-8,margin:-4},
       result:"A messy, public standoff that satisfies no one. The board moves to replace you within weeks anyway, on worse terms than a clean resignation would have offered."}
     ]},
    {id:"filosa", year:"MAY–JUN 2025", title:"Filosa Gets the Job", cond:"tavares_resigned",
     text:"After a roughly six-month global search, the board must choose the next CEO at a moment of historic crisis: collapsing U.S. market share, EV strategy in doubt, incoming U.S. tariffs under the second Trump administration, and a demoralized dealer network.",
     choices:[
      {label:"Promote Antonio Filosa — the 25-year company veteran already running North America", fx:{trust:+10,scale:+4}, set:["filosa_ceo"],
       result:"On May 28, 2025, Stellantis announces Antonio Filosa — South America COO at the 2021 founding, Jeep brand CEO in 2023, North America COO in October 2024, then COO of both Americas and Chief Quality Officer — as the new CEO. He takes full authority June 23, 2025, with Elkann remaining Executive Chairman, and announces a new leadership team on his first day.",
       hist:"Real: Antonio Filosa was announced CEO May 28, 2025, taking full authority June 23, 2025, with Elkann remaining Executive Chairman."},
      {label:"Hire an outside turnaround CEO from another automaker or industry", fx:{trust:-4,scale:-4},
       result:"An outsider with no internal scar tissue from the Tavares years. Also no relationships with the dealer council currently demanding accountability from people they recognize."},
      {label:"Install an extended interim leadership team rather than naming a permanent CEO quickly", fx:{trust:-8,scale:-6},
       result:"The uncertainty drags on. Dealers, the UAW, and Wall Street all read 'no permanent CEO' as 'no plan,' and the stock punishes the ambiguity."}
     ]},
    {id:"tariffs", year:"JUL 2025", title:"Tariffs and Reinstating Guidance", cond:"filosa_ceo",
     text:"You inherit a company that suspended its full-year financial guidance back in April 2025 due to uncertainty from new U.S. import tariffs. You must decide whether and how to reinstate forward guidance amid an unresolved tariff regime.",
     choices:[
      {label:"Reinstate guidance with full tariff cost disclosure, even though the number is ugly", fx:{trust:+8,margin:-6}, set:["guidance_reinstated"],
       result:"On July 29, 2025, Stellantis reinstates 2025 guidance while disclosing tariffs will cost up to roughly $1.7 billion for the year. You tell investors the company is working with the Trump administration to 'properly recognize the high American U.S. content in some vehicles' and expects 'a gradual, sequential acceleration' in performance.",
       hist:"Real: Stellantis reinstated 2025 guidance July 29, 2025, disclosing up to ~$1.7B in tariff costs for the year."},
      {label:"Keep guidance suspended longer until tariff policy stabilizes", fx:{trust:-6,margin:+2},
       result:"Investors read continued silence as continued bad news, regardless of your reasoning. The stock prices in the worst-case scenario by default."},
      {label:"Reinstate guidance but with wide ranges and heavy caveats", fx:{trust:+2},
       result:"A hedge that satisfies no one fully — analysts complain the ranges are too wide to model, while the caveats still make headlines as evasive."}
     ]},
    {id:"v8return", year:"JUL–DEC 2025", title:"Killing the EV-First Strategy: V8s Come Back", cond:"filosa_ceo",
     text:"Dare Forward 2030's aggressive BEV targets are colliding with weak EV demand, especially in North America, while customers abandon Jeep/Ram/Dodge for rivals still offering big V8 trucks and muscle cars. You must decide whether to hold the EV-first line or reverse it.",
     choices:[
      {label:"Reverse course — reintroduce the Hemi V8 and revive the Dodge Charger muscle car", fx:{trust:+14,margin:-10}, set:["v8_returned"],
       result:"Your turnaround plan explicitly reintroduces the Hemi V8 (mildly hybridized) into the Ram 1500 and other models, alongside new Jeep and Ram products and a revived Dodge Charger — reversing Tavares-era EV-first commitments. The reversal comes with a massive reckoning: roughly €22.2 billion in H2 2025 write-downs (about €25.4B for the full year) tied largely to scaling back BEV ambitions, contributing to a full-year 2025 net loss of roughly €22.3 billion. V8 Ram orders reach approximately 50,000 units, with plans to triple production toward 100,000 by 2026.",
       hist:"Real: Stellantis reintroduced the Hemi V8 and revived the Dodge Charger in 2025, booking ~€22.2B in H2 writedowns and a full-year net loss near €22.3B, while V8 Ram orders reached ~50,000 units."},
      {label:"Hold the line on the BEV-first roadmap and wait for demand to catch up", fx:{margin:-4,trust:-10},
       result:"Conviction, at the cost of watching Jeep and Ram buyers keep walking to rivals with combustion options on the lot today, not on a roadmap."},
      {label:"Pursue a hybrid-only middle path without reviving V8s", fx:{margin:+2,trust:-2},
       result:"A compromise that satisfies neither the EV faithful nor the V8 loyalists. Sales data from both camps stays stubbornly flat."}
     ]},
    {id:"qualityreset", year:"2025", title:"The Quality Reckoning: 2,000 New Engineers", cond:"filosa_ceo",
     text:"Years of Tavares-era cost-cutting left persistent quality problems on Jeep, Ram, and Chrysler vehicles — including a major Jeep Grand Cherokee recall covering 400,000+ vehicles over an airbag software fault. You must address it as both an engineering and a brand-trust problem.",
     choices:[
      {label:"Hire roughly 2,000 additional engineers dedicated to quality across Jeep, Dodge, and Ram", fx:{trust:+10,margin:-6}, set:["quality_hired"],
       result:"Stellantis announces the hiring of approximately 2,000 additional quality engineers, explicitly framed as part of your broader 'reset' following the Tavares era. The Jeep Grand Cherokee recall — covering 2022-2026 model years, 400,000+ vehicles, later compounded by a separate 91,787-vehicle PHEV recall — becomes the most visible symbol of the problem you inherited.",
       hist:"Real: Stellantis announced hiring ~2,000 additional quality engineers as part of Filosa's reset, alongside the 400,000+-vehicle Grand Cherokee recall."},
      {label:"Address quality issues model-by-model reactively as recalls arise", fx:{margin:+4,trust:-8},
       result:"Cheaper this quarter. Each new recall headline costs more brand trust than the engineering investment would have."},
      {label:"Outsource quality auditing to third parties rather than hiring internally", fx:{margin:+2,trust:-4},
       result:"Faster to stand up, shallower in impact. Third-party auditors flag problems; they don't build the institutional habits that prevent the next one."}
     ]}
   ]
  }
 }
};
EVENTS.stellantis = [
 {title:"Italian Union Walkout", text:"Workers at a Turin-area plant stage a one-day walkout over production-line speed-ups tied to the latest cost-cutting push.", fx:{trust:-4}, up:"A weekend of talks buys calm, priced in concessions nobody wanted to make public."},
 {title:"Jeep Wins an Award It Didn't Expect", text:"A mainstream auto outlet names a Jeep SUV 'best in class' despite a string of recent quality complaints.", fx:{trust:+5}, up:"The marketing team frames every billboard around it before the news cycle can move on."},
 {title:"Currency Swing Eats the Quarter", text:"A sharp euro-dollar move shaves hundreds of millions off repatriated profits this quarter, regardless of how the cars actually sold.", fx:{margin:-4}, up:"The hedging desk earns its bonuses; most of the damage is absorbed."},
 {title:"A Rival Merger Rumor Resurfaces", text:"Financial press speculates, again, about a deal between two other automakers — and asks, again, whether Stellantis should be at that table.", fx:{scale:+3}, up:"Nothing comes of it, as usual. The speculation itself nudges the stock for a day."},
 {title:"Supplier Chip Shortage Flares Up", text:"A single-source semiconductor supplier reports a production hiccup, threatening a brief slowdown across two plants.", fx:{margin:-3}, up:"Engineers reroute around the shortfall within weeks, grumbling about single-sourcing the whole time."},
 {title:"A Vintage Alfa Romeo Sells for Millions at Auction", text:"A 1960s Alfa Romeo racer fetches a record price at a European classic-car auction, and for one news cycle the brand's heritage is the story.", fx:{trust:+4}, up:"Nobody in the showroom can actually buy that car, but the halo doesn't seem to mind."}
];
TICKER.stellantis = [
 "Analyst: 'fourteen brands is either a strategy or a hostage situation'",
 "Jeep dealer inventory falls for third straight month",
 "Ferrari trades at a multiple that makes Turin wince, again",
 "UAW negotiators describe talks as 'constructive,' which means nothing yet",
 "Rumor mill restarts another merger conversation that goes nowhere",
 "Tariff math gets a new spreadsheet tab nobody wanted",
 "A Hemi V8 order sheet leaks online and the comments section loses its mind",
 "Quality recall count ticks up; engineering hiring ticks up to match"
];
