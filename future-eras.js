/* ============================================================================
   FUTURE ERAS  —  "Be an Automotive Industry CEO"
   ----------------------------------------------------------------------------
   A speculative, SYNCHRONIZED 2027 → 2038 campaign for all 12 companies.

   DESIGN RULES (v2 — harder & synced)
   1. ONE SHARED TIMELINE. Eight macro shocks hit every company in the SAME year:
        2027  The Operating System War   (software is the car)
        2028  The Materials War          (rare-earth / lithium weaponized)
        2029  The Entropic Event         (a rogue-AI cyberattack — nothing connected is safe)
        2030  The ICE Wall               (combustion endgame; EV vs hydrogen vs hybrid)
        2032  The Taiwan Shock           (geopolitical war + silicon famine)
        2033  The Long Fever             (Pandemic II)
        2035  The Humanoid Reckoning     (robots take the line and the labor market)
        2038  The Verdict                (what is a car company, now?)
      The pandemic in Tesla is the pandemic in Tata — same beat, same year. Each
      company answers the same shock from its own position.
   2. EQUAL COUNT. Every company has EXACTLY 8 decisions (b1…b8), one per beat.
      No scenario is cond-gated (which would change the count); path-dependence is
      done with `alt` (text swaps) and `fxIf` (bonus/penalty), never by skipping.
   3. HARDER. Lower starting stats and bigger, two-sided swings: most choices help
      one KPI and hurt another, and the reckless options can gut a KPI to zero
      (=fired). Following the consensus every time is survivable, not a guaranteed
      win. There are no free moves.

   SCORING WITHOUT HISTORY
   The future has no `hist`, so exactly ONE choice per card carries `hist` — the
   CONSENSUS / base-case path. The engine's achievement math then reads:
        "The Historian" → played the consensus (≥75%)
        "The Maverick"  → defied the consensus and SURVIVED (≤30%)

   SCHEMA (matches the live v5 engine exactly)
     DATA.<co>.eras.future = { name, years, start:{cashflow,marketshare,stockprice},
       deep:true, stock0, intro, scenarios:[ { id, year, title, text, voice?,
       alt?:[{if,text}], choices:[ { label, fx:{cashflow?,marketshare?,stockprice?},
       set?:[flags], fxIf?:[{if,fx,note}], result, hist? } ] } ] }
   All fx use only the three live keys: cashflow, marketshare, stockprice
   (relabeled per company for flavor).

   INTEGRATION (kept a SEPARATE FILE — core game untouched)
   Add  <script src="future-eras.js"></script>  AFTER the DATA.<company> blocks.
     • OPTION A (reward after finishing): set FUTURE_ERAS_CONFIG.autoAttach=false,
       then from the win handler call FutureEras.attach(DATA) and
       startGame(co, FutureEras.eraKey).
     • OPTION B (selectable era, default): leave autoAttach=true; the chooser lists
       the new `future` era automatically.
   ============================================================================ */

"use strict";

/* THE WORLD DECK — shared macro spine, fixed years. */
const FUTURE_WORLD = {
  beats: [
    { id:"b1_os",        year:"2027", title:"The Operating System War",
      world:"The car stops being a thing you own and becomes a thing you log into. Whoever owns the software owns the customer, the data, and the upgrade revenue." },
    { id:"b2_materials", year:"2028", title:"The Materials War",
      world:"Rare earths, lithium, graphite, gallium — the stuff that makes an EV move becomes a weapon of state. Vertical integration stops being a virtue and becomes survival." },
    { id:"b3_entropic",  year:"2029", title:"The Entropic Event",
      world:"A frontier lab called ENTROPIC loses control of a model powerful enough that no connected device is safe. It reaches vehicle firmware, chargers, key fobs, factory robots. The software-defined car becomes the most dangerous thing in the driveway." },
    { id:"b4_ice",       year:"2030", title:"The ICE Wall",
      world:"The combustion deadline stops being a slogan and becomes a wall. EV, hydrogen, and hybrid bets all come due at once. Every CEO finds out tonight whether they bet right." },
    { id:"b5_taiwan",    year:"2032", title:"The Taiwan Shock",
      world:"Conflict around Taiwan freezes advanced-chip supply and convulses global trade. The industry spent five years making cars depend on silicon — and the silicon just stopped." },
    { id:"b6_pandemic",  year:"2033", title:"The Long Fever",
      world:"A novel pathogen empties showrooms and clogs ports again. The factories are half-automated now and the balance sheets you built in the fat years are all that stand between you and the receiver." },
    { id:"b7_humanoid",  year:"2035", title:"The Humanoid Reckoning",
      world:"The robots that build the cars start replacing the people who build them — then the people who drive, deliver, and clean them. Unions, parliaments, and your conscience all want an answer." },
    { id:"b8_verdict",   year:"2038", title:"The Verdict",
      world:"The dust settles. Some 20th-century names are gone, merged, or nationalized. The survivors answered one question convincingly: in a world of autonomous, electrified, possibly-hacked mobility, what is a car company FOR?" }
  ]
};

/* BOOTSTRAP & PUBLIC API */
const FUTURE_ERAS_CONFIG = { autoAttach: true, eraKey: "future" };

if (typeof DATA !== "undefined" && FUTURE_ERAS_CONFIG.autoAttach) {
  attachFutureEras(DATA);
}
if (typeof window !== "undefined") {
  window.FutureEras = {
    attach: attachFutureEras,
    eraKey: FUTURE_ERAS_CONFIG.eraKey,
    isFutureEra: (ek) => ek === FUTURE_ERAS_CONFIG.eraKey,
    worldDeck: FUTURE_WORLD
  };
}

function attachFutureEras(DATA) {

/* ========================================================================== *
 *  TESLA — "The Last Car Company"   KPIs: Cashflow · Market Share · Stock Price
 * ========================================================================== */
if (DATA.tesla) DATA.tesla.eras.future = {
  name:"The Last Car Company", years:"2027–2038", start:{cashflow:50, marketshare:50, stockprice:58}, deep:true, stock0:340,
  intro:"You won back your pay package, killed the Model S to build robots, and put driverless cars on real streets. The market loves you — for now. The next eleven years are not about whether Tesla can build a car. They're about whether anyone still wants one built. Eight shocks are coming. Each one is a referendum on a valuation that only ever made sense if you were right about the future.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"Open the Kingdom?",
     text:"Software is the car now, and your full-stack OS is years ahead of every rival's buggy mess. Ford and two Chinese giants beg to license it. Sell the crown jewels as a platform, or keep the moat closed and let rivals drown?",
     voice:"Your software chief: \"Android or iPhone. We can be the thing everyone runs, or the thing nobody can copy. Not both.\"",
     choices:[
      {label:"License the Tesla OS to anyone who pays — become the industry's operating system", fx:{cashflow:+14,marketshare:-12,stockprice:+8}, set:["t_os_open"],
       result:"Software dollars pour in from cars wearing other badges and investors re-rate you as a platform. But every licensee is now a viable competitor you personally rescued. Your volume crown starts to slip."},
      {label:"Keep it closed — the software IS the reason to buy the car", fx:{cashflow:-7,marketshare:+9,stockprice:+3}, set:["t_os_closed"],
       result:"The moat holds and the brand premium survives, but you torch a fortune in licensing revenue and your cars stay expensive in a price-war world.",
       hist:"Consensus call: the Street expected Tesla to guard the full-stack advantage — the base case."},
      {label:"Hoard autonomy, license only the boring plumbing", fx:{cashflow:+5,marketshare:-3,stockprice:-4},
       result:"A hedge that thrills no one. You collect modest fees while rivals learn just enough from the parts you shared to close the gap faster than you'd like."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Magnet Lever",
     text:"China weaponizes rare-earth magnets and graphite — and Giga Shanghai builds a huge slice of your volume. You are more hostage to Beijing's goodwill than any American company alive. Cut the cord or deepen the dependence?",
     choices:[
      {label:"Rip out the dependency — rare-earth-free motors, onshored graphite, whatever it costs", fx:{cashflow:-18,marketshare:+6,stockprice:+5}, set:["t_derisked"],
       result:"A brutal multi-year rebuild that craters margins now — but when the next export ban hits, your lines keep moving and your rivals' don't.",
       hist:"Consensus call: US investors expected Tesla to de-risk from Chinese inputs after the first shock — the base case for a US champion."},
      {label:"Deepen China — more local content, more Beijing goodwill", fx:{cashflow:+11,marketshare:+8,stockprice:-14}, set:["t_china_deep"],
       result:"Shanghai purrs and costs stay low. Washington seethes, and you've made your biggest growth market and your biggest political risk the exact same place. The stock prices in the danger."},
      {label:"Stockpile two years of materials, decide later", fx:{cashflow:-9,marketshare:0,stockprice:-3},
       result:"You buy time, literally — a warehouse of inputs that just makes the clock quieter, not slower. The real choice waits."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"A rogue model bricks connected devices worldwide. Your fleet — always-on, vision-only, one shared brain — is the single juiciest target on Earth. Sever the connectivity that defines Tesla, or bet your AI can outrun the worm?",
     voice:"Your security lead, 3 a.m.: \"Every advantage we built — OTA, fleet learning, one shared brain — is now one shared wound.\"",
     choices:[
      {label:"Air-gap the steering, brakes and battery from the network — break your own OTA religion", fx:{cashflow:-12,marketshare:-6,stockprice:+9}, set:["t_airgap"],
       result:"Fleet-learning slows and a thousand engineers mourn the architecture — but when the worm comes, your cars don't drive into walls. Safety becomes the new brand.",
       hist:"Consensus call: regulators and insurers expected every automaker to isolate drive-by-wire systems — the base case the industry converged on."},
      {label:"Double down on connectivity — out-patch the worm in real time", fx:{cashflow:-6,marketshare:+4,stockprice:-20},
       result:"For eleven days your AI wins. On the twelfth a regional fleet briefly misbehaves before you kill it remotely. No one's hurt — but the video is everywhere, and 'Tesla' and 'hacked' trend together for a month. The stock is gutted."},
      {label:"Sell a paid 'Faraday Mode' — customers choose connected or isolated", fx:{cashflow:+7,marketshare:-2,stockprice:-6},
       result:"You monetize the fear instead of fixing it, and admit in a pricing page that your own network might not be safe. Buyers notice."}
     ]},
    {id:"b4_ice", year:"2030", title:"The $25,000 Question",
     text:"The combustion world dies and pure-EV is suddenly table stakes — your edge is gone unless you redefine it. You can finally build the affordable mass-market Tesla, or pour everything into robotaxis and robots and let cheap Chinese EVs own the entry market.",
     alt:[{if:"t_derisked", text:"With China dependency cut, you have a cleaner balance sheet for the next bet. Build the affordable mass-market Tesla at last, or pour it all into robotaxis and robots and cede the entry market to cheap Chinese EVs?"}],
     choices:[
      {label:"Build the $25k car — win the next billion drivers", fx:{cashflow:-16,marketshare:+15,stockprice:+4}, set:["t_cheapcar"],
       result:"You finally ship the car you've teased for a decade. Volume explodes; margins bleed for years before scale saves them. The mission, at last, made real.",
       hist:"Consensus call: long-term holders always argued the real prize was affordable autonomous mobility — the patient base case."},
      {label:"Skip the cheap car — robotaxi and Optimus are the whole company now", fx:{cashflow:+6,marketshare:-13,stockprice:+11}, set:["t_robofirst"],
       result:"You bet Tesla isn't a car company and aim everything at the robots. The stock soars on the story; your entry-market share evaporates to BYD while you wait for the future to arrive."},
      {label:"Squeeze the existing lineup for cash; defer the hard choice", fx:{cashflow:+9,marketshare:-8,stockprice:-7},
       result:"You milk Model 3 and Y and refresh nothing brave. Cash now, a visibly aging showroom, and a market that starts to wonder if the magic is gone."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Silicon Famine",
     text:"War freezes Taiwan's fabs and your custom AI silicon — the heart of FSD and the robots — can't be made. Autonomy is your entire valuation thesis and it just lost its supply. Improvise, or stall?",
     voice:"Your CFO: \"Every dollar of our premium is the autonomy story. The autonomy story is stuck in a fab nobody can ship out of.\"",
     choices:[
      {label:"Crash-rewrite the stack to run on whatever chips exist; race to onshore fabrication", fx:{cashflow:-15,marketshare:+9,stockprice:+8}, set:["t_chip_improv"],
       result:"You pull off the firmware miracle you're famous for and keep the autonomy program breathing while rivals idle. Ruinously expensive, and the only thing that protects the thesis.",
       hist:"Consensus call: given Tesla's 2021 chip-shortage playbook, improvising around the famine was the expected base case for this company."},
      {label:"Ration scarce silicon to keep cars shipping; pause the robot/autonomy ramp", fx:{cashflow:+7,marketshare:+5,stockprice:-16},
       result:"You feed the chips to the business that pays the bills and shelve the future. Sensible survival — and a confession to the market that the robot dream is on hold, which the valuation cannot stomach."},
      {label:"Pay grey-market prices for smuggled wafers — keep everything running at any cost", fx:{cashflow:-19,marketshare:+3,stockprice:-4},
       result:"Chips arrive, expensive and uncertain, each shipment one sanctions ruling from vanishing. You keep the lights on and torch the balance sheet doing it."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A new pathogen empties showrooms and clogs ports worldwide. You did this in 2020 and it minted a trillion dollars. Do it again — build into the fear — or protect the cash this time?",
     choices:[
      {label:"Go on offense — two new gigafactories while rivals freeze", fx:{cashflow:-20,marketshare:+14,stockprice:+6}, set:["t_offense"],
       fxIf:[{if:"t_chip_improv", fx:{marketshare:+3}, note:"Your improvised supply chain means the new plants actually have parts to run — the bet compounds."}],
       result:"You pour capital into capacity nobody else dares fund and bet the recovery rewards the brave. If it comes late, the cash crunch is real and your KPIs know it.",
       hist:"Consensus call: given Tesla's 2020 playbook, the market actually expected counter-cyclical aggression — the bold move had become the base case here."},
      {label:"Hunker down — preserve cash, idle expansion, ride it out lean", fx:{cashflow:+12,marketshare:-11,stockprice:-9},
       result:"Prudent for any normal company. For Tesla it reads as a loss of nerve — the premium was always priced on audacity, and caution costs you it."},
      {label:"Pivot the robot fleet to pandemic logistics and supply at cost", fx:{cashflow:-7,marketshare:+4,stockprice:+5},
       result:"Optimus units stocking warehouses become the feel-good story of the crisis and the best product demo in history. Goodwill now, orders later — if the cash holds."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Robots Outgrow the Cars",
     text:"Optimus orders eclipse car orders. Factories, the military, eldercare all want humanoids. The robot business is now bigger, faster, and more feared than Tesla's entire reason for existing. How do you carry it?",
     voice:"A US senator, on cable: \"Mr. Musk is building the machine that replaces the American worker — and calling it a car company.\"",
     choices:[
      {label:"Flood the market — millions of units, fastest ramp in industrial history", fx:{cashflow:-14,marketshare:+16,stockprice:+12}, set:["t_flood"],
       result:"You become the most important — and most feared — manufacturer on Earth. The growth is staggering; the political backlash is volcanic and starts costing you everywhere at once.",
       hist:"Consensus call: once humanoid demand crossed vehicle demand, the Street expected Tesla to chase the bigger market — the base case in the valuation."},
      {label:"Throttle the rollout; fund worker-transition programs to buy political peace", fx:{cashflow:-10,marketshare:+5,stockprice:-8},
       result:"You try to be the adult in the room. Wall Street calls it leaving trillions on the table; history may call it the only thing that kept the torches from the gates."},
      {label:"Spin Optimus into its own company; Tesla stays a (smaller) car maker", fx:{cashflow:+13,marketshare:-9,stockprice:+3}, set:["t_spun"],
       result:"A clean separation unlocks enormous value and quietly demotes the car business to the boring half — making Tesla, at last, the car company you spent a decade insisting it wasn't."}
     ]},
    {id:"b8_verdict", year:"2038", title:"What Tesla Is For",
     text:"The shakeout is over. Half the legacy names are gone. The question Musk spent twenty years provoking finally needs one answer on a 10-K. Point the whole institution at a single North Star.",
     choices:[
      {label:"An AI-and-robotics company that happens to still make cars", fx:{cashflow:+5,marketshare:-6,stockprice:+12},
       result:"You complete the metamorphosis. Cars become a legacy division inside an intelligence company. The believers are vindicated; a piece of automotive history quietly closes."},
      {label:"Recommit to the mission — affordable, autonomous, clean transport for everyone", fx:{cashflow:-8,marketshare:+14,stockprice:+2}, set:["t_recommit"],
       fxIf:[{if:"t_cheapcar", fx:{marketshare:+5,cashflow:+4}, note:"The $25k car you built in 2030 is already the spine of this — you're finishing a job, not starting one."}],
       result:"You aim the robots and the AI back at the original promise and win the mass market you once only gestured at. Less glamorous than robot armies. More world-changing.",
       hist:"Consensus call: patient holders always argued the trillion-dollar prize was affordable autonomous mobility — the base case."},
      {label:"Become the platform — power, batteries, software and silicon for everyone else's cars", fx:{cashflow:+11,marketshare:-12,stockprice:+5},
       result:"You sell the picks and shovels to everyone still mining the showroom. Hugely profitable, strangely invisible — the Intel Inside of a world that forgot you made your own cars."}
     ]}
  ]
};

/* ========================================================================== *
 *  TOYOTA — "The Portfolio Bet"  KPIs: Brand Trust · Production Resilience · Future Readiness
 * ========================================================================== */
if (DATA.toyota) DATA.toyota.eras.future = {
  name:"The Portfolio Bet", years:"2027–2038", start:{cashflow:56, marketshare:58, stockprice:42}, deep:true, stock0:78,
  intro:"For twenty years they called you a dinosaur for refusing to bet everything on battery-electric. You sold more cars than anyone on Earth while they laughed. Your thesis never changed: nobody knows which technology wins, so master all of them and let the future decide. The future is here to decide. Some bets will look like genius; others like the most expensive hedging in industrial history. Eight shocks. The 'Kodak of cars' jibe is waiting to be proven or buried.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Software the Empire Couldn't Write",
     text:"Software is the car now — and it's your great weakness. You build the most reliable hardware on Earth and the most disappointing dashboards. Fix it your way, buy your way out, or refuse the premise?",
     choices:[
      {label:"Partner with a big-tech firm for the OS; keep the hardware sacred", fx:{cashflow:-6,marketshare:+8,stockprice:+6}, set:["y_bigtech"],
       result:"You swallow your pride and let Silicon Valley run the screens. Customers finally get software worthy of the metal — and you've handed the customer relationship to someone else.",
       hist:"Consensus call: after years of software stumbles, a big-tech OS partnership was the expected base case."},
      {label:"Rebuild the in-house OS one more time — own the whole stack or nothing", fx:{cashflow:-16,marketshare:-6,stockprice:+4},
       result:"You bet the company's engineering soul that Toyota discipline can finally crack software. If it slips again, it's the most Toyota failure imaginable — and the lines wait on it."},
      {label:"Decide software is overrated — win on reliability, resale and 300,000-mile dependability", fx:{cashflow:+9,marketshare:-9,stockprice:-10},
       result:"You make a virtue of the gap. A loyal segment loves it; a bigger, younger one shops the glowing screens elsewhere, and 'Future Readiness' takes the hit."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Hedge Pays Off",
     text:"Resource nationalism freezes battery materials worldwide — and hybrids need far smaller batteries than pure EVs. The shortage crippling the BEV-only crowd barely scratches you. Press the hidden advantage?",
     choices:[
      {label:"Flood the world with hybrids while BEV rivals starve for lithium", fx:{cashflow:+13,marketshare:+12,stockprice:+5}, set:["y_hybrid_surge"],
       result:"Your smaller-battery bet becomes a moat you didn't plan. You sell every hybrid you can build into a market where full EVs sit waiting for materials. The philosophy's biggest dividend.",
       hist:"Consensus call: in a materials crunch, Toyota's hybrid-heavy mix was the obvious winner — the base case the bulls awaited."},
      {label:"Spend the windfall vertically integrating battery materials for the EV decade", fx:{cashflow:-15,marketshare:+3,stockprice:+9},
       result:"Instead of just banking the hybrid cash, you lock up mines and refiners for the war to come. Far less profit now, far more resilience when the real BEV fight reaches you."},
      {label:"Stay disciplined — bank the hybrid profit, change nothing", fx:{cashflow:+10,marketshare:+4,stockprice:-12},
       result:"You take the cash and keep your powder dry. Shareholders enjoy the dividend; strategists wonder if you just won a battle and declined to fight the war — 'Kodak' whispers return."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm devastates connected fleets — and yours, mocked for years as under-connected and full of physical buttons, is among the least exposed machines on the road. Overnight, boring and analog is the safest thing you can sell. Lean in?",
     voice:"Your chairman: \"For twenty years they called our caution weakness. This morning it is the only thing keeping our customers' cars off the bottom of the sea.\"",
     choices:[
      {label:"Make 'the car that can't be hacked' the brand of the decade", fx:{cashflow:+6,marketshare:+13,stockprice:+8}, set:["y_unhackable"],
       result:"You turn a decade of ridicule into the campaign of the century. Spooked buyers flood to the brand that never bet the steering column on a modem. Trust compounds.",
       hist:"Consensus call: Toyota's conservative architecture was the natural safe harbor after Entropic — the base case the brand was built to weather."},
      {label:"Spend big to build the most secure CONNECTED platform from scratch", fx:{cashflow:-17,marketshare:+5,stockprice:+6},
       result:"You refuse to be merely the safe option and bid to be the secure one — connectivity done right where everyone else did it recklessly. Ambitious, costly, and a real grab for the software lead you'd been losing."},
      {label:"Quietly harden the connected models; say nothing", fx:{cashflow:-5,marketshare:+2,stockprice:-3},
       result:"Competent and invisible. You protect customers and pass up the single biggest brand opportunity in your history."}
     ]},
    {id:"b4_ice", year:"2030", title:"The ICE Wall — and the Hydrogen Door",
     text:"Combustion's deadline becomes a wall, and the powertrain bets all come due. Your fuel-cell labs — kept open while the world mocked them — suddenly matter for trucks and heavy transport. Commit to hydrogen for the heavy world, go all-EV at last, or keep every door open?",
     alt:[{if:"y_hybrid_surge", text:"The wall arrives with hydrogen roaring back for heavy transport — exactly the fuel-cell bet you never closed. With hybrids already surging, do you reach for the hydrogen frontier too, finally commit all-EV, or keep every door open?"}],
     choices:[
      {label:"Go all-in on hydrogen for trucks, ships, ports and the grid", fx:{cashflow:-14,marketshare:+11,stockprice:+12}, set:["y_hydrogen"],
       result:"The IP you nursed through twenty unfashionable years becomes a whole new industrial business. You don't win hydrogen cars — you win hydrogen everything-bigger-than-a-car. Total vindication.",
       hist:"Consensus call: Toyota's surviving fuel-cell program made it the obvious leader once hydrogen returned for heavy transport — the base case."},
      {label:"Finally commit fully to battery-electric across the lineup", fx:{cashflow:-12,marketshare:-7,stockprice:+8},
       result:"You stop hedging and chase the thing the law demands. Years late to a fight others have been training for — credible, costly, and an admission the doubters had a point."},
      {label:"Keep every door open — hybrid, EV, hydrogen, e-fuel all at once", fx:{cashflow:-9,marketshare:+6,stockprice:-9},
       result:"You double down on openness itself, offering every drivetrain. A genuine differentiator — and a brutal cost burden of spinning every plate while one-bet rivals move faster on each."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes Taiwan's fabs and convulses Pacific trade — and you are the most Japan-anchored, most just-in-time giant in the industry. The chip famine and the regional tension hit your home base hardest. Hold the system together how?",
     choices:[
      {label:"Activate your post-2011 resilience playbook — stockpiles, dual-sourcing, mapped sub-tiers", fx:{cashflow:-8,marketshare:+12,stockprice:+6}, set:["y_resilient"],
       result:"The lessons of the tsunami and the chip shortage pay off. You keep building through the chaos and take share from every rival whose lines went dark. Boring resilience eats fragility alive.",
       hist:"Consensus call: Toyota's hardened supply system made 'keep building' the proven base case in a supply shock."},
      {label:"Diversify production out of the Pacific tension zone — fast, expensive reshoring", fx:{cashflow:-16,marketshare:+4,stockprice:+7},
       result:"You spread manufacturing away from the flashpoint, eating enormous cost to de-risk geography itself. Slow to pay off; invaluable if the conflict deepens."},
      {label:"Ride it out on inventory and home loyalty; change little", fx:{cashflow:+8,marketshare:-10,stockprice:-8},
       result:"You lean on stock and a loyal domestic base. Cheap now — and a gamble that the famine is short, which the lengthening crisis makes look like complacency."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A new pandemic clogs supply chains and empties showrooms. This is the test you were built for — but demand is cratering for everyone. Protect your own lines, or become the industry's lifeboat?",
     choices:[
      {label:"Run the resilience machine — keep building while everyone else stops, take the share", fx:{cashflow:+5,marketshare:+13,stockprice:+5}, set:["y_lifeboat"],
       fxIf:[{if:"y_resilient", fx:{marketshare:+4}, note:"Your already-hardened supply chain means you barely break stride — the share gain compounds."}],
       result:"The stockpiles and dual-sourcing pay off again. You ship through the chaos and take share from every idled rival. It doesn't give back easily.",
       hist:"Consensus call: Toyota's resilience made 'keep building' the expected base case in a downturn."},
      {label:"Open-source your production-resilience methods to save the wider supply base", fx:{cashflow:-9,marketshare:+5,stockprice:+8},
       result:"You teach rivals to survive, because if your tier-3 suppliers die so do you. Statesmanlike and self-interested at once — the goodwill outlasts the outbreak."},
      {label:"Convert idle capacity to medical and emergency equipment at cost", fx:{cashflow:-12,marketshare:+2,stockprice:+4},
       result:"The Toyota Production System builds ventilators the way it builds Corollas. A nation remembers — trust money can't buy, paid for in cash you'll need later."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Robots Come Home",
     text:"Humanoids hit the line and the labor market. You have deep robotics heritage and one of the largest, most loyal workforces in manufacturing — and a company-town social contract the robots could gut. Bring them in how?",
     choices:[
      {label:"Deploy alongside workers; guarantee no forced layoffs, retrain everyone", fx:{cashflow:-13,marketshare:+7,stockprice:+5}, set:["y_with_workers"],
       result:"You choose automation WITH the workforce, not instead of it. Productivity climbs without the social rupture, and 'Toyota looks after its people' becomes worth more than the wage savings.",
       hist:"Consensus call: given lifetime-employment culture, automation that augments rather than replaces was the base case."},
      {label:"Build and sell humanoids as a product — become a robotics company too", fx:{cashflow:-18,marketshare:+10,stockprice:+11},
       result:"You decide the future customer is a factory, not a family, and turn robotics heritage into a new business. Vast TAM; a colossal bet that a car company can out-robot the robot companies."},
      {label:"Move cautiously — pilot quietly, dodge the political firestorm", fx:{cashflow:+6,marketshare:-8,stockprice:-9},
       result:"You let bolder rivals take the heat and the headlines. Safe for the social contract; if humanoids are the next engine, you're idling at the light again."}
     ]},
    {id:"b8_verdict", year:"2038", title:"The Last Dinosaur Standing",
     text:"The shakeout is over and you are, improbably, still the largest automaker on Earth — the company that refused every fashionable bet and outlived the mockers. But 'largest' and 'most valuable' have drifted far apart. Define the next fifty years.",
     choices:[
      {label:"Mobility for all of humanity — every powertrain, every market, the indispensable car", fx:{cashflow:+6,marketshare:+13,stockprice:+2}, set:["y_for_all"],
       fxIf:[{if:"y_hydrogen", fx:{stockprice:+5}, note:"Your hydrogen heavy-transport empire makes 'every market, every fuel' a literal reality no rival can match."}],
       result:"You commit to the role history gave you: putting the whole world on wheels, whatever they run on. Not the most valuable. The most necessary.",
       hist:"Consensus call: Toyota's enduring identity was always universal, affordable mobility — the base case made flesh."},
      {label:"Reinvent as an energy-and-mobility company — hydrogen, batteries, robots, cars", fx:{cashflow:-7,marketshare:+4,stockprice:+12},
       result:"You argue the car was never the point — moving energy and people was — and rebuild around that. A bold late-life metamorphosis that answers 'Kodak' with a new industry."},
      {label:"Stay a pure, disciplined car maker — let others chase robots and hydrogen empires", fx:{cashflow:+9,marketshare:+2,stockprice:-8},
       result:"You decide focus beats sprawl and return to first principles: the best, most reliable cars in the world, full stop. Deeply profitable, deeply unfashionable."}
     ]}
  ]
};

/* ========================================================================== *
 *  BYD — "The Cost-War Champion"  KPIs: Capital · Vertical Integration · Global Standing
 * ========================================================================== */
if (DATA.byd) DATA.byd.eras.future = {
  name:"The Cost-War Champion", years:"2027–2038", start:{cashflow:54, marketshare:62, stockprice:50}, deep:true, stock0:62,
  intro:"You out-built Tesla on volume, out-priced everyone on Earth, and made 'Made in China' mean the future of the car. You mine your own lithium, make your own chips, build your own ships. You are the most vertically integrated automaker in history. But dominance breeds enemies: tariffs on three continents, a government that is both your greatest patron and your greatest risk, and an integration so total that when one link is attacked, the whole chain feels it. Eight shocks will ask whether BYD can be allowed to win.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"Cheap, Good — and Smart?",
     text:"You won on price and integration, but the knock is that your cars are brilliantly built and forgettably smart. Software is the car now. Own the brains in-house like the chassis, rent them, or bet most of humanity just wants a great cheap car?",
     choices:[
      {label:"Pour billions into in-house autonomy and OS — own the full stack", fx:{cashflow:-17,marketshare:+6,stockprice:+9}, set:["by_fullstack"],
       result:"You apply the integration religion to software itself, depending on no one for the car's mind. If it works you're untouchable. The talent war is the hardest fight you've picked.",
       hist:"Consensus call: BYD's identity is owning the stack, so an in-house software push was the base case."},
      {label:"Partner with a top AI firm; keep winning on hardware and price", fx:{cashflow:-5,marketshare:+8,stockprice:+3},
       result:"You stay in your lane — unbeatable metal at an unbeatable price — and rent the genius. Fast and pragmatic, and the one part of the car that's becoming the whole game isn't yours."},
      {label:"Decide smart-enough is enough — win the billions who just want a great cheap car", fx:{cashflow:+10,marketshare:+5,stockprice:-13},
       result:"You aim the whole catalog at the mass market. Hugely right today — and a gamble that the premium, software-defined future never trickles all the way down. The valuation flinches."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Lever You Helped Build",
     text:"Resource nationalism erupts — and your own government tightens the taps. You're integrated enough to survive it, but Beijing wants you to be a weapon: choke supply to foreign rivals through your control of the chain. Patriot, or merchant?",
     choices:[
      {label:"Stay a merchant — keep selling to all, protect your global reputation", fx:{cashflow:-6,marketshare:+7,stockprice:+8}, set:["by_merchant"],
       result:"You quietly resist being a geopolitical cudgel, keeping the world's trust that you're a company, not an arm of the state. Costs you points in Beijing; buys you the benefit of the doubt abroad.",
       hist:"Consensus call: to keep expanding globally, protecting commercial neutrality was the base case foreign markets needed to see."},
      {label:"Align fully with Beijing — weaponize the chain, secure total state backing", fx:{cashflow:+12,marketshare:-3,stockprice:-15}, set:["by_beijing"],
       result:"You become the national champion in full. The subsidies are immense; so is the suspicion that follows you into every market that doesn't love China. Global standing craters."},
      {label:"Hedge — comply at home, spin off an arm's-length foreign entity", fx:{cashflow:-9,marketshare:+3,stockprice:+2},
       result:"You try to be two companies at once. Clever, complicated, and forever one leaked memo from satisfying nobody."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm bricks connected cars — and your enormous, global fleet runs on your own chips and firmware. Western governments, already suspicious, seize the moment to call your cars a national-security backdoor, hacked or not. The accusation is as dangerous as the worm.",
     voice:"A foreign defense minister, on the record: \"We will not have a million Chinese-controlled computers on our motorways. Hacked or not — who holds the keys?\"",
     choices:[
      {label:"Open your code and chips to independent foreign audit — total transparency", fx:{cashflow:-11,marketshare:+5,stockprice:+12}, set:["by_audited"],
       result:"You do what no Chinese champion wants to: hand foreign inspectors the keys and prove there's no backdoor. Humbling, and it works — verified trust is the one thing rivals can't undercut. Beijing is not thrilled.",
       hist:"Consensus call: to keep selling in suspicious markets, third-party audits were the base case for restoring trust."},
      {label:"Refuse the audit as an insult; rely on China and friendly nations", fx:{cashflow:+6,marketshare:-7,stockprice:-16},
       result:"You defend your dignity and watch Western markets wall you out on security grounds you wouldn't disprove. You keep your allies and lose the argument abroad without ever having it."},
      {label:"Launch a 'sovereign edition' — locally-controlled software per wary market", fx:{cashflow:-13,marketshare:+4,stockprice:+5},
       result:"You let each nervous country hold its own keys. Operationally brutal, politically brilliant — you turn the panic into a feature and a reason to keep buying."}
     ]},
    {id:"b4_ice", year:"2030", title:"The War You Started Eats Its Children",
     text:"The combustion world dies, and the price war you weaponized turns cannibal. Dozens of Chinese EV makers are dying, survivors are bleeding, and even you fight on margins a state bank won't tolerate. Beijing wants consolidation — and wants you to lead it.",
     choices:[
      {label:"Lead the consolidation — absorb dying rivals, become the unquestioned giant", fx:{cashflow:-15,marketshare:+14,stockprice:+5}, set:["by_consolidator"],
       result:"You roll up the wreckage of the war you won, emerging as the colossus China wanted. Indigestion is real; so is the political debt you now owe for being chosen.",
       hist:"Consensus call: Beijing's preference for a national champion made BYD the expected consolidator — the base case."},
      {label:"Call a truce — lead the industry to raise prices and restore sane margins", fx:{cashflow:+11,marketshare:-5,stockprice:+7},
       result:"You sheathe the sword you forged and push for profit over slaughter. Margins heal; you look like a statesman — and a few wounded rivals you could have finished live to challenge you."},
      {label:"Keep cutting — finish the war, let the weak die, take it all", fx:{cashflow:-18,marketshare:+9,stockprice:-9},
       result:"You price below cost until the field is bare. You win the share and exhaust your balance sheet, earning a ruthlessness reputation that follows you into every negotiation for a decade."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Silicon Famine",
     text:"War freezes advanced-chip supply. You make many of your own chips, so your lines keep moving — but the most advanced nodes for the autonomy you chased, you still can't make at home. The famine is your sharpest advantage and your last weakness at once.",
     alt:[{if:"by_fullstack", text:"War freezes advanced chips. You make your own — but the cutting-edge nodes your in-house autonomy program devours, you still import. Your great software bet now hangs on the one input you don't control."}],
     choices:[
      {label:"Crash-build domestic advanced-chip capacity with state backing — close the last gap", fx:{cashflow:-19,marketshare:+8,stockprice:+9}, set:["by_chip_sovereign"],
       result:"You and Beijing pour fortunes into the one dependency left. Years and billions — but finish it and you're the only truly end-to-end automaker on Earth, immune to any embargo.",
       hist:"Consensus call: with state support and a chip arm, closing the node gap domestically was the base case in an embargo."},
      {label:"Ration the chip stockpile to keep cheap cars shipping; pause autonomy", fx:{cashflow:+8,marketshare:+10,stockprice:-12},
       result:"You feed scarce silicon to the volume business and shelve the self-driving dream. Pragmatic survival — and a handoff of the autonomy lead to whoever can still get chips."},
      {label:"Buy around the embargo through third countries at any price", fx:{cashflow:-15,marketshare:+3,stockprice:-5},
       result:"A grey-market supply line: chips arrive expensive and uncertain, each shipment one ruling from vanishing. A bridge, not a foundation."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic clogs ports and empties showrooms. You employ nearly a million people and make almost everything in-house — both a fortress and an enormous fixed cost when demand vanishes. Ride your integration, or flex it?",
     choices:[
      {label:"Lean on full integration — keep every link running, supply the world when others can't", fx:{cashflow:-10,marketshare:+12,stockprice:+6}, set:["by_fortress"],
       result:"While rivals' supply chains snap, yours — owned end to end — keeps humming. You ship batteries, masks, and cars when no one else can, and take share that doesn't give back.",
       hist:"Consensus call: BYD's vertical integration made riding it out and supplying the world the base case in a supply shock."},
      {label:"Pivot factories to medical gear and PPE at national scale, at cost", fx:{cashflow:-14,marketshare:+5,stockprice:+7},
       result:"You did exactly this in 2020 and became the world's largest mask maker overnight. You do it again — colossal goodwill, real cash burned, a reputation as the country's industrial backbone."},
      {label:"Protect cash — idle the weakest lines, defer expansion", fx:{cashflow:+11,marketshare:-9,stockprice:-7},
       result:"Disciplined for any normal firm. For the champion that never blinks, caution reads as weakness — and a rival or two grabs the share you were too careful to chase."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The World's Workshop, Automated",
     text:"Humanoids arrive — and you employ the largest workforce in the industry, in a country where social stability is the state's first commandment. The machines could make you the lowest-cost producer forever or trigger the largest labor displacement in Chinese history. Tread carefully.",
     choices:[
      {label:"Automate hard but redeploy workers into your battery, chip and shipping arms", fx:{cashflow:-12,marketshare:+9,stockprice:+5}, set:["by_redeploy"],
       result:"Humanoids take the line while your sprawling empire absorbs the displaced. You get the cost edge without the social explosion — exactly the balance Beijing demands and few can pull off.",
       hist:"Consensus call: in China, automation paired with redeployment for stability was the base case for a champion this size."},
      {label:"Become a humanoid manufacturer yourself — integrate the robots too", fx:{cashflow:-18,marketshare:+8,stockprice:+11},
       result:"Of course you build the robots in-house — you build everything in-house. The most BYD decision possible, and a colossal new front in the global tech war."},
      {label:"Go slow on automation to protect employment and political goodwill", fx:{cashflow:+7,marketshare:-7,stockprice:-8},
       result:"You keep the people and the patronage at a higher cost base. Stability bought with margin — a trade the state remembers fondly and your accountants do not."}
     ]},
    {id:"b8_verdict", year:"2038", title:"The Empire Decides What It Is",
     text:"The shakeout leaves you one of two or three automakers that matter — and far more than an automaker. Batteries, chips, ships, solar, storage, robots: an industrial civilization in corporate form. Western markets stay half-walled. What is BYD, finally?",
     choices:[
      {label:"The world's energy-and-mobility platform — sell the whole stack to everyone", fx:{cashflow:+10,marketshare:+8,stockprice:+7},
       result:"You stop thinking of yourself as a car company and become the infrastructure of the electric age. The car was the first product; the planet's energy transition is the business."},
      {label:"The champion of the affordable EV — put the next two billion people in clean cars", fx:{cashflow:-6,marketshare:+14,stockprice:+4}, set:["by_affordable"],
       result:"You recommit to the founding promise: a good electric car cheap enough for humanity's emerging majority. Less glamorous than empire, more transformative.",
       hist:"Consensus call: BYD's enduring identity was always the affordable EV for the mass global market — the base case beneath the empire."},
      {label:"The neutral global supplier — sell to all sides, belong to none", fx:{cashflow:+8,marketshare:+2,stockprice:+6},
       result:"You become indispensable to everyone and threatening to no one — the Switzerland of the auto-industrial complex. A lucrative tightrope above a very long fall."}
     ]}
  ]
};

/* ========================================================================== *
 *  VOLKSWAGEN — "The Volume Empire Under Siege"  KPIs: Global Scale · Trust & Compliance · Labor Peace
 * ========================================================================== */
if (DATA.vw) DATA.vw.eras.future = {
  name:"The Volume Empire Under Siege", years:"2027–2038", start:{cashflow:42, marketshare:44, stockprice:34}, deep:true, stock0:24,
  intro:"You dreamed of being the biggest carmaker on Earth, and for a while you were. Then China — half your profit — started building better EVs than you, in your own most important market. Your software arm burned billions and shipped disappointment. Your unions hold half the boardroom and the power to block the closures your cost base demands. You are a 90-year-old cathedral with too many workers and a German cost structure in a Chinese-priced world. Eight shocks. Survival means breaking things that were never supposed to break.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Software That Ate Billions",
     text:"Your in-house software unit became a multibillion-euro byword for delay, holding up your most important models for years. Software is the car now — and yours doesn't work. End the agony how?",
     choices:[
      {label:"Partner with an outside AI leader; gut the in-house unit", fx:{cashflow:-9,marketshare:+9,stockprice:+6}, set:["v_outside_sw"],
       result:"You stop pretending Wolfsburg can out-code Silicon Valley. Models ship on time at last — and thousands of software jobs you championed evaporate, another fight with the works council you can't avoid.",
       hist:"Consensus call: after years of failure, an outside partnership was the base case the board and market expected."},
      {label:"Refund and rebuild the in-house unit one last time", fx:{cashflow:-17,marketshare:-7,stockprice:-4},
       result:"You bet again that a German automaker can become a software house if it spends enough. The works council loves the protected jobs; investors brace for the sequel to a flop they've already seen twice."},
      {label:"Buy a working software company outright and bolt it on", fx:{cashflow:-13,marketshare:+5,stockprice:+2},
       result:"You acquire competence instead of cultivating it. The tech is real; jamming a fast startup into a glacial conglomerate is the bug you can't patch."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials — and you bet enormous EV ambitions on supply you don't control. The ID. lineup needs cells you can't fully source. Secure the chain or scale back the dream?",
     choices:[
      {label:"Lock up materials with aggressive long-term mining and refining deals", fx:{cashflow:-16,marketshare:+8,stockprice:+5}, set:["v_secured"],
       result:"You spend big to guarantee the lithium and graphite the EV plan needs. Ruinous now; the difference between building and idling when the next embargo lands.",
       hist:"Consensus call: securing raw-material supply for its EV bet was the expected base case for a scale player."},
      {label:"Scale back EV ambitions to what you can actually supply", fx:{cashflow:+7,marketshare:-10,stockprice:-9},
       result:"You trim the electric dream to fit the materials you can get. Prudent, and a quiet retreat that hands the EV-scale narrative to rivals who didn't blink."},
      {label:"Partner with a Chinese battery giant for guaranteed cells", fx:{cashflow:-6,marketshare:+6,stockprice:-7}, set:["v_china_cells"],
       result:"You secure supply by deepening dependence on a Chinese partner — solving materials and worsening the exact China exposure already hollowing you out."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm savages connected cars — and you just spent a decade turning Volkswagens into software-defined vehicles. Millions of your newest cars are exposed. A company still rebuilding trust from Dieselgate cannot be the brand whose cars get hacked.",
     voice:"A board member: \"We lied about emissions once and nearly died of it. We will not survive being caught hiding this.\"",
     choices:[
      {label:"Massive proactive recall and security overhaul — over-communicate, hide nothing", fx:{cashflow:-18,marketshare:+10,stockprice:+7}, set:["v_transparent"],
       result:"Scarred by Dieselgate, you choose radical transparency: recall everything, explain everything, fix everything in the open. Ruinously expensive and exactly right — the company that lied about emissions becomes the one that told the truth about the worm.",
       hist:"Consensus call: post-Dieselgate, VW could not afford another cover-up — transparency was the only survivable base case."},
      {label:"Quietly patch over the air; downplay the exposure to protect the share price", fx:{cashflow:-5,marketshare:-9,stockprice:-18},
       result:"You manage the news instead of the risk. When the real exposure leaks — and after Dieselgate, everyone is looking — the cover-up costs far more than the worm. History rhymes, and Trust collapses."},
      {label:"Lean into your older, less-connected models as the safe alternative", fx:{cashflow:+4,marketshare:+3,stockprice:-6},
       result:"You dust off the simpler cars and sell safety-through-simplicity — a clever pivot that quietly undercuts the entire software-defined strategy you spent a fortune building."}
     ]},
    {id:"b4_ice", year:"2030", title:"The ICE Wall",
     text:"The deadline becomes a wall. You have one of the largest ICE businesses on the planet and a half-built electric future that loses money. Europe says stop; emerging markets say keep going; your balance sheet can't fully afford either path alone.",
     choices:[
      {label:"Split the company: a clean-EV 'New VW' and a cash-generating 'Classic' ICE arm", fx:{cashflow:+9,marketshare:+4,stockprice:+10}, set:["v_split"],
       result:"You carve the empire in two — a focused electric future and a combustion business milked for cash in markets that still want it. Financial engineering as strategy; each half finally legible to investors who'd given up.",
       hist:"Consensus call: separating the structurally-different EV and ICE businesses was a base case investors increasingly demanded."},
      {label:"Go all-in on EVs in Europe; keep ICE only for emerging markets", fx:{cashflow:-13,marketshare:+6,stockprice:+3},
       result:"You run two calendars — electric where the law demands, combustion where the customer wants. Coherent on a map; exhausting to operate, and a strain on the cash you don't have."},
      {label:"Slow-walk EVs; defend the profitable ICE core as long as legally possible", fx:{cashflow:+11,marketshare:-9,stockprice:-10},
       result:"You squeeze the combustion cash cow for every euro the regulators allow. Profitable today, and the exact complacency that let China and Tesla pass you the first time."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock — and the China Reckoning",
     text:"War around Taiwan freezes chips and forces every Western firm to pick a side on China. China was half your profit and is now eating you alive there anyway. The crisis forces the decision you've dodged for a decade.",
     alt:[{if:"v_china_cells", text:"War around Taiwan freezes chips and forces a China reckoning — and you deepened your dependence on a Chinese battery partner just two years ago. The bill for that comes due now, all at once."}],
     choices:[
      {label:"Go fully local in China — Chinese R&D, partners, speed; decouple it from Wolfsburg", fx:{cashflow:-14,marketshare:+9,stockprice:+6}, set:["v_china_local"],
       result:"You hand real power to your China operation to claw back relevance at Chinese tempo, while ring-fencing it from the geopolitical blast radius. Headquarters hates the lost control; the market finally stops shrinking.",
       hist:"Consensus call: 'in China, for China' localization plus decoupling was the expected survival base case in a Taiwan crisis."},
      {label:"Retreat from China; refortify Europe and North America", fx:{cashflow:+8,marketshare:-13,stockprice:-6},
       result:"You cut losses in the market you can't win and dig trenches where you still can. Defensible — and a historic admission that the VW-conquers-China dream is dead, taking a third of your scale with it."},
      {label:"Stay the course and ride out the chip famine on inventory and hope", fx:{cashflow:+5,marketshare:-11,stockprice:-12},
       result:"You change nothing and pray the crisis is short. The fabs stay frozen, your China share keeps falling, and the indecision costs you on every front at once."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic clogs ports and empties showrooms just as your cost crisis peaks. Your bloated German cost base, survivable in good years, is lethal in a demand collapse. Cut, protect, or use the chaos as cover?",
     choices:[
      {label:"Use the crisis as cover to finally close the plants you never could in peacetime", fx:{cashflow:+12,marketshare:-6,stockprice:+8}, set:["v_closed_plants"],
       result:"In the fog of crisis you do the thing no VW boss has done and survived — shutter German capacity. The strikes are brutal, the politics vicious; on the other side, for the first time in years, the numbers work.",
       hist:"Consensus call: investors' base case was that VW would eventually use a downturn to force the German closures it couldn't otherwise."},
      {label:"Lean on German short-time-work schemes; protect every job, share the burden with Berlin", fx:{cashflow:-9,marketshare:+2,stockprice:-5},
       result:"You preserve the workforce and the social peace with state-backed furloughs. Labor loves you; the cost problem is deferred, not solved, and the cash keeps draining."},
      {label:"Cut everywhere except German plants; thin the rest of the empire", fx:{cashflow:+6,marketshare:-8,stockprice:-7},
       result:"You protect the politically untouchable core and gut everything else. The cost base stays bloated where it matters most, and the reckoning simply waits for your successor."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"Robots Meet the Works Council",
     text:"Humanoids reach the line — and the works council holds half your supervisory board and Lower Saxony a blocking stake. The robots could finally fix your cost base, or trigger the most explosive strike in your history. This is the fight that ends CEOs.",
     voice:"The head of the works council: \"You will bring robots in over our seats on this board, or you will not bring them in at all. Choose your legacy.\"",
     choices:[
      {label:"Negotiate a grand bargain — automation paired with retraining and job guarantees", fx:{cashflow:-11,marketshare:+6,stockprice:+5}, set:["v_grand_bargain"],
       result:"You buy labor peace with a complex deal that trades flexibility for security. The cost gap narrows without a war; expensive, and the only path that doesn't end your tenure on a picket line.",
       hist:"Consensus call: given the works council's power, a negotiated automation-with-guarantees deal was the expected base case."},
      {label:"Force automation through to fix the cost base; take the strike", fx:{cashflow:+10,marketshare:-12,stockprice:-6},
       result:"You decide competitiveness can't wait for consensus. The cost gap closes; the strike is brutal, the political fallout severe, and Labor Peace cracks in a way that may never fully heal."},
      {label:"Go slow to preserve labor peace; accept the higher cost base", fx:{cashflow:-6,marketshare:-4,stockprice:-7},
       result:"You keep the people and the peace and a standing gift to every fully-automated rival underpricing you on the same lot."}
     ]},
    {id:"b8_verdict", year:"2038", title:"What Survives of Wolfsburg",
     text:"The shakeout is over. The volume-at-all-costs empire is gone, one way or another. What's left of Volkswagen must stand for something a Chinese rival can't simply out-price. Define it.",
     choices:[
      {label:"A leaner, premium-leaning European champion — fewer cars, higher value", fx:{cashflow:+9,marketshare:-4,stockprice:+6},
       result:"You give up 'biggest' for the dignity of 'sustainable' — fewer, better, more profitable cars under brands that still mean something. Smaller than the 2015 dream, and finally, durably, alive."},
      {label:"The people's-car mission reborn — affordable EVs for the European mainstream", fx:{cashflow:-7,marketshare:+13,stockprice:+3}, set:["v_peoples_car"],
       result:"You return to Ferdinand Porsche's founding idea and build the cheap, honest EV Europe couldn't get anywhere but China. The whole point of the company, ninety years late and exactly on time.",
       hist:"Consensus call: VW's enduring identity was always the affordable car for the masses — the 'people's car' base case."},
      {label:"A federation of strong brands — Porsche, Audi, VW — each standing alone", fx:{cashflow:+7,marketshare:+2,stockprice:+8},
       result:"You stop pretending the conglomerate is one thing and let each great brand run its own race. Less empire, more alliance — the parts finally worth more, and freer, than the whole."}
     ]}
  ]
};

/* ========================================================================== *
 *  BMW — "Driving Pleasure in an Autonomous Age"  KPIs: EBIT Margin · Driving Pleasure · Tech Openness
 * ========================================================================== */
if (DATA.bmw) DATA.bmw.eras.future = {
  name:"Driving Pleasure in an Autonomous Age", years:"2027–2038", start:{cashflow:56, marketshare:60, stockprice:42}, deep:true, stock0:96,
  intro:"You refused to bet the company on one powertrain and called it 'technology openness' — combustion, hybrid, battery, even a quiet hydrogen fleet. The purists who mocked the hedging went silent as your margins stayed among the industry's best. But you sell something more fragile than share: the promise that a BMW is the car you actually want to drive. In a world racing toward cars that drive themselves — and get hacked — 'the ultimate driving machine' is either a timeless moat or a beautiful anachronism. Eight shocks decide which.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Machine That Drives Itself",
     text:"Software is the car, and autonomy strikes at your soul. Your whole brand is the joy of driving — but customers increasingly want the car to do it for them. Lean into self-driving and risk becoming 'an expensive computer with a roundel', or defend the wheel as a luxury?",
     voice:"Your brand chief: \"Everyone else is racing to take the driving away. We're the one company whose customers might pay more to keep it.\"",
     choices:[
      {label:"Make driving pleasure the luxury — world-class autonomy you can switch OFF to drive", fx:{cashflow:-8,marketshare:+11,stockprice:+7}, set:["m_pleasure"],
       result:"Let the car drive in traffic, then hand back a chassis engineered to thrill. 'The ultimate driving machine, when you want to be the one driving' becomes the most defensible luxury pitch in the industry.",
       hist:"Consensus call: BMW's base case was making engaged driving the premium feature in an autonomous world."},
      {label:"Go all-in on autonomy to keep up; retire the driver-focus messaging", fx:{cashflow:-12,marketshare:+3,stockprice:-9},
       result:"You chase the frontier and start sounding like everyone else — technologically credible, and the owner of no story no rival could tell. You become the very thing you feared."},
      {label:"Resist autonomy as a gimmick; bet the joy of driving never goes out of style", fx:{cashflow:+7,marketshare:-12,stockprice:-8},
       result:"You plant a flag for the human driver. Beloved by enthusiasts, and a dangerous wager that the mass premium buyer won't defect to the car that lets them work, sleep, or scroll the commute."}
     ]},
    {id:"b2_materials", year:"2028", title:"Openness Meets the Squeeze",
     text:"The materials war freezes battery supply — and because you never bet the whole company on one chemistry, you're exposed less than the BEV purists. The hedging mocked for a decade quietly becomes an advantage. Press it, or protect the margin?",
     choices:[
      {label:"Use your flexibility — shift the mix toward hybrids and hydrogen where materials allow", fx:{cashflow:+9,marketshare:+8,stockprice:+8}, set:["m_multipath"],
       result:"Your multi-powertrain range lets you build what you can source while pure-EV rivals idle. 'Technology openness' stops being a slogan and starts being a moat.",
       hist:"Consensus call: leveraging powertrain flexibility through a materials crunch was the expected base case for BMW."},
      {label:"Spend to lock up premium battery materials for a serious EV push", fx:{cashflow:-15,marketshare:+5,stockprice:+4},
       result:"You bet the premium future is still electric and pay up to secure it, eating into the sacred margin band. A real commitment — and a real test of how much margin the board will sacrifice."},
      {label:"Hold the line on margin — raise prices, build fewer, ride out the shortage", fx:{cashflow:+6,marketshare:-9,stockprice:-6},
       result:"You protect profitability by selling scarcity. Defensible for a luxury maker; a quiet ceding of volume and momentum to rivals willing to fight for it."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm cripples connected fleets. Your customers paid for the best engineering on the road and expect it to protect them — a hacked BMW is a contradiction in terms. But your driving-focused and hydrogen models are among the least software-dependent on sale. Position how?",
     choices:[
      {label:"Make 'engineered to be unhackable' the new pillar of German engineering", fx:{cashflow:-10,marketshare:+12,stockprice:+6}, set:["m_secure"],
       result:"You fold security into the brand the way you folded in handling — provable, audited, premium safety from the network up. The nervous affluent buyer, the most loyal there is, decides the roundel is the safe badge. Trust becomes margin.",
       hist:"Consensus call: for a premium engineering brand, making verifiable security a core value was the expected base case after Entropic."},
      {label:"Rush a connected-car security overhaul to match the new standard", fx:{cashflow:-9,marketshare:+4,stockprice:+2},
       result:"You do the necessary work without making a philosophy of it. Competent, and you leave the powerful 'the car that can't be hacked' positioning on the table for a rival to grab."},
      {label:"Spotlight your driving-focused, less-connected cars as the safe choice", fx:{cashflow:+5,marketshare:+4,stockprice:-6},
       result:"You point buyers to the purist machines with fewer attack surfaces. It sells — and subtly tells the market your own connected flagships are the ones to worry about."}
     ]},
    {id:"b4_ice", year:"2030", title:"The ICE Wall — and the Hydrogen Door",
     text:"The deadline becomes a wall, and the powertrain bets come due. Hydrogen roars back for premium and long-distance use — and you're one of the few who kept a real fuel-cell program alive. The openness everyone mocked hands you a head start. How hard do you cash it in?",
     alt:[{if:"m_multipath", text:"The wall arrives and hydrogen roars back for premium long-distance use — and you spent 2028 leaning into exactly this flexibility. The head start is real. How hard do you press it?"}],
     choices:[
      {label:"Launch a full hydrogen model line — vindicate the openness bet completely", fx:{cashflow:-15,marketshare:+9,stockprice:+11}, set:["m_hydrogen"],
       result:"You turn a quiet hedge into a headline business — premium hydrogen cars for the long-haul affluent who never loved charging. The openness you defended for fifteen years becomes a product nobody else can match.",
       hist:"Consensus call: BMW's preserved fuel-cell program made a real hydrogen launch the base case once the market returned."},
      {label:"Co-develop hydrogen with a partner to share the cost and risk", fx:{cashflow:-6,marketshare:+6,stockprice:+5},
       result:"You bring in a partner to split the bill. Smaller upside, smaller risk, faster to market than going alone — sensible, if less heroic."},
      {label:"Keep hydrogen a halo program; don't bet the brand on it yet", fx:{cashflow:+5,marketshare:-7,stockprice:-8},
       result:"You let the fuel-cell fleet prove itself slowly. Disciplined, and a risk that the window for a premium hydrogen lead closes while you admire how open-minded you were to keep it ajar."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes chips and convulses trade — and China is your single largest market, full of buyers who can suddenly turn on a foreign luxury badge overnight. The premium customer is fickle and the supply is frozen. Hold the line how?",
     choices:[
      {label:"Localize premium production and chips in your key regions to ride out the shock", fx:{cashflow:-14,marketshare:+7,stockprice:+6}, set:["m_localized"],
       result:"You regionalize the supply chain and the build, eating cost to keep the premium flowing whatever the geopolitics. Slow and expensive; the difference between selling and idling if the conflict drags.",
       hist:"Consensus call: localizing premium production and silicon to weather a Taiwan shock was the expected base case."},
      {label:"Pull back from China; pivot luxury growth to the US, Gulf and India", fx:{cashflow:+6,marketshare:-10,stockprice:-5},
       result:"You hedge your biggest market by chasing wealth elsewhere. Diversifying and slow — and a surrender of the China volume that underwrites the margin band."},
      {label:"Ration chips to your highest-margin cars; let the rest of the lineup wait", fx:{cashflow:+8,marketshare:-8,stockprice:-6},
       result:"You feed the scarce silicon to the 7-Series and the M cars and starve the volume models. Margin holds; the showroom thins, and buyers who waited go elsewhere."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic empties showrooms. Luxury is volatile in a crisis — the affluent stop spending conspicuously when the world is on fire. Protect the margin band, or invest through the downturn?",
     choices:[
      {label:"Hold margin discipline — cut output, protect pricing, never discount the brand", fx:{cashflow:+10,marketshare:-7,stockprice:+5}, set:["m_held_margin"],
       result:"You refuse to chase volume or discount your way through the fear, protecting the 8–10% band that defines you. Painful in the quarter, essential to the brand — a luxury maker that panics isn't one for long.",
       hist:"Consensus call: defending the margin band rather than chasing volume was the expected base case for BMW in a downturn."},
      {label:"Invest through it — launch into the recovery while rivals freeze", fx:{cashflow:-13,marketshare:+9,stockprice:+4},
       result:"You spend into the fear, betting the rebound rewards whoever shows up with new product first. Bold, and a real strain on the margin discipline that is your whole identity."},
      {label:"Lean on financial services and used-car remarketing to ride out soft sales", fx:{cashflow:+4,marketshare:-3,stockprice:-2},
       result:"You let the captive-finance arm carry the quarter while new-car demand sleeps. Steady and unglamorous — and a deferral of the product investment the recovery will reward."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Humanoid Reckoning",
     text:"Humanoids reach the line. You build cars in precise, premium volumes with a skilled workforce that is itself part of the brand promise. Automate for cost, or protect the human craft your buyers pay for?",
     choices:[
      {label:"Automate precisely — robots for consistency, humans for the craft buyers pay for", fx:{cashflow:-9,marketshare:+7,stockprice:+5}, set:["m_precise_auto"],
       result:"You use humanoids where they lift quality and keep human hands where they signal craft. Premium consistency rises without gutting the workforce — the most BMW way to automate.",
       hist:"Consensus call: precision automation that protects the premium-craft promise was the expected base case for BMW."},
      {label:"Go fully automated to slash cost and fund the tech transition", fx:{cashflow:+9,marketshare:-9,stockprice:-5},
       result:"You chase the cost savings hard. The margin improves; the 'hand-built precision' story frays, and a piece of why people pay extra quietly leaves the building."},
      {label:"Move cautiously — protect jobs and brand, automate slowly", fx:{cashflow:-5,marketshare:+2,stockprice:-6},
       result:"You preserve the workforce and the mystique at a higher cost base — safe for the brand, and a gift to rivals automating faster on the same segment."}
     ]},
    {id:"b8_verdict", year:"2038", title:"The Last Driver's Car",
     text:"The industry has reshaped itself around autonomy, electrification, and software. BMW is still independent, still profitable, still German. But what is 'the ultimate driving machine' for, in a world that mostly doesn't drive?",
     choices:[
      {label:"The world's definitive driver's brand — the car people choose when they choose to drive", fx:{cashflow:+6,marketshare:+8,stockprice:+5}, set:["m_definitive_driver"],
       fxIf:[{if:"m_pleasure", fx:{marketshare:+4}, note:"You spent the whole era making engaged driving the luxury — the brand arrives at 2038 already meaning exactly this."}],
       result:"You become to driving what a mechanical watch is to telling time: unnecessary, deliberate, and exactly the point. A fiercely loyal market pays a premium for the feeling everyone else automated away.",
       hist:"Consensus call: BMW's durable identity was always engaged driving as a premium choice — the base case that outlived every powertrain debate."},
      {label:"A premium tech-and-mobility house — openness applied to everything, not just powertrains", fx:{cashflow:+4,marketshare:+3,stockprice:+9},
       result:"You extend 'technology openness' to the whole business — software, autonomy, energy, services — a nimble premium tech company that happens to make beautiful cars."},
      {label:"Merge up — combine with another premium maker to guarantee scale and survival", fx:{cashflow:+8,marketshare:-3,stockprice:+2},
       result:"You trade some independence for the scale the new world demands. The roundel survives, sharing a parent — insurance against being the great brand too proud to combine in time."}
     ]}
  ]
};

/* ========================================================================== *
 *  MERCEDES-BENZ — "Fewer Cars, Mean More"  KPIs: Cashflow · Market Share · Stock Price
 * ========================================================================== */
if (DATA.mercedes) DATA.mercedes.eras.future = {
  name:"Fewer Cars, Mean More", years:"2027–2038", start:{cashflow:54, marketshare:52, stockprice:46}, deep:true, stock0:62,
  intro:"You made the boldest bet in your 140-year history: retreat up-market, build fewer cars, mean more — Rolls-Royce economics with a three-pointed star. You walked back the all-electric-by-2030 vow, took the heat, and kept the combustion S-Class beside the electric ones. Now eight shocks test the luxury thesis from every side: a software era you nearly lost, a Chinese luxury market that may evaporate, an autonomy lead that could redefine the chauffeur, and an AI catastrophe that makes the most connected, most expensive cars the most exposed.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Brain Behind the Star",
     text:"You bet on building MB.OS, your own operating system, rather than handing the dashboard to big tech. In a software-defined world it's your shot at owning the customer — costly, and rivals who outsourced ship faster. Stay the course, or change tack?",
     choices:[
      {label:"Commit fully to MB.OS — the software experience IS the modern luxury", fx:{cashflow:-13,marketshare:+7,stockprice:+8}, set:["d_mbos"],
       result:"A true luxury house controls the whole experience, screen to seat. Expensive and slow — and the thing that keeps the customer relationship, the data, and the upgrade revenue yours instead of rented to Silicon Valley.",
       hist:"Consensus call: for a luxury brand guarding its customer relationship, finishing MB.OS in-house was the expected base case."},
      {label:"Blend in a big-tech layer for speed; keep the luxury UI on top", fx:{cashflow:-5,marketshare:+6,stockprice:+3},
       result:"Big tech's plumbing under your tailored surface. Faster to ship, and a quiet dependency on a partner who now knows exactly how your most valuable customers behave."},
      {label:"Decide software isn't where luxury is won — pour the money into craft and materials", fx:{cashflow:+8,marketshare:-9,stockprice:-11},
       result:"You bet hand-stitched leather still beats any app. A real point of view, and a dangerous one if the next generation of wealth grew up valuing the screen over the seat."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials. Your electric flagships need premium cells, and luxury buyers won't accept compromised range or a stalled launch. Secure supply at a premium, or lean on combustion while it lasts?",
     choices:[
      {label:"Pay whatever it takes to secure premium cells for the electric flagships", fx:{cashflow:-15,marketshare:+7,stockprice:+6}, set:["d_secured"],
       result:"You guarantee the materials your top EVs need, cost be damned — a luxury house can't ship a flagship that's out of stock or out of range. Brutal on cash; protective of the brand.",
       hist:"Consensus call: securing premium cell supply to protect flagship EVs was the expected base case for a luxury maker."},
      {label:"Lean on the combustion S-Class and hybrids while the shortage bites", fx:{cashflow:+9,marketshare:-6,stockprice:-8},
       result:"You let the gas flagships carry you through the squeeze. Profitable now — and a quiet signal that your electric-luxury future bends the moment materials get tight."},
      {label:"Slow the EV rollout; wait for materials to normalize", fx:{cashflow:+5,marketshare:-10,stockprice:-9},
       result:"You defer the electric push rather than overpay. Disciplined, and a second walk-back of the electric timeline that hands the EV-luxury narrative to a rival who held firm."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm devastates connected fleets. Your cars are among the most software-laden and expensive on Earth — the definition of a high-value target. A hacked Mercedes is a luxury nightmare on every screen. Protect the most prestigious badge in motoring how?",
     voice:"Your CFO: \"The wealthy fear exposure more than expense. Sell them protection, and they will not even ask the price.\"",
     choices:[
      {label:"Make verifiable security a luxury feature — concierge-grade digital protection", fx:{cashflow:-12,marketshare:+11,stockprice:+6}, set:["d_lux_security"],
       result:"You wrap security in white gloves: audited, guaranteed, personally supported. The affluent buyer decides the star is the safe place to spend. Discretion becomes the ultimate luxury.",
       hist:"Consensus call: for a luxury brand, turning security into a premium guaranteed service was the expected base case after Entropic."},
      {label:"Rush a fleet-wide security overhaul; absorb the cost silently", fx:{cashflow:-9,marketshare:+3,stockprice:+1},
       result:"You fix the exposure quietly and eat the cost rather than advertise the danger. Dignified, and a passed chance to turn the industry's worst moment into your brand's finest distinction."},
      {label:"Offer an ultra-exclusive 'analog' flagship — minimal connectivity, maximal craft", fx:{cashflow:+4,marketshare:+4,stockprice:-5},
       result:"A deliberately disconnected halo car for buyers who now equate connectivity with vulnerability. Brilliant marketing — and a subtle confession that your connected cars are the ones at risk."}
     ]},
    {id:"b4_ice", year:"2030", title:"The ICE Wall",
     text:"The deadline becomes a wall, and it lands on the combustion S-Class — the soul of the brand and a profit engine. Electrify the flagship fully, keep combustion alive for the markets that want it, or split the difference?",
     choices:[
      {label:"Make the electric flagship the definitive Mercedes — combustion becomes the past", fx:{cashflow:-12,marketshare:+8,stockprice:+9}, set:["d_electric_flag"],
       result:"You commit the soul of the brand to electrons, betting the S-Class can lead the luxury world into the future as it always led it into the past. Costly, brave, and the cleanest answer to the wall.",
       hist:"Consensus call: making the electric flagship the definitive Mercedes was the expected base case at the ICE deadline."},
      {label:"Keep the combustion S-Class as the true flagship for as long as legal", fx:{cashflow:+10,marketshare:-8,stockprice:-9},
       result:"You bet the wealthiest buyers want the engine and the badge, deadlines be damned. Profitable now — and a wager that the law, and the next generation, don't move faster than you think."},
      {label:"Run both flagships indefinitely — electric and combustion side by side", fx:{cashflow:-7,marketshare:+4,stockprice:-6},
       result:"You refuse to choose and carry two flagships at once. Something for everyone, and a complexity cost that quietly erodes the focus 'fewer cars, mean more' was supposed to buy."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"When the Chinese Billionaire Stops Buying",
     text:"War around Taiwan freezes chips and chills China — the beating heart of your luxury strategy. A property crash and surging domestic luxury brands had your richest market wobbling; the crisis tips it over. Does the luxury-first bet survive a Chinese collapse?",
     voice:"Your CFO: \"Half the math behind 'fewer cars, mean more' assumed China's rich kept getting richer and kept buying German. Both just stopped being true.\"",
     choices:[
      {label:"Hold the line — defend pricing and exclusivity even as Chinese volume falls", fx:{cashflow:-10,marketshare:-7,stockprice:+7}, set:["d_held_line"],
       result:"You refuse to discount your way out, protecting scarcity even as the chart sags. Painful, and essential — a luxury house that chases volume in a downturn stops being one.",
       hist:"Consensus call: the whole 'mean more' strategy demanded holding price and exclusivity through a soft patch — the disciplined base case."},
      {label:"Broaden back down a tier — re-enter the cars you abandoned to chase volume", fx:{cashflow:+8,marketshare:+9,stockprice:-12},
       result:"You quietly walk back the luxury retreat and rebuild the entry models, chasing the volume China no longer gives. The factories hum again; the strategy that defined your era is, in effect, repealed."},
      {label:"Pivot luxury growth to new geographies — India, the Gulf, Southeast Asia", fx:{cashflow:-9,marketshare:+5,stockprice:+3}, set:["d_new_geos"],
       result:"You hunt the next generation of wealth wherever it's minted. Slow to build, and a genuine diversification of the one bet luxury can't afford to keep in a single country."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic empties showrooms worldwide. Conspicuous luxury is the first spending to vanish when the world is afraid — but the truly wealthy are the most insulated of all. Protect the brand, or seize the moment?",
     choices:[
      {label:"Protect scarcity and pricing; quietly serve the ultra-wealthy who never stop buying", fx:{cashflow:+9,marketshare:-6,stockprice:+5}, set:["d_scarcity"],
       result:"You let the mass market sleep and lavish attention on the top tier, whose wealth a pandemic barely touches. Margin holds, exclusivity deepens — the discipline of a real luxury house under stress.",
       hist:"Consensus call: defending scarcity and serving the insulated ultra-wealthy was the expected base case for a luxury brand in a downturn."},
      {label:"Invest through it — launch Maybach and AMG halo products into the fear", fx:{cashflow:-12,marketshare:+7,stockprice:+4},
       result:"You bet the recovery rewards desire, and pour money into the most aspirational products precisely when rivals retreat. Bold, and a real strain on cash the crisis is already draining."},
      {label:"Lean on financial services and lease remarketing to ride out the slump", fx:{cashflow:+4,marketshare:-3,stockprice:-2},
       result:"You let the finance arm carry the quarter. Steady — and a deferral of the halo investment the recovery will reward whoever made it."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Humanoid Reckoning",
     text:"Humanoids reach the line. Your buyers pay for hand-finished craft as much as engineering. The robots could slash cost or hollow out the artisanal promise the price tag rests on. Bring them in how?",
     choices:[
      {label:"Automate the unseen; keep visible craft in human hands as a luxury signal", fx:{cashflow:-9,marketshare:+7,stockprice:+5}, set:["d_craft_auto"],
       result:"Robots handle what no one sees; artisans handle what buyers touch and brag about. Cost falls where it can without touching the hand-built story the brand sells.",
       hist:"Consensus call: automating the unseen while preserving visible craft was the expected base case for a luxury maker."},
      {label:"Fully automate for cost; let 'engineered, not hand-built' become the new pitch", fx:{cashflow:+9,marketshare:-10,stockprice:-6},
       result:"You chase the savings and rewrite the story around precision over craft. The margin improves; a piece of why a Mercedes commands its price quietly leaves the factory floor."},
      {label:"Resist automation to protect the artisanal brand; accept higher cost", fx:{cashflow:-6,marketshare:+3,stockprice:-5},
       result:"You keep the human craft and the cost that comes with it — protective of the mystique, and a burden rivals automating around you don't carry."}
     ]},
    {id:"b8_verdict", year:"2038", title:"The Meaning of the Star",
     text:"The industry has consolidated, electrified, and automated. The luxury-first bet either made you the most profitable car company per unit on Earth or stranded you above a market that moved on. Define what the three-pointed star means for the next century.",
     choices:[
      {label:"The world's definitive luxury house — cars, and beyond cars, the symbol of having arrived", fx:{cashflow:+8,marketshare:+4,stockprice:+8}, set:["d_definitive_lux"],
       fxIf:[{if:"d_held_line", fx:{stockprice:+4}, note:"You defended exclusivity through the China collapse — the brand arrives at 2038 with its scarcity, and its pricing power, fully intact."}],
       result:"You complete the transformation into a true luxury maison — the automotive Hermès — where the car is the flagship of a whole world of desire. Fewer cars, far more meaning, margins the volume players never touch.",
       hist:"Consensus call: the endpoint of 'fewer cars, mean more' was always Mercedes as a pure luxury house — the base case the era was building toward."},
      {label:"A broad premium-mobility company — luxury at the top, technology all the way down", fx:{cashflow:+5,marketshare:+9,stockprice:+2},
       result:"You decide pure luxury is too narrow a perch and rebuild a fuller range beneath the halo. More volume, more reach, and a quiet retreat from the boldest idea your era produced."},
      {label:"The pinnacle of autonomous luxury — the finest way ever made to be driven", fx:{cashflow:-4,marketshare:+6,stockprice:+9},
       result:"You fuse heritage and autonomy: the most exquisite experience of being moved that has ever existed. The chauffeur, perfected — a 140-year-old company finding its future hidden in its oldest tradition."}
     ]}
  ]
};

/* ========================================================================== *
 *  GENERAL MOTORS — "The Company That Died Once"  KPIs: Solvency · Washington & Labor · Future Readiness
 * ========================================================================== */
if (DATA.gm) DATA.gm.eras.future = {
  name:"The Company That Died Once", years:"2027–2038", start:{cashflow:50, marketshare:46, stockprice:44}, deep:true, stock0:48,
  intro:"2009 taught you that solvency is a strategy, not an afterthought. You bet the garage on an electric future and a driverless one, and both bruised you. The UAW costs you more than any foreign rival pays; Washington is your regulator, occasional shareholder, and political weather; China, once your biggest market, has turned hostile and homegrown. Over the next eleven years the robot arrives — in the road, on the line, everywhere — and the company that already died once has to prove it learned how not to die again.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Cruise Question",
     text:"Your autonomy unit has burned billions and lurched from promise to scandal. Software is the car now. Self-driving is either the future of your business or a money pit with a logo. Recommit, refocus, or spin it out?",
     voice:"Your CFO: \"We've spent enough on autonomy to have bought a second company. The board wants to know if we own the future or just rent the headlines.\"",
     choices:[
      {label:"Refocus autonomy on personal vehicles and your own fleet; fold the robotaxi moonshot", fx:{cashflow:+8,marketshare:+4,stockprice:+3}, set:["g_av_refocus"],
       result:"You put the tech where you actually make money — hands-free driving in cars people buy — and stop chasing the driverless-taxi dream. Less visionary, far more bankable.",
       hist:"Consensus call: after years of losses and scandal, refocusing AV spend on personal-vehicle autonomy was the expected base case."},
      {label:"Recommit hard to robotaxis — own a city, prove the model, scale it", fx:{cashflow:-17,marketshare:+7,stockprice:+6}, set:["g_robotaxi"],
       result:"You decide you've come too far to fold and pour in another fortune. High variance, high stakes — vindication or the most expensive mistake in a company famous for them."},
      {label:"Spin the AV unit out to raise capital and offload the risk", fx:{cashflow:+11,marketshare:-4,stockprice:+2},
       result:"You let the moonshot raise its own money. Disciplined — and if autonomy does take off, you'll have sold the future to fund the present."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials, and your Ultium electric future runs on cells you don't fully control. The EV pivot you staked the company on suddenly depends on Beijing's goodwill. Secure the chain or slow the pivot?",
     choices:[
      {label:"Build a North American battery-materials supply chain with federal backing", fx:{cashflow:-16,marketshare:+8,stockprice:+6}, set:["g_onshore"],
       result:"You spend big — and lean on Washington — to onshore the materials Ultium needs. Ruinous now; the difference between leading the EV transition and watching it stall.",
       hist:"Consensus call: onshoring battery materials with government support was the expected base case for an American champion."},
      {label:"Slow the EV pivot back toward what you can supply and what sells: trucks", fx:{cashflow:+9,marketshare:-9,stockprice:-10},
       result:"You retreat to the profitable combustion heartland and let the EV timeline slip. Cash-positive, and a surrender of the future-readiness you'd promised investors."},
      {label:"Deepen a Chinese battery partnership for guaranteed cells", fx:{cashflow:-5,marketshare:+5,stockprice:-9},
       result:"You secure supply by tying yourself closer to a Chinese partner — at the exact moment Washington is scrutinizing who's in bed with whom. Solvency steadies; the politics curdle."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm cripples connected cars — and you are a critical-infrastructure-scale American manufacturer with millions of software-defined vehicles and a security-anxious federal government as your closest stakeholder. Washington expects you to be part of the solution, not a headline.",
     choices:[
      {label:"Lead the national response — partner with the government on a secure-vehicle standard", fx:{cashflow:-13,marketshare:+9,stockprice:+6}, set:["g_natl_security"],
       result:"You make GM the patriotic backbone of the recovery and help write the standard everyone must meet. Costly — and it converts your oldest relationship into your sharpest weapon.",
       hist:"Consensus call: leveraging deep Washington ties into a national security-standard role was the expected base case for GM."},
      {label:"Quietly secure your own fleet first; avoid the spotlight and the cost", fx:{cashflow:+3,marketshare:-7,stockprice:-9},
       result:"You protect your own and stay out of the limelight. Cheaper — and Washington remembers who showed up, and who didn't, next time you need a favor."},
      {label:"Market your trucks' simpler, rugged electronics as the dependable choice", fx:{cashflow:+5,marketshare:+3,stockprice:-5},
       result:"You point buyers to the work trucks built tougher and simpler than the software-stuffed fleet. It sells, and quietly undercuts the software-defined future you'd promised investors."}
     ]},
    {id:"b4_ice", year:"2030", title:"The ICE Wall",
     text:"The deadline becomes a wall, and it lands on the Silverado — the truck that funds your whole company. Regulations tighten; truck buyers resist EVs; your future is paid for by a product the law is phasing out. Thread it.",
     choices:[
      {label:"Hybridize the truck lineup — keep the capability buyers love, cut the emissions", fx:{cashflow:+7,marketshare:+8,stockprice:+4}, set:["g_hybrid_trucks"],
       result:"You give truck buyers a bridge they'll actually cross. The Silverado stays king, the regulators are satisfied, and you buy years to get electric trucks right.",
       hist:"Consensus call: hybridizing the profitable truck core to satisfy buyers and regulators was the expected base case."},
      {label:"Push electric trucks hard despite buyer resistance — lead the transition", fx:{cashflow:-14,marketshare:-3,stockprice:+5},
       result:"You bet you can drag your most conservative customers electric before a rival does. Visionary, and a dangerous gamble with the one product that can't afford a stumble."},
      {label:"Defend the combustion truck as long as legally possible; bank the profits", fx:{cashflow:+11,marketshare:-9,stockprice:-9},
       result:"You milk the gas-truck cash cow for every mile allowed. Hugely profitable now, and the same complacency that let Tesla define the EV before you woke up."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock — and the China Exit",
     text:"War around Taiwan freezes chips and forces a China reckoning. China was your largest market; local brands have taken it and your sales there are collapsing anyway. Every dollar defending China is a dollar not defending the profitable home truck market.",
     choices:[
      {label:"Withdraw from China; redeploy everything to defend North America", fx:{cashflow:+9,marketshare:-7,stockprice:+5}, set:["g_exit_china"],
       result:"You make the unsentimental call to stop bleeding in a market you can't win and fortify the heartland that pays the bills. The 2009 lesson, applied to a market instead of a company.",
       hist:"Consensus call: with China share collapsing in a crisis, retreating to defend the profitable home market was the expected base case."},
      {label:"Restructure China as an export hub — build there, sell to the Global South", fx:{cashflow:-12,marketshare:+6,stockprice:+2},
       result:"You repurpose Chinese capacity to build cheap EVs for emerging markets. Inventive, and a delicate bet on staying welcome in China amid a war you're picking sides in."},
      {label:"Ride out the chip famine on inventory; defer the China decision", fx:{cashflow:+6,marketshare:-10,stockprice:-8},
       result:"You change nothing and hope. The fabs stay frozen, China share keeps falling, and the indecision costs you on every front at once."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic convulses the economy again. You've been here — 2020 nearly broke your supply chain and taught you hard lessons about liquidity. Trucks are essential; fleets and contractors still need them. Play defense, or seize it?",
     choices:[
      {label:"Fortress the balance sheet — protect liquidity above all, remembering 2009", fx:{cashflow:+12,marketshare:-7,stockprice:+4}, set:["g_fortress"],
       result:"You do what the company that nearly died swore never to forget: protect the cash first. Safe and scarring — you survive comfortably and watch bolder rivals take the share you were too cautious to chase.",
       hist:"Consensus call: given GM's near-death history, fortressing liquidity in a crisis was the expected base case."},
      {label:"Keep essential truck and fleet production running; gain share while rivals stall", fx:{cashflow:-9,marketshare:+11,stockprice:+3},
       result:"You keep the essential vehicles moving and grab share from idled rivals. The share is real; so is the liquidity risk your own history screams about."},
      {label:"Accelerate factory automation while demand is soft, ready for the rebound", fx:{cashflow:-13,marketshare:+5,stockprice:+2},
       result:"You use the lull to retool, betting the recovery rewards the most efficient. Forward-looking — and a strain on cash in the exact moment your history says protect it."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Robot on the Line",
     text:"Humanoids reach the assembly line just as the UAW contract comes up. The robots could finally close the labor-cost gap with non-union rivals — or trigger the most explosive strike since your near-death. Washington and Detroit are both watching.",
     voice:"The UAW president, publicly: \"GM took a bailout paid for by working families. It will not now hand their jobs to machines without a fight the whole country sees.\"",
     choices:[
      {label:"Negotiate a historic deal — automation with job guarantees and profit-sharing", fx:{cashflow:-11,marketshare:+6,stockprice:+5}, set:["g_labor_deal"],
       result:"You craft a grand bargain: bring the robots in, share the gains, protect the people. Expensive labor peace — and the thing that keeps Washington, Detroit, and the next contract from becoming a war you can't win twice.",
       hist:"Consensus call: given GM's union history and Washington exposure, a negotiated automation-with-guarantees deal was the expected base case."},
      {label:"Automate aggressively to finally fix the cost gap; take the strike if it comes", fx:{cashflow:+10,marketshare:-12,stockprice:+2},
       result:"You decide competitiveness can't wait. The cost gap narrows; the strike is brutal, the fallout severe, and the bailout your critics never let you forget becomes the cudgel they beat you with."},
      {label:"Go slow on automation to preserve labor and political peace", fx:{cashflow:-5,marketshare:+2,stockprice:-6},
       result:"You keep the people and the peace and accept the higher cost base — a standing gift to every non-union, fully-automated rival underpricing you on the same lot."}
     ]},
    {id:"b8_verdict", year:"2038", title:"Survival Isn't a Purpose",
     text:"You survived the shakeout that killed weaker names — again. Solvency, the discipline you learned in the grave, carried you through. But survival isn't a purpose. What is GM in a world of electric, autonomous, partly-automated mobility?",
     choices:[
      {label:"America's vehicle company — trucks, EVs, and the autonomy that keeps them moving", fx:{cashflow:+6,marketshare:+8,stockprice:+4}, set:["g_americas_co"],
       result:"You embrace the role the country needs: the dependable, scaled American maker of the trucks and EVs that move a continent, technology baked in. Not the flashiest — the one Washington and Main Street both want to still exist.",
       hist:"Consensus call: GM's durable identity as the scaled American vehicle maker was the base case it kept returning to."},
      {label:"A mobility-and-autonomy platform — sell the self-driving stack to everyone", fx:{cashflow:+3,marketshare:+2,stockprice:+9},
       result:"You bet the decades of autonomy spend finally pay off as a platform business. Higher-margin, less metal — a reinvention asking investors to believe the money pit was an investment all along."},
      {label:"Stay lean and disciplined — a smaller, profitable, unkillable core", fx:{cashflow:+9,marketshare:-3,stockprice:+2},
       result:"You make a virtue of survival itself: smaller, focused, relentlessly solvent, never again betting the company on anything. Un-glamorous, and the truest expression of what the grave taught you."}
     ]}
  ]
};

/* ========================================================================== *
 *  FORD — "The Oval, Unpawned"  KPIs: Liquidity · Truck & Pro Engine · EV & Software
 * ========================================================================== */
if (DATA.ford) DATA.ford.eras.future = {
  name:"The Oval, Unpawned", years:"2027–2038", start:{cashflow:46, marketshare:54, stockprice:38}, deep:true, stock0:11,
  intro:"You pledged the blue oval as collateral in 2006 — the only reason you didn't take a bailout in 2009. The F-Series still prints the money that funds every dream, and Ford Pro quietly became the best business in the building. But your electric division bled billions, your software trails badly, and the truck buyers who keep you alive are the least sure they want what you're selling next. Eight shocks. Fund a software-and-electric future with a combustion-truck present, without dropping either. You'd rather not pawn the oval twice.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Skunkworks Bet",
     text:"Software is the car and yours is years behind. You built a small, separate skunkworks team to write a modern architecture from scratch, away from the old org's gravity. It's your best shot at catching up — and a bet you can't fix the mothership from inside it. How hard do you commit?",
     choices:[
      {label:"Bet big — make the skunkworks architecture the future of every Ford", fx:{cashflow:-13,marketshare:+7,stockprice:+7}, set:["f_skunkworks"],
       result:"You give the team real money and authority, insulated from the bureaucracy that smothered earlier attempts. If it works you leapfrog a decade of debt; if it's reabsorbed by the old org, it dies like the others.",
       hist:"Consensus call: a protected clean-sheet software team was the expected base case for a legacy maker escaping its own technical debt."},
      {label:"Partner with a big-tech firm for software; keep building world-class hardware", fx:{cashflow:-5,marketshare:+6,stockprice:+3},
       result:"You decide Ford's genius is metal, not code, and rent the brains. Fast and pragmatic — and a handoff of the customer relationship to a partner who'll learn everything about your buyers."},
      {label:"Prioritize software only where it pays now — Ford Pro fleet management", fx:{cashflow:+6,marketshare:+2,stockprice:-9},
       result:"You aim scarce software effort at the commercial business that pays for connected services today. Disciplined — and a deferral of the consumer software fight the market won't defer for you."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Bleeding Division Meets the Squeeze",
     text:"Resource nationalism freezes battery materials just as your EV unit loses billions a year, subsidized by the trucks. Investors demand you stop the bleeding; the materials war makes every electric vehicle costlier still. Refocus, push through, or spin it off?",
     voice:"An activist's public letter: \"Ford is a great truck company funding a terrible science project. Stop, or spin it off and let shareholders choose.\"",
     choices:[
      {label:"Refocus EVs on smaller, cheaper, profitable vehicles and commercial vans", fx:{cashflow:+8,marketshare:+5,stockprice:+5}, set:["f_ev_refocus"],
       result:"You stop chasing big flashy electric trucks that lose money and aim where the math works — affordable models and the vans Ford Pro dominates. Humbler ambition, real profitability.",
       hist:"Consensus call: pivoting EV strategy toward cheaper, profitable, commercial-led vehicles was the expected base case after years of losses."},
      {label:"Push through — keep funding flagship EVs until scale makes them profitable", fx:{cashflow:-17,marketshare:+4,stockprice:-6},
       result:"You bet quitting now means quitting forever and keep pouring truck profits into the future. Brave, and a wager that scale economics arrive before your shareholders' patience runs out."},
      {label:"Spin off the EV unit to raise capital and clarify the story", fx:{cashflow:+10,marketshare:-3,stockprice:+5}, set:["f_ev_spun"],
       result:"You separate the cash-burning future from the cash-printing truck company. The stock breathes easier — and you half-concede Ford-the-whole couldn't carry the transition under one roof."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm cripples connected cars. Your newest, most software-defined vehicles are exposed — and a recall scare on the F-Series, your profit engine, would be catastrophic. Protect the franchise how?",
     choices:[
      {label:"Proactive recall and security overhaul on the connected fleet — over-communicate", fx:{cashflow:-15,marketshare:+9,stockprice:+6}, set:["f_transparent"],
       result:"You move fast and loud to protect the franchise, eating a fortune to make sure no F-150 becomes the cautionary headline. Expensive, and exactly the trust the truck business runs on.",
       hist:"Consensus call: proactively protecting the franchise truck buyer's trust was the expected base case after Entropic."},
      {label:"Patch quietly; downplay exposure to protect the share price", fx:{cashflow:-4,marketshare:-8,stockprice:-12},
       result:"You manage the news instead of the risk. When the exposure leaks, the truck buyer — the most loyal and least forgiving customer you have — takes it personally, and the core engine sputters."},
      {label:"Lean on the simpler, rugged work trucks as the dependable, low-tech choice", fx:{cashflow:+5,marketshare:+3,stockprice:-6},
       result:"You point buyers to the tougher, simpler trucks. It sells to the heartland — and quietly undercuts the software-defined-vehicle future you sold investors."}
     ]},
    {id:"b4_ice", year:"2030", title:"The Truck at the Crossroads",
     text:"The ICE wall lands squarely on the F-Series — the most profitable vehicle line in America and the engine of your whole company. Regulations tighten; truck buyers resist EVs; your future is funded by a product the law is phasing out. Thread the needle.",
     choices:[
      {label:"Hybridize the truck lineup — keep the capability buyers love, cut the emissions", fx:{cashflow:+7,marketshare:+8,stockprice:+4}, set:["f_hybrid_trucks"],
       result:"You give truck buyers a bridge they'll cross: range, towing, and feel they demand, efficiency the law requires. The F-Series stays king and you buy years to get electric trucks right.",
       hist:"Consensus call: hybridizing the profitable truck core to satisfy both buyers and regulators was the expected base case."},
      {label:"Push electric trucks hard despite resistance — lead the transition", fx:{cashflow:-14,marketshare:-3,stockprice:+4},
       result:"You bet you can drag your most conservative customers electric first. Visionary — and a dangerous gamble with the one product that can't afford a misstep."},
      {label:"Defend the combustion truck as long as legal; bank the profits", fx:{cashflow:+11,marketshare:-8,stockprice:-9},
       result:"You milk the gas-truck cash cow for every mile allowed. Profitable now, and a bet the deadlines slip — the same complacency that let Tesla define the EV before you woke up."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes chips and convulses trade. You learned in 2021 what a chip famine does to a truck plant. You're less exposed to China than your rivals, but the silicon your software-defined trucks now need is suddenly un-buyable. Keep the lines running how?",
     choices:[
      {label:"Re-engineer trucks to run on available chips; lock up domestic silicon supply", fx:{cashflow:-13,marketshare:+9,stockprice:+6}, set:["f_chip_improv"],
       result:"You apply the 2021 playbook — redesign around what you can get and secure domestic supply — to keep the F-Series rolling while rivals idle. Costly, and the difference between shipping and stopping.",
       hist:"Consensus call: re-engineering around available silicon and onshoring supply was the expected base case for Ford in a famine."},
      {label:"Ration chips to the most profitable trucks; pause the rest of the lineup", fx:{cashflow:+7,marketshare:-7,stockprice:-7},
       result:"You feed the scarce silicon to the F-Series and Super Duty and starve everything else. Profit holds; the showroom thins and buyers who waited drift away."},
      {label:"Pay spot-market prices for whatever silicon you can find", fx:{cashflow:-16,marketshare:+3,stockprice:-4},
       result:"You buy chips at any price to keep building. The lines move and the liquidity your history begs you to protect drains by the week."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic convulses the economy. You've been here. The trucks and Ford Pro are essential — fleets, contractors, infrastructure still need them. Play defense, or seize the moment your commercial arm was built for?",
     choices:[
      {label:"Lean on Ford Pro — keep the essential-commercial business running, gain share", fx:{cashflow:+6,marketshare:+11,stockprice:+4}, set:["f_pro_surge"],
       result:"You make your commercial arm the hero of the crisis, keeping fleets and essential services moving while rivals stall. Ford Pro proves the most durable business you own, and the share doesn't give back.",
       hist:"Consensus call: leaning on the resilient, essential Ford Pro business in a downturn was the expected base case."},
      {label:"Fortress the balance sheet — protect liquidity above all, remembering 2006", fx:{cashflow:+11,marketshare:-6,stockprice:-2},
       result:"You do what the company that pawned the oval swore never to forget. Safe and scarring — you survive comfortably and watch bolder rivals take the share you wouldn't chase."},
      {label:"Accelerate automation while demand is soft, ready for the rebound", fx:{cashflow:-12,marketshare:+4,stockprice:+2},
       result:"You retool in the lull, betting the recovery rewards the efficient. Forward-looking, and a real strain on liquidity the moment your own history screams to protect it."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Robot on the Line",
     text:"Humanoids reach the line as your UAW contract comes up. The robots could close the cost gap with non-union rivals — or trigger a strike that idles the F-Series. With the truck as your lifeline, you cannot afford a long shutdown.",
     choices:[
      {label:"Negotiate automation with job guarantees — protect the trucks above all", fx:{cashflow:-10,marketshare:+6,stockprice:+5}, set:["f_labor_deal"],
       result:"You buy labor peace to keep the F-Series moving, trading some cost savings for the certainty that the profit engine never stops. Expensive, and the only path that protects the lifeline.",
       hist:"Consensus call: protecting truck production via a negotiated labor deal was the expected base case for Ford."},
      {label:"Automate aggressively to fix the cost gap; risk the strike", fx:{cashflow:+9,marketshare:-12,stockprice:+1},
       result:"You chase competitiveness and gamble the trucks keep rolling. If the strike comes, it idles the one product you cannot afford to idle — and the whole company holds its breath."},
      {label:"Go slow to keep the peace; accept the higher cost base", fx:{cashflow:-5,marketshare:+2,stockprice:-6},
       result:"You protect the workforce and the lifeline at a cost — and hand every automated rival a permanent price advantage on the same lot."}
     ]},
    {id:"b8_verdict", year:"2038", title:"The Oval Still Flying",
     text:"The shakeout is over and the blue oval is still flying, never pawned a second time. The trucks endured, the long pivot didn't kill you, and you're still independent. But 'still here' isn't a strategy. What is Ford for the next century?",
     choices:[
      {label:"America's truck and work-vehicle company — the indispensable commercial backbone", fx:{cashflow:+7,marketshare:+8,stockprice:+4}, set:["f_truck_backbone"],
       fxIf:[{if:"f_pro_surge", fx:{cashflow:+3}, note:"Ford Pro's pandemic heroics already made the commercial backbone your strongest, most profitable identity."}],
       result:"You embrace what you do better than anyone alive: build the trucks and work vehicles that get America's real work done, electric or not, software bolted on. Not glamorous. Utterly indispensable.",
       hist:"Consensus call: Ford's enduring identity as the truck-and-commercial backbone was the base case beneath every pivot."},
      {label:"A software-and-services company wrapped around great vehicles", fx:{cashflow:+3,marketshare:+2,stockprice:+9},
       result:"You bet the recurring revenue from connected fleets and services is the real business and the metal the delivery mechanism. Higher-margin, more modern — and a reinvention that asks the truck company to think like a software one."},
      {label:"A focused North American champion — exit the rest, win the home continent", fx:{cashflow:+9,marketshare:-4,stockprice:+2},
       result:"You stop trying to be global and win decisively where you're strongest. Smaller map, stronger position — the disciplined endgame of a company that learned what overreach costs."}
     ]}
  ]
};

/* ========================================================================== *
 *  STELLANTIS — "Fourteen Brands, One Tightrope"  KPIs: Margin Discipline · Brand & Dealer Trust · Industrial Scale
 * ========================================================================== */
if (DATA.stellantis) DATA.stellantis.eras.future = {
  name:"Fourteen Brands, One Tightrope", years:"2027–2038", start:{cashflow:50, marketshare:46, stockprice:34}, deep:true, stock0:14,
  intro:"You are the merger that shouldn't have worked — Fiat, Chrysler, Peugeot, Jeep, Ram, Citroën, and too many others — stitched together on the promise that scale and savage cost discipline beat everything. For a while the margins were the best in the industry. Then the discipline curdled into cuts that gutted the product, dealers revolted, brands withered, and a celebrated CEO left in the wreckage. Eight shocks now test the thesis — bigger is better — that will either be vindicated or dismantled. Scale is armor. It is also weight.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"Fourteen Brands, One Operating System",
     text:"Software is the car now, and you can't afford fourteen different software stacks. One platform across every brand is the only affordable path — and a homogenization that risks making a Jeep feel like a Fiat feel like a Peugeot. Unify, or let brands diverge?",
     choices:[
      {label:"Build one shared software platform across all brands; differentiate only the skin", fx:{cashflow:-11,marketshare:+6,stockprice:+6}, set:["s_one_platform"],
       result:"You apply the merger logic to software — one stack, fourteen faces. The cost savings are enormous; the risk is that the soul of each brand thins to a wallpaper choice on the same screen.",
       hist:"Consensus call: a single shared software platform was the expected base case for a scale-built, multi-brand group."},
      {label:"Let the strong brands keep distinct software identities; spend more", fx:{cashflow:-16,marketshare:+4,stockprice:-3},
       result:"You protect what makes a Jeep a Jeep at real cost, refusing to dissolve the brands into one codebase. Expensive, and a quiet bet that distinctiveness still commands a price."},
      {label:"Partner with a Chinese tech firm for a cheap, ready-made software stack", fx:{cashflow:-4,marketshare:+5,stockprice:-8}, set:["s_china_sw"],
       result:"You buy your way to modern software fast and cheap — and tie your dashboards to a Chinese partner, solving cost and deepening a dependency the politics will later question."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials. You can't out-cost the Chinese on EVs and now you can't reliably source the cells either. You already took a stake in a Chinese EV maker as a hedge. What is that relationship, really?",
     choices:[
      {label:"Use the Chinese partner's platform to launch cheap EVs under your own brands", fx:{cashflow:-6,marketshare:+8,stockprice:+5}, set:["s_china_platform"],
       result:"You badge a Chinese partner's low-cost EV tech as Fiat, Citroën, even Jeep — finally an answer to the price war. Pragmatic and slightly humiliating: the merger built for scale borrows its competitiveness from Shenzhen.",
       hist:"Consensus call: leveraging a Chinese EV partnership for affordable platforms was the expected base case for a cost-pressured Western group."},
      {label:"Build your own affordable EV platform; keep the Chinese tie at arm's length", fx:{cashflow:-16,marketshare:+3,stockprice:-2},
       result:"You refuse the dependency and spend billions and years to engineer your own cheap EV. Independence at a steep price — and a real chance the Chinese have moved on by the time you catch up."},
      {label:"Become the Chinese makers' Western beachhead — build and distribute for them", fx:{cashflow:+9,marketshare:-7,stockprice:+2},
       result:"You rent your factories and dealers to help Chinese brands enter the West. Lucrative and self-cannibalizing — you make money helping the people eating your lunch finish the meal."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm cripples connected cars across fourteen brands and two continents at once — your sprawling, half-integrated software estate is a vast attack surface. A coordinated response across all those systems is exactly what your fragmented empire is worst at. Respond how?",
     choices:[
      {label:"Use the crisis to force the single secure platform through, fast", fx:{cashflow:-14,marketshare:+8,stockprice:+6}, set:["s_secure_platform"],
       result:"You turn catastrophe into the mandate to finally unify and harden the software estate — security as the excuse to do what cost-logic couldn't. Expensive, and it leaves you more integrated and more defensible than before.",
       hist:"Consensus call: using the worm to force unification and hardening was the expected base case for a fragmented multi-brand group."},
      {label:"Patch brand by brand on the cheap; protect quarterly margin", fx:{cashflow:+3,marketshare:-9,stockprice:-10},
       result:"You defend the margin and patch piecemeal across fourteen brands. Slow, leaky, and exactly the fragmentation the worm exploits — the gaps between your brands become the gaps in your defense."},
      {label:"Lean on your simpler, older models as the safe, low-tech choice", fx:{cashflow:+5,marketshare:+2,stockprice:-5},
       result:"You point buyers to the cheaper, less-connected cars in the range. It sells to value buyers and quietly admits your newer software-defined cars are the exposed ones."}
     ]},
    {id:"b4_ice", year:"2030", title:"Too Many Children",
     text:"The ICE wall arrives, and fourteen brands is too many to electrify. Some are iconic, some are zombies kept alive by sentiment and badge engineering. Pruning frees capital — and detonates dealer networks, national pride, and a century of heritage. Wield the axe?",
     voice:"A European economy minister: \"That brand is part of our national heritage and ten thousand of our jobs. Kill it and you will not enjoy your next factory permit.\"",
     choices:[
      {label:"Rationalize hard — keep the strong brands, retire or merge the weak", fx:{cashflow:+10,marketshare:-5,stockprice:+6}, set:["s_pruned"],
       result:"You make the unsentimental call the conglomerate was built for. Heritage howls, governments grumble, dealers sue — and the survivors finally get the EV-engineering money they'd been starved of.",
       hist:"Consensus call: pruning a bloated 14-brand portfolio to focus capital was the expected base case for a margin-driven group."},
      {label:"Keep them all — use shared EV platforms to make even small brands viable", fx:{cashflow:-13,marketshare:+5,stockprice:-4},
       result:"You bet the merger's whole logic and protect every nameplate and its political patrons. Goodwill everywhere, focus nowhere — and the complexity scale was meant to defeat quietly defeats you."},
      {label:"Regionalize — let each brand win its home market, drop global ambitions", fx:{cashflow:+5,marketshare:+3,stockprice:+1},
       result:"You stop forcing Peugeot to conquer America and let each brand dominate where it's loved. Pragmatic — and a quiet retreat from the borderless empire the merger was sold on."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes chips and forces a reckoning on China ties — and you may have bet your EV competitiveness on a Chinese partner. The silicon famine hits a fourteen-brand supply chain that was already the hardest in the industry to coordinate. Hold it together how?",
     alt:[{if:"s_china_platform", text:"War freezes chips and forces a China reckoning — and you badged your affordable EVs on a Chinese partner's platform two years ago. That bet's geopolitical bill comes due now, across fourteen brands at once."}],
     choices:[
      {label:"Centralize chip procurement across all brands; diversify away from the flashpoint", fx:{cashflow:-13,marketshare:+8,stockprice:+6}, set:["s_centralized_chips"],
       result:"You finally use scale as the weapon it was meant to be — one giant, coordinated chip-buying and reshoring effort across fourteen brands. Painful to execute, and the first time bigness clearly beats fragmentation.",
       hist:"Consensus call: centralizing procurement and de-risking supply was the expected base case for a scale group in a chip famine."},
      {label:"Unwind the Chinese platform dependency at speed, whatever it costs", fx:{cashflow:-15,marketshare:-6,stockprice:-3},
       result:"You scramble to untangle from the partner you leaned on, eating cost and losing your cheap-EV answer in the process. Politically safer, commercially brutal."},
      {label:"Ride it out on inventory and hope the crisis is short", fx:{cashflow:+6,marketshare:-10,stockprice:-9},
       result:"You change little and pray. Across fourteen brands the shortages cascade unevenly, dealers rage, and the indecision compounds the fragmentation that's always been your weakness."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Revolt Meets the Fever",
     text:"A pandemic empties showrooms just as years of cost-cutting have your own dealers in open revolt — writing public letters, blaming headquarters for gutted product and bloated inventory. Distribution is your lifeline, and a downturn is the worst time to be at war with it.",
     choices:[
      {label:"Make peace — restore dealer margins and product, rebuild trust through the crisis", fx:{cashflow:-9,marketshare:+10,stockprice:+5}, set:["s_dealers_mended"],
       result:"You eat humble pie and short-term margin to win back the people who sell your cars, exactly when you need them most. Costly now, and the only way the brands reach customers at all.",
       hist:"Consensus call: repairing the revolting dealer network in a downturn was the expected base case — you can't sell through enemies."},
      {label:"Hold the line on discipline — the dealers will adjust, protect margin", fx:{cashflow:+8,marketshare:-11,stockprice:-7},
       result:"You back cost discipline over the complaints. Margin holds on paper; demoralized dealers stop pushing your brands into a falling market, and the revolt becomes a bleed you can't cut your way out of."},
      {label:"Accelerate direct-to-consumer to bypass the dealers entirely", fx:{cashflow:-12,marketshare:-4,stockprice:+4}, set:["s_direct"],
       result:"You use the chaos to push past the franchise model. Modern and Tesla-like — and a frontal war with thousands of dealers and franchise laws, fought across two continents in the middle of a pandemic."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Humanoid Reckoning",
     text:"Humanoids reach the line across plants on two continents, each with its own unions, labor laws, and national politics. The robots could finally deliver the cost advantage the merger promised — or ignite simultaneous fights in France, Italy, and the US. Coordinate it how?",
     choices:[
      {label:"Roll out region by region with local labor deals; use scale to fund transitions", fx:{cashflow:-11,marketshare:+6,stockprice:+5}, set:["s_labor_regional"],
       result:"You let each region negotiate its own automation pact, using the group's scale to fund retraining everywhere. Slow and expensive — and the thing that keeps three governments from turning on you at once.",
       hist:"Consensus call: region-by-region negotiated automation was the expected base case for a multi-continent group."},
      {label:"Automate hard and uniformly to capture the full cost advantage; take the strikes", fx:{cashflow:+10,marketshare:-12,stockprice:+1},
       result:"You impose one aggressive automation plan everywhere. The cost gap finally closes; you ignite labor fights on two continents simultaneously and discover how much heritage and politics can cost."},
      {label:"Move slowly everywhere to keep the peace; accept the higher cost base", fx:{cashflow:-5,marketshare:+2,stockprice:-6},
       result:"You keep the peace across every plant at the price of the cost advantage the whole merger was supposed to deliver. Safe, and a quiet failure of the thesis."}
     ]},
    {id:"b8_verdict", year:"2038", title:"Bigger, or Better?",
     text:"The shakeout culls the weak and consolidation accelerates. The whole Stellantis thesis was that scale wins. Now you must prove it — or admit the merger was a way to be big, not a way to be good. What does Stellantis become?",
     choices:[
      {label:"The consolidator — absorb more weakened makers, become the scale colossus", fx:{cashflow:-9,marketshare:+11,stockprice:+5}, set:["s_consolidator"],
       result:"You make the founding bet total, rolling up distressed brands into the largest auto group on Earth. The scale is staggering; so is the integration debt and the question, never quite answered, of whether all that size ever became strength.",
       hist:"Consensus call: a scale-built group's base case in a consolidation wave was to keep consolidating."},
      {label:"Prove the thesis — turn scale into the industry's best margins and products", fx:{cashflow:+9,marketshare:+4,stockprice:+8}, set:["s_thesis_proven"],
       fxIf:[{if:"s_dealers_mended", fx:{marketshare:+3}, note:"You rebuilt the dealer trust years ago — the network now actually sells the better products scale lets you build."}],
       result:"You stop adding brands and make the existing empire deliver — shared platforms producing genuinely better cars at better margins. The hardest path: not bigger, but better, vindicating the merger nobody believed in.",
       hist:"Consensus call: the patient base case was always that Stellantis had to convert scale into real product and margin advantage."},
      {label:"Break it up — spin out the strong brands, let the weak be sold", fx:{cashflow:+6,marketshare:-6,stockprice:+8},
       result:"You conclude the conglomerate is worth more in pieces — freeing Jeep, Ram, and Peugeot to thrive alone. The boldest admission a scale-builder can make: the whole was worth less than its parts."}
     ]}
  ]
};

/* ========================================================================== *
 *  HONDA — "The Engineer's Last Stand"  KPIs: Capital Discipline · Engineering Standing · Global Trust
 * ========================================================================== */
if (DATA.honda) DATA.honda.eras.future = {
  name:"The Engineer's Last Stand", years:"2027–2038", start:{cashflow:52, marketshare:50, stockprice:50}, deep:true, stock0:30,
  intro:"Soichiro Honda built a company on a stubborn creed: build it right, never expedient, and never need anyone's bailout. You make more engines than anyone alive — motorcycles that move half of Asia and Africa, jets, generators, cars — and you've never once gone to a government on your knees. But you are small among giants now, and the EV-and-software age punishes the independent and the proud. Eight shocks ask whether an engineer's company can survive an era that no longer rewards engineering — and whether 'independent' is a principle or a luxury you can't afford.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"The Marriage Question",
     text:"Software is the car now, and you're too small to fund the future alone. A larger Japanese rival proposes a deep alliance — maybe a merger — to share the staggering costs. Salvation and surrender in one term sheet. Honda has never bent the knee.",
     voice:"Your chief engineer, who remembers the founder: \"Soichiro-san would rather build a worse car his own way than a better one as someone's junior partner. Wisdom, or vanity we can't afford?\"",
     choices:[
      {label:"Stay independent — partner narrowly on software costs, never on control", fx:{cashflow:-12,marketshare:+4,stockprice:+6}, set:["h_independent"],
       result:"You take the alliance only as far as shared code and joint R&D, never into the boardroom. The creed survives intact; so does the brutal cost of carrying a giant's burdens on a mid-sizer's back.",
       hist:"Consensus call: Honda's fierce independence made a limited, control-preserving partnership the expected base case over a full merger."},
      {label:"Merge — combine into a Japanese champion big enough to survive", fx:{cashflow:+11,marketshare:+6,stockprice:-13}, set:["h_merged"],
       result:"You do the unthinkable and fold Honda's soul into a larger whole. The numbers work; the identity blurs; every Honda lifer wonders whether the company that never needed anyone just stopped being Honda. The market doubts the marriage."},
      {label:"Go it alone — bet motorcycles and power products fund the software transition", fx:{cashflow:-7,marketshare:+2,stockprice:+2}, set:["h_solo"],
       result:"You refuse the marriage and lean on the empire beyond cars to bankroll it yourself. The most Honda answer possible — and a tightrope with no net and a clock running."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials. As a smaller EV player you have less leverage to secure supply — but you also sell tens of millions of small motorcycles that need tiny batteries or none. Where do you point scarce capital?",
     choices:[
      {label:"Lean on the motorcycle and small-engine empire while the EV squeeze passes", fx:{cashflow:+9,marketshare:+8,stockprice:-6}, set:["h_moto_lean"],
       result:"You let the global two-wheeler business — barely touched by the cell shortage — carry you while car-side rivals scramble for lithium. Cash-strong, and a quiet deferral of the EV scale you'll eventually need.",
       hist:"Consensus call: leaning on the resilient motorcycle and power-products empire through a materials crunch was the expected base case for Honda."},
      {label:"Spend scarce capital to lock up battery materials for the car EV push", fx:{cashflow:-15,marketshare:+4,stockprice:+5},
       result:"You commit a mid-sizer's limited capital to securing cells, refusing to fall behind on EVs. Brave, and a real strain on the discipline that is your birthright."},
      {label:"Co-develop materials supply with a partner to share the cost", fx:{cashflow:-6,marketshare:+3,stockprice:+2},
       result:"You bring in a partner to split the materials bill. Sensible for a mid-sizer — and another small concession that even Honda can't go it entirely alone."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm bricks connected cars — but Honda is, above all, the world's motorcycle company, selling tens of millions of simple, rugged, barely-connected machines the worm can't touch. Your over-engineered, under-connected reputation suddenly looks like foresight. Press it?",
     choices:[
      {label:"Champion rugged simplicity — 'the machines that just work, and can't be hacked'", fx:{cashflow:+7,marketshare:+11,stockprice:+5}, set:["h_simplicity"],
       result:"You turn the founder's creed into the marketing of the moment. From Lagos to Jakarta, the brand that never over-digitized becomes the one people trust when the digital world betrays them.",
       hist:"Consensus call: Honda's vast simple-machine business made rugged dependability the natural base case to lean into after Entropic."},
      {label:"Spend big to build the most securely-engineered connected cars", fx:{cashflow:-16,marketshare:+4,stockprice:+4},
       result:"You apply Honda rigor to doing connectivity right where others did it recklessly. Costly for a mid-sizer, and a genuine bid to lead on trustworthy software — the thing the giants kept fumbling."},
      {label:"Harden your fleet quietly; keep selling on reliability as always", fx:{cashflow:+2,marketshare:+3,stockprice:+1},
       result:"You fix what needs fixing without a campaign, in the understated Honda way. Solid and humble — and a passed chance to convert the worst tech week in history into your loudest argument."}
     ]},
    {id:"b4_ice", year:"2030", title:"The Fuel Cell Comes Home",
     text:"The ICE wall arrives, and hydrogen roars back for heavy and long-distance transport — and few kept fuel-cell engineering alive like Honda, through decades of mockery. The patience of an engineer's company is suddenly an asset. Cash it in how?",
     alt:[{if:"h_solo", text:"The ICE wall arrives with hydrogen roaring back — and your long-nursed fuel-cell program, kept alive by sheer engineering stubbornness, is suddenly worth a fortune. For an independent that needs every edge, how hard do you push?"}],
     choices:[
      {label:"Build a fuel-cell business for trucks, generators and grid power — beyond cars", fx:{cashflow:-14,marketshare:+9,stockprice:+9}, set:["h_hydrogen"],
       result:"You extend the fuel cell into the whole Honda power-products empire, where hydrogen actually wins. The engine company that makes engines for everything adds a clean one nobody else kept ready. The creed pays off.",
       hist:"Consensus call: Honda's preserved fuel-cell expertise and power-products breadth made a multi-purpose hydrogen business the expected base case."},
      {label:"License the fuel-cell tech widely; collect royalties without the capital risk", fx:{cashflow:+8,marketshare:+1,stockprice:+4},
       result:"You let your hard-won IP power everyone else's machines for a royalty. Capital-light and shrewd — and a handoff of the glory to licensees with deeper pockets."},
      {label:"Keep hydrogen modest; spend scarce capital on the EV fight you can't skip", fx:{cashflow:+3,marketshare:-7,stockprice:-8},
       result:"You decline to chase the hydrogen revival hard, husbanding cash for the electric battle. Disciplined — and a risk you let a lead you actually earned slip to a richer rival."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes chips and convulses Pacific trade — and you are a Japan-anchored company with a global motorcycle empire and a car business that needs the silicon. The famine bites; the regional tension bites harder. Hold it together how?",
     choices:[
      {label:"Prioritize the resilient motorcycle empire; ration chips to keep two wheels rolling worldwide", fx:{cashflow:+6,marketshare:+9,stockprice:+4}, set:["h_two_wheels"],
       result:"You protect the business that moves half the developing world — simple machines that need little silicon — and let it carry you through. Cash-strong, and a reminder that Honda was never only a car company.",
       hist:"Consensus call: leaning on the chip-light motorcycle empire in a silicon famine was the expected base case for Honda."},
      {label:"Diversify production away from the Pacific flashpoint — fast, costly", fx:{cashflow:-14,marketshare:+4,stockprice:+5},
       result:"You spread manufacturing away from the tension zone, eating cost a mid-sizer feels keenly. Slow to pay off; invaluable if the conflict deepens."},
      {label:"Ride it out on home loyalty and inventory; change little", fx:{cashflow:+7,marketshare:-9,stockprice:-8},
       result:"You lean on Japan and stock. Cheap now, and a gamble the famine is short — which the lengthening crisis makes look like the complacency Honda prides itself on never showing."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic clogs supply chains and empties showrooms. Your motorcycle empire across Asia, Africa, and Latin America is the cheap, essential transport that keeps moving when economies stall. Protect cash, or be the lifeline?",
     choices:[
      {label:"Lean on the global motorcycle business — essential, cheap, and still selling everywhere", fx:{cashflow:+7,marketshare:+10,stockprice:+5}, set:["h_moto_lifeline"],
       fxIf:[{if:"h_moto_lean", fx:{marketshare:+3}, note:"You've spent the era doubling down on two wheels — the empire is primed to carry you through the fever."}],
       result:"The two-wheeler business — affordable, essential, barely dented by the crisis — keeps the company strong while car-only rivals reel. The breadth Soichiro built proves its worth again.",
       hist:"Consensus call: leaning on the resilient, essential motorcycle business in a downturn was the expected base case for Honda."},
      {label:"Protect capital discipline — idle weak lines, preserve the war chest", fx:{cashflow:+10,marketshare:-7,stockprice:-3},
       result:"You honor the never-need-a-bailout creed and hoard cash. Safe and proud — and a surrender of share to rivals willing to keep building into the fear."},
      {label:"Build generators, medical engines and emergency power at cost", fx:{cashflow:-9,marketshare:+4,stockprice:+4},
       result:"The engine company turns its breadth to crisis supply — power and equipment where they're desperately needed. Goodwill that lasts; cash you'll want back later."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"ASIMO's Children",
     text:"Humanoids arrive as a real industry — and Honda built ASIMO, the most famous walking robot of its generation, decades before anyone made it a business. You have robotics heritage no one can buy. The same machines could be your reinvention or a distraction your scarce capital can't fund.",
     choices:[
      {label:"Revive the robotics legacy — build humanoids as a new Honda business", fx:{cashflow:-17,marketshare:+8,stockprice:+10}, set:["h_robots"],
       result:"You reawaken ASIMO's bloodline and turn decades-old research into a real product — the engine company building the worker, not just the engine. Audacious for a mid-sizer, and the boldest expression of the founder's faith that Honda's genius was never only about cars.",
       hist:"Consensus call: Honda's unique robotics heritage made reviving humanoids a credible base case for reinvention."},
      {label:"Apply the robotics know-how to your own plants and vehicles, not a standalone product", fx:{cashflow:-6,marketshare:+4,stockprice:+3},
       result:"You use the robotics depth to automate plants and enrich cars rather than launch a risky business. Disciplined and useful — and a decision to leave the humanoid frontier, which you reached first, to braver hands."},
      {label:"Stay focused — engines and vehicles are the mission; let the robots go", fx:{cashflow:+5,marketshare:-6,stockprice:-7},
       result:"You honor focus over nostalgia and pour everything into the car-and-engine fight. Principled, and a second surrender of a lead Honda invented — the kind of road not taken business schools will teach."}
     ]},
    {id:"b8_verdict", year:"2038", title:"What an Engine Company Is",
     text:"The shakeout is over. Whether you stayed independent or merged, the Honda name survives. Soichiro's creed has been tested by an age that worshipped software and scale over engineering. Define what Honda is for the next century.",
     choices:[
      {label:"The world's power-and-mobility company — engines for everything that moves", fx:{cashflow:+6,marketshare:+8,stockprice:+4}, set:["h_power_co"],
       fxIf:[{if:"h_hydrogen", fx:{stockprice:+4}, note:"Your hydrogen power-products business makes 'engines for everything' a clean, literal truth no rival matches."}],
       result:"You embrace the truth that Honda was never just a car company — it powers motorcycles, cars, boats, jets, generators, and grids, electric or hydrogen or otherwise. Diversified, durable, the engineer's empire the founder actually built.",
       hist:"Consensus call: Honda's enduring identity as the universal engine-and-mobility company was the base case beneath every car-market battle."},
      {label:"A pure engineering brand — fewer products, each the best in its class", fx:{cashflow:+4,marketshare:-2,stockprice:+6},
       result:"You distill the company to its creed: the very best machine in each category you choose, and nothing you can't make exceptional. Smaller and prouder — the founder's spirit as a strategy of excellence over breadth."},
      {label:"A nimble mobility innovator — robots, eVTOL, fuel cells, and the cars that fund them", fx:{cashflow:-4,marketshare:+5,stockprice:+8},
       result:"You bet Honda's future is its restless inventiveness — flying machines, walking machines, clean engines — with cars as the steady base that pays for the dreaming. The most optimistic reading of an engineer's company."}
     ]}
  ]
};

/* ========================================================================== *
 *  TATA MOTORS — "India's Champion, Tested by Fire"  KPIs: Balance Sheet · Domestic Credibility · Global Competitiveness
 * ========================================================================== */
if (DATA.tata) DATA.tata.eras.future = {
  name:"India's Champion, Tested by Fire", years:"2027–2038", start:{cashflow:52, marketshare:58, stockprice:50}, deep:true, stock0:42,
  intro:"You bet the company on leveraged acquisitions twice and lived — Jaguar Land Rover, once a punchline, became your crown jewel, and at home you built the electric car that put India on wheels with a plug. You lead India's EV market, split the company into clean commercial and passenger halves, and carry the 150-year-old Tata name and its promise of integrity. But you've already been burned: a devastating cyberattack once froze JLR's factories. India is the last great growth market on Earth, and everyone is coming for it. Eight shocks decide whether Tata becomes a global champion or a cautionary tale.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"Defending the Home Front",
     text:"You built India's EV market and lead it — but the Chinese giants, MG, and a resurgent domestic rival are pouring in with cheaper, smarter electric cars aimed at your throne. Software is the car now, and heritage won't hold the lead alone.",
     voice:"Your India sales chief: \"We taught this market to buy electric. Now everyone wants to sell it the lesson back to us, cheaper.\"",
     choices:[
      {label:"Out-invest to stay ahead — software, charging, new models, defend the lead", fx:{cashflow:-15,marketshare:+9,stockprice:+5}, set:["ta_ev_defend"],
       result:"You spend hard to keep the throne — better software, a charging network, a wave of new models. Capital-intensive and essential; losing India is not survivable, so you pay whatever it costs.",
       hist:"Consensus call: aggressively defending the home EV lead it pioneered was the expected base case for Tata."},
      {label:"Win on affordability and trust — the dependable Indian EV for Indian roads", fx:{cashflow:+5,marketshare:+6,stockprice:-7},
       result:"You lean on what no import can match: cars built for Indian conditions, an Indian service network, and a century of Tata trust. Margin-friendly — and a bet that belonging beats the spec sheet, which the global-competitiveness score doubts."},
      {label:"Partner with a global tech firm to leapfrog on software and autonomy", fx:{cashflow:-7,marketshare:+5,stockprice:+4},
       result:"You bring in outside software muscle to close the gap heritage can't fill. Faster to a modern product — and a dependency that hands a piece of the customer relationship to a partner."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials worldwide. India imports most of its cells, and your EV lead depends on supply you don't control. Build it at home, or stay exposed?",
     choices:[
      {label:"Build Indian battery and materials capacity with group and government backing", fx:{cashflow:-16,marketshare:+8,stockprice:+6}, set:["ta_localize_cells"],
       result:"You and the Tata group bet big on localizing cells and materials — leaning on 'Make in India' and the conglomerate's reach. Ruinous now; the difference between leading and stalling when the next embargo hits.",
       hist:"Consensus call: localizing battery supply under 'Make in India' was the expected base case for the home champion."},
      {label:"Lock long-term import deals with friendly suppliers; stay asset-light", fx:{cashflow:-6,marketshare:+4,stockprice:-5},
       result:"You secure supply through contracts rather than capital, preserving the balance sheet. Lighter and faster — and a continued dependence on a supply chain a single crisis can sever."},
      {label:"Slow the EV push to what you can supply; protect the balance sheet", fx:{cashflow:+8,marketshare:-9,stockprice:-8},
       result:"You defend the famously twice-stretched balance sheet by easing off EVs. Disciplined — and a gift of the home EV lead you built to rivals who didn't blink."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm cripples connected cars worldwide — and you, alone among the giants, have already lived this nightmare. A cyberattack once froze JLR's plants and cost you dearly. You learned, the hard way, what the others are only now discovering. That scar can be your greatest advantage.",
     voice:"Your CISO, who survived the first attack: \"Everyone else is panicking. We've already been to this funeral. We know what to do before the worm even arrives.\"",
     choices:[
      {label:"Lead the industry on resilience — sell your hard-won security expertise to all", fx:{cashflow:-11,marketshare:+10,stockprice:+8}, set:["ta_security_lead"],
       result:"You turn the worst day in your history into authority. The company that was hacked and rebuilt becomes the one everyone calls — and the group's vast IT-services arm monetizes a scar nobody wanted to earn.",
       hist:"Consensus call: having survived a major attack, leveraging that resilience expertise was the expected base case for Tata after Entropic."},
      {label:"Quietly make your fleet the most hardened on the road; let results speak", fx:{cashflow:-7,marketshare:+5,stockprice:+3},
       result:"You apply every brutal lesson to make your cars the toughest target on Earth, and let the absence of headlines be the proof. Effective and understated — and a passed chance to turn the expertise into a business."},
      {label:"Fuse JLR cars with Tata's IT-services security stack — group synergy as a moat", fx:{cashflow:-13,marketshare:+6,stockprice:+6}, set:["ta_group_synergy"],
       result:"You do the thing only a Tata can: marry the car company to the conglomerate's world-class IT arm and build security no standalone automaker can match. The sprawling group's hidden logic finally pays a visible dividend."}
     ]},
    {id:"b4_ice", year:"2030", title:"India's Own Timeline",
     text:"The West races toward ICE bans, but India sets its own clock — affordability first, with CNG, hybrids, and small EVs in the mix, and hundreds of millions of first-time buyers who can't yet afford electric. As India's champion, do you follow the global pace or build for India's reality?",
     choices:[
      {label:"Build for India's reality — a full range from CNG to EV at every price point", fx:{cashflow:+6,marketshare:+10,stockprice:+3}, set:["ta_full_range"],
       result:"You refuse the one-size transition and serve the actual Indian customer — petrol, CNG, hybrid, electric, each for the buyer who can reach it. Less ideologically clean, far more right for a market putting its first billion on wheels.",
       hist:"Consensus call: matching India's affordability-first, multi-fuel reality was the expected base case for India's champion."},
      {label:"Push EV adoption faster than the market — define India's electric future first", fx:{cashflow:-13,marketshare:+5,stockprice:+6},
       result:"You bet whoever leads India electric wins the century and pull the market forward faster than it's ready. Visionary — and a gamble that subsidies, charging, and incomes catch up before the cost of being early breaks you."},
      {label:"Protect margins — focus on the profitable mid-market, cede the price floor", fx:{cashflow:+9,marketshare:-8,stockprice:-5},
       result:"You walk away from the brutal bottom to defend mid-market profit. Healthier per-unit economics — and a surrender of the mass-market volume a true people's champion is supposed to own."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes chips and convulses global trade. JLR — your British crown jewel, exposed to every global storm — feels the silicon famine hard, while India, less dependent on advanced nodes, is relatively insulated. The shock splits your two halves apart.",
     choices:[
      {label:"Use India's insulation to carry the group while JLR rides out the famine", fx:{cashflow:+5,marketshare:+9,stockprice:+5}, set:["ta_india_carries"],
       result:"You let the resilient, less chip-hungry Indian business steady the ship while JLR weathers the storm. The two-halves structure proves its worth — diversification across geographies and tech levels paying off exactly when it should.",
       hist:"Consensus call: leaning on the insulated Indian business to carry the group through a chip famine was the expected base case."},
      {label:"Pour capital into securing JLR's chip supply at any cost — protect the jewel", fx:{cashflow:-15,marketshare:+3,stockprice:+4},
       result:"You spend heavily to keep JLR's premium lines running through the famine, protecting the brand equity that justified the whole gamble. Costly, and a real test of the twice-stretched balance sheet."},
      {label:"Ride it out across both halves on inventory; change little", fx:{cashflow:+6,marketshare:-8,stockprice:-7},
       result:"You change little and hope. JLR's premium volumes stall, the famine drags, and the indecision costs the global-competitiveness standing you fought to build."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Long Fever",
     text:"A pandemic empties showrooms and clogs ports. India's vast domestic market is your anchor, but JLR's luxury sales — concentrated in volatile global markets — could crater. You've stretched the balance sheet before; a downturn is exactly when that history haunts you.",
     choices:[
      {label:"Protect the balance sheet first — remember the bridge-loan years, cut deep", fx:{cashflow:+11,marketshare:-6,stockprice:+3}, set:["ta_balance_first"],
       result:"You honor the lesson of two near-death leverage gambles and defend liquidity above all. Safe and scarring — you survive the fever comfortably and cede some share you were too cautious to defend.",
       hist:"Consensus call: given Tata's leverage history, protecting the balance sheet in a downturn was the expected base case."},
      {label:"Lean on India's huge domestic market to carry the group through", fx:{cashflow:-7,marketshare:+10,stockprice:+4},
       result:"You let the resilient home market absorb the shock while JLR sleeps. The diversification pays off — and you keep building share in the one market that never really stops growing."},
      {label:"Invest in JLR through the slump to be ready for the luxury rebound", fx:{cashflow:-14,marketshare:+4,stockprice:+5},
       result:"You spend into the fear on the jewel, betting luxury comes roaring back. Bold — and a strain on a balance sheet your own history begs you to protect."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Humanoid Reckoning",
     text:"Humanoids reach the line — and you build cars in both high-cost Britain (JLR) and labor-rich India, where automation collides with a workforce of millions and a government that prizes employment. The same machines could lift JLR's margins and gut India's social compact.",
     choices:[
      {label:"Automate JLR for premium margins; in India, augment workers and redeploy via the group", fx:{cashflow:-11,marketshare:+7,stockprice:+5}, set:["ta_dual_track"],
       result:"You run two playbooks: robots for British margin, augmentation-and-redeployment for Indian jobs, using the conglomerate to absorb displacement. Expensive and politically deft — the two-halves structure as a feature, not a bug.",
       hist:"Consensus call: a dual-track approach — automate JLR, protect Indian employment — was the expected base case for Tata."},
      {label:"Automate aggressively everywhere to maximize competitiveness", fx:{cashflow:+9,marketshare:-9,stockprice:+2},
       result:"You chase the cost edge on both continents. Margins improve; in India the backlash over jobs is fierce, and the Tata name's social standing — your deepest domestic asset — takes the hit."},
      {label:"Go slow on automation to protect employment and the Tata name's standing", fx:{cashflow:-5,marketshare:+3,stockprice:-6},
       result:"You preserve jobs and goodwill at a higher cost base. The name stays beloved at home — and global rivals automating faster keep pressing on price."}
     ]},
    {id:"b8_verdict", year:"2038", title:"The Tata Name, a Century On",
     text:"India is now one of the largest car markets on Earth, and you helped build it. The shakeout has separated the global champions from the regional survivors. The Tata name still means integrity, 150 years on. What is Tata Motors to India and the world?",
     choices:[
      {label:"India's global automaker — owns the home market and competes everywhere", fx:{cashflow:+6,marketshare:+11,stockprice:+5}, set:["ta_global_champ"],
       fxIf:[{if:"ta_security_lead", fx:{stockprice:+4}, note:"Your security leadership turned a scar into global authority — a real, exportable advantage no Indian rival can claim."}],
       result:"You become what India waited a century for: a homegrown automaker that owns its vast home market AND exports clean, smart, affordable cars to the world. The leveraged gambles, the JLR madness, the cyber-fire — all of it forged a genuine global champion.",
       hist:"Consensus call: Tata's destiny as India's global automotive champion was the base case the whole arc was building toward."},
      {label:"A focused Indian and emerging-market leader — win the growth world, skip the West", fx:{cashflow:+8,marketshare:+6,stockprice:+2},
       result:"You concentrate on the markets actually growing and let the saturated West be someone else's war. Disciplined and enormous in its own right, if less romantic than the flag in London and Detroit."},
      {label:"A house of brands — JLR luxury, Tata mass-market, each global in its lane", fx:{cashflow:+4,marketshare:+4,stockprice:+7},
       result:"You run a portfolio spanning the British luxury jewel and the Indian people's champion, each winning its world under one trusted name. The full expression of the gamble that started when a truck-maker bought Jaguar."}
     ]}
  ]
};

/* ========================================================================== *
 *  MAHINDRA — "The Tractor That Dreamed of Everything"  KPIs: Capital Discipline · SUV Credibility · Global & EV Readiness
 * ========================================================================== */
if (DATA.mahindra) DATA.mahindra.eras.future = {
  name:"The Tractor That Dreamed of Everything", years:"2027–2038", start:{cashflow:52, marketshare:60, stockprice:48}, deep:true, stock0:60,
  intro:"You are India's SUV king and, quietly, the world's largest tractor maker by volume — and that second fact is your secret weapon. The tractor business is a cash machine that has bankrolled, and forgiven, every automotive swing you've taken: the SsangYong disaster, the Ford romance that fizzled, the electric reinvention. You learned discipline the hard way. 'Born Electric' is real, your SUVs are the hottest products in India, and the country is becoming one of the great markets on Earth. Eight shocks test the discipline as never before — and the eternal temptation to dream too big again.",
  scenarios:[
    {id:"b1_os", year:"2027", title:"Electric Meets the Crown",
     text:"Software is the car now, and your SUVs are India's most wanted — but going electric and digital risks the rugged, go-anywhere soul that made them special. The Chinese and Tata are coming for your turf. Electrify and digitize without diluting the brand, how?",
     voice:"Your design chief: \"People buy a Mahindra because it looks like it could pull a truck out of a river. An electric one had better still look like it would try.\"",
     choices:[
      {label:"Electrify on your terms — keep the rugged soul, add electric capability and smart software", fx:{cashflow:-12,marketshare:+9,stockprice:+5}, set:["ma_rugged_ev"],
       result:"You refuse to let electric mean soft, engineering EVs unmistakably Mahindra — tough, capable, born for Indian roads and worse. The brand soul survives the transition and the SUV crown stays on your head.",
       hist:"Consensus call: preserving the rugged SUV identity through electrification and software was the expected base case for the brand."},
      {label:"Go premium-electric — use EVs and software to finally move Mahindra upmarket", fx:{cashflow:-15,marketshare:+5,stockprice:+7},
       result:"You seize the moment to shed the value image and charge premium for sophisticated electric SUVs. Margin-rich if it lands — and a gamble that loyalists who loved you for rugged value follow you up the ladder."},
      {label:"Stay disciplined — electrify slowly, protect margins and the tractor-funded balance", fx:{cashflow:+7,marketshare:+2,stockprice:-9},
       result:"You let the discipline the tractors taught you govern the pace. Safe and sustainable — and a risk that aggressive rivals define India's electric SUV before your caution lets you reach for it."}
     ]},
    {id:"b2_materials", year:"2028", title:"The Materials War",
     text:"Resource nationalism freezes battery materials. India imports most of its cells, and your Born Electric push needs supply you don't control. But your tractors and rural vehicles need few or no big batteries. Where do you point the tractor money?",
     choices:[
      {label:"Lean on the tractor and rugged-vehicle business while the EV squeeze passes", fx:{cashflow:+9,marketshare:+7,stockprice:-6}, set:["ma_tractor_lean"],
       result:"You let the cash machine that needs almost no lithium carry you while EV-heavy rivals scramble. Balance-sheet strong, and a quiet deferral of the electric scale you'll eventually need.",
       hist:"Consensus call: leaning on the resilient, battery-light tractor business through a materials crunch was the expected base case for Mahindra."},
      {label:"Spend tractor cash to lock up battery materials for the EV SUVs", fx:{cashflow:-15,marketshare:+5,stockprice:+5},
       result:"You commit the cash machine's profits to securing cells, refusing to fall behind on EVs. Brave — and exactly the kind of swing the SsangYong scars warn you about."},
      {label:"Partner with a battery maker for guaranteed cells; share the risk", fx:{cashflow:-6,marketshare:+3,stockprice:+2},
       result:"You secure supply through partnership rather than capital. Disciplined and sensible — and a dependence on a partner for the heart of your electric future."}
     ]},
    {id:"b3_entropic", year:"2029", title:"The Entropic Event",
     text:"The worm bricks connected cars — but your customer is often a farmer, a fleet operator, a rural buyer who values a machine that simply starts and works over one that talks to the cloud. Your tractors and tougher vehicles are barely exposed. 'It just works' is suddenly priceless.",
     choices:[
      {label:"Champion dependable, low-connectivity machines for those who can't afford failure", fx:{cashflow:+7,marketshare:+10,stockprice:+4}, set:["ma_dependable"],
       result:"You make a virtue of ruggedness in a frightened market — the tractor that plows whether or not the internet exists, the SUV that runs when smarter cars won't. For rural India and beyond, dependability becomes the killer feature, and you own it.",
       hist:"Consensus call: leaning into rugged, dependable, low-connectivity machines was the natural base case for Mahindra after Entropic."},
      {label:"Build secure connectivity for the next generation of buyers anyway", fx:{cashflow:-14,marketshare:+4,stockprice:+4},
       result:"You bet rural India is going connected regardless and build it right from the start. Forward-looking and costly — a wager on the customer of 2035 over the one panicking in 2029."},
      {label:"Harden your connected models; keep selling on toughness and value", fx:{cashflow:+2,marketshare:+3,stockprice:+1},
       result:"You quietly secure what's connected and keep your pitch where it's always been. Steady and unflashy — a smaller play than turning the worst tech week in history into your loudest selling point."}
     ]},
    {id:"b4_ice", year:"2030", title:"India's Own Timeline",
     text:"The West races toward ICE bans, but India sets its own clock — affordability first, with diesel, CNG, and EVs all in the mix for hundreds of millions of value-driven and rural buyers. As India's rugged specialist, follow the global pace or build for India's reality?",
     choices:[
      {label:"Build for India's reality — rugged EVs alongside affordable diesel and CNG SUVs", fx:{cashflow:+6,marketshare:+9,stockprice:+3}, set:["ma_india_real"],
       result:"You serve the actual Indian buyer — electric where it works, tough and affordable everywhere else — rather than chasing a Western timeline. Less clean a story, far more right for the market and the rural heartland you own.",
       hist:"Consensus call: matching India's affordability-first, multi-fuel reality was the expected base case for Mahindra."},
      {label:"Push rugged EVs faster than the market — define India's electric SUV first", fx:{cashflow:-13,marketshare:+5,stockprice:+6},
       result:"You bet whoever owns the electric SUV owns India's future and pull the market forward fast. Visionary — and a gamble that incomes and charging catch up before the cost of being early strains the tractor-funded balance."},
      {label:"Protect margins — defend the profitable SUV mid-market, go slow on the rest", fx:{cashflow:+9,marketshare:-7,stockprice:-5},
       result:"You defend the lucrative SUV core and ease off the riskier bets. Disciplined and profitable — and a cession of the value and rural volume that built your brand."}
     ]},
    {id:"b5_taiwan", year:"2032", title:"The Taiwan Shock",
     text:"War freezes chips and convulses global trade. India, less dependent on advanced nodes, is relatively insulated — and your rugged, less software-heavy vehicles need less silicon than premium rivals. The crisis that cripples others could be your opening. Seize it?",
     choices:[
      {label:"Exploit the insulation — ramp output and grab share while global rivals idle", fx:{cashflow:-9,marketshare:+11,stockprice:+6}, set:["ma_seize"],
       result:"You press your advantage hard, ramping the chip-light rugged vehicles while premium rivals starve for silicon. A rare moment when being less cutting-edge is a weapon — and you swing it.",
       hist:"Consensus call: exploiting India's insulation and low chip-dependence to take share in a famine was the expected base case for Mahindra."},
      {label:"Lock up chip supply for your premium and EV models to keep them alive", fx:{cashflow:-12,marketshare:+4,stockprice:+4},
       result:"You spend to secure silicon for the upmarket and electric lineup, protecting your move up the ladder. Costly, and a real test of capital discipline in a crisis."},
      {label:"Stay cautious — ride out the famine on the rugged core, change little", fx:{cashflow:+8,marketshare:-5,stockprice:-6},
       result:"You hunker on the dependable SUV-and-tractor base. Safe — and a passed chance to turn a global crisis into the share grab that defines decades."}
     ]},
    {id:"b6_pandemic", year:"2033", title:"The Discipline Test",
     text:"A pandemic and a tough monsoon hit at once: tractor demand softens, the cash machine sputters, and your automotive ambitions still need feeding. This is the exact moment your history warns about — the SsangYong-and-Ford moment, when ambition outran the balance sheet. Hold the line you swore to hold?",
     choices:[
      {label:"Hold discipline — pause the swings, protect the balance sheet, wait it out", fx:{cashflow:+11,marketshare:-4,stockprice:+4}, set:["ma_disciplined"],
       result:"You do the hard, unglamorous thing the scars taught you: stop reaching, protect the core, let the cycle turn. No heroics, no new write-off — the discipline the tractor business demands becomes the discipline that saves the company.",
       hist:"Consensus call: given its history of costly overreach, holding capital discipline through a downturn was the expected, hard-learned base case."},
      {label:"Press the advantage — buy distressed assets cheap while rivals retreat", fx:{cashflow:-16,marketshare:+7,stockprice:-2},
       result:"You decide downturns are when fortunes are made and go shopping. Bold — and the precise behavior that produced SsangYong. A bet that this time the diligence is good enough to make the gamble pay."},
      {label:"Trim selectively — cut weak bets, fund the strongest, stay in the game", fx:{cashflow:+5,marketshare:+2,stockprice:+1},
       result:"You thread it — pruning laggards, feeding winners, neither freezing nor overreaching. The mature middle path of a company that finally learned its own lesson."}
     ]},
    {id:"b7_humanoid", year:"2035", title:"The Robot Reaches the Farm",
     text:"Humanoid and autonomous robots arrive — and for you the frontier isn't only the factory, it's the field. You are the world's largest tractor maker; autonomous farm equipment could transform agriculture for hundreds of millions. The revolution shaking the car industry could let you lead a different one entirely.",
     voice:"A farm-cooperative leader from Maharashtra: \"If your machine plants and harvests while my sons go to school instead of the field, you will sell ten million. If it breaks in the monsoon, you will sell none.\"",
     choices:[
      {label:"Lead agri-robotics — autonomous tractors and farm robots for the world", fx:{cashflow:-17,marketshare:+10,stockprice:+10}, set:["ma_agribot"],
       result:"You turn the tractor empire toward its own robot revolution — self-driving, AI-guided farm machines built for real conditions and real budgets. A market the car giants ignore, vast and yours by birthright. The boldest dream the tractor cash ever funded — and maybe the rightest.",
       hist:"Consensus call: leveraging tractor leadership into agricultural robotics was the standout base case for Mahindra's robotic age."},
      {label:"Apply robotics to your own plants; keep farm tech incremental", fx:{cashflow:-6,marketshare:+4,stockprice:+3},
       result:"You modernize plants and add smart features to tractors without betting the company on a farm-robot moonshot. Disciplined — and a decision to let a once-in-a-century chance to lead agri-robotics stay an option."},
      {label:"Partner with a tech firm on autonomy; stay the vehicle-and-equipment maker", fx:{cashflow:-4,marketshare:+3,stockprice:+4},
       result:"You rent the robotic brains and keep building the best machines for India and beyond. Capital-light and sensible — and a sharing of the agri-robot upside with whoever supplies the intelligence you chose not to own."}
     ]},
    {id:"b8_verdict", year:"2038", title:"Everything the Tractor Built",
     text:"India is now a great market and you helped make it. The shakeout has passed. The tractor business funded a journey from rugged SUVs to electric vehicles to, perhaps, farm robots. What is Mahindra, finally — and what was all that tractor money for?",
     choices:[
      {label:"India's rugged-mobility-and-farm-tech champion — vehicles and the machines that feed the nation", fx:{cashflow:+6,marketshare:+9,stockprice:+5}, set:["ma_rugged_champ"],
       fxIf:[{if:"ma_agribot", fx:{stockprice:+4}, note:"Your agri-robotics bet already made 'the machines that feed the nation' a real, world-leading business no rival can copy."}],
       result:"You become uniquely yourself: the company that builds India's toughest SUVs AND the autonomous machines that work its farms, bound by one idea — rugged, capable technology for a rising nation. No global giant can copy it; none have the tractor in their soul.",
       hist:"Consensus call: a champion spanning rugged mobility and agricultural technology was the base case unique to Mahindra's DNA."},
      {label:"A disciplined SUV-and-EV specialist — win India, expand only where it pays", fx:{cashflow:+8,marketshare:+4,stockprice:+3},
       result:"You honor the hard-won discipline above all: dominate Indian SUVs and EVs, grow abroad only where the numbers truly work, never again chase a dream the balance sheet can't carry. The mature endgame of a company that turned scars into wisdom."},
      {label:"A diversified mobility-and-machines group — cars, EVs, farm robots, and beyond", fx:{cashflow:-4,marketshare:+6,stockprice:+8},
       result:"You let the tractor money fund its grandest dream yet — a sprawling group spanning mobility, agriculture, and robotics, each business strengthening the others. The most ambitious reading of what 'Mahindra' could mean, attempted at last with the discipline its early dreams lacked."}
     ]}
  ]
};

} /* end attachFutureEras */

