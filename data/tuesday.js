/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, riverfront patio pointed at the skyline. Crudo, wagyu skewers, and the hummus everyone writes about. Lunch runs Tuesdays too, and the room is quieter midweek, which is the point.", hours:"Tue 11am-2pm, 5-10pm", conf:"ok", res:"Book ahead", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe.", hours:"Tue 4-10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened after eight dark years, now run by Wolf's Ridge. Blonde French onion soup with raclette, sticky toffee pudding, and $2 off every draft and glass of wine from 4 to 6.", hours:"Tue 11am-10pm, HH 4-6", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river, probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib. The kitchen closes at 9 on a Tuesday and the happy hour does not start until Wednesday.", hours:"Tue 4-9pm", conf:"ok", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Handmade pasta, crispy chicken limone, a lasagna built to split, and the longest happy hour on this page at three hours.", hours:"Tue 11am-10pm, HH 3-6", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space: traditional technique, contemporary plating, and a 3pm open for the early crowd.", hours:"Tue 3-10pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"House of Creole", hood:"Short North", kind:"dinner", opened:"Jul 2025", d:"Shrimp and grits, blackened salmon, cornbread, and a cocktail list that isn't shy. Southern service in the middle of High Street, open at 3 if you want an early table.", hours:"Tue 3-9:30pm", conf:"ok", res:"Recommended", url:"https://houseofcreole.com/locations"},
 {n:"Tabla", hood:"Northeast", kind:"dinner", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road, and live Bollywood music some nights. The soft launch is over: full lunch and dinner service is posted now, Tuesday through Sunday.", hours:"Tue 11am-2:30pm, 4:30-10pm", conf:"ok", res:"Call ahead", url:"https://www.tablacuisine.com/locations/columbus/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside, and half-price cocktails, wine, drafts, starters and flatbreads from 4 to 6. More party than hush, even on a school night.", hours:"Tue 4-11pm, HH 4-6", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar with no screens and no playlists: everything comes off vinyl and cassette, and bringing a record in gets you a drink. A slow Tuesday is exactly what it was built for.", hours:"Tue 5pm-midnight", conf:"ok", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list. Palomino Coffee runs the room by day, and the 3pm open makes it a fine first stop.", hours:"Tue 3-11pm", conf:"ok", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"K Vida Modern Mexican Bar", hood:"Italian Village", kind:"drinks", opened:"Sep 2026", d:"Modern Mexican plus Cuban, Venezuelan, Colombian, Peruvian and Puerto Rican plates in the old Zaftig brewery space on 5th. The newest room on this page, and it runs all day Tuesday.", hours:"Tue 11am-11pm", conf:"ok", res:"Walk in", url:"https://www.kvidabar.com/"},
 {n:"Sugar Restaurant & Bar", hood:"Short North", kind:"drinks", opened:"Aug 2026", d:"Latin, Spanish and Mediterranean small plates and a serious cocktail list in the cavernous old Howl at the Moon space on Park Street. Open to midnight when most of the block has given up.", hours:"Tue 11am-midnight", conf:"ok", res:"Walk in", url:"https://sugarcolumbus.com"},
 {n:"Huli Huli Tiki Lounge", hood:"Powell", kind:"drinks", opened:"2025", d:"Hand-carved wood, custom Moai and drinks that arrive on fire. Note the split: the Powell original opens Tuesdays, and the downtown room on East Mound is closed until Wednesday.", hours:"Tue 4:30-9:30pm", conf:"ok", res:"No reservations", url:"https://www.hulihulitiki.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room. Handy before or after the Dick's Den jam up the street.", hours:"Hours unposted", conf:"warn", res:"Not required", url:"https://www.proofbyalibi.com/"},
 {n:"The Daily Etcetera", hood:"German Village", kind:"drinks", opened:"Jun 2026", d:"Five separate patio spaces, which nothing else in German Village can say. Craft beer plus an actual cocktail list now. The site says Now Open but still posts its hours as an unreadable image.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://thedailyetc.com/"},

 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space, with craft cocktails and the longest posted hours on this page. The reliable answer when half the neighborhood is dark on a Tuesday.", hours:"Tue 11am-10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong-style dim sum, 55 items, all of it meant to be pushed across the table at each other. Kitchen closes at 9, so this is an early dinner.", hours:"Tue 11am-9pm", conf:"ok", res:"Walk in", url:"https://www.dimsumab.com/"},
 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"The neighborhood's first ramen shop: tonkotsu with black garlic oil, spicy miso, and a real vegan bowl. Open seven days, which almost nothing around it is.", hours:"Tue 11am-9pm", conf:"ok", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024-25", d:"Named a top-ten brewery in the country this year. Specializes in 3.5 to 5% beer, the correct move on a weeknight, with happy hour 4 to 6 and free trivia at 7.", hours:"Tue 4-10pm, HH 4-6", conf:"ok", res:"Walk in", url:"https://www.honestfriendbrewing.com/info-and-taplist"},
 {n:"The Whispering Page", hood:"Old Worthington", kind:"casual", opened:"Sep 2026", d:"Two floors of new books with a cafe bar running Zaftig and Wolf's Ridge drafts, wine and Florin coffee. A date that costs eleven dollars and ends with something to read.", hours:"Tue 10am-8pm", conf:"ok", res:"Walk in", url:"https://whisperingpagebookstore.com"},
 {n:"The Walrus", hood:"Downtown", kind:"casual", opened:"Local since 2011", d:"Downtown's everything bar: thirty drafts, pool, a bustling patio, double-header trivia at 7 and 8, and a midnight close on a weeknight.", hours:"Tue 11am-midnight", conf:"ok", res:"Walk in", url:"https://www.thewalruscolumbus.com/"},

 {n:"Coldbar", hood:"Italian Village", kind:"soon", opened:"Still not open", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla. The August target slipped and the site still says coming soon.", hours:"Not open yet", conf:"warn", res:", ", url:"https://www.coldbarcbus.com/"},
 {n:"Canario", hood:"Short North", kind:"soon", opened:"Announced Sep 2026", d:"Forty-two seats near Goodale Park from Marco Piazza and chef Jeremy Nelson, running an eight-course tasting menu alongside a la carte. No opening timeline has been set.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/supper-club-chef-bringing-upscale-eatery-to-the-short-north"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch, and the posted future hours start at Tuesday.", hours:"Not open yet", conf:"warn", res:", ", url:"https://eatmedley.com"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Memberships out now", d:"Steak-forward dining in a restored 1924 general store, with a members-only bar called The Ember Room directly underneath. Memberships were released this month, the room itself is reported for December.", hours:"Not open yet", conf:"warn", res:", ", url:"https://www.fourteenandember.com/"}
];

var WEEKLY = [
 {t:"9:00pm", cat:"music", n:"Bluegrass jam at Dick's Den", w:"Old North", d:"The longest-running Tuesday ritual in town: an open jam in a half-century-old dive, sometimes ten pickers on the tiny stage at once. Their site failed to load again this week, so the start time is tradition rather than confirmation.", p:"No cover", conf:"warn", url:"https://www.dicksden.com/"},
 {t:"7:00pm", cat:"music", n:"Open mic at The Summit Music Hall", w:"Old North", d:"A real stage, a real PA and a low bar to getting on it. On the venue's own calendar every Tuesday this fall, which is more than most open mics in town can say.", p:"Check listing", conf:"ok", url:"https://thesummitcolumbus.com/all-events/"},

 {t:"All day", cat:"food", n:"$4 margarita Tuesday at Condado", w:"Short North + around town", d:"Worth correcting: the Tuesday deal is drinks, not tacos. Lucy's Fire, Blue Dream and Rango Tango margaritas go to $4 all day. The three-taco offer is their Monday and Wednesday play.", p:"$4", conf:"ok", url:"https://www.condadotacos.com/deals"},
 {t:"All day & night", cat:"food", n:"Taco Tuesday at Agave & Rye", w:"Easton", d:"Epic tacos at $4 to $5.50, half-off OG margaritas and Bourbon Peach Punch, $2.50 domestic cans, $4.75 chips and queso. Dine-in only, and it runs until close.", p:"$4-5.50", conf:"ok", url:"https://www.agaveandrye.com/specials"},
 {t:"All day", cat:"food", n:"$2.22 tacos at Local Cantina", w:"A dozen locations", d:"House tacos at $2.22 and top-shelf at $4, dine-in, all day, with happy hour stacked on from 3 to 6. The Canal Winchester room runs trivia at 7 if you want to stay put.", p:"$2.22", conf:"ok", url:"https://www.localcantina.com/events"},
 {t:"All day", cat:"food", n:"Taco trios at PBR Cowboy Bar", w:"Easton", d:"$6 taco trios, $5 house and frozen margaritas, $5 Dos Equis under the neon bull. The line dancing waits for Thursday and the doors close at 9, so make it an early one.", p:"$6", conf:"ok", url:"https://pbrcowboybar.com/columbus/"},
 {t:"4:00-6:00pm", cat:"food", n:"Happy hour at The Pearl", w:"Short North", d:"$3 oysters raw, baked or fried, plus half off snacks, starters, pub burgers and a page of drinks. There is no Tuesday-only program here, just the best two hours on the block.", p:"$3 oysters", conf:"ok", url:"https://thepearlrestaurant.com/locations-menus/short-north/events/"},
 {t:"3:00-6:00pm", cat:"food", n:"The Tuesday happy hour circuit", w:"Citywide", d:"All confirmed on the venues' own sites this week: Bar Italia 3 to 6, then Astra, Honest Friend, The Pearl and Wolf's Ridge at the Worthington Inn from 4 to 6. Start early and the night costs half.", p:"Varies", conf:"ok", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {t:"All night", cat:"food", n:"Dark on a Tuesday", w:"Know before you drive", d:"Confirmed closed Tuesdays on their own sites this week: Metsi's, Mezcla, The Shapeshifter, Welcome to the Farm, the downtown Huli Huli and Otherworld. isla posts no Tuesday seatings on Tock either.", p:"", conf:"ok", url:"https://www.metsisitalian.com/"},

 {t:"6:30-10:00pm", cat:"trivia", n:"Trivia and a Movie at Land-Grant", w:"Franklinton", d:"Trivia at 6:30 in the beer garden, themed to the movie that screens right after, weather permitting. September 29 is the only Tuesday left on their calendar, so treat it as the season finale.", p:"Free", conf:"ok", url:"https://landgrantbrewing.com/event/tuesday-trivia-and-a-movie/"},
 {t:"7:00pm", cat:"trivia", n:"Trivia Tuesday at Union Cafe", w:"Short North", d:"Hosted by drag performer Blonde Vanity: trivia, games, prizes and drink specials in one loud room. The most entertaining question-reading in the city.", p:"", conf:"ok", url:"https://www.unioncafe.com/events"},
 {t:"7:00-9:00pm", cat:"trivia", n:"Trivia with Jessi at Honest Friend", w:"South Side", d:"Renamed from Summer League for the fall, same host and same free admission, in a taproom just named among the best in the country. Low-point beer means you can still play the late rounds.", p:"Free", conf:"ok", url:"https://www.honestfriendbrewing.com/events-calendar"},
 {t:"7:00 & 8:00pm", cat:"trivia", n:"Double-header trivia at The Walrus", w:"Downtown", d:"Two rounds a night with the kitchen open the whole time and thirty drafts behind the bar. Downtown's easiest full Tuesday.", p:"Free", conf:"ok", url:"https://www.thewalruscolumbus.com/"},
 {t:"7:00-8:00pm", cat:"trivia", n:"The Excesss Tuesday circuit", w:"Nine venues", d:"Both Badas, Budd Dairy, Campfire in Westerville, Fenders at Polaris, India Oak Grill and Ledo's at 7, music bingo at Seek-No-Further in Granville, and the Blue Danube closing it out at 8.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"7:00pm", cat:"trivia", n:"WTF Music Trivia", w:"Dublin + South Side", d:"Music-only trivia, two rooms, same night: Flannagan's in Dublin and Rumors on Parsons. Their Land-Grant game is Thursdays, not tonight.", p:"Free", conf:"ok", url:"https://wtfmusictrivia.com/play"},

 {t:"7:00pm-midnight", cat:"dance", n:"Line dancing at Black Swan", w:"Hilliard", d:"Lessons from 7 to 9, then all-request dancing until midnight, organized by the Columbus In Line Dance Collective. The serious room: boots optional, willingness not. No cover is posted, so bring a few dollars.", p:"", conf:"ok", url:"https://columbuslinedance.com/"},
 {t:"9:00pm", cat:"dance", n:"Karaoke at Oddfellow's", w:"Short North", d:"The only Excesss karaoke night on the Tuesday map now, with Doug Dimmadome hosting and requests from your phone. Starts late enough to follow trivia from anywhere in town.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},

 {t:"6:30pm", cat:"culture", n:"Pub runs in Clintonville and Pickerington", w:"Two Combustion taprooms", d:"Three or four easy miles as a group, then a pint. The Tuesday speed workouts in Westerville and Delaware run at 6 but end in mid-October, while the pub runs carry no seasonal caveat.", p:"Free", conf:"ok", url:"https://columbusrunning.com/pages/free-weekly-runs-walks"},
 {t:"All day", cat:"culture", n:"Discount Tuesday at the multiplexes", w:"Citywide", d:"AMC now runs 50% off the adult evening ticket for its free Stubs tier on Tuesdays and Wednesdays, standard formats only, and Marcus charges $6 for members. Neither chain's site would answer this week, so check yours.", p:"Varies", conf:"warn", url:"https://www.amctheatres.com/discount-tuesdays"}
];

var MONTHLY = [
 {t:"Select Tue", n:"Film and talks at the Wexner Center", w:"OSU campus", d:"The Wex programs more Tuesdays than any other room in town: Lynne Sachs in person September 29, Wynton Marsalis and the JLCO October 6, American Dream October 13, Nadja October 20, and free talks November 10 and 17.", p:"Free to ticketed", conf:"ok", url:"https://wexarts.org/calendar"},
 {t:"2nd Tue", n:"Columbus Blues Alliance jam", w:"Northland", d:"Open blues jam with the Harmonic Barbarians at The Crazee Mule on Cleveland Ave, 8pm, second Tuesdays. Players welcome, listeners too. October 13 and November 10 are not yet on their dated calendar, so call first.", p:"", conf:"warn", url:"https://columbusblues.com/events-calendar/"},
 {t:"Seasonal", n:"Dime-A-Dog Night is done for the year", w:"Arena District", d:"The Clippers' ten-cent hot dog tradition runs Tuesday home games only, and the home season ended September 20. Worth knowing now so you plan around it: it returns with baseball in the spring.", p:"10 cents", conf:"warn", url:"https://www.milb.com/columbus/tickets/dime-a-dog-night"}
];

var COMEDY = [
 {t:"Tue 7:00pm", n:"Tuesday headliners at the Funny Bone", w:"Easton · 21+", d:"The free Tuesday showcase is gone. Tuesdays at Easton are now ticketed one-nighters, from Hannibal Buress at $42 to a free bar open mic, with several fall Tuesdays dark. Full schedule below.", p:"Free-$52", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"On pause", n:"Twofer Tuesday, The Attic Comedy Club", w:"Downtown, at The Walrus", d:"The free crowd-work show is paused while the club's Oak Street room is repaired after storm damage. The Attic is still staging its ticketed weekend shows at The Walrus, and says Twofer returns once it is home on Oak.", p:"Free when it returns", conf:"ok", url:"https://theatticcomedyclub.com/twofer-tuesday-columbus"},
 {t:"Tue 7:30pm", n:"Bar Open Mic Night at the Funny Bone", w:"Easton · 21+", d:"The one genuinely free night at the club this fall: doors at 6, show at 7:30, October 13 only. Go if you want to see the ten minutes before someone is any good.", p:"Free", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Tue 6:30pm", n:"DSACO Improv Comedy For All!", w:"Easton · 21+", d:"A benefit improv night for the Down Syndrome Association of Central Ohio, November 17, doors at 5 and an early 6:30 curtain. Twenty dollars and the cheapest ticket on the Tuesday calendar.", p:"$20", conf:"ok", url:"https://columbus.funnybone.com/calendar/"}
];

var FUNNYBONE = [
 ["Sep 29","Hannibal Buress","$42-52"],["Oct 6","Gabby Bryan","$25-30"],["Oct 13","Bar Open Mic Night","Free"],
 ["Oct 20","Private event","Not public"],["Oct 27","Dark","-"],["Nov 3","Dark","-"],
 ["Nov 10","Dark","-"],["Nov 17","DSACO Improv Comedy For All!","$20"],["Dec 1","Don McMillan's Holiday Office Party","$37-58"]
];

var CAL = [
 {m:"Sep",n:29,items:[
   {p:"star",t:"Hannibal Buress at the Funny Bone",d:"Doors 5:30, show 7, $42 to $52, 21+. The biggest name the club has put on a Tuesday this fall."},
   {p:"",t:"Jim Henson's Labyrinth: In Concert",d:"KEMBA Live!, 7pm. The film with its score played live, for the 40th anniversary."},
   {p:"last call",t:"Trivia and a Movie at Land-Grant",d:"6:30 in the beer garden, weather permitting. The last Tuesday date on their calendar this year."},
   {p:"",t:"Chelsea Wolfe at The Bluestone",d:"THE DARK World Tour with Jonathan Hulten, 7:30pm."},
   {p:"",t:"Silent Movie Day: Faust at Gateway Film Center",d:"Murnau's 1926 Faust at 7pm. Also tonight: Lynne Sachs in person at the Wexner Center."}
 ]},
 {m:"Oct",n:6,items:[
   {p:"star",t:"Weezer at Nationwide Arena",d:"The Gathering, 7pm. The one arena show on the Tuesday calendar."},
   {p:"opening night",t:"Death Becomes Her at the Ohio Theatre",d:"Broadway in Columbus, 7:30, running through October 11."},
   {p:"",t:"Wynton Marsalis and the Jazz at Lincoln Center Orchestra",d:"Wexner Center, 7pm. A free ASCO screening runs at 5 in the same building."},
   {p:"",t:"The Format at Newport Music Hall",d:"With The Get Up Kids, doors 6:30."},
   {p:"",t:"Gabby Bryan at the Funny Bone",d:"7pm, $25 to $30. Freya Skye plays KEMBA Live! outdoors the same night."}
 ]},
 {m:"Oct",n:13,items:[
   {p:"star",t:"Blue Jackets vs. Florida",d:"Nationwide Arena, early 6:15 puck drop for the NHL's Frozen Frenzy night."},
   {p:"free",t:"Bar Open Mic Night at the Funny Bone",d:"Doors 6, show 7:30, 21+. The only free night at the club this fall."},
   {p:"",t:"Rebecca Black at Newport Music Hall",d:"Exhibitionism with Blu DeTiger, doors 7."},
   {p:"free",t:"Apiary Gatherings at Franklin Park Conservatory",d:"Free, though the start time is not posted. Eyehategod plays Ace of Cups the same night."},
   {p:"",t:"Tanner Dane at Woodlands Tavern",d:"7pm, $19.73, all ages."}
 ]},
 {m:"Oct",n:20,items:[
   {p:"star",t:"Blue Jackets vs. Toronto",d:"7pm at Nationwide Arena. The Leafs always fill the building."},
   {p:"",t:"Vitamin String Quartet and Girl Named Tom",d:"Southern Theatre, 7:30. The Crazy Ordinary World Tour."},
   {p:"",t:"Dogwood Tales at Natalie's Grandview",d:"With Hello Emerson solo, doors 6:30, show 7:30, $15 advance. The only Tuesday booking Natalie's has this fall."},
   {p:"heads up",t:"The Funny Bone is a private event tonight",d:"It shows on the public calendar but is not a public show. Ohio State men's soccer hosts Indiana at 7 instead."}
 ]},
 {m:"Oct",n:27,items:[
   {p:"star",t:"The quiet Tuesday",d:"Nationwide, CAPA, all four PromoWest rooms, the Funny Bone, Woodlands and Natalie's are confirmed dark. The weekly trivia and line dancing carry the night."},
   {p:"",t:"The Number Twelve Looks Like You at Ace of Cups",d:"The only confirmed public show in town tonight. Time not posted, so check the bar."},
   {p:"heads up",t:"Halloween season does not run Tuesdays",d:"Boo at the Zoo is weekends only, Pumpkins Aglow skips Tuesdays, and Otherworld and COSI are both closed."}
 ]},
 {m:"Nov",n:3,items:[
   {p:"star",t:"Maybe Happy Ending opens at the Ohio Theatre",d:"Broadway in Columbus, 7:30, running through November 8."},
   {p:"",t:"Blue Jackets vs. Colorado",d:"7pm at Nationwide Arena. Two big downtown draws on the same night, so park early."},
   {p:"heads up",t:"It is Election Day in Ohio",d:"Expect a slower first half of the evening and watch parties that are not on any venue calendar yet."},
   {p:"",t:"Oso Oso at A&R Music Bar",d:"With Liquid Mike and bugsy. Abbie Gamboa plays Newport the same night."}
 ]},
 {m:"Nov",n:10,items:[
   {p:"star",t:"Blade Runner Live at the Palace Theatre",d:"7:30. The film with the Vangelis score performed live by The Avex Ensemble."},
   {p:"",t:"Blue Jackets vs. Florida",d:"7:30 at Nationwide Arena, on ESPN+."},
   {p:"free",t:"Performance + Technology book launch at the Wexner Center",d:"5pm with Maaike Bleeker and Norah Zuniga Shaw, free tickets, reception after."},
   {p:"",t:"Midwinter at Ace of Cups",d:"Haunt Me Forever Tour with What Lies Below and COLDSTATE."}
 ]},
 {m:"Nov",n:17,items:[
   {p:"star",t:"DSACO Improv Comedy For All! at the Funny Bone",d:"Doors 5, show 6:30, $20. A benefit night and the cheapest ticket of the run."},
   {p:"",t:"Ohio State volleyball vs. Maryland",d:"Senior Night at the Covelli Center, 7pm."},
   {p:"free",t:"Dan Tepfer at the Wexner Center",d:"From Bach to Natural Machines, 4pm, free tickets. A pianist on algorithms as co-composers."},
   {p:"plan ahead",t:"Wildlights opens Friday",d:"The Columbus Zoo runs it November 20 through January 3, included with zoo admission."}
 ]}
];

window.PAGE = {
  day: "Tuesday",
  researched: "September 24, 2026",
  calRange: "Sep 29 - Nov 17",
  comedyEyebrow: "The free night just got scarcer",
  comedyIntro: "Two things changed since the last look, and both cut against Tuesday. The Attic's Twofer Tuesday, the free crowd-work show with 2-for-1 wells, is on pause while the club's Oak Street room is repaired after storm damage; the club is still running ticketed weekend shows at The Walrus and says Twofer returns once it is home. And the Funny Bone's free Tuesday showcase is gone, replaced by ticketed one-nighters that range from Hannibal Buress at $42 to a genuinely free bar open mic on October 13. Three fall Tuesdays at the club are dark entirely, so check the table before you drive to Easton.",
  headlinersTitle: "Tuesdays at the Funny Bone",
  headlinersNote: "Easton, 21+, doors 5:30 and show at 7 unless noted. Buy from the club directly. October 20 is a private event, and October 27, November 3 and November 10 have no Tuesday show at all.",
  sources: [
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["The Attic Comedy Club","https://theatticcomedyclub.com/twofer-tuesday-columbus"],
    ["Nationwide Arena","https://www.nationwidearena.com/events"],
    ["Columbus Blue Jackets","https://www.nhl.com/bluejackets/schedule"],
    ["PromoWest Productions","https://promowestlive.com/columbus"],
    ["CAPA","https://www.capa.com/events/"],
    ["Broadway in Columbus","https://www.capa.com/events/broadway-in-columbus/"],
    ["Wexner Center","https://wexarts.org/calendar"],
    ["Ace of Cups","https://aceofcupsbar.com/"],
    ["Woodlands Tavern","https://woodlandsproductions.com/"],
    ["Natalie's Grandview","https://nataliesgrandview.com/events/"],
    ["The Summit Music Hall","https://thesummitcolumbus.com/all-events/"],
    ["Gateway Film Center","https://gatewayfilmcenter.org/"],
    ["Ohio State Buckeyes","https://ohiostatebuckeyes.com/"],
    ["Franklin Park Conservatory","https://www.fpconservatory.org/events"],
    ["Columbus Zoo","https://www.columbuszoo.org/"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["WTF Music Trivia","https://wtfmusictrivia.com/play"],
    ["Land-Grant Brewing","https://landgrantbrewing.com/events/"],
    ["Union Cafe","https://www.unioncafe.com/events"],
    ["Honest Friend Brewing","https://www.honestfriendbrewing.com/events-calendar"],
    ["The Walrus","https://www.thewalruscolumbus.com/"],
    ["Columbus In Line Dance Collective","https://columbuslinedance.com/"],
    ["Columbus Running Company","https://columbusrunning.com/pages/free-weekly-runs-walks"],
    ["Condado Tacos","https://www.condadotacos.com/deals"],
    ["Agave & Rye","https://www.agaveandrye.com/specials"],
    ["Local Cantina","https://www.localcantina.com/events"],
    ["PBR Cowboy Bar","https://pbrcowboybar.com/columbus/"],
    ["The Pearl","https://thepearlrestaurant.com/locations-menus/short-north/events/"],
    ["614NOW openings","https://614now.com/category/food-drink/openings"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
