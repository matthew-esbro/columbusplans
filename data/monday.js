/* ---------------- data ---------------- */
var PLACES = [
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen: handmade pasta, crispy chicken limone, a lasagna built to split. One of the few new-wave rooms that treats Monday like a real night, lunch straight through close.", hours:"Mon 11am–10pm, HH 3–6", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened under Wolf's Ridge, and it does not take Mondays off. Blonde French onion soup with raclette, sirloin filet over sunchoke puree, sticky toffee pudding.", hours:"Mon 11am–10pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"Marcella's", hood:"Short North", kind:"dinner", opened:"Old reliable", d:"The wine bar that never blinks: open seven nights, with half-price snacks and pours in the bar 4 to 6 on Mondays. Order the spicy shrimp and let High Street empty out around you.", hours:"Mon 4–10pm, HH 4–6", conf:"ok", res:"Walk-ins ok", url:"https://marcellasrestaurant.com/locations-menus/marcellas-short-north/"},
 {n:"The Pearl", hood:"Short North", kind:"dinner", opened:"Old reliable", d:"Oyster bar and tavern, shucking every night of the week. The famous $3 oyster deal is Thursday; Monday you come for a stool at the raw bar with no wait.", hours:"Mon 4–10pm", conf:"ok", res:"Recommended", url:"https://thepearlrestaurant.com/locations-menus/short-north/"},
 {n:"Lindey's", hood:"German Village", kind:"dinner", opened:"Since 1981", d:"The brass-and-white-tablecloth classic on Beck Street, open 11 to 10 with no afternoon break. A Monday reservation here feels like getting away with something.", hours:"Mon 11am–10pm", conf:"ok", res:"Book ahead", url:"https://lindeys.com/"},
 {n:"Tabla", hood:"Northeast", kind:"dinner", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road, still soft-launching. Hours are not posted yet, so call before you drive; the Bollywood-music nights are the reason to keep checking.", hours:"Unposted (soft launch)", conf:"warn", res:"Call first", url:"https://www.tablacuisine.com/locations/"},

 {n:"Oddfellows", hood:"Short North", kind:"drinks", opened:"Old reliable", d:"Tallboys, slushies and a loud jukebox, open to 2:30 every night of the week. The Excesss trivia crew sets up at 7 on Mondays.", hours:"Mon 4pm–2:30am", conf:"ok", res:"Walk in", url:"https://www.oddfellowsbar.com/"},
 {n:"Seventh Son Brewing", hood:"Italian Village", kind:"drinks", opened:"Old reliable", d:"The flagship taproom on 4th pours till 11 on Mondays, with pub trivia at 7. Its wild-ale sibling Antiques on High hosts the comedy mic the same night.", hours:"Mon 3:30–11pm", conf:"ok", res:"Walk in", url:"https://www.seventhsonbrewing.com/hours"},
 {n:"Land-Grant Brewing", hood:"Franklinton", kind:"drinks", opened:"Old reliable", d:"The beer garden and taproom open at 3 on Mondays, when most of Franklinton's food scene is dark. Bring a laptop or a date, both work.", hours:"Mon 3–10pm", conf:"ok", res:"Walk in", url:"https://landgrantbrewing.com/"},
 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel and the rare Columbus rooftop that actually opens on a Monday. Happy hour 4 to 6 takes the edge off the cocktail prices.", hours:"Mon 4–11pm, HH 4–6", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Club Diversity", hood:"Brewery District", kind:"drinks", opened:"Old reliable", d:"The piano bar in a Victorian house runs well-drink specials all Monday night. Second Mondays add a potluck (see the monthly list).", hours:"Mon 4pm–midnight", conf:"ok", res:"Walk in", url:"https://clubdiversity.com/entertainment-events/"},
 {n:"Woodlands Tavern", hood:"Grandview", kind:"drinks", opened:"Since 2009", d:"Two stages and a bar that opens at 3 on Mondays. Touring one-offs land here on off nights more than anywhere else in town; check the calendar before you settle for the TV.", hours:"Mon 3pm–2:30am", conf:"ok", res:"Walk in", url:"https://www.woodlandstavern.com"},
 {n:"The Little Grand", hood:"Grandview Crossing", kind:"drinks", opened:"New-ish", d:"Market by day, proper bar by night. The Monday bar shift runs 4 to 10, and their posted industry night makes it the service-crowd hang (details in the weekly list).", hours:"Mon market 11–10, bar 4–10", conf:"ok", res:"Walk in", url:"https://thelittlegrandmarket.com/"},
 {n:"Dick's Den", hood:"Old North", kind:"drinks", opened:"Since 1964", d:"The great jazz dive under the neon owl. Mondays lean pool league with music some weeks (the room books Thursday through Tuesday). The website fights browsers; trust the chalkboard.", hours:"Nightly to 2:30am reported", conf:"warn", res:"Walk in", url:"https://www.dicksden.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with its own menu. Low light, laid out for two people talking, reported open daily 4 to midnight, Mondays included.", hours:"Daily 4pm–midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},

 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space with the longest posted hours on this page. The reliable answer when your first two Monday picks turn out dark.", hours:"Mon 11am–10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Arch City Tavern", hood:"Short North", kind:"casual", opened:"Old reliable", d:"The $10 house burger runs all day every Monday, and half-off drafts and wine 3 to 6 stacks on top. The best cheap-night math on High Street.", hours:"Mon 11am–11pm", conf:"ok", res:"Walk in", url:"https://archcitytavern.com/"},
 {n:"Schmidt's Sausage Haus", hood:"German Village", kind:"casual", opened:"Since 1886", d:"Bahama Mamas, autobahn buffet, half-pound cream puffs, seven days a week. Monday is the one night you will not wait an hour for a table.", hours:"Mon 11am–9pm", conf:"ok", res:"Walk in", url:"https://schmidthaus.com/"},
 {n:"Cap City Fine Diner", hood:"Grandview + 2 more", kind:"casual", opened:"Old reliable", d:"Blue-plate comfort with a kitchen that never ducks a Monday: meatloaf, chocolate cream pie, real martinis. All three locations keep identical hours with happy hour 4 to 6.", hours:"Mon 11am–9pm, HH 4–6", conf:"ok", res:"Accepted", url:"https://capcityfinediner.com/"},
 {n:"Pins Mechanical", hood:"Downtown", kind:"casual", opened:"Old reliable", d:"Duckpin lanes, pinball and patio games on 4th Street. Weekday games run $7, and Monday has a reputation as the value night (see the weekly list).", hours:"Mon 4–11:30pm", conf:"ok", res:"Walk in", url:"https://www.pinsbar.com/locations/columbus"},
 {n:"Level One Bar + Arcade", hood:"Crosswoods", kind:"casual", opened:"Old reliable", d:"Free-play arcade wall, a serious pinball row, and the Silverball league rolling on Monday nights in season. Open till midnight even at the start of the week.", hours:"Mon 4pm–midnight", conf:"ok", res:"Walk in", url:"https://www.level1bar.com/"},
 {n:"Kafe Kerouac", hood:"Old North", kind:"casual", opened:"Campus institution", d:"Books, records, coffee and beer near campus, with a dollar off every beer 5 to 7 on Mondays. The musical open mic is Tuesday; come back for it.", hours:"HH Mon 5–7pm; full hours unposted", conf:"warn", res:"Walk in", url:"https://www.kafekerouac.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong-style dim sum, 55 items, meant to be pushed across the table at each other. Weekday happy hour 3 to 6 is posted; the reported Monday hours are 11 to 9.", hours:"Mon 11am–9pm reported, HH 3–6", conf:"warn", res:"Walk in", url:"https://www.dimsumab.com/"},
 {n:"Club 185", hood:"German Village", kind:"casual", opened:"Old reliable", d:"The neighborhood tavern that feeds you late: burgers off the flat top with food till midnight and the bar till 2:30. Per-day hours are not posted, so call if it's a holiday.", hours:"Food to 12am, bar to 2:30am", conf:"warn", res:"Walk in", url:"https://www.club185.com/"},

 {n:"Welcome to the Farm", hood:"Short North", kind:"soon", opened:"Opened Aug 22, 2026", d:"Chase Rice's country bar under Good Night John Boy opened Saturday. Regular hours are still being finalized and will likely start Thursday like its sibling, so it's not a Monday bet yet.", hours:"Being finalized", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},
 {n:"Coldbar", hood:"Italian Village", kind:"soon", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, oysters, terrines, deviled eggs with chili crisp shoyu. From the chef behind Mezcla.", hours:"Confirm it has actually opened", conf:"warn", res:", ", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/04/29/try-cold-tapas-and-craft-cocktails-at-coldbar-opening-in-august/89855560007/"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy underneath. Memberships open in September.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"8:00–11:00pm", cat:"music", n:"Open Stage with Matt Jones at Eldorado's", w:"Clintonville", d:"A weekly Monday open stage at the family-owned bar on North High. Bring an instrument or just take a booth; the Sunday blues-jam crowd tends to bleed over a day.", p:"Free", conf:"ok", url:"https://eldoradosbar.com/calendar/"},
 {t:"Most Mondays", cat:"music", n:"Whatever the chalkboard says at Dick's Den", w:"Old North", d:"The jazz dive books music Thursday through Tuesday and runs pool on Mondays. The website is allergic to browsers, so the chalkboard and Instagram are the real schedule.", p:"Cheap", conf:"warn", url:"https://www.dicksden.com/"},

 {t:"7:00pm", cat:"trivia", n:"Jeopardy-style trivia at Oddfellows", w:"Short North", d:"General Knowledge hosts the Excesss game in the back. Free, and the bar pours till 2:30 if you want to argue the final answer.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"7:00pm", cat:"trivia", n:"Pub trivia at Seventh Son", w:"Italian Village", d:"Big Bad Brenden's room, looser format than Oddfellows. Taproom is open 3:30 to 11, so dinner-from-a-food-truck-then-trivia is the play.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"8:00pm", cat:"trivia", n:"The late seating at Library Bar", w:"Campus", d:"The 8pm start is the move if you're coming from dinner. Jeopardy format, hosted by MegAtron, same Excesss circuit.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},

 {t:"3:00–5:00pm", cat:"food", n:"$1.75 oysters at COLO", w:"North Market", d:"The oyster counter's weekday happy hour: half shells at $1.75 and $1 shrimp cocktail. The market closes at 5 sharp on Mondays, so this is a leave-work-early errand.", p:"$1.75", conf:"ok", url:"https://coloseafood.com/columbus-downtown-colo-market-and-oyster-bar-downtown-happy-hours-specials"},
 {t:"All day", cat:"food", n:"$10 burger at Arch City Tavern", w:"Short North", d:"House burger, ten dollars, open to close, every Monday. Half-off drafts and wine by the glass 3 to 6 stacks on top of it.", p:"$10", conf:"ok", url:"https://archcitytavern.com/"},
 {t:"4:00–6:00pm", cat:"food", n:"The Monday happy hour circuit", w:"Citywide", d:"Verified still running on Mondays: Marcella's half-price bar snacks 4–6, Cap City 4–6, Astra 4–6, Bar Italia 3–6, Dim Sum Asian Bistro 3–6. Monday is quietly the best happy hour night of the week; no crowds anywhere.", p:"Varies", conf:"ok", url:"https://marcellasrestaurant.com/locations-menus/marcellas-short-north/menus/happy-hour-menu/"},
 {t:"6:00–10:00pm", cat:"food", n:"Industry Night at The Little Grand", w:"Grandview Crossing", d:"Boilermakers, bartender-pick cocktails and two rotating shots (one sweet, one bitter) for the people who poured your weekend. Posted as every Monday, but the calendar updates lazily; confirm.", p:"SIN pricing", conf:"warn", url:"https://thelittlegrandmarket.com/event/industry-night/"},
 {t:"After 8pm", cat:"food", n:"Free duckpin at Pins Mechanical", w:"Downtown", d:"The widely reported Monday ritual: half-off select drinks and free duckpin after 8. The company site only promises location happy hours, so confirm at the desk; games are $7 before then.", p:"Free lanes", conf:"warn", url:"https://www.pinsbar.com/locations/columbus"},

 {t:"7:30–9:30pm", cat:"dance", n:"Manic Mondays salsa and bachata", w:"Worthington", d:"Salsamante's weekly double-header at the Crystal Ballroom: bachata at 7:30, salsa on 1 at 8:30. $15 a class or $20 for both, beginners genuinely welcome, free parking.", p:"$15–20", conf:"ok", url:"https://www.meetup.com/salsamante-dance-academy/"},
 {t:"6:00pm–late", cat:"dance", n:"Karaoke, four rooms deep", w:"Citywide", d:"The Excesss hosts run Monday at Mikey's Late Night Slice on 4th at 6, Cazuela's by campus at 7, Park St. Tavern at 9 and AWOL in Olde Towne at 10. Pick by how late you want to start.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},

 {t:"10:00am–8:00pm", cat:"culture", n:"Otherworld", w:"East side", d:"The museums take Mondays off; Otherworld takes Tuesdays instead. Forty-some rooms of walk-through sci-fi art, open till 8 tonight. $30, tickets online only.", p:"$30", conf:"ok", url:"https://www.otherworld.com/main/tickets-and-hours"},
 {t:"Until 11pm", cat:"culture", n:"The Book Loft's 32 rooms", w:"German Village", d:"Open 10am to 11pm every single day, which makes it the rare 9pm Monday plan that isn't a bar. Pair it with cream puffs at Schmidt's around the corner.", p:"Free to browse", conf:"ok", url:"https://www.bookloft.com/"},
 {t:"Showtimes vary", cat:"culture", n:"Pizza Monday at Studio 35", w:"Clintonville", d:"A $10 three-topping pizza every Monday at the 1938 single-screen with a craft beer wall. Check the week's grid; the programming swings from new releases to horror deep cuts.", p:"$10 pizza", conf:"ok", url:"https://studio35.com/home/"},
 {t:"Nightly", cat:"culture", n:"Gateway Film Center", w:"South Campus", d:"First-run and repertory programming daily, including the From Book to Film series through August. A movie is the correct Monday date and this is the best room in town for one.", p:"Varies", conf:"ok", url:"https://gatewayfilmcenter.org/"},
 {t:"6:00pm", cat:"culture", n:"Short North speed workout", w:"Short North", d:"Columbus Running Company's free coach-led Monday workout from the High Street store, running through mid-October. All paces, no signup drama.", p:"Free", conf:"ok", url:"https://columbusrunning.com/pages/free-weekly-runs-walks"},
 {t:"Evenings, in season", cat:"culture", n:"Silverball pinball league at Level One", w:"Crosswoods", d:"An open-to-anyone Monday league on the pinball row: eight weekly sessions a season, small entry fee that goes to prizes, results on Matchplay. Spectating with a beer is free.", p:"Small fee", conf:"ok", url:"https://level1bar.com/leagues/"},
 {t:"10:00am–5:00pm", cat:"culture", n:"Franklin Park Conservatory", w:"Franklin Park", d:"Open seven days including Mondays (one exception this run: closed Aug 24 for a staff event). Chihuly glass in the palm houses, admission around $25.", p:"~$25", conf:"ok", url:"https://www.fpconservatory.org/visit/"}
];

var MONTHLY = [
 {t:"2nd Mon", n:"Monday Munchies at Club Diversity", w:"Brewery District", d:"A potluck at the piano bar: bring an appetizer to share, 6 to 8, swap recipes, and the all-night well-drink specials run either way.", p:"Free", conf:"ok", url:"https://clubdiversity.com/entertainment-events/"},
 {t:"Monthly", n:"Bar Open Mic at the Funny Bone", w:"Easton", d:"Once a month the club opens its bar-room stage to anyone: doors 6, free workshop 6:30, show 7:30, free to watch. Dates float and are not always a Monday; the online signup sheet is the source of truth.", p:"Free", conf:"warn", url:"https://www.etix.com/ticket/v/31594/funny-bone-comedy-club-columbus"}
];

var COMEDY = [
 {t:"Mon 6:00–8:00pm", n:"Open mic at Antiques on High", w:"Brewery District", d:"The city's Monday comedy anchor: sign up at 5:45, show at 6 upstairs in the atrium, with $5 drafts and 50-cent wings all night. Newcomers explicitly welcome; Seventh Son's sour ales are downstairs after.", p:"Free", conf:"ok", url:"https://www.eventbrite.com/e/open-mic-comedy-night-tickets-1986275434293"},
 {t:"Mon 7:00pm sign-up", n:"Open mic at Cafe Bourbon Street", w:"Old North", d:"The scruffier, later room: comedy 7 to 11 most Mondays. Listings are third-hand and the bar doesn't really do websites, so treat it as a maybe and bring cash.", p:"Free", conf:"warn", url:"https://allevents.in/columbus/open-mic"},
 {t:"Dark", n:"The clubs themselves", w:"Easton · Olde Towne · Old North", d:"Funny Bone headliners run Thursday through Sunday, the Attic's crowd-work show is Tuesday and its mic Wednesday, and Hashtag and the Nest program weekends. Monday belongs to the bar mics.", p:"", conf:"warn", url:"https://columbus.funnybone.com/"},
 {t:"Some Mon", n:"One-off tour stops", w:"Various", d:"A few touring comedy and podcast one-nighters land on Mondays each season, usually at the Funny Bone. None surfaced for the next eight Mondays in this research pass, but the calendar is worth a monthly look.", p:"Varies", conf:"warn", url:"https://columbus.funnybone.com/shows/"}
];

var FUNNYBONE = [];

var CAL = [
 {m:"Aug",n:24,items:[
   {p:"heads up",t:"Franklin Park Conservatory is closed today",d:"A one-off staff event; normal daily hours resume Tuesday."},
   {p:"",t:"The SoapGirls at Rumba Cafe",d:"Listed by Songkick for 7:30pm but not on the club's own calendar. Call before you go."},
   {p:"free",t:"Open mic at Antiques on High",d:"6pm, the weekly anchor. Trivia at Oddfellows and Seventh Son at 7."}
 ]},
 {m:"Aug",n:31,items:[
   {p:"star",t:"Marty O'Reilly at Woodlands Tavern",d:"Solo, with Public Water Supply, 7pm, about $23. The rare proper Monday show."},
   {p:"free",t:"Karaoke at Park St. Tavern",d:"9pm in the Arena District, walkable from a downtown dinner."},
   {p:"",t:"Last Monday of meteorological summer",d:"Astra's rooftop is open till 11 if you want to mark it."}
 ]},
 {m:"Sep",n:7,items:[
   {p:"star",t:"Columbus Greek Festival, final day",d:"Labor Day hours 11am to 5pm at the Annunciation Cathedral downtown. Gyros, loukoumades, cathedral tours; $10 pass, kids under 12 free."},
   {p:"heads up",t:"Holiday Monday",d:"Assume trivia and the open mics take the night off; hosts post cancellations day-of. Otherworld keeps normal hours, 10 to 8."},
   {p:"plan ahead",t:"Oktoberfest is this Friday",d:"Ohio Expo Center, Sep 11 to 13, free admission."}
 ]},
 {m:"Sep",n:14,items:[
   {p:"star",t:"Charley Crockett at KEMBA Live!",d:"Age of the Ram Tour, indoors, doors 7pm. The biggest Monday booking of the fall."},
   {p:"",t:"Thomas Dollbaum at Rumba Cafe",d:"With Spitcurl, 7:30pm, $19."}
 ]},
 {m:"Sep",n:21,items:[
   {p:"star",t:"Blue Jackets preseason opener vs. Detroit",d:"7pm at Nationwide Arena. First hockey of the fall, and preseason seats go cheap."},
   {p:"free",t:"Open mic at Antiques on High",d:"6pm; the Brewery District to the arena is a ten-minute hop, so you can do both."}
 ]},
 {m:"Sep",n:28,items:[
   {p:"star",t:"Diva Bleach at Rumba Cafe",d:"7:30pm, $19."},
   {p:"",t:"Culture Wars at A&R Music Bar",d:"8pm per Ticketmaster; it hadn't hit PromoWest's own page yet, so double-check."}
 ]},
 {m:"Oct",n:5,items:[
   {p:"quiet one",t:"Nothing big is booked",d:"The emptiest Monday of the fall so far. Default Monday: mic at 6, trivia at 7, free duckpin after 8."},
   {p:"plan ahead",t:"Weezer at Nationwide Arena tomorrow",d:"Reported for Tuesday Oct 6; tonight is the night to sort tickets."}
 ]},
 {m:"Oct",n:12,items:[
   {p:"star",t:"Bella White at Rumba Cafe",d:"7:30pm, $38. Bluegrass royalty in a 150-cap room; do not dawdle on tickets."},
   {p:"",t:"Restraining Order at Ace of Cups",d:"Per Songkick; the bar only opens Mondays when there's a show, so confirm before heading up High."},
   {p:"heads up",t:"Columbus Day",d:"Banks and mail pause; everything on this page runs its normal Monday."}
 ]}
];

window.PAGE = {
  day: "Monday",
  researched: "August 20, 2026",
  calRange: "Aug 24 – Oct 12",
  comedyEyebrow: "Mic night, not club night",
  comedyIntro: "Monday is when Columbus comedy works out new material. Every club in town goes dark, so the scene decamps to bar mics, and Antiques on High at 6pm is the dependable one: free, early, cheap drafts, and you're home by 9 or downstairs in the sour bar by 8:15. If you want a headliner and a two-drink minimum, that's a Thursday-through-Sunday purchase.",
  headlinersTitle: "Monday headliners at the Funny Bone",
  headlinersNote: "There is no weekly Monday headliner slot; the club runs Thursday through Sunday. Occasional one-off tour stops land on Mondays, so check the club calendar directly.",
  sources: [
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["Antiques on High open mic","https://www.eventbrite.com/e/open-mic-comedy-night-tickets-1986275434293"],
    ["PromoWest / KEMBA Live!","https://promowestlive.com/columbus/kemba-live"],
    ["Rumba Cafe","https://www.columbusrumbacafe.com/calendar/"],
    ["Woodlands Tavern","https://www.woodlandsproductions.com/"],
    ["Nationwide Arena","https://www.nationwidearena.com/events"],
    ["Columbus Greek Festival","https://www.columbusgreekfestival.com/"],
    ["COLO Market & Oyster Bar","https://coloseafood.com/"],
    ["Arch City Tavern","https://archcitytavern.com/"],
    ["Studio 35","https://studio35.com/home/"],
    ["Eldorado's","https://eldoradosbar.com/calendar/"],
    ["Club Diversity","https://clubdiversity.com/entertainment-events/"],
    ["Otherworld","https://www.otherworld.com/main/tickets-and-hours"],
    ["Franklin Park Conservatory","https://www.fpconservatory.org/visit/"],
    ["Columbus Running Company","https://columbusrunning.com/pages/free-weekly-runs-walks"],
    ["Level One Bar + Arcade","https://level1bar.com/leagues/"],
    ["Salsamante Dance Academy","https://www.meetup.com/salsamante-dance-academy/"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
