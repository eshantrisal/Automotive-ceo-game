DATA.gm = {
 name:"General Motors", short:"GM", logo:"🔧", theme:"theme-gm", ipo:33,
 pitch:"A 100-year-old industrial giant that has gone bankrupt once already, carries decades of legacy promises on its books, and is betting the next century on batteries and robots. Survive Washington, survive the UAW, survive yourself.",
 kpis:[
  {key:"cash", label:"Solvency", desc:"Cash and access to capital. GM has gone to the brink before. Hit zero and it's Chapter 11 again — or worse."},
  {key:"trust", label:"Washington & Labor", desc:"Political capital, UAW peace, and regulatory standing with NHTSA, the DMV, and Congress. Lose it and the White House picks your CEO for you."},
  {key:"future", label:"Future Readiness", desc:"Competitiveness in EVs, batteries, and autonomy versus Tesla, BYD, and Chinese EV makers. Stall here and you're just defending a shrinking present."}
 ],
 ticker:"GM",
 bankruptcy:"The cash runs out, the suppliers stop shipping on credit, and the lawyers move into the Renaissance Center. A 100-year-old industrial icon files Chapter 11 — again — and this time there's no Treasury check waiting at the bottom of the page.",
 legendary:"You ran a 100-year-old smokestack giant through bankruptcy, a decade-old killer defect, two robotaxi pedestrians, and a trillion dollars of EV hype — and somehow the bowtie is still on the building. Detroit writes case studies about you for a generation.",
 eras:{
  a:{
   name:"The Reckoning", years:"2005–2009", start:{cash:45, trust:50, future:30}, stock0:25, deep:true,
   intro:"It's October 2005. GM is still the world's largest automaker by volume, and that is most of the problem — your retiree pensions and health-care obligations now dwarf your market cap, your factories are full of trucks and SUVs nobody wants now that gas is $3 a gallon, and your biggest parts supplier just filed for bankruptcy. You have maybe three years to fix this the old-fashioned way, with negotiation and willpower, before the world decides to fix it for you.",
   scenarios:[
    {id:"uaw2005", year:"OCT 2005", title:"The $15 Billion Handshake",
     text:"GM lost $8.6 billion last year, mostly on retiree pensions and health care that your unionized competitors at Toyota and Honda simply don't carry. You could ask the UAW for a mid-contract concession — unprecedented, and they have zero obligation to grant it — or wait two years for the next contract cycle while the losses compound.",
     choices:[
      {label:"Go to the UAW now and negotiate a structural fix mid-contract", fx:{cash:+12,trust:+6}, set:["uaw_deal"],
       result:"It takes weeks of brutal, unglamorous negotiation, but the union recognizes a sinking ship when it's still possible to bail it out. A deal gets done that nobody loves and everybody can live with.",
       hist:"Real: in October 2005, GM and the UAW cut GM's hourly retiree health-care liability by about $15 billion (~25%), saving roughly $3 billion pretax annually."},
      {label:"Wait for the 2007 contract cycle and let the losses compound", fx:{cash:-10,trust:+2},
       result:"Patience is a virtue right up until it's a balance sheet. Two more years of red ink pile up while you wait for a negotiating window that may not still exist when it opens."},
      {label:"Push for bankruptcy-style restructuring tools outside negotiation entirely", fx:{cash:+4,trust:-12},
       result:"You haven't filed for anything — you've just told 140,000 UAW members you'd rather use a courtroom than a handshake. Trust, once spent like that, doesn't come back at par."}
     ]},
    {id:"kerkorian", year:"NOV 2005", title:"Kerkorian Knocks",
     text:"Billionaire investor Kirk Kerkorian has built a 9.9% stake in GM through Tracinda and wants a board seat — with his ally Jerome York pushing hard for a three-way alliance with Renault-Nissan to force faster change than Wagoner is delivering on his own.",
     choices:[
      {label:"Accommodate Kerkorian and seriously explore the Renault-Nissan tie-up", fx:{cash:+4,future:+8}, set:["renault_open"],
       result:"You open the data room. Cross-shareholding, shared platforms, maybe shared engineering — the kind of scale economics Detroit has avoided for a century out of pride more than logic."},
      {label:"Resist the activist investor and keep control firmly in-house", fx:{trust:+4,future:-4}, set:["kerkorian_rebuffed"],
       result:"You've protected the org chart. Kerkorian doesn't take rejection quietly, and an investor with $2 billion in your stock and nothing left to lose is now an adversary instead of a partner."},
      {label:"Explore the alliance commercially, strictly on GM's own timeline", fx:{cash:+2,future:+3},
       result:"A middle path that satisfies no one urgently, which in this case is the point — you're buying time to look serious without committing to anything."}
     ]},
    {id:"kerkorian_exit", year:"2006", title:"The Alliance That Wasn't", cond:"renault_open",
     text:"Months of due diligence later, the numbers on a three-way Renault-Nissan-GM alliance don't pencil out the way Kerkorian and Jerome York hoped — and your board is wary of ceding control to Carlos Ghosn's orbit at the exact moment GM needs to look like it's steering its own recovery.",
     choices:[
      {label:"Walk away from the alliance and let the investor relationship cool", fx:{cash:+2,trust:-4}, set:["kerkorian_rebuffed"],
       result:"GM ultimately rejects the three-way alliance. Kerkorian sells down his stake within months and Jerome York resigns from the board, unimpressed with the pace of everything.",
       hist:"Real: GM rejected the Renault-Nissan alliance in 2006; Kerkorian sold his stake and York resigned from the board that year."},
      {label:"Keep negotiating for a narrower commercial deal short of an alliance", fx:{cash:+3,future:+5},
       result:"Smaller, slower, less dramatic — a parts-sharing arrangement instead of a marriage. Kerkorian isn't thrilled, but he isn't gone yet either."},
      {label:"Use the failed talks as cover to finally push Kerkorian off the board entirely", fx:{cash:-2,trust:-4},
       result:"It works, but it costs you the last of the activist-investor goodwill that occasionally forced GM to move faster than its own instincts."}
     ]},
    {id:"plants2006", year:"2006", title:"Closing the Plants Before the Crisis Does",
     text:"Facing continuing North American losses and chronic overcapacity, you're staring at a restructuring plan: cut roughly 30,000 jobs and close four of GM's twenty North American assembly plants by the end of the year — proactively, two years before anyone is forced to.",
     choices:[
      {label:"Cut deep and fast on a multi-year restructuring plan", fx:{cash:+10,trust:-8,future:+2}, set:["deep_cuts_06"],
       result:"It's the most aggressive downsizing GM has attempted in years, and it draws blood on both sides — workers losing jobs, communities losing plants. The balance sheet improves. The structural cost base, infuriatingly, still doesn't catch up to revenue.",
       hist:"Real: GM proceeded with the announced 30,000-job, four-plant restructuring through 2006, but its cost base remained too high heading into 2008."},
      {label:"Make smaller incremental cuts and hope volume recovers", fx:{cash:-6,trust:+4},
       result:"Gentler on the workforce, gentler on Wall Street's patience. The volume recovery you're hoping for is currently parked in a driveway getting 14 miles per gallon and waiting for gas prices to drop."},
      {label:"Push costs onto suppliers and dealers instead of headcount", fx:{cash:+3,trust:-3,future:-3},
       result:"Your supply chain absorbs the squeeze GM won't absorb itself. Delphi — already in bankruptcy — does not appreciate the gesture."}
     ]},
    {id:"lehman", year:"SEP 2008", title:"Lehman Weekend, Detroit Edition",
     text:"Credit markets freeze overnight just as your SUV-and-truck-heavy lineup collides with $4-a-gallon gas. Sales are cratering and your cash burn is accelerating toward a point where GM cannot make payroll or pay suppliers without new capital nobody will lend you privately.",
     voice:"From GM's own 2008 annual report disclosures: auditors flagged 'uncertainty with how the Treasury will view our viability plan' and doubt about GM's ability to 'execute the terms of our loan agreement.'",
     choices:[
      {label:"Go to Washington and ask for emergency federal aid", fx:{cash:+10,trust:-4}, set:["asked_dc"],
       result:"It's the only door still open. Walking through it means admitting, in public, that the world's largest automaker can no longer fund itself.",
       hist:"Real: GM, Ford, and Chrysler approached Washington for assistance; by December 2008 GM disclosed it had received about $13.4 billion in initial federal loans."},
      {label:"Pursue a privately financed restructuring or merger instead", fx:{cash:-4,future:+2},
       result:"Real merger talks with Chrysler happen around this time, but two distressed automakers trying to merge their way to solvency is not a rescue plan, it's a larger funeral."},
      {label:"File for Chapter 11 immediately rather than wait for an answer from Washington", fx:{cash:-8,trust:-6},
       result:"Going early, with no debtor-in-possession financing lined up and credit markets frozen solid, risks a liquidation instead of a reorganization. Bold. Possibly suicidal."}
     ]},
    {id:"jethearing", year:"NOV 19 2008", title:"The Corporate Jet Hearing",
     text:"You're testifying before the Senate Banking Committee asking for loans in the $10–12 billion range, arguing GM could collapse within weeks without aid. Lawmakers are less interested in your balance sheet than in the fact that you flew to Washington on a private jet to ask for a bailout.",
     voice:"Rick Wagoner told Congress GM \"would pay back the loan in full by 2012,\" and offered to accept \"a salary of $1 a year with no cash bonus.\"",
     choices:[
      {label:"Ask for the full amount GM actually needs, regardless of optics", fx:{cash:+8,trust:-6}, set:["asked_full"],
       result:"You get the number right and the optics wrong. Congress does not pass a bailout bill this round — the Big Three get sent back to write 'viability plans' instead.",
       hist:"Real: Congress did not pass a bailout bill in November 2008; Wagoner testified GM would repay loans by 2012 and offered to take a $1 salary."},
      {label:"Ask for less than GM needs to look more credible, accepting you may have to return", fx:{cash:+3,trust:-2},
       result:"Modesty buys you a slightly better headline and a near-certainty you'll be back in this same room within weeks, hat in hand a second time."},
      {label:"Refuse government money and pursue a prepackaged bankruptcy instead", fx:{cash:-10,trust:+4,future:+2},
       result:"Principled, and almost certainly fatal — there is no debtor-in-possession financing available in a frozen credit market without the government's backing. Independence has a price, and right now it's denominated in weeks of payroll."}
     ]},
    {id:"viability", year:"FEB 17 2009", title:"The Viability Plan",
     text:"As a condition of the December loans, GM must submit a long-term viability plan to the new Obama administration's Treasury proving it can survive without endless taxpayer support. The auto task force, led by Steven Rattner, will be the judge.",
     choices:[
      {label:"Submit an aggressive plan with deep brand and dealer cuts", fx:{cash:+6,trust:+2,future:+2}, set:["aggressive_plan"],
       result:"You go further than the board is fully comfortable with — and it still isn't enough."},
      {label:"Submit a more conservative plan preserving most of the existing brand portfolio", fx:{cash:-4,trust:-4}, set:["conservative_plan"],
       result:"You protect what you can. The task force reads it as protecting what should already be gone."},
      {label:"Signal openness to bankruptcy as a restructuring tool within the plan", fx:{trust:+4,future:+2},
       result:"It's an uncomfortable admission to put in writing — that the company built to avoid court might need it after all — but it reads as candor rather than denial."}
     ]},
    {id:"taskforce", year:"MAR 29-30 2009", title:"The Phone Call That Ended an Era",
     text:"The White House auto task force concludes GM's February plan \"did not establish a credible path to viability\" and that new leadership is needed before any more aid flows. After 32 years at GM and nine as CEO, you are asked — by the President of the United States, in effect — to step down.",
     voice:"Auto task force member Austan Goolsbee: the move reflected a need for \"a change of direction and new vision for the company.\"",
     choices:[
      {label:"Resign as requested to preserve the company's aid eligibility", fx:{trust:+8,cash:+4}, set:["wagoner_resigned"],
       result:"Wagoner steps down on March 29, 2009. It's the only path that keeps the lights on for 235,000 employees who didn't make this decision and shouldn't pay for it twice.",
       hist:"Real: Wagoner was forced out on March 29, 2009; President Obama announced March 30 that GM had not made a credible viability case. Fritz Henderson was named interim CEO."},
      {label:"Refuse to resign and contest the task force's authority over a private company", fx:{trust:-15,cash:-10},
       result:"You may be legally correct that an unelected task force shouldn't be firing private-sector CEOs. You are also out of cash, out of allies, and about to find out that being right and being solvent are different things."},
      {label:"Resign, but publicly contest the broader restructuring terms on the way out", fx:{trust:-4,cash:+2},
       result:"A parting shot that gets you a news cycle and costs you the goodwill of the people who'll decide GM's fate for the next five years."}
     ]},
    {id:"brands", year:"APR 27 2009", title:"Killing the Brands",
     text:"With the government demanding deeper cuts, GM — now under interim CEO Fritz Henderson — has to decide which of its eight U.S. brands it can actually support: Chevrolet, Buick, GMC, Cadillac, Pontiac, Saturn, Hummer, Saab.",
     choices:[
      {label:"Cut down to a core four — Chevrolet, Cadillac, Buick, GMC — and wind down or sell the rest", fx:{cash:+10,trust:-2,future:+4}, set:["four_brands"],
       result:"GM announces it will phase out Pontiac by 2010 and resolve Saturn, Hummer, and Saab by year-end — roughly 2,600 dealers and thousands of factory jobs affected.",
       hist:"Real: GM announced April 27, 2009 it would phase out Pontiac and wind down or sell Saturn, Hummer, and Saab by the end of 2009."},
      {label:"Keep the broad multi-brand portfolio and hope volume recovers", fx:{cash:-12,trust:-6},
       result:"Hope is not a restructuring plan, and the task force reviewing your every move knows it."},
      {label:"Try to sell brands as standalone businesses to outside buyers rather than simply shuttering them", fx:{cash:+4,trust:+2},
       result:"Saturn and Hummer draw bidders who ultimately walk away; Saab is sold to Spyker in 2010 and fails anyway a few years later. Selling a sinking brand is harder than it sounds."}
     ]},
    {id:"ch11", year:"JUN 1 2009", title:"Chapter 11",
     text:"Despite everything, GM cannot avoid bankruptcy. The filing will report $82.29 billion in assets against $172.81 billion in liabilities — the largest industrial bankruptcy in U.S. history. The only real choice left is how.",
     choices:[
      {label:"Use a fast '363 sale' — move the good assets into a new government-backed entity, leave legacy liabilities in 'Old GM'", fx:{cash:+18,trust:+4,future:+6}, set:["new_gm"],
       result:"The Treasury and Canadian government provide debtor-in-possession financing, and 'New GM' emerges from court in about 35 days, majority-owned by the U.S. Treasury (~61%), with stakes for Canada, the UAW retiree health trust, and bondholders.",
       hist:"Real: GM filed Chapter 11 on June 1, 2009, using the 363 sale structure; 'New GM' emerged from bankruptcy by mid-July 2009, about 35 days later."},
      {label:"Attempt a traditional, slower Chapter 11 reorganization with every stakeholder negotiating for years", fx:{cash:-15,trust:-2},
       result:"Years of litigation is a luxury a company burning cash by the week cannot afford. The slow path is the path to liquidation, not survival."},
      {label:"Seek a last-minute private buyer or merger instead of court protection", fx:{cash:-8,future:-4},
       result:"There is no buyer for a company this large, this leveraged, and this radioactive in a frozen credit market. The search burns precious weeks you don't have."}
     ]}
   ]
  },
  b:{
   name:"Government Motors", years:"2009–2014", start:{cash:55, trust:40, future:35}, stock0:33,
   intro:"GM is reborn out of bankruptcy in 35 days — four brands instead of eight, majority-owned by the U.S. and Canadian governments and a UAW retiree trust. Every move from here is watched for proof that 'New GM' is a real company and not a political ward.",
   scenarios:[
    {id:"henderson_out", year:"DEC 1 2009", title:"The Board Fires Henderson",
     text:"Just months after emerging from bankruptcy, GM's new government-installed board has grown impatient with the pace of cultural change under Fritz Henderson, a 25-year GM veteran widely seen as a product of the old culture.",
     choices:[
      {label:"Replace Henderson immediately with an outsider to signal a clean break", fx:{trust:+8,future:+4}, set:["whitacre_ceo"],
       result:"The board forces Henderson's resignation and installs AT&T veteran and board chairman Ed Whitacre as CEO — an outsider to the auto industry entirely.",
       hist:"Real: the board forced Henderson's resignation on December 1, 2009, installing Ed Whitacre as CEO."},
      {label:"Give Henderson more time to prove 'New GM' actually works", fx:{trust:-6,cash:+2},
       result:"More time for the old guard to run the new company the old way is not what the Treasury, or the press, wanted to hear."},
      {label:"Install a caretaker and run a longer external search", fx:{trust:-2,cash:-2},
       result:"A longer search means a longer headline about a leaderless 'Government Motors,' which is exactly the narrative everyone is trying to escape."}
     ]},
    {id:"ipo2010", year:"NOV 18 2010", title:"Ringing the Bell Again",
     text:"GM needs to return to public markets to begin repaying U.S. and Canadian taxpayers and shed the 'Government Motors' stigma — just 17 months after bankruptcy.",
     voice:"Ed Whitacre, on stepping down as CEO just before the IPO closed: \"Investors are going to buy the management of the company, as well as the cars they make.\"",
     choices:[
      {label:"Price aggressively to maximize proceeds for the Treasury's exit", fx:{cash:+15,trust:+8}, set:["ipo_priced_high"],
       result:"The IPO prices at $33/share after being upsized roughly 30% on strong demand, raising about $20.1 billion in common shares — the largest IPO in history to that point. The Treasury's stake falls from about 61% toward roughly 33%.",
       hist:"Real: GM's IPO priced at $33/share on November 17, 2010, raising about $20.1 billion in common shares; shares closed up about 3.6% on day one."},
      {label:"Price conservatively to guarantee a clean, confidence-building debut", fx:{cash:+6,trust:+4},
       result:"Safer, smaller, and it leaves money on the table the Treasury — and by extension, taxpayers — would rather have collected."},
      {label:"Delay the IPO further until profitability looks more durable", fx:{cash:-6,trust:-4},
       result:"Every month of delay is another month of 'Government Motors' headlines. Markets reward boldness here more than caution."}
     ]},
    {id:"handoff", year:"AUG-SEP 2010", title:"Handing Off Mid-Comeback",
     text:"With the IPO imminent, Whitacre — who took the CEO job somewhat reluctantly as a turnaround fixer — doesn't want to commit to the years of tenure he believes new public investors will expect.",
     choices:[
      {label:"Hand off to another outside director already familiar with the company", fx:{trust:+4,future:+2}, set:["akerson_ceo"],
       result:"On August 12, 2010, GM announces Dan Akerson — a Treasury-appointed board member and former telecom/private-equity executive — will succeed Whitacre, becoming chairman as well in 2011.",
       hist:"Real: GM announced Dan Akerson would succeed Whitacre as CEO effective September 1, 2010."},
      {label:"Whitacre stays through the IPO and beyond for stability", fx:{cash:+2,trust:+2},
       result:"He didn't want this job permanently, and a reluctant CEO who stays anyway tends to leave anyway, just later and messier."},
      {label:"Hand off to an internal GM lifer instead of another outsider", fx:{trust:-4,future:-2},
       result:"It reads as the board reverting to the very culture the bankruptcy was supposed to break."}
     ]},
    {id:"opel_invest", year:"2011-2012", title:"Europe's Bottomless Pit",
     text:"GM's European operations, anchored by Opel/Vauxhall, continue losing billions annually, with brand overlap between Chevrolet and Opel that Akerson himself calls reminiscent of 'retro GM' thinking. Some board members want out entirely.",
     choices:[
      {label:"Commit fresh multi-billion-euro investment betting on an Opel turnaround", fx:{cash:-10,future:+4}, set:["opel_invested"],
       result:"Akerson commits roughly €4 billion ($5.2 billion) to European operations through 2016 — a bet on revival rather than retreat.",
       hist:"Real: Akerson committed roughly €4 billion to European operations through 2016; the bet would not fully pay off, and GM sold Opel/Vauxhall in 2017."},
      {label:"Sell or shut down Opel/Vauxhall immediately", fx:{cash:+8,trust:-2,future:-4},
       result:"Quicker, cleaner, and it abandons a 90-year-old European foothold years before GM is actually ready to walk away from the continent."},
      {label:"Maintain the status quo and simply absorb the continued losses", fx:{cash:-14},
       result:"The least decisive option available, and the most expensive — Europe keeps bleeding while nobody actually decides anything."}
     ]},
    {id:"buyback", year:"DEC 2012", title:"Buying Back the Government's Stock",
     text:"The U.S. Treasury still holds roughly 500 million GM shares — about 26% of the company — more than two years after the IPO, keeping the 'Government Motors' label alive and constraining executive pay under TARP rules.",
     voice:"Dan Akerson called the move \"an important step in bringing closure to the successful auto industry rescue,\" saying it \"demonstrates confidence in GM's progress and our future.\"",
     choices:[
      {label:"Have GM itself repurchase a large block of shares directly from Treasury", fx:{cash:-8,trust:+10}, set:["bought_back"],
       result:"GM agrees to repurchase 200 million shares directly from the Treasury, which announces plans to sell its remaining roughly 300 million shares within 12-15 months via the open market.",
       hist:"Real: in December 2012, GM agreed to repurchase 200 million shares from the Treasury for about $5.5 billion."},
      {label:"Wait for Treasury to sell shares gradually on the open market instead", fx:{cash:+2,trust:-4},
       result:"Cheaper for GM in the short run, slower for the stigma to lift — and the open market doesn't always cooperate with your timetable."},
      {label:"Do nothing and let the 'Government Motors' label persist", fx:{trust:-10},
       result:"Doing nothing is itself a decision, and this one keeps a hostile nickname alive for no financial benefit at all."}
     ]},
    {id:"treasury_exit", year:"DEC 9 2013", title:"Government Motors, No More",
     text:"The Treasury's final stake sale would close the books on the federal rescue — at a confirmed loss to taxpayers of roughly $10-11 billion, a politically sensitive number for both GM and the administration.",
     choices:[
      {label:"Sell out completely now, even at a loss, to prioritize independence", fx:{trust:+12,cash:+4}, set:["govt_exit_clean"],
       result:"The U.S. Treasury sells its final shares of GM common stock on December 9, 2013, ending the 'Government Motors' era for good. The federal government ultimately recovers about $39 billion of the roughly $49.5 billion it invested.",
       hist:"Real: the Treasury sold its final GM shares on December 9, 2013, at an ultimate loss to taxpayers of roughly $10 billion on the rescue."},
      {label:"Negotiate a slower exit to try to recoup more value over time", fx:{cash:+6,trust:-4},
       result:"A more patient strategy that keeps the government's fingerprints on the cap table — and the nickname alive — for longer than anyone at GM wants."},
      {label:"Explore a structured buyback to control the optics of the eventual loss", fx:{cash:-4,trust:+4},
       result:"Cleverer optics management, at the cost of cash GM would rather be spending on the next decade instead of the last one."}
     ]}
   ]
  },
  c:{
   name:"Barra's GM: Crisis, Culture, and the Cut", years:"2014–2019", start:{cash:50, trust:35, future:40}, stock0:35,
   intro:"January 15, 2014. Mary Barra — a 33-year GM engineer, most recently head of global product development — becomes the first woman ever to lead a major global automaker. Within two weeks, a GM contractor is quietly placing rush orders for replacement ignition switches. The crisis that will define her first year hasn't been announced yet. It's already moving.",
   scenarios:[
    {id:"recall", year:"FEB 7-14 2014", title:"The Recall Nobody Wanted to Name",
     text:"GM notifies NHTSA of a recall covering 778,000 small cars — Chevy Cobalt, Saturn Ion, and others — for a faulty ignition switch that can slip out of 'run,' cutting power steering, brakes, and airbags. GM engineers had known about the defect, in some documented internal discussions, for roughly a decade.",
     choices:[
      {label:"Proactively widen the recall immediately given evidence the defect affects more models and years", fx:{cash:-8,trust:+6,future:+2}, set:["wide_recall"],
       result:"The recall expands rapidly to eventually cover about 2.6 million vehicles globally. GM commissions an independent investigation by attorney Anton Valukas.",
       hist:"Real: the recall expanded from 778,000 to about 2.6 million vehicles; the Valukas Report (May 2014) described a culture of 'incompetence and neglect.'"},
      {label:"Issue a narrow recall focused only on the originally identified vehicles", fx:{cash:+4,trust:-10},
       result:"It buys a few weeks of smaller headlines before the same evidence forces a much larger, much more damaging expansion anyway."},
      {label:"Slow-walk the process pending further internal investigation, as had happened for a decade", fx:{trust:-16,cash:+2},
       result:"This is precisely the decade-long pattern that created the crisis in the first place. Repeating it now, in public, with regulators watching, is not a strategy."}
     ]},
    {id:"hearing", year:"APR 1 2014", title:"I Am Deeply Sorry",
     text:"Barra testifies before the House Energy and Commerce Subcommittee in a hearing titled 'The GM Ignition Switch Recall: Why Did It Take So Long?' — facing intense questioning about why it took roughly a decade to recall a known defect.",
     voice:"Mary Barra to Congress: \"I cannot tell you why it took years for a safety defect to be announced in that program, but I can tell you that we will find out.\" Also: \"I am deeply sorry.\"",
     choices:[
      {label:"Accept full corporate responsibility publicly while declining to speculate pending investigation", fx:{trust:+10,cash:-4}, set:["barra_apology"],
       result:"Barra apologizes repeatedly and declines to give specifics ahead of the Valukas investigation — which frustrates senators who accuse GM of a 'culture of cover-up,' but holds the line on not prejudging the facts.",
       hist:"Real: Barra testified \"I am deeply sorry\" and \"I cannot tell you why it took years... but I can tell you that we will find out,\" on April 1, 2014."},
      {label:"Deflect blame onto specific individuals or engineers", fx:{trust:-12,cash:+2},
       result:"Naming scapegoats before the facts are in plays badly in a room full of cameras and grieving families, and it plays worse once the Valukas Report actually comes out."},
      {label:"Emphasize legal and technical distinctions to minimize corporate liability", fx:{trust:-8,cash:+4},
       result:"Technically precise, emotionally tone-deaf. 'Why did it take so long' is not a question lawyers answer well."}
     ]},
    {id:"feinberg", year:"JUN 30 2014", title:"Pricing a Human Life",
     text:"Rather than litigate thousands of individual claims, GM hires attorney Kenneth Feinberg — who ran the 9/11 and BP Deepwater Horizon compensation funds — to design and administer a victim compensation fund for the ignition-switch defect.",
     choices:[
      {label:"Create an uncapped, no-fault compensation fund with no aggregate limit", fx:{cash:-14,trust:+12}, set:["feinberg_fund"],
       result:"The fund opens August 1, 2014 with death claims starting at a $1 million baseline. By its close, Feinberg's team pays out roughly $594.5 million, covering 124 confirmed deaths and 275 injury claims, with over 90% of offers accepted.",
       hist:"Real: Feinberg's fund ultimately paid about $594.5 million, covering 124 deaths and 275 injuries, with no aggregate cap."},
      {label:"Litigate claims individually through the courts instead", fx:{cash:+4,trust:-10},
       result:"Years of litigation, unpredictable punitive verdicts, and grieving families forced to fight a corporation in court for compensation. Cheaper, maybe, on a spreadsheet. Brutal everywhere else."},
      {label:"Offer a small fixed settlement pool with a hard cap", fx:{cash:-2,trust:-6},
       result:"A cap reads, fairly or not, as GM putting a ceiling on how sorry it's willing to be."}
     ]},
    {id:"culture", year:"2014-2015", title:"Never Put This Behind Us",
     text:"With the immediate recall crisis subsiding, Barra has to decide how aggressively to use the scandal to reform GM's famously rigid, hierarchical safety culture — versus simply moving on once the legal and PR exposure is managed.",
     voice:"Mary Barra, to employees: \"I never want to put this behind us\" — wanting it kept \"permanently in our collective memories.\"",
     choices:[
      {label:"Use it as the forcing mechanism for deep, permanent culture change", fx:{trust:+10,future:+6}, set:["safety_culture"],
       result:"Barra creates a new Global Product Integrity organization and a 'Speak Up for Safety' reporting program, designed to make sure no engineer ever again sits quietly on a defect for a decade.",
       hist:"Real: Barra created the Global Product Integrity organization and 'Speak Up for Safety' program, telling employees she never wanted to 'put this behind us.'"},
      {label:"Treat the crisis as a one-time legal and financial event to resolve, then deprioritize", fx:{cash:+4,trust:-8},
       result:"The exposure is managed. The underlying culture that produced the crisis is largely untouched, which is exactly the kind of decision that creates the next crisis."},
      {label:"Make moderate process changes without broader cultural investment", fx:{trust:-2,future:+2},
       result:"Some new checkboxes on some new forms. Whether it changes how engineers actually behave when they spot a problem is a different question entirely."}
     ]},
    {id:"opel_sale", year:"MAR 6 2017", title:"Letting Go of Europe",
     text:"After nearly 90 years and billions in cumulative European losses, PSA Group approaches GM about acquiring the unprofitable Opel/Vauxhall business. The choice: keep fighting for Europe, or finally let it go.",
     alt:[{if:"opel_invested", text:"After nearly 90 years in Europe — and after Akerson's €4 billion bet on a turnaround a few years back didn't fully pay off — PSA Group approaches GM about acquiring Opel/Vauxhall outright. The money already spent makes walking away now sting more, not less."}],
     voice:"Mary Barra: \"Only 20 percent of the [European] portfolio overlapped with rest of General Motors' portfolio,\" concluding GM couldn't achieve scale economies in European emissions technology alone.",
     choices:[
      {label:"Sell Opel/Vauxhall outright to PSA and exit Europe entirely", fx:{cash:+10,future:+6}, set:["opel_sold"],
       fxIf:[{if:"opel_invested", fx:{trust:-2}, note:"Selling so soon after committing fresh billions to a turnaround invites an uncomfortable question: what was that money actually for?"}],
       result:"GM sells Opel/Vauxhall plus GM Financial's European operations to PSA for roughly €2.2 billion. About 40,000 employees and six assembly plants transfer to PSA, making it Europe's #2 automaker behind VW.",
       hist:"Real: GM announced the sale of Opel/Vauxhall to PSA Group for roughly €2.3 billion on March 6, 2017."},
      {label:"Continue investing in a turnaround instead of selling", fx:{cash:-12,future:-4},
       result:"Doubling down on a market GM has been trying and failing to fix for nearly a decade. The math hasn't changed; only your patience has."},
      {label:"Seek a different buyer or a joint-venture structure instead of a full sale", fx:{cash:+2,trust:+2},
       result:"More optionality, more delay, and no guarantee a better offer than PSA's actually exists."}
     ]},
    {id:"unallocated", year:"NOV 26 2018", title:"Unallocated",
     text:"Facing a maturing truck/SUV product cycle and a desire to redirect billions toward EV and AV investment, GM announces a sweeping restructuring of its North American footprint.",
     choices:[
      {label:"Use the 'unallocated' framing — no future product assigned, technically not a closure — leaving room for UAW negotiation", fx:{cash:+14,trust:-10,future:+6}, set:["unallocated"],
       result:"GM halts production at five North American plants — including Lordstown, Detroit-Hamtramck, and Oshawa — cutting up to 14,700 jobs, while saving about $6 billion in cash by the end of 2019.",
       hist:"Real: GM announced the 'unallocation' of five North American plants on November 26, 2018, cutting up to 14,700 jobs and targeting about $6 billion in savings."},
      {label:"Announce explicit plant closures, naming the affected sites outright", fx:{cash:+10,trust:-16},
       result:"More honest framing, more immediate political and labor backlash — there's no euphemism left to soften the blow."},
      {label:"Avoid the cuts entirely and absorb the lower margins", fx:{cash:-14,future:-8},
       result:"Capital that should be funding Ultium and Cruise instead props up plants building cars the market increasingly doesn't want."}
     ]},
    {id:"strike2019", year:"SEP 15-OCT 25 2019", title:"The 40-Day Strike", cond:"unallocated",
     text:"With the 2015 UAW-GM contract expiring and the 2018 unallocation plan still fresh, contract talks break down over job security, wages, temp workers, and health-care cost-sharing. About 48,000 UAW members at roughly 50 GM plants walk out.",
     choices:[
      {label:"Hold firm on cost discipline and risk a prolonged strike", fx:{cash:-16,trust:-8}, set:["strike_held_firm"],
       result:"The strike runs 40 days — the longest UAW national strike against GM in nearly 50 years. GM later says it cost the company $3.8-4 billion for 2019. The final contract includes an $11,000 ratification bonus and a path for temps to convert to permanent status.",
       hist:"Real: the strike ran 40 days from September 15 to October 25, 2019, and cost GM between $3.8 billion and $4 billion for the year."},
      {label:"Make early concessions to end the strike quickly and limit production losses", fx:{cash:-6,trust:+6},
       result:"Cheaper in lost production, more expensive in precedent — the next negotiation starts from a position of 'GM folds under pressure.'"},
      {label:"Attempt to operate plants with replacement or management labor", fx:{cash:-4,trust:-18},
       result:"Barely attempted in reality, and for good reason — it would have detonated whatever labor peace the company still had left."}
     ]}
   ]
  },
  d:{
   name:"Betting the Garage on the Future", years:"2016–2024", start:{cash:55, trust:45, future:45}, stock0:35,
   intro:"GM commits tens of billions to EVs on the Ultium platform and autonomous robotaxis through Cruise — existential bets against Tesla and Chinese EV makers — while record truck and SUV profits keep funding the bill. The question hanging over the whole era: can a 100-year-old manufacturer actually win two technology wars at once?",
   scenarios:[
    {id:"cruise_buy", year:"MAR 11 2016", title:"Buying the Future for $1 Billion",
     text:"Self-driving technology looks like an existential threat to legacy automakers, with Google's Waymo, Uber, and well-funded startups racing ahead. GM has identified Cruise Automation, a small San Francisco autonomous-driving startup, as an acquisition target rather than building the capability from scratch.",
     choices:[
      {label:"Acquire Cruise outright to get a head start on autonomy in-house", fx:{cash:-10,future:+16}, set:["cruise_acquired"],
       result:"GM acquires Cruise Automation for a price reported as 'north of $1 billion,' paid in cash and stock — talks that started around a strategic investment evolve into a full acquisition.",
       hist:"Real: GM acquired Cruise Automation in March 2016 for a price reported as north of $1 billion."},
      {label:"Take a strategic minority investment instead of a full acquisition", fx:{cash:-3,future:+6},
       result:"Cheaper and lower-commitment, and it means GM doesn't fully control the roadmap or the culture of the team building its autonomous future."},
      {label:"Build an internal AV program organically, or partner with an existing leader like Waymo", fx:{cash:-2,future:+3},
       result:"Slower than buying a head start, and it leaves GM dependent on a partner — Waymo — that has no obligation to put GM's interests first."}
     ]},
    {id:"dragging", year:"OCT 2 2023", title:"The Dragging", cond:"cruise_acquired",
     text:"At about 9:30pm in San Francisco, a pedestrian is struck by a hit-and-run driver and thrown into the path of a Cruise robotaxi, which brakes but then pulls over per its programmed protocol — dragging her roughly 20 feet at up to 7 mph while she's trapped underneath. How Cruise reports this in the next 72 hours will define the company's fate.",
     voice:"California DMV statement: Cruise vehicles \"are not safe for the public's operation\" and \"may lack the ability to respond safely and appropriately during incidents involving a pedestrian.\"",
     choices:[
      {label:"Immediately and fully disclose the dragging footage and circumstances to regulators", fx:{trust:+6,future:-6},
       result:"Full disclosure would have been costly but survivable — a damaged but honest company. This is, notably, not the choice Cruise actually made."},
      {label:"Report the incident emphasizing the vehicle's initial stop, omitting the pullover and drag", fx:{trust:-22,future:-10}, set:["cruise_cover_up"],
       result:"A Cruise senior manager reports the incident to California regulators on October 3 in a way that omits the critical pullover maneuver. The full footage isn't shown to the DMV until October 13. On October 24, the DMV suspends Cruise's robotaxi permits entirely, and Cruise is later fined for incomplete reporting.",
       hist:"Real: Cruise's October 3 report to the CPUC omitted the pullover/drag detail; the DMV suspended Cruise's permits on October 24, 2023, and Cruise was later fined for withholding details. Kyle Vogt resigned as Cruise CEO on November 19, 2023."},
      {label:"Proactively ground the entire fleet pending review before being ordered to", fx:{trust:+10,future:-12},
       result:"Grounding yourself before being grounded is a costly but trust-preserving move — exactly the opposite of what actually happened, and exactly what the moment called for."}
     ]},
    {id:"cruise_future", year:"2023-2024", title:"How Much More Do We Spend on Cruise?", cond:"cruise_acquired",
     text:"After the nationwide pause, Cruise has to rebuild trust with regulators and the public from zero — and GM has already sunk more than $8-10 billion cumulative investment into the unit since 2016 with no robotaxi revenue at meaningful scale.",
     voice:"Mary Barra cited the \"time and expense\" that would have been required to keep scaling the robotaxi business as the reason for eventually exiting.",
     choices:[
      {label:"Scale back funding and narrow Cruise's ambitions while still pursuing robotaxis eventually", fx:{cash:-6,trust:+4,future:+2}, set:["cruise_scaled_back"],
       result:"GM initially supports a slower relaunch of limited Cruise testing through 2024 — a hedge rather than a decision, buying time to see whether the business case still exists.",
       hist:"Real: GM initially supported a slower Cruise relaunch through 2024 before concluding in December 2024 that scaling robotaxis competitively was too costly."},
      {label:"Keep funding Cruise at full scale and push to relaunch robotaxi service as planned", fx:{cash:-14,future:+8},
       result:"Full speed ahead against Waymo, against public skepticism, and against a board that's started asking pointed questions about the cumulative bill."},
      {label:"Exit the robotaxi business entirely right now and redeploy the team into personal-vehicle autonomy", fx:{cash:+6,trust:+4,future:-2},
       result:"The eventual outcome, just arriving a year early — and a year earlier than the dossier of evidence justifying it had fully accumulated."}
     ]},
    {id:"cruise_end", year:"DEC 10 2024", title:"Folding Cruise", cond:"cruise_acquired",
     text:"GM has concluded the 'time and expense' required to scale robotaxis competitively against Waymo and others is too great. The annual Cruise spend has been running around $2 billion with no meaningful revenue. The decision: keep going, or fold it.",
     choices:[
      {label:"Stop funding Cruise's robotaxi development and fold its team into GM's broader technical organization", fx:{cash:+10,future:-4}, set:["cruise_folded"],
       result:"GM announces it will stop funding Cruise's standalone robotaxi business and fold roughly 2,300 employees and technology into GM's wider technical teams — cutting Cruise-related spend by more than half and refocusing autonomy investment on personal-vehicle driver-assistance features.",
       hist:"Real: on December 10, 2024, GM announced it would stop funding Cruise's robotaxi development, folding about 2,300 employees and the technology into GM's broader teams, saving over $1 billion annually."},
      {label:"Keep the robotaxi ambition alive at a smaller scale rather than folding it entirely", fx:{cash:-8,future:+4},
       result:"A face-saving half-measure. The competitive gap to Waymo doesn't close on a smaller budget; it just gets watched more slowly."},
      {label:"Sell the Cruise technology and team to another AV player instead of absorbing it", fx:{cash:+14,future:-10},
       result:"It recovers some of the sunk cost on paper. It also means GM walks away from autonomy entirely just as the technology starts to mature in someone else's hands."}
     ]},
    {id:"ev_targets", year:"2022-2024", title:"The EV Targets That Didn't Land",
     text:"GM has publicly committed to building roughly 400,000 EVs on the Ultium platform plus the existing Bolt between early 2022 and mid-2023, backed by billions in Ultium Cells battery joint ventures with LG. Battery supply constraints and an automation equipment supplier's problems are putting that target out of reach.",
     choices:[
      {label:"Publicly delay and reset targets to more achievable levels while continuing the broader EV investment", fx:{cash:+6,trust:+4,future:-2}, set:["ev_reset"],
       result:"GM delivers only about 75,883 EVs in all of 2023 — roughly 62,045 of them soon-to-be-discontinued Chevy Bolts, leaving just 13,341 Ultium-based EVs actually produced. By late 2024 GM cuts its 2024 target to roughly 200,000 units, while insisting Ultium remains the long-term strategy.",
       hist:"Real: GM delivered about 75,883 EVs in 2023 (62,045 of them Bolts), and cut its 2024 EV production target to roughly 200,000 units by late 2024."},
      {label:"Push through supply and automation bottlenecks to hit the original aggressive targets regardless of cost", fx:{cash:-14,future:+6},
       result:"Throwing money at a battery-supply bottleneck doesn't make the cells appear faster. The targets slip anyway, just after burning more cash trying to prevent it."},
      {label:"Significantly scale back EV ambitions and capital spending in favor of continued ICE/hybrid profits", fx:{cash:+10,future:-14},
       result:"The trucks and SUVs keep printing money. The decade-defining bet against Tesla and BYD quietly shrinks instead."}
     ]}
   ]
  }
 }
};
EVENTS.gm = [
 {title:"UAW Local Grumbles", text:"A local UAW chapter threatens a one-day walkout over staffing levels at a single plant, days before a major product launch.", fx:{trust:-4}, up:"A weekend of shuttle diplomacy with the local president buys peace, priced in overtime."},
 {title:"Chip Shortage Bites", text:"A global semiconductor shortage forces GM to ship thousands of trucks without certain features, to be retrofitted later.", fx:{cash:-4}, up:"The 'no-feature' trucks sell anyway. Truck buyers, it turns out, will forgive almost anything."},
 {title:"J.D. Power Surprise", text:"An unglamorous GM sedan tops a closely watched quality survey, catching even GM's own marketing department off guard.", fx:{trust:+4}, up:"Nobody updates the ad campaign in time to use it. The win quietly evaporates by next quarter."},
 {title:"Credit Rating Wobble", text:"A ratings agency puts GM on watch over legacy pension obligations, spooking bondholders for a news cycle.", fx:{cash:-5}, up:"The outlook stabilizes within weeks once the quarterly numbers come in ahead of forecast."},
 {title:"Battery Patent Win", text:"GM's Ultium engineering team quietly wins a key battery-chemistry patent dispute against a supplier.", fx:{future:+5}, up:"Nobody outside the patent bar notices. The lawyers throw themselves a small party anyway."},
 {title:"Dealer Network Frustration", text:"Franchise dealers publicly complain that EV margins and inventory allocations are squeezing their showrooms.", fx:{trust:-3}, up:"A revised allocation formula calms the loudest dealers, for now."}
];
TICKER.gm = [
 "Ford teases a cheaper EV pickup, again",
 "UAW local ratifies contract amendment with no drama, briefly",
 "Analyst: 'GM trucks are the company,' everything else is a rounding error",
 "Waymo expands robotaxi service to another city",
 "Chinese EV maker undercuts Ultium pricing by another 15%",
 "Pension actuaries quietly recalculate, again",
 "Cadillac promises a 'true return to luxury,' again",
 "Detroit weather delays a plant restart by two shifts"
];
