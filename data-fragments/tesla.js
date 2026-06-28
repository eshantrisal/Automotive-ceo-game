DATA.tesla = {
 name:"Tesla", short:"Tesla", logo:"⚡", theme:"theme-tesla", ipo:17,
 pitch:"A scrappy EV startup that has never made an annual profit. High risk, history-making upside.",
 ticker:"TSLA",
 bankruptcy:"Tesla files for bankruptcy protection; the EV revolution is delayed a decade.",
 legendary:"You didn't just save a company — you bent the entire industry toward electricity.",
 kpis:[
  {key:"cashflow", label:"Cashflow", desc:"Cash on hand. Hit zero and Tesla goes bankrupt."},
  {key:"marketshare", label:"Market Share", desc:"Vehicles sold and production reach vs rivals."},
  {key:"stockprice", label:"Stock Price", desc:"Investor confidence and TSLA valuation."}
 ],
 eras:{
  a:{
   name:"Survival Era", years:"2008–2013", start:{cashflow:28, marketshare:35, stockprice:50}, deep:true, stock0:3,
   intro:"October 2008. Lehman is dead, credit markets are frozen, and Tesla has delivered fewer than 50 Roadsters — each one costing more to build than its sticker price. Payroll clears for three more weeks. Your divorce is in the papers, SpaceX has just had its third rocket failure, and somewhere in Detroit, executives are laughing at you. Every choice you make from here ripples forward. Nothing is forgotten.",
   scenarios:[
    {id:"xmas", year:"DEC 2008", title:"Christmas Eve",
     text:"Your CFO's spreadsheet has a cell highlighted in red: the date Tesla dies. You have roughly $40M left — but SpaceX needs money too, fresh off a failed launch. Your investors are watching to see if YOU still believe.",
     voice:"Antonio Gracias, board member: \"Whatever you put in, they'll match. But they're watching your hands, not your mouth.\"",
     choices:[
      {label:"Split nothing. Every last personal dollar into Tesla, and dare investors to match it", fx:{cashflow:+13,stockprice:+10}, set:["allin"],
       result:"You borrow money for rent. The round closes hours before insolvency, on Christmas Eve. Word spreads: this founder will go down with the ship — so the ship probably won't.",
       hist:"Real: Musk closed Tesla's Series E on Dec 24, 2008, putting in essentially everything he had left."},
      {label:"Quietly shop Tesla to the giants — Daimler, Toyota, anyone", fx:{cashflow:+6,stockprice:-10}, set:["desperate"],
       result:"The bankers promise discretion. Bankers always do.",
       hist:""},
      {label:"Amputate to survive: cut a third of staff, halt Roadster, hibernate", fx:{cashflow:+7,marketshare:-10,stockprice:-6}, set:["gutted"],
       result:"The company lives, smaller and colder. Roadster buyers who paid $100k for cars that don't exist start an angry forum thread. It gets long.",
       hist:""}
     ]},
    {id:"leak", year:"JAN 2009", title:"The Leak", cond:"desperate",
     text:"Eleven days. 'TESLA SEEKS BUYER' is on the Journal's front page. Suppliers move to cash-on-delivery overnight; VPs take headhunter calls. The only bid on the table values Tesla below its deposits liability.",
     voice:"Your comms chief: \"We can't kill the story. We can only change what the story is about.\"",
     choices:[
      {label:"Kill the process publicly: 'Tesla is not for sale, and here's my own money to prove it'", fx:{cashflow:+4,stockprice:+7}, set:["allin"],
       result:"Expensive theater — you have to write the check to make the words true. But the deathwatch ends, and you've learned the first rule of this job: conviction is a currency."},
      {label:"Take the lowball bid before it gets worse", fx:{cashflow:+8,stockprice:-14}, set:["sold_soul"],
       result:"You're now a division president with a retention package. The mission survives on a slide deck, somewhere after 'synergies'."},
      {label:"Leak a counter-story: secret strategic investor in late-stage talks", fx:{stockprice:+3},
       result:"It buys two weeks. It had better become true within three."}
     ]},
    {id:"daimler", year:"MAY 2009", title:"The Germans Are in the Lobby",
     text:"Daimler — the company that invented the automobile — wants 10% of yours for $50M, plus battery packs for the electric Smart. Their engineers spent two days inside your Roadster pack and left impressed. Your board is split: validation, or a predator studying you from inside.",
     alt:[{if:"desperate", text:"Daimler is back, having read the headlines. The offer: $50M for 10%, take it or keep explaining your funeral coverage to suppliers."}],
     voice:"JB Straubel, CTO: \"Their battery program is years behind ours. They need us more than they'll ever say out loud.\"",
     choices:[
      {label:"Take the money and the partnership — credibility compounds", fx:{cashflow:+10,marketshare:+4,stockprice:+10}, set:["daimler"],
       result:"The press release lands like a defibrillator. Suppliers reopen credit lines the same week. A 120-year-old empire just told the world your battery tech is real.",
       hist:"Real: Daimler's May 2009 investment is the deal Musk credits with saving Tesla."},
      {label:"Counter hard: less equity, bigger supply contract — make them a customer, not an owner", fx:{cashflow:+6,marketshare:+7,stockprice:+4}, set:["daimler"],
       result:"They respect the audacity, barely. Less cash now, but building packs to Stuttgart's tolerances forces a discipline your startup never had."},
      {label:"Walk away — nobody studies our cell architecture from the inside", fx:{cashflow:-6,stockprice:-4}, set:["no_daimler"],
       result:"Independence has a burn rate. Yours is measured in weeks again, and the 'walking dead' whispers resume."}
     ]},
    {id:"fumes", year:"AUG 2009", title:"Running on Fumes", cond:"no_daimler",
     text:"This is what turning down $50M feels like: you're personally guaranteeing supplier invoices, and HR gently asks whether next payroll is 'fully certain'. Something has to give this month.",
     choices:[
      {label:"License Roadster powertrain IP to an Asian OEM for fast cash", fx:{cashflow:+8,stockprice:-3,marketshare:-2},
       result:"The money lands. So does the knowledge transfer — in three years, a suspiciously familiar battery architecture appears at a Shanghai auto show."},
      {label:"Convert customer deposits into discounted equity — make owners shareholders", fx:{cashflow:+7,stockprice:+4},
       result:"Legally hairy, emotionally brilliant. Your most fanatical customers become your most fanatical investors."},
      {label:"Another personal loan against SpaceX stock", fx:{cashflow:+6,stockprice:+2}, set:["allin"],
       result:"You're now leveraged against two unprofitable companies, secured by each other. Your accountant develops a facial tic."}
     ]},
    {id:"doe", year:"JUN 2009", title:"The Government Option",
     text:"The Department of Energy offers $465M at near-zero interest, meant to retool Detroit. Strings attached: milestones, audits, a political target on your back. Solyndra took similar money, and that's not aging well.",
     voice:"Your CFO: \"It's the cheapest capital we will ever be offered in our lives. Take it before someone in Washington changes their mind.\"",
     choices:[
      {label:"Take all $465M — fund the Model S properly", fx:{cashflow:+14,marketshare:+7,stockprice:+3}, set:["doe"],
       result:"The Model S program goes from aspiration to funded program with milestones. Fox News learns your name. Fair trade.",
       hist:"Real: Tesla took $465M in 2009 under the ATVM program."},
      {label:"Take half — keep the leash short", fx:{cashflow:+7,marketshare:+4,stockprice:+1}, set:["doe"],
       result:"Half the money, all of the politics. Washington doesn't do partial credit."},
      {label:"Refuse. Government money is government control", fx:{cashflow:-8,marketshare:-6,stockprice:+3}, set:["no_doe"],
       result:"Applause from your fanbase that pays for nothing. Model S development slides six months right."}
     ]},
    {id:"nummi", year:"APR 2010", title:"A Cathedral, Slightly Used",
     text:"Fremont: 5.5 million square feet, the old GM-Toyota NUMMI plant, built for half a million cars a year. Toyota will sell it for $42M and invest $50M in Tesla on top — Akio Toyoda likes your Roadster and dislikes empty factories. Your company has built ~1,000 cars. Ever.",
     voice:"Franz von Holzhausen, design chief, on the catwalk above the silent assembly hall: \"It echoes. Imagine when it doesn't.\"",
     choices:[
      {label:"Buy the cathedral. Demand will fill it — or we'll die trying", fx:{cashflow:+3,marketshare:+14,stockprice:+7}, set:["fremont"],
       result:"A world-class plant for four cents on the dollar, with Toyota's blessing as a bonus. You now own more factory than ambition — temporarily.",
       hist:"Real: the Fremont deal closed in 2010 and still builds Teslas today."},
      {label:"Too much, too soon — contract manufacturing keeps us asset-light", fx:{cashflow:+4,marketshare:-6,stockprice:-3}, set:["contract_mfg"],
       result:"The consultants love it. You'll learn what 'asset-light' means when your product is someone else's side project."},
      {label:"Buy a modest plant sized to honest demand forecasts", fx:{marketshare:+6}, set:["small_plant"],
       result:"Prudent. Adult. And when demand strikes later, you'll be expanding a small building instead of filling a big one."}
     ]},
    {id:"ipo", year:"JUN 2010", title:"Ring the Bell",
     text:"No American car company has gone public since Ford in 1956 — and Ford was profitable. The S-1 will expose every number to every short seller on Earth, forever. In exchange: ~$226M and a currency called TSLA.",
     alt:[{if:"daimler", text:"No American car company has gone public since Ford in 1956. Daimler's stake lets your bankers pitch you as 'validated by the inventors of the automobile'. Roadshow demand is real. So is the scrutiny."}],
     choices:[
      {label:"Go public now, at the bottom of the worst market in decades", fx:{cashflow:+13,stockprice:+8}, set:["public"],
       fxIf:[{if:"daimler", fx:{stockprice:+3}, note:"Daimler's stake anchors the book — institutions that ignore startups follow Stuttgart's money."}],
       result:"TSLA opens at $17 and closes up 41%. You now have a war-chest currency and a permanent, well-funded enemy: everyone short the stock.",
       hist:"Real: Tesla IPO'd June 29, 2010 — the first US automaker IPO since Ford."},
      {label:"Stay private — quarterly earnings are a metronome for cowards", fx:{cashflow:+4,stockprice:-2}, set:["private"],
       result:"You raise less from VCs at a worse price, but nobody marks your homework four times a year. You'll learn what that costs in 2013."},
      {label:"Wait a year for prettier numbers", fx:{cashflow:-4}, set:["public"],
       result:"The numbers improve slower than the cash burns. You IPO anyway in 2011, into a worse window, having paid a year of runway for vanity."}
     ]},
    {id:"models", year:"2011", title:"The Whole Company on One Car",
     text:"Roadster production ends this year. After it: nothing, unless the Model S ships — designed, engineered, certified, and MANUFACTURED by you. Engineering wants 2013 'to do it right'; finance notes there's no 2013 without 2012 revenue.",
     alt:[{if:"contract_mfg", text:"Roadster production ends. The Model S must ship through your contract manufacturer, whose A-team is assigned to a client's minivan refresh. Your launch date is, in effect, their decision."}],
     voice:"Peter Rawlinson, chief engineer: \"The architecture is right. The timeline is religion. Pick which one we die for.\"",
     choices:[
      {label:"Hard date: June 2012. Move your desk to the factory floor", fx:{cashflow:-4,marketshare:+10,stockprice:+7},
       fxIf:[{if:"fremont", fx:{marketshare:+4}, note:"Owning Fremont pays off — when a line jams, you reroute it that afternoon, not after a partner committee meets."},
             {if:"contract_mfg", fx:{marketshare:-6}, note:"Your hard date meets your partner's change-order process. June becomes 'June, plus escalation fees'."}],
       result:"Brutal months. Engineers sleep under desks; so do you. A deadline with a CEO attached behaves differently than one in an email.",
       hist:"Real: first Model S deliveries — June 22, 2012."},
      {label:"Slip to 2013 — a bad first impression is forever", fx:{cashflow:-8,marketshare:+4,stockprice:-6},
       result:"The car gets better. The company gets poorer. Reservation-holders get Audis."},
      {label:"Ship 2012 as a stripped 'Signature-only' trickle, ramp later", fx:{cashflow:+2,marketshare:+4,stockprice:-1},
       result:"Technically on time. Reviewers note the $90k car has cup holders 'coming via software update'."}
     ]},
    {id:"partner_hell", year:"2012", title:"Partner Purgatory", cond:"contract_mfg",
     text:"Your contract manufacturer treats the Model S as a side project behind higher-volume clients. Quality varies line to line, and every engineering change becomes a change-order negotiation. You no longer fully control your own car.",
     choices:[
      {label:"Buy out of the contract and bring assembly fully in-house, whatever it costs", fx:{cashflow:-9,marketshare:+8,stockprice:+4}, set:["fremont"],
       result:"Painful and expensive — and the moment Tesla stops being a design house and becomes a manufacturer. You should have bought the cathedral."},
      {label:"Stay the course and manage the partner harder", fx:{cashflow:+2,marketshare:-5,stockprice:-3},
       result:"More meetings, same problems. Their A-team is never going to be your A-team."},
      {label:"Split production across a second contract manufacturer for leverage", fx:{cashflow:-4,marketshare:-2},
       result:"Now you have two partners' quality variances to reconcile and twice the change-order paperwork."}
     ]},
    {id:"q1survival", year:"MAY 2013", title:"The Quarter That Couldn't Miss",
     text:"Tesla has never posted a profitable quarter. The cash position is thin again, the shorts are circling, and your sales team is delivering cars to customers personally to book revenue before the books close. One miss and the death-watch narrative returns for good.",
     choices:[
      {label:"All hands to delivery — book every possible car this quarter, then announce the first profit loudly", fx:{cashflow:+9,marketshare:+6,stockprice:+12}, set:["first_profit"],
       result:"Tesla posts its first-ever quarterly profit. The stock nearly doubles in weeks, you repay the DOE loan nine years early, and the 'walking dead' story finally dies.",
       hist:"Real: Tesla's Q1 2013 profit and early DOE loan repayment marked its turn from survival to scaling."},
      {label:"Play it conservatively — protect cash, accept a softer quarter and a calmer story", fx:{cashflow:+4,stockprice:-4},
       result:"Prudent, and a missed chance to break the narrative when it mattered most. The shorts get one more quarter of oxygen."},
      {label:"Raise capital first, then report — fortify the balance sheet before the spotlight", fx:{cashflow:+7,stockprice:-2},
       result:"Safer, with a side of dilution. You buy insurance against a quarter that turned out not to need it."}
     ]}
   ]
  }
 }
};
DATA.tesla.eras.b = {
   name:"The Reckoning Era", years:"2013–2016", start:{cashflow:42, marketshare:38, stockprice:48}, stock0:22,
   intro:"December 2013. The Gigafactory is a name on a press release and nothing on the ground. Tesla is solvent for the first time in its life, but solvency is not the same as maturity. Over the next thirty months you have to prove Model S was not a fluke — ship a second car nobody has ever built anything like, push autonomy software into customers' hands before the world is ready to trust it, and survive your own appetite for spectacle. Bankruptcy is no longer the enemy. Your own ambition is.",
   scenarios:[
    {id:"topgear", year:"FEB–MAR 2013", title:"The Top Gear Verdict",
     text:"The UK Court of Appeal is about to rule on Tesla's libel suit against the BBC's Top Gear, which aired Jeremy Clarkson supposedly running a Roadster out of charge and pushing it into a hangar in 2008. You maintained the cars never dropped below 20% — and the case has dragged on for two years. The Model S is winning real reviews now. Do you keep fighting a five-year-old grudge in court, or let the market render its own verdict?",
     voice:"Musk, February 2013 blog post: the Top Gear crew worked from a \"pre-determined\" storyline anticipating the car would run out of charge — his allegation, never adjudicated in Tesla's favor.",
     choices:[
      {label:"Press the appeal to the bitter end — media credibility is worth the legal spend", fx:{cashflow:-3,stockprice:-4},
       result:"The Court of Appeal dismisses Tesla's claim: no reasonable viewer would mistake closed-track theatrics for a real test. Two years and real money spent re-litigating a grudge the market had already settled.",
       hist:"Real: Tesla lost the appeal in 2013; Musk's blog post allegation was never adjudicated in Tesla's favor by any court."},
      {label:"Drop it quietly — let Model S sales speak instead", fx:{cashflow:+2,stockprice:+3},
       result:"Lawyers grumble about sunk costs. Nobody else remembers the Roadster segment by spring; they're all talking about the Model S instead."},
      {label:"Skip the courtroom, fight it in public — blog posts and interviews", fx:{stockprice:-2},
       result:"Musk's blog post gets attention but doesn't change a single legal fact. The allegation lingers online, unresolved, the way allegations do."}
     ]},
    {id:"gigasite", year:"JUN–SEP 2014", title:"Choosing Nevada",
     text:"Five states — Nevada, Arizona, New Mexico, Texas, California — are bidding for the Gigafactory and its 6,500 promised jobs. You've already begun grading a site near Reno before any state has formally won the deal. Whoever you choose needs to move fast, or the battery cost curve underpinning Model 3 economics slips a year.",
     choices:[
      {label:"Take Nevada's $1.25B incentive package over 20 years", fx:{cashflow:+12,marketshare:+6,stockprice:+5}, set:["nevada"],
       result:"Nevada closes the deal September 4, 2014 — free land, a near-total tax holiday for a decade, options on thousands of adjacent acres. Critics ask why a company that's never posted an annual profit gets a $1.25B taxpayer bet.",
       hist:"Real: Tesla selected Nevada Sept 4, 2014; the deal closed Oct 28, 2014."},
      {label:"Stay in California — proximity to Fremont matters more than incentives", fx:{cashflow:-6,marketshare:+2}, set:["calif_giga"],
       result:"Home-state loyalty plays well in the press. The weaker incentive package means the factory costs more and breaks ground later."},
      {label:"Hedge — pursue parallel site negotiations in two states at once", fx:{cashflow:-3,stockprice:-2},
       result:"Playing states against each other works on spreadsheets and poisons relationships in person. You eventually pick one anyway, later than you wanted to."}
     ]},
    {id:"hw1", year:"SEP 2014", title:"Shipping the Hardware Before the Software",
     text:"Mobileye has built you a first-generation autonomy sensor suite — one camera, twelve ultrasonic sensors, radar. The software that will actually use it, Autopilot 1.0, is more than a year from ready. Do you install the hardware in every Model S now, betting you can activate the features later over the air?",
     choices:[
      {label:"Install Hardware 1 fleet-wide now — update the software later", fx:{cashflow:-4,marketshare:+6,stockprice:+5}, set:["hw1_early"],
       result:"Tens of thousands of cars ship with capability the company hasn't built yet. It becomes a defining Tesla pattern: ship the hardware, promise the software. Fleet-wide upgrade reach becomes a real advantage — eventually.",
       hist:"Real: Tesla began installing Hardware 1 in Sept 2014, over a year before Autopilot 7.0 shipped in Oct 2015."},
      {label:"Wait until the software is feature-complete and tested", fx:{cashflow:+3,marketshare:-4},
       result:"Cautious and defensible. It also means no fleet-learning head start when the software finally does ship."},
      {label:"Offer it only as a paid, opt-in option once both pieces are ready together", fx:{cashflow:+5,marketshare:-2},
       result:"Cleaner sales conversations, slower fleet data accumulation, and a much smaller installed base when Autopilot 1.0 eventually launches."}
     ]},
    {id:"autopilot1", year:"14 OCT 2015", title:"Releasing Autopilot 1.0",
     text:"Version 7.0 is ready — Autosteer, Auto Lane Change, Autopark, automatic emergency steering. No automaker has ever pushed a hands-off-capable driving feature to ordinary customers' existing cars overnight, with no dealer visit and no training session. Your hardware bet from last year is about to be tested in public.",
     alt:[{if:"hw1_early", text:"Version 7.0 is ready, and because you shipped Hardware 1 across the whole fleet a year ago, every eligible Model S on the road can receive it overnight — the bet you made in 2014 is about to be tested for real."}],
     voice:"Musk, October 2015: \"We're advising drivers to keep their hands on the wheel\" — a real caution issued alongside marketing language describing Autopilot as relieving drivers of \"the most tedious and potentially dangerous aspects of road travel.\"",
     choices:[
      {label:"Push it nationwide overnight to the entire eligible fleet, as planned", fx:{cashflow:-2,marketshare:+10,stockprice:+9}, set:["ap_fast"],
       fxIf:[{if:"hw1_early", fx:{marketshare:+3}, note:"The fleet-wide hardware bet pays off exactly as designed — there's no retrofit queue, no waiting list."}],
       result:"Adoption and praise are immediate; Autopilot becomes a defining brand draw. Within a year, the first fatal Autopilot-involved crashes occur, and Mobileye walks away from the partnership in July 2016 over how aggressively you're deploying it.",
       hist:"Real: 7.0 shipped Oct 14, 2015; fatal Autopilot crashes followed in China (Jan 2016) and Florida (May 2016); Mobileye ended the partnership in July 2016."},
      {label:"Stage the rollout — limited regions or cohorts first", fx:{cashflow:-1,marketshare:+4,stockprice:+3},
       result:"Slower headlines, slower data, fewer surprises. The press calls it timid; safety engineers call it Tuesday."},
      {label:"Delay for more validation and an in-person briefing process", fx:{marketshare:-3,stockprice:-2},
       result:"It is, by any engineering standard, the more careful choice. It is also completely against how Tesla sells cars, and the company culture fights you on it the whole way."}
     ]},
    {id:"falcondoors", year:"MAR 2014 – SEP 2015", title:"The Falcon-Wing Door Gamble",
     text:"Model X's double-hinged falcon-wing rear doors have no precedent in mass production. Your hydraulics supplier, Hoerbiger, has repeatedly failed to deliver a working mechanism that meets tolerance — and the doors still need structural beams for side-impact safety. The car is already a year late. Do you keep the doors?",
     choices:[
      {label:"Keep the falcon wings — switch to electromechanical actuators and eat the delay", fx:{cashflow:-9,marketshare:+3,stockprice:+2}, set:["falcon_kept"],
       result:"Tesla abandons the failed hydraulic approach, switches engineering tracks entirely, and later sues Hoerbiger over the wasted development. Model X slips roughly two years late — but the doors ship.",
       hist:"Real: Tesla switched to electromechanical actuators and sued Hoerbiger in 2016; Model X deliveries finally began Sept 29, 2015."},
      {label:"Abandon the falcon wings for a conventional liftgate to protect the launch date", fx:{cashflow:+5,marketshare:-6,stockprice:-3},
       result:"The car ships closer to schedule and reviewers call it a conventional, slightly disappointing SUV. The single most distinctive thing about it is gone."},
      {label:"Keep pursuing Hoerbiger's hydraulic approach despite repeated failures", fx:{cashflow:-7,stockprice:-5},
       result:"More months burned chasing a fix that was never going to arrive. You switch approaches eventually anyway, just later and angrier."}
     ]},
    {id:"modelxlaunch", year:"29 SEP 2015", title:"Launching Model X — Doors First, Specs Later", cond:"falcon_kept",
     text:"Two years late, you finally hand over the first Model X Signature Series units. The falcon-wing doors are the obvious headline. Do you make them the centerpiece of the launch event, or play it safer given how much could still go wrong on day one?",
     choices:[
      {label:"Make the doors the centerpiece of a theatrical handover event", fx:{marketshare:+7,stockprice:+6},
       result:"Strong initial demand and a daring-design reputation reinforced — but early units ship with door sensor problems, sealing issues, and electrical gremlins that Consumer Reports and owners flag within months.",
       hist:"Real: Tesla staged a public handover event Sept 29, 2015 spotlighting the falcon-wing doors; early quality issues followed."},
      {label:"Foreground range, safety, and towing — treat the doors as one feature among many", fx:{marketshare:+3,stockprice:+2},
       result:"A more measured launch. Less viral, fewer 'why did they let this ship' threads when the inevitable door issues surface anyway."},
      {label:"Hold a smaller, lower-key delivery event given how much already slipped", fx:{stockprice:-2},
       result:"Muted press coverage for a car that took two years longer than promised. Quiet confidence reads, to outsiders, a lot like nervousness."}
     ]},
    {id:"superchargers2", year:"2013–2015", title:"Funding Free Charging as a Moat",
     text:"Model S volumes are rising and the Supercharger network needs to keep expanding — fast, and free for life, which has real and compounding capital cost as the fleet grows. Do you keep pouring money into a free, exclusive network, or start charging users to offset the buildout?",
     choices:[
      {label:"Keep expansion aggressive and charging free — it's a sales differentiator, not a cost center", fx:{cashflow:-7,marketshare:+8,stockprice:+8}, set:["free_charging"],
       result:"From roughly 50 US and 14 European stations in 2013 to thousands of stalls by 2015, extending into China, Japan, and Hong Kong. Free Supercharging directly answers the range-anxiety objection holding back EV adoption industry-wide.",
       hist:"Real: Tesla expanded the Supercharger network aggressively 2013–2015 while keeping it free for existing owners."},
      {label:"Slow expansion to control capital spend", fx:{cashflow:+5,marketshare:-5,stockprice:-3},
       result:"The balance sheet looks tidier. The range-anxiety pitch to prospective buyers gets noticeably weaker."},
      {label:"Open the network to other automakers' EVs for a fee", fx:{cashflow:+4,marketshare:-3},
       result:"New revenue, diluted exclusivity. Tesla owners notice the chargers are busier and the bragging rights are gone."}
     ]},
    {id:"solarcity_prelude", year:"2014", title:"Championing SolarCity, Before Anyone Asked",
     text:"Years before any formal acquisition vote, you're publicly promoting closer ties between Tesla and SolarCity — the solar installer co-founded by your cousins, where you're chairman and largest shareholder. SolarCity wants to build a massive new panel factory in Buffalo. How loudly do you back it?",
     choices:[
      {label:"Champion SolarCity's Buffalo expansion publicly, lending Tesla's brand halo and your own credibility", fx:{stockprice:-3}, set:["solarcity_champion"],
       result:"Your personal advocacy and reputation become intertwined with SolarCity's at the same time you're running Tesla — without a merger yet on the table, but setting up exactly the perception problem critics will cite when the 2016 acquisition vote arrives.",
       hist:"Real: Musk personally promoted SolarCity's Buffalo plant plans in 2014; shareholder lawsuits over the eventual 2016 deal were ultimately resolved in Tesla/Musk's favor by Delaware's Chancery Court in 2022."},
      {label:"Keep Tesla and SolarCity entirely separate — manage the chairman role at arm's length", fx:{stockprice:+3},
       result:"Cleaner optics now. It also means less public momentum behind SolarCity's fundraising and incentive negotiations, for whatever that's worth to a company you don't run."},
      {label:"Quietly begin preparing the case for an eventual formal merger", fx:{cashflow:-2,stockprice:-1},
       result:"Low-key groundwork. Nobody outside a small circle notices yet — but the paper trail exists, and paper trails get subpoenaed."}
     ]},
    {id:"fremont_bet", year:"2014–2016", title:"Fremont's Empty Capacity Becomes the Model 3 Bet",
     text:"Fremont was built for roughly half a million cars a year; through the Survival Era it ran at a tiny fraction of that. With the Gigafactory under construction, do you commit Fremont's underused capacity hard to an eventual mass-market car — years before that car is even revealed?",
     alt:[{if:"nevada", text:"Fremont was built for half a million cars a year and the Gigafactory you just sited in Nevada is about to start feeding it cheaper cells. Do you commit Fremont's underused capacity hard to the mass-market car that Gigafactory is meant to supply?"}],
     choices:[
      {label:"Commit early and heavily — retool Fremont for high-volume production now", fx:{cashflow:-5,marketshare:+9,stockprice:+6}, set:["fremont_committed"],
       fxIf:[{if:"nevada", fx:{marketshare:+3}, note:"Nevada's cell supply and Fremont's retooling are built to arrive together — the bet compounds instead of just adding up."}],
       result:"Tesla treats its oversized, underused capacity as a long-term asset rather than an embarrassment — setting up the Model 3 unveil and the frantic, improvised expansion (including a literal tent) once 400,000+ reservations arrive within weeks.",
       hist:"Real: Tesla scaled Fremont in place ahead of the March 2016 Model 3 reveal and the reservation wave that followed."},
      {label:"Keep Fremont focused on Model S/X-scale output; revisit once a design is locked", fx:{cashflow:+3,marketshare:-4},
       result:"Prudent. It also means starting the mass-market retooling conversation later than rivals would like you to."},
      {label:"Build or lease a separate, dedicated plant for the future car instead", fx:{cashflow:-8,marketshare:-2},
       result:"A clean-sheet plant sounds smart on a whiteboard and costs a fortune and years you don't have in reality."}
     ]}
   ]
};
DATA.tesla.eras.c = {
   name:"Scaling Era", years:"2016–2021", start:{cashflow:45, marketshare:35, stockprice:55}, stock0:45,
   intro:"It's 2016. The Model 3 just collected 400,000 deposits in weeks. Now you have to actually build it — and survive 'production hell', the SEC, and a pandemic.",
   scenarios:[
    {year:"2016", title:"400,000 Deposits", text:"Demand for the Model 3 is overwhelming. The plan said 2017 for early production. Do you pull the schedule forward and aim for volume manufacturing years ahead of any sane timeline?",
     choices:[
      {label:"Accelerate everything — 500k cars/year by 2018", fx:{cashflow:-7,marketshare:+8,stockprice:+7}, result:"Suppliers think you're insane. Some quote you accordingly. But the machine starts moving at startup speed.", hist:"Real: Musk pulled the 500k target forward two years to 2018."},
      {label:"Hold the original cautious ramp", fx:{cashflow:+4,marketshare:+2,stockprice:-6}, result:"Deposit holders drift away to other EVs now reaching market. The moment cools."},
      {label:"Raise prices to throttle demand", fx:{cashflow:+6,stockprice:-7}, result:"Margins improve; the 'affordable Tesla for everyone' promise quietly dies."}
     ]},
    {year:"2016", title:"The SolarCity Question", text:"SolarCity — run by your cousins, chaired by you — is nearly insolvent. A $2.6B all-stock acquisition would create an integrated clean-energy company. Critics call it a bailout of your own family's firm.",
     choices:[
      {label:"Acquire it — the master plan needs solar", fx:{cashflow:-8,marketshare:-4,stockprice:-6}, result:"Shareholders approve it, lawsuits follow, and the solar business distracts from Model 3 at the worst time.", hist:"Real: the 2016 deal triggered years of litigation; Musk eventually won in court."},
      {label:"Let it fail — Tesla can't afford passengers", fx:{stockprice:+4}, result:"Painful family dinners, but Tesla stays focused. A solar partnership comes later on better terms."},
      {label:"Acquire only the Solar Roof technology and key engineers", fx:{cashflow:-4,stockprice:+2}, result:"You get the interesting tech without the debt-laden installer business."}
     ]},
    {year:"2017", title:"The Alien Dreadnought", text:"Your plan: hyper-automate Model 3 assembly beyond anything in auto history — robots even for final assembly, where humans have always ruled.",
     choices:[
      {label:"Full automation — the machine that builds the machine", fx:{cashflow:-8,marketshare:-7}, result:"The robots fumble what human hands do trivially. Lines jam. You will later admit: 'Excessive automation was a mistake. Humans are underrated.'", hist:"Real: Musk tweeted exactly that in April 2018 after the automation push backfired."},
      {label:"Conventional line with selective automation", fx:{cashflow:-4,marketshare:+7}, result:"Boring, proven, effective. Toyota engineers nod approvingly."},
      {label:"Automate body shop only; humans do final assembly", fx:{cashflow:-6,marketshare:+4}, result:"A sensible hybrid. The ramp is slow but never fully stalls."}
     ]},
    {year:"2018", title:"Production Hell", text:"Model 3 output is a fraction of target. You're burning ~$100M a week. Wall Street says bankruptcy within months. Your team is shattered.",
     choices:[
      {label:"Build a third assembly line in a tent and sleep at the factory", fx:{cashflow:-6,marketshare:+13,stockprice:+6}, result:"GA4 — a production line under a giant tent — works. 5,000 cars/week is hit in the last week of June 2018.", hist:"Real: the tent line was mocked, then it delivered the target."},
      {label:"Raise capital and slow the ramp to sane speed", fx:{cashflow:+7,marketshare:+2,stockprice:-7}, result:"Survival secured, momentum lost. Shorts feast on every delayed quarter."},
      {label:"Outsource overflow assembly to a contract manufacturer", fx:{cashflow:-4,marketshare:+4,stockprice:-4}, result:"Quality variance between plants becomes a persistent headache."}
     ]},
    {year:"2018", title:"'Funding Secured'", text:"Exhausted, besieged by shorts, you're tempted to tweet that you're taking Tesla private at $420/share, funding secured. The Saudis did express interest...",
     choices:[
      {label:"Send the tweet", fx:{cashflow:-6,stockprice:-13}, result:"Chaos. SEC fraud charges, a $40M settlement, you lose the chairman role for 3 years, and a 'Twitter sitter' reviews your market-moving tweets.", hist:"Real: the Aug 7, 2018 tweet cost Musk and Tesla $20M each in SEC fines."},
      {label:"Don't tweet. Call the board about going private properly", fx:{stockprice:+4}, result:"The process quietly dies — public markets are actually serving you fine. Crisis avoided."},
      {label:"Tweet something vague about 'exploring options'", fx:{stockprice:-4}, result:"Still reckless, less actionable. The SEC sends a warning letter instead of a lawsuit."}
     ]},
    {year:"2019", title:"Shanghai Speed", text:"China offers something unprecedented: a wholly-owned foreign car factory, no joint venture required, with cheap land and loans. But it means betting your growth on Beijing's goodwill.",
     choices:[
      {label:"Build Giga Shanghai at maximum speed", fx:{cashflow:-6,marketshare:+14,stockprice:+7}, result:"Permits to production in under a year — the fastest auto plant ever built. China becomes your second engine.", hist:"Real: Giga Shanghai broke ground Jan 2019 and delivered cars by Dec 2019."},
      {label:"Decline — too much geopolitical risk", fx:{marketshare:-4,stockprice:-4}, result:"Prudent, maybe. But Chinese EV makers fill the space at terrifying speed and you fight them with imports and tariffs."},
      {label:"Insist on a 50/50 joint venture for political cover", fx:{cashflow:-3,marketshare:+6}, result:"Slower, with shared IP — the very model you'd been offered the chance to skip."}
     ]},
    {year:"2019", title:"Cybertruck Reveal", text:"Pickup trucks are America's most profitable segment. Design has two candidates: a conventional handsome truck, or a stainless-steel low-poly wedge that looks like a rendering error.",
     choices:[
      {label:"The wedge. Smash a steel ball into its 'unbreakable' window on stage", fx:{stockprice:+7}, result:"The window cracks. The clip goes viral forever. So does the truck — 250k reservations in a week. There's no such thing as bad publicity.", hist:"Real: the Nov 2019 reveal flopped on stage and won anyway."},
      {label:"Conventional truck aimed at F-150 owners", fx:{marketshare:+4,stockprice:-2}, result:"It benchmarks well and is forgotten by Monday. Cyber-nothing."},
      {label:"Delay trucks; focus on the Model Y crossover", fx:{cashflow:+4,marketshare:+4}, result:"The Y will quietly become the world's best-selling car. Less fun, more money."}
     ]},
    {year:"2020", title:"Pandemic Defiance", text:"COVID lockdowns close Fremont. You call the orders 'fascist' and threaten to reopen in defiance of county health rules, daring authorities to arrest you.",
     choices:[
      {label:"Reopen in defiance", fx:{cashflow:+4,marketshare:+7,stockprice:-6}, result:"Production resumes, no one is arrested, and the episode permanently politicizes the brand.", hist:"Real: Tesla reopened Fremont May 2020 against county orders; charges never came."},
      {label:"Comply and negotiate a safe-reopening plan", fx:{cashflow:-4,marketshare:+2,stockprice:+4}, result:"Two extra weeks of downtime in exchange for goodwill you'll want later."},
      {label:"Comply, but announce HQ and future factories will leave California", fx:{marketshare:+4}, result:"Texas wins Giga Austin. California keeps Fremont and a grudge."}
     ]},
    {year:"2020", title:"S&P 500 and a Mountain of Cash", text:"Five straight profitable quarters. TSLA joins the S&P 500 and the stock is up ~700% on the year. You can sell stock at absurd prices. How much do you raise?",
     choices:[
      {label:"Raise $12B+ across multiple offerings — fortress balance sheet", fx:{cashflow:+18,marketshare:+4,stockprice:+4}, result:"You sell shares at prices skeptics call insane. The war chest funds two new Gigafactories without debt.", hist:"Real: Tesla raised ~$12B in 2020 and ended the year with $19B cash."},
      {label:"Raise nothing — dilution is theft", fx:{stockprice:+2}, result:"Purist, and a missed once-in-a-decade window."},
      {label:"Raise $5B and put some treasury cash in Bitcoin", fx:{cashflow:+8,stockprice:-2}, result:"The $1.5B Bitcoin buy makes headlines and adds earnings volatility forever after.", hist:"Real: Tesla bought $1.5B of Bitcoin in early 2021."}
     ]},
    {year:"2021", title:"Full Self-Driving Pricing", text:"FSD is a $10k software option that isn't fully self-driving. Engineers want caution; finance notes it's nearly pure margin; regulators are circling.",
     choices:[
      {label:"Sell it hard — beta to customers, price rising over time", fx:{cashflow:+8,stockprice:-6}, result:"Revenue is fantastic. So is the regulatory and legal exposure every time a beta driver does something stupid.", hist:"Real: FSD beta expanded through 2021 amid NHTSA scrutiny."},
      {label:"Rebrand honestly as 'advanced driver assistance'", fx:{cashflow:+3,stockprice:+4}, result:"Less sizzle, fewer lawsuits. Trust compounds quietly."},
      {label:"Subscription only — $199/month, cancel anytime", fx:{cashflow:+6,stockprice:+2}, result:"Lower sticker shock, recurring revenue, easier consciences."}
     ]},
    {year:"2021", title:"The Chip Famine", text:"The global semiconductor shortage is shutting down auto plants worldwide. Legacy automakers are cancelling orders and waiting it out.",
     choices:[
      {label:"Rewrite your firmware to use whatever chips ARE available", fx:{cashflow:-3,marketshare:+10,stockprice:+6}, result:"Your software team substitutes alternative chips in 19 weeks. Tesla grows 87% in a year when rivals shrink.", hist:"Real: Tesla's 2021 firmware rewrites let it sidestep the worst of the shortage."},
      {label:"Pay scalper prices on the spot market", fx:{cashflow:-8,marketshare:+6}, result:"Expensive but effective. Margins take the hit."},
      {label:"Idle plants like everyone else", fx:{cashflow:+2,marketshare:-8,stockprice:-6}, result:"You behave like a legacy automaker and get legacy-automaker results."}
     ]},
    {year:"2021", title:"Trillion-Dollar Question", text:"Tesla passes $1T in value — worth more than the next nine automakers combined. Final call: what do you tell the world the next decade is about?",
     choices:[
      {label:"Robots, AI and energy — Tesla is not a car company", fx:{marketshare:+4,stockprice:+8}, result:"Optimus, Dojo, Megapack. The valuation only makes sense if you're right. You're betting the company that you are.", hist:"Real: Tesla unveiled the Optimus robot concept in 2021 and leaned hard into AI."},
      {label:"Affordable cars for the next billion drivers", fx:{cashflow:-4,marketshare:+8,stockprice:+4}, result:"The $25k car becomes the obsession. Volume is the mission; the mission is volume."},
      {label:"Consolidate — quality, service and reliability first", fx:{cashflow:+6,marketshare:+4}, result:"Panel gaps close, service improves, the install base stops grumbling. Unsexy excellence."}
     ]}
   ]
};
DATA.tesla.eras.d = {
   name:"Empire of Distraction", years:"2021–2026", start:{cashflow:62, marketshare:58, stockprice:70}, deep:true, stock0:68,
   intro:"2021. Tesla just crossed a trillion dollars in value, worth more than the next nine automakers combined — and somehow that is the least complicated thing about the next five years. Production hell is over; a different kind of hell begins. You will buy a social media company, fight a price war with the company you helped legitimize, put a robot on a factory floor, and defend your own pay package in a Delaware courtroom. The question stops being whether Tesla survives. It becomes whether Tesla is still, in any way that matters, a car company.",
   scenarios:[
    {id:"twitter", year:"APR–OCT 2022", title:"Buying Twitter — and Funding It With Tesla Stock",
     text:"You've agreed to acquire Twitter for $44 billion, a deal you'll spend months trying to escape before litigation forces you to complete it. To fund your personal equity contribution, you need to raise serious cash — and the fastest source is your own Tesla shares, even as Tesla itself faces softening demand and rising rates.",
     voice:"Leo KoGuan, top individual Tesla shareholder, December 2022: \"Tesla has no working CEO.\"",
     choices:[
      {label:"Sell roughly $23B of Tesla stock over 2022 to fund the deal", fx:{cashflow:+10,stockprice:-15}, set:["sold_tsla_twitter"],
       result:"The $44B deal closes October 27, 2022. Tesla stock falls 65% over the year, and analysts attribute a large share of the decline specifically to investor fear that you are no longer paying attention to the company that made you rich.",
       hist:"Real: the deal closed Oct 27, 2022; Tesla shares fell 65% in 2022; one widely cited estimate attributed roughly 70% of the late-2022 decline to the Twitter distraction."},
      {label:"Try to walk away from the deal entirely", fx:{cashflow:+3,stockprice:-6},
       result:"Twitter's lawyers and a Delaware court make it clear walking away isn't actually an option. You complete the deal anyway, just later and angrier, having spent goodwill for nothing."},
      {label:"Lean harder on outside equity co-investors to minimize personal Tesla sales", fx:{cashflow:-4,stockprice:-3},
       result:"You bring in more outside capital than you otherwise would have, but the bulk of your personal contribution still has to come from somewhere, and Tesla stock is still the most liquid thing you own."}
     ]},
    {id:"berlin4680", year:"OCT 2022", title:"Berlin's Battery Bet",
     text:"Gigafactory Berlin was designed to build your new in-house '4680' battery cell on-site, but the cell line keeps failing through 2022. Do you keep fighting to make 4680 work in Germany, or pull that investment out while Berlin assembles cars on cells from outside suppliers?",
     choices:[
      {label:"Move the 4680 equipment to Texas; supply Berlin from CATL and LG instead", fx:{cashflow:+4,marketshare:+5,stockprice:+3}, set:["berlin_external_cells"],
       result:"Berlin becomes primarily a vehicle-assembly site rather than the vertically integrated plant you'd envisioned — a pragmatic retreat that lets Model Y output in Europe keep climbing without waiting on an immature cell technology.",
       hist:"Real: Tesla moved 4680 manufacturing equipment from Berlin to Texas in late 2022; Berlin reached 5,000 cars/week by March 2023 using externally supplied cells."},
      {label:"Keep investing in Berlin 4680 production regardless of delay", fx:{cashflow:-8,marketshare:-3},
       result:"Months of additional engineering spend against a cell format that still isn't ready. Berlin's vehicle ramp slows waiting on a battery line that won't cooperate."},
      {label:"Pause all new cell-format investment system-wide; rely entirely on external suppliers everywhere", fx:{cashflow:+6,stockprice:-2},
       result:"Cheaper and safer in the short term. It also quietly concedes that the vertically-integrated battery story you've been telling investors for years isn't actually happening yet."}
     ]},
    {id:"chinapricewar", year:"OCT 2022 – JAN 2023", title:"Firing the First Shot in China's EV Price War",
     text:"China's EV market is cooling and BYD is closing the gap fast with cheaper, increasingly capable cars. Do you defend Tesla's prices and margins, or move first to cut and protect volume at the cost of profitability?",
     alt:[{if:"berlin_external_cells", text:"Berlin's pragmatic retreat freed up capital, and now China's EV market is cooling while BYD closes the gap fast. Do you spend that breathing room defending Tesla's margins, or cut prices first to protect volume?"}],
     choices:[
      {label:"Cut prices aggressively and repeatedly to defend volume", fx:{cashflow:-9,marketshare:+10,stockprice:-4}, set:["price_war"],
       result:"Existing owners are furious that cars they just bought were repriced lower within days — reports of customers storming showrooms demanding compensation follow in January 2023. Margins compress hard through 2023–2024, and Tesla is still briefly overtaken by BYD as the world's best-selling EV brand by volume in Q4 2023.",
       hist:"Real: Tesla began cutting China prices Oct 2022, escalating sharply Jan 2023; BYD briefly overtook Tesla in global EV volume in Q4 2023."},
      {label:"Hold price and accept a slower China growth trajectory", fx:{cashflow:+5,marketshare:-9,stockprice:-2},
       result:"Margins stay healthy. Market share in your most important growth market erodes month over month as BYD's cheaper cars keep improving."},
      {label:"Offer financing and insurance subsidies instead of headline price cuts", fx:{cashflow:-3,marketshare:+3},
       result:"A quieter way to soften the blow without a self-reinforcing price spiral — but it's slower to move volume than a straightforward price cut, and competitors cut headline prices anyway."}
     ]},
    {id:"cybertruckramp", year:"NOV 2023 – 2024", title:"Shipping a Truck the Factory Couldn't Yet Build at Volume",
     text:"Four years after its viral, technically unfinished 2019 reveal, Cybertruck is ready for first deliveries — but its stainless-steel exoskeleton makes it far harder to mass-produce than a normal truck, and Giga Texas is nowhere near the volumes you once implied.",
     choices:[
      {label:"Launch deliveries now at very low volume and ramp publicly", fx:{cashflow:-5,marketshare:+4,stockprice:+5}, set:["cyber_slow_ramp"],
       result:"Roughly 46,000 trucks built from November 2023 through early 2024 — far short of your own stated ambitions — before production meaningfully accelerates later in 2024, passing 1,000 units in a week by April.",
       hist:"Real: Cybertruck deliveries began Nov 2023 at very low volume; production passed 1,000 units/week by April 2024."},
      {label:"Delay the public delivery event further until manufacturing is closer to steady-state", fx:{cashflow:-2,stockprice:-5},
       result:"More disciplined, and it costs you another year of 'where's my truck' headlines from reservation holders who've been waiting since 2019."},
      {label:"Simplify the design for a running change to ease manufacturability", fx:{cashflow:+2,marketshare:-3,stockprice:-2},
       result:"Easier to build, and a betrayal-of-the-reveal story that reservation holders who bought into the original design do not let go of quietly."}
     ]},
    {id:"doge", year:"DEC 2024 – MAY 2025", title:"The Pivot to Washington",
     text:"After roughly $270 million spent supporting Trump's 2024 campaign, you take a prominent role leading the new Department of Government Efficiency inside the administration — pulling your time and attention away from Tesla just as Q1 2025 sales fall 13%, the company's worst quarter in nearly three years.",
     choices:[
      {label:"Take the DOGE role at full intensity regardless of the cost to Tesla's bandwidth", fx:{cashflow:-6,marketshare:-8,stockprice:-7}, set:["doge_full"],
       result:"You serve as a top adviser for roughly five months while Tesla's board reportedly discusses contingency planning around your level of engagement. You announce your departure in late May 2025, citing the end of your term as a Special Government Employee.",
       hist:"Real: Musk led DOGE for roughly five months before departing in late May 2025; Tesla's Q1 2025 sales fell 13%."},
      {label:"Decline or sharply limit the political role to protect Tesla's commercial position", fx:{cashflow:+3,marketshare:+4,stockprice:+4},
       result:"Less national political capital spent, fewer headlines, and a Tesla sales picture that doesn't carry the same drag — though it costs you standing with the political coalition you've spent real money building."},
      {label:"Accept the role but install stronger day-to-day operating leadership at Tesla", fx:{cashflow:-2,marketshare:+2,stockprice:+1},
       result:"A reasonable hedge on paper. In practice, the market still prices Tesla as a Musk-attention story, and installing a strong #2 doesn't fully insulate the stock from the headlines."}
     ]},
    {id:"teslatakedown", year:"FEB–JUL 2025", title:"Absorbing the 'Tesla Takedown' Boycott", cond:"doge_full",
     text:"Your political visibility has triggered an organized global backlash. 'Tesla Takedown' protests hit showrooms in over 250 cities; vandalism and arson attempts against Tesla vehicles and chargers are reported in multiple countries. European sales are cratering. Do you change course?",
     voice:"A documented protest chant reported at Tesla showroom demonstrations: \"Elon Musk can go to Mars; we don't need your Nazi cars\" — a real, widely reported chant, not a Tesla or Musk statement.",
     choices:[
      {label:"Don't change your public political posture; let new product cycles do the commercial talking", fx:{cashflow:-7,marketshare:-10,stockprice:-6}, set:["no_deescalate"],
       result:"European sales fall roughly 45% year-over-year in January 2025 alone — down ~60% in Germany and France specifically — even as overall European EV sales rise. A Yale-affiliated analysis later estimates your partisan political activity cost Tesla over 1 million vehicle sales versus a counterfactual where you'd stayed apolitical.",
       hist:"Real: Tesla's European sales fell ~45% YoY in Jan 2025; Q2 2025 deliveries were 384,122 vs. 443,956 a year earlier; the Yale Environment estimate is real and publicly cited."},
      {label:"Tone down the political activity and rhetoric to de-escalate", fx:{cashflow:+2,marketshare:+5,stockprice:+4},
       result:"A meaningful, if incomplete, recovery in sentiment. Some of the political coalition you built feels abandoned; some of the customers you lost don't come back regardless."},
      {label:"Run a defensive PR and marketing campaign emphasizing product over politics", fx:{cashflow:-2,marketshare:+2},
       result:"The campaign reassures some fence-sitters and changes nothing for people who've already decided the controversy is the whole story now."}
     ]},
    {id:"visiononly", year:"ONGOING, REAFFIRMED 2024–2025", title:"Betting Autonomy on Cameras Alone",
     text:"As Tesla prepares a real commercial robotaxi service, the company must decide — against years of industry consensus — whether to pursue full self-driving with cameras alone, or add lidar and radar for redundancy the way Waymo and most serious autonomy programs do.",
     choices:[
      {label:"Commit fully to vision-only — eight cameras, no lidar, radar dropped from new production", fx:{cashflow:+6,marketshare:+3,stockprice:+5}, set:["vision_only"],
       result:"Autonomy researchers call the lack of sensor redundancy 'fundamentally flawed'; NHTSA opens scrutiny into whether the camera system can reliably detect its own degradation from glare or fog. It also becomes the technical foundation Tesla uses to reach a real commercial robotaxi pilot years ahead of any competing automaker's owner-fleet ambitions.",
       hist:"Real: Tesla maintained a vision-only architecture through the Robotaxi launch; NHTSA opened related scrutiny; RMIT's Reza Hoseinnezhad publicly criticized the lack of redundancy."},
      {label:"Add lidar as a redundant sensing layer, matching industry-standard safety architecture", fx:{cashflow:-9,stockprice:-3},
       result:"A costlier, more conventional bet that brings Tesla's hardware stack closer to Waymo's — and walks back years of public commitment to the vision-only thesis Musk has staked his credibility on."},
      {label:"Pursue a hybrid — radar plus cameras, dropping only lidar", fx:{cashflow:-4,marketshare:+1},
       result:"A middle path that satisfies almost nobody: not as cheap as vision-only, not as redundant as full sensor fusion."}
     ]},
    {id:"robotaxi", year:"JUN 2025", title:"Launching Robotaxi in Austin — With a Human in the Car",
     text:"After years of promising fully autonomous robotaxis, Tesla finally launches a real, paid, commercial pilot. How much human backup do you keep in the loop on day one — balancing the credibility cost of 'not actually driverless yet' against the safety and regulatory risk of removing humans from an unproven system in public traffic?",
     alt:[{if:"vision_only", text:"The vision-only bet has finally produced a real, paid, commercial robotaxi pilot. How much human backup do you keep in the loop on day one, given how much scrutiny the camera-only system is already under?"}],
     choices:[
      {label:"Launch with a human safety monitor in the front seat, plus 24-hour remote monitoring", fx:{cashflow:+5,marketshare:+6,stockprice:+9}, set:["robotaxi_supervised"],
       result:"Paid rides begin in Austin on June 22, 2025 with a small fleet of about ten Model Ys in a narrow area of South Austin. The launch generates enormous press attention, even though 'robotaxi' slightly overstates what is, at launch, still a supervised pilot. The in-car monitor isn't removed for a subset of vehicles until December 2025.",
       hist:"Real: Tesla launched paid robotaxi rides in Austin June 22, 2025 with a human safety monitor and remote monitoring; the in-car monitor began being removed for some vehicles starting Dec 2025."},
      {label:"Launch genuinely driverless immediately in a small test area", fx:{cashflow:-6,marketshare:-4,stockprice:-8},
       result:"Materially higher tail risk on day one, for a 'fully autonomous' headline that's true in the narrowest possible sense. One bad incident in the first week would have set the entire program back years."},
      {label:"Delay the public launch further until remote monitoring is more mature", fx:{stockprice:-5},
       result:"More cautious, and it cedes the 'first real robotaxi service' headline to whichever competitor moves first while you wait."}
     ]},
    {id:"paypackage", year:"JAN 2024 – DEC 2025", title:"The $56 Billion Question",
     text:"Delaware's Court of Chancery rules your 2018 pay package — worth roughly $56 billion at time of ruling — was improperly granted and must be rescinded, even though shareholders twice voted to approve it. How hard does the board fight it?",
     choices:[
      {label:"Hold a fresh shareholder vote to re-ratify the package and appeal the ruling", fx:{cashflow:-3,stockprice:+6}, set:["repay_fight"],
       result:"The package passes a second shareholder vote; the Chancery Court judge rejects it as unfair a second time anyway. Tesla pursues reincorporation in Texas and takes the fight to the Delaware Supreme Court — which rules in December 2025 that the lower court's rescission was 'too extreme a remedy' and restores the package.",
       hist:"Real: the Delaware Supreme Court ruled in Dec 2025 that the Chancery Court's cancellation was 'too extreme,' restoring Musk's 2018 pay package after a two-year fight."},
      {label:"Accept the rescission and negotiate a new, smaller pay package", fx:{cashflow:+8,stockprice:-9},
       result:"A faster, cheaper resolution that ends the litigation risk — and concedes, in effect, that the largest executive compensation package in corporate history wasn't going to survive scrutiny."},
      {label:"Move Tesla's corporate registration to Texas while continuing to litigate in Delaware", fx:{cashflow:-2,marketshare:+1,stockprice:+2},
       result:"A symbolic and legal hedge against perceived hostility from Delaware courts, pursued alongside — not instead of — the underlying fight over the package itself."}
     ]},
    {id:"optimuspivot", year:"JAN–MAY 2026", title:"Ending Model S and Model X to Build Optimus at Fremont",
     text:"On the Q4 2025 earnings call you announce Tesla will end Model S and Model X production at Fremont — the cars that built its premium reputation and funded its survival a decade earlier — to free factory floor space for a dedicated Optimus humanoid robot line.",
     voice:"Musk, Q4 2025 earnings call: \"It's time to basically bring the Model S and X programs to an end with an honorable discharge, because we're really moving into a future that is based on autonomy.\"",
     choices:[
      {label:"End Model S/X production; convert the freed capacity directly to Optimus", fx:{cashflow:-4,marketshare:-3,stockprice:+10}, set:["optimus_pivot"],
       result:"The S/X line ceases production after the last units roll off May 9, 2026; Optimus production begins at the same facility within months, targeting 1 million units a year by 2027. It ends 13+ years of continuous Model S production — read by some as confident forward vision, by others as Tesla deprioritizing the car business that built it.",
       hist:"Real: Musk confirmed the Model S/X discontinuation on the Q4 2025 earnings call; Fremont's S/X line ended production May 9, 2026, with Optimus production targeted to begin within months."},
      {label:"Keep Model S/X in limited production alongside a smaller, separate Optimus pilot line", fx:{cashflow:-7,marketshare:+2,stockprice:-2},
       result:"You preserve the halo cars and the prestige they carry, at the cost of capital efficiency — running two ambitious programs at partial scale instead of one at full scale."},
      {label:"Build a new, dedicated Optimus facility from scratch instead of repurposing Fremont", fx:{cashflow:-11,marketshare:+1,stockprice:-3},
       result:"Cleaner separation between the car business and the robotics bet, and a vastly more expensive, slower path to meaningful Optimus volume."}
     ]},
    {id:"juniper", year:"LATE 2024 – 2025", title:"The Model Y 'Juniper' Refresh", cond:"price_war",
     text:"By late 2024, Model 3 and Model Y are aging against a wave of new Chinese and legacy EVs, and 'aging lineup' is now cited alongside brand backlash and China competition as a driver of softness. How much do you invest in refreshing your best-selling model while capital is also being pulled toward Cybertruck, robotaxi, and Optimus?",
     choices:[
      {label:"A substantial redesign — new light signatures, better aero, quieter cabin", fx:{cashflow:-5,marketshare:+6,stockprice:+3}, set:["juniper_full"],
       result:"The refreshed Model Y launches first in China in January 2025, with US deliveries from March 2025 — new front and rear light signatures, drag coefficient down to 0.22, ventilated front seats, a rear-passenger touchscreen. It modernizes the look and ride, but doesn't on its own reverse the broader 2025 sales decline.",
       hist:"Real: the 'Juniper' Model Y refresh launched in China Jan 2025 and the US in March 2025, with aerodynamic and interior improvements as described."},
      {label:"A minimal running change to preserve capital for AI and robotics priorities", fx:{cashflow:+4,marketshare:-4,stockprice:-1},
       result:"Capital stays free for Optimus and robotaxi. Reviewers and buyers both notice the Model Y looks and feels exactly like it did three years ago, next to visibly newer competitors."},
      {label:"Skip the refresh; accelerate an all-new, lower-cost model instead", fx:{cashflow:-8,marketshare:+3},
       result:"A bigger, slower bet that might address the price-sensitive end of the market eventually — while your current best-seller keeps aging in the showroom in the meantime."}
     ]}
   ]
};
EVENTS.tesla = [
  {title:"Short Seller Report", text:"A famous fund publishes 'Tesla: The Anatomy of a Zero'. CNBC books the author for a victory lap before anything has actually happened.", fx:{stockprice:-4}, up:"Your fans buy the dip and mint memes. The report ages like milk, but today it stings."},
  {title:"Oil Price Collapse", text:"Crude drops below $45. Suddenly every op-ed asks whether anyone needs electric cars when gasoline is nearly free.", fx:{stockprice:-3}, up:"Your buyers, it turns out, weren't doing it for the gas money."},
  {title:"A Celebrity Delivery", text:"An A-list actor posts an unboxing of his new Tesla to ten million followers, unprompted and unpaid.", fx:{stockprice:+4}, up:"Marketing budget: still zero. Reach: still absurd."},
  {title:"Key Engineer Poached", text:"Apple's secretive car project just hired one of your best battery architects, with a comp package you can't discuss without laughing or crying.", fx:{marketshare:-3}, up:"The org reroutes around the gap within a quarter. The mission, weirdly, out-recruits the money."},
  {title:"Supplier Bankruptcy", text:"A single-source supplier of a small, irreplaceable part has gone insolvent overnight.", fx:{cashflow:-3,marketshare:-3}, up:"Your engineers redesign the part in-house in six weeks — and never single-source it again."},
  {title:"Regulatory Tailwind", text:"New emissions rules tighten. Rivals must now buy the compliance credits only you have in surplus.", fx:{cashflow:+4}, up:"Money for nothing. Detroit grumbles, pays, and lobbies."}
];
TICKER.tesla = ["GM kills the EV1 — again, in spirit","Analyst: 'niche product for wealthy environmentalists'","Gas prices fluctuate; op-eds follow","Nikola Tesla still uncredited, still dead","Detroit exec: 'we could do this anytime we want'","Battery costs fall 8% — nobody notices","Short interest hits record — again","Reddit forum argues about panel gaps for 400 comments"];
