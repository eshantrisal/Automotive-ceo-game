DATA.mercedes = {
 name:"Mercedes-Benz (Daimler)", short:"Mercedes", logo:"◈", theme:"theme-mercedes", ipo:40,
 pitch:"The 130-year-old inventor of the automobile. Immense profits and prestige — and a fleet of disruptors aiming at you.",
 ticker:"DAI",
 bankruptcy:"An emergency CEO is parachuted in from BMW. The humiliation is total.",
 legendary:"You proved a century-old giant can dance. The three-pointed star has never shone brighter.",
 kpis:[
  {key:"cashflow", label:"Cashflow", desc:"Profitability and cash generation. Stuttgart expects ~10% margin."},
  {key:"marketshare", label:"Market Share", desc:"Brand prestige and sales reach. Lose it and you're an expensive Volkswagen."},
  {key:"stockprice", label:"Stock Price", desc:"Investor confidence in EV/software readiness vs Tesla and China."}
 ],
 eras:{
  a:{
   name:"Recovery & Expansion Era", years:"2010–2015", start:{cashflow:40, marketshare:55, stockprice:30}, stock0:35,
   intro:"It's 2010. Daimler has just survived the financial crisis and the costly Chrysler divorce. BMW has overtaken you in luxury sales. China is exploding. Win back the crown — profitably.",
   scenarios:[
    {year:"2010", title:"The Tesla Stake", text:"Last year Daimler bought ~10% of a tiny Californian EV startup called Tesla for $50M. Engineers say their battery tech is crude. Finance says the stake is illiquid. What's your posture?",
     choices:[
      {label:"Hold the stake and deepen the partnership — learn everything", fx:{stockprice:+10}, result:"Tesla powertrains go into the electric Smart and B-Class. Your engineers get a front-row seat to the future.", hist:"Real: Daimler held until 2014, selling for a $780M profit — and arguably sold the seat to the future along with it."},
      {label:"Sell now — book the profit, focus on real cars", fx:{cashflow:+6,stockprice:-7}, result:"A tidy gain that will look catastrophically small in hindsight. That stake would be worth tens of billions."},
      {label:"Double down — try to buy 25% of Tesla", fx:{cashflow:-6,stockprice:+14}, result:"Musk resists control but takes the money. You now own a quarter of what becomes the most valuable automaker on Earth."}
     ]},
    {year:"2010", title:"Alliance with Renault-Nissan", text:"Carlos Ghosn proposes a cross-shareholding alliance: shared small-car platforms, engines, and a small-van JV. Purists at AMG are horrified by Renault engines in anything wearing the star.",
     choices:[
      {label:"Sign it — scale economics matter", fx:{cashflow:+7,marketshare:-4,stockprice:+4}, result:"Citan vans and shared engines save billions. Enthusiasts grumble about the Renault diesel in the A-Class. Accountants do not.", hist:"Real: the Daimler/Renault-Nissan alliance was signed April 2010."},
      {label:"Decline — Mercedes shares nothing", fx:{cashflow:-6,marketshare:+4}, result:"Purity preserved at a price: your small cars stay uncompetitive on cost."},
      {label:"Partner only on vans and commercial vehicles", fx:{cashflow:+3,stockprice:+1}, result:"A cautious half-alliance. Half the savings, none of the controversy."}
     ]},
    {year:"2011", title:"China: How Fast?", text:"China is becoming the world's biggest luxury car market. Audi got there first and owns the official-car image. Your dealer network is fragmented between two feuding sales channels.",
     choices:[
      {label:"Fix the channel mess, build local production, go all-in", fx:{cashflow:+8,marketshare:+6,stockprice:+4}, result:"Merging the sales organizations and localizing the E-Class long-wheelbase pays off massively. China becomes your biggest market.", hist:"Real: Daimler unified its China sales JV in 2012 and rode the boom."},
      {label:"Grow carefully — protect 'Made in Germany' exclusivity", fx:{cashflow:-4,marketshare:+4,stockprice:-4}, result:"The brand stays pristine and sub-scale. BMW and Audi lap you twice."},
      {label:"Chase volume with aggressive discounting", fx:{cashflow:+4,marketshare:-8}, result:"Sales spike; residual values and prestige sink. A discounted star is just a badge."}
     ]},
    {year:"2012", title:"Hunting Younger Buyers", text:"Your average buyer is pushing 60. The plan: a front-wheel-drive compact family — new A-Class, and a $30k 'CLA' four-door coupe for America. Critics say cheap Mercedes = brand suicide.",
     choices:[
      {label:"Launch the CLA offensive with a Super Bowl ad", fx:{cashflow:+6,marketshare:-2,stockprice:+6}, result:"The CLA brings in buyers 10+ years younger, most new to the brand. Some purists sniff; the order books don't.", hist:"Real: the 2013 CLA became Mercedes' youth gateway and a US hit."},
      {label:"Stay premium-only — no car under $40k", fx:{marketshare:+6,stockprice:-6}, result:"Exclusive and aging. Every year your buyer demographics look more like a retirement community."},
      {label:"Launch a separate sub-brand for compacts", fx:{cashflow:-6,marketshare:+2,stockprice:+2}, result:"Building a new brand costs billions — ask Toyota how long Lexus took."}
     ]},
    {year:"2012", title:"The F1 Bet", text:"Your Formula 1 team is mid-grid and expensive. The board wants out. But new hybrid V6 engine rules arrive in 2014 — and your engine team thinks they can dominate them. Also available: a fast young driver named Lewis Hamilton.",
     choices:[
      {label:"Commit fully — sign Hamilton, fund the hybrid program", fx:{cashflow:-4,marketshare:+13,stockprice:+6}, result:"From 2014 Mercedes wins eight straight constructors' titles. The best marketing money you ever spent.", hist:"Real: Hamilton signed in Sept 2012; the hybrid era domination followed."},
      {label:"Quit F1, redirect funds to product", fx:{cashflow:+4,marketshare:-7}, result:"Rational on a spreadsheet. The brand loses its loudest global stage just as it turns silver-and-turquoise."},
      {label:"Stay in as engine supplier only", fx:{cashflow:+1,marketshare:+1,stockprice:+2}, result:"Customer teams win races with your engines. The trophies say their names, not yours."}
     ]},
    {year:"2013", title:"S-Class: Flagship or Tech Ship?", text:"The new W222 S-Class is ready. Engineering wants to load it with semi-autonomous driving tech years before rivals. Finance warns of cost and warranty risk on your most profitable car.",
     choices:[
      {label:"Ship it loaded — the S-Class defines the future, always has", fx:{cashflow:+4,marketshare:+8,stockprice:+7}, result:"Distronic steering assist makes the S-Class the closest thing to autonomy on sale. 'The best car in the world' headlines return.", hist:"Real: the 2013 W222 pioneered steering assist and stop-and-go pilot."},
      {label:"Keep it conservative and bulletproof", fx:{cashflow:+6,marketshare:+2,stockprice:-6}, result:"Profitable and safe — while Tesla's Autopilot steals the innovation narrative two years later."},
      {label:"Save the tech for a halo EV instead", fx:{stockprice:+4}, result:"Interesting, but the EV isn't ready and the tech sits on a shelf."}
     ]},
    {year:"2013", title:"Diesel: Double Down?", text:"Diesel is Europe's answer to CO2 targets and 70% of your sales mix. Billions are queued for next-gen diesel engines. A small internal memo notes real-world NOx emissions are... complicated industry-wide.",
     choices:[
      {label:"Invest in diesel, but fund full SCR/AdBlue cleanup hardware on every car", fx:{cashflow:-4,marketshare:+4,stockprice:+4}, result:"Expensive honesty. When the industry's diesel reckoning arrives, your exposure is far smaller than rivals'."},
      {label:"Invest in diesel at lowest compliant cost", fx:{cashflow:+6,marketshare:-4,stockprice:-4}, result:"Margins shine now. Years later, 'compliant' turns out to be a word regulators interpret differently — recalls and fines follow.", hist:"Real: Daimler later paid ~$2.2B in US diesel settlements (2020)."},
      {label:"Begin pivoting R&D from diesel to hybrids/EVs now", fx:{cashflow:-6,stockprice:+10}, result:"Painful and early — two years before Dieselgate makes it look prophetic."}
     ]},
    {year:"2014", title:"Selling the Future?", text:"The Tesla stake and the EV partnership are up for review. Tesla's stock has gone vertical. Banks say: sell, book ~$780M profit, de-risk.",
     choices:[
      {label:"Sell the entire stake", fx:{cashflow:+7,stockprice:-8}, result:"A record quarter. Also the moment Daimler chose quarterly earnings over a seat at the future. The stake would later be worth ~$50B+.", hist:"Real: Daimler sold its Tesla stake in October 2014."},
      {label:"Sell half, keep half and the partnership", fx:{cashflow:+4,stockprice:-2}, result:"Hedged. The remaining stake quietly compounds; the partnership still fades."},
      {label:"Keep it all and expand EV co-development", fx:{cashflow:-4,stockprice:+8}, result:"The CFO sulks for a quarter. Your engineers keep learning from the fastest-moving EV team on Earth."}
     ]},
    {year:"2014", title:"Trucks, Buses, Vans, Cars", text:"Daimler is a conglomerate: the world's biggest truck maker plus luxury cars under one roof. Activists argue splitting would unlock billions in value. The unions hate it.",
     choices:[
      {label:"Keep it together — scale and stability", fx:{cashflow:+2,stockprice:-2}, result:"Stability wins. The conglomerate discount persists, and trucks and cars keep competing for capital.", hist:"Real: Daimler kept the structure until spinning off Daimler Truck in 2021."},
      {label:"Begin preparing a truck spin-off", fx:{cashflow:+6,marketshare:+2,stockprice:+4}, result:"Years early. Both companies get focus and their own currencies. The unions extract job guarantees as the toll."},
      {label:"Sell the trucks to a rival outright", fx:{cashflow:+7,marketshare:-4}, result:"A windfall, and the end of a 120-year industrial legacy. Stuttgart never quite forgives you."}
     ]},
    {year:"2015", title:"Apple and Google Want In", text:"Tech giants want CarPlay/Android Auto deep in your dashboards — and rumors say Apple is building a car. Your software chief wants to build a proprietary OS instead.",
     choices:[
      {label:"Integrate their apps, but build your own OS for the core (MBUX)", fx:{cashflow:-4,marketshare:+6,stockprice:+8}, result:"'Hey Mercedes' arrives in 2018 and is genuinely good. You keep the customer relationship — and the data.", hist:"Real: MBUX launched 2018 and was a class leader."},
      {label:"Hand the dashboard to Apple/Google entirely", fx:{cashflow:+4,marketshare:-2,stockprice:-6}, result:"Customers love it. You've just become hardware supplier to someone else's ecosystem."},
      {label:"Block them — closed proprietary system only", fx:{marketshare:-6,stockprice:-4}, result:"Buyers with iPhones (all of them) rage at your infotainment. Reviewers torch it."}
     ]},
    {year:"2015", title:"Number One Again", text:"You're on the verge of overtaking BMW and Audi to become the world's best-selling luxury brand. One last push could seal it — but how?",
     choices:[
      {label:"Win on product: SUV blitz (GLC, GLE, GLS) and design", fx:{cashflow:+7,marketshare:+7}, result:"The SUV wave plus Sensual Purity design retakes the crown cleanly in 2016. Record profits follow.", hist:"Real: Mercedes became the #1 premium brand in 2016, ahead of schedule."},
      {label:"Win on price: incentives and fleet deals", fx:{cashflow:-6,marketshare:-7}, result:"You hit the number and hollow out the brand. Pyrrhic in chrome."},
      {label:"Ignore the race — chase margin, not volume", fx:{cashflow:+6,stockprice:+2}, result:"Healthy, but BMW keeps the bragging rights and uses them in every ad."}
     ]},
    {year:"2015", title:"The Disruption Memo", text:"Final call of the era. Your strategy team's memo: 'Tesla, Uber, Google and China will redefine this industry within 10 years.' The board asks what Daimler's answer is.",
     choices:[
      {label:"Announce CASE: Connected, Autonomous, Shared, Electric — with real money", fx:{cashflow:-6,marketshare:+4,stockprice:+13}, result:"A €10B electrification plan and the EQ brand are born. You're early by legacy standards — which still means late by Tesla's.", hist:"Real: Daimler announced CASE and the EQ brand in 2016."},
      {label:"Disruption is overhyped — perfect the combustion core", fx:{cashflow:+7,stockprice:-10}, result:"Three excellent years. Then the 2020s arrive with regulations, Teslas, and Chinese EVs, and you're starting from zero."},
      {label:"Buy your way in — acquire mobility startups aggressively", fx:{cashflow:-7,stockprice:+6}, result:"Car2go, mytaxi, Chauffeur Privé... a portfolio of cash-burning apps that teach expensive lessons.", hist:"Real: Daimler built then merged its mobility apps with BMW's in 2019; most were later sold or shut."}
     ]}
   ]
  }
 }
};
DATA.mercedes.eras.b = {
   name:"The Chrysler Marriage and the Reckoning", years:"1998–2009", start:{cashflow:45, marketshare:60, stockprice:40}, stock0:20,
   intro:"Stuttgart, May 1998. You're about to sign the largest cross-border industrial merger in history: $36 billion to combine Daimler-Benz with Chrysler, forming a transatlantic giant with 420,000 employees and a story the press release insists on calling a 'merger of equals'. Nobody in this room believes that phrase will survive contact with reality. The next eleven years will test whether empire-building and engineering discipline can coexist inside one company — through Detroit, Tokyo, Wall Street and, eventually, the worst financial crisis in eighty years.",
   scenarios:[
    {id:"merger", year:"7 MAY 1998", title:"The Merger of Equals",
     text:"London, a press conference. You and Chrysler's Robert Eaton must decide, this morning, exactly how to frame the $36 billion combination to the world. 'Equals' plays well with American workers, dealers and regulators. 'Acquisition' is closer to the truth Daimler's board actually intends.",
     voice:"Jürgen Schrempp, privately, to his inner circle: \"It had to be sold as equals for psychological reasons. Chrysler was always going to be a division.\"",
     choices:[
      {label:"Sell it as a true 'merger of equals' — shared governance, Chrysler's brand and management preserved", fx:{cashflow:+8,marketshare:+10,stockprice:+6}, set:["equals"],
       result:"$130 billion in combined revenue, the world's fifth-largest automaker, and a promise of no layoffs that buys instant goodwill in Detroit. The press conference is a triumph. The hard part — actually running it as equals — starts Monday.",
       hist:"Real: Schrempp and Eaton announced the $36B 'merger of equals' on 7 May 1998, promising no plant closures and citing $1.4B in targeted savings."},
      {label:"Be honest now — frame it as a Daimler acquisition with German management in charge from day one", fx:{cashflow:+3,marketshare:-6,stockprice:+2}, set:["acquisition"],
       result:"Wall Street respects the candor; Detroit does not. Chrysler's board very nearly walks. You get the company, but you've spent the goodwill you'll need to actually integrate it."},
      {label:"Walk away — pursue organic US entry or a smaller joint venture instead", fx:{cashflow:-2,marketshare:-4}, set:["walkaway"],
       result:"Cautious, and probably wise in hindsight that doesn't exist yet. You stay German, profitable, and irrelevant to the biggest market story of the decade."}
     ]},
    {id:"mitsubishi", year:"MAR 2000", title:"The Mitsubishi Gamble",
     text:"Asia is the gap in the new portfolio, and Mitsubishi Motors is drowning and for sale. A 34% controlling stake would buy a foothold and a turnaround mandate — on top of an American integration that is, your Detroit team admits quietly, not going well.",
     alt:[{if:"acquisition", text:"Asia is the gap in the portfolio, and Mitsubishi Motors is for sale at a discount. Your Detroit integration is already strained from the honesty of the 'acquisition' framing — a second simultaneous turnaround bet would stretch management further still. Mitsubishi's bankers are waiting for an answer."}],
     choices:[
      {label:"Take the 34% controlling stake and commit management resources to the turnaround", fx:{cashflow:-8,stockprice:-2}, set:["mitsubishi_deep"],
       result:"¥450 billion buys you a seat, a mandate, and a second full-time integration crisis exactly when you have none to spare. Tokyo and Detroit will now compete for the same scarce executive attention.",
       hist:"Real: DaimlerChrysler bought a 34% stake in Mitsubishi Motors for roughly ¥450B (about €2.1B) in March 2000."},
      {label:"Take a small, passive financial stake — no operational involvement", fx:{cashflow:-2}, result:"Cheap optionality. You own a slice of Asia's problems without the obligation to fix them — and without much upside if Mitsubishi recovers on its own."},
      {label:"Decline Asia entirely — focus every integration resource on making Chrysler work first", fx:{cashflow:+3,marketshare:+2}, set:["focus_chrysler"], result:"Disciplined. Your board calls it prudent; your competitors call it an opening, and start courting Asian partners you just declined."}
     ]},
    {id:"zetsche_send", year:"NOV 2000", title:"Sending the Fixer to Detroit",
     text:"Chrysler has swung from a $2.5B first-half-1998 profit to a $2B loss in the second half of that same year, and two American CEOs have already been pushed out in 19 months. The 'equals' fiction, if you chose it, is now visibly a fiction. Someone has to actually run Chrysler, starting now.",
     cond:"equals",
     voice:"A Chrysler dealer, to the Detroit press: \"They promised us a partner. They sent us a province governor.\"",
     choices:[
      {label:"Send Dieter Zetsche — a trusted Daimler engineer-executive — to run Chrysler directly", fx:{cashflow:+6,marketshare:+4,stockprice:+4}, set:["zetsche_fix"],
       result:"Zetsche's restructuring is fast and unglamorous: headcount, platforms, supplier contracts. By Q1 2002 Chrysler posts a $111M adjusted operating profit, a sharp reversal — and a German engineer becomes Detroit's most-watched executive.",
       hist:"Real: Zetsche became President and CEO of Chrysler Group in November 2000; Chrysler returned to adjusted profit in Q1 2002."},
      {label:"Keep searching for an American successor to preserve the 'equals' appearance", fx:{cashflow:-5,marketshare:-3}, result:"The search drags on for months while losses compound. Optics preserved; the balance sheet is not."},
      {label:"Centralize Chrysler's decisions back to Stuttgart, no dedicated on-the-ground CEO", fx:{cashflow:-3,marketshare:-6}, result:"Detroit reads it exactly as intended: a province, not a partner. Dealers and suppliers start hedging against the parent company in public."}
     ]},
    {id:"schrempp_exit", year:"JUL 2005 – JAN 2006", title:"The Board Runs Out of Patience",
     text:"Seven years on, Chrysler's turnaround is real but the 'merger of equals' promise is a punchline, and DaimlerChrysler's stock has gone nowhere for years. The supervisory board wants a change at the top — the only question is who, and how the transition is framed.",
     choices:[
      {label:"Install Zetsche — the executive who actually fixed what Schrempp broke", fx:{cashflow:+5,marketshare:+3,stockprice:+8},
       fxIf:[{if:"zetsche_fix", fx:{stockprice:+4}, note:"Investors already know Zetsche's record in Detroit — the succession reads as continuity of competence, not a gamble."}],
       result:"Effective 1 January 2006, Dieter Zetsche succeeds Jürgen Schrempp as Chairman. Officially voluntary; reported everywhere as a board-engineered exit. The man who fixed the symptom now owns the disease.",
       hist:"Real: Zetsche succeeded Schrempp as Chairman of the Board of Management, effective 1 January 2006, following a board decision on 28 July 2005."},
      {label:"Keep Schrempp — let him defend and continue the empire-building strategy", fx:{cashflow:-4,stockprice:-9}, result:"Loyalty to the architect of the deal, at the cost of every shareholder who's been waiting seven years for the stock to move. The board's patience, it turns out, was not infinite — yours may not be either."},
      {label:"Bring in an outsider with no ties to the 1998 deal", fx:{cashflow:-2,stockprice:-3}, result:"A clean slate, and a steep learning curve, at the exact moment Chrysler needs someone who already understands its wounds."}
     ]},
    {id:"cerberus", year:"14 MAY 2007", title:"Selling Chrysler at a Loss",
     text:"Chrysler has relapsed — a $1.5B loss in 2006 — and private equity is circling. Cerberus Capital Management wants 80.1% of the unit. The number on the table, $7.4 billion, is a fraction of what Daimler paid nine years ago for the whole company.",
     alt:[{if:"acquisition", text:"Chrysler has relapsed — a $1.5B loss in 2006 — and Cerberus Capital wants 80.1% of a unit you were honest about owning outright from day one. $7.4 billion is still a fraction of the original price, but at least nobody can say you sold a 'partner'."}],
     voice:"Chrysler CEO Tom LaSorda, on the deal: \"After months of uncertainty, then a period of transition, we are beginning a new chapter in Chrysler's proud history.\"",
     choices:[
      {label:"Sell the 80.1% stake to Cerberus and take the loss", fx:{cashflow:-10,marketshare:-4,stockprice:+9}, set:["sold_chrysler"],
       result:"$7.4 billion against a $36 billion deal — plus roughly €650M to cover Chrysler's long-term liabilities as part of the transaction. It costs about €3–4B off 2007 net profit. The market cheers anyway: the distraction is finally over.",
       hist:"Real: DaimlerChrysler sold 80.1% of Chrysler Group to Cerberus for $7.4B, closing 3 August 2007; the company was renamed Daimler AG shortly after."},
      {label:"Keep Chrysler and fund another internal turnaround", fx:{cashflow:-9,stockprice:-6}, result:"Throwing good capital after nine years of bad. Your board starts asking, pointedly, when 'turnaround' became a permanent department."},
      {label:"Seek a strategic industrial buyer instead of a financial one", fx:{cashflow:-5,stockprice:-2}, result:"No industrial buyer wants Chrysler's pension liabilities at any price that doesn't insult you. The search drags into the next fiscal year."}
     ]},
    {id:"crisis", year:"LATE 2008 – 2009", title:"The Crisis Arrives Anyway",
     text:"You shed Chrysler specifically to focus on the core business — and thirteen months later the global financial crisis takes the core business down anyway. Luxury demand collapses worldwide; you're posting billion-euro quarterly losses by early 2009.",
     alt:[{if:"sold_chrysler", text:"You shed Chrysler specifically to focus on the core business — and thirteen months later the global financial crisis takes the core business down anyway. At least there's no Chrysler balance sheet bleeding alongside Mercedes' own. Luxury demand collapses worldwide regardless."}],
     choices:[
      {label:"Lean on German short-time-work schemes and broad cost cuts — protect the core workforce", fx:{cashflow:+4,marketshare:+3,stockprice:+3}, set:["short_time"],
       result:"A roughly €5.3B efficiency program, flexible work-time arrangements instead of mass layoffs, and you personally take a 51% pay cut. It's still a brutal year — but the workforce and the supplier base survive intact.",
       hist:"Real: Zetsche announced a ~€5.3B cost program in 2009, leaned on short-time work, and took a 51% pay cut (2008 comp fell to about €4.82M)."},
      {label:"Deep, immediate layoffs across German plants to protect margin", fx:{cashflow:+8,marketshare:-7,stockprice:-2}, result:"The numbers improve faster. So does IG Metall's appetite for a fight you'll be having for years, and the loyalty you'll need in the recovery is gone."},
      {label:"Seek German government loan guarantees under the auto-aid package", fx:{cashflow:+2,marketshare:-2,stockprice:-5}, result:"State money arrives with state opinions attached, about dividends, executive pay and plant locations. You're solvent and no longer fully your own company's master."}
     ]},
    {id:"aabar", year:"MAR 2009", title:"A Call From Abu Dhabi",
     text:"Credit markets are frozen, German state aid carries political strings, and Aabar Investments — backed by Abu Dhabi — wants to buy roughly 9.1% of Daimler for about €1.95 billion, fast. The Kuwait Investment Authority already holds a long-standing stake from 1974. A second Gulf sovereign investor would make this a pattern, not a one-off.",
     choices:[
      {label:"Sell the stake to Aabar — fast capital, no government strings", fx:{cashflow:+10,stockprice:+6}, set:["aabar"],
       result:"€1.95 billion lands in weeks, not months, with no Berlin oversight committee attached. It also deepens a Gulf-capital relationship that, within the year, extends into Formula One — Aabar and Daimler jointly buy into the Brawn GP team.",
       hist:"Real: Aabar Investments acquired a ~9.1% Daimler stake (96.4M shares) for about €1.95B in March 2009."},
      {label:"Rely primarily on German state aid and loan guarantees instead", fx:{cashflow:+3,stockprice:-4}, result:"Cheaper politically at home, slower in practice, and it ties your balance sheet to Berlin's patience exactly when you need to move fast."},
      {label:"Raise capital purely through a rights issue to existing shareholders", fx:{cashflow:+4,stockprice:-8}, result:"No new strategic ties, but diluting existing shareholders into a crisis they didn't cause tests loyalty you'll want intact for the recovery."}
     ]},
    {id:"dividend", year:"APR–DEC 2009", title:"Cancelling the Dividend",
     text:"Full-year 2009 is ugly — revenue down 20% to €79B, unit sales down 25% to 1.6 million vehicles, a net loss near €2.6 billion — while GM and Chrysler's new owners file for US bankruptcy protection around you. The board must decide how loudly to signal discipline to shareholders and to Berlin simultaneously.",
     fxIf:[{if:"aabar", fx:{stockprice:+3}, note:"With the Aabar capital already banked, the dividend call reads as discipline by choice, not desperation."},
           {if:"short_time", fx:{cashflow:+2}, note:"The short-time-work program already protected cash through the worst months — this is the final page of the same plan, not a separate scramble."}],
     choices:[
      {label:"Cancel the dividend entirely for fiscal year 2009 — first omission in 14 years", fx:{cashflow:+7,stockprice:+4}, set:["clean_balance"],
       result:"Every available euro goes to the balance sheet and the cost program instead. It's the company's first cancelled dividend in fourteen years — and the discipline that lets Daimler enter 2010 stronger than most crisis-era peers.",
       hist:"Real: Daimler's board proposed cancelling the FY2009 dividend entirely, its first omission in 14 years, alongside the €5.3B efficiency program."},
      {label:"Maintain the dividend to reassure long-term shareholders despite the loss", fx:{cashflow:-8,stockprice:-3}, result:"Shareholders are reassured for one quarter. The cash that leaves the building is cash the 2010 recovery will miss."},
      {label:"Pay a token, sharply reduced dividend as a middle path", fx:{cashflow:-3,stockprice:0}, result:"Satisfies nobody fully — income investors call it an insult, balance-sheet hawks call it a leak. Compromises, in a crisis, often just average two mistakes."}
     ]}
   ]
};
DATA.mercedes.eras.c = {
   name:"Transformation Era", years:"2016–2021", start:{cashflow:48, marketshare:55, stockprice:28}, deep:true, stock0:60,
   intro:"Stuttgart, 2016. You run the most profitable luxury automaker on Earth and just retook the global #1 crown — but the ground is moving. VW's diesel fraud has set the industry on fire. A company you once owned 10% of is now worth half of Daimler and climbing. The next six years decide whether 'Das Beste oder nichts' is a promise or an epitaph.",
   scenarios:[
    {id:"diesel", year:"2016", title:"The Fire Next Door",
     text:"Volkswagen has confessed to emissions fraud, and regulators' floodlights are sweeping the industry. Your engineers explain that Mercedes diesels use 'thermal windows' — emissions controls that relax in cold weather. Defensible engineering, they say. Regulators may disagree.",
     voice:"Your general counsel: \"Every document we write from today will someday be read aloud in a courtroom. Including this advice.\"",
     choices:[
      {label:"Get ahead of it: voluntary recall of 3 million diesels, full regulator cooperation", fx:{cashflow:-7,marketshare:+7,stockprice:+3}, set:["clean"],
       result:"€220M of voluntary humility. The headlines say 'Mercedes fixes diesels'; VW's say 'raids, arrests, $30B'. You will still pay settlements — but as a cooperator, not a defendant in handcuffs.",
       hist:"Real: Daimler announced a 3M-vehicle voluntary diesel service action in 2017."},
      {label:"Defend the engineering — our windows are legal and our lawyers are excellent", fx:{cashflow:+4,marketshare:-7}, set:["fought"],
       result:"The engineers feel defended. The prosecutors feel motivated."},
      {label:"Settle everything quietly, admit nothing, say less", fx:{cashflow:-6,marketshare:-2}, set:["settled"],
       result:"Expensive silence. The checks clear, the questions linger, and 'what did Stuttgart know' becomes a hardy perennial of German journalism."}
     ]},
    {id:"raid", year:"MAY 2017", title:"Eleven Search Warrants", cond:"fought",
     text:"05:58. Two hundred prosecutors and police walk into eleven Daimler sites simultaneously, including the floor below your office. Your defiant legal strategy just collided with the German criminal code, live, on the morning news.",
     voice:"Your comms chief, by phone, before sunrise: \"The cameras were outside the gates before the police. Someone invited them.\"",
     choices:[
      {label:"Reverse course: cooperate fully, starting this morning", fx:{cashflow:-6,marketshare:+4}, set:["clean"],
       result:"Late conversion costs more than early honesty would have — but it stops the bleeding. The eventual US settlement lands at ~$2.2B; the criminal exposure narrows to individuals.",
       hist:"Real: prosecutors raided 11 Daimler sites in May 2017; the US settlement came in 2020."},
      {label:"Hold the line — lawyer up harder", fx:{cashflow:-4,marketshare:-8},
       result:"Three more years of raids, document fights and perp-walk photography. You win some motions. The brand loses every front page."},
      {label:"Sacrifice the diesel program: early retirement for its leadership, restructure loudly", fx:{cashflow:-4,marketshare:-1,stockprice:+4},
       result:"Heads roll with full pensions. Prosecutors take the offering but keep digging — and your best powertrain engineers update their CVs, having watched how Stuttgart treats its own."}
     ]},
    {id:"eq", year:"SEP 2016", title:"Paris, or the Art of Announcing the Future",
     text:"Paris Motor Show. Unveil 'EQ' — a whole electric sub-brand, €10B committed — or wait for a product that won't lose to a Model S on benchmarks. Tesla has 400,000 deposits for a car it hasn't built yet. Announcing first and building later seems to be working for them.",
     voice:"Head of development: \"The EQC is a converted GLC, and every journalist will know it. The honest unveiling is the platform AFTER it — in 2021.\"",
     choices:[
      {label:"Unveil EQ with the full €10B commitment — the supertanker turns today", fx:{cashflow:-6,marketshare:+4,stockprice:+10}, set:["eq"],
       result:"'Mercedes declares electric war' leads the trade press. The commitment is real, public, and irreversible — which was the point. Now you have to ship.",
       hist:"Real: the EQ brand and Generation EQ concept debuted at Paris 2016."},
      {label:"Wait for a product worthy of the star — announce nothing you can't win with", fx:{cashflow:+4,stockprice:-7}, set:["no_eq"],
       result:"Discipline, of a kind. But in the narrative economy, silence is a position too: every quarter without an EV plan reads as 'Mercedes has no answer'. Your own dealers start asking."},
      {label:"Skip the sub-brand — electrify the core: an electric C-Class is worth ten concepts", fx:{cashflow:-3,marketshare:+2,stockprice:+7}, set:["integrated"],
       result:"Quietly heretical and possibly right — you've bet that 'Mercedes' is the brand, not 'EQ'. Years later, the industry will come around to exactly this view.",
       hist:"Real: Mercedes eventually retired standalone EQ styling and folded EVs back into the core lineup."}
     ]},
    {id:"eqc_flop", year:"2019", title:"The Verdict on the EQC", cond:"eq",
     text:"Your first EQ product is out: a fine Mercedes, a mediocre EV. Less range than a cheaper Model 3, a converted combustion platform, US sales so slow you're weighing whether to bother importing it. The €10B promise of Paris now has a face — polite disappointment.",
     voice:"A dealer principal from Munich, at the annual conference, into a live microphone: \"My customers ask me why the future drives shorter than the past.\"",
     choices:[
      {label:"Own it publicly: 'transition product' — and pull the dedicated EV platform forward a full year", fx:{cashflow:-6,stockprice:+8},
       result:"Candor buys patience. The EVA platform program (EQS and siblings) absorbs every resource you can strip from elsewhere. The org learns the difference between announcing the future and engineering it."},
      {label:"Defend it: discounts, marketing blitz, fleet deals", fx:{cashflow:-4,marketshare:-4},
       result:"You move metal at the cost of meaning. A discounted 'future of Mercedes' teaches the market the future is negotiable."},
      {label:"Restrict it to Europe, call it a 'focused rollout', bury the US plan", fx:{cashflow:+2,marketshare:-2},
       result:"Tactically tidy. But American tech media writes the 'Mercedes retreats from EVs' story anyway, and Tesla's keynote slides quote it gleefully.",
       hist:"Real: the EQC's US launch was postponed and ultimately cancelled."}
     ]},
    {id:"empty_stand", year:"2019", title:"The Empty Space on the Stand", cond:"no_eq",
     text:"Frankfurt Motor Show. Audi has the e-tron, Porsche has the Taycan, VW has an ID-something. Mercedes has a hybrid S-Class and a concept under silk. A Bernstein analyst asks on live mic: 'Is Mercedes-Benz planning to participate in the electric century?' The room laughs. Not a friendly laugh.",
     choices:[
      {label:"Answer with a date and a number: dedicated EV platform, 2021, and a board obligated to it", fx:{cashflow:-4,stockprice:+8}, set:["eq"],
       result:"Late, therefore expensive, therefore credible — markets know panic-spending when they see it and this isn't; it's a plan with a deadline. The laughter stops. The work begins."},
      {label:"Deflect with strength: record margins fund whatever future we choose, whenever we choose it", fx:{cashflow:+4,stockprice:-6},
       result:"True, and fatal in the retelling. 'Whenever we choose' becomes the analyst note title. Your stock starts trading at a 'transition risk' discount that costs more than an EV program would."},
      {label:"Buy your way in: acquire an EV startup with a working platform", fx:{cashflow:-8,stockprice:+6},
       result:"Due diligence on unicorns in 2019 is an extreme sport. You overpay, integration is a culture war, but you do get talent and a head start measured in real months."}
     ]},
    {id:"geely", year:"FEB 2018", title:"The Shareholder You Didn't Choose",
     text:"Li Shufu — the Geely founder who bought Volvo when Detroit laughed at China — has quietly assembled 9.69% of Daimler via derivatives structured to dodge disclosure thresholds. Legal, deliberate, and you found out from a filing like everyone else. Your largest shareholder is now a Chinese competitor, and Berlin is calling.",
     voice:"Your IR chief: \"He didn't sneak in to be ignored. The question is whether he's a wolf or a bridge.\"",
     choices:[
      {label:"Engage him as a partner: keep him close, find a deal both sides need", fx:{cashflow:+4,stockprice:+6}, set:["geely_ally"],
       result:"Months of careful dinners produce the answer: Smart — your beloved money-loser — reborn as a 50/50 EV brand, engineered in China, designed in Stuttgart. He gets prestige; you stop losing €500M a year on cute cars.",
       hist:"Real: the Smart JV with Geely was agreed in 2019."},
      {label:"Treat it as an incursion: rally Berlin, tighten governance, freeze him out", fx:{cashflow:-4,stockprice:-4}, set:["geely_foe"],
       result:"Politicians fret photogenically; lawyers confirm he bought legally; nothing changes except now your largest shareholder dines with your competitors and remembers."},
      {label:"Go deeper: invite Geely into joint engine and EV development", fx:{cashflow:+2,marketshare:-4,stockprice:+7}, set:["geely_deep"],
       result:"The cost-sharing is real and so is the outrage — 'Daimler shares its crown jewels' writes Handelsblatt. Your CFO calls the outrage 'roughly €2B cheaper than the alternative'."}
     ]},
    {id:"helm", year:"MAY 2019", title:"The Keys to the Kingdom",
     text:"Dieter Zetsche hands over after thirteen years, to a standing ovation and two unspoken profit warnings. You now run Daimler: record revenue, falling profit, 300,000 employees, a cost base built for a dying world. Your first all-hands is Thursday.",
     voice:"Your CFO, first one-on-one: \"I'll give you the real number: we spend €1.4B more per year than the company we need to be. Every month you wait costs €120M and gets harder to fix.\"",
     choices:[
      {label:"The hard truth: €1.4B cost cut, ~10,000 jobs, every euro saved goes to electric and software", fx:{cashflow:+7,marketshare:-2,stockprice:+6}, set:["lean"],
       result:"The works council calls it brutal; you call it arithmetic; both are right. Shrinking the old to fund the new is the whole job now — you've just said it out loud first.",
       hist:"Real: Källenius announced exactly this in November 2019."},
      {label:"Continuity and calm: no shocks, protect employment, trust the cycle", fx:{cashflow:-8,marketshare:+2,stockprice:-4},
       result:"Thursday's applause is warm. February's profit warning is not. The supervisory board's patience, you learn, is denominated in quarters."},
      {label:"Grow through it: an offensive in every segment, volume heals all wounds", fx:{cashflow:-6,marketshare:-4,stockprice:-2},
       result:"Pushing volume with a bloated cost base into a softening market: you've chosen to sprint uphill carrying the piano. Margins and exclusivity erode together."}
     ]},
    {id:"covid", year:"MAR 2020", title:"The World Stops",
     text:"Pandemic. Every plant from Sindelfingen to Tuscaloosa is dark, showrooms are locked, and the CFO's liquidity chart has a cliff. Rivals line up for state aid. Your treasury team can secure a €12B credit line by Friday — if you decide today.",
     alt:[{if:"lean", text:"Pandemic. Every plant is dark — but November's cost surgery means you entered this crisis lean, with months more liquidity than rivals. The €12B credit line is still on offer. What do you do with strength while competitors fight for survival?"}],
     choices:[
      {label:"Take the credit line as insurance, draw nothing, cut deeper while the world's distracted", fx:{cashflow:+6,marketshare:+2,stockprice:+2},
       fxIf:[{if:"lean", fx:{cashflow:+4}, note:"The 2019 restructuring pays out: you exit the crisis with margins rivals assume are typos."},
             {if:"geely_ally", fx:{stockprice:+2}, note:"Your China relationships keep parts and sales flowing while rivals' channels seize."}],
       result:"You never fully draw the line. Luxury demand comes roaring back — wealthy customers, it emerges, spent lockdown shopping. The crisis you prepared for becomes the springboard you didn't expect.",
       hist:"Real: Daimler secured a €12B facility in April 2020; the recovery outran every forecast."},
      {label:"Take state support — protect every job, share the burden with Berlin", fx:{cashflow:-4,marketshare:-4},
       result:"Safe and sticky: aid arrives with opinions attached about dividends, executive pay, and plant closures. Untangling Berlin from your boardroom takes years."},
      {label:"Use the fog of crisis: close the plants that could never be closed in peacetime", fx:{cashflow:+4,marketshare:-4,stockprice:+4},
       result:"Never waste a catastrophe. The restructuring of a decade happens in six months, and the bitterness will last exactly as long as the savings."}
     ]},
    {id:"capital", year:"OCT 2020", title:"Economics of Desire",
     text:"Strategy day. Three plans for the post-COVID decade: retreat upmarket (S-Class, Maybach, AMG, G-Class — fewer cars, fat margins); defend every segment including the compacts you fought to win; or torch the combustion budget and go all-in electric. Pick one.",
     voice:"Your strategy chief: \"The A-Class buyer gives us 4% margin and brand dilution. The G-Wagen buyer gives us 25% and a waiting list. This is not a hard chart to read.\"",
     choices:[
      {label:"Luxury-first. 'We will build fewer cars and mean more'", fx:{cashflow:+8,marketshare:+7,stockprice:-2}, set:["luxury"],
       result:"Average selling price becomes the KPI that matters. The entry segments you spent a decade conquering are quietly ceded — mostly, you note, to the Chinese brands that were always going to take them.",
       hist:"Real: Källenius's strategy pivoted Mercedes decisively upmarket from 2020."},
      {label:"Defend the full range — retreat is a habit you don't want to teach the company", fx:{cashflow:-4,marketshare:-2},
       result:"You hold ground that costs more to hold each year, with margins that barely cover the capital. Honorable, expensive, and quietly unwound by your successor."},
      {label:"All-in electric: end combustion R&D now, bet the house", fx:{cashflow:-6,stockprice:+10}, set:["evfirst"],
       result:"Further than the board wanted and the market rewards conviction with a re-rating. The bet's settlement date, however, is chosen by customers, not by you."}
     ]},
    {id:"software", year:"JUN 2020", title:"The Brain of the Car",
     text:"Every future Mercedes is a computer wearing a body. VW threw ten thousand people at in-house software and got delayed launches and a CEO casualty. Google offers a turnkey brain — beautiful, instant, theirs. Your own MB.OS plan needs 3,000 engineers, four years, and several miracles.",
     voice:"Your CTO: \"Whoever owns the operating system owns the customer. Whoever owns the customer owns the margin. After that it's just sheet metal.\"",
     choices:[
      {label:"Build MB.OS in-house; partner with NVIDIA for the silicon and autonomy stack", fx:{cashflow:-6,marketshare:+2,stockprice:+10}, set:["mbos"],
       result:"Slow, costly, sovereign. Hiring 3,000 software engineers into Swabia requires salary bands that scandalize HR — but the brain of the car stays in Stuttgart.",
       hist:"Real: the Mercedes–NVIDIA partnership was announced June 2020; MB.OS targeted mid-decade."},
      {label:"Take Google's stack — ship world-class software next year, not in four", fx:{cashflow:+4,stockprice:+3}, set:["google_os"],
       result:"Reviewers love it immediately. Somewhere in Mountain View, a product manager you will never meet now decides what a Mercedes feels like to use."},
      {label:"Software minimalism — we sell hand-stitched leather, not apps", fx:{cashflow:+4,stockprice:-10},
       result:"The most expensive sentence in the modern car industry, delivered with conviction. Resale values will eventually deliver the rebuttal."}
     ]},
    {id:"data_call", year:"2021", title:"Mountain View Calls", cond:"google_os",
     text:"The Google partnership has gone smoothly — which should have been the warning. Renewal terms: deeper data sharing (driving patterns, location, in-car purchases) for better pricing. Your data officer notes you no longer fully know what your cars tell California about your customers.",
     choices:[
      {label:"Refuse the data terms — start building an exit ramp to in-house software now", fx:{cashflow:-4,stockprice:+6}, set:["mbos"],
       result:"The divorce will take five years and cost billions — beginning it now, on your terms, is the cheapest it will ever be. Stuttgart's engineers receive the news like a liberation."},
      {label:"Sign. The product is winning; philosophy is a luxury", fx:{cashflow:+4,marketshare:-4},
       result:"The cars get smarter, the dependency gets deeper, and a Der Spiegel cover — 'DAS GOOGLE-AUTO' — hangs framed in Mountain View as a joke you're not in on."},
      {label:"Negotiate a data trust: customer data held by a neutral German entity", fx:{cashflow:-2,marketshare:+4},
       result:"Genuinely novel governance that costs speed and wins trust. Other automakers quietly copy the structure within two years."}
     ]},
    {id:"eqs", year:"APR 2021", title:"The Flagship Question",
     text:"The EQS is ready: 770km range, a 0.20 drag coefficient — the slipperiest production car ever — and a 56-inch Hyperscreen. It's also, designers admit privately, a jellybean: aerodynamics ate the three-box silhouette that's said 'S-Class' for fifty years. China clinics are polite, at best.",
     alt:[{if:"luxury", text:"The EQS is ready, and it has a strategy problem dressed as a design problem: your pivot says 'presence, prestige, desire', and the most aerodynamic car ever made looks like a bar of soap. China clinics keep using the word 'taxi'."}],
     choices:[
      {label:"Ship the aero pod — let physics be the new prestige", fx:{cashflow:+2,marketshare:-4,stockprice:+7},
       fxIf:[{if:"eq", fx:{stockprice:+2}, note:"The EQ groundwork means the EQS lands as a chapter, not a stunt — dealers know how to sell it."}],
       result:"A technical triumph with a sales-floor problem: S-Class buyers want to be seen arriving, not measured in wind tunnels. The reviews say 'remarkable'; the order bank says 'hmm'.",
       hist:"Real: the 2021 EQS was technically lauded and commercially underwhelming; Mercedes later steered EV design back toward classic proportions."},
      {label:"Delay two years — rebody it with S-Class presence", fx:{cashflow:-4,marketshare:+4,stockprice:+1},
       result:"The car that finally ships is unmistakably a Mercedes, and unmistakably late: Lucid and Tesla split the 'first luxury EV flagship' headlines you paid a decade for."},
      {label:"Ship it AND keep the combustion S-Class as the true flagship, indefinitely", fx:{cashflow:+6,marketshare:+2},
       result:"Every customer covered, every message muddled. 'The future of Mercedes, sold alongside the present of Mercedes, at a discount to it' is a sentence your marketing team learns to say quickly."}
     ]},
    {id:"split", year:"FEB 2021", title:"Cutting the Giant in Two",
     text:"Project 'Focus': spin off Daimler Truck — the largest truck maker on Earth, your industrial backbone since 1896 — and rename what remains 'Mercedes-Benz Group'. The bankers say two focused companies outvalue one conglomerate by billions. The historians say you're signing away half the company's soul. Both are right.",
     choices:[
      {label:"Execute the split — pure-play luxury, pure-play trucks", fx:{cashflow:+7,marketshare:+4,stockprice:+4}, set:["spun"],
       result:"December 2021: Daimler Truck rings its own bell, both stocks re-rate, and 'Daimler AG' — the name itself — passes into history under your signature. Focus, it turns out, was worth more than heritage.",
       hist:"Real: Daimler Truck listed in Dec 2021; Daimler AG became Mercedes-Benz Group."},
      {label:"Keep the conglomerate — scale is armor in the storms ahead", fx:{cashflow:-2,stockprice:-4},
       result:"The discount persists, the activists return every spring like swallows, and trucks and limousines keep arm-wrestling for the same capital."},
      {label:"Split everything: trucks, vans, AND financial services", fx:{cashflow:+4,marketshare:+1},
       result:"Maximum focus, maximum surgery. Losing captive financing — the quiet machine behind every lease deal — turns out to be the organ you miss."}
     ]},
    {id:"chips", year:"2021", title:"Triage by Semiconductor",
     text:"The chip shortage has cut production planning down to battlefield medicine: chips for ~70% of planned volume, and you choose who lives. A G-Class consumes the same scarce silicon as an A-Class and returns six times the profit. The works council has seen that spreadsheet too, and drawn the opposite conclusion.",
     choices:[
      {label:"Feed the top: S-Class, Maybach, AMG, G — maximum profit per chip", fx:{cashflow:+10,marketshare:+3},
       fxIf:[{if:"luxury", fx:{cashflow:+4}, note:"The luxury pivot means this isn't improvisation — it's your strategy under test conditions, passing."}],
       result:"Record profits on shrunken volume — scarcity, it turns out, is a luxury strategy that enforces itself. A heretical thought takes root on the board: what if we just... kept volumes low?",
       hist:"Real: Mercedes prioritized high-margin models through the shortage and posted record 2021 results."},
      {label:"Share the pain evenly across every model line", fx:{cashflow:-4},
       result:"Fair to every factory, optimal for none. The all-segments compromise produces all-segment waiting lists and the year's most forgettable financials."},
      {label:"Prioritize EVs — protect CO2 compliance and the transformation story", fx:{cashflow:-2,stockprice:+6},
       fxIf:[{if:"evfirst", fx:{stockprice:+3}, note:"All-in means all-in: the EV-first allocation proves the pledge was load-bearing, and the org notices."}],
       result:"You buy regulatory peace and EV momentum with the fattest margins in the company. The CFO signs it off the way one signs off a dental procedure."}
     ]},
    {id:"abudhabi", year:"DEC 2021", title:"Five Laps in Abu Dhabi",
     text:"F1 season finale. Lewis Hamilton is cruising to a record eighth title when a late safety car, mishandled by the race director, hands Max Verstappen the championship on the final lap. Hundreds of millions are watching. You have a protest window measured in hours, and a brand position measured in decades.",
     voice:"Toto Wolff, by phone, voice flat: \"We were robbed in front of the whole world. Tell me whether we fight in a courtroom or win on the track.\"",
     choices:[
      {label:"Protest, appeal, escalate — the star defends its own", fx:{marketshare:-4,cashflow:-1},
       result:"Weeks of paddock lawyering turn a sporting injustice into a corporate grievance. You're probably right; being right in a courtroom about a car race is worth surprisingly little at this altitude of brand."},
      {label:"Withdraw the appeal with one cold sentence, and let the silence indict them", fx:{marketshare:+6},
       result:"'We walked away because the sport needed us to be bigger than its mistake.' Hamilton's dignified fury and your restraint read as class at planetary scale. The FIA quietly restructures race control anyway — your point, made for free.",
       hist:"Real: Mercedes withdrew its appeal; the FIA replaced the race director within months."},
      {label:"Channel it commercially: 'still the team to beat' — re-sign Hamilton, announce the W13 early", fx:{marketshare:+2,cashflow:+1},
       result:"Brisk, professional, slightly bloodless. The sporting wound closes; the marketing makes sure a scar stays visible, on purpose."}
     ]},
    {id:"pledge", year:"JUL 2021", title:"The Promise",
     text:"Strategy update day, and the world wants a date for when Mercedes goes all-electric. Your draft says 2030. Legal wants 'where market conditions allow' inserted after it — four words that turn a promise into a posture, or into wisdom, depending how the decade goes.",
     alt:[{if:"evfirst", text:"Strategy update day. Having torched the combustion R&D budget, the pledge writes itself — the question is whether to say the unconditional version out loud. Legal still wants their four magic words: 'where market conditions allow'. Your conviction wants them deleted."}],
     choices:[
      {label:"'Electric-only by 2030 — where market conditions allow'", fx:{marketshare:+3,stockprice:+7},
       fxIf:[{if:"mbos", fx:{stockprice:+3}, note:"With MB.OS in-house, the pledge is a system, not a slogan: car, brain and battery on one roadmap."}],
       result:"Ambition with an exit row. The caveat will do heavy lifting in difficult years — but the capital reallocation it unlocks today is real and enormous.",
       hist:"Real: Mercedes made exactly this pledge, caveat included, in July 2021."},
      {label:"No date. Technology-neutral, customer-led, slogan-free", fx:{cashflow:+4,stockprice:-6},
       result:"Intellectually defensible, strategically lonely. Rivals' dates — even ones they'll miss — anchor every comparison chart, and you're the blank cell."},
      {label:"2030, hard stop, no caveats — burn the boats", fx:{cashflow:-4,marketshare:+2,stockprice:+7},
       result:"Total conviction, zero flexibility. If EV adoption wobbles, this sentence will attend every earnings call you ever host, sitting in the front row."}
     ]},
    {id:"decade", year:"DEC 2021", title:"What the Star Means Now",
     text:"Year's end. The company is renamed, refocused, and by the numbers triumphant — record margins, a luxury strategy validated. But software is still years behind Palo Alto, and the Chinese brands aren't coming anymore — they've arrived. The board asks for your defining bet, the one that outlives your contract.",
     choices:[
      {label:"Desirability above volume — become the world's most valuable luxury brand, full stop", fx:{cashflow:+7,marketshare:+8},
       fxIf:[{if:"spun", fx:{cashflow:+2}, note:"Pure-play focus makes the luxury thesis legible to markets: no trucks, no noise, one story."},
             {if:"luxury", fx:{marketshare:+3}, note:"Two years of consistent upmarket signals mean the world already believes you — the bet compounds."}],
       result:"Fewer, better, more expensive, forever. You're managing decline in units and growth in everything that actually matters — a trick only the greatest luxury houses ever pull off.",
       hist:"Real: this remains Mercedes-Benz's stated strategy."},
      {label:"Out-Tesla Tesla: software, autonomy, direct sales — a tech company with a heritage problem", fx:{cashflow:-6,stockprice:+10},
       fxIf:[{if:"mbos", fx:{stockprice:+4}, note:"MB.OS gives the tech bet a spine — you're scaling something that exists, not promising something that doesn't."},
             {if:"google_os", fx:{stockprice:-4}, note:"Hard to out-Tesla anyone when your operating system answers to Mountain View."}],
       result:"A decade-long sprint against companies born without legacy costs, dealer networks, or works councils. Expensive, uncertain — and possibly the only version of the future where Mercedes still sets the pace rather than the price."},
      {label:"The bridge strategy: deep alliance with China for the EV era — speed over pride", fx:{cashflow:+4,marketshare:-6,stockprice:+6},
       fxIf:[{if:"geely_ally", fx:{stockprice:+4,cashflow:+2}, note:"The Li Shufu relationship you built in 2018 becomes the trust this alliance is assembled from. The wolf was a bridge."},
             {if:"geely_foe", fx:{stockprice:-3}, note:"The partner you froze out in 2018 takes your call, eventually, on terms that remember everything."}],
       result:"Cost and speed via partnership, prestige spent as the currency. A debate begins that will outlast you: who, in the end, needed whom more?"}
     ]}
   ]
};
DATA.mercedes.eras.d = {
   name:"All In, Then Walked Back", years:"2021–2026", start:{cashflow:55, marketshare:48, stockprice:70}, deep:true, stock0:85,
   intro:"Stuttgart, July 2021. Ola Källenius — two years into the job — is about to make the boldest public pledge Mercedes has made since Schrempp's merger of equals: all-electric by 2030, combustion R&D spend falling to near zero by 2025. Tesla's valuation is soaring, Volkswagen and GM are making the same kind of bet, and the only question left in the room is how unconditional to make the promise. You will spend the next five years discovering the answer — and, when the market doesn't cooperate, the costly public process of unmaking it.",
   scenarios:[
    {id:"pledge21", year:"JUL 2021", title:"Going All In",
     text:"Strategy update day, framed around the 'Ambition 2039' carbon-neutrality target. VW, GM and others are racing to make sweeping electrification pledges. The draft on your desk says 'all-electric by 2030, where market conditions allow' — investor-friendly, ESG-credible, and a promise the whole company will be measured against for the rest of the decade.",
     voice:"Ola Källenius, to Reuters: \"We really want to go for it... and be dominantly, if not all electric, by the end of the decade.\"",
     choices:[
      {label:"Make the hard pledge: all-electric by 2030, combustion R&D to near zero by 2025", fx:{cashflow:-4,marketshare:+2,stockprice:+12}, set:["hard_pledge"],
       result:"The market reaction is immediate and warm — a single sentence reframes Mercedes as a technology story, not a legacy one. Three dedicated EV platforms are announced for 2025. The bar is now exactly as high as the words you just chose.",
       hist:"Real: Mercedes-Benz announced going all-electric by 2030 'where market conditions allow' in July 2021, targeting 50% electrified sales by mid-decade and near-zero combustion R&D spend by 2025."},
      {label:"Stay flexible — a multi-powertrain approach with no firm all-electric date", fx:{cashflow:+3,marketshare:+1,stockprice:-5}, set:["flex_pledge"],
       result:"Closer to BMW's contemporaneous stance, and far less exciting to write a headline about. Analysts mark you down for lacking a 'story'; engineers privately thank you for the optionality."},
      {label:"Commit only specific segments to electrification, leave flagships untouched indefinitely", fx:{cashflow:+1,marketshare:-2,stockprice:-2}, set:["segment_pledge"],
       result:"A hedge dressed as a strategy. It satisfies nobody enough to make news, which in 2021's electrification arms race is its own kind of risk."}
     ]},
    {id:"eqs_launch", year:"2021–2022", title:"Building the Electric Flagship",
     text:"To back the pledge, Mercedes needs genuinely dedicated EV flagships — not combustion conversions — to answer Tesla's Model S and undercut BMW's more cautious, shared-platform approach. The EQS and EQE are ready to reveal. Design has gone all-in on aerodynamics: a 0.20 drag coefficient, a silhouette that doesn't look like an S-Class at all.",
     alt:[{if:"hard_pledge", text:"The 2030 pledge needs a face, fast. The EQS and EQE are ready — bespoke EV flagships, radically aerodynamic, nothing like the S-Class and E-Class they're meant to electrify. Design calls the silhouette 'the future'. Some on the board quietly call it a gamble on customer taste."}],
     choices:[
      {label:"Launch bespoke, EV-only flagships with radical aerodynamic styling distinct from combustion siblings", fx:{cashflow:-5,marketshare:+3,stockprice:+9}, set:["bespoke_ev"],
       result:"Critically adored — efficiency numbers and tech reviews are glowing. The styling, designers admit privately, ate the three-box silhouette that's said 'S-Class' for fifty years. The market hasn't weighed in yet.",
       hist:"Real: Mercedes launched the EQS (2021) and EQE (2022) as standalone, aerodynamically distinct EV flagships on a dedicated electric platform."},
      {label:"Build EVs that visually mirror existing combustion flagships to ease the transition", fx:{cashflow:+2,marketshare:+4,stockprice:+2}, set:["mirror_design"],
       result:"Customers recognize the car immediately, which is the point. It's a less dramatic unveiling, and a far smaller bet on whether buyers want their EV to look like the future or like a Mercedes."},
      {label:"Delay flagship EVs — start with smaller, lower-risk compact EVs instead", fx:{cashflow:+3,stockprice:-6}, set:["delay_flagship"],
       result:"Cautious, and it cedes the 'electric flagship' headline to Tesla and, soon, BMW and Audi. The 2030 pledge now has a deadline and no flagship to point to."}
     ]},
    {id:"mbos", year:"FEB 2023", title:"Building the Brain In-House",
     text:"Vehicles are becoming software-defined, and Chinese EV makers — plus Tesla — are setting the pace on over-the-air updates and integrated software stacks. Build a proprietary chip-to-cloud operating system from scratch, or lean on a third-party stack to save years and money?",
     choices:[
      {label:"Build MB.OS in-house — unify infotainment, ADAS, body and driving domains under one system", fx:{cashflow:-7,marketshare:+2,stockprice:+8}, set:["inhouse_os"],
       result:"A multi-year, multi-billion-euro commitment with no guaranteed payoff date. MB.OS is announced at the February 2023 strategy update, targeted for mid-decade rollout alongside the new MMA platform.",
       hist:"Real: Mercedes-Benz announced its in-house MB.OS operating system at a February 2023 strategy update, targeting rollout alongside the MMA platform from mid-decade."},
      {label:"License a third-party automotive software stack to save development time and cost", fx:{cashflow:+4,stockprice:-3}, set:["license_os"],
       result:"Faster to market, cheaper on the income statement — and the company that owns the platform now has real leverage over how a Mercedes feels to use."},
      {label:"Maintain the existing, more fragmented multi-supplier software architecture", fx:{cashflow:+2,stockprice:-7}, set:["fragmented"],
       result:"No big bet, no big bill — and reviewers keep noting, with increasing impatience, that the infotainment lags two generations behind the Chinese rivals it's supposed to be competing with."}
     ]},
    {id:"eq_collapse", year:"2023–2024", title:"The EQ Sales Collapse",
     text:"Eighteen months after launch, US demand data is unambiguous: EQS combined sales fall from 14,499 units in 2023 to 6,963 in 2024 — down 52%. EQE falls from 19,104 to 11,660, down 39%. Used EQS units are trading for as little as $33,000 against a six-figure original sticker. The strategy update that set this in motion is barely three years old.",
     cond:"bespoke_ev",
     voice:"A dealer principal, at the annual conference, into a live microphone: \"My customers ask me why the future drives shorter than the past, and depreciates faster too.\"",
     choices:[
      {label:"Cut EQ prices aggressively to defend volume", fx:{cashflow:-8,marketshare:+4,stockprice:-3}, result:"Volume stabilizes; so does the market's read on what an EQ is actually worth. Residuals, already cratering, take the discounting as confirmation."},
      {label:"Hold price and margin discipline — accept declining volumes, wait for the next generation", fx:{cashflow:+3,marketshare:-6,stockprice:-2}, set:["held_discipline"],
       result:"Dealers are unhappy and inventory ages on the lot, but you haven't taught the market that a Mercedes EV is negotiable. The next-generation design reset is now carrying a lot of weight."},
      {label:"Quietly redirect production capacity from EQ toward combustion and hybrid models in demand", fx:{cashflow:+5,marketshare:+2,stockprice:-4}, result:"Pragmatic and immediately profitable — and it is, functionally, the first admission that the all-electric pledge has met a demand problem it can't talk its way past."}
     ]},
    {id:"walkback", year:"22 FEB 2024", title:"Walking Back the Pledge",
     text:"EV demand growth has slowed across your core US and European markets, and the 2030 all-electric target is now visibly unreachable on its original timeline. Defend the pledge publicly and absorb the credibility cost later, or formally reverse it now and accept the 'U-turn' headlines immediately?",
     fxIf:[{if:"hard_pledge", fx:{stockprice:-5}, note:"The louder the original promise, the louder this reversal echoes — the 2021 conviction is now the 2024 liability."},
           {if:"flex_pledge", fx:{stockprice:+3}, note:"Having never made the hard promise, there's far less to walk back — the flexible 2021 stance ages well in exactly this moment."}],
     choices:[
      {label:"Formally abandon the 2030 all-electric goal — reinvest in combustion and hybrid, accept the 'U-turn' framing", fx:{cashflow:+6,marketshare:+3,stockprice:-4}, set:["walked_back"],
       result:"Källenius delays the 50% hybrid+EV interim target by five years and promises next-generation combustion updates that will feel 'almost like a new lineup by 2027' — including new hybrid four-cylinder engines co-developed with Geely for 2026. The press calls it drastic. It's also honest.",
       hist:"Real: Källenius announced in February 2024 that Mercedes was abandoning the goal of exclusively selling EVs by 2030 in major markets, delaying the 50% EV/hybrid target by five years."},
      {label:"Publicly maintain the 2030 target and absorb the credibility cost of likely missing it later", fx:{cashflow:-4,stockprice:-8}, result:"Conviction has a shelf life, and markets are pricing in the eventual miss already. You've bought a few quarters of consistency at the cost of a much larger reckoning down the road."},
      {label:"Let the target quietly lapse without a clear public statement either way", fx:{cashflow:-2,stockprice:-6}, result:"Ambiguity satisfies no one. Investors fill the silence with their own — worse — assumptions, and you've spent none of the goodwill a clean reversal might have bought."}
     ]},
    {id:"china_invest", year:"SEP 2024", title:"Doubling Down on China",
     text:"China — your largest single market — has turned from profit engine to headwind: domestic EV and software-defined-vehicle makers undercut you on price and in-car technology, and the broader luxury market is cooling. Retreat and protect margin, or invest further into localization?",
     fxIf:[{if:"inhouse_os", fx:{stockprice:+3}, note:"An in-house software stack gives the localized China product a real technology story to sell against domestic rivals, not just a price discount."},
           {if:"license_os", fx:{stockprice:-3}, note:"Competing against China's software-defined-vehicle makers with a licensed third-party stack is a weaker hand than the one you're playing for."}],
     choices:[
      {label:"Invest over RMB 14 billion (~$2B) with local partners — localize MMA-based models including an electric long-wheelbase CLA for Chinese buyers", fx:{cashflow:-6,marketshare:+3,stockprice:+2}, set:["china_localize"],
       result:"Production of the new China-specific CLA begins at the Beijing Benz Automotive joint venture. It's the right structural answer to a structural problem — though sales keep declining through 2024–2025 regardless, because the problem is competitive and macroeconomic, not just a localization gap.",
       hist:"Real: Mercedes announced in September 2024 a plan to invest more than RMB 14B (~$2B) in China with local partners, including localized MMA-platform production at BBAC."},
      {label:"Scale back China investment and protect margin — cede share to local competitors", fx:{cashflow:+5,marketshare:-9,stockprice:-5}, result:"Margins hold steadier in the near term. The world's largest auto market keeps moving without you, and the share you cede here is far harder to win back than it was to lose."},
      {label:"Compete purely on price with existing imported, global-spec products", fx:{cashflow:-3,marketshare:-4}, result:"Discounting a global-spec car against locally-tailored, software-forward domestic rivals is a fight you've chosen to lose slowly instead of quickly."}
     ]},
    {id:"profit_collapse", year:"NOV 2024 – FEB 2025", title:"Next Level Performance",
     text:"2024 lands badly: net profit down 28% to about €10.4 billion, revenue down roughly 4% to €145.6 billion, China sales down 7% for the year. You must decide how aggressively to cut costs and how to sell a credible recovery plan to investors and a nervous workforce at the same time.",
     fxIf:[{if:"walked_back", fx:{stockprice:+3}, note:"Having already absorbed the credibility cost of the strategy reversal, this cost program reads as the next disciplined step, not a second surprise."},
           {if:"held_discipline", fx:{cashflow:+2}, note:"Margin discipline through the EQ downturn means there's less ground to make up here — the cuts land on a healthier base."}],
     choices:[
      {label:"Launch 'Next Level Performance' — ~€5B in annualized savings by 2027, ~10% production-cost cuts, voluntary job reductions", fx:{cashflow:+9,marketshare:-3,stockprice:+5}, set:["next_level"],
       result:"Up to 20,000 jobs reduced (potentially 33,000 in a worse scenario) through voluntary buyouts and attrition, with no forced redundancies guaranteed before 2034. IG Metall and the works council push back hard on wage and redeployment terms but ultimately sign off on the voluntary framework.",
       hist:"Real: Mercedes unveiled 'Next Level Performance' in February 2025, targeting ~€5B in annualized savings by 2027 via ~10% production-cost cuts and voluntary job reductions of up to 20,000 (potentially 33,000)."},
      {label:"Absorb the downturn with minimal structural change — bet on a cyclical recovery", fx:{cashflow:-7,stockprice:-9}, result:"The cycle does eventually turn. Whether your balance sheet and your board's patience last long enough to see it is the much harder question."},
      {label:"Cut R&D and product investment instead of headcount, to preserve jobs near-term", fx:{cashflow:-3,marketshare:-5,stockprice:-6}, result:"Popular with the workforce, alarming to investors who can see the MMA and MB.OS programs — the entire recovery thesis — being starved at the exact moment they need funding most."}
     ]},
    {id:"eq_retire", year:"2023 Announcement; 2024–2025 Rollout", title:"Retiring the EQ Name",
     text:"Customer confusion over EQ's naming (EQA, EQB, EQC, EQE, EQE SUV, EQS, EQS SUV, no consistent size logic) compounds the design-driven sales struggles. The next EV generation needs a branding decision: keep the distinct EQ identity, or fold electric back into the core model names.",
     cond:"bespoke_ev",
     choices:[
      {label:"Retire standalone 'EQ' naming — rebadge future EVs with their combustion equivalents' names and styling", fx:{cashflow:-3,marketshare:+5,stockprice:+4}, set:["eq_retired"],
       result:"Future electric compacts will use 'GLA' instead of 'EQA', styled to match their combustion siblings, with 'EQ' surviving only as a sub-label like 'with EQ Technology'. It's a quiet, near-total reversal of the EQS/EQE design philosophy you committed to three years ago.",
       hist:"Real: per January 2023 Handelsblatt reporting, Mercedes confirmed it would phase out standalone EQ model names starting with next-generation compacts in late 2024, aligning EV design with combustion siblings."},
      {label:"Keep the EQ brand and naming scheme, but refresh the styling", fx:{cashflow:-2,marketshare:+1,stockprice:0}, result:"A half-measure: the confusing naming survives, and the design problem only partly resolves. Reviewers note the inconsistency persists."},
      {label:"Create an entirely new third naming and branding scheme", fx:{cashflow:-5,marketshare:-2,stockprice:-2}, result:"A third identity in five years asks customers to relearn the lineup again. Brand consistency, already strained, takes another hit."}
     ]},
    {id:"mma_cla", year:"13 MAR 2025", title:"One Platform, Two Powertrains",
     text:"The new Mercedes-Benz Modular Architecture (MMA) underpins the compact-car future, and it has to flexibly build both battery-electric and combustion variants on one line — the structural lesson of three years spent over-committing to single-powertrain EV design.",
     fxIf:[{if:"eq_retired", fx:{stockprice:+4}, note:"Having already retired the separate EQ identity, the shared-name, shared-design CLA lands as the plan's natural conclusion, not an improvised pivot."},
           {if:"inhouse_os", fx:{stockprice:+3}, note:"MB.OS gives the new CLA a real software story across both powertrains, not just a hardware flexibility pitch."}],
     choices:[
      {label:"Build MMA as a flexible platform — identical-design combustion and EV variants under one model name", fx:{cashflow:+5,marketshare:+6,stockprice:+8}, set:["mma_flex"],
       result:"The third-generation CLA, unveiled 13 March 2025, shares identical exterior and interior design and the same model name across combustion and electric versions for the first time — the electric CLA 250+ with EQ Technology offers an 85kWh battery, 800V architecture and 320kW DC fast charging.",
       hist:"Real: the third-generation CLA launched 13 March 2025 as the first MMA-based model, with combustion and BEV versions sharing identical design and the same model name."},
      {label:"Build MMA as an EV-only platform, continuing the EQS/EQE approach", fx:{cashflow:-4,stockprice:-6}, result:"Doubling down on the exact design philosophy that produced the EQ sales collapse. Engineering admires the purity; sales forecasts do not."},
      {label:"Delay the EV variant until combustion demand data clarifies further", fx:{cashflow:+2,marketshare:-3,stockprice:-3}, result:"Caution has a cost: a platform built to hedge against demand volatility, sitting half-used while you wait for certainty that demand volatility, by definition, won't provide."}
     ]},
    {id:"mastering", year:"2025–2026", title:"Mastering Transformation",
     text:"Even after the 2024 reset and the MMA/CLA launch, 2025 brings continued China and EV weakness for extended stretches. You must decide how to communicate the shape of the recovery to investors who are still digesting last year's profit warning and job-cut announcement.",
     fxIf:[{if:"next_level", fx:{stockprice:+3}, note:"The cost program is already in motion and on schedule — the recovery narrative has receipts, not just promises."},
           {if:"china_localize", fx:{marketshare:+3}, note:"The localized CLA production gives the China story a concrete product to point to, not just an investment figure."},
           {if:"walked_back", fx:{cashflow:+2}, note:"Having already taken the credibility hit on the EV pledge, this update can be candid about timelines without compounding a second surprise."}],
     voice:"Ola Källenius, February 2025: \"To ensure the company's future competitiveness in an increasingly uncertain world, we are taking steps to make the company leaner, faster and stronger, while readying an intense product launch campaign for multiple new vehicles starting with the all new CLA.\"",
     choices:[
      {label:"Communicate a longer, multi-year 'Mastering Transformation' framing — conservative near-term, MMA/CLA and MB.OS as the medium-term answer", fx:{cashflow:+4,marketshare:+3,stockprice:+7}, set:["mastering_long"],
       result:"CFO Harald Wilhelm frames 2025 Capital Market Day around production flexibility between combustion and BEV output, 'higher for longer' combustion margins, and the CLA-led product campaign as the foundation of recovery. It's candid about a weaker 2025 — and it avoids repeating 2021's credibility cost.",
       hist:"Real: Mercedes-Benz's 2025 Capital Market Day, framed by CFO Harald Wilhelm around 'Mastering Transformation', emphasized production flexibility and a multi-year recovery while confirming a weaker 2025 profit outlook."},
      {label:"Project a fast, V-shaped recovery to reassure markets now", fx:{cashflow:+2,stockprice:-9}, result:"Confidence today, risk tomorrow: if the recovery doesn't arrive on schedule, you've manufactured a second credibility crisis on top of the first."},
      {label:"Pursue a faster, more drastic capacity-cutting response — plant closures over attrition", fx:{cashflow:+6,marketshare:-8,stockprice:-3}, result:"Costs fall faster than the gradual plan would allow. So does workforce trust, supplier confidence, and the political peace you negotiated with the unions just months earlier."}
     ]}
   ]
};
EVENTS.mercedes = [
  {title:"Union Ultimatum", text:"IG Metall calls a warning strike over the transformation roadmap. Sindelfingen's gates are lined with banners and television vans.", fx:{cashflow:-3}, up:"A weekend of negotiation buys peace, priced in guarantees."},
  {title:"China Sneezes", text:"A regulatory shift in Beijing chills luxury purchases for a quarter. Your largest market suddenly reads tea leaves instead of brochures.", fx:{cashflow:-4}, up:"The quarter is saved, barely, by the S-Class waiting list."},
  {title:"Design Award Sweep", text:"Your design language wins everything in sight; the press calls the new lineup 'the most desirable cars on sale'.", fx:{marketshare:+4}, up:"Desire, it turns out, photographs better than specifications."},
  {title:"Recall Scare", text:"A potential brake-component fault triggers a precautionary recall across two model lines.", fx:{cashflow:-3,marketshare:-2}, up:"Handled fast and honestly; the story dies in a week."},
  {title:"Tech Talent Coup", text:"A renowned chip architect chooses Stuttgart over Silicon Valley, citing 'the chance to put real software in a real icon'.", fx:{stockprice:+4}, up:"One hire moves the roadmap by a quarter and recruiting by a year."},
  {title:"Euro Surges", text:"Currency swings shave hundreds of millions off repatriated profits this quarter.", fx:{cashflow:-3}, up:"The hedging desk earns its bonuses; most of the damage is absorbed."}
];
TICKER.mercedes = ["BMW launches rival model, claims 'driving pleasure'","Audi gains share among software engineers","Chinese EV startup #47 raises $2B","Brussels drafts stricter CO2 targets","Tesla market cap passes another legacy automaker","Geneva Motor Show attendance declines again","Consultants forecast 'peak car' — for the ninth year","Porsche margins remain annoyingly excellent"];
