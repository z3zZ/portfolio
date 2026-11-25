/* Shared world chrome: tells first-time visitors this is a portfolio, which world they are in, and how to get home. */
(function(){
'use strict';
var WORLDS=['arcanum','grimoire','orrery','incantation','academy','between','skyline','selected-works','neon-aurora'];
var NAMES={arcanum:'Arcanum',grimoire:'Grimoire',orrery:'Orrery',incantation:'Incantation',academy:'Academy',between:'The World Between Worlds',skyline:'Skyline','selected-works':'Selected Works','neon-aurora':'Neon Aurora'};
var HOW={arcanum:'Scroll down to travel through it.',grimoire:'Scroll to turn the pages.',orrery:'Scroll to set the planets moving.',incantation:'Type a spell into the console, like cast neuronav, or type help.',academy:'Scroll to unlock the skill tree.',between:'Scroll to walk through the gate.',skyline:'Scroll to ride the lift up the tower.','selected-works':'Scroll through the gallery.','neon-aurora':'Scroll through the city. Click the sky for fireworks.'};
var OWN_ESC={incantation:1,'selected-works':1,'neon-aurora':1};

var file=(location.pathname.split('/').pop()||'').replace(/\.html$/,'');
var i=WORLDS.indexOf(file);if(i<0)return;
var num=('0'+(i+1)).slice(-2),name=NAMES[file];

function get(k){try{return sessionStorage.getItem(k);}catch(e){return null;}}
function set(k){try{sessionStorage.setItem(k,'1');}catch(e){}}

var hub=document.querySelector('.jr-hub');
if(hub)hub.setAttribute('title','Back to the home page and all nine worlds');

/* First world this session gets the full explainer; later worlds just get a small "you are here" chip. */
var first=!get('jr-seen');
var note=document.createElement('div');
note.className='jr-note'+(first?'':' mini');
note.setAttribute('role','status');
note.innerHTML=first
  ?'<span class="jr-k">World '+num+' of 09 · '+name+'</span>'+
   '<p>This is <b>Joshan Randhawa&rsquo;s portfolio</b>, told as an interactive world. The projects, experience and contact details are all in here.</p>'+
   '<ul><li>'+HOW[file]+'</li><li>Tap <b>Home</b> (bottom left) to see all nine worlds.</li></ul>'+
   '<div class="jr-row"><a href="index.html#plain">Prefer a plain CV page?</a><button type="button">Got it</button></div>'
  :'<span class="jr-k">World '+num+' of 09 · '+name+'</span>';
document.body.appendChild(note);
set('jr-seen');

var t;
function hide(){note.classList.remove('on');clearTimeout(t);}
setTimeout(function(){
  note.classList.add('on');
  t=setTimeout(hide,first?14000:3200);
},first?900:500);
var btn=note.querySelector('button');if(btn)btn.addEventListener('click',hide);

/* Esc goes home, except in worlds that use Esc themselves or while typing. */
if(!OWN_ESC[file]){
  window.addEventListener('keydown',function(e){
    if(e.key!=='Escape'||e.defaultPrevented)return;
    var el=document.activeElement,tag=el&&el.tagName;
    if(tag==='INPUT'||tag==='TEXTAREA'||(el&&el.isContentEditable))return;
    if(note.classList.contains('on')){hide();return;}
    location.href='index.html';
  });
}
})();
