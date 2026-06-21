DATA.tata = {
 name:"Tata Motors", short:"Tata", logo:"🐘", theme:"theme-tata", ipo:22,
 pitch:"A commercial-vehicle maker from a price-sensitive home market that keeps making absurd bets — a Rs 1 lakh car, a $2.3B British luxury marque, a continent-spanning EV pivot. Family-trust governance above you, two very different car businesses below you. High risk, history-making upside.",
 kpis:[
  {key:"cash", label:"Cash / Balance Sheet", desc:"Debt capacity and liquidity. Tata has bet the company on leveraged acquisitions twice. Hit zero and the banks call in the bridge loan."},
  {key:"trust", label:"Domestic Credibility", desc:"The 'people's car' promise, labor and land politics, and Tata Sons' own reputation for governance integrity. Hit zero and the home market — and the family trusts — turn on you."},
  {key:"future", label:"Global Competitiveness", desc:"JLR's turnaround, the EV transition, and resilience against disruption. Hit zero and Tata becomes a cautionary tale taught in business schools."}
 ],
 ticker:"TTM",
 bankruptcy:"The bridge loan comes due with no refinancing in sight and no rights issue left to launch. Tata Sons accepts a buyer's term sheet for the businesses Ratan Tata spent a career building — Bombay House goes quiet for a week.",
 legendary:"You proved a century-old truck maker could out-build, out-EV and out-prestige rivals twice its size — and that a family-controlled conglomerate could still hand power to a professional manager without burning the house down.",
 eras:{
  a:{
   name:"Make in India Era", years:"1998–2008", start:{cash:55, trust:50, future:30}, stock0:8, deep:true,
   intro:"It's January 1998. Tata Motors builds trucks and buses, and nothing else — Ford executives have made it clear they think you don't belong in passenger cars. You're about to find out whether an Indian company can design a car from scratch, and whether 'cheapest' can ever be a compliment.",
   scenarios:[
    {id:"indica", year:"JAN 1998", title:"More Car Per Car",
     text:"At the Delhi Auto Expo you unveil the Indica — India's first fully indigenously designed passenger car, a diesel hatchback meant to undercut Maruti Suzuki's dominant 800 while offering more interior room than a Hindustan Ambassador in the footprint of a Maruti Zen. Nobody in the building thinks a truck company can pull this off.",
     voice:"Ratan Tata, at launch: \"This is the first passenger car designed and developed entirely in India.\"",
     choices:[
      {label:"Commit to full ground-up indigenous design and engineering", fx:{trust:+15,future:+10}, set:["indigenous"],
       result:"It is slower and more expensive than licensing a platform, but the day it launches, every newspaper in the country runs the same headline: an Indian car, built by Indians.",
       hist:"Real: Tata launched the fully indigenous Indica commercially on Dec 30, 1998 at Rs 2.6 lakh; Maruti cut its 800's price by ~Rs 30,000 in response, and the Indica became India's top-selling car within a few years."},
      {label:"License a passenger-car platform from a foreign partner — the conventional path", fx:{cash:+10,future:-8},
       result:"Safer, faster, and indistinguishable from what every other Indian assembler is already doing. You save money and buy yourself out of the story entirely."},
      {label:"Build a passenger car off an existing foreign chassis instead of designing from scratch", fx:{cash:+5,trust:-3},
       result:"A hybrid compromise — quicker to market, but engineers grumble that you've built a costume, not a car."}
     ]},
    {id:"ford_humiliation", year:"1999", title:"They'll Do Us a Favor", cond:"indigenous",
     text:"The Indica's early losses are mounting and your team quietly approaches Ford about selling the passenger-car business outright. In the meeting, Ford executives — including chairman Bill Ford — reportedly tell your team they don't know anything about cars, and that Ford would be doing you a favor by buying the division.",
     voice:"Relayed via Tata executive Pravin Kadle, who was in the room: Ford said Tata should not have entered the passenger-car business and would 'do us a favour by buying our car division.'",
     choices:[
      {label:"Walk away from the deal and persevere independently", fx:{trust:+10,future:+8}, set:["ford_snub"],
       result:"You leave the meeting and pour resources into fixing the Indica instead. The slight does not get forgotten — not by you, and not by the boardroom retelling it for the next decade.",
       hist:"Real: the deal collapsed and Tata invested in fixing the passenger-car business instead; Tata himself later retold the meeting as the emotional seed of a much bigger move nine years later."},
      {label:"Sell the passenger-car business to Ford as discussed", fx:{cash:+18,future:-15}, set:["sold_to_ford"],
       result:"The truck company that tried to build cars goes back to building trucks. It is the financially sensible outcome and it will read, in hindsight, like the door closing on a future Tata never got to have."},
      {label:"Sell a minority stake instead of the whole division", fx:{cash:+8,future:-3},
       result:"A face-saving half-measure. Ford gets a seat at the table and an option on the rest whenever your losses next make headlines."}
     ]},
    {id:"daewoo", year:"FEB–MAR 2004", title:"First Bite Abroad",
     text:"Tata Motors makes its first major international acquisition, buying bankrupt Daewoo Commercial Vehicle Company in South Korea for about $102M, with an initial payment of $51M financed through internal resources and debt.",
     choices:[
      {label:"Close the Daewoo CV deal — Tata's first real international move", fx:{cash:-8,future:+15}, set:["daewoo"],
       result:"Tata Daewoo becomes South Korea's second-largest medium/heavy truck maker, and gives you your first real experience competing head-on against Daimler and Volvo. It is, in hindsight, a dry run for something far bigger.",
       hist:"Real: the Daewoo CV deal closed in 2004 and became Tata Daewoo, South Korea's second-largest CV maker."},
      {label:"Stay purely domestic — grow commercial vehicles inside India only", fx:{cash:+6,future:-8},
       result:"Conservative and comfortable. You keep both feet planted at home while rivals start building the global playbook you're choosing to skip."},
      {label:"Pursue a smaller technology-licensing partnership instead of a full acquisition", fx:{cash:+3,future:+3},
       result:"Lower risk, lower reward — you get some technology transfer without the headache of running a foreign subsidiary."}
     ]},
    {id:"nano_promise", year:"JAN 10 2008", title:"A Promise Is a Promise",
     text:"At the Delhi Auto Expo you unveil the Nano — conceived in 2004 after Ratan Tata watched a family of four piled onto a single scooter — and publicly commit to a price of Rs 1 lakh, even though input costs have risen sharply since the project began.",
     voice:"Ratan Tata, Jan 10, 2008: \"Since we started the project four years back, there has been a steep increase in input cost, but a promise is a promise.\"",
     choices:[
      {label:"Hold the Rs 1 lakh price line for the base model, no matter the cost", fx:{trust:+18,cash:-10}, set:["nano_promise_kept"],
       result:"The launch generates enormous global press as 'the world's cheapest car' and over 200,000 advance bookings pour in. You have just made a promise the entire company will spend the next decade trying to keep profitable.",
       hist:"Real: Tata held the Rs 1 lakh base price at the Jan 2008 launch, generating massive press coverage and over 200,000 advance bookings."},
      {label:"Quietly raise the price to reflect real input costs", fx:{cash:+8,trust:-15},
       result:"The accountants sleep better. The headline 'Tata breaks its Rs 1 lakh promise' runs in every paper that helped you make the promise famous in the first place."},
      {label:"Launch at the promised price but with a heavily stripped base trim few buyers will actually choose", fx:{cash:+4,trust:-6},
       result:"Technically honest, reputationally slippery. Reviewers note that the advertised car and the showroom car are not quite the same car."}
     ]}
   ]
  },
  b:{
   name:"The JLR Gamble and the Financial Crisis", years:"2008–2013", start:{cash:35, trust:45, future:35}, stock0:14, deep:true,
   intro:"It's January 2008. Ford is bleeding cash and putting Jaguar and Land Rover up for sale. You're a fraction of Ford's size, fresh off the Nano launch, and about to triple your global ambition in a single year — months before the floor falls out of the world's credit markets.",
   scenarios:[
    {id:"jlr_bid", year:"JAN–MAR 2008", title:"Buying the Crown Jewels Mid-Meltdown",
     text:"Tata Motors emerges as the lead bidder for Jaguar and Land Rover, beating reported interest from private equity firms and other strategics, in a deal valuing the two storied British brands at $2.3B net plus roughly $600M of Ford contributions to JLR's pension plans.",
     choices:[
      {label:"Go all-in: bid for both Jaguar and Land Rover together", fx:{cash:-18,future:+20,trust:+5}, set:["jlr"],
       result:"You announce the agreement March 26, 2008 and close an all-cash, debt-free acquisition on June 2, 2008 — financed substantially via a $3B bridge loan from a banking consortium, months before Lehman Brothers collapses.",
       hist:"Real: Tata Motors announced the JLR deal March 26, 2008 and closed it June 2, 2008, financed via a $3B bridge loan."},
      {label:"Bid for Jaguar only, leaving the costlier Land Rover business to another buyer", fx:{cash:-8,future:+8},
       result:"A half-bet. You get the prestige saloon brand without the SUV volume that will, a few years from now, turn out to be the actual profit engine."},
      {label:"Walk away entirely — let a private-equity buyer take JLR and stay focused on India", fx:{cash:+10,future:-10}, set:["no_jlr"],
       result:"You keep the balance sheet clean and the ambitions small. Somewhere in Mumbai, a board member who wanted this deal will bring it up at every meeting for the next five years."}
     ]},
    {id:"singur", year:"2006–OCT 2008", title:"997 Acres of Trouble",
     text:"Tata Motors was allotted 997 acres in Singur, West Bengal to build the Nano factory. Displaced farmers, backed by opposition leader Mamata Banerjee, mount sustained and at times violent protests, shutting down construction progress through much of 2008.",
     voice:"Ratan Tata called the eventual withdrawal \"painful\" and blamed the protests for derailing the project.",
     choices:[
      {label:"Withdraw from Singur and relocate the plant to a more business-friendly state", fx:{cash:-6,trust:+8}, set:["sanand"],
       result:"On October 3, 2008 you announce withdrawal; on October 7 you announce Sanand, Gujarat as the new site, where the state government moves with extraordinary speed — the factory is completed in 14 months versus 28 unsuccessful months at Singur.",
       hist:"Real: Tata withdrew from Singur Oct 3, 2008 and announced Sanand, Gujarat as the replacement site Oct 7, 2008; West Bengal's Left Front lost power by 2011 in the political fallout."},
      {label:"Keep negotiating with farmers and the West Bengal government to salvage Singur", fx:{cash:-10,trust:-10},
       result:"Months bleed away in talks that go nowhere. The factory sits half-built while the political temperature in West Bengal keeps rising."},
      {label:"Delay the Nano program rather than relocate, absorbing the lost time", fx:{cash:-5,future:-8},
       result:"You avoid the politically loud relocation story, but the Nano slips further behind a launch window that was already tight."}
     ]},
    {id:"bridge_loan", year:"LATE 2008–MID 2009", title:"$2 Billion, Due in Months, No Credit Market in Sight",
     text:"By the end of January 2009 you have repaid only about $1B of the $3B JLR bridge loan, with the remainder due by June 2009 — just as global credit markets freeze and JLR sales volumes fall roughly 32% in the ten months since acquisition, with a net pre-tax loss of £281M.",
     cond:"jlr",
     choices:[
      {label:"Roll over and refinance the bridge loan, and launch a group-wide rights issue", fx:{cash:+15,trust:+5}, set:["rights_issue"],
       result:"You launch a roughly Rs 72 billion (₹4,146 crore) rights issue across the group to shore up the balance sheet, narrowly avoiding default.",
       hist:"Real: Tata Motors rolled over and refinanced the bridge loan and launched a group-wide rights issue (~₹4,146 crore) in 2009, avoiding default."},
      {label:"Sell a stake in JLR to a sovereign wealth fund or strategic partner to raise cash fast", fx:{cash:+10,future:-10},
       result:"Cash comes in quickly, but so does a partner who now has a say in how the turnaround gets run."},
      {label:"Default and restructure the bridge loan with the bank consortium", fx:{cash:-15,trust:-15},
       result:"The headlines write themselves: 'Tata Motors in default talks'. Every supplier and dealer recalculates how worried to be."}
     ]},
    {id:"uk_loan", year:"MAY–AUG 2009", title:"Britain Says Maybe",
     text:"With JLR burning cash, you seek a UK government loan guarantee, citing the precedent of French and German governments backing their domestic automakers during the crisis. Negotiations drag for four months and grow contentious over the terms London wants to attach.",
     cond:"jlr",
     choices:[
      {label:"Abandon government talks and raise the money commercially instead", fx:{cash:+8,future:+5}, set:["commercial_funding"],
       result:"Talks break down without agreement. JLR instead secures roughly £175M from commercial lenders, including up to £75M from Burdale Financial, proceeding without UK state aid — while French and German rivals get exactly the support you were denied.",
       hist:"Real: UK loan-guarantee talks broke down; JLR secured ~£175M from commercial lenders including Burdale Financial, without UK government aid."},
      {label:"Accept the UK government's tougher conditions to secure the guarantee", fx:{cash:+12,future:-8},
       result:"You get the guarantee, and London gets a say in plant locations and job commitments for years to come."},
      {label:"Seek funding from the Indian government or Indian banks instead", fx:{cash:+5,trust:+3},
       result:"A patriotic optics win, a modest cash win, and a reminder that JLR's troubles are now very much India's problem too."}
     ]},
    {id:"nano_launch", year:"MAR 2009", title:"Launch Into the Storm",
     text:"Even as the company fights a liquidity crisis and relocates the Nano factory mid-stream, you have to decide whether to push ahead with the commercial launch or delay further.",
     choices:[
      {label:"Launch the Nano commercially now, nationwide, with full media fanfare", fx:{trust:+10,cash:-3}, set:["nano_launched"],
       fxIf:[{if:"sanand", fx:{trust:+4}, note:"The Sanand story — built in 14 months after Singur's collapse — becomes part of the launch narrative itself."}],
       result:"Over 200,000 bookings come in during the initial phase, a strong opening that masks structural problems in cost, safety perception and brand positioning that will surface over the next several years.",
       hist:"Real: Tata launched the Nano commercially in March 2009 with over 200,000 bookings in the initial phase."},
      {label:"Delay the commercial launch until the Sanand plant is fully operational and quality-proven", fx:{cash:-6,trust:+3},
       result:"You buy quality assurance at the cost of momentum. The press that wanted to write 'world's cheapest car ships' instead writes 'world's cheapest car delayed again'."},
      {label:"Launch a limited regional rollout first rather than nationwide", fx:{cash:+2,trust:-2},
       result:"A cautious middle path. It protects you from a national stumble but dilutes the global media moment you spent four years building toward."}
     ]},
    {id:"speth", year:"2010–2011", title:"Hire the Architect of the Turnaround",
     text:"You install Dr. Ralf Speth as JLR CEO in 2010, betting on a design-led product renewal strategy rather than pure cost-cutting, centered on a fashion-forward but still off-road-credible new model.",
     cond:"jlr",
     choices:[
      {label:"Back Speth's design-led renewal — invest in a bold new model rather than cut costs", fx:{cash:-8,future:+18}, set:["speth_design"],
       result:"JLR launches the Range Rover Evoque in 2011, proving the brand can be fashion-forward and credible off-road at once. By February 2012 Tata Motors reports a 41% profit rise versus 2010, with JLR contributing the large majority of group sales and profit.",
       hist:"Real: JLR launched the Range Rover Evoque in 2011 under Speth; Tata Motors reported a 41% profit rise by Feb 2012, JLR-driven."},
      {label:"Prioritize cost-cutting and platform-sharing with Tata's Indian operations", fx:{cash:+8,future:-8},
       result:"The synergy slideshows look great. The Jaguar and Land Rover engineers who actually have to share platforms with a budget hatchback line are considerably less enthusiastic."},
      {label:"Sell off the weaker Jaguar saloon lineup and concentrate on Land Rover's SUVs", fx:{cash:+6,future:-3},
       result:"A leaner, more focused company on paper. It also means giving up on one of the two brands you just spent $2.3B to acquire."}
     ]},
    {id:"china_engine", year:"2010–2012", title:"The Market That Saves the Deal",
     text:"JLR launches a national sales company in China in mid-2010 just as the Chinese luxury market begins its historic boom. The question is how aggressively to chase that growth versus protecting margins and brand exclusivity in mature markets.",
     cond:"jlr",
     choices:[
      {label:"Go all-in on China, including a future local manufacturing joint venture", fx:{cash:+15,future:+10}, set:["china_dependent"],
       result:"China overtakes the UK as JLR's biggest market, materially driving a 2012 profit surge. The dependency you've just built will become a vulnerability the moment China's growth ever slows.",
       hist:"Real: China overtook the UK as JLR's biggest market during this period, driving the 2012 profit surge; by Aug 2015 falling China sales and FX volatility nearly halved Tata Motors' quarterly net profit."},
      {label:"Grow cautiously in China to preserve brand exclusivity", fx:{cash:+5,future:+3},
       result:"Slower growth, steadier footing. You leave some of the boom on the table for rivals who chase it harder."},
      {label:"Prioritize reinvestment in home markets — UK, Europe, the US — instead", fx:{cash:+3,trust:+3},
       result:"A defensible, parochial choice. JLR's recovery will be slower without the Chinese tailwind that's currently lifting every luxury automaker in the room."}
     ]},
    {id:"succession_search", year:"AUG 2010–NOV 2011", title:"Choosing the Man Who Will Later Be Fired",
     text:"Approaching retirement age, you set up a five-member panel in August 2010 to run a global search for your successor as Tata Sons chairman — an unusually formal process for a group long associated with family control.",
     voice:"Ratan Tata, on the announcement: \"The appointment of Mr Cyrus P. Mistry as Deputy Chairman of Tata Sons is a good and far-sighted choice,\" citing \"the quality and caliber of his participation, his astute observations and his humility.\"",
     choices:[
      {label:"Name Cyrus Mistry — son of Tata Sons' largest shareholder family — as Deputy Chairman", fx:{trust:+8}, set:["mistry_named"],
       result:"In November 2011, Mistry is named Deputy Chairman, conditioned on severing formal ties to the Shapoorji Pallonji Group and a year of mentorship under you. He becomes Chairman upon your retirement in December 2012. You will have cause to revisit this decision in five years.",
       hist:"Real: Cyrus Mistry was named Deputy Chairman of Tata Sons in Nov 2011 and became Chairman in Dec 2012."},
      {label:"Promote a long-serving Tata Group operating executive instead", fx:{trust:+3,future:-5},
       result:"Continuity over disruption. The succession is quieter, and possibly safer, and definitely less interesting to the business press."},
      {label:"Recruit an international professional manager from outside India", fx:{future:+8,trust:-5},
       result:"A bold break from family-trust tradition, six years ahead of when this idea will actually take hold at Tata Sons."}
     ]}
   ]
  },
  c:{
   name:"Turnaround, Succession Crisis and Governance War", years:"2013–2019", start:{cash:50, trust:35, future:45}, stock0:22,
   intro:"It's 2014. JLR is turning from a cash drain into Tata Motors' dominant profit engine. But the company's central drama isn't industrial anymore — it's political, and it's about to blow up in public.",
   scenarios:[
    {id:"slym_death", year:"JAN 26-27 2014", title:"A Leadership Vacuum at 22 Floors Up",
     text:"Karl Slym, Tata Motors' Managing Director since 2012, is found dead after a fall from the 22nd floor of the Shangri-La hotel in Bangkok, where he had traveled for a board meeting. Police treat it as a likely suicide, citing an apparent note referencing domestic problems. Tata Motors shares fall more than 4.5% on the news.",
     choices:[
      {label:"Run a fresh global search for a permanent MD rather than rush a replacement", fx:{trust:-5,future:+5}, set:["global_search"],
       result:"The company operates for an extended period without a permanent MD/CEO before eventually recruiting Guenter Butschek, effective February 2016 — two years of drift that the domestic business can barely afford.",
       hist:"Real: Tata Motors operated without a permanent MD for an extended period before hiring Guenter Butschek, effective Feb 2016."},
      {label:"Promote an internal Tata Motors executive immediately to avoid an extended vacancy", fx:{trust:+5,future:-3},
       result:"Stability returns fast. Whether the promoted executive has the mandate to fix a struggling domestic passenger-vehicle business is a separate question."},
      {label:"Temporarily split MD duties among existing divisional heads", fx:{trust:-3},
       result:"A committee runs the company for a while. Nobody is in charge of the whole, and everyone notices."}
     ]},
    {id:"butschek", year:"LATE 2015–FEB 2016", title:"Turnaround 2.0", cond:"global_search",
     text:"After nearly two years without a permanent operating chief, the search concludes: Guenter Butschek, at the time Airbus's COO with 25 years' prior experience at Daimler, is recruited as CEO and MD.",
     choices:[
      {label:"Bring in Butschek and launch a full cost-reduction and portfolio-rationalization program", fx:{cash:+10,future:+12}, set:["butschek_hired"],
       result:"Butschek takes charge effective February 15, 2016 and launches 'Turnaround 2.0'. Under his 2016–2021 tenure, Tata Motors introduces the Nexon, Harrier, Altroz and Safari and regains meaningful domestic market share.",
       hist:"Real: Guenter Butschek took charge as Tata Motors CEO/MD effective Feb 15, 2016, launching the Turnaround 2.0 program."},
      {label:"Promote from within India's auto industry to preserve cultural continuity", fx:{trust:+5,future:-5},
       result:"A safer, more familiar choice. The turnaround, if it comes, will come slower and with less outside perspective."},
      {label:"Restructure the domestic passenger-vehicle business for sale or joint venture rather than fix it in-house", fx:{cash:+8,trust:-10},
       result:"Cutting your losses has a certain logic. It also means conceding that Tata Motors can't fix the very business the Indica and Nano were built to prove it could run."}
     ]},
    {id:"mistry_ouster", year:"OCT 24 2016", title:"The Board Votes Him Out",
     text:"After nearly four years as Chairman, Cyrus Mistry is removed by the Tata Sons board in a vote where six of nine members — including you, returning as interim chairman — vote to remove him, and two abstain. Board member Nitin Nohria reportedly tells Mistry beforehand that 'the relationship between you and Ratan Tata has not been working' and offers him the chance to resign first.",
     cond:"mistry_named",
     choices:[
      {label:"Proceed with the board vote to remove Mistry", fx:{trust:-12,future:+5}, set:["mistry_ousted"],
       result:"The board votes to remove Mistry on October 24, 2016. He refuses to go quietly — he will publish an explosive letter to the board and launch a multi-year legal battle that exposes deep governance tensions inside India's largest conglomerate.",
       hist:"Real: the Tata Sons board removed Cyrus Mistry as Chairman on Oct 24, 2016, in a 6-2 vote (with one abstention reported variably); litigation followed for years, ultimately upheld by the Supreme Court in 2021."},
      {label:"Negotiate a managed transition or resignation instead of a board vote", fx:{trust:+5,future:-3},
       result:"Mistry declines the offer to resign quietly. You're left with the same outcome, minus the option of looking decisive about it."},
      {label:"Retain Mistry but force a change in strategic direction and personnel under him", fx:{trust:-3,future:-5},
       result:"An uneasy compromise that satisfies nobody — least of all the board members who wanted this fight resolved, not postponed."}
     ]},
    {id:"mistry_letter", year:"OCT 26 2016", title:"Shut Down the Nano", cond:"mistry_ousted",
     text:"Two days after his removal, Mistry sends an internal letter to the Tata Sons board — which promptly leaks — warning that several Tata Group businesses face combined writedowns of nearly $18 billion. He singles out the Nano specifically, with cumulative losses having peaked at around Rs 1,000 crore, and a pointed note that the gliders supply an EV venture in which you personally hold a stake.",
     voice:"Cyrus Mistry's letter, as widely reported: \"As there is no line of sight to profitability for the Nano, any turnaround strategy for the company requires to shut it down... emotional reasons alone have kept us away from this crucial decision.\"",
     choices:[
      {label:"Publicly dispute Mistry's framing and continue operations unchanged in the short term", fx:{trust:-5,cash:+3}, set:["disputed_letter"],
       result:"Tata Group companies, including Tata Steel, issue clarifications disputing Mistry's framing; SEBI and the stock exchanges seek clarifications amid a stock plunge. The Nano is not shut down immediately — production continues in trickling volumes for two more years.",
       hist:"Real: Tata Group companies disputed Mistry's letter; SEBI/exchanges sought clarifications; the Nano was not immediately shut down but was discontinued for the Indian market in 2018, with sales down to single digits (3 units in June 2018)."},
      {label:"Shut the Nano down immediately, as Mistry recommended", fx:{trust:-8,cash:+8},
       result:"Financially rational and politically explosive — it looks like capitulating to the man the board just fired, on the one issue that's most personally tied to Ratan Tata."},
      {label:"Continue limited production for sentimental and political reasons", fx:{cash:-5,trust:+3},
       result:"The Nano lives on as a trickle, a rounding error in the sales reports and a permanent reminder of the fight that just happened."}
     ]},
    {id:"chandra_chairman", year:"JAN–FEB 2017", title:"The First Non-Family Chairman in 150 Years",
     text:"Following the bruising Mistry fight, Tata Sons needs a new permanent chairman who can command legitimacy without reopening family and ownership rivalries. N. Chandrasekaran, CEO of Tata Consultancy Services with no prior operating role in the auto business, joins the Tata Sons board in October 2016.",
     cond:"mistry_ousted",
     choices:[
      {label:"Name Chandrasekaran Chairman, the first non-family professional manager to lead the group", fx:{trust:+12,future:+8}, set:["chandra_era"],
       result:"Chandrasekaran is appointed Chairman in January 2017, taking charge from February 21, 2017 — a structural shift toward professionalized group governance. Tata Group stocks rise on the announcement.",
       hist:"Real: N. Chandrasekaran was named Tata Sons Chairman in Jan 2017, taking charge Feb 21, 2017, the first non-family professional manager to lead the conglomerate; Tata stocks rose on the news."},
      {label:"Appoint another Mistry- or Tata-family-adjacent candidate to preserve continuity", fx:{trust:-3,future:-5},
       result:"It avoids the optics of a total break from tradition, and risks reopening exactly the rivalry the board just spent a bruising year settling."},
      {label:"Have Ratan Tata extend his interim tenure rather than transition quickly", fx:{trust:-5},
       result:"Stability in the short term, an unresolved succession question in the long term — and a market that starts to wonder if anyone is actually planning the handover."}
     ]},
    {id:"nano_death", year:"2017–2018", title:"The Mercy Killing Nobody Wanted to Announce",
     text:"With sales down to a trickle and a 2014 Global NCAP crash test having given the Nano a zero-star safety rating, the company faces the final decision on the flagship 'people's car' that Ratan Tata had championed personally.",
     choices:[
      {label:"Formally discontinue the model", fx:{trust:+8,cash:+5}, set:["nano_discontinued"],
       result:"Production effectively ceases in 2018, with a final unit reportedly built in 2019 for homologation purposes — ending a ten-year run that never came close to the volumes or social impact originally envisioned. Retrospectives blame the 'world's cheapest car' branding, persistent fire-safety concerns, and the zero-star NCAP rating.",
       hist:"Real: Nano production effectively ceased in 2018 (last unit built 2019 for compliance); industry retrospectives cite branding, safety-fire concerns and the zero-star NCAP rating as causes of the failure."},
      {label:"Relaunch the Nano with a major safety and quality overhaul, rebranded away from 'cheapest car'", fx:{cash:-10,trust:+5,future:+5},
       result:"An expensive bet on redemption. It might work — or it might just be throwing good money after a brand that the public has already filed under 'failed experiment'."},
      {label:"Continue token production indefinitely to preserve the legacy project", fx:{cash:-5,trust:-3},
       result:"The Nano becomes a zombie product line — never quite alive, never formally buried, a quiet drain that nobody wants to be the one to end."}
     ]}
   ]
  },
  d:{
   name:"Electrification, Demerger and the Cyber Crisis", years:"2019–2026", start:{cash:55, trust:55, future:50}, stock0:38,
   intro:"It's 2019. JLR's turnaround is real, and Tata is about to become an accidental EV pioneer at home while JLR bets even bigger abroad. Profits will hit records you haven't seen in a decade — and then a single cyberattack will erase a month of production and force the company's biggest structural change since the JLR deal itself.",
   scenarios:[
    {id:"nexon_ev", year:"2019–2020", title:"Betting the Domestic EV Market on One SUV",
     text:"With India's EV market still nascent and charging infrastructure minimal, you decide to launch a mass-market electric compact SUV — the Nexon EV — built on Tata's in-house 'Ziptron' electric powertrain platform, rather than waiting for the market or government incentives to mature further.",
     choices:[
      {label:"Launch the Nexon EV now on the in-house Ziptron platform", fx:{cash:-8,future:+18}, set:["nexon_ev"],
       result:"The Nexon EV quickly becomes the best-selling EV in its segment, giving Tata as much as 62% of the Indian EV passenger-car market in Q1 FY21, and sustaining a roughly 70%+ share through FY2024.",
       hist:"Real: the Nexon EV launched on the Ziptron platform and gave Tata as much as 62% of the Indian EV passenger-car market in Q1 FY21, sustaining 70%+ share through FY2024."},
      {label:"Wait for FAME-II subsidy clarity and charging infrastructure to mature before committing capital", fx:{cash:+5,future:-10},
       result:"Prudent and cautious. By the time you're ready to commit, the first-mover advantage you could have had now belongs to somebody else."},
      {label:"License or import an EV platform rather than develop Ziptron in-house", fx:{cash:+3,future:-3},
       result:"Faster to market, shallower technical ownership. You can sell EVs, but you won't own the platform IP that compounds in value over the next decade."}
     ]},
    {id:"reimagine", year:"FEB 15 2021", title:"Jaguar Becomes an EV-Only Brand",
     text:"New JLR CEO Thierry Bolloré uses his first public strategy statement to announce 'Reimagine': Jaguar will become a fully electric brand by 2025, the previously planned combustion successor to the XJ saloon is cancelled outright, and JLR commits to investing £2.5B per year through 2030 in electrification.",
     choices:[
      {label:"Back the full Reimagine commitment — Jaguar goes all-electric, Land Rover follows", fx:{cash:-10,future:+20}, set:["reimagine"],
       result:"It is the boldest bet in JLR's history. Land Rover's first electric models will be delayed past the original 2024 target, and Jaguar's eventual EV-only relaunch — built around the 'Type 00' concept and 'Copy Nothing' rebrand — will draw heavy social-media backlash over dropping the leaping-cat logo.",
       hist:"Real: JLR announced the Reimagine all-electric strategy for Jaguar (by 2025) on Feb 15, 2021, with £2.5B/year committed through 2030; Land Rover's EVs slipped past 2024, and Jaguar's 2024 'Type 00'/Copy Nothing rebrand drew significant backlash."},
      {label:"Keep Jaguar as a mixed ICE/EV brand and let Land Rover lead electrification instead", fx:{cash:+5,future:-8},
       result:"Lower risk, and a missed opportunity to make Jaguar's weaker volumes and margins into a deliberate experiment rather than a problem to manage."},
      {label:"Phase the EV-only commitment in more slowly, with a stated date further out", fx:{future:+5},
       result:"A hedge that satisfies nobody fully — not the investors who want bold conviction, not the engineers who want a firm deadline to plan against."}
     ]},
    {id:"jlr_pricing", year:"FY2023–FY2024", title:"Sell Fewer Cars, Make More Money",
     text:"Coming out of the chip shortage and pandemic disruption, JLR leadership under CEO Adrian Mardell faces a choice: chase volume back to pre-pandemic levels of roughly 600,000 units a year, or lean into the order backlog for the highest-margin nameplates — Range Rover, Range Rover Sport, Defender — and deliberately run a smaller, pricier company.",
     choices:[
      {label:"Deliberately shrink target volume and concentrate on the highest-margin flagships", fx:{cash:+18,future:+8}, set:["jlr_premium"],
       result:"JLR shrinks its target to roughly 300,000 units a year while raising average selling price from about £40,000 to over £70,000. For the year ending March 31, 2024, JLR posts record revenue (£29B) and its highest profit before tax since FY2015 (£2.2B PBT), with Defender sales up 53%.",
       hist:"Real: JLR deliberately cut target volume to ~300,000 units/year, raised ASP from ~£40,000 to over £70,000, and posted FY2024 record revenue of £29B and £2.2B PBT, its highest since FY2015; Defender sales rose 53% to 114,646 units."},
      {label:"Ramp volume aggressively to reclaim market share lost during the chip crisis", fx:{cash:+5,future:-3},
       result:"Volume comes back faster, but margins thin out, and the brand exclusivity that's currently working in your favor erodes a little with every extra unit on the lot."},
      {label:"Hold a middle path across the full model range rather than concentrate on flagships", fx:{cash:+8},
       result:"A balanced, unremarkable outcome. Nobody writes a glowing case study about a company that played it safe in the middle."}
     ]},
    {id:"cyberattack", year:"SEP 1–OCT 8 2025", title:"The Month JLR Built Nothing",
     text:"A major cyberattack forces JLR to shut down core IT systems in early September 2025, halting vehicle production across its UK plants and disrupting retail operations globally. The shutdown idles roughly 5,000 cars a week of output for over a month, with no quick fix available.",
     choices:[
      {label:"Take the cautious, fully-secured rebuild path even if it extends the shutdown", fx:{cash:-15,trust:+5}, set:["cautious_rebuild"],
       result:"Global production only restarts October 8, 2025, after roughly five weeks largely offline. JLR's Q2 revenue falls 24% citing the cyberattack and US tariffs together, and wholesale volumes the following quarter drop 43.3% year-on-year.",
       hist:"Real: JLR production resumed Oct 8, 2025 after ~5 weeks offline; Q2 revenue fell 24%; wholesale volumes in the following quarter fell 43.3% y/y to 59,200 units."},
      {label:"Rebuild and resume production as fast as technically possible, accepting greater security risk", fx:{cash:-5,future:-8},
       result:"You get cars moving sooner, and you've reopened systems that may not be fully clean. The next incident, if there is one, will be harder to explain."},
      {label:"Refuse government support and self-fund supplier relief entirely", fx:{cash:-20,trust:+8},
       result:"A point of pride that costs real money. Thousands of suppliers facing their own cash crises don't particularly care where the relief comes from, as long as it comes."}
     ]},
    {id:"uk_loan_guarantee", year:"SEP 29 2025", title:"Britain Says Yes This Time", cond:"cautious_rebuild",
     text:"With JLR's supplier base facing its own cash crisis from the production shutdown, the UK government offers a loan guarantee to help JLR support suppliers through the crisis — the same kind of support Britain declined to give in 2009.",
     choices:[
      {label:"Accept the £1.5B UK government loan guarantee", fx:{cash:+15,trust:+5}, set:["uk_aid_2025"],
       result:"The UK government approves a £1.5B loan guarantee around September 29, 2025. The Cyber Monitoring Centre and outside analysts estimate the total cost to the UK economy at £1.9–2.5B, affecting over 5,000 organizations in JLR's supply chain.",
       hist:"Real: the UK government approved a £1.5B loan guarantee for JLR around Sept 29, 2025; estimated UK economic cost was £1.9–2.5B across 5,000+ supply-chain organizations."},
      {label:"Decline the guarantee and fund the supplier rescue entirely from Tata's own balance sheet", fx:{cash:-20,trust:+10},
       result:"A point of principle, an expensive one. You spend reserves that could have funded the EV transition to prove you didn't need London's help this time."},
      {label:"Accept a smaller, partial guarantee and split the rest with private lenders", fx:{cash:+8,trust:+3},
       result:"A hedge between independence and aid. It satisfies the balance sheet without making for quite as clean a headline either way."}
     ]},
    {id:"demerger", year:"2025, EFFECTIVE OCT 1 2025", title:"Splitting the Company in Two",
     text:"You decide to separate Tata Motors' commercial-vehicle business from its passenger-vehicle business (which includes EVs and JLR) into two independently listed companies — unwinding the conglomerate-within-a-conglomerate structure that's existed since the JLR deal welded a luxury car maker onto an Indian truck and hatchback business.",
     choices:[
      {label:"Execute the full demerger along commercial-vehicle and passenger-vehicle lines", fx:{cash:+12,future:+10}, set:["demerged"],
       result:"NCLT Mumbai approves the demerger via orders dated August 25 and September 10, 2025; it becomes effective October 1, 2025. The commercial-vehicle entity keeps the 'Tata Motors' name and lists November 12, 2025; the passenger-vehicle entity, housing EVs and JLR, becomes Tata Motors Passenger Vehicles Ltd under Shailesh Chandra.",
       hist:"Real: the demerger became effective Oct 1, 2025; the CV entity retained the Tata Motors name and listed Nov 12, 2025; Shailesh Chandra was named MD & CEO of the passenger-vehicle entity (TMPVL) and Girish Wagh of the CV entity; CFO PB Balaji left Nov 17, 2025 to become JLR's Global CEO."},
      {label:"Keep the combined structure and create internal divisional reporting transparency instead", fx:{cash:-5,future:-5},
       result:"You avoid the legal complexity of a full demerger, and the conglomerate discount that's been dragging on the stock for years persists right along with it."},
      {label:"Demerge JLR alone as a separate entity rather than splitting along CV/PV lines", fx:{cash:+5,future:+3},
       result:"A narrower cut. It isolates JLR's distinct cost/margin universe from the rest of the group, but leaves the CV and Indian PV businesses still oddly bundled together."}
     ]},
    {id:"ev_share_loss", year:"2024–2025", title:"From 70% to 36% in a Year",
     text:"After years of commanding the Indian EV passenger-car market, you face fast-rising competition from MG Motor India — whose 'battery-as-a-service' pricing lowers upfront cost — and Mahindra's BE 6 and XEV 9e. Leadership must decide how aggressively to respond.",
     cond:"nexon_ev",
     choices:[
      {label:"Hold premium positioning, accelerate new launches rather than compete on price", fx:{cash:+5,future:+10}, set:["held_premium"],
       result:"Tata's EV market share falls from about 70% (FY2024) to 53% (FY2025) — 36% in April 2025 versus 61% a year earlier — while MG's share rises to 28% and Mahindra hits 15.8%. Tata attributes much of the decline to softer fleet sales and states it is aiming to 'regain 50% market share in the electric PV segment in the long term' through new launches rather than price wars.",
       hist:"Real: Tata's EV share fell from ~70% (FY2024) to 53% (FY2025), 36% in April 2025 vs 61% a year earlier; MG rose to 28%, Mahindra to 15.8%; Tata stated it was not chasing share defensively and aimed to regain 50% long-term."},
      {label:"Match MG's battery-as-a-service pricing model directly", fx:{cash:-10,future:+5},
       result:"You meet the upstarts on their own pricing terms. It protects volume in the short term and complicates your margin story in every earnings call afterward."},
      {label:"Cut prices across the Nexon EV and Tiago EV range to defend share", fx:{cash:-12,trust:+3},
       result:"Share erosion slows. So does the profitability the EV business needed to demonstrate it could eventually stand on its own."}
     ]}
   ]
  }
 }
};

EVENTS.tata = [
 {title:"Maruti Cuts the 800's Price", text:"Days after the Indica's launch, Maruti Suzuki slashes its bestselling 800 by roughly Rs 30,000. The 'Indian car for Indians' has rattled the market leader within a week.", fx:{trust:+4}, up:"Showroom footfall doubles overnight — and not because Maruti's new price is the one anyone is talking about."},
 {title:"A Scooter Family of Four", text:"A photographer's image of a family of four balanced on a single scooter in the rain starts circulating in the press again, exactly the picture that inspired the Nano in the first place.", fx:{trust:+3}, up:"Nostalgia is good marketing. It is not, on its own, a profitable business model."},
 {title:"Rupee Volatility", text:"A sharp swing in the rupee-pound exchange rate quietly reshuffles JLR's reported earnings before a single car changes hands.", fx:{cash:-4}, up:"The treasury desk hedges what it can. The rest is just what happens when you run two currencies and one balance sheet."},
 {title:"Chinese EV Rival Undercuts Again", text:"A Chinese automaker entering the Indian market announces a compact EV priced below the Tiago EV, with double the advertised range.", fx:{future:-4}, up:"Your engineers point out the range claims are optimistic. Your sales team points out that doesn't matter at a launch event."},
 {title:"JLR Wins a Design Award", text:"A glossy international panel names a Land Rover model 'Car of the Year', and the press release writes itself.", fx:{trust:+5}, up:"Design awards don't fix supply chains, but they're cheaper than advertising and the dealers love them."},
 {title:"Monsoon Floods a Plant", text:"Unseasonal flooding shuts a key Indian manufacturing plant for several days, idling production lines and a few thousand workers.", fx:{cash:-5}, up:"The plant reopens within the week. The lost units quietly vanish from this quarter's delivery numbers."}
];

TICKER.tata = [
 "Maruti Suzuki dismisses talk of an 'Indian-engineered' car",
 "Ford executives reportedly unimpressed by Tata's car ambitions",
 "Mahindra eyes the SUV segment Tata once owned",
 "Bombay House declines to comment on boardroom rumors",
 "Analysts ask whether 'world's cheapest car' is a compliment or a curse",
 "JLR dealers in Shanghai report record waiting lists",
 "West Bengal politics keep finding their way into auto headlines",
 "Stuttgart and Munich both deny watching Tata's EV numbers closely"
];
