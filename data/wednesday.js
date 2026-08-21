/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, with a riverfront patio pointed at the skyline. Crudo, wagyu skewers, and the hummus everyone writes about.", hours:"Wed 5–10pm", conf:"ok", res:"Book ahead", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe.", hours:"Wed 4–10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Metsi's Wood-Fired Italian", hood:"Italian Village", kind:"dinner", opened:"Jun 2025", d:"From the Chapman's Eat Market and Ginger Rabbit team. Two floors around a wood hearth driving the pastas and grilled meats.", hours:"Wed 4–9pm", conf:"ok", res:"Walk-ins ok", url:"https://www.metsisitalian.com/"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened after eight dark years, now run by Wolf's Ridge. Blonde French onion soup with raclette, sirloin filet over sunchoke puree, sticky toffee pudding.", hours:"Wed 11am–10pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river, probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib.", hours:"Hours not posted; reserve ahead", conf:"warn", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"isla", hood:"Merion Village", kind:"dinner", opened:"Jul 2025", d:"Eight courses at a shared table ($150pp) or nine at the chef's counter over the kitchen ($200pp). The most ambitious new room in the city; save it for an anniversary.", hours:"Check the Tock calendar", conf:"warn", res:"Prepaid, Tock", url:"https://www.exploretock.com/isla--columbus/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Handmade pasta, crispy chicken limone, short rib garganelli, a lasagna built to split.", hours:"Wed 11am–10pm", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"House of Creole", hood:"Short North", kind:"dinner", opened:"Jul 2025", d:"Shrimp and grits, blackened salmon, cornbread, and a cocktail list that isn't shy. Southern service in the middle of High Street.", hours:"Wed 3–9:30pm", conf:"ok", res:"Recommended", url:"https://houseofcreole.com/locations"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space: traditional technique, contemporary plating.", hours:"Wed 3–10pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"Tabla", hood:"Northeast", kind:"dinner", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road, and live Bollywood music some nights. The site currently lists the Columbus room as soft launching.", hours:"Soft launch; hours unposted", conf:"warn", res:", ", url:"https://www.tablacuisine.com/locations/"},
 {n:"Mezcla", hood:"Italian Village", kind:"dinner", opened:"Reopened Jun 2026", d:"Latin small plates and loud cocktails in a room the neighborhood crowdfunded back open after a van drove into it. Named a best new restaurant of 2026.", hours:"Wed 4–10pm", conf:"ok", res:"Reservations online", url:"https://www.mezclacocina.com/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside, and a cocktail list that photographs well. Happy hour 4–6 on a Wednesday is the calm version.", hours:"Wed 4–11pm", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar with no screens and no playlists: everything comes off vinyl and cassette, and bringing a record in gets you a drink. A quiet-loud Wednesday done right.", hours:"Wed 5pm–12am", conf:"ok", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"The Shapeshifter", hood:"Franklinton", kind:"drinks", opened:"Jun 2026", d:"A cocktail bar whose entire theme, decor and menu together, changes on a rotation. Which makes it the rare bar that's a different date every few months.", hours:"Wed 5–11pm", conf:"ok", res:"Walk in", url:"https://www.shapeshiftercolumbus.com/"},
 {n:"Huli Huli Tiki Lounge", hood:"Downtown", kind:"drinks", opened:"May 2026", d:"Downtown's first tiki bar since 2019: hand-carved wood, custom Moai, about twelve bar seats. Small and immersive, so go early. Free street parking after 5:30.", hours:"Wed 4:30–10:30pm reported", conf:"warn", res:"No reservations", url:"https://www.hulihulipowell.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room.", hours:"Daily 4pm–midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},
 {n:"Lani Rooftop Lounge", hood:"Powell", kind:"drinks", opened:"Apr 2026", d:"Powell's first rooftop: fire pit, harissa cauliflower, burrata flatbread. Worth the drive when you want a night that isn't the Short North.", hours:"Wed 4–10pm", conf:"ok", res:"OpenTable", url:"https://lanirooftop.com/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list. Palomino Coffee runs out of the same room during the day.", hours:"Wed 3–11pm", conf:"ok", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"The Daily Etcetera", hood:"German Village", kind:"drinks", opened:"Jun 2026", d:"Five separate patio spaces, which nothing else in German Village can say. Craft beer plus an actual cocktail list now.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://thedailygrowler.com"},
 {n:"Coldbar", hood:"Italian Village", kind:"drinks", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla.", hours:"Confirm it has actually opened", conf:"warn", res:", ", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/04/29/try-cold-tapas-and-craft-cocktails-at-coldbar-opening-in-august/89855560007/"},

 {n:"Mid City Garage", hood:"German Village", kind:"casual", opened:"2025", d:"Roll-up doors, patio lights, thin-crust pizza and a full cocktail bar that stays open past the kitchen. Unpretentious on purpose.", hours:"Wed 4–10pm", conf:"ok", res:"Walk in", url:"https://www.midcitygarage.com/"},
 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"The neighborhood's first ramen shop: tonkotsu with black garlic oil, spicy miso, and a real vegan bowl.", hours:"Wed 11am–9pm", conf:"ok", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space, with craft cocktails and the longest hours on this page: the reliable answer when nothing else is open.", hours:"Wed 11am–10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong-style dim sum, 55 items, all of it meant to be pushed across the table at each other. Happy hour 3–6.", hours:"Wed hours unposted; HH 3–6pm", conf:"warn", res:", ", url:"https://www.dimsumab.com/"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024–25", d:"Named a top-ten brewery in the country this year. Specializes in 3.5–5% beer, which is the correct move on a weeknight. Community art on the walls, happy hour 4–6.", hours:"Wed 4–10pm", conf:"ok", res:"Walk in", url:"https://www.honestfriendbrewing.com/"},

 {n:"Welcome to the Farm", hood:"Short North", kind:"soon", opened:"Opens Aug 22, 2026", d:"Chase Rice's country bar under Good Night John Boy: rotating country DJs, live music, a deep bourbon list. Opens two days after this page's research date, so it'll be brand new by your first Wednesday.", hours:"Hours not yet posted", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy directly underneath. Memberships open in September.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"5:00–6:30pm", cat:"music", n:"Blues & Beyond at Natalie's Grandview", w:"Grandview", d:"The Columbus Blues Alliance books a different act every single Wednesday for the early set: free, tips encouraged, dinner service running through it. The ticketed 7:30 show in the Music Hall rotates weekly too.", p:"Free", conf:"ok", url:"https://nataliesgrandview.com/events/"},
 {t:"8:00–11:00pm", cat:"music", n:"New Standard Soul Jam at Rambling House", w:"Old North", d:"An open soul jam in a music bar that pours its own craft soda alongside the beer. Free, and the room is small enough that the jam is the whole night.", p:"Free", conf:"ok", url:"https://www.ramblinghousemusic.com/"},
 {t:"7:00pm", cat:"music", n:"Karaoke at Club Diversity", w:"Brewery District", d:"Singing in a Victorian house turned piano bar, with Pinnacle and domestic specials running alongside. Gentler than the 10pm rooms, and you can actually hold a conversation between songs.", p:"Specials", conf:"ok", url:"https://clubdiversity.com/entertainment-events/"},

 {t:"All night", cat:"food", n:"Burger Night at The Pearl", w:"Short North", d:"A different chef-designed burger every Wednesday with half-off draft beer; the week's build posts to their Instagram. Happy hour 4–6 stacks $3 oysters and half-off snacks on top.", p:"1/2 off drafts", conf:"ok", url:"https://thepearlrestaurant.com/locations-menus/short-north/events/"},
 {t:"All day", cat:"food", n:"Wine Wednesday at Marcella's Polaris", w:"Polaris", d:"Half off bottles under $100, per the restaurant's own feed. Worth a call before you drive north for it.", p:"1/2 off bottles", conf:"warn", url:"https://www.marcellasrestaurant.com/"},
 {t:"4:00–6:00pm", cat:"food", n:"Hump-day happy hours", w:"Citywide", d:"Astra's rooftop and Honest Friend's taproom both run 4–6, The Pearl halves snacks, burgers and select drinks, and Dim Sum Asian Bistro and Local Cantina start at 3. Mid-week's quiet advantage: you'll actually get a seat.", p:"1/2 off", conf:"ok", url:"https://astracolumbus.com/"},

 {t:"7:00pm", cat:"trivia", n:"The Excesss Wednesday circuit", w:"Nine venues", d:"One host network, nine rooms, all at 7 sharp: City Tavern, Ethyl & Tank, Level One, Pierogi Mountain, Railhouse, Saucy CBUS, Vic Village Tavern and VooDoo Brewing, plus Aficionado's up in Lewis Center.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"7:00pm", cat:"trivia", n:"Trivia at Local Cantina", w:"Brewery District + UA", d:"Prizes for the top three teams, tacos and margaritas while you play. Runs at both the Brewery District and Upper Arlington rooms.", p:"Free", conf:"ok", url:"https://www.localcantina.com/events"},
 {t:"7:00–9:00pm", cat:"trivia", n:"Big Bad Music Trivia at Budd Dairy", w:"Italian Village", d:"Music trivia with Mark Dantzer under the food hall roof: seven kitchens to order from, a rooftop, and tableside happy hour until 6.", p:"Free", conf:"ok", url:"https://www.budddairyfoodhall.com/"},

 {t:"8:00pm–12:00am", cat:"dance", n:"Latin City Wednesdays", w:"Dublin", d:"Salsa lesson at 8 with beginner and advanced tracks, then open dancing to salsa, bachata and merengue till midnight at Viva Dance. No partner needed; reported $15 with the lesson, $10 for just the party.", p:"$10–15", conf:"warn", url:"https://www.columbusmakesart.com/event/56165-latin-city-wednesdays-salsa-dance-class"},
 {t:"7:00–10:00pm", cat:"dance", n:"Karaoke, eight rooms deep", w:"Citywide", d:"PBR Cowboy Bar at 7, Thirsty's and The Walrus at 8, Cafe Bourbon St and Fourth St Taproom at 9, The Library Bar at 9:30, Cavan Irish Pub at 10. Pick by neighborhood and by how late you want to start.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},

 {t:"10:00pm", cat:"culture", n:"Wednesdays are a Drag at Union Cafe", w:"Short North", d:"The long-running mid-week drag show, 10pm every Wednesday on High Street. Late by design; eat first.", p:"Late", conf:"ok", url:"https://www.unioncafe.com/"},
 {t:"6:15pm", cat:"culture", n:"Wednesday pub runs", w:"Grove City + Westerville", d:"Columbus Running Company's free group runs: three or four miles from the Grove City store, or from Campfire Brewing in Westerville, beer after both. Pickerington adds a coached speed workout at 6:30.", p:"Free", conf:"ok", url:"https://columbusrunning.com/pages/free-weekly-runs-walks"},
 {t:"11:30am–1:00pm", cat:"culture", n:"Columbus Metropolitan Club forum", w:"Downtown", d:"The city's lunchtime town hall lands on Wednesday most weeks, free and open to everyone, usually at the National Veterans Memorial. Sep 30 is a conversation with Atomic Habits author James Clear.", p:"Free", conf:"ok", url:"https://columbusmetroclub.org/"}
];

var MONTHLY = [
 {t:"Select Wed", n:"Wine Down Wednesdays at the Lincoln Theatre", w:"King-Lincoln", d:"The Lincoln's patio jazz series: a glass of wine and a 6:45 set outside the theatre. Sep 16 is a double bill, Large Mouth Brass Band at 6:45 and Cedric Easton at 8:30. Tickets through CAPA.", p:"Ticketed", conf:"ok", url:"https://lincolntheatrecolumbus.com/events/"},
 {t:"Most Wed", n:"Wednesday screenings at the Wexner Center", w:"OSU campus", d:"The fall film calendar keeps landing on Wednesday at 7: Aliens on Sep 2, Next Life with a director Q&A on Sep 9. Check the calendar for the rest of the season.", p:"Ticketed", conf:"ok", url:"https://wexarts.org/calendar"},
 {t:"Twice this fall", n:"Crew under the lights", w:"Astor Park", d:"Two Wednesday home matches: Orlando in the U.S. Open Cup on Sep 16, and Charlotte on Oct 14, which is Black & Glow Night. Midweek soccer downtown is its own kind of holiday.", p:"Ticketed", conf:"ok", url:"https://www.columbuscrew.com/schedule/"},
 {t:"Through Sep 16", n:"Clippers Wednesday home games", w:"Arena District", d:"Two left at Huntington Park: Iowa on Sep 2 and St. Paul on Sep 16, both 6:35 first pitch. Then baseball is done till April.", p:"Ticketed", conf:"ok", url:"https://www.milb.com/columbus/schedule"}
];

var COMEDY = [
 {t:"Wed 7:00pm", n:"Open mic at The Attic Comedy Club", w:"Olde Towne East", d:"The city's Wednesday comedy anchor: free, all experience levels, sign-ups at 6:30, hosted by Sista Lu, with an informal writers' workshop after the show. Free parking, minors welcome with a parent.", p:"Free", conf:"ok", url:"https://www.eventbrite.com/e/wednesday-night-comedy-open-mic-at-the-attic-comedy-club-columbus-tickets-1979852798015"},
 {t:"Some Wed 7:00pm", n:"Columbus Funny Bone", w:"Easton · 21+", d:"A touring headliner lands on Wednesday every week or two this fall. Full slate below.", p:"$25–80", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Some Wed", n:"The Hashtag Comedy Club", w:"Short North", d:"Improv on Fridays and Saturdays as a rule, but graduate showcases and one-offs land on scattered Wednesdays at their room at 1253 N. High. Check the calendar.", p:"Varies", conf:"ok", url:"https://www.hashtagcomedy.com/shows-and-tickets"}
];

var FUNNYBONE = [
 ["Sep 9","Rayna Greenberg","$37–47"],["Sep 16","Ify Nwadiwe","$25–30"],["Sep 23","Joe Fenti","$27–32"],
 ["Sep 30","Casey Frey","$32–42"],["Oct 21","Balkan Comedy Night w/ My Cousin Vlad","$30–40"],["Oct 28","The Christi Show","$38–48"],
 ["Nov 11","Jimbo's 'JOAN! Can We Laugh?!' · 18+","$37–80"],["Nov 25","TK Kirkland · two shows","$40–50"]
];

var CAL = [
 {m:"Aug",n:26,items:[
   {p:"free",t:"Blues & Beyond at Natalie's Grandview",d:"Anything Blue plays the Columbus Blues Alliance's early set, 5–6:30pm."},
   {p:"",t:"Sunnyside String Band at Woodlands Tavern",d:"Grandview string-band night with Adam Copeland, 6pm, about $14."},
   {p:"free",t:"Comedy open mic at The Attic",d:"Sign-ups 6:30, show at 7, workshop after."},
   {p:"late",t:"Crew at Club América, Leagues Cup",d:"10:45pm kickoff on Apple TV. A watch-party night, not a stadium night."}
 ]},
 {m:"Sep",n:2,items:[
   {p:"star",t:"Clippers vs. Iowa at Huntington Park",d:"6:35 first pitch, one of the last two Wednesday home games of the season."},
   {p:"",t:"Aliens at the Wexner Center",d:"7pm. James Cameron's 1986 sequel on the big screen."},
   {p:"",t:"Steve Forbert at Natalie's",d:"7:30pm, $35 seated."},
   {p:"",t:"Lovesong: The Cure tribute at Woodlands Tavern",d:"7pm, about $26."},
   {p:"free",t:"CMC forum at the Palace Theatre",d:"Raising the Curtain on Columbus' Cultural Future, 11:30am."}
 ]},
 {m:"Sep",n:9,items:[
   {p:"star",t:"Kacey Musgraves at the Schottenstein Center",d:"7:30pm with Midland."},
   {p:"",t:"Shreya Ghoshal at Nationwide Arena",d:"7pm. The Bollywood playback legend's Unstoppable tour."},
   {p:"",t:"The Blue Cats at Natalie's",d:"8pm with guest Brad Hatfield, $20."},
   {p:"",t:"Rayna Greenberg at the Funny Bone",d:"7pm, $37–47."},
   {p:"",t:"Next Life at the Wexner Center",d:"7pm screening with a virtual director Q&A."}
 ]},
 {m:"Sep",n:16,items:[
   {p:"star",t:"Indigo Girls at Columbus Commons",d:"7:30pm outdoors downtown, with Linda Perry opening. Tickets through CAPA."},
   {p:"",t:"Crew vs. Orlando, U.S. Open Cup",d:"7pm at ScottsMiracle-Gro Field. A knockout-round home date."},
   {p:"",t:"Rainbow Kitten Surprise at KEMBA Live!",d:"Outdoors, doors 6:30."},
   {p:"",t:"Wine Down Wednesdays at the Lincoln",d:"Large Mouth Brass Band at 6:45, Cedric Easton at 8:30."},
   {p:"last call",t:"Clippers vs. St. Paul",d:"6:35pm, the final Wednesday home game of the year."}
 ]},
 {m:"Sep",n:23,items:[
   {p:"star",t:"Phantogram at KEMBA Live!",d:"Indoors, doors at 7."},
   {p:"",t:"Pennywise at the Newport",d:"Doors at 7, with Angel Du$t, H2O and Murphy's Law."},
   {p:"",t:"The Secret Sisters at Natalie's",d:"7:30pm with Mary Bragg, $40 standing, $50 seated."},
   {p:"",t:"Joe Fenti at the Funny Bone",d:"7pm, $27–32."}
 ]},
 {m:"Sep",n:30,items:[
   {p:"star",t:"The Smashing Pumpkins at the Schottenstein Center",d:"8pm. The biggest Wednesday of the fall, with Teddy Swims at Nationwide Arena the same night at 7."},
   {p:"",t:"Buzzcocks at The Bluestone",d:"Doors at 7. Fifty years of Buzzcocks."},
   {p:"",t:"Songs & Stories at Natalie's",d:"A songwriters-in-the-round evening, 8pm, $20."},
   {p:"",t:"Casey Frey at the Funny Bone",d:"7pm, $32–42."},
   {p:"free",t:"James Clear at the Columbus Metropolitan Club",d:"The Atomic Habits author, 11:30am at the National Veterans Memorial."}
 ]},
 {m:"Oct",n:7,items:[
   {p:"star",t:"Death Becomes Her at the Ohio Theatre",d:"Broadway in Columbus, 7:30pm; the run goes Oct 6–11."},
   {p:"",t:"Shaboozey at KEMBA Live!",d:"Outdoors, doors 6:30. One of the last open-air shows of the year."},
   {p:"",t:"Robert Ellis at Natalie's",d:"7:30pm with Philip Bowen, $25."}
 ]},
 {m:"Oct",n:14,items:[
   {p:"star",t:"Crew vs. Charlotte: Black & Glow Night",d:"7:30pm at ScottsMiracle-Gro Field. The regular season's last Wednesday home match."},
   {p:"",t:"AFI at the Newport",d:"Doors at 7, with Choir Boy."},
   {p:"",t:"Laura Veirs at Natalie's",d:"7:30pm with Karl Blau, $28."},
   {p:"",t:"Bombargo at A&R Music Bar",d:"Doors at 6."}
 ]}
];

window.PAGE = {
  day: "Wednesday",
  researched: "August 20, 2026",
  calRange: "Aug 26 - Oct 14",
  comedyEyebrow: "One free sure thing, plus headliners every other week",
  comedyIntro: "Wednesday's comedy anchor is The Attic's free open mic: sign up at 6:30 or just take a table and watch, the two-hour format keeps it moving, and there's a writers' workshop after. The Funny Bone books a proper touring headliner roughly every other Wednesday; the fall slate is below.",
  headlinersTitle: "Wednesday headliners at the Funny Bone",
  headlinersNote: "Easton, doors 5:30, show 7:00, 21+ unless noted (Jimbo is 18+). Buy from the club directly.",
  sources: [
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["Natalie's Grandview","https://nataliesgrandview.com/events/"],
    ["PromoWest (Newport · KEMBA · A&R · Bluestone)","https://promowestlive.com/"],
    ["Columbus Crew","https://www.columbuscrew.com/schedule/"],
    ["Columbus Clippers","https://www.milb.com/columbus/schedule"],
    ["Schottenstein Center","https://www.schottensteincenter.com/events/"],
    ["Nationwide Arena","https://www.nationwidearena.com/events"],
    ["CAPA","https://www.capa.com/events/"],
    ["Lincoln Theatre","https://lincolntheatrecolumbus.com/events/"],
    ["Wexner Center","https://wexarts.org/calendar"],
    ["Columbus Metropolitan Club","https://columbusmetroclub.org/"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["Rambling House","https://www.ramblinghousemusic.com/"],
    ["The Pearl","https://thepearlrestaurant.com/locations-menus/short-north/events/"],
    ["Budd Dairy Food Hall","https://www.budddairyfoodhall.com/"],
    ["Union Cafe","https://www.unioncafe.com/"],
    ["The Attic via Eventbrite","https://www.eventbrite.com/e/wednesday-night-comedy-open-mic-at-the-attic-comedy-club-columbus-tickets-1979852798015"],
    ["Columbus Running Company","https://columbusrunning.com/pages/free-weekly-runs-walks"],
    ["Woodlands Tavern","https://www.woodlandsproductions.com/"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
