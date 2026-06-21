DATA.honda = {
 name:"Honda", short:"Honda", logo:"🛵", theme:"theme-honda", ipo:25,
 pitch:"A motorcycle-shop engineering cult that talked its way onto the Isle of Man, into Ohio, and into the global top tier — on the theory that the right engine beats the expedient one. High technical conviction, occasionally bet-the-company stubbornness.",
 kpis:[
  {key:"eng", label:"Engineering Conviction", desc:"Soichiro Honda's 'build it right, not expedient' creed. Hit zero and Honda becomes just another badge-engineered also-ran."},
  {key:"cash", label:"Capital Discipline", desc:"Balance-sheet strength and the freedom that comes from never needing a bailout. Hit zero and the board starts taking calls from bankers you didn't invite."},
  {key:"trust", label:"Global Trust", desc:"The reliability/safety reputation 'You meet the nicest people on a Honda' built. Hit zero and even loyalists start cross-shopping Toyota."}
 ],
 ticker:"HMC",
 bankruptcy:"The engine that was supposed to be smarter than everyone else's finally runs out of road. Suppliers stop extending terms, dealers stop ordering, and the company Soichiro Honda built on the idea that engineering conviction was its own currency discovers, too late, that currency needs a balance sheet behind it.",
 legendary:"Sixty years after a nine-man team got laughed at on the Isle of Man, Honda is still the engineering company that occasionally wins by refusing to do the easy thing — independent, trusted, and still arguing with itself about the right engine for the next fifty years.",
 eras:{
  a:{
   name:"The Engineer's Company", years:"1948–1991", start:{eng:50, cash:45, trust:40}, stock0:8, deep:true,
   intro:"It's 1959. Honda is a motorized-bicycle maker from Hamamatsu with delusions of international grandeur, run by a temperamental engineer named Soichiro Honda and a sober business partner named Takeo Fujisawa who keeps the company solvent while Soichiro chases racing glory. Nobody outside Japan has heard of you. That is about to start changing, slowly, on the strength of engines nobody else wanted to build.",
   scenarios:[
    {id:"tt", year:"MAY 1959", title:"The Island Nobody Thought We Belonged On",
     text:"Five years after Soichiro Honda visited the Isle of Man TT and came home stunned at how outclassed Japanese motorcycles were, Honda is finally sending a nine-person team to race the world's most demanding motorcycle circuit. There is no realistic path to winning outright. The only question is whether you go anyway.",
     voice:"Soichiro Honda, after the 1954 reconnaissance trip: \"We were astonished that the motorcycles were so much more powerful than we had imagined.\"",
     choices:[
      {label:"Race the TT now — credibility matters more than winning", fx:{eng:+14,trust:+4}, set:["tt_raced"],
       result:"Naomi Taniguchi finishes 6th in the 125cc class — the best Honda result, and the first-ever finish by a Japanese rider at the TT. Honda wins the Manufacturer's Team Prize. Nobody in Europe can pronounce your name yet, but they've started writing it down.",
       hist:"Real: Honda entered the 1959 Ultra-Lightweight TT and won the Manufacturer's Team Prize on the strength of a 6th, 7th, 8th and 11th."},
      {label:"License a competitive European engine instead of racing unproven gear", fx:{cash:+6,eng:-10}, set:["licensed_engine"],
       result:"Faster path to a competitive bike. Slower path to ever building one yourselves — and the engineers who wanted to prove themselves on the Island start quietly looking at other employers."},
      {label:"Stay domestic — Japan and Southeast Asia are growing fast enough", fx:{cash:+8,trust:-2}, set:["stayed_home"],
       result:"Safe, profitable, invisible. The motorcycle world's center of gravity is in Europe, and Europe has no idea Honda exists."}
     ]},
    {id:"america", year:"SEP 1959", title:"Selling Motorcycles to America", cond:"!stayed_home",
     text:"American Honda Motor Co. opens in Los Angeles to sell the Dream, Benly and Super Cub into a U.S. motorcycle market dominated by a biker-gang stereotype and roughly 6,300 imported bikes a year. The first four months produce exactly 170 sales.",
     alt:[{if:"stayed_home", text:"Having chosen to stay domestic, Honda is now watching Triumph and BSA define motorcycling in America without you. Fujisawa argues the U.S. market is too big to keep ignoring, even on a delayed timeline."}],
     choices:[
      {label:"Build your own U.S. distribution arm and reposition the whole category", fx:{trust:+12,cash:+6}, set:["nicest_people"],
       result:"Starting in 1963, the \"You Meet the Nicest People on a Honda\" campaign reframes motorcycling as wholesome and mainstream. U.S. motorcycle sales hit ~148,000 units by year-end — a surge historian Tetsuo Sakiya credits primarily to Honda.",
       hist:"Real: American Honda Motor Co. opened in 1959; the 'Nicest People' campaign launched 1963."},
      {label:"Enter through an established U.S. distributor instead", fx:{cash:+4,trust:-4},
       result:"Less capital risk, less control. The distributor sells what's easy to sell, and 'easy to sell' in 1959 America means leaning into the leather-jacket image you were hoping to escape."},
      {label:"Target the existing biker market on its own terms", fx:{trust:-8},
       result:"You win a niche and lose the mainstream before you ever reached it. The Harley crowd respects you. Everyone's mother does not."}
     ]},
    {id:"cvcc", year:"DEC 1972", title:"The Engine That Didn't Need a Catalytic Converter",
     text:"The 1970 Clean Air Act and looming 1975 EPA standards are about to force every automaker into expensive, platinum-dependent catalytic converters. Honda's engineers think they can solve the same problem with a smarter engine instead — a pre-chamber design that burns lean mixtures cleanly with no aftertreatment device at all.",
     cond:"!licensed_engine",
     alt:[{if:"licensed_engine", text:"Having leaned on licensed engine technology since 1959, Honda's R&D bench is thinner than it should be for a problem this hard — but the engineers pushing CVCC argue this is exactly the moment to stop renting other people's solutions."}],
     choices:[
      {label:"Bet the company's engineering reputation on CVCC", fx:{eng:+16,cash:-4}, set:["cvcc"],
       result:"In December 1972 the CVCC becomes the first engine to pass the proposed 1975 EPA standards — verified, notably, in a Nissan Sunny body using Honda's licensed engine. The CVCC Civic launches for 1975 and is the most fuel-efficient car sold in the U.S. for four straight years.",
       hist:"Real: Honda's CVCC passed the proposed 1975 EPA standards in December 1972; the CVCC Civic led U.S. fuel economy 1975-1978."},
      {label:"License catalytic-converter technology like everyone else", fx:{cash:+8,eng:-12}, set:["catalytic_path"],
       result:"Cheaper, faster, and indistinguishable from Detroit and every other Japanese competitor. The engineering department's morale takes a hit it remembers for a decade."},
      {label:"Lobby to delay or weaken the emissions standards instead", fx:{trust:-10,cash:+4},
       result:"It buys time and costs reputation. Regulators and environmental reporters file Honda under 'foot-draggers' right as the CVCC story could have made you the hero of the emissions crisis."}
     ]},
    {id:"marysville", year:"1977–1982", title:"Building Cars in Ohio",
     text:"Threatened by U.S. import quotas and wanting American trust, Honda decides to become the first Japanese automaker to manufacture cars on U.S. soil — starting cautiously with a motorcycle plant in Marysville, Ohio in 1977 before committing to cars. The formal go-ahead from Tokyo arrives as a one-line fax: 'Proceed with auto plant.'",
     choices:[
      {label:"Build the wholly-owned Ohio auto plant and commit fully", fx:{trust:+14,cash:-6}, set:["marysville"],
       result:"The first American-built Accord — a silver-gray sedan plated 'USA 001' — rolls off the Marysville line November 1, 1982. Honda becomes the first Japanese automaker building cars in America, a year ahead of Nissan's Tennessee plant.",
       hist:"Real: Marysville Auto Plant began U.S. Accord production with the first car rolling off the line Nov 1, 1982."},
      {label:"Build it as a joint venture with an American partner instead", fx:{cash:+4,trust:+4},
       result:"Shared risk, shared credit, shared decision-making. It's the path Toyota will later take with NUMMI in 1986 — safer, and less distinctly yours."},
      {label:"Keep exporting from Japan and accept the quota limits", fx:{cash:+6,trust:-8}, set:["export_only"],
       result:"No factory risk, no American jobs story to tell. Just a hard ceiling on U.S. volume drawn by politicians in Washington, not by demand."}
     ]},
    {id:"acura", year:"APR 1986", title:"Inventing the Japanese Luxury Car",
     text:"Honda's brand means affordable, practical engineering — the opposite of luxury. But there's real money in buyers who'd otherwise go to BMW or Mercedes, and Tadashi Kume wants it. The bet on the table: an entirely new brand, dealer network and all, not just a fancier trim level.",
     choices:[
      {label:"Launch Acura as a full standalone luxury brand", fx:{trust:+10,cash:+8}, set:["acura"],
       result:"Acura launches March 27, 1986 with the Legend flagship and the sportier Integra — beating both Lexus and Infiniti to market by three years. Within two years it's the best-selling luxury-performance import brand in America.",
       hist:"Real: Acura launched March 27, 1986 as the first Japanese luxury marque, three years ahead of Lexus and Infiniti."},
      {label:"Sell a top-end 'Honda' model instead of a new brand", fx:{cash:+4,trust:-2},
       result:"Cheaper to execute. It also means a $30,000 car wearing the same badge as your $9,000 hatchback, and the luxury buyer you wanted notices immediately."},
      {label:"Skip luxury entirely and stay focused on volume and value", fx:{eng:+4,cash:-4},
       result:"Honest to the brand, and it leaves a very profitable segment to Toyota's Lexus gamble three years later. Purity has a price, and the price is somebody else's margin."}
     ]}
   ]
  },
  b:{
   name:"Profitable Outsider, Wounded Giant", years:"1992–2009", start:{eng:55, cash:55, trust:55}, stock0:14,
   intro:"The 1990s and 2000s find Honda as the disciplined alternative to Detroit's boom-bust cycles — profitable nearly every year, expanding into jets and robots as proof of engineering range. Then 2008 arrives, and the question becomes how much of that discipline survives contact with a global financial crisis.",
   scenarios:[
    {id:"asimo", year:"2000s", title:"ASIMO and the Jet: How Far Does Engineering Range Extend?",
     text:"Honda is funding two halo projects with no real path to profit: ASIMO, a humanoid robot (released 2000, building on research since 1986), and HondaJet, a business-jet program formalized as a GE Honda Aero Engines joint venture in 2004 — both framed as fulfilling Soichiro Honda's old dream of Honda building an aircraft.",
     choices:[
      {label:"Keep funding both as long-horizon engineering R&D", fx:{eng:+12,cash:-6}, set:["moonshots"],
       result:"Honda keeps both programs running for decades. HondaJet eventually reaches commercial deliveries; ASIMO becomes a global symbol of Honda's engineering identity, even though it's never a profit center.",
       hist:"Real: HondaJet later launched commercially; ASIMO was formally retired from active development in 2018."},
      {label:"License the robotics and aviation research instead of building full products", fx:{cash:+6,eng:-8},
       result:"Lower burn, lower glory. The 'Honda built an airplane' story — the one that actually moves magazine covers — never gets told."},
      {label:"Stay focused purely on cars and motorcycles, the actual profit engines", fx:{cash:+8,eng:-10},
       result:"The accountants are thrilled. The engineers who joined Honda partly because of ASIMO start wondering if this is still that kind of company."}
     ]},
    {id:"f1exit", year:"DEC 2008", title:"Pulling Out of Formula 1",
     text:"The financial crisis is destroying global auto demand. Honda's F1 team costs more than £300 million a year and hasn't won a championship since returning to full works status. Takeo Fukui has to decide whether motorsport — arguably the most 'Honda' thing the company does — is still affordable.",
     voice:"Takeo Fukui, announcing the withdrawal: \"Honda Motor Co. has come to the conclusion that we will withdraw from all Formula One activities, making 2008 the last season for participation.\"",
     choices:[
      {label:"Withdraw completely and sell the team for a nominal price", fx:{cash:+12,eng:-10}, set:["f1_exit"],
       result:"On December 5, 2008, Fukui announces full withdrawal, citing the 'quickly deteriorating operating environment.' Honda sells the team to its own technical director Ross Brawn for £1. Renamed Brawn GP, it wins both the 2009 drivers' and constructors' titles in its only season under that name — a result Honda will never quite live down.",
       hist:"Real: Honda withdrew from F1 Dec 5, 2008 and sold the team to Ross Brawn for a nominal £1; Brawn GP won both 2009 titles."},
      {label:"Cut the budget sharply but stay in", fx:{cash:+4,eng:+2},
       result:"A smaller, scrappier effort. It keeps the racing identity alive at a fraction of the spend, and a fraction of the results."},
      {label:"Suspend for one season and plan to return when conditions improve", fx:{cash:+6,eng:-4}, set:["f1_suspend"],
       result:"Half a retreat. The crisis runs longer than one season, and Honda spends the year explaining a 'pause' that increasingly looks permanent."}
     ]},
    {id:"nobailout", year:"WINTER 2008–2009", title:"No Bailout",
     text:"GM and Chrysler are negotiating roughly $80 billion in emergency U.S. government loans and forced restructuring. Honda — like Toyota and Nissan — isn't a candidate for rescue funds, but the crisis is hammering global demand all the same. Fukui has to decide how Honda absorbs the downturn without becoming a ward of any government.",
     choices:[
      {label:"Absorb the downturn through Honda's own cost-cutting and production cuts", fx:{cash:+10,trust:+10}, set:["no_bailout"],
       fxIf:[{if:"f1_exit", fx:{cash:+4}, note:"The F1 exit savings are already flowing into the same balance sheet that's now refusing outside help — the two decisions reinforce each other."}],
       result:"Honda emerges from the crisis without the political baggage, union-restructuring mandates, or government-ownership stakes that reshape GM and Chrysler. Fukui is praised for keeping Honda in the black through the worst of the downturn before retiring in 2009.",
       hist:"Real: Honda never sought or received bailout funds and remained profitable through the crisis, unlike GM and Chrysler."},
      {label:"Seek government-backed credit lines preemptively, just as insurance", fx:{cash:+6,trust:-6},
       result:"Cheap insurance financially, expensive insurance reputationally — 'Honda takes government money' is a headline you didn't need to write."},
      {label:"Aggressively cut U.S. operations to match Detroit's downsizing", fx:{cash:+4,trust:-10},
       result:"It saves cash and costs you the very thing that made Honda different from Detroit in this story — steadiness when everyone else panicked."}
     ]},
    {id:"handover", year:"FEB 2009", title:"Handing Over Mid-Crisis",
     text:"Navigating Honda's worst sales environment in decades, 64-year-old Fukui decides to retire and hand the presidency to Takanobu Ito — an engineer who'd overseen automobile operations but wasn't the most senior or obvious heir apparent.",
     choices:[
      {label:"Promote Ito, the engineer, effective immediately", fx:{eng:+8}, set:["ito_ceo"],
       result:"On February 23, 2009, Honda announces Takanobu Ito — a chassis design engineer since 1978 with a Master's from Kyoto University — will become Honda's seventh president and CEO from June 2009, taking over just as the crisis bottoms out.",
       hist:"Real: Takanobu Ito was announced as Honda's seventh president and CEO on Feb 23, 2009, effective June 2009."},
      {label:"Promote a more senior, finance-oriented executive instead", fx:{cash:+4,eng:-6},
       result:"A safer pair of hands for the balance sheet, and a quieter signal that engineering conviction isn't quite the deciding factor it used to be at the top of Honda."},
      {label:"Delay the transition until the crisis fully stabilizes", fx:{trust:-4},
       result:"Fukui stays past the point he wanted to, and the company spends the worst of the crisis being led by someone visibly ready to leave."}
     ]}
   ]
  },
  c:{
   name:"Crisis After Crisis", years:"2009–2021", start:{eng:55, cash:55, trust:50}, stock0:20,
   intro:"Takanobu Ito inherits a company that just survived a financial crisis without a bailout — and immediately walks into an unprecedented run of external shocks and one slow-burning internal one. Lean, just-in-time, single-supplier-reliant manufacturing is about to be tested by an earthquake, a flood, and a part that should never have shipped.",
   scenarios:[
    {id:"earthquake", year:"MAR 2011", title:"The Earthquake",
     text:"The Tōhoku earthquake and tsunami devastate northeastern Japan on March 11, 2011. Honda's Japanese vehicle production falls roughly 80% in March alone, and the supply chain for parts and specialized chemicals — many sourced only from the disaster region — ripples out to Honda plants worldwide.",
     choices:[
      {label:"Stage an extended, methodical recovery across the whole network", fx:{eng:+6,cash:-6}, set:["staged_recovery"],
       result:"Honda restores full domestic production capacity by around August 2011, in line with the broader Japanese manufacturing sector's roughly five-month recovery — but global exports and overseas plants reliant on Japanese parts stay constrained for months.",
       hist:"Real: Honda restored full Japan production capacity by around August 2011; vehicle parts exports from Japan fell ~20% Feb-May 2011."},
      {label:"Halt global production entirely until Japan fully recovers", fx:{cash:-14},
       result:"Cleaner from a quality-control standpoint, devastating for cash flow. Plants in Ohio and Thailand sit dark for parts shortages that didn't require their own shutdown."},
      {label:"Qualify alternate non-Japanese suppliers immediately, even at a cost or quality penalty", fx:{cash:-4,eng:-4}, set:["alt_suppliers"],
       result:"Faster resumption, less certainty about the parts going into the cars. It's the kind of tradeoff Honda's engineering culture has historically resisted making."}
     ]},
    {id:"thailand", year:"OCT–NOV 2011", title:"The Thailand Floods, Months Later",
     text:"Before Honda has even fully recovered from March, catastrophic flooding hits the Rojana Industrial Park in Ayutthaya, home to a 240,000-unit/year Thai plant that alone produced about 5% of Honda's global output in 2010. The plant suspends production October 4; an evacuation order follows October 8 as floodwater enters the property.",
     alt:[{if:"staged_recovery", text:"Having just finished a methodical, five-month earthquake recovery, Honda's crisis-management muscle is freshly exercised — and immediately needed again, an ocean away, for an entirely different disaster."}],
     choices:[
      {label:"Accept the extended shutdown and absorb the lost volume", fx:{cash:-10,trust:+4}, set:["thai_absorbed"],
       result:"The plant stays offline roughly four months — about 60,000 vehicles never built — while Honda drains, cleans and restores equipment through January 2012, scrapping roughly 1,000 flood-damaged finished vehicles in the process. Production resumes in early 2012.",
       hist:"Real: the Ayutthaya plant was offline roughly four months, losing ~60,000 vehicles, and scrapped about 1,000 flood-damaged cars."},
      {label:"Relocate Thai production permanently to a flood-safe site immediately", fx:{cash:-16,eng:+4},
       result:"A bigger, slower, more expensive fix than the crisis actually required — and a years-long detour from getting the existing plant back online."},
      {label:"Air-freight and expedite parts from other regions to offset the loss", fx:{cash:-8,trust:+2},
       result:"It softens the dealer-facing shortage somewhat. The freight bills make the CFO wince every week the plant stays dark."}
     ]},
    {id:"takata", year:"2008–2014", title:"The Airbags Honda Kept Using",
     text:"Takata, a longtime Honda supplier, has been using a volatile ammonium-nitrate-based airbag inflator propellant since the early 2000s. Honda issued isolated recalls as early as 2008, but the danger — inflators that could rupture and spray metal shrapnel into the cabin — wasn't yet publicly understood, even as Takata quietly halted its own safety audits around 2009 for cost reasons.",
     choices:[
      {label:"Keep relying on Takata's own safety data and existing recall pace", fx:{cash:+4,trust:-14}, set:["takata_slow"],
       result:"Recalls accelerate sharply only in 2013-2014 as the death toll becomes undeniable. By the time it's done, it's the largest automotive safety recall in U.S. history — tens of millions of vehicles, and at least six U.S. deaths specifically linked to Honda vehicles with Takata airbags.",
       hist:"Real: by June 2014 Honda joined BMW, Ford, Mazda, Nissan, Toyota and Chrysler in recalling a combined 3 million vehicles for Takata inflators; at least six U.S. deaths were linked to Honda vehicles specifically."},
      {label:"Commission independent, Honda-funded testing of Takata inflators", fx:{cash:-8,trust:+6},
       result:"More expensive, and it surfaces the danger years earlier than relying on a supplier whose own audits had quietly stopped. Fewer cars on the road with the worst 'Alpha' inflators by the time the crisis becomes public."},
      {label:"Switch inflator suppliers proactively at the first sign of anomalies", fx:{cash:-12,eng:+6},
       result:"The hardest, most expensive option — and the one that actually removes the risk instead of managing it. Years of supply-chain disruption follow, but the body count is a different story."}
     ]},
    {id:"itosteps", year:"FEB 2015", title:"The President Steps Down",
     text:"Honda has just suffered its worst run of quality problems in decades — repeated Fit hybrid recalls, delayed launches, a projected profit decline, and a Takata crisis now linked to six U.S. deaths in Honda vehicles. Ito has already taken a personal pay cut over the lapses.",
     cond:"takata_slow",
     alt:[{if:"!takata_slow", text:"Honda's quality record is shakier than ideal but markedly better than the worst-case timeline — the earlier, costlier supplier intervention is paying for itself in fewer headlines, even as the broader Takata story keeps the industry on edge."}],
     choices:[
      {label:"Have Ito step down; promote Hachigo, an outsider to the recall mess", fx:{trust:+8,eng:-2}, set:["hachigo_ceo"],
       result:"In an unexpected February 23, 2015 announcement, Ito steps down after six years as president; Takahiro Hachigo — who'd worked on the U.S. Odyssey and CR-V — succeeds him from Honda's June shareholders' meeting.",
       hist:"Real: Ito stepped down Feb 23, 2015 after a string of quality lapses, succeeded by Takahiro Hachigo."},
      {label:"Keep Ito on to personally see the Takata crisis through", fx:{trust:-6,eng:+4},
       result:"Continuity at the cost of accountability optics. Every subsequent recall headline now runs with Ito's photo attached to it."},
      {label:"Bring in outside leadership to force a clean break", fx:{trust:+2,eng:-10},
       result:"Almost unthinkable at a company that has only ever promoted from within — and the engineering culture treats it as exactly the betrayal that sentence implies."}
     ]},
    {id:"gm", year:"2015–2020", title:"Betting on GM Instead of Going It Alone",
     text:"Facing the immense capital cost of batteries, fuel cells and autonomous driving, Hachigo's Honda considers deep technical partnership with General Motors rather than full self-reliance — unusual for a company that has always prized engineering independence.",
     choices:[
      {label:"Build the full multi-layered GM partnership — fuel cells, batteries, EVs, and Cruise", fx:{cash:+6,eng:-6}, set:["gm_partner"],
       result:"Honda and GM build a 2017 fuel-cell joint venture, a 2018 battery partnership, a 2020 co-developed EV agreement, and an October 2018 $2.75 billion Honda investment in GM's Cruise autonomous unit — a striking departure from Honda's self-reliance instinct.",
       hist:"Real: Honda invested $2.75B in Cruise in Oct 2018 and built fuel-cell, battery and EV partnerships with GM 2017-2020."},
      {label:"Develop EV, autonomous and fuel-cell tech entirely in-house", fx:{eng:+10,cash:-10},
       result:"Consistent with everything Honda has claimed to believe since 1948. Also slower and vastly more expensive than the technology curve seems to be allowing anyone in this industry."},
      {label:"Partner with a non-U.S. company instead, such as a Chinese battery maker", fx:{cash:+4,trust:-4},
       result:"Cheaper cells, a geopolitically messier story, and a partnership that ages very differently depending on which decade you're reading this in."}
     ]},
    {id:"twothirds", year:"FEB 2016", title:"Two-Thirds Electrified by 2030",
     text:"With diesel scandals rocking European rivals and Tesla raising the ambition bar, Hachigo sets Honda's first concrete long-range electrification target, while consolidating Honda's sprawling global lineup onto a shared platform to help fund the transition.",
     choices:[
      {label:"Commit to two-thirds 'electrified' sales by 2030, led by plug-in hybrids", fx:{eng:+8,trust:+4}, set:["two_thirds"],
       result:"On February 24, 2016, Hachigo announces that hybrids, plug-in hybrids, battery EVs and fuel-cell vehicles combined will reach roughly two-thirds of Honda's global sales by 2030. Honda simultaneously trims factories in the UK, Japan and Turkey while consolidating its model count to about a third of its prior size.",
       hist:"Real: Hachigo announced the two-thirds 'electrified by 2030' target Feb 24, 2016, with plug-in hybrids positioned at its core."},
      {label:"Set a more aggressive pure-EV target to match Tesla's positioning", fx:{cash:-8,eng:+6},
       result:"Bold on a press release, brutal on the balance sheet. Honda doesn't yet have the battery scale this promise would require."},
      {label:"Stay purely hybrid-focused and make no public numeric commitment", fx:{cash:+6,trust:-4},
       result:"Cautious and quietly behind the conversation everyone else in the industry is now having in public."}
     ]}
   ]
  },
  d:{
   name:"The EV Reckoning", years:"2021–2026", start:{eng:55, cash:50, trust:55}, stock0:28,
   intro:"Toshihiro Mibe, an engine and powertrain veteran, takes the helm in 2021 and inherits a five-year whiplash: bold electrification promises, a once-in-a-generation merger flirtation with Nissan, a software partnership with Sony — and, eventually, a humbling multi-billion-dollar retreat from the very EV bets that defined his early presidency.",
   scenarios:[
    {id:"mandate", year:"FEB 2021", title:"Mibe's Mandate: Zero Emissions by 2040",
     text:"Toshihiro Mibe takes over as president amid intensifying regulatory and competitive pressure to commit decisively to electrification, with rivals and governments setting aggressive combustion-phaseout dates.",
     voice:"Toshihiro Mibe, on taking the helm: a call for \"major transformation at great speed.\"",
     choices:[
      {label:"Commit globally: 100% zero-emission sales by 2040, carbon neutral by 2050", fx:{eng:+10,cash:-8}, set:["mibe_2040"],
       result:"Mibe announces among the most aggressive timelines of any major legacy automaker at the time — a public, global, hard commitment with no regional carve-outs.",
       hist:"Real: Mibe announced a 100% zero-emission global sales target by 2040 and carbon neutrality by 2050 upon taking office."},
      {label:"Set a more conservative, hybrid-weighted target", fx:{cash:+6,eng:-6}, set:["mibe_cautious"],
       result:"Consistent with Honda's traditional caution. It also reads, in early 2021, like Honda quietly admitting it isn't ready to compete on Tesla's or China's terms."},
      {label:"Commit only for specific markets like Europe and China", fx:{cash:+2},
       result:"Hedged and regionally tidy. It also means explaining, market by market, why the zero-emission promise has an asterisk."}
     ]},
    {id:"sony", year:"2022", title:"Partnering With Sony",
     text:"Mibe concludes Honda cannot build a credible, software-and-entertainment-rich EV cockpit alone — pure hardware excellence, Honda's traditional strength, isn't enough to compete with Tesla and Chinese EV makers on in-car software.",
     choices:[
      {label:"Form a 50/50 joint venture with Sony", fx:{eng:-4,trust:+6}, set:["sony_jv"],
       result:"Sony Honda Mobility Inc. forms in 2022, combining Sony's entertainment and sensor technology with Honda's vehicle engineering and manufacturing. The joint venture unveils its 'Afeela' brand and prototype EV at CES 2023.",
       hist:"Real: Sony Honda Mobility Inc. was formed in 2022 and unveiled the Afeela brand and prototype at CES January 2023."},
      {label:"Build software capability entirely in-house, consistent with Honda's self-reliance", fx:{eng:+8,cash:-10},
       result:"True to the founder's gospel, and a multi-year, multi-billion-dollar bet that Honda can out-code companies that have been doing this far longer."},
      {label:"Acquire a software or autonomous-vehicle startup outright instead", fx:{cash:-12,eng:+2},
       result:"Faster integration of talent, messier integration of culture. Honda's first real experiment in buying its way into software, rather than partnering or building."}
     ]},
    {id:"ohiohub", year:"OCT 2022–MAR 2023", title:"The Ohio EV Hub",
     text:"Honda needs domestic North American battery supply to qualify for U.S. EV incentives after the Inflation Reduction Act, and to support its electrification targets — requiring a multi-billion-dollar capital commitment to a market still far smaller than Honda's existing combustion business.",
     cond:"mibe_2040",
     alt:[{if:"mibe_cautious", text:"Even with the more conservative target set in 2021, the math on U.S. EV incentives still points toward needing domestic battery capacity — just at a scale Mibe's team now has to justify against a softer original commitment."}],
     choices:[
      {label:"Build the full Ohio EV Hub with LG Energy Solution", fx:{cash:-10,eng:+6}, set:["ohio_hub"],
       result:"Honda and LG Energy Solution announce on October 11, 2022 a joint battery plant in Fayette County, Ohio — up to $4.4 billion committed, ~2,200 jobs promised — plus a separate $700 million across Marysville, East Liberty and Anna. In March 2023 Honda brands the combined effort the 'Honda EV Hub.'",
       hist:"Real: Honda and LG Energy Solution announced the Ohio battery plant Oct 11, 2022 (up to $4.4B); Honda branded the combined effort the 'EV Hub' in March 2023."},
      {label:"Source batteries from existing Asian suppliers without U.S. capacity", fx:{cash:+8,eng:-4},
       result:"Cheaper and faster in the short run. It also forfeits the U.S. incentive structure the whole strategy was supposed to capture."},
      {label:"Build a smaller pilot-scale plant instead of a full hub", fx:{cash:-4},
       result:"Lower risk, lower headline. When demand questions arrive later, the smaller bet looks prescient or timid depending entirely on how 2026 goes."}
     ]},
    {id:"zeroseries", year:"JAN 2024", title:"Unveiling the Honda 0 Series",
     text:"Honda needs to show the market a credible, distinctly-Honda EV design language — not just EV versions of existing combustion models — to compete with Tesla and Chinese entrants for mindshare ahead of real production.",
     choices:[
      {label:"Unveil a clean-sheet 'Honda 0 Series' design philosophy at CES", fx:{eng:+10,trust:+4}, set:["zero_series"],
       result:"At CES on January 9, 2024, Honda unveils the 'Honda 0 Series' — built on a 'Thin, Light, and Wise' philosophy — represented by the Saloon and Space-Hub concepts, with a production Saloon promised for North America in 2026.",
       hist:"Real: Honda unveiled the Honda 0 Series at CES January 9, 2024, with a production Saloon promised for North America in 2026."},
      {label:"Continue selling EV variants of existing nameplates", fx:{cash:+4,eng:-6},
       result:"Cheaper to engineer, easier to dismiss as a compliance EV with a different badge — exactly the reputation Honda was trying to escape."},
      {label:"Delay any public reveal until production-intent vehicles are ready", fx:{trust:-4},
       result:"Disciplined and invisible. Every quarter without a public EV story is a quarter the trade press spends writing about Tesla and BYD instead."}
     ]},
    {id:"nissanmerge", year:"DEC 23 2024", title:"Merging With Nissan",
     text:"Nissan is in serious financial distress — 9,000 job cuts and a 20% production cut announced in November 2024 — and industry consolidation pressure pushes Honda and Nissan toward combining forces to fund EV and software development at scale. Tokyo is reported to have encouraged the talks.",
     choices:[
      {label:"Sign a memorandum of understanding to explore a joint holding company", fx:{eng:+4,cash:-2}, set:["nissan_mou"],
       result:"On December 23, 2024, Honda and Nissan sign an MOU to explore a joint holding company, inviting Mitsubishi Motors to decide on participation by January 2025 — targeting completion by August 2026 and creating, on paper, the world's third-largest automaker by volume.",
       hist:"Real: Honda and Nissan signed an MOU Dec 23, 2024 to explore a joint holding company, targeting completion by August 2026."},
      {label:"Pursue a smaller technology-sharing partnership instead of a full merger", fx:{cash:+4,eng:-2},
       result:"Lower risk, lower scale benefit. It leaves Nissan's underlying financial distress essentially Nissan's problem to solve alone."},
      {label:"Acquire Nissan outright rather than form a co-equal holding company", fx:{cash:-10,trust:-4},
       result:"Faster and more honest about the power imbalance — and politically much harder to sell in Japan as anything other than a takeover."}
     ]},
    {id:"mergercollapse", year:"FEB 13 2025", title:"The Merger Collapses",
     text:"During structuring talks, Honda — by far the larger and healthier company — pushes for Nissan to become a Honda subsidiary rather than a co-equal partner, arguing Nissan's restructuring hasn't gone far enough. Honda executives are also reportedly frustrated by the pace of Nissan's decision-making.",
     cond:"nissan_mou",
     choices:[
      {label:"Hold firm on the subsidiary structure and let the deal collapse if it must", fx:{eng:+4,trust:-2}, set:["merger_dead"],
       result:"Nissan rejects becoming a 100%-owned Honda subsidiary, and on February 13, 2025 the two companies officially call off merger talks, ending a $60 billion plan to create the world's third-largest automaker. Narrower collaboration on batteries, software and EV technology continues alongside Mitsubishi.",
       hist:"Real: Honda and Nissan officially called off merger talks Feb 13, 2025, ending the ~$60 billion plan, though narrower tech collaboration continued."},
      {label:"Soften the subsidiary demand to keep a more equal deal alive", fx:{cash:-6,eng:-2},
       result:"It keeps the headline merger alive at the cost of folding a much weaker, slower-moving partner into your decision-making at every level, indefinitely."},
      {label:"Extend the timeline rather than walk away now", fx:{cash:-4},
       result:"Buys time without resolving the actual disagreement. Nissan's financial position keeps deteriorating while both sides negotiate around the same impasse."}
     ]},
    {id:"evretreat", year:"MAR 12 2026", title:"The Great EV Retreat",
     text:"By early 2026, U.S. EV demand growth has stalled, tariff policy has turned against Honda's planned North American EV supply chain, and Chinese competition has intensified sharply — undercutting the assumptions behind the 2021 zero-emission target, the Ohio EV Hub, the 0 Series rollout, and the Afeela program.",
     cond:"zero_series",
     alt:[{if:"!zero_series", text:"Without a dedicated 0 Series design language to defend, the 2026 reassessment has less specifically-Honda EV identity to walk back — but the Ohio capital and the Sony partnership are still exposed to the same stalled U.S. demand and Chinese competition."}],
     choices:[
      {label:"Announce a sweeping reassessment: cancel North American EV models, pivot hard to hybrids", fx:{cash:-14,trust:+4}, set:["ev_retreat"],
       fxIf:[{if:"ohio_hub", fx:{cash:-4}, note:"The Ohio Hub's sunk capital makes this retreat far more expensive than it would have been on a smaller bet."},
             {if:"sony_jv", fx:{eng:-4}, note:"Shortly after, Sony Honda Mobility discontinues the Afeela 1 and the planned second model — the software bet retreats alongside the EV bet."}],
       result:"On March 12, 2026, Honda cancels three planned EV models (the Honda 0 SUV, 0 Saloon, and Acura RSX), reports a roughly ¥423.9 billion net loss for the fiscal year, takes more than $9 billion in EV-related write-downs, and lowers its 2030 BEV target from the old two-thirds 'electrified' framing to roughly 20%. Honda redirects toward 15 new hybrid models by fiscal 2030.",
       hist:"Real: Honda announced the EV strategy reassessment March 12, 2026, with ~¥423.9B net loss, $9B+ in write-downs, and a lowered 2030 BEV target of roughly 20%."},
      {label:"Stay the course on the original EV timeline and absorb near-term losses", fx:{cash:-20,eng:+8},
       result:"Conviction at a brutal price. If EV demand recovers on schedule, this looks visionary. If it doesn't, the balance sheet absorbs years of losses for a market that isn't there yet."},
      {label:"Cut EV investment only partially, preserving flagship models", fx:{cash:-8,eng:-2},
       result:"A muddled middle path — neither the credibility of full commitment nor the relief of a clean retreat. Investors and engineers both come away unsatisfied."}
     ]}
   ]
  }
 }
};
EVENTS.honda = [
 {title:"Plant Quality Audit", text:"An internal audit flags inconsistent torque specs on a minor trim line at a Honda plant overseas.", fx:{trust:-3}, up:"Fixed in a week, quietly. The press never finds out, which is the whole point of catching it internally."},
 {title:"Reliability Survey Win", text:"A major consumer survey ranks Honda among the most reliable brands on the road, again.", fx:{trust:+5}, up:"Nobody throws a parade for reliability. The resale values throw one instead."},
 {title:"Currency Whiplash", text:"A sudden yen swing reshuffles Honda's repatriated profits for the quarter.", fx:{cash:-4}, up:"The hedging desk earns its keep. Most of the damage stays on paper."},
 {title:"Engineer Poached by a Rival EV Startup", text:"A promising powertrain engineer leaves for a flashier paycheck at a Chinese EV maker.", fx:{eng:-3}, up:"Honda's engineering bench is deep enough to absorb it. The exit interview still stings."},
 {title:"Racing Win Trickles Down", text:"A Honda-powered team takes a surprise win on a tight budget, and the marketing department notices.", fx:{eng:+4}, up:"Racing wins still sell road cars. Soichiro would have approved, grudgingly."},
 {title:"Dealer Network Grumbles", text:"U.S. dealers complain publicly about uneven EV inventory allocation versus hybrid demand.", fx:{cash:-3}, up:"A few conference calls later, the allocation formula gets quietly rewritten."}
];
TICKER.honda = [
 "Toyota launches rival hybrid, claims 'best fuel economy yet'",
 "Tesla undercuts Honda 0 Series pricing rumors before a single unit ships",
 "Analyst note: 'legacy automakers face a hybrid-or-bust decade'",
 "BYD opens another factory, this time on a continent Honda just retreated from",
 "Honda dealer lots fill with hybrids nobody can keep in stock",
 "Nissan's stock wobbles on standalone-survival questions",
 "Chinese EV exports keep climbing despite tariff headlines",
 "Formula 1 paddock reporters ask, again, if Honda will ever come back"
];
