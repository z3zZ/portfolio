/* Arcanum shared: project data, illustrations, project sheet, helpers */
(function(){
'use strict';
var A={};
A.clamp=function(x,a,b){return Math.min(b,Math.max(a,x));};
A.ss=function(a,b,x){var t=A.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
A.lerp=function(a,b,t){return a+(b-a)*t;};
A.mulberry=function(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};};
A.esc=function(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});};
A.rmq=window.matchMedia('(prefers-reduced-motion: reduce)');

A.ORDER=['transcriber','ticketscope','primelevels','neuronav','orgchecker','stellareye','cognisign','klokd','forge','inkd','rewnd','errnd','ja'];
A.P={
 transcriber:{name:'Video Transcriber',el:'#1f8fd6',soft:'rgba(31,143,214,.12)',viz:'transcript',school:'Inscription',type:'Tool · Independent',
  fx:'Turns recordings into searchable, timestamped text without them ever leaving the machine.',stat:'Fully local',
  incant:'transcribe(video, { local: true })',
  context:'Independent · Up for adoption at Thirtyone:eight',lede:'Private transcription. Your recordings never leave your machine.',
  stats:['Runs locally','~99 languages','GPU with CPU fallback'],
  what:'Cloud transcription means uploading every recording to someone else’s server, which is a non-starter for safeguarding work. Video Transcriber runs Whisper entirely on your own machine: drop in a video, watch the transcript stream in live, click any timestamp to jump there, and export to TXT, SRT, VTT or JSON.',
  part:'I built it on my own time for my own use: turning long videos into transcripts so I can learn faster, and so LLMs can take them in as memory. Open source, built end to end: the engine, a background job queue with live streaming, the web app and a pytest suite. It uses the GPU when there is one, retries on CPU if the GPU fails mid-job, and skips silence automatically.',
  stack:'Python · FastAPI · faster-whisper · Silero VAD · CUDA',status:'Being considered for adoption at Thirtyone:eight',
  links:[['GitHub','https://github.com/z3zZ/Video-Transcriber']]},
 ticketscope:{name:'TicketScope',el:'#2d5bff',soft:'rgba(45,91,255,.12)',viz:'signal',school:'Divination',type:'Tool · Amazon Prime Video',
  fx:'Gathers the signals around an incident into one view for the engineer on call.',stat:'Adopted company-wide',
  incant:'cast("ticketscope", { on: "incident" })',
  context:'Amazon Prime Video · LiRA team',lede:'An operational intelligence tool for on-call engineers.',
  stats:['Company-wide adoption','MCP server','Learned React + TS for it'],
  what:'When something breaks, on-call engineers need to understand what happened, fast. TicketScope brings the operational information around an incident into one place so they can investigate it.',
  part:'Built during my nine-week T Level placement. I learned React and TypeScript from scratch to make it, with a TypeScript MCP server behind the interface.',
  stack:'React · TypeScript · MCP · Recharts',status:'Confirmed for company-wide adoption at Amazon',
  note:'Under NDA. The interface and data stay confidential, so the illustration is abstract.'},
 primelevels:{name:'Prime Levels',el:'#d98d0b',soft:'rgba(217,141,11,.14)',viz:'pages',school:'Illusion',type:'Website · Amazon',
  fx:'Opens Amazon’s T Level programme up to students, parents and educators.',stat:'~95% of the frontend',
  incant:'render(primeLevels, { pages: 10, a11y: "WCAG 2.1" })',
  context:'Amazon · T Level cohort project',lede:'An accessible ten-page site for Amazon’s T Level placement programme.',
  stats:['10 pages','~95% frontend','80+ stakeholders','WCAG 2.1'],
  what:'A promotional website for Amazon’s T Level placement programme, aimed at prospective students, parents and educators, presented to more than eighty stakeholders.',
  part:'Lead frontend developer in a five-person cohort. I wrote roughly ninety-five percent of the frontend across all ten pages, built to WCAG 2.1.',
  stack:'HTML · CSS · JavaScript · Python · Flask · AWS S3',status:'Delivered, Oct to Nov 2025',
  note:'The site isn’t public, so this one stays text-only.'},
 neuronav:{name:'NeuroNav',el:'#0e9a90',soft:'rgba(14,154,144,.13)',viz:'route',school:'Restoration',type:'App · Independent',
  fx:'A revision platform shaped around how neurodivergent students actually learn.',stat:'30+ real users',
  incant:'guide(student, { mind: "neurodivergent" })',
  context:'Independent · EPQ artefact',lede:'Revision that works with the way your brain works.',
  stats:['30+ users','Live','EPQ artefact'],
  what:'An accessibility-focused revision app for neurodivergent learners. It started as my EPQ artefact and didn’t stay theoretical for long.',
  part:'Designed and built it alongside the Amazon placement, not after it. There was a Christmas deadline that didn’t care I was on placement full time, so I met both.',
  stack:'React · TypeScript · Vite',status:'Live, used by 30+ students',
  links:[['Live','https://neuro-nav.vercel.app'],['GitHub','https://github.com/z3zZ/NeuroNav']]},
 orgchecker:{name:'Org Checker',el:'#df3f66',soft:'rgba(223,63,102,.12)',viz:'ward',school:'Abjuration',type:'Ward · Thirtyone:eight',
  fx:'A rules engine that checks a safeguarding charity’s organisation records before they count.',stat:'Under NDA',
  incant:'ward(record).validate()',
  context:'Thirtyone:eight · Day job · Under NDA',lede:'Validation rules that live as data, not code.',
  stats:['48 rules','~300 conditions','7 operators','Regression-tested'],
  what:'A validation engine for organisation records held across two systems. Its 48 rules and roughly 300 conditions live as data in Dataverse, so changing a rule is a record edit, not a redeploy. The engine runs every active rule against every record, compares names across both systems, and reports each failure by account and reason.',
  part:'I configured 39 bespoke rules from a spreadsheet spec (catching spelling and hidden-whitespace errors on the way), wrote and debugged the validation engine, designed the test data and a regression set covering every rule, and brought the harness into the model-driven app as a custom page. I work alongside a senior colleague who designed the system.',
  stack:'Power Apps · Power Fx · Dataverse · Dynamics 365',status:'In UAT',note:'Under NDA. Internal to Thirtyone:eight, so shown in abstract.'},
 stellareye:{name:'StellarEye',el:'#11a3c7',soft:'rgba(17,163,199,.13)',viz:'globe',school:'Astromancy',type:'Web app · Independent',
  fx:'A live 3D Earth that shows which sky events you can see tonight.',stat:'Live',
  incant:'sky.tonight({ from: earth })',
  context:'Independent · Spring 2026',lede:'What’s in the sky tonight, on a live 3D Earth.',
  stats:['NASA APIs','3D Earth','Deployed'],
  what:'A NASA API app that renders a 3D Earth and shows which sky events are visible.',
  part:'Built in spring 2026, early in bringing AI tools into my workflow. It’s where that way of building started: explore an interest fast, ship it, keep what works.',
  stack:'TypeScript · NASA APIs · Vercel',status:'Live',
  links:[['Live','https://stellareye.vercel.app'],['GitHub','https://github.com/z3zZ/StellarEye']]},
 cognisign:{name:'CogniSign',el:'#6a52ee',soft:'rgba(106,82,238,.12)',viz:'hand',school:'Transmutation',type:'Proof of concept · Independent',
  fx:'Turns hand gestures into actions and speech for people who can’t use their voice.',stat:'Rebuilding',
  incant:'gesture.on("sign", speak)',
  context:'Independent · Evolving since Feb 2026',lede:'Gestures in, actions and speech out.',
  stats:['Computer vision','Hand tracking','Accessibility'],
  what:'A computer-vision proof of concept that reads hand landmarks and translates gestures into actions and speech, for people who are mute or have throat damage.',
  part:'It began in February 2026 as an intruder-detection app with a defence angle. As I kept building it locally, the question changed from identifying people to helping them. I’m now rebuilding it as a full proof of concept.',
  stack:'Python · MediaPipe · OpenCV',status:'Rebuilding as a proof of concept',
  links:[['Where it started','https://github.com/z3zZ/Intruder-Detection-app']]},
 klokd:{name:'klokd',el:'#c8f135',soft:'rgba(200,241,53,.16)',viz:'clock',dk:1,school:'Chronomancy',type:'Desktop app · Independent',
  fx:'Your day, kloked. Tracks where your time goes and keeps it on your machine.',stat:'MVP built',
  incant:'klokd.track(today, { local: true })',
  context:'Independent product · MVP built',lede:'Your day, kloked.',
  stats:['Privacy-first','Local data','Pattern insights'],
  what:'A privacy-first desktop time tracker. Data stays local, and a pattern layer surfaces insights such as your peak productive hours and what you were doing during them.',
  part:'Product design and engineering. The MVP is built and it keeps evolving.',stack:'Electron · Node · better-sqlite3',status:'MVP built',
  links:[['GitHub','https://github.com/z3zZ/Klokd']]},
 forge:{name:'Roblox Forge',el:'#c9921a',soft:'rgba(201,146,26,.14)',viz:'agents',school:'Summoning',type:'Agentic pipeline · Independent',
  fx:'An AI project manager writes briefs overnight, Claude builds the prototypes, and I approve.',stat:'Early · running',
  incant:'forge.overnight().await(approval)',
  context:'Independent · Early stage',lede:'AI that builds game prototypes while I sleep, and asks before anything ships.',
  stats:['Multi-agent','Human approval','Research bank'],
  what:'An agentic pipeline for Roblox game development. An AI project manager writes game briefs overnight from a research bank, Claude builds playable prototypes, and I playtest and approve each one before it goes further.',
  part:'Designed the pipeline and its approval loop, and set up the research bank and the asset pipeline.',stack:'Claude Code · Grok · Luau',status:'Early stage, running',
  note:'Private repository.'},
 inkd:{name:'inkd',el:'#ff7a59',soft:'rgba(255,122,89,.14)',viz:'ink',school:'Glyphcraft',type:'Desktop app · Independent',
  fx:'Write maths by hand on a pen tablet and have it recognised and worked through.',stat:'In development',
  incant:'inkd.read(stroke).solve()',
  context:'Independent · In development',lede:'Handwritten maths, understood.',
  stats:['Pen input','Free','No paid engines'],
  what:'A handwriting maths app for pen tablets, modelled on MyScript Math but more customisable.',
  part:'Designing and building it with no paid APIs or licensed engines, so it stays free and fully mine.',stack:'TypeScript',status:'In development',
  links:[['GitHub','https://github.com/z3zZ/inkd']]},
 rewnd:{name:'rewnd',el:'#8fa3b8',soft:'rgba(143,163,184,.16)',viz:'frames',school:'Recall',type:'Tool · Independent',
  fx:'Captures webcam timelapses locally, with nothing sent to the cloud.',stat:'In development',
  incant:'rewnd.capture({ every: "10s" })',
  context:'Independent · In development',lede:'Timelapse, kept local.',
  stats:['Linux','Local capture'],
  what:'A webcam timelapse capture tool that runs locally on Linux.',
  part:'Building it as a small, sharp utility.',stack:'Python',status:'In development',
  links:[['GitHub','https://github.com/z3zZ/rewnd']]},
 errnd:{name:'errnd',el:'#b9f04a',soft:'rgba(185,240,74,.16)',viz:'wave',dk:1,school:'Evocation',type:'Assistant · In design',
  fx:'Your errand, ran. Say what needs doing and let it get handled.',stat:'In design',
  incant:'errnd.say("handle it")',
  context:'Independent · In design',lede:'Your errand, ran.',stats:['Voice-first','Single agent'],
  what:'A voice-driven personal assistant for the errands that fall through the cracks.',
  part:'Concept and product design. Parked in the design phase for now.',status:'In design'},
 ja:{name:'JA Studios',el:'#b5532f',soft:'rgba(181,83,47,.2)',viz:'mono',ja:1,school:'Enchantment',type:'Studio · Co-founder',
  fx:'A small web studio building proper websites for organisations that need one.',stat:'Revamp in progress',
  incant:'studio.build(site, { properly: true })',
  context:'Co-founded with a friend',lede:'Websites, built properly.',stats:['Co-founder','Web studio'],
  what:'A website studio I co-founded with a friend, building sites for local organisations, with its own navy and rust identity.',
  part:'I handle the build and the ongoing technical upkeep.',status:'Revamp in progress'}
};

function arcPath(cx,cy,r,a0,a1){var x0=cx+r*Math.cos(a0),y0=cy+r*Math.sin(a0),x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);return'M'+x0.toFixed(1)+' '+y0.toFixed(1)+' A'+r+' '+r+' 0 '+((a1-a0)>Math.PI?1:0)+' 1 '+x1.toFixed(1)+' '+y1.toFixed(1);}
var M=A.mulberry;
/* every illustration uses var(--viz-a) (accent), var(--viz-b) (light ink) and var(--viz-bg) (ground) */
A.VIZ={
 signal:function(){var r=M(11),s='<svg viewBox="0 0 400 400">';for(var i=0;i<70;i++){var a=r()*Math.PI*2,d=62+Math.pow(r(),.6)*128,x=(200+Math.cos(a)*d).toFixed(1),y=(200+Math.sin(a)*d).toFixed(1);
  s+='<line x1="'+x+'" y1="'+y+'" x2="200" y2="200" stroke="var(--viz-a)" stroke-opacity="'+(.08+r()*.18).toFixed(2)+'" stroke-width=".8"/><circle cx="'+x+'" cy="'+y+'" r="'+(1.2+r()*2.4).toFixed(1)+'" fill="var(--viz-b)" fill-opacity="'+(.3+r()*.5).toFixed(2)+'"/>';}
  return s+'<circle cx="200" cy="200" r="50" fill="none" stroke="var(--viz-a)" stroke-opacity=".4" stroke-dasharray="2 6"/><circle cx="200" cy="200" r="26" fill="var(--viz-bg)" stroke="var(--viz-a)" stroke-width="1.5"/><circle cx="200" cy="200" r="8" fill="var(--viz-a)"/></svg>';},
 pages:function(){var s='<svg viewBox="0 0 400 400">';for(var i=0;i<10;i++){var ang=-27+i*6,hl=i===9;s+='<g transform="rotate('+ang+' 200 350)"><rect x="140" y="80" width="120" height="164" rx="3" fill="var(--viz-bg)" stroke="'+(hl?'var(--viz-a)':'var(--viz-b)')+'" stroke-opacity="'+(hl?1:.35)+'" stroke-width="1.2"/>';
  if(hl)s+='<line x1="156" y1="104" x2="226" y2="104" stroke="var(--viz-a)" stroke-width="3"/><line x1="156" y1="122" x2="240" y2="122" stroke="var(--viz-b)" stroke-opacity=".5"/><line x1="156" y1="134" x2="232" y2="134" stroke="var(--viz-b)" stroke-opacity=".5"/><rect x="156" y="156" width="88" height="60" fill="none" stroke="var(--viz-b)" stroke-opacity=".35"/>';s+='</g>';}return s+'</svg>';},
 route:function(){var d='M48 334 C 130 336, 96 238, 176 226 S 268 150, 248 112 S 300 62, 352 66';var s='<svg viewBox="0 0 400 400"><path d="'+d+'" fill="none" stroke="var(--viz-a)" stroke-opacity=".22" stroke-width="24" stroke-linecap="round"/><path d="'+d+'" fill="none" stroke="var(--viz-a)" stroke-width="2" stroke-dasharray="1 8" stroke-linecap="round"/>';
  [[48,334],[176,226],[248,112],[352,66]].forEach(function(p,i){s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i===3?10:6)+'" fill="'+(i===3?'var(--viz-a)':'var(--viz-bg)')+'" stroke="var(--viz-a)" stroke-width="2"/>';});return s+'</svg>';},
 ward:function(){var s='<svg viewBox="0 0 400 400">';for(var i=0;i<4;i++){var r=150-i*32;s+='<path d="M200 '+(200-r)+' L'+(200+r*.86)+' '+(200-r*.5)+' L'+(200+r*.86)+' '+(200+r*.5)+' L200 '+(200+r)+' L'+(200-r*.86)+' '+(200+r*.5)+' L'+(200-r*.86)+' '+(200-r*.5)+' Z" fill="none" stroke="var(--viz-a)" stroke-opacity="'+(.25+i*.2)+'" stroke-width="1.5"/>';}
  return s+'<path d="M168 202 L192 226 L236 176" fill="none" stroke="var(--viz-b)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>';},
 hand:function(){var P=[[200,320],[150,280],[118,232],[100,190],[90,150],[170,240],[160,170],[156,120],[154,80],[205,236],[205,160],[205,108],[205,64],[238,240],[250,172],[256,124],[260,86],[266,256],[292,204],[306,166],[316,132]];
  var E=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]];var s='<svg viewBox="0 0 400 400">';
  E.forEach(function(e){s+='<line x1="'+P[e[0]][0]+'" y1="'+P[e[0]][1]+'" x2="'+P[e[1]][0]+'" y2="'+P[e[1]][1]+'" stroke="var(--viz-a)" stroke-width="2"/>';});P.forEach(function(p){s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" fill="var(--viz-b)"/>';});return s+'</svg>';},
 clock:function(){var s='<svg viewBox="0 0 400 400"><circle cx="200" cy="200" r="140" fill="none" stroke="var(--viz-b)" stroke-opacity=".12" stroke-width="18"/>';
  for(var i=0;i<24;i++){var a=i/24*Math.PI*2-Math.PI/2,r0=i%6?166:160;s+='<line x1="'+(200+Math.cos(a)*r0).toFixed(1)+'" y1="'+(200+Math.sin(a)*r0).toFixed(1)+'" x2="'+(200+Math.cos(a)*172).toFixed(1)+'" y2="'+(200+Math.sin(a)*172).toFixed(1)+'" stroke="var(--viz-b)" stroke-opacity=".4"/>';}
  [[8.6,10.4,1],[10.8,12.3,.75],[13.3,15.9,1],[16.2,17.4,.55],[19.6,20.8,.35]].forEach(function(b){var a0=b[0]/24*Math.PI*2-Math.PI/2,a1=b[1]/24*Math.PI*2-Math.PI/2;s+='<path d="'+arcPath(200,200,140,a0,a1)+'" fill="none" stroke="var(--viz-a)" stroke-opacity="'+b[2]+'" stroke-width="18"/>';});
  return s+'<text x="200" y="206" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="17" fill="var(--viz-a)">kloked.</text></svg>';},
 wave:function(){var r=M(5),s='<svg viewBox="0 0 400 400">';for(var i=0;i<24;i++){var x=46+i*8.4,env=Math.sin(i/23*Math.PI),h=(10+r()*60)*env+4;s+='<rect x="'+x.toFixed(1)+'" y="'+(200-h).toFixed(1)+'" width="4" height="'+(h*2).toFixed(1)+'" rx="2" fill="var(--viz-a)" fill-opacity="'+(.25+i/23*.6).toFixed(2)+'"/>';}
  return s+'<path d="M262 202 L294 236 L356 160" fill="none" stroke="var(--viz-a)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>';},
 mono:function(){return'<svg viewBox="0 0 400 400"><rect x="96" y="96" width="208" height="208" fill="none" stroke="var(--viz-a)" stroke-width="2"/><text x="200" y="236" text-anchor="middle" font-family="Georgia, Times New Roman, serif" font-size="104" fill="var(--viz-b)" letter-spacing="4">JA</text><line x1="136" y1="262" x2="264" y2="262" stroke="var(--viz-a)" stroke-width="2"/></svg>';},
 agents:function(){var s='<svg viewBox="0 0 400 400"><circle cx="200" cy="200" r="130" fill="none" stroke="var(--viz-b)" stroke-opacity=".2" stroke-dasharray="3 6"/>';
  for(var i=0;i<6;i++){var a=i/6*Math.PI*2-Math.PI/2,x=200+Math.cos(a)*130,y=200+Math.sin(a)*130;s+='<line x1="'+x.toFixed(1)+'" y1="'+y.toFixed(1)+'" x2="200" y2="200" stroke="var(--viz-a)" stroke-opacity=".4"/><circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="14" fill="var(--viz-bg)" stroke="var(--viz-a)" stroke-width="1.5"/>';}
  return s+'<rect x="172" y="172" width="56" height="56" rx="6" fill="var(--viz-a)"/><path d="M186 201 L196 211 L214 189" fill="none" stroke="var(--viz-bg)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';},
 transcript:function(){var r=M(7),s='<svg viewBox="0 0 400 400">';for(var i=0;i<30;i++){var x=40+i*5.6,h=(6+r()*34)*(.35+.65*Math.sin(i/29*Math.PI));s+='<rect x="'+x.toFixed(1)+'" y="'+(110-h).toFixed(1)+'" width="3" height="'+(h*2).toFixed(1)+'" rx="1.5" fill="var(--viz-a)" fill-opacity="'+(.35+r()*.5).toFixed(2)+'"/>';}
  s+='<path d="M220 110 H260" stroke="var(--viz-b)" stroke-opacity=".5" stroke-width="2" stroke-dasharray="2 5"/><path d="M252 102 L262 110 L252 118" fill="none" stroke="var(--viz-b)" stroke-opacity=".6" stroke-width="2"/>';
  for(var j=0;j<6;j++){var y=190+j*30,w=110+r()*150;s+='<text x="48" y="'+(y+4)+'" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--viz-a)">0'+j+':'+(10+j*7)+'</text><line x1="104" y1="'+y+'" x2="'+(104+w).toFixed(1)+'" y2="'+y+'" stroke="var(--viz-b)" stroke-opacity="'+(j===2?.9:.35)+'" stroke-width="'+(j===2?4:3)+'" stroke-linecap="round"/>';}
  return s+'</svg>';},
 globe:function(){var r=M(13),s='<svg viewBox="0 0 400 400">';for(var i=0;i<60;i++)s+='<circle cx="'+(r()*400).toFixed(1)+'" cy="'+(r()*400).toFixed(1)+'" r="'+(.6+r()*1.4).toFixed(1)+'" fill="var(--viz-b)" fill-opacity="'+(.2+r()*.6).toFixed(2)+'"/>';
  s+='<circle cx="200" cy="230" r="120" fill="var(--viz-bg)" stroke="var(--viz-a)" stroke-width="2"/>';
  [-60,-30,0,30,60].forEach(function(l){var ry=Math.abs(120*Math.sin(l*Math.PI/180)),y=230-120*Math.sin(l*Math.PI/180),rx=120*Math.cos(l*Math.PI/180);s+='<ellipse cx="200" cy="'+y.toFixed(1)+'" rx="'+rx.toFixed(1)+'" ry="'+(rx*.18).toFixed(1)+'" fill="none" stroke="var(--viz-a)" stroke-opacity=".3"/>';});
  [30,60,90].forEach(function(m){s+='<ellipse cx="200" cy="230" rx="'+(120*Math.cos(m*Math.PI/180)).toFixed(1)+'" ry="120" fill="none" stroke="var(--viz-a)" stroke-opacity=".3"/>';});
  return s+'<path d="M96 78 Q 200 20 304 70" fill="none" stroke="var(--viz-b)" stroke-opacity=".5" stroke-dasharray="3 6"/><circle cx="304" cy="70" r="7" fill="var(--viz-a)"/></svg>';},
 ink:function(){return'<svg viewBox="0 0 400 400"><path d="M62 210 C 78 160, 112 160, 104 206 S 90 252, 120 236" fill="none" stroke="var(--viz-b)" stroke-width="5" stroke-linecap="round"/><path d="M150 214 H196 M173 192 V236" stroke="var(--viz-b)" stroke-width="5" stroke-linecap="round"/><path d="M222 186 C 250 176, 262 198, 236 214 C 266 214, 266 246, 226 240" fill="none" stroke="var(--viz-b)" stroke-width="5" stroke-linecap="round"/><path d="M288 206 H330 M288 224 H330" stroke="var(--viz-a)" stroke-width="5" stroke-linecap="round"/><line x1="62" y1="290" x2="338" y2="290" stroke="var(--viz-a)" stroke-opacity=".35" stroke-dasharray="2 7"/><text x="200" y="330" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="20" fill="var(--viz-a)">x² + 3 =</text><path d="M300 84 L346 38 L362 54 L316 100 L294 106 Z" fill="none" stroke="var(--viz-a)" stroke-width="2.5" stroke-linejoin="round"/></svg>';},
 frames:function(){var s='<svg viewBox="0 0 400 400">';for(var i=0;i<6;i++){var x=70+i*22,y=90+i*22,hl=i===5;s+='<rect x="'+x+'" y="'+y+'" width="180" height="120" rx="6" fill="var(--viz-bg)" stroke="'+(hl?'var(--viz-a)':'var(--viz-b)')+'" stroke-opacity="'+(hl?1:.18+i*.08)+'" stroke-width="'+(hl?2:1.2)+'"/>';}
  return s+'<circle cx="270" cy="270" r="22" fill="none" stroke="var(--viz-a)" stroke-width="2"/><path d="M262 258 L282 270 L262 282 Z" fill="var(--viz-a)"/></svg>';}
};
A.vizFor=function(id){var p=A.P[id];return A.VIZ[p.viz]();};
A.vizStyle=function(id,lightBg){var p=A.P[id];var bg=p.ja?'#151f34':p.dk?'#070806':(lightBg||'#0f1524');var b=p.ja?'#f2ebe4':p.dk?'#e9ebdd':'#eef1f6';return'--viz-a:'+p.el+';--viz-b:'+b+';--viz-bg:'+bg;};

/* project sheet (dialog). Returns open(id, openerEl). */
A.initSheet=function(order,hooks){
  order=order||A.ORDER;hooks=hooks||{};
  var $=function(id){return document.getElementById(id);};
  var sheet=$('sheet'),body=$('sh-body'),cur=0,opener=null;
  function fill(i){var id=order[i],p=A.P[id];cur=i;
    sheet.className='sheet'+(p.dk?' dk':'')+(p.ja?' ja':'');sheet.style.setProperty('--el',p.el);
    $('sh-context').textContent=p.context;$('sh-title').textContent=p.name;$('sh-lede').textContent=p.lede;
    $('sh-stats').innerHTML=p.stats.map(function(s){return'<li>'+A.esc(s)+'</li>';}).join('');
    var rows=[['What it is',p.what],['My part',p.part]];if(p.stack)rows.push(['Built with',p.stack]);rows.push(['Status',p.status]);
    $('sh-facts').innerHTML=rows.map(function(r){return'<div><dt>'+A.esc(r[0])+'</dt><dd>'+A.esc(r[1])+'</dd></div>';}).join('');
    if(p.links)$('sh-facts').innerHTML+='<div><dt>Links</dt><dd class="sh-links">'+p.links.map(function(l){return'<a href="'+A.esc(l[1])+'" target="_blank" rel="noopener">'+A.esc(l[0])+' ↗</a>';}).join(' · ')+'</dd></div>';
    var note=$('sh-note');if(p.note){note.textContent=p.note;note.hidden=false;}else note.hidden=true;
    $('sh-viz').innerHTML=A.VIZ[p.viz]();
    $('sh-count').textContent=(i+1)+' / '+order.length;
    body.classList.remove('swap');void body.offsetWidth;body.classList.add('swap');
    if(hooks.onShow)hooks.onShow(id);}
  $('sh-prev').addEventListener('click',function(){fill((cur+order.length-1)%order.length);});
  $('sh-next').addEventListener('click',function(){fill((cur+1)%order.length);});
  $('sh-close').addEventListener('click',function(){sheet.close?sheet.close():sheet.removeAttribute('open');});
  sheet.addEventListener('click',function(e){if(e.target===sheet)sheet.close();});
  sheet.addEventListener('close',function(){if(opener&&opener.focus)opener.focus({preventScroll:true});if(hooks.onClose)hooks.onClose();});
  return function open(id,el){var i=order.indexOf(id);if(i<0)return;opener=el||document.activeElement;fill(i);
    if(!sheet.open){if(sheet.showModal)sheet.showModal();else sheet.setAttribute('open','');}$('sh-close').focus();};
};

A.copy=function(btnId,textId){var b=document.getElementById(btnId),t=document.getElementById(textId);if(!b||!t)return;
  b.addEventListener('click',function(){
    function selectIt(){var r=document.createRange();r.selectNodeContents(t);var s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected';}
    function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1800);}
    try{navigator.clipboard.writeText(t.textContent.trim()).then(done,selectIt);}catch(e){selectIt();}});};

A.EMAIL='joshanrandhawa5@hotmail.com';
A.GITHUB='https://github.com/z3zZ';
try{var st=document.createElement('style');st.textContent='.sh-links a{color:var(--el,currentColor);text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:1px}.sh-links a:hover{opacity:.75}';document.head.appendChild(st);}catch(e){}
window.ARC=A;
})();
