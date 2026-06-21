DATA.vw = {
 name:"Volkswagen Group", short:"Volkswagen", logo:"🚙", theme:"theme-vw", ipo:28,
 pitch:"A 12-brand industrial empire that built more cars than anyone on Earth — and then had to find out, in front of the whole world, what it had built them with.",
 kpis:[
  {key:"scale", label:"Global Scale", desc:"Units sold and market share versus Toyota, GM and BYD. The original obsession of Strategy 2018 — and the thing China is now taking back. Hit zero and the volume empire has nothing left to sell."},
  {key:"trust", label:"Trust / Compliance", desc:"Regulatory, legal and public trust. Cratered by Dieselgate in 2015 and managed ever since like a second balance sheet of fines, indictments and brand damage. Hit zero and no regulator, customer or court believes a word from Wolfsburg again."},
  {key:"labor", label:"Labor Peace & Cost Discipline", desc:"Your relationship with IG Metall and the works council — which holds half the supervisory board seats and can block plant closures — weighed against the cost competitiveness you need against Tesla and BYD. Hit zero and Lower Saxony's blocking minority ends your tenure."}
 ],
 ticker:"VOW3",
 bankruptcy:"The works council walks out, the State of Lower Saxony exercises its blocking minority, and the supervisory board convenes without you on the agenda. Wolfsburg's lights stay on — Germany cannot let ten plants go dark — but the corner office gets a new name by Monday.",
 legendary:"You inherited a fraud, a furious workforce and a Chinese market in revolt — and somehow leave behind a company that builds clean cars, keeps its plants, and tells the truth to regulators before they have to ask twice. Piëch would never recognize it. That's the point.",
 eras:{
  a:{
   name:"Strategy 2018", years:"2007–2015", start:{scale:45, trust:60, labor:55}, stock0:25,
   intro:"January 2007. You've just taken the wheel of a company that builds six million cars a year and answers to a chairman, Ferdinand Piëch, who does not deal in modest ambitions. The plan taking shape in Wolfsburg's tenth floor is not 'grow carefully.' It's 'become the largest, most profitable, most admired automaker on Earth — by 2018.' Toyota and GM currently outsell you. Nobody in this room finds that acceptable.",
   scenarios:[
    {id:"strategy2018", year:"2007", title:"The 10-Million-Car Bet",
     text:"Piëch wants it on paper and in public: Strategy 2018 — overtake Toyota and GM to become the world's largest automaker by volume, profit and technology, within eleven years. Your own planning staff calls the target borderline absurd for a company this size. You sign it anyway, because the chairman is already nodding.",
     choices:[
      {label:"Set a more modest, profitability-first target instead", fx:{scale:-10,trust:+5,labor:+5}, set:["modest_start"],
       result:"Analysts approve. Piëch does not. You will spend the next several board meetings explaining why your ambition fits inside a spreadsheet."},
      {label:"Chase the volume crown through organic growth and M&A, no single risky technology bet", fx:{scale:+8,labor:+3}, set:["organic_growth"],
       result:"Plants rise in China and Mexico, brands get folded in one by one. Slower, sturdier, and entirely dependent on every market staying open to you."},
      {label:"Bet the US push on marketing 'clean diesel' as the technology that cracks America", fx:{scale:+15,trust:-5}, set:["diesel_bet"],
       result:"Clean diesel becomes the centerpiece of the American strategy: efficient, torquey, and — the ads promise — green. Engineering has been quietly told what number the marketing department needs to hit.",
       hist:"Real: Winterkorn, backed by Piëch, set Strategy 2018 in 2007, targeting global #1 status by volume, profit and technology — with 'clean diesel' as the centerpiece of the US push."}
     ]},
    {id:"ea189", year:"2008–2009", title:"Clean Diesel for America",
     text:"American buyers don't want diesels, culturally, but Strategy 2018 needs a fuel-efficient, marketable powertrain for the US without the cost of full SCR/AdBlue NOx-cleanup hardware. Your engineers on the EA189 program have a budget, a deadline, and an EPA NOx limit that the budget doesn't comfortably allow.",
     alt:[{if:"diesel_bet", text:"The marketing department has already promised dealers a 'clean diesel' halo car for the US. The EA189 engineering team inherits that promise as a hard requirement, not a suggestion."}],
     choices:[
      {label:"Fund full SCR/AdBlue hardware on every diesel — the expensive, honest fix", fx:{trust:+10,labor:-5}, set:["honest_diesel"],
       result:"Costs balloon. Finance asks, more than once, whether Strategy 2018's US targets can absorb a per-car cost increase this large. The cars, at least, are clean."},
      {label:"Accept higher real-world emissions and lobby for looser enforcement", fx:{trust:-5,scale:+3}, set:["lobby_path"],
       result:"Government-affairs staff make the rounds in Washington and Brussels. Regulators listen politely and change nothing about the test that matters."},
      {label:"Install software that detects test conditions and tightens emissions only then", fx:{scale:+10,trust:-15}, set:["defeat_device"],
       result:"The EA189's 'defeat device' passes every dynamometer test on Earth. On the road, it relaxes controls to protect performance and fuel economy. Nobody outside a small circle of engineers knows yet.",
       hist:"Real: VW installed defeat-device software on EA189 (and later EA288/3.0L) diesel engines, ultimately found in roughly 11 million vehicles worldwide."}
     ]},
    {id:"wvu", year:"MAY 2014", title:"The West Virginia University Test", cond:"defeat_device",
     text:"The International Council on Clean Transportation commissioned West Virginia University to road-test diesel emissions — meant to showcase how clean US diesels were. Instead: your two VW test cars emit up to 40 times the legal NOx limit on real roads, while the BMW comparison car certifies clean. CARB and EPA start asking pointed questions.",
     choices:[
      {label:"Admit the discrepancy and disclose voluntarily, now", fx:{trust:+15,scale:-5}, set:["early_admit"],
       result:"Legal is aghast. You've just handed regulators a confession a year before they would have proven it themselves — but you've also stopped digging."},
      {label:"Contest the methodology and stall", fx:{trust:-10,labor:+2}, set:["stalled"],
       result:"VW representatives offer CARB a year of technical explanations — calibration issues, unexpected use conditions. None of them survive contact with CARB's own confirmatory testing.",
       hist:"Real: VW representatives, confronted by CARB and EPA through 2014–2015, repeatedly offered technical explanations rather than admitting a defeat device, prolonging the investigation into 2015."},
      {label:"Quietly start an internal investigation while saying nothing publicly", fx:{trust:-5}, set:["quiet_internal"],
       result:"Lawyers convene. Engineers are interviewed. The public hears nothing, which is itself a message regulators eventually learn to read."}
     ]},
    {id:"coup", year:"APR 2015", title:"Piëch vs. Winterkorn — The Boardroom Coup That Wasn't",
     text:"Chairman Ferdinand Piëch, who installed Herbert Diess as VW-brand CEO in December and stripped Winterkorn of that title, tells a magazine he is 'distancing himself' from his own CEO. The public power struggle ignites five months before Dieselgate breaks — though nobody in this room knows that yet.",
     choices:[
      {label:"Side with Piëch — let the supervisory board oust Winterkorn now", fx:{labor:-5,trust:+3}, set:["winterkorn_ousted_early"],
       result:"An early change of captain, before the iceberg is visible. History will wonder, mostly uselessly, whether this changed anything that mattered."},
      {label:"Negotiate a managed transition naming a successor", fx:{labor:+3}, set:["managed_transition"],
       result:"A handover plan gets drafted. It will never be executed in the form anyone imagined this week."},
      {label:"Back Winterkorn publicly as the 'best possible' CEO with the board's full support", fx:{labor:+8,trust:-3}, set:["backed_winterkorn"],
       result:"The board's leadership committee closes ranks. Piëch, outmaneuvered in his own boardroom, resigns as chairman within days.",
       hist:"Real: VW's supervisory board leadership committee backed Winterkorn as the 'best possible' CEO with its 'full support' in April 2015; Piëch resigned as chairman by late April."}
     ]},
    {id:"notice", year:"SEP 18 2015", title:"The Notice of Violation",
     text:"The EPA issues a formal Notice of Violation: VW and Audi 2.0L diesels, model years 2009–2015, used a defeat device producing NOx emissions up to 40 times the legal standard. VW representatives quietly told regulators days before — but the public notice detonates the story worldwide, instantly.",
     cond:"defeat_device",
     alt:[{if:"early_admit", text:"Because you got ahead of this eighteen months ago, the EPA's notice reads less like an ambush and more like a formality confirming what Wolfsburg already disclosed. Small mercy. The 40x number still leads every broadcast tonight."}],
     choices:[
      {label:"Continue contesting and explaining technical discrepancies", fx:{trust:-15,scale:-5}, set:["kept_denying"],
       result:"The explaining-away strategy, which had a year-long head start, runs out of road at almost the exact moment the cameras arrive."},
      {label:"Get ahead of the EPA notice with a voluntary public admission first", fx:{trust:+5},
       fxIf:[{if:"early_admit", fx:{trust:+5}, note:"Having disclosed back in 2014, a fuller public admission now reads as consistency, not panic."}],
       result:"You beat the regulator to the headline by hours. It buys almost nothing in market value, but a great deal in how the next conversation with prosecutors goes."},
      {label:"Confirm the deception publicly within days, as the world demands", fx:{trust:-10,scale:-8}, set:["full_confession"],
       result:"On September 20–22, VW admits to installing the software in roughly 11 million vehicles worldwide. A second EPA notice follows in November, covering 3.0L engines.",
       hist:"Real: EPA's Notice of Violation went public Sept 18, 2015; VW admitted the software was in ~11 million vehicles worldwide within days. A second Notice of Violation followed Nov 2, 2015 covering 3.0L engines."}
     ]},
    {id:"resign", year:"SEP 23 2015", title:"The Resignation", cond:"defeat_device",
     text:"Four days after the public admission, the supervisory board meets to decide Winterkorn's fate. You must choose how the most consequential CEO exit in the company's history is framed — to the board, to prosecutors, and to 600,000 employees watching to see if the company survives the week.",
     choices:[
      {label:"Resist removal and force a board vote", fx:{labor:-10,trust:-10}, set:["fought_removal"],
       result:"A public fight over a private scandal. The board votes anyway. You've spent the company's last reserve of unity on a fight you couldn't win."},
      {label:"Resign immediately with a full personal apology and admission of failure", fx:{trust:+10,labor:+5}, set:["full_apology"],
       result:"A cleaner break than the one history actually got. It costs you any claim to vindication later, and buys the company a faster reset."},
      {label:"Resign while denying personal wrongdoing, framing it as a 'fresh start'", fx:{trust:-5,labor:+3}, set:["denied_wrongdoing"],
       result:"\"I am not aware of any wrongdoing on my part,\" you tell the cameras, while accepting 'responsibility for the irregularities.' The sentence will be parsed by historians for decades.",
       hist:"Real: Winterkorn resigned Sept 23, 2015, saying he was 'not aware of any wrongdoing on my part' while accepting 'responsibility for the irregularities that have been found in diesel engines.'"}
     ]}
   ]
  },
  b:{
   name:"Dieselgate and the Reckoning", years:"2015–2018", start:{scale:60, trust:15, labor:45}, stock0:14, deep:true,
   intro:"September 25, 2015. Forty-eight hours ago you were running Porsche. Now you run a company that just confessed to defrauding regulators on roughly 11 million vehicles, watched its share price implode, and employs 600,000 people who are asking, out loud, whether there's a company left to work for. You were chosen because your hands are clean. They will not stay unstained by association for long.",
   scenarios:[
    {id:"muller", year:"SEP 25 2015", title:"Müller Takes the Wheel",
     text:"The supervisory board needs a credible successor within hours, not weeks. You — Matthias Müller, Porsche's CEO, untainted by the diesel program — are installed as Group CEO two days after Winterkorn's resignation. The first decision is what kind of CEO you intend to be: continuity, or rupture.",
     choices:[
      {label:"Promote from within the implicated VW brand leadership", fx:{trust:-10,labor:+3}, set:["promoted_implicated"],
       result:"Continuity, but of exactly the wrong kind. Every press conference now opens with a question about what this person knew."},
      {label:"Bring in a total outsider with no VW Group history", fx:{trust:+5,labor:-5}, set:["outsider_ceo"],
       result:"Clean hands, zero institutional memory. You'll spend the first six months learning where the bodies — and the engines — are buried."},
      {label:"Install an insider from a different, untainted VW Group brand", fx:{trust:+10,labor:+5}, set:["porsche_clean"],
       result:"Porsche's halo follows you into Wolfsburg. The pivot toward electrification and a 'cultural change' narrative begins almost immediately.",
       hist:"Real: Matthias Müller, previously Porsche CEO and seen as untainted by the diesel program, became VW Group CEO on Sept 25, 2015."}
     ]},
    {id:"pay_americans", year:"2016–2017", title:"Pay the Americans",
     text:"The DOJ, the FTC, 44 state attorneys general and roughly 500,000 affected 2.0L diesel owners all want their reckoning. The scale of potential liability is unprecedented for an automaker. Your general counsel lays out three roads, and only one of them ends this year.",
     choices:[
      {label:"Fight every claim in court for years", fx:{trust:-15,scale:-5}, set:["fought_settlement"],
       result:"Litigation drags into the next decade. Every motion you win reads, in the press, like an admission you're still fighting."},
      {label:"Negotiate a fast, generous settlement to draw a clean line under it", fx:{trust:+15,scale:-10}, set:["fast_settlement"],
       result:"VW agrees to spend up to $14.7 billion: a buyback/lease-termination program for nearly 500,000 vehicles, $4.7 billion for environmental mitigation and green investment, and separately a guilty plea with a $2.8 billion criminal penalty.",
       hist:"Real: VW agreed to spend up to $14.7B settling the 2.0L allegations (up to $10.03B in buyback/compensation, $4.7B environmental mitigation), and separately pleaded guilty with a $2.8B federal criminal penalty."},
      {label:"Settle civil claims but contest criminal liability", fx:{trust:+5,scale:-5}, set:["partial_settlement"],
       result:"A negotiated middle path. Customers get their checks faster than the criminal case gets resolved — which means the headlines never quite stop."}
     ]},
    {id:"braunschweig", year:"JUN 13 2018", title:"The Braunschweig Fine",
     text:"German prosecutors in Braunschweig conclude their investigation into VW AG's corporate liability for selling more than 10.7 million defeat-device cars between mid-2007 and 2015. The number they've settled on: a fine described as one of the highest administrative penalties ever imposed on a company in Germany.",
     alt:[{if:"fought_settlement", text:"Having spent two years contesting the American claims, your lawyers arrive in Braunschweig with a reputation for fighting everything — which the prosecutors here have clearly priced in."}],
     choices:[
      {label:"Contest and appeal the fine", fx:{trust:-10,scale:-3}, set:["appealed_fine"],
       result:"An appeal buys time and costs goodwill at exactly the moment goodwill is the scarcest currency you have."},
      {label:"Negotiate the figure down before accepting", fx:{trust:-3}, set:["negotiated_fine"],
       result:"Modest savings, modest delay, modest relief. Nobody remembers the negotiated number; everyone remembers the case."},
      {label:"Accept the fine without appeal, to close the matter", fx:{trust:+10,scale:-3}, set:["accepted_fine"],
       result:"€1 billion — the €5 million statutory maximum plus €995 million in disgorged economic benefit. You pay it without a fight and call the matter closed. Regulators take note of which automaker actually closes its files.",
       hist:"Real: Braunschweig prosecutors imposed a €1 billion fine (€5M statutory maximum plus €995M disgorgement) in June 2018; VW accepted it without appeal."}
     ]},
    {id:"executives", year:"2017–2019", title:"Charging the Executives",
     text:"US and German prosecutors want individual scalps, not just corporate fines. Oliver Schmidt, a former VW compliance executive, faces prison. Martin Winterkorn himself is in prosecutors' sights, accused of being told of the cheating in 2014 and again in 2015 and continuing to 'perpetrate the fraud' regardless. The company must decide how to treat its own former leadership.",
     choices:[
      {label:"Fund legal defense for implicated executives as a show of loyalty", fx:{trust:-10,labor:+5}, set:["shielded_execs"],
       result:"Loyalty to the old guard reads, externally, as a company that still hasn't fully broken with the people who built the fraud."},
      {label:"Cooperate fully with prosecutors, even against former CEO Winterkorn", fx:{trust:+12,labor:-5}, set:["cooperated_doj"],
       result:"Oliver Schmidt pleads guilty and is sentenced to 84 months in US federal prison. Winterkorn is indicted by the US DOJ on May 3, 2018 on conspiracy and wire fraud charges — though as a German citizen, he is never extradited for trial.",
       hist:"Real: Schmidt was sentenced to 84 months. Winterkorn was indicted by US DOJ May 3, 2018 (conspiracy, three counts of wire fraud); he remains in Germany and was separately charged with fraud by German prosecutors in 2019."},
      {label:"Arrange quiet severance deals while staying publicly neutral", fx:{trust:-3,labor:+3}, set:["quiet_severance"],
       result:"Neither loyalty nor cooperation, exactly — just paperwork. Prosecutors proceed regardless; severance agreements don't bind courts."}
     ]},
    {id:"meb", year:"2016–2017", title:"Betting on MEB",
     text:"Diesel's reputation is destroyed and Tesla's Model 3 reveal looms. You must decide how far to commit VW's enormous capital base to a dedicated, ground-up electric architecture versus hedging with hybrids on existing combustion platforms.",
     choices:[
      {label:"Minimal EV investment — hedge with hybrids on existing platforms", fx:{scale:+3,labor:+5}, set:["minimal_ev"],
       result:"Lower risk, slower transition. Somewhere in Shenzhen, a company you've never heard of is not hedging at all."},
      {label:"Buy EV technology and expertise via acquisition or partnership", fx:{scale:+5}, set:["bought_ev"],
       result:"Faster than building from scratch, messier on integration. You now own pieces of someone else's roadmap."},
      {label:"Commit to a dedicated, modular EV-only architecture (MEB) across every mass-market brand", fx:{scale:-5,trust:+8}, set:["meb_allin"],
       result:"'Roadmap E' commits to electrifying all ~300 Group models by 2030, including 50 pure-EVs by 2025, with €20 billion-plus earmarked. The first MEB car, the ID.3, won't ship until 2020 — but the bet is made, publicly and irreversibly.",
       hist:"Real: VW announced 'Roadmap E' in Sept 2017, committing to electrify the entire model portfolio by 2030 (50 pure-EVs, 30 plug-in hybrids by 2025); the MEB platform's first production vehicle, the ID.3, launched in 2020."}
     ]},
    {id:"jobs2016", year:"NOV 2016", title:"30,000 Jobs for a Different Future",
     text:"To fund the diesel settlements and the EV pivot simultaneously, your team and the works council must negotiate a major restructuring of the VW brand. The works council holds half the supervisory board seats. Nothing happens here without their signature.",
     alt:[{if:"meb_allin", text:"Having just bet the company on MEB, you need the workforce funding that bet without revolting against it — the works council knows exactly how much leverage that gives them at this table."}],
     choices:[
      {label:"Across-the-board layoffs without union negotiation", fx:{labor:-15,scale:+5}, set:["forced_layoffs"],
       result:"The works council's half of the supervisory board does not take this well. Strikes are not a hypothetical with this workforce; they are a memory everyone in the room shares."},
      {label:"Freeze hiring and rely on attrition-only cuts", fx:{labor:+3,scale:-3}, set:["attrition_only"],
       result:"Slower, gentler, and nowhere near the savings the diesel bill requires. The CFO's spreadsheet does not balance this way."},
      {label:"Negotiate a formal deal: job cuts for job-security guarantees and EV investment", fx:{labor:+10,scale:+5}, set:["labor_deal_2016"],
       result:"VW announces roughly 30,000 job cuts worldwide over several years, mostly in Germany, aiming to double the VW brand's operating margin — while pledging no compulsory redundancies in Germany.",
       hist:"Real: VW announced plans to cut around 30,000 jobs worldwide (mostly Germany) over several years in Nov 2016, funding the shift to electromobility while pledging no compulsory redundancies in Germany."}
     ]}
   ]
  },
  c:{
   name:"The Diess EV Offensive and Its Limits", years:"2018–2022", start:{scale:55, trust:50, labor:40}, stock0:18,
   intro:"April 12, 2018. You're Herbert Diess, the former BMW purchasing chief who's spent two years as VW-brand CEO proving you can cut costs and push EVs faster than anyone in this building is comfortable with. The supervisory board has just handed you the whole Group, restructured into six business areas plus a China region. Your mandate: turn a 12-brand industrial conglomerate into something that moves at Tesla speed. The works council is watching your hands, not your mouth.",
   scenarios:[
    {id:"handover", year:"APR 12 2018", title:"The Handover",
     text:"Less than three years after steering VW through the worst of Dieselgate, Matthias Müller is pushed out in your favor. The board frames the change around the need to 'pick up speed' in e-mobility and digitalization amid 'profound upheaval' in the industry. You inherit both the EV mandate and the cleanup that isn't finished.",
     choices:[
      {label:"Keep Müller through a longer transition given the ongoing legal cleanup", fx:{trust:+5,scale:-5}, set:["longer_transition"],
       result:"Stability has a cost: the slower pivot to EVs that the board explicitly didn't want."},
      {label:"The board chooses a different internal candidate instead", fx:{labor:+3}, set:["different_candidate"],
       result:"A safer pick, by the board's own admission less aggressive on digitalization. The clock on Tesla's lead keeps running regardless."},
      {label:"Install yourself — already proven as a cost-cutter and EV advocate at VW brand", fx:{scale:+8,labor:-5}, set:["diess_installed"],
       result:"You become Group CEO on April 12, 2018, retaining influence over the VW brand. Electrification and digitalization become the explicit centerpiece of your mandate — and your reputation as a blunt cost-cutter arrives with you.",
       hist:"Real: Herbert Diess became VW Group CEO effective April 12, 2018, with electrification and digitalization as the explicit centerpiece of his mandate."}
     ]},
    {id:"ebitfrei", year:"MAR 2019", title:"\"EBIT macht frei\"",
     text:"At an internal Autostadt event in Wolfsburg, trying to drive home a profitability message to staff, you use the phrase \"Ebit macht frei\" — EBIT sets you free. It is an unmistakable echo of the Nazi concentration-camp slogan \"Arbeit macht frei.\" The remark is captured and leaked within hours.",
     voice:"The phrase itself is the load-bearing quote. VW's supervisory board would publicly \"condemn\" it.",
     choices:[
      {label:"Downplay it as unintentional wordplay, see if it blows over", fx:{trust:-10,labor:-5}, set:["downplayed_ebit"],
       result:"It does not blow over. The supervisory board publicly condemns the remark, and pressure forces a fuller apology days later than it should have come.",
       hist:"Real: Diess's 'Ebit macht frei' remark caused a major scandal; VW's supervisory board publicly condemned it and Diess apologized, but the episode became a recurring symbol of his rocky relationship with labor and German public sentiment."},
      {label:"Apologize immediately and fully, no equivocation", fx:{trust:+5,labor:+3},
       result:"A faster apology than history actually got. It costs you nothing extra and buys back a sliver of the goodwill the phrase torched."},
      {label:"Say nothing publicly and hope the story dies", fx:{trust:-15,labor:-8}, set:["silent_ebit"],
       result:"Silence reads as contempt. The story does not die; it becomes the headline anyway, three days later, angrier."}
     ]},
    {id:"cuts2019", year:"NOV 2019", title:"Announcing the Cuts Through the Press",
     text:"You tell the supervisory board that up to 30,000 jobs — one in four roles at the core VW brand — could become superfluous as EVs require less labor to build than combustion cars. The figure leaks to media essentially in parallel with the formal negotiation, inflaming tensions with labor leader Bernd Osterloh.",
     alt:[{if:"silent_ebit", text:"Labor's trust in you was already thin after the Autostadt remark. A leaked 'one in four jobs superfluous' figure lands on that thin ice like a freight train."}],
     choices:[
      {label:"Negotiate the full figure privately with the works council first", fx:{labor:+8,trust:+3}, set:["private_nego"],
       result:"Slower, quieter, and considerably less likely to detonate in the press before the deal is done."},
      {label:"Phase the disclosure gradually over several announcements", fx:{labor:+3}, set:["phased_disclosure"],
       result:"Gentler on the nerves, harder to control once the first number is already public."},
      {label:"Let the stark framing reach the press in parallel with negotiation", fx:{labor:-10,trust:-3}, set:["leaked_cuts"],
       result:"Labor leaders accuse you — a cost-cutter by BMW reputation — of pushing to cut jobs 'more swiftly and deeply' than the works council wants. After negotiation, management and labor agree to cut 30,000 jobs at the VW brand through 2023, in exchange for no compulsory redundancies in Germany until 2029, plus 9,000 new EV/battery/software jobs.",
       hist:"Real: management and labor agreed in Nov 2019 to cut 30,000 jobs at the VW brand through 2023 in exchange for a no-compulsory-redundancy pledge through 2029, while adding ~9,000 new EV/battery/software jobs."}
     ]},
    {id:"id3bugs", year:"2019–2020", title:"The ID.3's 300 Bugs a Day",
     text:"The ID.3 — your flagship MEB-platform EV and the proof that the strategy works — is found to have deeply unstable software. Test drivers log as many as 300 bugs per day on a single vehicle. Your own engineers concede the architecture was developed 'too hastily.'",
     choices:[
      {label:"Delay the launch significantly until software is fully stable", fx:{trust:+8,scale:-10}, set:["delayed_id3"],
       result:"The car gets better. Every month of delay is a month the press spends asking whether VW can actually ship software."},
      {label:"Ship as planned on the original timeline and patch later", fx:{scale:+5,trust:-12}, set:["shipped_buggy"],
       result:"The bug count becomes a recurring joke in EV media for a year. Reviewers are merciless, owners are patient — barely."},
      {label:"Ship a reduced feature set on time, add features via over-the-air updates after", fx:{scale:+3,trust:-5}, set:["shipped_reduced"],
       result:"European deliveries slip from mid-2020 to September 2020, and the first cars ship without some advertised features — App Connect, a head-up display function — to arrive via update months later. The episode becomes a direct contributor to your removal as VW-brand CEO later this year, even as you remain Group CEO.",
       hist:"Real: ID.3 European deliveries were delayed from mid-2020 to September 2020 and shipped without some advertised features (added later via software update); the episode was a major embarrassment and contributed to Diess's removal as VW-brand CEO and the creation of the Cariad software unit in 2020."}
     ]},
    {id:"trinity", year:"2021–2022", title:"Project Trinity and the Software Wall",
     text:"You champion 'Project Trinity,' a next-generation flagship EV at a new Wolfsburg factory meant to showcase automated production and a unified next-gen software stack built by Cariad, originally targeted for 2026. But Cariad's software — also blamed for delaying EVs at Audi, Porsche and Bentley — keeps missing its maturity targets.",
     choices:[
      {label:"Decouple Trinity from Cariad's unfinished stack — ship with proven existing software", fx:{trust:+5,scale:-3}, set:["decoupled_trinity"],
       result:"Less visionary, more achievable. The 'unified software stack' promise quietly becomes next decade's problem instead of this one's."},
      {label:"Cancel or scale back the dedicated factory until software is actually ready", fx:{labor:-5,trust:+3}, set:["scaled_trinity"],
       result:"A hard, honest call that nobody in Wolfsburg wanted to be first to make. The works council asks, reasonably, what the factory workers were promised for."},
      {label:"Push the launch date outward and ship an interim MEB+ platform as a stopgap", fx:{trust:-8,scale:+3}, set:["pushed_trinity"],
       result:"Trinity's launch slips from 2026 toward 2028, Cariad's E3 2.0 platform is reported delayed toward 2029, and the dedicated Wolfsburg factory itself slides toward 2030 — with some reports suggesting it could be scrapped for existing plants instead.",
       hist:"Real: Trinity's launch slipped from 2026 to 2028 (VW brand CEO Thomas Schäfer confirmed it); Cariad's E3 2.0 software platform was reported delayed to 2029; the dedicated Wolfsburg factory plan was also reported delayed, with some suggesting it could be scrapped."}
     ]},
    {id:"ouster", year:"JUL 2022", title:"The Ouster",
     text:"Years of friction with the works council and supervisory board — over the pace of job cuts, the software delays at Cariad and Trinity, and your blunt public style — culminate in the board deciding to remove you roughly a year before your contract expires, despite your push for an early extension.",
     alt:[{if:"shipped_buggy", text:"The ID.3's bug count never quite left the conversation. Every subsequent software delay gets read against it, and the board's patience was already spent before this meeting started."}],
     choices:[
      {label:"Extend the contract — let the architect see the EV strategy through", fx:{scale:+5,labor:-8}, set:["extended_diess"],
       result:"The board considered it and decided against it. History does not record this as the path actually taken."},
      {label:"Remove him, split Group CEO and VW-brand CEO duties among internal candidates", fx:{labor:+5,trust:+3}, set:["split_duties"],
       result:"A more cautious successor structure than the one actually chosen. Distributed authority, distributed accountability — for better and worse."},
      {label:"Replace him with Porsche CEO Oliver Blume, who keeps both titles", fx:{labor:+8,trust:+5}, set:["blume_named"],
       result:"Diess's departure is announced July 22, 2022, effective September 1. Coverage attributes the ouster to 'frequent clashes with the German manufacturer's powerful labor unions and other key stakeholders' over the pace of cost cuts and overhaul. Oliver Blume becomes Group CEO while remaining Porsche AG CEO; CFO Arno Antlitz is elevated to COO.",
       hist:"Real: Diess's departure was announced July 22, 2022, effective Sept 1, 2022. Oliver Blume became Group CEO while remaining Porsche CEO, with Arno Antlitz elevated to COO. Coverage attributed the move to repeated clashes with labor and supervisory-board stakeholders over cost cuts and strategic overhaul."}
     ]}
   ]
  },
  d:{
   name:"Blume, China, and the Cost Crisis", years:"2022–2026", start:{scale:40, trust:55, labor:35}, stock0:22,
   intro:"September 1, 2022. You're Oliver Blume, and you've just taken the biggest job in German industry without giving up the one you already had — Porsche CEO. The company you're now also running is losing ground in its most important market to a Chinese rival nobody in Wolfsburg took seriously five years ago, its software unit still isn't delivering, and the cost base built for the 2010s is no longer competitive in the 2020s. Something in Germany is about to break that hasn't broken in 87 years.",
   scenarios:[
    {id:"twojobs", year:"SEP 2022", title:"Running Two Companies at Once",
     text:"Unlike any prior VW Group CEO, you take the top job while remaining concurrently CEO of Porsche AG — itself freshly prepared for IPO. Critics question whether one person can run both a newly public premium sports-car maker and an entire mass-market Group facing a software crisis and softening Chinese demand.",
     choices:[
      {label:"Resign the Porsche CEO role to focus solely on VW Group", fx:{trust:+5,scale:-3}, set:["resigned_porsche"],
       result:"Cleaner focus, and a Porsche board now hunting for its own CEO at the worst possible moment for a debut IPO story."},
      {label:"Appoint a strong, empowered deputy to run VW Group day-to-day under you", fx:{labor:+5,scale:+3}, set:["empowered_deputy"],
       result:"Workable, if the deputy and the board agree on who's actually steering. They mostly do. Mostly."},
      {label:"Keep both titles, elevate CFO Arno Antlitz to Group COO to share the load", fx:{scale:+5,labor:+3}, set:["dual_role"],
       result:"You retain both roles through the years ahead, drawing periodic criticism about divided attention — especially as the China and software problems deepen on your watch.",
       hist:"Real: Blume retained both the VW Group CEO and Porsche AG CEO roles, with CFO Arno Antlitz elevated to Group COO; coverage at the time framed it as VW's 'new CEO faces twin challenges of Porsche, software problems.'"}
     ]},
    {id:"losingchina", year:"2023–2025", title:"Losing China",
     text:"China — VW's largest market for decades — shifts decisively toward homegrown, software-savvy EV brands just as VW's own EV and software rollout lags. Your combined China JV market share is sliding from roughly 19% in 2019 toward under 15%, and German brands collectively hold only around 5% of China's NEV segment.",
     choices:[
      {label:"Double down on exporting VW's existing global EV platforms unchanged", fx:{scale:-10}, set:["exported_unchanged"],
       result:"Chinese buyers, who have dozens of faster, cheaper, better-connected domestic EVs to choose from, are unimpressed by an import that wasn't built for them."},
      {label:"Exit or shrink the China JV business to focus capital elsewhere", fx:{trust:+3,scale:-15}, set:["shrunk_china"],
       result:"You cede, deliberately, the market that built VW's profit engine for two decades. The capital redeployment will need to be very good to justify this."},
      {label:"Form new local partnerships — notably with XPeng — to co-develop China-specific EVs", fx:{scale:+8,trust:+3}, set:["xpeng_partnership"],
       result:"VW is overtaken by BYD in China sales in 2024, then slips to third behind Geely by 2025. You partner with XPeng for platform and software technology to accelerate China-specific development, and say publicly that German carmakers could learn from China's 'disciplined industrial planning.'",
       hist:"Real: VW was overtaken by BYD in China sales in 2024 and slipped to third behind Geely by 2025; VW partnered with XPeng for EV platform/software technology, and Blume said German automakers could learn from China's industrial planning (substance corroborated by multiple outlets; exact verbatim wording unconfirmed)."}
     ]},
    {id:"profitwarning", year:"SEP 2024", title:"The First Profit Warning",
     text:"VW brand's second-quarter earnings drop 68% year-on-year, with operating margin cratering to 0.9% from 4% in Q1. You must decide how aggressively to signal the severity of the crisis to investors and the public — and how directly to put German factory jobs and plants on the table.",
     alt:[{if:"shrunk_china", text:"Having already ceded ground in China rather than fight for it, this margin collapse lands as the bill for that retreat coming due faster than the capital redeployment could offset it."}],
     choices:[
      {label:"Manage the message gradually with incremental guidance cuts", fx:{trust:+5,scale:-3}, set:["gradual_message"],
       result:"Calmer headlines this quarter. The market generally prefers a CEO who names the size of the iceberg before the ship finds out the hard way."},
      {label:"Immediately propose the most aggressive possible restructuring, including closures", fx:{labor:-15,trust:+3}, set:["aggressive_restructure"],
       result:"Shock therapy, applied before anyone has had a chance to negotiate. The works council does not appreciate being informed rather than consulted."},
      {label:"Issue a stark public warning while opening informal talks about factory closures", fx:{trust:+8,labor:-8}, set:["stark_warning"],
       result:"VW issues its first profit warning in September 2024, then a second on September 30, signaling it would consider closing domestic factories for the first time in company history and warning of a need to cut roughly €10 billion in costs at the VW brand by 2026.",
       hist:"Real: VW brand's Q2 2024 operating margin fell to 0.9% from 4% in Q1; VW issued profit warnings in September and again September 30, 2024, signaling possible domestic factory closures for the first time in its history and a roughly €10B cost-cutting need by 2026."}
     ]},
    {id:"unthinkable", year:"OCT 28 2024", title:"The Unthinkable Announcement",
     text:"Management formally proposes closing at least three German factories, cutting tens of thousands of jobs, and a 10% pay cut for remaining staff — the first plant closures in VW's domestic history, directly challenging the job-security agreements works council leaders extracted from your predecessors in 2016 and 2019.",
     alt:[{if:"aggressive_restructure", text:"Having already moved fast and informed rather than consulted the works council in September, this announcement lands as confirmation of a pattern, not a surprise."}],
     choices:[
      {label:"Rely solely on attrition and hiring freezes, avoid closures entirely", fx:{labor:+10,scale:-8}, set:["attrition_floor"],
       result:"The works council's preferred floor. It also doesn't get within reach of the €10 billion savings target on any realistic timeline."},
      {label:"Close only non-German European capacity instead", fx:{labor:+5,trust:-3}, set:["non_german_closures"],
       result:"It spares German headlines and German votes. It does not spare the balance sheet, and it does not go unnoticed by German workers watching who absorbs the pain."},
      {label:"Put closures of multiple German plants explicitly on the table as an opening position", fx:{labor:-15,trust:-5}, set:["plants_on_table"],
       result:"Works council chief Daniela Cavallo calls it 'the plan of Germany's largest industrial group to start the sell-off in its home country,' declaring 'All German VW plants are affected by this. None of them are safe!' and vows the works council will 'fight bitterly.'",
       hist:"Real: VW announced it was considering closing 'at least' three German plants on Oct 28, 2024. Works council chief Daniela Cavallo responded: 'This is the plan of Germany's largest industrial group to start the sell-off in its home country. All German VW plants are affected by this. None of them are safe!'"}
     ]},
    {id:"paycut_offer", year:"NOV 2024", title:"Workers Offer a Pay Cut to Save the Plants",
     text:"With IG Metall warning a strike could start December 1 and 'tens of thousands' of workers ready to act, the works council shifts from pure opposition to a counter-proposal: workers accept real wage reductions themselves in exchange for ironclad guarantees that no German factory closes and no compulsory layoffs occur.",
     choices:[
      {label:"Reject the counter-offer and hold firm on closures", fx:{labor:-15,trust:-5}, set:["rejected_counter"],
       result:"Holding the line invites the strike IG Metall has been promising. Production calendars start quietly building in contingency days."},
      {label:"Accept the counter-offer at face value immediately", fx:{labor:+10,scale:-5}, set:["accepted_counter"],
       result:"Fast relief, untested numbers. Finance wants to know if €1.5 billion in labor savings actually closes the gap before you say yes in public."},
      {label:"Continue negotiating the specific savings number and time horizon", fx:{labor:+5}, set:["kept_negotiating"],
       result:"The works council proposes cutting labor expenses by €1.5 billion in exchange for guarantees that every German factory stays open and jobs are secured — a major concession that reframes the fight from closures toward a cost compromise.",
       hist:"Real: the works council proposed cutting labor expenses by €1.5 billion in exchange for guarantees that all German factories stay open and jobs are secured, while IG Metall warned 'tens of thousands' of workers were ready to act if talks failed."}
     ]},
    {id:"deal70hr", year:"DEC 20 2024", title:"The 70-Hour Deal",
     text:"With a strike deadline bearing down, management and IG Metall enter a marathon final negotiating session to settle the future of VW's German manufacturing footprint, headcount and wage structure for the rest of the decade.",
     alt:[{if:"plants_on_table", text:"You opened this negotiation by putting closures explicitly on the table. Whatever closes here in the final hours will be read, fairly, as the price of that opening move."}],
     choices:[
      {label:"Let talks fail and proceed toward closures and a strike", fx:{labor:-20,scale:-10}, set:["talks_failed"],
       result:"Production lines go dark by deadline, and the 'first closures in VW history' headline writes itself anyway — just with maximum disruption attached."},
      {label:"Capitulate entirely to the works council's 'keep every plant open, no cuts' position", fx:{labor:+15,trust:-5}, set:["full_capitulation"],
       result:"Labor peace, purchased at a cost discipline the balance sheet can't actually absorb. The €10 billion target quietly becomes someone else's problem."},
      {label:"Reach the negotiated middle path", fx:{labor:+15,trust:+8}, set:["deal_reached"],
       result:"After more than 70 hours of talks, VW agrees to keep all 10 German factories open and guarantee jobs through 2030, while cutting more than 35,000 jobs across Germany 'in a socially responsible manner' — attrition, early retirement, voluntary buyouts — saving roughly €15 billion. A previously agreed 5% wage increase is suspended for 2025–2026, and annual apprenticeships are cut from 1,400 to 600 starting 2026.",
       hist:"Real: after 70+ hours of talks, VW agreed (Dec 20, 2024) to keep all 10 German factories open with jobs guaranteed through 2030, cutting 35,000+ jobs via attrition/early retirement/voluntary buyouts by 2030 (saving ~€15B), suspending a previously agreed 5% wage increase for 2025-2026, and cutting annual apprenticeships from 1,400 to 600 starting 2026."}
     ]},
    {id:"doublingdown", year:"2026", title:"Doubling Down on Cuts",
     text:"Despite the December 2024 deal, the VW brand reportedly continues to struggle to hit its €10 billion cost-cutting target, running billions of euros short according to Handelsblatt-sourced reporting — forcing you to consider deepening cuts even further, with some reports describing the job-cut target being raised toward 50,000 amid a deepening cost crisis.",
     alt:[{if:"full_capitulation", text:"The full-capitulation deal bought labor peace in 2024 at the cost of the savings target you needed. That bill has now arrived, and it's larger than the one you deferred."}],
     choices:[
      {label:"Hold the line at the December 2024 deal's terms, absorb the shortfall elsewhere", fx:{labor:+5,scale:-5}, set:["held_line"],
       result:"You protect labor peace at the cost of finding €10 billion somewhere else in the Group — Porsche margins, brand-level cuts, capital discipline — none of it painless."},
      {label:"Reopen negotiations with labor for an even larger cut", fx:{labor:-15,trust:+3}, set:["reopened_nego"],
       result:"Reopening a deal less than two years old tests exactly how durable 2024's '70-hour' trust really was. The works council has a long memory and a longer contract."},
      {label:"Extend timelines and targets rather than deepen the cuts", fx:{trust:-5,scale:+3}, set:["extended_targets"],
       result:"Coverage in early 2026 describes VW raising its job-cut target toward 50,000 as the cost crisis deepens, with the passenger-car brand still struggling to hit its original cost-cutting goal, per Handelsblatt-sourced reporting.",
       hist:"Real: 2026 reporting describes VW raising its job-cut target toward 50,000 as the cost crisis deepens, with the VW passenger-car brand struggling to hit its original cost-cutting goal per Handelsblatt-sourced reporting (figures described as provisional/still moving at time of reporting)."}
     ]}
   ]
  }
 }
};
EVENTS.vw = [
 {title:"Works Council Warning Shot", text:"IG Metall calls a brief warning strike at Wolfsburg over the pace of the transformation. Banners line the main gate; television vans follow.", fx:{labor:-4}, up:"A weekend of talks buys peace, priced in concessions you'll account for later."},
 {title:"Recall Notice", text:"A software glitch in an MEB-platform model triggers a precautionary recall across two markets.", fx:{trust:-3}, up:"Handled fast and disclosed early. The story dies in a news cycle instead of a quarter."},
 {title:"Supplier Squeeze", text:"A battery-cell supplier renegotiates terms mid-contract, citing raw material costs. Your purchasing chief is not amused.", fx:{scale:-3}, up:"The contract gets reworked. The lesson about single-sourcing battery cells does not."},
 {title:"Design Award", text:"An ID-series model wins a major European design award, the first bright headline out of Wolfsburg in weeks.", fx:{trust:+4}, up:"Design can't fix software, but it buys the software team a friendlier press cycle."},
 {title:"Currency Swing", text:"A stronger euro shaves hundreds of millions off repatriated profits from overseas markets this quarter.", fx:{scale:-3}, up:"The hedging desk earns its bonus. Most of the damage is absorbed, not erased."},
 {title:"Apprenticeship Headlines", text:"Local German press runs a feature on the shrinking apprenticeship intake, with quotes from worried trade-school instructors.", fx:{labor:-3}, up:"Wolfsburg promises a 'review.' The instructors keep teaching smaller classes."}
];
TICKER.vw = [
 "BYD opens another European showroom",
 "Analyst: 'Wolfsburg's software roadmap needs a roadmap'",
 "Lower Saxony's blocking minority makes itself known again",
 "Porsche margins remain annoyingly excellent, again",
 "Cariad org chart redrawn for the third time this year",
 "Tesla undercuts the ID.4 on price, again",
 "Works council statement runs longer than the earnings call",
 "Geely quietly overtakes another Group brand in China"
];
