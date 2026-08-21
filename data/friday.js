/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, with a riverfront patio pointed at the skyline. Crudo, wagyu skewers, and the hummus everyone writes about.", hours:"Fri 5–10pm", conf:"ok", res:"Book ahead", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe.", hours:"Fri 4–10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Metsi's Wood-Fired Italian", hood:"Italian Village", kind:"dinner", opened:"Jun 2025", d:"From the Chapman's Eat Market and Ginger Rabbit team. Two floors around a wood hearth driving the pastas and grilled meats. Happy hour 4–6 before the rush.", hours:"Fri 4–10pm", conf:"ok", res:"Book ahead", url:"https://www.metsisitalian.com/"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened after eight dark years, now run by Wolf's Ridge. Blonde French onion soup with raclette, sirloin filet over sunchoke puree, sticky toffee pudding.", hours:"Fri 11am–10pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river, probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib.", hours:"Fri hours unposted online; call", conf:"warn", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"isla", hood:"Merion Village", kind:"dinner", opened:"Jul 2025", d:"Eight courses at a shared table ($150pp) or nine at the chef's counter over the kitchen ($200pp). The most ambitious new room in the city; Friday seatings go first.", hours:"Check the Tock calendar", conf:"warn", res:"Prepaid, Tock", url:"https://www.exploretock.com/isla--columbus/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Handmade pasta, crispy chicken limone, short rib garganelli, a lasagna built to split. Fridays run latest: dinner until 11.", hours:"Fri 11am–11pm", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"House of Creole", hood:"Short North", kind:"dinner", opened:"Jul 2025", d:"Shrimp and grits, blackened salmon, cornbread, and a cocktail list that isn't shy. Southern service in the middle of High Street.", hours:"Fri 3–10:30pm", conf:"ok", res:"Recommended", url:"https://houseofcreole.com/locations"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space: traditional technique, contemporary plating.", hours:"Fri 3–10:30pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"Tabla", hood:"Northeast", kind:"soon", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road, and live Bollywood music some nights. Still listed as soft-launching on their own site, so call before driving out.", hours:"Soft launch, hours unposted", conf:"warn", res:", ", url:"https://www.tablacuisine.com/locations/"},
 {n:"Mezcla", hood:"Italian Village", kind:"dinner", opened:"Reopened Jun 2026", d:"Latin small plates and loud cocktails in a room the neighborhood crowdfunded back open after a van drove into it. Named a best new restaurant of 2026, and Friday is its late night.", hours:"Fri 4–11pm", conf:"ok", res:"Reservations online", url:"https://www.mezclacocina.com/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside, and a cocktail list that photographs well. Open to 1am Fridays, one of the latest rooftops in town.", hours:"Fri 4pm–1am", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar with no screens and no playlists: everything comes off vinyl and cassette, and bringing a record in gets you a drink. Real hours are finally posted.", hours:"Fri 5pm–midnight", conf:"ok", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"The Shapeshifter", hood:"Franklinton", kind:"drinks", opened:"Jun 2026", d:"A cocktail bar whose entire theme, decor and menu together, changes on a rotation. The current menu is a greatest-hits compilation of past favorites.", hours:"Fri 5pm–midnight", conf:"ok", res:"Walk in", url:"https://www.shapeshiftercolumbus.com/"},
 {n:"Huli Huli Tiki Lounge", hood:"Downtown", kind:"drinks", opened:"May 2026", d:"Downtown's first tiki bar since 2019: hand-carved wood, custom Moai, about twelve bar seats. Small and immersive, so go early. The site only posts hours for the Powell original (Fri 4:30–11), so confirm downtown.", hours:"Downtown hours unposted", conf:"warn", res:"No reservations", url:"https://www.hulihulipowell.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room.", hours:"Daily 4pm–midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},
 {n:"Lani Rooftop Lounge", hood:"Powell", kind:"drinks", opened:"Apr 2026", d:"Powell's first rooftop: fire pit, harissa cauliflower, burrata flatbread. Worth the drive when you want a Friday that isn't the Short North.", hours:"Fri 4–11pm", conf:"ok", res:"OpenTable", url:"https://lanirooftop.com/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list, and open until 1am on Fridays. Palomino Coffee runs out of the same room during the day.", hours:"Fri 3pm–1am", conf:"ok", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"The Daily Etcetera", hood:"German Village", kind:"drinks", opened:"Jun 2026", d:"Five separate patio spaces, which nothing else in German Village can say. Craft beer plus an actual cocktail list now.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://thedailygrowler.com"},
 {n:"Coldbar", hood:"Italian Village", kind:"drinks", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla; still confirm it has actually opened.", hours:"Confirm it has opened", conf:"warn", res:", ", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/04/29/try-cold-tapas-and-craft-cocktails-at-coldbar-opening-in-august/89855560007/"},

 {n:"Mid City Garage", hood:"German Village", kind:"casual", opened:"2025", d:"Roll-up doors, patio lights, thin-crust pizza and a full cocktail bar that stays open past the kitchen. Unpretentious on purpose.", hours:"Fri 4–11pm kitchen, bar later", conf:"ok", res:"Walk in", url:"https://www.midcitygarage.com/"},
 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"The neighborhood's first ramen shop: tonkotsu with black garlic oil, spicy miso, and a real vegan bowl. Their site wouldn't load for us, so trust but verify.", hours:"Fri 11am–10pm reported", conf:"warn", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space, with craft cocktails and long, steady hours. The reliable answer when the group can't decide.", hours:"Fri 11am–10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong-style dim sum, 55 items, all of it meant to be pushed across the table at each other.", hours:"Fri 11am–9pm reported", conf:"warn", res:", ", url:"https://www.dimsumab.com/"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024–25", d:"Named a top-ten brewery in the country this year. Specializes in 3.5–5% beer, community art on the walls, food trucks outside, and Friday is one of its two midnight-close nights.", hours:"Fri 4pm–midnight", conf:"ok", res:"Walk in", url:"https://www.honestfriendbrewing.com/info-and-taplist"},
 {n:"Budd Dairy Food Hall", hood:"Italian Village", kind:"casual", opened:"2021", d:"Nine-ish chef stalls under one roof plus a rooftop bar. The right first stop for a group that can't pick a cuisine, and the bar pours to midnight on Fridays.", hours:"Fri 11am–midnight bar, stalls to 11", conf:"ok", res:"Walk in", url:"https://budddairyfoodhall.com/"},
 {n:"Land-Grant Brewing", hood:"Franklinton", kind:"casual", opened:"2014", d:"The beer garden anchor of Franklinton, a short walk from the arts district galleries. Free shows some Fridays and a taproom that runs to midnight.", hours:"Fri 11am–midnight", conf:"ok", res:"Walk in", url:"https://landgrantbrewing.com/events/"},

 {n:"Welcome to the Farm", hood:"Short North", kind:"soon", opened:"Opens Aug 22, 2026", d:"Chase Rice's country bar under Good Night John Boy: rotating country DJs, live music, a deep bourbon list. Opens Saturday, so its first full Friday is Aug 28; hours still being finalized.", hours:"Hours not yet posted", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy directly underneath. Memberships open in September.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"7:15 & 9:30pm", cat:"music", n:"Friday headliners at Ginger Rabbit", w:"Short North", d:"Two $30 seated sets in the best date-night basement in the city, plus a $10 Power Hour show at 5:30 if you want jazz before dinner. Friday bills sell out; this week's already had.", p:"$10–30", conf:"ok", url:"https://gingerrabbitjazz.turntabletickets.com/"},
 {t:"5:15–7:00pm", cat:"music", n:"Free happy hour show at Natalie's Grandview", w:"Grandview", d:"A no-cover set with table service, then the two ticketed stages kick in around 8 and 8:30. Reserve the free show anyway, and tip the band.", p:"Free", conf:"ok", url:"https://nataliesgrandview.com/events/list/"},
 {t:"Doors 6–9pm", cat:"music", n:"Somebody's headlining a PromoWest room", w:"Arena District & campus", d:"KEMBA Live!, the Newport, A&R and the Bluestone all program Fridays hard: Gavin Adcock Aug 28, Insane Clown Posse and Minus the Bear Sep 4, Bilmuri and Gogol Bordello Sep 18, Two Door Cinema Club Sep 25.", p:"Varies", conf:"ok", url:"https://promowestlive.com/"},
 {t:"Evenings", cat:"music", n:"Beer garden shows at Land-Grant", w:"Franklinton", d:"Free bands land in the beer garden some Fridays (Saylor Twift, a Taylor Swift tribute, plays Aug 28, 7–9). The taproom runs to midnight either way.", p:"Free", conf:"ok", url:"https://landgrantbrewing.com/events/"},

 {t:"4–6pm", cat:"food", n:"$3 oysters at The Pearl", w:"Short North", d:"The weekday happy hour runs Fridays too: $3 oysters raw, baked or fried, plus half-off drinks, apps and pub burgers. The cheap warm-up before the expensive part of the night.", p:"$3 each", conf:"ok", url:"https://thepearlrestaurant.com/locations-menus/short-north/events/"},
 {t:"4–6pm", cat:"food", n:"Half-off sushi hour at SoCal", w:"Short North", d:"Half-price sushi, starters, wine pours and specialty cocktails, $6 drafts and wells, $3 oysters. Kitchen runs 4–10 on Fridays.", p:"1/2 off", conf:"ok", url:"https://socalkitchenandbar.com/events/"},
 {t:"4–6pm", cat:"food", n:"614 Happy Hour at Budd Dairy", w:"Italian Village", d:"Deals across the chef stalls Tuesday through Friday, and the rooftop bar pours until midnight. Solves the group that wants five different dinners.", p:"Deals", conf:"ok", url:"https://budddairyfoodhall.com/"},
 {t:"Late", cat:"food", n:"The 2am food circuit", w:"Short North & campus", d:"Mikey's Late Night Slice and the High Street gyro windows exist for exactly this night, and Buckeye Donuts is the campus institution that never seems to close. Late hours post week to week; confirm before you stumble.", p:"Cheap", conf:"warn", url:"https://mikeyslatenightslice.com/"},
 {t:"In season", cat:"food", n:"Friday fish fries (not yet)", w:"Citywide", d:"The church-basement and VFW fish fry is a Lent ritual here, and the circuit doesn't wake up until February. Old Bag of Nails does fish and chips year-round if the craving won't wait.", p:", ", conf:"warn", url:"https://www.oldbagofnails.com/"},

 {t:"No, really", cat:"trivia", n:"Trivia takes Fridays off", w:"Citywide", d:"Every quiz company in town runs Sunday through Thursday; Excesss is literally advertising for a Friday venue on its own schedule page. If your table needs structure tonight, it's karaoke or a salsa lesson.", p:", ", conf:"ok", url:"https://triviacolumbus.com/"},

 {t:"7pm lesson, 8–11 dancing", cat:"dance", n:"Grandview Salsa Party", w:"Grandview", d:"Beginner class at 7, then three hours of salsa, bachata, merengue and line dances. No partner or experience needed. $13 online, $15 at the door.", p:"$13–15", conf:"ok", url:"https://grandviewsalsa.com/"},
 {t:"8pm lesson, 9pm–2am", cat:"dance", n:"Salsamante Fridays at Palmas Tropical Escape", w:"Downtown", d:"Lesson at 8, then DJs run Latin sets until 2am on High Street. The late-night counterpart to Grandview's early party.", p:"Cover varies", conf:"warn", url:"https://www.danceus.org/event/166266730576732/salsamante-fridays-at-palmas-tropical-escape-columbus-oh/"},
 {t:"7pm–1am", cat:"dance", n:"Friday karaoke, nine rooms deep", w:"Citywide", d:"Excesss hosts at Pickle Social Club at 7, Sequoia Pro Bowl at 8, Ledo's, Pierogi Mountain, Ruckmoor and VooDoo Brewing at 9, Cavan and Leo's at 10. Pick by neighborhood and by how warmed up you need to be.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},
 {t:"Doors 8–9pm", cat:"dance", n:"Theme dance parties at the Newport", w:"Campus", d:"Between tours the old hall flips into a club: Bop to the Top, a High School Musical night (18+), lands Aug 28, and Daft Disko takes Oct 2.", p:"Ticketed", conf:"ok", url:"https://promowestlive.com/"},
 {t:"6:30pm–2am", cat:"dance", n:"Live music then bull riding at PBR Cowboy Bar", w:"Easton", d:"An acoustic set 6:30–8:30, then the mechanical bull runs to close. 21+ after 9pm; the formal line-dance lessons are a Thursday thing, but nobody stops you.", p:"No cover listed", conf:"ok", url:"https://pbrcowboybar.com/columbus/"},

 {t:"Evenings thru Sep 6", cat:"culture", n:"Free theatre in Schiller Park", w:"German Village", d:"Actors' Theatre closes its free outdoor season with Agatha Christie's And Then There Were None. Bring a blanket and a picnic; curtain times shift late in the season, so check first.", p:"Free", conf:"warn", url:"https://www.theactorstheatre.org/"},
 {t:"Showtimes vary", cat:"culture", n:"Films at the Wex", w:"OSU campus", d:"The Wexner Center's cinema leans into Fridays: Aug 28 is a LEGO Batman and Birdcage double feature at 7 with a collage workshop first. The fall calendar posts on a rolling basis.", p:"Varies", conf:"ok", url:"https://wexarts.org/film-video"}
];

var MONTHLY = [
 {t:"2nd Fri", n:"Franklinton Fridays", w:"Franklinton", d:"The arts district opens its galleries and studios 6–10pm with vendors, DJs and food trucks; Sep 11 and Oct 9 are next. This is the gallery night that actually lands on a Friday. The Short North's Gallery Hop is a first-Saturday thing.", p:", ", conf:"ok", url:"https://www.franklintonartsdistrict.com/events/calendar"},
 {t:"1st Fri", n:"First Friday in downtown Delaware", w:"Delaware · 30 min north", d:"Main Street turns into a free 6–9pm block party with themes: Sep 4 is a Back to School Bash, Oct 2 is Stop, Drop, and Dance with the fire department. A low-stakes small-town date.", p:"Free", conf:"ok", url:"https://www.mainstreetdelaware.com/"},
 {t:"4th Fri", n:"Fourth Friday in Uptown Westerville", w:"Westerville", d:"A 6–9pm street festival with vendor booths and stages: Aug 28 is School Spirit, Sep 25 is the Autumn Festival, Oct 23 is Midnight Madness.", p:", ", conf:"ok", url:"https://uptownwestervilleinc.com/uwi-presents/fourth-friday-uptown-street-festivals/"},
 {t:"Monthly Fri", n:"Happenstance at Honest Friend Brewing", w:"South Side", d:"A free themed art-and-music night with Lion Petal in one of the best-regarded taprooms in the country; Preservation runs Aug 21, 6–9pm. Watch their calendar for the next one.", p:"Free", conf:"ok", url:"https://www.honestfriendbrewing.com/events-calendar"},
 {t:"Every month or two", n:"Emo Nite at A&R Music Bar", w:"Arena District", d:"The touring sad-songs dance party keeps Columbus on rotation. Next one lands Friday Sep 25, doors 9pm.", p:"Ticketed", conf:"ok", url:"https://promowestlive.com/"}
];

var COMEDY = [
 {t:"Fri 7:00 & 9:45pm", n:"Columbus Funny Bone", w:"Easton · 21+", d:"Friday is the club's marquee night: every headliner plays twice. The 7:00 is the date show; the 9:45 gets rowdier. Full schedule below.", p:"$20–75", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Fri 7:30pm", n:"Screamers at Shadowbox Live", w:"Brewery District · thru Nov 14", d:"Nightmare-themed sketch comedy with a live rock band, table seating and a full bar and kitchen. Friday pricing runs higher than the pay-what-you-want Thursdays; times sit behind their booking system, so confirm when you buy.", p:"Varies", conf:"warn", url:"https://shadowboxlive.org/"},
 {t:"Fri nights", n:"The Nest Theatre", w:"Old North", d:"The city's only dedicated improv theater does its heaviest lifting on Fridays and Saturdays: Chicago longform, Armando CBus, showcases. Their listings page loads when it feels like it; check socials.", p:"Check site", conf:"warn", url:"https://nesttheatre.com/shows/"},
 {t:"Some Fri", n:"The Attic Comedy Club", w:"Olde Towne East", d:"Back home on Oak Street after a spell downtown. Touring headliners land on some Fridays, but the August calendar was posting empty when we checked; confirm before building a night around it.", p:"Check site", conf:"warn", url:"https://theatticcolumbus.standuptix.com/calendar"},
 {t:"Aug 27–30", n:"Columbus Comedy Festival", w:"Citywide", d:"Friday Aug 28 is the festival's deepest night: eighteen shows, from Female AF at MadLab at 6pm through a 10:30 crowd-work show at Seventh Son, with Arnez J twice at the Funny Bone.", p:"Varies", conf:"ok", url:"https://columbuscomedyfest.com/2026-schedule/"}
];

var FUNNYBONE = [
 ["Aug 21","Rocky Dale Davis","$32–42"],["Aug 28","Arnez J.","$42–52"],["Sep 4","Gary Owen","$65–75"],
 ["Sep 11","Tony Rock","$30–35"],["Sep 18","Chris Porter","$20"],["Sep 25","Nick Mullen","$37–47"],
 ["Oct 2","Steph Tolev · 18+","$29–34"],["Oct 9","Drew Lynch","$37–47"],["Oct 16","Amber Autry","$32–37"],
 ["Oct 23","Kountry Wayne","$48–58"],["Oct 30","Lil Duval","$42–52"],["Nov 6","Ashley Gavin","$37–47"],
 ["Nov 13","Ms. Pat","$37–47"],["Nov 20","Kyle Kinane","$37–47"],["Nov 27","Desi Banks","$42–52"],
 ["Dec 4","John Morgan","$15"],["Dec 11","Andrew Schulz","$50"],["Dec 18","Rene Vaca","$32–69"]
];

var CAL = [
 {m:"Aug",n:21,items:[
   {p:"star",t:"Pippin at the Garden Theatre",d:"Short North Stage opens its season; runs through Aug 30."},
   {p:"",t:"Clippers vs. St. Paul, Margaritaville Night",d:"7:05pm at Huntington Park. Select drafts are $5 at every Friday home game."},
   {p:"",t:"Citizen at the Newport",d:"Halcyon Blues tour with Anxious, Hotline TNT and Rocket. Doors 6pm."},
   {p:"free",t:"Happenstance: Preservation at Honest Friend",d:"Themed art night with Lion Petal, 6–9pm on the South Side."},
   {p:"",t:"Elvis memorial night at Natalie's",d:"Sons of Gladys at 8pm, $30 seated; Miles Nielsen plays the other stage at 8:30."}
 ]},
 {m:"Aug",n:28,items:[
   {p:"star",t:"Nikki Glaser at the Palace Theatre",d:"The Stunning Tour, second of two nights downtown."},
   {p:"",t:"Columbus Comedy Festival's deep night",d:"Eighteen shows citywide, 6pm to past midnight. Roast Battle at Seventh Son, 8:45."},
   {p:"",t:"Gavin Adcock at KEMBA Live!",d:"Outdoors with Corey Kent, doors 5:30pm."},
   {p:"18+",t:"Bop to the Top at the Newport",d:"High School Musical dance party, doors 8pm."},
   {p:"free",t:"Saylor Twift at Land-Grant",d:"Taylor Swift tribute in the beer garden, 7–9pm."}
 ]},
 {m:"Sep",n:4,items:[
   {p:"star",t:"Columbus Greek Festival opens",d:"4–11pm at the Annunciation Cathedral; $10 covers the whole Labor Day weekend."},
   {p:"",t:"Gary Owen at the Funny Bone",d:"7 and 9:45pm, $65–75. Friday of a four-night stand."},
   {p:"",t:"Insane Clown Posse at KEMBA Live!",d:"Outdoors, doors 6pm. Do not wear anything you love."},
   {p:"",t:"Minus the Bear at the Newport",d:"Menos el Oso 20th anniversary, doors 6:30pm."},
   {p:"",t:"Clippers vs. Iowa",d:"7:05pm. Two Friday home games left in the season."},
   {p:"free",t:"And Then There Were None, closing weekend",d:"Free Agatha Christie in Schiller Park, through Sunday."}
 ]},
 {m:"Sep",n:11,items:[
   {p:"star",t:"Columbus Oktoberfest opens",d:"5pm–midnight at the Ohio Expo Center. Free admission, runs through Sunday."},
   {p:"free",t:"Franklinton Fridays",d:"Galleries and studios open 6–10pm across the arts district."},
   {p:"",t:"Dusty Slay at the Southern Theatre",d:"The Neighborhood Guy tour, 7pm."},
   {p:"",t:"BalletMet: Future Icons",d:"Sep 10–12 at the BalletMet Performance Space."},
   {p:"",t:"Tony Rock at the Funny Bone",d:"7 and 9:45pm, $30–35."}
 ]},
 {m:"Sep",n:18,items:[
   {p:"star",t:"Columbus Symphony opening night",d:"Rachmaninoff and Bartok with pianist Eva Gevorgyan, 7:30pm at the Ohio Theatre."},
   {p:"",t:"Punch Brothers at the Southern",d:"8pm, from $43.50. Chris Thile in a room built for strings."},
   {p:"",t:"Bilmuri at KEMBA Live!",d:"Doors 6pm, outdoors. Jane Remover plays the Newport and Gogol Bordello the Bluestone the same night."},
   {p:"",t:"Jagged Little Pill, first Friday",d:"The Contemporary's season opener at the Riffe Center, through Oct 4."},
   {p:"last call",t:"Clippers vs. St. Paul",d:"7:05pm. The final Friday home game of the year."}
 ]},
 {m:"Sep",n:25,items:[
   {p:"star",t:"Two Door Cinema Club at KEMBA Live!",d:"Tourist History 15th anniversary with STRFKR. Doors 6:30pm, outdoors."},
   {p:"",t:"Sweeney Todd, first Friday",d:"Short North Stage at the Garden Theatre, through Oct 18."},
   {p:"",t:"Scioto Mile Concert: Dan Tyminski Band",d:"Downtown on the riverfront, presented by CAPA and Rec & Parks."},
   {p:"",t:"Emo Nite at A&R Music Bar",d:"Doors 9pm."},
   {p:"",t:"Fourth Friday: Autumn Festival",d:"Uptown Westerville street festival, 6–9pm."}
 ]},
 {m:"Oct",n:2,items:[
   {p:"star",t:"Dvorak & Brahms at the Ohio Theatre",d:"Columbus Symphony Masterworks, Friday and Saturday."},
   {p:"",t:"Daft Disko at the Newport",d:"Doors 9pm."},
   {p:"",t:"Zolita at A&R Music Bar",d:"The Hell's Belles tour, doors 7pm."},
   {p:"free",t:"First Friday in Delaware: Stop, Drop, and Dance",d:"6–9pm on Main Street, fire trucks included."},
   {p:"last call",t:"Jagged Little Pill, final Friday",d:"Closes Sunday at the Riffe Center."}
 ]},
 {m:"Oct",n:9,items:[
   {p:"star",t:"Death Becomes Her at the Ohio Theatre",d:"PNC Broadway in Columbus, Oct 6–11. Friday night of an eight-show week."},
   {p:"free",t:"Franklinton Fridays",d:"Galleries open 6–10pm."},
   {p:"21+",t:"NightLight 614: Sinners",d:"Outdoor movie for grown-ups; confirm the location when you buy."},
   {p:"",t:"Sweeney Todd at the Garden Theatre",d:"Two more weekends."},
   {p:"",t:"Drew Lynch at the Funny Bone",d:"7 and 9:45pm, $37–47."}
 ]}
];

window.PAGE = {
  day: "Friday",
  researched: "August 20, 2026",
  calRange: "Aug 21 – Oct 9",
  comedyEyebrow: "The deepest comedy night of the week",
  comedyIntro: "Friday is when the Funny Bone runs its headliners twice, 7:00 and 9:45, both 21+. The early show is the date show and sells first; the 9:45 is looser. Buy from the club directly, resale sites were listing the same seats at a markup.",
  headlinersTitle: "Friday headliners at the Funny Bone",
  headlinersNote: "Easton, 21+ except where noted. Doors 5:30 for the 7:00 show, 9:15 for the 9:45. Prices are the club's own.",
  sources: [
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["PromoWest (KEMBA Live!, Newport, A&R, Bluestone)","https://promowestlive.com/"],
    ["CAPA","https://www.capa.com/events/"],
    ["Columbus Symphony","https://www.columbussymphony.com/"],
    ["BalletMet","https://www.balletmet.org/performances/"],
    ["Broadway in Columbus","https://columbus.broadway.com/shows/death-becomes-her/"],
    ["Columbus Clippers","https://www.milb.com/columbus/schedule"],
    ["Columbus Greek Festival","https://columbusgreekfestival.com/"],
    ["Columbus Oktoberfest","https://www.columbusoktoberfest.com/"],
    ["Franklinton Arts District","https://www.franklintonartsdistrict.com/events/calendar"],
    ["Main Street Delaware","https://www.mainstreetdelaware.com/"],
    ["Uptown Westerville Inc","https://uptownwestervilleinc.com/uwi-presents/fourth-friday-uptown-street-festivals/"],
    ["Ginger Rabbit","https://gingerrabbitjazz.turntabletickets.com/"],
    ["Natalie's Grandview","https://nataliesgrandview.com/events/list/"],
    ["Grandview Salsa","https://grandviewsalsa.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Columbus Comedy Festival","https://columbuscomedyfest.com/2026-schedule/"],
    ["NightLight 614","https://nightlightseries.com/columbus"],
    ["Wexner Center","https://wexarts.org/film-video"],
    ["Land-Grant Brewing","https://landgrantbrewing.com/events/"],
    ["Honest Friend Brewing","https://www.honestfriendbrewing.com/events-calendar"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
