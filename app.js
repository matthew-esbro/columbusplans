/* Columbus Plans: shared renderer. Each day page loads its data file
   (window.PAGE) then this script. The patios page loads window.PATIOS instead.
   All content lives in the data files; this file only draws. */

function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function el(html){var d=document.createElement("div"); d.innerHTML=html; return d.firstElementChild;}

var DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var DAYS_ORDER=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

/* Day switcher in the top bar (present on every page). */
(function(){
  var host=document.getElementById("dayswitch");
  if(!host) return;
  var here=(window.PAGE&&window.PAGE.day||"").toLowerCase();
  host.innerHTML=DAYS_ORDER.map(function(d){
    var label=d.charAt(0).toUpperCase()+d.slice(1,3);
    return '<a href="../'+d+'/"'+(d===here?' class="on"':'')+'>'+label+'</a>';
  }).join("");
})();

if(window.PAGE) (function(){
  var P=window.PAGE, day=P.day;

  /* ---------------- hero ---------------- */
  document.getElementById("heroTitle").innerHTML=esc(day)+", <em>handled.</em>";
  document.getElementById("heroLede").textContent="Everything in Columbus worth leaving the house for on a "+day+": the weekly rituals you can count on, the restaurants and bars that opened while you weren't looking, and the one-off nights on the calendar.";
  document.title=day+" plans in Columbus · Columbus Plans";

  /* ---------------- section headings ---------------- */
  function shead(id,eyebrow,title,sub){
    var n=document.querySelector("#"+id+" .shead > div");
    if(!n) return;
    n.innerHTML='<div class="eyebrow">'+esc(eyebrow)+'</div><h2>'+esc(title)+'</h2>'+(sub?'<p class="sub">'+esc(sub)+'</p>':'');
  }
  shead("pick","Can't decide","Somebody pick for us","A table and something to do after it, paired at random from the lists below.");
  shead("weekly","Same time, same place","Every "+day,"The standing options: the stuff that's there whether or not you planned ahead.");
  shead("monthly","Once a month, always a "+day,"Worth putting on the calendar");
  shead("new","Opened in the last eighteen months","New tables & new bars","Filter by neighborhood or by what kind of night it is. Green means the "+day+" hours are confirmed on the venue's own listing.");
  shead("comedy",P.comedyEyebrow||"Stand-up, sketch and improv","Comedy",P.comedyIntro||"");
  shead("calendar",P.calRange||"","Every "+day+" on the calendar","One-offs only: the weekly rituals above run underneath all of these.");

  /* ---------------- next four occurrences strip ---------------- */
  var MON={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
  var today=new Date(); today.setHours(0,0,0,0);
  function calDate(c){
    /* Entries may carry an explicit year (c.y); otherwise assume the current
       year and roll anything more than ~6 months stale forward a year. */
    var y=c.y||today.getFullYear();
    var dt=new Date(y,MON[c.m],c.n);
    if(!c.y && today-dt > 183*24*3600*1000) dt=new Date(y+1,MON[c.m],c.n);
    return dt;
  }
  var upcoming=(P.cal||[]).map(function(c){return {dt:calDate(c),c:c};})
    .filter(function(x){return x.dt>=today;}).slice(0,4);
  var rel=["This "+day,"Next "+day,"In two weeks","In three weeks"];
  var out="";
  upcoming.forEach(function(x,i){
    var isNow=x.dt.getTime()===today.getTime();
    var head=x.dt.toLocaleDateString("en-US",{month:"long",day:"numeric"});
    var top=x.c.items.slice(0,2).map(function(it){return it.t;}).join(" · ");
    out+='<div class="cell'+(isNow?" now":"")+'"><span class="d">'+esc(isNow?"Today":rel[i])+'</span>'+
         '<span class="h">'+esc(head)+'</span><span class="s">'+esc(top)+'</span></div>';
  });
  if(!out){out='<div class="cell"><span class="d">Next up</span><span class="h">Fresh picks landing</span><span class="s">This page refreshes five days before every '+esc(day)+'. The weekly list below keeps going.</span></div>';}
  document.getElementById("strip").innerHTML=out;

  /* ---------------- weekly + monthly + comedy rows ---------------- */
  var cats=[["all","Everything"],["music","Live music"],["trivia","Trivia"],["dance","Dancing & karaoke"],["food","Eat & drink cheap"],["culture","Culture & shows"]];
  var fw=document.getElementById("weeklyFilters"), rows=document.getElementById("weeklyRows"), active="all";
  cats.forEach(function(c){
    var b=el('<button class="chip" aria-pressed="'+(c[0]==="all")+'" data-cat="'+c[0]+'">'+esc(c[1])+'</button>');
    b.addEventListener("click",function(){
      active=c[0];
      Array.prototype.forEach.call(fw.children,function(x){x.setAttribute("aria-pressed", x.dataset.cat===active);});
      draw();
    });
    fw.appendChild(b);
  });
  function row(o){
    return '<div class="row"><div class="time">'+esc(o.t)+'</div>'+
      '<div class="body"><div class="where">'+esc(o.w)+'</div><h3>'+esc(o.n)+'</h3><p>'+esc(o.d)+'</p></div>'+
      '<div class="side"><span class="price">'+esc(o.p)+'</span>'+
      (o.conf==="warn"?'<span class="tag warn">verify</span>':'')+
      (o.url?'<a class="go" href="'+o.url+'" target="_blank" rel="noopener">Details →</a>':'')+'</div></div>';
  }
  function draw(){
    rows.innerHTML=(P.weekly||[]).filter(function(o){return active==="all"||o.cat===active;}).map(row).join("");
  }
  draw();
  document.getElementById("monthlyRows").innerHTML=(P.monthly||[]).map(row).join("");
  document.getElementById("comedyRows").innerHTML=(P.comedy||[]).map(row).join("");

  /* ---------------- new places ---------------- */
  (function(){
    var PLACES=P.places||[];
    var grid=document.getElementById("placeGrid"), empty=document.getElementById("placeEmpty"), pf=document.getElementById("placeFilters");
    var kinds=[["all","Everything"],["dinner","Dinner out"],["drinks","Drinks first"],["casual","Low-key"],["soon","Opening soon"]];
    var hoods=["All areas"].concat(PLACES.map(function(p){return p.hood;}).filter(function(v,i,a){return a.indexOf(v)===i;}).sort());
    var kind="all", hood="All areas";
    kinds.forEach(function(k){
      var b=el('<button class="chip" aria-pressed="'+(k[0]==="all")+'" data-k="'+k[0]+'">'+esc(k[1])+'</button>');
      b.addEventListener("click",function(){ kind=k[0]; sync(); });
      pf.appendChild(b);
    });
    pf.appendChild(el('<span style="width:100%;height:0"></span>'));
    hoods.forEach(function(h){
      var b=el('<button class="chip" aria-pressed="'+(h==="All areas")+'" data-h="'+esc(h)+'">'+esc(h)+'</button>');
      b.addEventListener("click",function(){ hood=h; sync(); });
      pf.appendChild(b);
    });
    function sync(){
      Array.prototype.forEach.call(pf.children,function(x){
        if(x.dataset.k!==undefined) x.setAttribute("aria-pressed", x.dataset.k===kind);
        if(x.dataset.h!==undefined) x.setAttribute("aria-pressed", x.dataset.h===hood);
      });
      draw();
    }
    function card(p){
      return '<article class="card">'+
        '<div class="meta"><span>'+esc(p.hood)+'</span><span>'+esc(p.opened)+'</span></div>'+
        '<h3>'+esc(p.n)+'</h3><p>'+esc(p.d)+'</p>'+
        '<div class="foot"><span class="hours"><span class="dot '+p.conf+'"></span>'+esc(p.hours)+'</span>'+
        (p.url?'<a class="go" href="'+p.url+'" target="_blank" rel="noopener">'+(p.kind==="soon"?"Read more →":"Site →")+'</a>':'')+
        '</div></article>';
    }
    function draw(){
      var list=PLACES.filter(function(p){
        return (kind==="all"||p.kind===kind) && (hood==="All areas"||p.hood===hood);
      });
      grid.innerHTML=list.map(card).join("");
      empty.hidden=list.length>0;
    }
    draw();
  })();

  /* ---------------- headliners table ---------------- */
  (function(){
    var wrap=document.getElementById("headliners");
    if(!P.headliners||!P.headliners.length){ wrap.hidden=true; return; }
    document.getElementById("hlTitle").textContent=P.headlinersTitle||"Headliners";
    document.getElementById("hlNote").textContent=P.headlinersNote||"";
    document.getElementById("hlBody").innerHTML=P.headliners.map(function(r){
      return '<tr><td class="num">'+esc(r[0])+'</td><td>'+esc(r[1])+'</td><td class="num">'+esc(r[2])+'</td></tr>';
    }).join("");
  })();

  /* ---------------- calendar ---------------- */
  document.getElementById("cal").innerHTML=(P.cal||[]).map(function(d){
    return '<div class="calrow"><div class="date"><div class="m">'+esc(d.m)+'</div><div class="n">'+d.n+'</div></div>'+
      '<ul>'+d.items.map(function(i){
        return '<li>'+(i.p?'<span class="pin'+(i.p==="star"||i.p==="tonight"?" star":"")+'">'+esc(i.p==="star"?"pick":i.p)+'</span>':'')+
          '<span><b>'+esc(i.t)+'</b>'+(i.d?": "+esc(i.d):"")+'</span></li>';
      }).join("")+'</ul></div>';
  }).join("");

  /* ---------------- footer ---------------- */
  document.getElementById("researched").textContent="Researched "+P.researched+". Venue hours, ticket prices and show dates were checked against the venue's own site wherever one was reachable; anything that could not be confirmed is flagged rather than guessed at.";
  document.getElementById("legendOk").textContent=day+" hours confirmed on the venue's own listing";
  document.getElementById("srcs").innerHTML=(P.sources||[]).map(function(s){
    return '<a href="'+s[1]+'" target="_blank" rel="noopener">'+esc(s[0])+'</a>';
  }).join("");

  /* ---------------- plan spinner ---------------- */
  (function(){
    var btn=document.getElementById("spin"), outEl=document.getElementById("plan");
    var tables=(P.places||[]).filter(function(p){return p.kind!=="soon" && p.conf==="ok";});
    var afters=(P.weekly||[]).filter(function(w){return w.cat!=="food";});
    if(!tables.length||!afters.length){ document.getElementById("pick").hidden=true; return; }
    var last="";
    btn.addEventListener("click",function(){
      var t,a,txt,guard=0;
      do{
        t=tables[Math.floor(Math.random()*tables.length)];
        a=afters[Math.floor(Math.random()*afters.length)];
        txt=t.n+" · "+a.n;
        guard++;
      } while(txt===last && guard<8);
      last=txt;
      outEl.innerHTML="Dinner at <b>"+esc(t.n)+"</b> in "+esc(t.hood)+", "+esc(t.hours.toLowerCase())+
        ". Then <b>"+esc(a.n)+"</b>, "+esc(a.w)+", "+esc(a.t.toLowerCase())+", "+esc(a.p.toLowerCase())+".";
    });
  })();
})();

/* ================= patios page ================= */
if(window.PATIOS) (function(){
  var P=window.PATIOS;
  if(P.weatherNote) document.getElementById("weather").textContent=P.weatherNote;
  var grid=document.getElementById("patioGrid"), pf=document.getElementById("patioFilters"), empty=document.getElementById("patioEmpty");
  var hoods=["All areas"].concat((P.patios||[]).map(function(p){return p.hood;}).filter(function(v,i,a){return a.indexOf(v)===i;}).sort());
  var hood="All areas";
  hoods.forEach(function(h){
    var b=el('<button class="chip" aria-pressed="'+(h==="All areas")+'">'+esc(h)+'</button>');
    b.addEventListener("click",function(){
      hood=h;
      Array.prototype.forEach.call(pf.children,function(x,i){x.setAttribute("aria-pressed", hoods[i]===hood);});
      draw();
    });
    pf.appendChild(b);
  });
  function card(p){
    return '<article class="card">'+
      '<div class="meta"><span>'+esc(p.hood)+'</span>'+(p.vibe?'<span>'+esc(p.vibe)+'</span>':'')+'</div>'+
      '<h3>'+esc(p.n)+'</h3><p>'+esc(p.d)+'</p>'+
      '<div class="foot"><span class="hours"><span class="dot '+(p.conf||"warn")+'"></span>'+esc(p.hours||"Hours vary")+'</span>'+
      (p.url?'<a class="go" href="'+p.url+'" target="_blank" rel="noopener">Site →</a>':'')+
      '</div></article>';
  }
  function draw(){
    var list=(P.patios||[]).filter(function(p){return hood==="All areas"||p.hood===hood;});
    grid.innerHTML=list.map(card).join("");
    empty.hidden=list.length>0;
  }
  draw();
  document.getElementById("researched").textContent="Researched "+P.researched+". Patio status was checked against each venue's own site or social wherever reachable.";
})();
