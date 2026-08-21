/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, riverfront patio pointed at the skyline. Saturday is its busiest night: book early or eat at the bar.", hours:"Sat 5–10pm", conf:"ok", res:"Book ahead", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe.", hours:"Sat 4–10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Metsi's Wood-Fired Italian", hood:"Italian Village", kind:"dinner", opened:"Jun 2025", d:"From the Chapman's Eat Market and Ginger Rabbit team, two floors around a wood hearth. Happy hour 4 to 6 runs on Saturdays too, which most places can't say.", hours:"Sat 4–10pm", conf:"ok", res:"Walk-ins ok", url:"https://www.metsisitalian.com/"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn does double Saturday duty: proper brunch 10 to 4, then dinner to 10. Blonde French onion soup with raclette, sticky toffee pudding. Pairs with the farmers market two blocks away.", hours:"Sat brunch 10am–4pm, dinner 4–10pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river, probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib. Their site blocked our lookup this week.", hours:"Sat hours unverified, call ahead", conf:"warn", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"isla", hood:"Merion Village", kind:"dinner", opened:"Jul 2025", d:"Eight courses at a shared table ($150pp) or nine at the chef's counter over the kitchen ($200pp). The most ambitious new room in the city; Saturdays sell out first.", hours:"Check the Tock calendar", conf:"warn", res:"Prepaid, Tock", url:"https://www.exploretock.com/isla--columbus/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Saturday runs brunch 11 to 3, then dinner straight through to 11: handmade pasta, crispy chicken limone, a lasagna built to split.", hours:"Sat brunch 11am–3pm, dinner 3–11pm", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"House of Creole", hood:"Short North", kind:"dinner", opened:"Jul 2025", d:"Shrimp and grits, blackened salmon, cornbread, and a cocktail list that isn't shy, in the middle of High Street. Hours below are from their reservation listings.", hours:"Sat 11am–11pm reported", conf:"warn", res:"Recommended", url:"https://houseofcreole.com/"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space, traditional technique, contemporary plating. Opens at 1 on Saturdays, so it works as a late lunch too.", hours:"Sat 1–10:30pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"Mezcla", hood:"Italian Village", kind:"dinner", opened:"Reopened Jun 2026", d:"Latin small plates and loud cocktails in a room the neighborhood crowdfunded back open after a van drove into it. Named a best new restaurant of 2026; Saturdays run to 11.", hours:"Sat 4–11pm", conf:"ok", res:"Resy", url:"https://www.mezclacocina.com/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside. Opens at 2 on Saturdays and holds until 1am, which covers afternoon drinks and the nightcap both.", hours:"Sat 2pm–1am", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar, no screens, everything off vinyl and cassette. Brand new this month, and Saturday opens at 1pm for daytime record-flipping.", hours:"Sat 1pm–midnight", conf:"ok", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"The Shapeshifter", hood:"Franklinton", kind:"drinks", opened:"Jun 2026", d:"The cocktail bar whose decor and menu change on a rotation. Currently pouring a Greatest Hits list of fan favorites from past themes.", hours:"Sat 5pm–midnight", conf:"ok", res:"Walk in", url:"https://www.shapeshiftercolumbus.com/"},
 {n:"Huli Huli Tiki Lounge", hood:"Downtown", kind:"drinks", opened:"May 2026", d:"Downtown's first tiki bar since 2019, in the old Jury Room on Mound Street: hand-carved wood, custom Moai, about twelve bar seats. Small and immersive, go early.", hours:"Fri–Sat 4:30–11:30pm reported", conf:"warn", res:"No reservations", url:"https://www.hulihulipowell.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room. Good landing spot after a Nest or Hashtag show.", hours:"Daily 4pm–midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},
 {n:"Lani Rooftop Lounge", hood:"Powell", kind:"drinks", opened:"Apr 2026", d:"Powell's first rooftop: fire pit, harissa cauliflower, burrata flatbread. Worth the drive when you want a night that isn't the Short North.", hours:"Sat 4–11pm", conf:"ok", res:"OpenTable", url:"https://lanirooftop.com/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list. Palomino Coffee runs the room by day, and Saturday the bar holds until 1am.", hours:"Sat 3pm–1am", conf:"ok", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"The Daily Etcetera", hood:"German Village", kind:"drinks", opened:"Jun 2026", d:"Five separate patio spaces, which nothing else in German Village can say. Craft beer plus an actual cocktail list. Hours weren't posted when we checked.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://thedailygrowler.com"},
 {n:"Pins Mechanical Co.", hood:"Downtown", kind:"drinks", opened:"2016", d:"Duckpin bowling, pinball and patio pong on Fourth Street, with a bar attached to all of it. The reliable move for a group that can't agree on a plan. Hours weren't posted on the site.", hours:"Hours unposted, expect late", conf:"warn", res:"Walk in", url:"https://www.pinsbar.com/"},

 {n:"Mid City Garage", hood:"German Village", kind:"casual", opened:"2025", d:"Roll-up doors, patio lights, thin-crust pizza, and a Saturday brunch 11 to 3 with fried dough and breakfast sandwiches. Kitchen to 11, bar at least an hour past it.", hours:"Sat 11am–11pm, bar later", conf:"ok", res:"Walk in", url:"https://www.midcitygarage.com/"},
 {n:"Fox in the Snow Cafe", hood:"Italian Village", kind:"casual", opened:"2014", d:"The egg sandwich and a cinnamon roll the size of a fist. Seven locations now (Dublin, Westerville, New Albany and more), so pick the one near your morning.", hours:"Sat 8am–3pm", conf:"ok", res:"Walk in", url:"https://www.foxinthesnow.com/"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space. Opens at 11 on Saturdays, an easy landing after the Clintonville farmers market up the street.", hours:"Sat 11am–10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong style dim sum, 55 items, all of it meant to be pushed across the table at each other. Saturday lunch is what it's built for; hours weren't posted online.", hours:"Hours unposted", conf:"warn", res:", ", url:"https://www.dimsumab.com/"},
 {n:"Land-Grant Brewing", hood:"Franklinton", kind:"casual", opened:"2014", d:"The beer garden is the Saturday default: opens at 11, food trucks outside, holds until midnight. An easy pregame stop on Crew match nights.", hours:"Sat 11am–midnight", conf:"ok", res:"Walk in", url:"https://landgrantbrewing.com/"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024–25", d:"Named a top-ten brewery in the country this year, specializing in 3.5 to 5 percent beer. Noon open on Saturdays, community art on the walls, food trucks outside.", hours:"Sat 12pm–midnight", conf:"ok", res:"Walk in", url:"https://www.honestfriendbrewing.com/"},
 {n:"Buckeye Donuts", hood:"Campus", kind:"casual", opened:"1969", d:"Always Open, Closed Never, per the sign, and they mean it. Gyros and donuts at 2:30am is how a proper Saturday ends on High Street.", hours:"24 hours", conf:"ok", res:"Walk in", url:"https://buckeyedonuts.com/"},

 {n:"Welcome to the Farm", hood:"Short North", kind:"soon", opened:"Opens Sat Aug 22, 2026", d:"Chase Rice's country bar lands at 906 N. High this Saturday: rotating country DJs, live music, a deep bourbon list, and a dedicated corner for watching the Buckeyes. VIP preview 5 to 7, then open to everyone.", hours:"Opens Aug 22, hours not yet posted", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},
 {n:"Coldbar", hood:"Italian Village", kind:"soon", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, oysters, terrines, caviar, shrimp cocktail. From the Mezcla team, near Fox in the Snow on Fourth. Confirm it has actually opened before building a night around it.", hours:"Confirm it has opened", conf:"warn", res:", ", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/07/01/how-to-make-a-clear-winner-cocktail-from-coldbar/90521837007/"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"}
];

var WEEKLY = [
 {t:"5:30, 7:15 & 9:30pm", cat:"music", n:"Saturday sets at Ginger Rabbit", w:"Short North", d:"The $10 Power Hour at 5:30 is the pre-dinner move; the two evening sets bring the weekend headliners at $30. Best date-night basement in the city, book the early table.", p:"$10–30", conf:"ok", url:"https://gingerrabbitjazz.turntabletickets.com/"},
 {t:"8pm–2am", cat:"music", n:"Dueling pianos at The Big Bang", w:"Short North", d:"Two grand pianos, every request, everyone singing by 10:30. Runs Thursday through Saturday; Saturday is the full-throttle night.", p:"Cover varies", conf:"warn", url:"https://www.thebigbangbar.com/"},
 {t:"Late", cat:"music", n:"Ladies 80s Throwback Saturday at Skully's", w:"Short North", d:"The longest-running dance night in the city, all 80s, all night. Hours follow the event schedule, so check their socials before heading out.", p:"Cover varies", conf:"warn", url:"https://skullys.org/"},
 {t:"Evenings", cat:"music", n:"Natalie's, two rooms", w:"Grandview & Worthington", d:"Jazz, roots and songwriter sets across two venues, usually with a Saturday double bill in each. Their site was blocking lookups this week; check current listings.", p:"Ticketed", conf:"warn", url:"https://nataliesgrandview.com/"},

 {t:"10pm–2am", cat:"dance", n:"Axis mainstage and dance floor", w:"Short North · 21+", d:"Drag mainstage with theater seating, then DJs until close. Open Saturdays 10 to 2, government ID required, and the good seats go early.", p:"Cover varies", conf:"ok", url:"https://www.axisonhigh.com/venue-info"},
 {t:"11am–2am", cat:"dance", n:"PBR Cowboy Bar, open to close", w:"Easton", d:"Opens at 11 for football on the screens, mechanical bull 8:30 to close, 21+ after 9. The full arc of a Saturday in one room.", p:"No cover", conf:"ok", url:"https://pbrcowboybar.com/columbus/"},
 {t:"8:30pm lesson, 9:30pm social", cat:"dance", n:"Saturday salsa social at Salsamante", w:"Columbus", d:"Beginner lesson at 8:30, then open salsa and bachata until 1am, around $10 all-in and no partner needed. Confirm the address when you buy; listings move.", p:"~$10", conf:"warn", url:"https://www.danceus.org/events/salsa/columbus-oh-salsa-calendar/"},

 {t:"8am–noon", cat:"food", n:"Worthington Farmers Market", w:"Old Worthington", d:"The big one: High Street closes through the historic district, rain or shine, May through October. Go at 8 for the good tomatoes, then brunch at the Inn.", p:"Free", conf:"ok", url:"https://worthingtonpartnership.org/about-worthington-farmers-market"},
 {t:"9am–noon", cat:"food", n:"Clintonville Farmers Market", w:"N High at Dunedin", d:"Heirloom produce, artisan bread, cut flowers and food trucks, running through November 21. Smaller and calmer than Worthington; you can do both.", p:"Free", conf:"ok", url:"https://marketspread.com/market/24612/clintonville-farmers-market/"},
 {t:"10am–4pm", cat:"food", n:"Brunch without the Sunday wait", w:"Citywide", d:"Wolf's Ridge runs Worthington Inn brunch 10 to 4, Bar Italia pours 11 to 3 at Easton, Mid City Garage fries dough 11 to 3 in German Village. All three verified for Saturday.", p:"Varies", conf:"ok", url:"https://www.worthingtoninn.com/restaurant"},
 {t:"9am–7pm", cat:"food", n:"North Market Downtown", w:"Short North edge", d:"Thirty-some merchants under one roof: graze a long lunch, then walk High Street north. Open to 7 on Saturdays.", p:"Free to wander", conf:"ok", url:"https://northmarket.org/"},
 {t:"11am–midnight", cat:"food", n:"Budd Dairy Food Hall", w:"Italian Village", d:"Chef stalls until 11, bars until midnight, rooftop when the weather cooperates. Handles the group that wants seven different dinners.", p:"Varies", conf:"ok", url:"https://budddairyfoodhall.com/"},

 {t:"10am–11pm", cat:"culture", n:"The Book Loft, 32 rooms", w:"German Village", d:"Open to 11pm seven days a week, which makes it a legitimate Saturday night stop. Pair with a Daily Etcetera patio or Mid City late bar.", p:"Free", conf:"ok", url:"https://www.bookloft.com/"},
 {t:"Through Sep 20", cat:"culture", n:"Big Bugs at Franklin Park Conservatory", w:"Franklin Park", d:"David Rogers' giant insect sculptures spread through the gardens, with the Paul Busse garden railway running alongside. Daytime general admission; final weekends now.", p:"Admission", conf:"ok", url:"https://www.fpconservatory.org/"},
 {t:"Closes Sep 7", cat:"culture", n:"The Science Behind Pixar at COSI", w:"Franklinton", d:"The touring Pixar exhibition's last weeks, with a half-off admission promo running. Saturday is family-crowded by noon; go at open.", p:"Discounted", conf:"ok", url:"https://cosi.org/"},
 {t:"All day", cat:"culture", n:"Gateway Film Center", w:"Campus", d:"First-run plus repertory: the From Book to Film series screens Devil in a Blue Dress Saturday Aug 22. Check the week's calendar for matinee picks.", p:"Ticketed", conf:"ok", url:"https://gatewayfilmcenter.org/"},
 {t:"Daytime", cat:"culture", n:"Columbus Museum of Art", w:"Discovery District", d:"Open Saturdays with the full galleries; their site blocked our hours lookup this week, so verify before a trip. BAM Thursdays is their late night, not Saturday.", p:"Admission", conf:"warn", url:"https://www.columbusmuseum.org/plan-your-visit"}
];

var MONTHLY = [
 {t:"1st Sat", n:"Gallery Hop", w:"Short North", d:"Galleries flip exhibitions, buskers and vendors fill High Street, bars run late. Starts at 4; on Hops on High Saturdays (Sep 5, Dec 5) the street closes and it runs from noon.", p:"Free", conf:"warn", url:"https://shortnorth.org/gallery-hop/"},
 {t:"2nd Sat", n:"Budd's Bazaar", w:"Budd Dairy · Italian Village", d:"Local vendor market inside the food hall, 11 to 3. Next one lands Sep 12, a natural morning-before-Oktoberfest stop.", p:"Free", conf:"ok", url:"https://budddairyfoodhall.com/"},
 {t:"Fall Saturdays", n:"Ohio State at the Shoe", w:"Campus", d:"Home dates in this window: Ball State Sep 5 (12:30), Kent State Sep 19 (noon), Illinois Sep 26, Maryland Oct 10. The whole city reorganizes around kickoff; book dinner accordingly.", p:"Ticketed", conf:"ok", url:"https://ohiostatebuckeyes.com/sports/football/schedule"},
 {t:"Select Sats", n:"Crew nights at ScottsMiracle-Gro Field", w:"Astor Park", d:"Aug 29 vs New England, Sep 5 vs Colorado (Grateful Dead Night, tie-dye shirt with ticket), Sep 12 vs NY Red Bulls at 7:30 (First Responders night). Confirm kickoffs with the club.", p:"Ticketed", conf:"warn", url:"https://www.columbuscrew.com/news/columbus-crew-announce-thrilling-theme-nights-for-2026-season-at-scottsmiracle-gro-field"},
 {t:"Through Sep 19", n:"Clippers Saturday fireworks", w:"Huntington Park", d:"Triple-A baseball with postgame fireworks on home Saturdays: Aug 22 vs St. Paul at 7:05, and the final home Saturday is Sep 19. Cheap, outdoors, reliably great.", p:"From ~$10", conf:"warn", url:"https://www.milb.com/columbus"}
];

var COMEDY = [
 {t:"Sat 6:30 & 9:15pm", n:"Columbus Funny Bone", w:"Easton · 21+", d:"Doubleheader Saturdays with a national headliner, dinner and a full bar in the showroom. Full schedule below; their calendar blocked our direct check, so confirm times when you buy.", p:"$40–75", conf:"warn", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Sat 7:30pm", n:"Shadowbox Live", w:"Brewery District", d:"Flannel: A 90s Rock Musical closes Sep 6, then Speak of the Devil (Ozzy and Black Sabbath) opens Sep 10. Sketch-and-band shows with table seating and a kitchen; confirm curtain time.", p:"Ticketed", conf:"warn", url:"https://shadowboxlive.org/"},
 {t:"Sat 7 & 9:30pm", n:"The Attic at The Walrus", w:"Downtown", d:"Two headliner shows most Saturdays while their Oak Street room is under construction: Joey Bragg Sep 5, Ian Lara Sep 19, Kevin Farley Sep 26, Zainab Johnson Oct 3. Suggested two-drink minimum.", p:"$15–33", conf:"ok", url:"https://theatticcomedyclub.com/comedy-shows-columbus"},
 {t:"Sat 9:00pm", n:"Last Call Saturday Night at Hashtag Comedy", w:"Short North", d:"High-energy short-form improv mixing the scene's newest players with its veterans, 75 minutes, drinks available. Doors 15 minutes before.", p:"Ticketed", conf:"ok", url:"https://www.hashtagcomedy.com/shows-and-tickets"},
 {t:"Sat 7–11pm", n:"The Nest Theatre", w:"Old North", d:"The city's dedicated improv house stacks shows every Friday and Saturday night: ComedySportz, longform, an improvised musical. Schedule posts by week.", p:"Check site", conf:"warn", url:"https://nesttheatre.com/shows/"}
];

var FUNNYBONE = [
 ["Aug 22","Ralph Barbosa","$43–49"],["Aug 29","Arnez J · Comedy Fest weekend","$49+"],
 ["Sep 5","Gary Owen","$65–75"],["Sep 12","Tony Rock","$40–49"],
 ["Sep 19","Chris Porter","from $40"],["Sep 26","D.L. Hughley","$73+ resale"],
 ["Oct 3","Steph Tolev","from $40"],["Oct 10","Drew Lynch","$37–52"]
];

var CAL = [
 {m:"Aug",n:22,items:[
   {p:"star",t:"Festival Latino's first Saturday at Columbus Commons",d:"Noon to 8, free: Ohio's biggest Latino festival moves downtown from Genoa Park, with a free Coco screening inside the Ohio Theatre."},
   {p:"fireworks",t:"Clippers vs St. Paul",d:"Huntington Park, 7:05, postgame fireworks."},
   {p:"",t:"Welcome to the Farm opens",d:"Chase Rice's country bar, 906 N. High. Public after the 5–7pm preview; expect a line."},
   {p:"",t:"Devil in a Blue Dress at Gateway",d:"From Book to Film series, campus."}
 ]},
 {m:"Aug",n:29,items:[
   {p:"star",t:"CAAMP at the Schottenstein Center",d:"7pm, with Arcy Drive and Sam Fribush Organ Trio. Columbus's own, back in the biggest room in town."},
   {p:"",t:"Columbus Comedy Festival's big Saturday",d:"Arnez J at the Funny Bone, Drew Dunn and a pop-up comedy jam at the Attic. Fest runs Aug 27–30."},
   {p:"",t:"Crew vs New England",d:"Soccer For All night at ScottsMiracle-Gro Field."},
   {p:"",t:"Boosie and Webbie at KEMBA Live!",d:"Outdoors, rain or shine, doors 7."},
   {p:"",t:"GoldFord at the Newport",d:"8pm."}
 ]},
 {m:"Sep",n:5,items:[
   {p:"star",t:"Hops on High + September Gallery Hop",d:"High Street closes for the open-streets edition, from noon: vendors, new exhibitions, live performance, free."},
   {p:"noon kick",t:"Ohio State home opener vs Ball State",d:"12:30 at the Shoe. Football in the morning, Gallery Hop at night: the full Columbus Saturday."},
   {p:"",t:"Columbus Greek Festival",d:"11am–11pm at the Annunciation Cathedral, one block off the Hop. Runs through Labor Day Monday."},
   {p:"",t:"Crew Grateful Dead Night vs Colorado",d:"Limited-edition tie-dye with select tickets."},
   {p:"last call",t:"Flannel's final Saturday at Shadowbox",d:"The 90s rock musical closes Sep 6."}
 ]},
 {m:"Sep",n:12,items:[
   {p:"star",t:"Schmidt's Columbus Oktoberfest",d:"Ohio Expo Center, noon to midnight, free admission: three stages, polka, cream puffs."},
   {p:"watch party",t:"Ohio State at Texas",d:"7:30 on ABC, the rematch in Austin. Every bar in the city will have it on; claim a table by 6."},
   {p:"",t:"Crew First Responders night vs NY Red Bulls",d:"7:30, marking 25 years since 9/11."},
   {p:"last call",t:"BalletMet: Future Icons, final performance",d:"Sep 10–12 run at the BalletMet Performance Space."},
   {p:"free",t:"Budd's Bazaar",d:"Vendor market at Budd Dairy, 11–3."}
 ]},
 {m:"Sep",n:19,items:[
   {p:"star",t:"Columbus Symphony opens its 75th season",d:"Ohio Theatre, 7:30, with pianist Eva Gevorgyan. Football at noon, symphony at night works."},
   {p:"noon kick",t:"Ohio State vs Kent State",d:"Noon at the Shoe."},
   {p:"last call",t:"Clippers' final home Saturday",d:"Vs St. Paul, 7:05 at Huntington Park. Baseball's done after this weekend."},
   {p:"",t:"Erra at the Newport",d:"6:30pm."},
   {p:"last call",t:"Big Bugs at the Conservatory",d:"The giant sculptures leave after Sep 20."}
 ]},
 {m:"Sep",n:26,items:[
   {p:"star",t:"Ohio State vs Illinois",d:"First Big Ten home Saturday of the year. Time announces closer in; plan the whole day around it."},
   {p:"matinee",t:"Sweeney Todd's first Saturday",d:"Short North Stage at the Garden Theatre, 2pm and 7pm. Runs through Oct 18; $20 pay-what-you-wish tickets at the door, two hours before curtain."},
   {p:"",t:"D.L. Hughley at the Funny Bone",d:"6:30 and 9:30. Listings were resale-only at research time; check the club first."},
   {p:"",t:"Kevin Farley at the Attic",d:"Downtown at The Walrus."}
 ]},
 {m:"Oct",n:3,items:[
   {p:"star",t:"October Gallery Hop",d:"First Saturday, from 4pm, new exhibitions across the district."},
   {p:"",t:"Columbus Coffee Festival",d:"Sat–Sun at the Franklin County Fairgrounds in Hilliard: 40+ roasters, the caffeinated version of a beer fest."},
   {p:"",t:"Blue Jackets' first Saturday home game",d:"Nationwide Arena, two nights after the season opener. Confirm opponent and time with the box office."},
   {p:"watch party",t:"Ohio State at Iowa",d:"Road game, so the bars are the venue."},
   {p:"matinee",t:"Sweeney Todd",d:"2pm and 7pm at the Garden Theatre."}
 ]},
 {m:"Oct",n:10,items:[
   {p:"star",t:"Death Becomes Her, closing weekend",d:"Broadway in Columbus at the Ohio Theatre, 7:30pm; the tour leaves after Oct 11. From $52."},
   {p:"",t:"Ohio State vs Maryland",d:"At the Shoe; time announces closer in."},
   {p:"",t:"Columbus Italian Festival",d:"10am–11pm at St. John the Baptist, Italian Village. $10, kids free; bocce, live music, the works."},
   {p:"matinee",t:"Sweeney Todd",d:"2pm and 7pm, second-to-last weekend."},
   {p:"",t:"Drew Lynch at the Funny Bone",d:"6:30 and 9:15."}
 ]}
];

window.PAGE = {
  day: "Saturday",
  researched: "August 20, 2026",
  calRange: "Aug 22 – Oct 10",
  comedyEyebrow: "Doubleheaders in four rooms",
  comedyIntro: "Saturday is the Funny Bone's biggest night: two seatings of a national headliner with dinner service in the showroom. The Attic's downtown residency at The Walrus is the value play at $15 to $33, and the improv rooms (Nest, Hashtag) run past 11 for under twenty bucks.",
  headlinersTitle: "Saturday headliners at the Funny Bone",
  headlinersNote: "Easton, 21+, two shows most Saturdays at 6:30 and 9:15. Prices shown are the lowest listed at research time; several fall dates were showing resale-only, so buy from the club directly.",
  sources: [
    ["Ohio State Buckeyes","https://ohiostatebuckeyes.com/sports/football/schedule"],
    ["Columbus Crew","https://www.columbuscrew.com/news/columbus-crew-announce-thrilling-theme-nights-for-2026-season-at-scottsmiracle-gro-field"],
    ["Columbus Clippers","https://www.milb.com/columbus"],
    ["Newport Music Hall","https://www.newportmusichall.org/events/"],
    ["Schottenstein Center","https://www.schottensteincenter.com/events/"],
    ["Broadway in Columbus","https://columbus.broadway.com/shows/death-becomes-her/"],
    ["BalletMet","https://www.balletmet.org/performances/"],
    ["Short North Stage","https://www.shortnorthstage.org/sweeneytodd"],
    ["Columbus Symphony","https://columbussymphony.com/news/columbus-symphony-announces-2026-27-season/"],
    ["Shadowbox Live","https://shadowboxlive.org/"],
    ["The Attic Comedy Club","https://theatticcomedyclub.com/comedy-shows-columbus"],
    ["Hashtag Comedy","https://www.hashtagcomedy.com/shows-and-tickets"],
    ["Ginger Rabbit","https://gingerrabbitjazz.turntabletickets.com/"],
    ["Axis on High","https://www.axisonhigh.com/venue-info"],
    ["PBR Cowboy Bar","https://pbrcowboybar.com/columbus/"],
    ["Worthington Farmers Market","https://worthingtonpartnership.org/about-worthington-farmers-market"],
    ["Clintonville Farmers Market","https://marketspread.com/market/24612/clintonville-farmers-market/"],
    ["North Market","https://northmarket.org/"],
    ["Short North Alliance","https://shortnorth.org/gallery-hop/"],
    ["Festival Latino","https://festivallatino.net/"],
    ["Columbus Greek Festival","https://www.columbusgreekfestival.com/"],
    ["Schmidt's Oktoberfest","https://columbusoktoberfest.com/"],
    ["Columbus Italian Festival","https://www.columbusitalianfestival.com/"],
    ["Columbus Coffee Festival","https://columbuscoffeefest.com/"],
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["614NOW","https://614now.com/category/food-drink/openings"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
