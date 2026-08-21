/* ---------------- data ---------------- */
var PLACES = [
 {n:"The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Reopened Apr 2026", d:"The 1831 inn, now run by Wolf's Ridge, does the most complete Sunday in the suburbs: brunch 10 to 4, then dinner straight through to 9. The blonde French onion soup translates to brunch hour just fine.", hours:"Sun brunch 10am–4pm, dinner 4–9pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"Lindey's", hood:"German Village", kind:"dinner", opened:"Since 1981", d:"White-tablecloth brunch on Beck Street from 11 to 3, and then the dining room rolls straight into Sunday supper until 10. The patio in late summer is the whole point.", hours:"Sun 11am–10pm, brunch till 3pm", conf:"ok", res:"Book ahead", url:"https://www.lindeys.com/"},
 {n:"The Pearl", hood:"Short North", kind:"dinner", opened:"Short North staple", d:"The oyster-house brunch: benedicts next to a raw bar, 10 to 3, then dinner service to 9. Built for the long, unhurried Sunday table.", hours:"Sun brunch 10am–3pm, dinner 3–9pm", conf:"ok", res:"Recommended", url:"https://thepearlrestaurant.com/locations-menus/short-north/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Brunch, Italian-style, 11 to 3 (crispy chicken limone at noon is correct), then handmade pasta until 9. The open kitchen keeps the room lively even on a slow Sunday.", hours:"Sun brunch 11am–3pm, dinner 3–9pm", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"The Sunday-supper steakhouse: steaks butchered daily, house pasta, and the slow-roasted giant meatball off the chef's grandmother's recipe. Kitchen closes at 9, so book early.", hours:"Sun 4–9pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Metsi's Wood-Fired Italian", hood:"Italian Village", kind:"dinner", opened:"Jun 2025", d:"Wood-hearth pastas from the Chapman's Eat Market team, and happy hour runs on Sundays too, 4 to 6. A strong early-dinner pick before the week starts.", hours:"Sun 4–9pm, happy hour 4–6", conf:"ok", res:"Walk-ins ok", url:"https://www.metsisitalian.com/"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar that opens at 1 on Sundays, which almost nothing this ambitious does. Late-lunch omakase is genuinely on the table.", hours:"Sun 1–10pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass walls on the river and a brunch menu on the site, but Sunday hours weren't posted when we checked. Book through OpenTable rather than guessing.", hours:"Hours unposted; book ahead", conf:"warn", res:"OpenTable", url:"https://www.boathouserestaurantoh.com/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"The rooftop opens at 2 on Sundays: golden-hour skyline without the Saturday crush. Last call comes before 11, which on a Sunday is a feature.", hours:"Sun 2–11pm", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Woodlands Tavern", hood:"Grandview", kind:"drinks", opened:"Since 2009", d:"Grandview's music bar keeps real Sunday hours when nearly every cocktail room in town has gone home. Full bar, occasional shows; check the calendar before counting on a band.", hours:"Sun 1pm–2:30am", conf:"ok", res:"Walk in", url:"https://woodlandstavern.com/"},
 {n:"Byrne's Pub", hood:"Grandview", kind:"drinks", opened:"Est. 1995", d:"The Irish-pub answer to Sunday: pints from noon, kitchen until 9, bar till midnight. Bluegrass lives here on Fridays, but the room itself is the draw.", hours:"Sun 12pm–12am, kitchen till 9", conf:"ok", res:"Walk in", url:"https://byrnespub.com/"},
 {n:"Huli Huli Tiki Lounge", hood:"Powell", kind:"drinks", opened:"Powell original", d:"Tiki on a Sunday afternoon: the Powell original pours 1 to 8. The newer downtown room doesn't post Sunday hours, so call before driving to it.", hours:"Sun 1–8pm (Powell)", conf:"ok", res:"No reservations", url:"https://www.hulihulipowell.com/"},

 {n:"Katalina's", hood:"Harrison West", kind:"casual", opened:"Three locations", d:"The Nutella-stuffed pancake balls, and the line to prove it. All three shops (Harrison West, Clintonville, Bexley) run 8 to 3 every Sunday. Go at 8 or embrace the wait.", hours:"Sun 8am–3pm", conf:"ok", res:"Walk in", url:"https://www.katalinas.com/"},
 {n:"Fox in the Snow", hood:"Italian Village", kind:"casual", opened:"Seven cafes", d:"The egg sandwich and the cinnamon roll that launched seven cafes across the city. Weekend hours are 8 to 3; the pastry case rarely survives to noon.", hours:"Sun 8am–3pm", conf:"ok", res:"Counter service", url:"https://www.foxinthesnow.com/"},
 {n:"Wolf's Ridge Brewing", hood:"Downtown", kind:"casual", opened:"Downtown anchor", d:"Chicken and waffles with a clean saison, 10 to 2, then the taproom holds the rest of the afternoon until 9. One roof, whole Sunday.", hours:"Sun brunch 10am–2pm, taproom 12–9pm", conf:"ok", res:"Recommended for brunch", url:"https://wolfsridgebrewing.com/"},
 {n:"Budd Dairy Food Hall", hood:"Italian Village", kind:"casual", opened:"Cameron Mitchell's hall", d:"Ten kitchens under one roof with weekend brunch service, a rooftop, and a bar that runs an hour past the food. The group-of-friends-who-can't-agree solution.", hours:"Sun 11am–9pm, bar till 10", conf:"ok", res:"Walk in", url:"https://www.budddairyfoodhall.com/"},
 {n:"Little Grand Market", hood:"Grandview Crossing", kind:"casual", opened:"2025", d:"The newer food hall: chef stalls, an all-day bar, and room to sprawl with the Sunday paper. Kitchens close at 8, the bar at 10.", hours:"Sun 11am–10pm, kitchens till 8", conf:"ok", res:"Walk in", url:"https://www.thelittlegrandmarket.com/"},
 {n:"Mid City Garage", hood:"German Village", kind:"casual", opened:"2025", d:"Roll-up doors, patio lights, thin-crust pizza, and kitchen hours that actually cover Sunday lunch through dinner. The bar stays open past the kitchen.", hours:"Sun 11am–9pm, bar later", conf:"ok", res:"Walk in", url:"https://www.midcitygarage.com/"},
 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"Sunday-night ramen: tonkotsu with black garlic oil, open straight through from 11 to 9. The correct answer to a gray evening before a Monday.", hours:"Sun 11am–9pm", conf:"ok", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Fifty-five items of Hong Kong-style dim sum, and Sunday is the traditional day for exactly this. Their site doesn't post hours; 11 to 9 is reported, call first.", hours:"Sun 11am–9pm reported", conf:"warn", res:", ", url:"https://www.dimsumab.com/"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Honest warning: no brunch here, and Sundays don't start until 4. But 4 to 9 of scratch Mediterranean cooking makes it a reliable Sunday-supper fallback.", hours:"Sun 4–9pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},

 {n:"Welcome to the Farm", hood:"Short North", kind:"soon", opened:"Opened Aug 22, 2026", d:"Chase Rice's country bar under Good Night John Boy opens the day before this page's first Sunday. Sunday hours weren't posted at press time; expect noise either way.", hours:"Hours not yet posted", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},
 {n:"Coldbar", hood:"Italian Village", kind:"soon", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla. Confirm it has actually opened.", hours:"Confirm it has opened", conf:"warn", res:", ", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/04/29/try-cold-tapas-and-craft-cocktails-at-coldbar-opening-in-august/89855560007/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy directly underneath. Memberships open in September.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"5:00–6:30pm", cat:"music", n:"Bobby Floyd Trio at Natalie's", w:"Grandview", d:"The dean of Columbus jazz piano holds the Sunday early slot: free with a table reservation, tips strongly encouraged. Ginger Rabbit is dark Sundays, so this is the town's jazz fix.", p:"Free + tips", conf:"ok", url:"https://nataliesgrandview.com/events/"},

 {t:"12:00pm show", cat:"food", n:"Drag brunch at Union Cafe", w:"Short North", d:"The Sunday institution on High Street: full brunch service with a drag show hosted by Deva Station at noon, every single week, all ages welcome. Order before the show starts.", p:"All ages", conf:"ok", url:"https://www.unioncafe.com/brunch"},
 {t:"Plan ahead", cat:"food", n:"Kitchens close early on Sundays", w:"Citywide", d:"Nearly every kitchen on this page stops at 9, and the brunch lines peak 10:30 to noon. Book the 6pm table, or be first at the pancake line at 8. Both work; 10pm doesn't.", p:", ", conf:"ok", url:"https://www.lindeys.com/"},

 {t:"1:00pm", cat:"trivia", n:"Afternoon quiz at Ace of Cups", w:"Old North", d:"Excesss runs a 1pm phone-based quiz in the old bank building, which means trivia with daylight and a patio. The same room hosts karaoke at 10 if you never left.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"6:00pm", cat:"trivia", n:"Music bingo at Hanks Texas BBQ", w:"Old North", d:"Bingo, but the numbers are songs, with brisket. Hosted by the Excesss crew every Sunday at 6.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"7:00pm", cat:"trivia", n:"Jeopardy-style trivia at 4th St Taproom", w:"Italian Village", d:"The competitive option: buzzer-brain format, full bar, done by 9 so the week survives.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},

 {t:"7pm–late", cat:"dance", n:"Sunday karaoke, three rooms", w:"Citywide", d:"Excesss karaoke lands at Cazuela's on campus at 7, Eldorado's at 9, and Ace of Cups at 10 for the nightcap crowd. Pick by how much Monday means to you.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},
 {t:"7:00pm", cat:"dance", n:"Karaoke at Club Diversity", w:"Brewery District", d:"The Victorian piano bar hands the room the mic on Sundays. Doors at noon, karaoke at 7, closed by midnight.", p:"No cover", conf:"ok", url:"https://clubdiversity.com/entertainment-events/"},

 {t:"10am–5pm", cat:"culture", n:"Free Sundays at the Columbus Museum of Art", w:"Discovery District", d:"General admission is free every Sunday, all year, no asterisks. Special exhibitions cost extra; the collection and the sculpture garden don't. The single best Sunday habit in the city.", p:"Free", conf:"ok", url:"https://www.columbusmuseum.org/plan-your-visit"},
 {t:"10am–4pm", cat:"culture", n:"CMA at the Pizzuti", w:"Short North", d:"The contemporary satellite keeps its own Sunday hours, 10 to 4, ten bucks. Small enough to pair with brunch two blocks away.", p:"$10", conf:"ok", url:"https://www.columbusmuseum.org/plan-your-visit"},
 {t:"10am–5pm", cat:"culture", n:"Franklin Park Conservatory", w:"Franklin Park", d:"Glasshouses, Chihuly, and the outdoor gardens, open every day of the week 10 to 5. About $25; $4 with SNAP/EBT. A reliably great gray-day Sunday.", p:"~$25", conf:"ok", url:"https://www.fpconservatory.org/visit/"},
 {t:"10am–5pm", cat:"culture", n:"COSI", w:"Franklinton", d:"Open Wednesday through Sunday, 10 to 5 reported, closed Monday and Tuesday most of the year. Confirm holiday-week hours on their calendar before hauling kids downtown.", p:"$30", conf:"warn", url:"https://cosi.org/hours-calendar"},
 {t:"9:00–11:00am", cat:"culture", n:"F1 Raceday at Land-Grant", w:"Franklinton", d:"Race mornings on the big screen in the beer garden and taproom. Coffee-hour start time, beer optional, free.", p:"Free", conf:"ok", url:"https://landgrantbrewing.com/events/"},
 {t:"10am–11pm", cat:"culture", n:"The Book Loft's 32 rooms", w:"German Village", d:"Open to 11pm seven days a week, which makes it the rare Columbus institution you can still walk into after Sunday dinner. Pair with Fox in the Snow next door.", p:"Free to browse", conf:"ok", url:"https://www.bookloft.com/"},
 {t:"Heads up", cat:"culture", n:"What's closed on Sundays", w:"Citywide", d:"The Wexner Center galleries run Tuesday through Saturday only. Kelton House is closed indefinitely after a fire. And most cocktail bars (Ginger Rabbit included) go dark. Plan around it.", p:", ", conf:"ok", url:"https://wexarts.org/"}
];

var MONTHLY = [
 {t:"Select Sun", n:"Chamber Music Columbus", w:"Downtown", d:"The century-old series drops occasional Sunday-afternoon dates: VIVO Hope lands Sunday Sep 13 at 1pm, ticketed through CAPA.", p:"Ticketed", conf:"ok", url:"https://chambermusiccolumbus.org/"},
 {t:"Most months", n:"ProMusica Sundays at the Southern", w:"Downtown", d:"The chamber orchestra pairs most programs Saturday and Sunday: Mozart's Great Mass Oct 18, then Bach, Pärt and Beethoven Nov 8.", p:"Ticketed", conf:"ok", url:"https://www.capa.com/events/"},
 {t:"4 weekends/season", n:"Columbus Jazz Orchestra at the Southern", w:"Downtown", d:"Each CJO program runs a Thursday-through-Sunday stand. Ella & Louis closes Sunday Oct 11; check CAPA for the matinee time.", p:"Ticketed", conf:"warn", url:"https://www.capa.com/productions/ella-and-louis/"},
 {t:"One per run", n:"BalletMet Sunday matinees", w:"Downtown", d:"Most productions get exactly one Sunday 2pm: Marilyn dances Sunday Oct 18 at the Davidson Theatre. Nutcracker season fills December.", p:"Ticketed", conf:"ok", url:"https://www.balletmet.org/performances/marilyn/"},
 {t:"Tour weeks", n:"Broadway in Columbus Sunday shows", w:"Ohio & Palace theatres", d:"Touring weeks close with Sunday performances: Death Becomes Her plays Oct 11 at 1 and 6:30 at the Ohio Theatre, and Maybe Happy Ending's week ends Sunday Nov 8.", p:"Ticketed", conf:"ok", url:"https://www.capa.com/productions/death-becomes-her/"},
 {t:"Select Sun", n:"Drag brunch spectaculars at the Funny Bone", w:"Easton · 21+", d:"Sing-along tribute drag brunches with doors at 12:30: Rent on Sep 13, $27 to $42. Watch the calendar; these pop up roughly monthly.", p:"$27–42", conf:"ok", url:"https://columbus.funnybone.com/calendar/"}
];

var COMEDY = [
 {t:"Sun 6:00pm", n:"Columbus Funny Bone", w:"Easton · 21+", d:"Most Sundays get a single early headliner: doors 4:30, show at 6, home by 8:30 with the week intact. Full schedule below.", p:"$20–75", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Through Aug 30", n:"Columbus Comedy Festival", w:"Citywide · final Sunday", d:"The festival's closing Sunday (Aug 30) stacks ten shows: Arnez J at the Funny Bone, Jazmyn W at The Attic, a clean-comedy showcase and live storytelling at Seventh Son.", p:"$5–115", conf:"ok", url:"https://columbuscomedyfest.com/2026-schedule/"},
 {t:"Some Sun", n:"The Attic Comedy Club", w:"Olde Towne East", d:"Sunday shows appear irregularly (two land Aug 30 for the festival). The regular rhythm is Tuesday crowd work and Wednesday open mic; check the calendar before driving over.", p:"$15–30", conf:"warn", url:"https://theatticcolumbus.standuptix.com/calendar"},
 {t:"Honestly", n:"Sketch and improv rest on Sundays", w:"Citywide", d:"Shadowbox, the Nest and Hashtag mostly program Thursday through Saturday, and none list regular Sunday shows right now. Sunday comedy in this town means the Funny Bone, or a festival week.", p:", ", conf:"warn", url:"https://www.hashtagcomedy.com/"}
];

var FUNNYBONE = [
 ["Aug 23","Peter Antoniou · 3:30 & 6:30","$32–37"],["Aug 30","Arnez J.","$42–52"],
 ["Sep 6","Gary Owen · 6 & 9:30","$65–75"],["Sep 13","Tony Rock · plus Rent drag brunch 2pm","$27–42"],
 ["Sep 20","Alaire Thomas","$27–37"],["Oct 11","Donnell Rawlings","$58–68"],
 ["Oct 25","Heroes Off Duty · 3pm","$32–37"],["Nov 1","Lil Duval","$42–52"],
 ["Nov 8","EJSpeaks","$32–42"],["Nov 15","Dedrick Flynn","$32–37"],
 ["Nov 22","Highly Unscripted","$25"],["Nov 29","Desi Banks","$42–52"],
 ["Dec 6","Tina Friml","$20–25"],["Dec 27","Marlon Wayans · 3 shows","$60–70"]
];

var CAL = [
 {m:"Aug",n:23,items:[
   {p:"star",t:"Ella Mai at KEMBA Live!",d:"Do You Still Love Me? tour, outdoors, doors 6:30pm, rain or shine."},
   {p:"day game",t:"Clippers vs. St. Paul",d:"1:05pm at Huntington Park. Sunday baseball, then dinner somewhere on this page."},
   {p:"family",t:"Hot Wheels Monster Trucks: Glow-N-Fire",d:"Nationwide Arena, 1:30pm."},
   {p:"matinee",t:"Pippin at the Garden Theatre",d:"2pm, Short North Stage. Final week."}
 ]},
 {m:"Aug",n:30,items:[
   {p:"star",t:"Jesse & Joy at the Palace Theatre",d:"The Grammy-winning Mexican duo's El Despecho Tour, 7pm."},
   {p:"last call",t:"Pippin closes",d:"2pm at the Garden Theatre."},
   {p:"",t:"Comedy Festival, final day",d:"Ten shows: Arnez J at the Funny Bone at 6, Jazmyn W at The Attic at 8, storytelling at Seventh Son."},
   {p:"drag",t:"Camp Kyoshi drag brunch",d:"An Avatar: The Last Airbender tribute at Honest Friend Brewing, 1pm."}
 ]},
 {m:"Sep",n:6,items:[
   {p:"star",t:"Columbus Greek Festival",d:"Noon–11pm at Annunciation Cathedral, $10 weekend pass. Gyros, dancing, and cathedral tours."},
   {p:"day game",t:"Clippers vs. Iowa",d:"1:05pm at Huntington Park."},
   {p:"",t:"Gary Owen at the Funny Bone",d:"6pm and 9:30pm, $65–75. Labor Day is tomorrow, so the late show is actually viable."}
 ]},
 {m:"Sep",n:13,items:[
   {p:"star",t:"Columbus Oktoberfest, final day",d:"Noon–8pm at the Ohio Expo Center, free admission."},
   {p:"1pm",t:"VIVO Hope",d:"Chamber Music Columbus, downtown, ticketed through CAPA."},
   {p:"drag",t:"Rent sing-along drag brunch",d:"Funny Bone, doors 12:30, show 2pm, $27–42."},
   {p:"",t:"Tony Rock at the Funny Bone",d:"6pm, $30–35."}
 ]},
 {m:"Sep",n:20,items:[
   {p:"star",t:"Clippers vs. St. Paul: last home date of the season",d:"1:05pm. Say goodbye to Huntington Park until April."},
   {p:"matinee",t:"Jagged Little Pill",d:"2pm, Studio One Theatre at the Riffe Center."},
   {p:"",t:"Slothrust at A&R Music Bar",d:"Doors 6pm."},
   {p:"",t:"Alaire Thomas at the Funny Bone",d:"6pm, $27–37."}
 ]},
 {m:"Sep",n:27,items:[
   {p:"star",t:"Crew vs. Inter Miami",d:"7pm at Field. The biggest Sunday ticket of the fall; buy early."},
   {p:"",t:"Gary Gulman at the Lincoln Theatre",d:"Misfit Stand Up Tour, 7pm."},
   {p:"3pm",t:"Bored Teachers comedy tour",d:"Southern Theatre, 3pm."},
   {p:"matinee",t:"Two 2pm matinees",d:"Jagged Little Pill at the Riffe, and Sweeney Todd's first Sunday at the Garden Theatre."},
   {p:"",t:"Sub Urban at A&R Music Bar",d:"Doors 7pm."}
 ]},
 {m:"Oct",n:4,items:[
   {p:"star",t:"MUNA at KEMBA Live!",d:"Gets So Hot Tour with hemlocke springs, doors 6:30pm."},
   {p:"",t:"Sex Pistols with Frank Carter at the Newport",d:"Jones, Cook and Matlock on the original bill. Doors 7:30pm."},
   {p:"last call",t:"Jagged Little Pill, final performance",d:"2pm at the Riffe Center."},
   {p:"matinee",t:"Sweeney Todd",d:"2pm at the Garden Theatre."},
   {p:"",t:"glaive at The Bluestone",d:"Doors 6:30pm."}
 ]},
 {m:"Oct",n:11,items:[
   {p:"star",t:"Columbus Italian Festival, closing day",d:"Noon–7pm in Italian Village; the parade steps off from Goodale Park at 1."},
   {p:"",t:"Death Becomes Her",d:"Broadway in Columbus at the Ohio Theatre, 1pm and 6:30pm."},
   {p:"",t:"Ella & Louis",d:"Columbus Jazz Orchestra's Sunday closer at the Southern; check CAPA for the matinee time."},
   {p:"matinee",t:"Sweeney Todd",d:"2pm at the Garden Theatre, ASL interpreted."},
   {p:"",t:"Donnell Rawlings at the Funny Bone",d:"6pm, $58–68."},
   {p:"11:30am",t:"Toddler Rave at KEMBA Live!",d:"Lenny Pearce's world tour. Yes, really. Doors 11:30am."}
 ]}
];

window.PAGE = {
  day: "Sunday",
  researched: "August 20, 2026",
  calRange: "Aug 23 - Oct 11",
  comedyEyebrow: "One club, one early show",
  comedyIntro: "Sunday comedy in Columbus runs through the Funny Bone's early slot: doors 4:30, show at 6, home by 8:30 with the week intact. Not every Sunday gets a headliner (Sep 27 and Oct 4 are dark), and the sketch and improv stages mostly rest, so when a name you like lands on a Sunday, buy ahead.",
  headlinersTitle: "Sunday headliners at the Funny Bone",
  headlinersNote: "Easton, doors 4:30, show 6:00 unless noted, 21+. Sep 27 and Oct 4 have no Sunday show. Buy from the club directly; resale sites mark these up.",
  sources: [
    ["Columbus Museum of Art","https://www.columbusmuseum.org/plan-your-visit"],
    ["Franklin Park Conservatory","https://www.fpconservatory.org/visit/"],
    ["COSI","https://cosi.org/hours-calendar"],
    ["Wexner Center","https://wexarts.org/"],
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["Union Cafe","https://www.unioncafe.com/brunch"],
    ["Natalie's Grandview","https://nataliesgrandview.com/events/"],
    ["PromoWest Productions","https://promowestlive.com/"],
    ["CAPA","https://www.capa.com/events/"],
    ["Columbus Crew","https://www.columbuscrew.com/tickets/single-match"],
    ["Columbus Clippers","https://www.milb.com/columbus/schedule"],
    ["Nationwide Arena","https://www.nationwidearena.com/events"],
    ["Columbus Greek Festival","https://www.columbusgreekfestival.com/"],
    ["Columbus Oktoberfest","https://www.columbusoktoberfest.com/"],
    ["Columbus Italian Festival","https://columbusitalianfestival.com/"],
    ["Columbus Comedy Festival","https://columbuscomedyfest.com/2026-schedule/"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["Chamber Music Columbus","https://chambermusiccolumbus.org/"],
    ["BalletMet","https://www.balletmet.org/"],
    ["Land-Grant Brewing","https://landgrantbrewing.com/events/"],
    ["The Book Loft","https://www.bookloft.com/"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
