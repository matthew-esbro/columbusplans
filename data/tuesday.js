/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, riverfront patio pointed at the skyline. Crudo, wagyu skewers, and the hummus everyone writes about. Quieter on a Tuesday, which is the point.", hours:"Tue 5–10pm", conf:"ok", res:"Book ahead", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe.", hours:"Tue 4–10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened after eight dark years, now run by Wolf's Ridge. Blonde French onion soup with raclette, sticky toffee pudding, and a Tuesday table is actually gettable.", hours:"Tue 11am–10pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river, probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib. Their site wasn't reachable this week, so confirm by phone.", hours:"Tue 4–9pm reported", conf:"warn", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Handmade pasta, crispy chicken limone, a lasagna built to split, and lunch service if the evening starts early.", hours:"Tue 11am–10pm", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space: traditional technique, contemporary plating, and a 3pm open for the early crowd.", hours:"Tue 3–10pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"isla", hood:"Merion Village", kind:"dinner", opened:"Jul 2025", d:"Eight courses at a shared table ($150pp) or nine at the chef's counter over the kitchen ($200pp). The most ambitious new room in the city; check whether a Tuesday seating exists at all.", hours:"Check the Tock calendar", conf:"warn", res:"Prepaid, Tock", url:"https://www.exploretock.com/isla--columbus/"},
 {n:"Tabla", hood:"Northeast", kind:"dinner", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road, and live Bollywood music some nights. The Columbus room currently lists itself as soft-launching, so treat hours and menu as moving targets.", hours:"Soft launch, hours unposted", conf:"warn", res:"Call ahead", url:"https://www.tablacuisine.com/locations/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside, and happy hour from 4 to 6. More party than hush, even on a school night.", hours:"Tue 4–11pm", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar with no screens and no playlists: everything comes off vinyl and cassette, and bringing a record in gets you a drink. A slow Tuesday is exactly what it was built for.", hours:"Tue 5pm–midnight", conf:"ok", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room. Handy before or after the Dick's Den jam up the street.", hours:"Daily 4pm–midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list. Palomino Coffee runs the room by day, and the 3pm open makes it a fine first stop.", hours:"Tue 3–11pm", conf:"ok", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"Welcome to the Farm", hood:"Short North", kind:"drinks", opened:"Aug 22, 2026", d:"Chase Rice's country bar under Good Night John Boy, open as of last Saturday: rotating country DJs, a deep bourbon list, loud by design. Early-week hours were still being finalized at press time.", hours:"Hours not yet posted", conf:"warn", res:"Walk in", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},

 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"The neighborhood's first ramen shop: tonkotsu with black garlic oil, spicy miso, and a real vegan bowl. Their site blocked our visit this week; it has kept 11-to-9 hours.", hours:"Tue 11am–9pm reported", conf:"warn", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space, with craft cocktails and the longest posted hours on this page. The reliable answer when half the neighborhood is dark on a Tuesday.", hours:"Tue 11am–10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong-style dim sum, 55 items, all of it meant to be pushed across the table at each other. Weekday happy hour 3 to 6 is posted; the full Tuesday hours are not.", hours:"HH 3–6pm posted; full hours unposted", conf:"warn", res:"Walk in", url:"https://www.dimsumab.com/"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024–25", d:"Named a top-ten brewery in the country this year. Specializes in 3.5–5% beer, which is the correct move on a weeknight, and Tuesday brings free trivia from 7 to 9.", hours:"Trivia Tue 7–9pm; taproom hours unposted", conf:"warn", res:"Walk in", url:"https://www.honestfriendbrewing.com/events-calendar"},
 {n:"The Walrus", hood:"Downtown", kind:"casual", opened:"Local since 2011", d:"Downtown's everything bar: kitchen until midnight, thirty drafts, pool, a bustling patio, double-header trivia at 7 and 8, and the Attic's free comedy show in the building for now.", hours:"Tue 11am–midnight", conf:"ok", res:"Walk in", url:"https://www.thewalruscolumbus.com/"},

 {n:"Coldbar", hood:"Italian Village", kind:"soon", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla; confirm it has actually opened.", hours:"Not confirmed open", conf:"warn", res:"Check first", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/04/29/try-cold-tapas-and-craft-cocktails-at-coldbar-opening-in-august/89855560007/"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:"Check first", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy directly underneath. Memberships open in September.", hours:"Not open yet", conf:"warn", res:"Check first", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"9:00pm", cat:"music", n:"Bluegrass jam at Dick's Den", w:"Old North", d:"The longest-running Tuesday ritual in town: an open bluegrass jam in a half-century-old dive, sometimes ten pickers on the tiny stage at once. Their website wouldn't load this week, so the start time is tradition, not confirmation.", p:"No cover", conf:"warn", url:"https://www.dicksden.com/"},
 {t:"Most Tue, early", cat:"music", n:"Whatever Natalie's has booked", w:"Grandview", d:"The listening room programs most Tuesdays: jazz, roots, songwriter rounds, usually seated and done by 10. The calendar posts month to month, so check it before you commit.", p:"Varies", conf:"warn", url:"https://nataliesgrandview.com/events/"},

 {t:"All day", cat:"food", n:"$4 Taco Tuesday at Condado", w:"Short North + around town", d:"Three featured tacos (Lucy's Fire, Blue Dream, Rango Tango) at $4 each, dine-in only. Frozen signature margs are $6 all summer on top of it.", p:"$4", conf:"ok", url:"https://www.condadotacos.com/"},
 {t:"All day & night", cat:"food", n:"Taco Tuesday at Agave & Rye", w:"Easton", d:"Epic tacos marked down to $4–5.50, half-off OG margaritas, $2.50 domestic cans, $4.75 chips and queso. Dine-in only.", p:"$4–5.50", conf:"ok", url:"https://www.agaveandrye.com/specials"},
 {t:"All day", cat:"food", n:"Taco trios at PBR Cowboy Bar", w:"Easton", d:"$6 taco trios and $5 house margaritas under the neon bull. The line dancing waits for Thursday, and Tuesday closes at 9, so make it an early one.", p:"$6", conf:"ok", url:"https://pbrcowboybar.com/columbus/"},
 {t:"4:00–6:00pm", cat:"food", n:"Happy hour at The Pearl", w:"Short North", d:"$3 oysters raw, baked or fried, plus half-off snacks, starters, pub burgers and a page of drinks. The best two hours of a Short North Tuesday.", p:"$3 oysters", conf:"ok", url:"https://thepearlrestaurant.com/locations-menus/short-north/events/"},
 {t:"All day", cat:"food", n:"$2.22 tacos at Local Cantina", w:"A dozen locations", d:"House tacos at $2.22 and top-shelf at $4, dine-in. The chain teases Taco Tuesday on its own site but posts no fine print, hence the caution flag.", p:"$2.22", conf:"warn", url:"https://www.columbusnavigator.com/taco-tuesday-specials-columbus/"},
 {t:"All day", cat:"food", n:"The taqueria circuit", w:"Citywide", d:"El Jaliciense runs $1.50 pastor and carnitas tacos, Cazuela's on campus does $2.99 tacos with $2.99 Pacificos, House Taco downtown goes $3. All reported this month; none confirmable on a venue site.", p:"$1.50–3", conf:"warn", url:"https://www.columbusnavigator.com/taco-tuesday-specials-columbus/"},

 {t:"6:30–10:00pm", cat:"trivia", n:"Trivia and a Movie at Land-Grant", w:"Franklinton", d:"Trivia at 6:30 in the beer garden, themed to the movie that screens right after, weather permitting. One evening, two events, zero dollars.", p:"Free", conf:"ok", url:"https://landgrantbrewing.com/events/"},
 {t:"7:00pm", cat:"trivia", n:"Trivia Tuesday at Union Cafe", w:"Short North", d:"Hosted by drag performer Blonde Vanity: trivia, games, prizes and drink specials in one loud room. The most entertaining question-reading in the city.", p:"", conf:"ok", url:"https://www.unioncafe.com/events"},
 {t:"7:00–9:00pm", cat:"trivia", n:"Summer League Trivia at Honest Friend", w:"South Side", d:"Free admission, every Tuesday, Jessi on the mic, in a taproom just named among the best in the country. Low-point beer means you can still play the late rounds.", p:"Free", conf:"ok", url:"https://www.honestfriendbrewing.com/events-calendar"},
 {t:"7:00 & 8:00pm", cat:"trivia", n:"Double-header trivia at The Walrus", w:"Downtown", d:"Two rounds a night with the kitchen open the whole time, and the Attic's free crowd-work show now runs in the same building at 8. Downtown's easiest full Tuesday.", p:"Free", conf:"ok", url:"https://www.thewalruscolumbus.com/"},
 {t:"7:00–8:00pm", cat:"trivia", n:"The Excesss Tuesday circuit", w:"Nine venues", d:"Bada in Italian Village and at Quarry Trails, Budd Dairy, Campfire in Westerville, Fenders at Polaris, India Oak Grill and Ledo's all at 7; the Blue Danube closes it out at 8.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"7:00pm", cat:"trivia", n:"WTF Music Trivia", w:"Dublin + German Village", d:"Music-only trivia, two rooms, same night: Flannagan's in Dublin and Rumors on the Parsons Ave edge of German Village.", p:"Free", conf:"ok", url:"https://wtfmusictrivia.com/play"},

 {t:"7:00pm–midnight", cat:"dance", n:"Line dancing at Black Swan", w:"Hilliard", d:"Lessons from 7 to 9, then all-request dancing until midnight, organized by the Columbus In Line Dance Collective. The serious room: boots optional, willingness not.", p:"", conf:"ok", url:"https://columbuslinedance.com/"},
 {t:"9:00pm", cat:"dance", n:"Karaoke at Oddfellow's", w:"Short North", d:"The one Excesss karaoke night on the Tuesday map, with song requests from your phone. Starts late enough to follow trivia from anywhere.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},

 {t:"6:30pm", cat:"culture", n:"Clintonville pub run", w:"Clintonville", d:"Three or four easy miles from Combustion on N High, then a pint with the group. Track workouts run in Westerville and Delaware at 6 if you'd rather chase splits. Seasonal, March through October.", p:"Free", conf:"ok", url:"https://columbusrunning.com/pages/free-weekly-runs-walks"},
 {t:"All day", cat:"culture", n:"Discount Tuesday at the multiplexes", w:"Citywide", d:"AMC and Marcus both cut Tuesday ticket prices for members of their free loyalty tiers. Exact price varies by theater and neither chain's site would confirm this week, so check yours.", p:"Varies", conf:"warn", url:"https://www.amctheatres.com/discount-tuesdays"}
];

var MONTHLY = [
 {t:"Home-stand Tue", n:"Dime-A-Dog Night at Huntington Park", w:"Arena District", d:"Ten-cent Sahlen's hot dogs at every Tuesday Clippers home game, a tradition since 1977. Two chances left this season: Sep 1 vs Iowa and Sep 15 vs St. Paul, both 6:35 first pitch.", p:"10¢ dogs", conf:"ok", url:"https://www.milb.com/columbus/tickets/dime-a-dog-night"},
 {t:"2nd Tue", n:"Columbus Blues Alliance jam", w:"Northland", d:"Open blues jam with the Harmonic Barbarians at The Crazee Mule on Cleveland Ave, 8pm, second Tuesdays only. Players welcome, listeners too.", p:"", conf:"ok", url:"https://columbusblues.com/events-calendar/"},
 {t:"2nd & 4th Tue", n:"Euro Bike Nights at Hofbrauhaus", w:"Grandview Yard", d:"European motorcycles filling the biergarten lot, 6 to 9, April into September. Aug 25 and Sep 8 are the last two of the year; the brewery's own calendar is vague on it, hence the flag.", p:"Free", conf:"warn", url:"https://www.experiencecolumbus.com/event/euro-bike-nights!/78797/"},
 {t:"Select Tue", n:"New Albany Lecture Series", w:"New Albany", d:"Heavyweight speakers a few Tuesdays a year, ticketed through CAPA. Sep 15: Gen. David Petraeus and Amb. Marie Yovanovitch on national security, moderated by Bret Stephens.", p:"Ticketed", conf:"ok", url:"https://www.capa.com/events/"}
];

var COMEDY = [
 {t:"Tue 8:00pm", n:"Twofer Tuesday, The Attic Comedy Club", w:"Downtown, at The Walrus", d:"Two comics on one stage, zero script, all crowd work. Free, with 2-for-1 well drinks and doors at 7. Temporarily at The Walrus (143 E Main) while the Oak Street room is under construction.", p:"Free", conf:"ok", url:"https://theatticcomedyclub.com/twofer-tuesday-columbus"},
 {t:"Tue 7:30pm", n:"Free Tuesday night at the Funny Bone", w:"Easton · 21+", d:"The club opens its doors free most Tuesdays: doors 6, show 7:30, lineup posted week to week. Their calendar page wasn't reachable this week, so confirm before driving to Easton.", p:"Free", conf:"warn", url:"https://columbus.funnybone.com/calendar/"}
];

var FUNNYBONE = [];

var CAL = [
 {m:"Aug",n:25,items:[
   {p:"star",t:"Tame Impala at Nationwide Arena",d:"Deadbeat Tour, 7pm. The biggest Tuesday show of the fall."},
   {p:"",t:"Tray Wellington Band at Woodlands Tavern",d:"7pm, about $20, all ages. Kentucky banjo phenom; you're home by 10."},
   {p:"free",t:"Free Tuesday night at the Funny Bone",d:"Doors 6, show 7:30, 21+."},
   {p:"",t:"Euro Bike Night at Hofbrauhaus",d:"6–9pm in Grandview Yard, second-to-last of the season."}
 ]},
 {m:"Sep",n:1,items:[
   {p:"star",t:"Dime-A-Dog Night: Clippers vs Iowa",d:"6:35 at Huntington Park. Ten-cent hot dogs, an institution since 1977."},
   {p:"free",t:"Twofer Tuesday at The Walrus",d:"The Attic's crowd-work show, doors 7, show 8."},
   {p:"",t:"Trivia Tuesday at Union Cafe",d:"7pm with Blonde Vanity."}
 ]},
 {m:"Sep",n:8,items:[
   {p:"last call",t:"Euro Bike Nights season finale",d:"Hofbrauhaus Grandview, 6–9pm. Back in April."},
   {p:"",t:"Blues jam at The Crazee Mule",d:"8pm. The Columbus Blues Alliance's second-Tuesday open jam."},
   {p:"free",t:"Trivia and a Movie at Land-Grant",d:"6:30 in the beer garden, weather permitting."}
 ]},
 {m:"Sep",n:15,items:[
   {p:"star",t:"Clippers vs St. Paul: last Dime-A-Dog of the year",d:"6:35 at Huntington Park; the home season ends that Sunday."},
   {p:"",t:"Petraeus and Yovanovitch in New Albany",d:"New Albany Lecture Series, moderated by Bret Stephens. Tickets via CAPA."},
   {p:"free",t:"Karaoke at Oddfellow's",d:"9pm in the Short North."}
 ]},
 {m:"Sep",n:22,items:[
   {p:"star",t:"Phoebe Bridgers at Nationwide Arena",d:"7:30pm. Sold out; it's resale or nothing, so budget accordingly."},
   {p:"",t:"Bluegrass jam at Dick's Den",d:"9pm, no cover."},
   {p:"free",t:"Twofer Tuesday at The Walrus",d:"Doors 7, show 8."}
 ]},
 {m:"Sep",n:29,items:[
   {p:"star",t:"Jim Henson's Labyrinth: In Concert",d:"KEMBA Live!, doors 7, show 8, all ages. The film with its score played live, for the 40th anniversary."},
   {p:"free",t:"Summer League Trivia at Honest Friend",d:"7–9pm on the South Side."},
   {p:"",t:"Line dancing at Black Swan",d:"Lessons 7–9, requests until midnight, Hilliard."}
 ]},
 {m:"Oct",n:6,items:[
   {p:"star",t:"Death Becomes Her opens at the Ohio Theatre",d:"Broadway in Columbus, opening night of a run through Sunday. From $52."},
   {p:"",t:"Freya Skye at KEMBA Live!",d:"Outdoor stage, rain or shine, with Alex Sampson."},
   {p:"free",t:"Free Tuesday night at the Funny Bone",d:"Doors 6, show 7:30, 21+."}
 ]},
 {m:"Oct",n:13,items:[
   {p:"star",t:"Blue Jackets vs Florida",d:"Nationwide Arena; early 6:15 puck drop for the NHL's Frozen Frenzy night."},
   {p:"",t:"Eyehategod at Ace of Cups",d:"New Orleans sludge metal. The bar only posts a few weeks out; confirm before you go."},
   {p:"",t:"Blues jam at The Crazee Mule",d:"8pm, second Tuesday."}
 ]}
];

window.PAGE = {
  day: "Tuesday",
  researched: "August 20, 2026",
  calRange: "Aug 25 - Oct 13",
  comedyEyebrow: "The free night in local comedy",
  comedyIntro: "Tuesday comedy in Columbus costs nothing if you play it right: the Attic's crowd-work show is free with 2-for-1 wells, and the Funny Bone's Tuesday showcase is free most weeks (that one's 21+). Both fill in closer to showtime, and The Walrus will feed you first.",
  headlinersTitle: "Tuesday headliners at the Funny Bone",
  headlinersNote: "Tuesdays at the club are free showcase nights rather than ticketed headliners; the touring names land Thursday through Sunday.",
  sources: [
    ["Nationwide Arena","https://www.nationwidearena.com/events"],
    ["Columbus Clippers","https://www.milb.com/columbus/tickets/dime-a-dog-night"],
    ["Columbus Blue Jackets","https://www.nhl.com/bluejackets/news/blue-jackets-announce-2026-27-regular-season-nhl-schedule"],
    ["PromoWest Productions","https://promowestlive.com/"],
    ["Broadway in Columbus","https://columbus.broadway.com/shows/death-becomes-her/"],
    ["CAPA","https://www.capa.com/events/"],
    ["Woodlands Tavern","https://woodlandsproductions.com/"],
    ["The Attic Comedy Club","https://theatticcomedyclub.com/twofer-tuesday-columbus"],
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["WTF Music Trivia","https://wtfmusictrivia.com/play"],
    ["Land-Grant Brewing","https://landgrantbrewing.com/events/"],
    ["Union Cafe","https://www.unioncafe.com/events"],
    ["Honest Friend Brewing","https://www.honestfriendbrewing.com/events-calendar"],
    ["Columbus Blues Alliance","https://columbusblues.com/events-calendar/"],
    ["Columbus In Line Dance Collective","https://columbuslinedance.com/"],
    ["Columbus Running Company","https://columbusrunning.com/pages/free-weekly-runs-walks"],
    ["Condado Tacos","https://www.condadotacos.com/"],
    ["Agave & Rye","https://www.agaveandrye.com/specials"],
    ["PBR Cowboy Bar","https://pbrcowboybar.com/columbus/"],
    ["The Pearl","https://thepearlrestaurant.com/locations-menus/short-north/events/"],
    ["Experience Columbus","https://www.experiencecolumbus.com/event/euro-bike-nights!/78797/"],
    ["Columbus Navigator","https://www.columbusnavigator.com/taco-tuesday-specials-columbus/"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
