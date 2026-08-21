/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, with a riverfront patio pointed at the skyline. Crudo, wagyu skewers, and the hummus everyone writes about.", hours:"Thu 5–10pm", conf:"ok", res:"Book ahead", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe. Happy hour 4–6.", hours:"Thu 4–10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Metsi's Wood-Fired Italian", hood:"Italian Village", kind:"dinner", opened:"Jun 2025", d:"From the Chapman's Eat Market and Ginger Rabbit team. Two floors around a wood hearth driving the pastas and grilled meats.", hours:"Thu 4–9pm", conf:"ok", res:"Walk-ins ok", url:"https://www.metsisitalian.com/"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened after eight dark years, now run by Wolf's Ridge. Blonde French onion soup with raclette, sirloin filet over sunchoke purée, sticky toffee pudding.", hours:"Thu 10:30am–10pm", conf:"ok", res:"Book ahead", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river: probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib.", hours:"Thu 4–9pm", conf:"ok", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"isla", hood:"Merion Village", kind:"dinner", opened:"Jul 2025", d:"Eight courses at a shared table ($150pp) or nine at the chef's counter over the kitchen ($200pp). The most ambitious new room in the city: save it for an anniversary.", hours:"Check the Tock calendar", conf:"warn", res:"Prepaid, Tock", url:"https://www.exploretock.com/isla--columbus/"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Handmade pasta, crispy chicken limone, short rib garganelli, a lasagna built to split.", hours:"Thu 11am–10pm", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"House of Creole", hood:"Short North", kind:"dinner", opened:"Jul 2025", d:"Shrimp and grits, blackened salmon, cornbread, and a cocktail list that isn't shy. Southern service in the middle of High Street.", hours:"Thu 4–9:30pm", conf:"ok", res:"Recommended", url:"https://houseofcreolecle.com/"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space: traditional technique, contemporary plating.", hours:"Thu 3–10pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"Tabla", hood:"Northeast", kind:"dinner", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road: and live Bollywood music some nights, which is the reason to check their calendar before picking a date.", hours:"Thu 4:30–10pm dinner", conf:"ok", res:", ", url:"https://www.tablacuisine.com/locations/"},
 {n:"Mezcla", hood:"Italian Village", kind:"dinner", opened:"Reopened Jun 2026", d:"Latin small plates and loud cocktails in a room the neighborhood crowdfunded back open after a van drove into it. Named a best new restaurant of 2026.", hours:"Hours unposted", conf:"warn", res:"Reservations online", url:"https://www.mezclacocina.com/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside, and a cocktail list that photographs well. More party than hush.", hours:"Thu 4–11pm", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar with no screens and no playlists: everything comes off vinyl and cassette, and bringing a record in gets you a drink. Newest bar on this list by a week.", hours:"Too new to have posted hours", conf:"warn", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"The Shapeshifter", hood:"Franklinton", kind:"drinks", opened:"Jun 2026", d:"A cocktail bar whose entire theme: décor and menu together: changes on a rotation. Which makes it the rare bar that's a different date every few months.", hours:"Thu 5–11pm reported", conf:"warn", res:"Walk in", url:"https://www.shapeshiftercolumbus.com/"},
 {n:"Huli Huli Tiki Lounge", hood:"Downtown", kind:"drinks", opened:"May 2026", d:"Downtown's first tiki bar since 2019: hand-carved wood, custom Moai, about twelve bar seats. Small and immersive, so go early. Free street parking after 5:30.", hours:"Thu 4:30–10:30pm", conf:"ok", res:"No reservations", url:"https://www.hulihulipowell.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room.", hours:"Daily 4pm–midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},
 {n:"Lani Rooftop Lounge", hood:"Powell", kind:"drinks", opened:"Apr 2026", d:"Powell's first rooftop: fire pit, harissa cauliflower, burrata flatbread. Worth the drive when you want a night that isn't the Short North.", hours:"Thu 4–10pm", conf:"ok", res:"OpenTable", url:"https://lanirooftop.com/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list. Palomino Coffee runs out of the same room during the day.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"The Daily Etcetera", hood:"German Village", kind:"drinks", opened:"Jun 2026", d:"Five separate patio spaces, which nothing else in German Village can say. Craft beer plus an actual cocktail list now.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://thedailygrowler.com"},
 {n:"Coldbar", hood:"Italian Village", kind:"drinks", opened:"Targeted Aug 2026", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla.", hours:"Confirm it has actually opened", conf:"warn", res:", ", url:"https://www.columbusmonthly.com/story/lifestyle/food/2026/04/29/try-cold-tapas-and-craft-cocktails-at-coldbar-opening-in-august/89855560007/"},

 {n:"Mid City Garage", hood:"German Village", kind:"casual", opened:"2025", d:"Roll-up doors, patio lights, thin-crust pizza and a full cocktail bar that stays open past the kitchen. Unpretentious on purpose.", hours:"Thu 4–10pm", conf:"ok", res:"Walk in", url:"https://www.midcitygarage.com/"},
 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"The neighborhood's first ramen shop: tonkotsu with black garlic oil, spicy miso, and a real vegan bowl.", hours:"Thu 11am–9pm", conf:"ok", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space, with craft cocktails and the longest hours on this page: the reliable answer when nothing else is open.", hours:"Thu 11am–10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong–style dim sum, 55 items, all of it meant to be pushed across the table at each other.", hours:"Thu 11am–9pm", conf:"ok", res:", ", url:"https://www.dimsumab.com/"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024–25", d:"Named a top-ten brewery in the country this year. Specializes in 3.5–5% beer, which is the correct move on a weeknight. Community art on the walls, food trucks outside.", hours:"Thu 4–10pm", conf:"ok", res:"Walk in", url:"https://www.honestfriendbrewing.com/"},

 {n:"Welcome to the Farm", hood:"Short North", kind:"soon", opened:"Opens Aug 22, 2026", d:"Chase Rice's country bar under Good Night John Boy: rotating country DJs, live music, a deep bourbon list. Loud by design.", hours:"Hours not yet posted", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/country-music-stars-tennessee-inspired-bar-announces-short-north-opening-date"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy directly underneath. Memberships open in September.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"6:00 & 8:15pm", cat:"music", n:"Ginger Rabbit Jazz Lounge", w:"Short North", d:"Two seated sets in a basement room that may be the best date-night space in the city. Thursday is the value night: Friday headliners run $30.", p:"$10", conf:"ok", url:"https://gingerrabbitjazz.turntabletickets.com/"},
 {t:"6:30–8:30pm", cat:"music", n:"Jazz Night with The Brewtet", w:"Zaftig Brewing · Worthington", d:"A house band backing a different guest artist every single week, so it never repeats. No cover.", p:"Free", conf:"ok", url:"https://www.jazzcolumbus.com/venues"},
 {t:"9:00–11:00pm", cat:"music", n:"Thomas Crumley at Club Diversity", w:"Brewery District", d:"Piano and vocals in a Victorian house turned piano bar. A nightcap with a soundtrack.", p:"No cover", conf:"warn", url:"https://clubdiversity.com/entertainment-events/"},
 {t:"9:00pm", cat:"music", n:"Live band karaoke at Bristol Republic", w:"Short North", d:"Karaoke with an actual band behind you: the only one in town. Confirm on their Instagram; the schedule posts week to week.", p:"No cover", conf:"warn", url:"https://www.bristolrepublic.com/"},

 {t:"All day", cat:"food", n:"$3 oyster night at The Pearl", w:"Short North", d:"Raw, baked or fried, three dollars each, all night. Happy hour 4–6 stacks half-off snacks and drinks on top.", p:"$3 each", conf:"ok", url:"https://thepearlrestaurant.com/locations-menus/short-north/events/"},
 {t:"6:30–9:00pm", cat:"food", n:"Thursday wine tasting at House Wine", w:"Old Worthington", d:"A guided themed flight: 3oz pours of four or five wines with notes. Call to confirm the week's theme.", p:"~$15", conf:"warn", url:"https://housewineonhigh.com/"},
 {t:"All day", cat:"food", n:"Half-off handhelds and drafts at SoCal", w:"Short North", d:"Happy hour 4–6 adds $3 oysters, half-price sushi and $6 drafts.", p:"1/2 off", conf:"ok", url:"https://socalkitchenandbar.com/events/"},
 {t:"6:00–9:00pm", cat:"food", n:"69¢ wings and $3 beer at Hoof Hearted", w:"Italian Village", d:"One of a dozen genuinely good Thursday deals around town: Barley's does an $8 smashburger, BrewDog does all-you-can-eat wings for $15.", p:"$3 beer", conf:"warn", url:"https://www.columbusonthecheap.com/columbus-happy-hours/"},

 {t:"7:00pm", cat:"trivia", n:"WTF Music Trivia at Land-Grant", w:"Franklinton", d:"Music trivia in the taproom and beer garden. Also running at Saucy Brew Works in Harrison West, same night, same time.", p:"Free", conf:"ok", url:"https://landgrantbrewing.com/tag/thursdays/"},
 {t:"7:00–9:00pm", cat:"trivia", n:"Thursday Trivia at Understory", w:"Old North", d:"Rotating theme every week, sign up by 6:45, and first place takes a $50 gift card.", p:"Free", conf:"ok", url:"https://www.understorycbus.com/public-events/thursday-trivia"},
 {t:"8:00–10:00pm", cat:"trivia", n:"Trivia and 500 board games at The Forge Tavern", w:"Bethel Rd", d:"General knowledge at 8, a themed round at 9, a full cocktail bar and a wall of games either way. It fills up: reserve.", p:"$5 + 2 drinks", conf:"ok", url:"https://theforgetavern.com/events/"},
 {t:"7:00–8:00pm", cat:"trivia", n:"The Excesss Trivia circuit", w:"Six venues", d:"Same host, six rooms: Good Night John Boy and Park St. Tavern at 7, music trivia at Ohio Brewing at 7, Zeno's at 8, plus Olentangy River Brewing in Lewis Center.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},

 {t:"9:00–11:00pm", cat:"dance", n:"Line dancing at PBR Cowboy Bar", w:"Easton", d:"Instruction then open dancing, live music beforehand from 6:30, and a mechanical bull if the night goes that way. $3 wells, 21+ after 9.", p:"No cover", conf:"ok", url:"https://pbrcowboybar.com/columbus/"},
 {t:"7:00–10:00pm", cat:"dance", n:"Karaoke, twelve rooms deep", w:"Citywide", d:"Budd Dairy and North Market Bridge Park at 7, VHS Social Club at 8, Blue Danube and High Beck and Fours on High later. Pick by neighborhood and by how late you want to start.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},

 {t:"5:00–10:00pm", cat:"culture", n:"BAM Thursdays at the Columbus Museum of Art", w:"Discovery District", d:"DJs, artists working live in the sculpture garden, food and drinks, galleries open late, admission free. Season ends September 10: three Thursdays left.", p:"Free", conf:"ok", url:"https://www.columbusmuseum.org/bam-thursdays"},
 {t:"5:00–9:00pm", cat:"culture", n:"$5 evenings at the Columbus Museum of Art", w:"Discovery District", d:"When BAM season ends, the museum stays open Thursdays to 9 and admission drops to $5. The 2026–27 program calendar hasn't posted yet.", p:"$5", conf:"warn", url:"https://www.columbusmuseum.org/plan-your-visit"},
 {t:"7:30pm", cat:"culture", n:"Shadowbox Live", w:"Brewery District", d:"Sketch comedy and a live rock band; the ticket includes your table and there's a full bar and kitchen. Select Thursdays are pay-what-you-want from $20.", p:"From $20", conf:"ok", url:"https://shadowboxlive.org/"},
 {t:"6:15pm", cat:"culture", n:"Powell Pub Run at Nocterra", w:"Powell", d:"Three or four miles as a group, then beer. A different kind of Thursday if you want one.", p:"Free", conf:"ok", url:"https://columbusrunning.com/pages/free-weekly-runs-walks"}
];

var MONTHLY = [
 {t:"2nd Thu", n:"COSI After Dark", w:"Franklinton · 21+", d:"The science museum, adults only, themed. Oct 8 is a Halloween tattoo carnival, Nov 12 is Game On, Dec 10 is Blizzard Bash.", p:"Ticketed", conf:"ok", url:"https://cosi.org/afterdark/"},
 {t:"1st Thu", n:"First Thursdays at the Wexner Center", w:"OSU campus", d:"Free late night: artist talks, screenings, hands-on studio, galleries and café open. Sept 3, Oct 1, Nov 5, Dec 3.", p:"Free", conf:"ok", url:"https://wexarts.org/special-events/first-thursdays-fall-2026"},
 {t:"Select Thu", n:"Cocktails at the Conservatory", w:"Franklin Park · 21+", d:"A themed party in the glasshouses, 5:30–9:30. Sept 24 is TAILgate, Oct 29 is Spirits & Spells, Dec 3 is Sleigh Bell Sips. These sell out.", p:"$35 · $30 members", conf:"ok", url:"https://www.fpconservatory.org/cocktails/"},
 {t:"3rd Thu", n:"Jazz happy hour at North Market Bridge Park", w:"Dublin", d:"Live jazz 4–7 on top of the regular happy hour. North Market Downtown runs its own third-Thursday music happy hour 4–6.", p:"Free", conf:"ok", url:"https://northmarket.org/happy-hour-bridge-park/"},
 {t:"3rd Thu", n:"Jazz Night at Honest Friend Brewing", w:"South Side", d:"Alex Daniel & Friends, 7–9, free admission, in one of the best-regarded taprooms in the country right now.", p:"Free", conf:"ok", url:"https://www.honestfriendbrewing.com/events-calendar"}
];

var COMEDY = [
 {t:"Thu 7:30pm", n:"Screamers at Shadowbox Live", w:"Brewery District · through Nov 14", d:"Nightmare-themed sketch comedy and music, 90 minutes with one intermission. Pay-what-you-want on select Thursdays, $20 minimum, table seating included.", p:"From $20", conf:"ok", url:"https://shadowboxlive.org/events/screamers-a-nightmare-fueled-sketch-comedy-and-music-experience/"},
 {t:"Thu 7:00pm", n:"Columbus Funny Bone", w:"Easton · 21+", d:"A touring headliner most Thursdays. Full schedule below.", p:"$23–$75", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Some Thu", n:"The Attic Comedy Club", w:"Olde Towne East", d:"Thursday headliners on Sept 3, Oct 1, Nov 12 and Dec 3; free crowd-work show Tuesdays and a free open mic Wednesdays. They may be operating temporarily out of The Walrus downtown: check first.", p:"$15–$30", conf:"warn", url:"https://theatticcolumbus.standuptix.com/calendar"},
 {t:"Some Thu", n:"The Nest Theatre", w:"Old North", d:"The city's only dedicated improv theater: Chicago longform, ComedySportz, and an improvised musical. Mostly Fri/Sat with occasional Thursdays.", p:"Check site", conf:"warn", url:"https://nesttheatre.com/shows/"},
 {t:"Through Aug 30", n:"Columbus Comedy Festival", w:"Citywide · on now", d:"Most shows $15–$25, some as low as $5. Thursday Aug 27 has Greg Fitzsimmons and Nina West's Big Queer Comedy Show.", p:"$5–$115", conf:"ok", url:"https://columbuscomedyfest.com/2026-schedule/"}
];

var FUNNYBONE = [
 ["Sep 3","Gary Owen","$65–75"],["Sep 10","Steve Furey","$27–37"],["Sep 17","Gabriel Rutledge","$27"],
 ["Sep 24","Dr. Kojo","$37–59"],["Oct 1","Rocky Horror Tribute Drag Show","$27–42"],["Oct 8","Drew Lynch","$37–47"],
 ["Oct 15","Lil Sasquatch","$29–34"],["Oct 22","Carlos Santos","$25–35"],["Oct 29","To be announced","$32–42"],
 ["Nov 5","Anthony Rodia","$37–47"],["Nov 12","Michael Loftus","$23"],["Dec 3","Nasser Al-Rayess","$37–57"],
 ["Dec 17","Sarah Colonna","$27–37"],["Dec 31","Dale Jones · New Year's Eve","$25–85"]
];

var CAL = [
 {m:"Aug",n:20,items:[
   {p:"tonight",t:"Night Market at North Market Bridge Park",d:"Dog Days of Summer, Dublin, free."},
   {p:"free",t:"BAM Thursdays",d:"Columbus Museum of Art, 5–10pm."},
   {p:"21+",t:"NightLight 614: Superbad",d:"Outdoor movie at Genoa Park. Confirm before heading out."}
 ]},
 {m:"Aug",n:27,items:[
   {p:"star",t:"Nikki Glaser at the Palace Theatre",d:"7pm, from $41: the biggest comedy name on a Thursday all year."},
   {p:"",t:"Nina West's Big Queer Comedy Show",d:"Part of the Columbus Comedy Festival, $25–115."},
   {p:"free",t:"Karaoke night at North Market Bridge Park",d:"Dublin."},
   {p:"free",t:"BAM Thursdays",d:"Columbus Museum of Art."}
 ]},
 {m:"Sep",n:3,items:[
   {p:"free",t:"Wexner First Thursday",d:"Artist talk, silkscreen and collage studio, and Aliens in 70mm. Starts 4pm."},
   {p:"free",t:"Downtown Silent Disco",d:"6–8pm, outdoors."},
   {p:"",t:"Gary Owen at the Funny Bone",d:"7pm, $65–75."}
 ]},
 {m:"Sep",n:10,items:[
   {p:"star",t:"BalletMet: Future Icons",d:"7:30pm at the BalletMet Performance Space."},
   {p:"",t:"O.A.R., Gavin DeGraw and KT Tunstall",d:"KEMBA Live!, 6:30pm. Confirm with the box office."},
   {p:"",t:"Tommy Prine at Natalie's Grandview",d:"7:30pm."},
   {p:"last call",t:"BAM Thursdays: final night of the season",d:"Columbus Museum of Art."}
 ]},
 {m:"Sep",n:17,items:[
   {p:"star",t:"Jagged Little Pill opens",d:"7:30pm, Studio One Theatre at the Riffe Center."},
   {p:"",t:"Ice Cream Land at the Lincoln Theatre",d:"8pm."},
   {p:"",t:"Gabriel Rutledge at the Funny Bone",d:"7pm, $27: the cheapest headliner Thursday of the fall."}
 ]},
 {m:"Sep",n:24,items:[
   {p:"star",t:"Cocktails at the Conservatory: Ultimate TAILgate",d:"5:30–9:30pm, $35, 21+, reserve in advance."},
   {p:"pay what you want",t:"Sweeney Todd opens at Short North Stage",d:"7pm at the Garden Theatre, opening night is pay-what-you-want."},
   {p:"",t:"Jammy Buffet at Rumba Cafe",d:"8pm, Buffett tribute."},
   {p:"last call",t:"Final Downtown Farmers Market of the season",d:"Columbus Commons, 11am–2pm."}
 ]},
 {m:"Oct",n:1,items:[
   {p:"star",t:"Blue Jackets home opener vs. Buffalo",d:"7pm at Nationwide Arena."},
   {p:"free",t:"Sunset Movie: Wicked: For Good",d:"Columbus Commons, 7–9pm, outdoors and free."},
   {p:"free",t:"Wexner First Thursday",d:"Plus a 6pm Lambert Family Lecture Q&A."},
   {p:"",t:"Rocky Horror Tribute Drag Show at the Funny Bone",d:"7pm."}
 ]},
 {m:"Oct",n:8,items:[
   {p:"star",t:"Death Becomes Her",d:"Broadway in Columbus at the Ohio Theatre, 7:30pm."},
   {p:"21+",t:"COSI After Dark: Halloween Tattoo Carnival",d:"7–10pm."},
   {p:"free",t:"Sunset Movie: Ghostbusters",d:"Columbus Commons, 7–9pm."},
   {p:"",t:"Pumpkins Aglow at the Conservatory",d:"5–9pm."},
   {p:"",t:"Dan + Shay at the Schottenstein Center",d:"7pm."}
 ]},
 {m:"Oct",n:15,items:[
   {p:"free",t:"Sunset Movie: Beetlejuice",d:"Columbus Commons, 7–9pm."},
   {p:"",t:"Pumpkins Aglow at the Conservatory",d:"5–9pm."},
   {p:"last call",t:"Sweeney Todd, final Thursday",d:"Garden Theatre, 7pm."}
 ]},
 {m:"Oct",n:22,items:[
   {p:"star",t:"BalletMet: Marilyn",d:"7:30pm, Davidson Theatre."},
   {p:"road trip",t:"Circleville Pumpkin Show",d:"Thirty minutes south, free, runs Oct 21–24."},
   {p:"free",t:"Sunset Movie: The Craft",d:"Columbus Commons, 7–9pm."},
   {p:"",t:"Chefs in the City holiday dinner",d:"Franklin Park Conservatory."}
 ]},
 {m:"Oct",n:29,items:[
   {p:"star",t:"Cocktails at the Conservatory: Spirits & Spells",d:"5:30–9:30pm, $35, 21+: this is why Pumpkins Aglow is closed to the public that night."},
   {p:"free",t:"Sunset Movie: The Sixth Sense",d:"Columbus Commons, 7–9pm."},
   {p:"",t:"Olivia Rodrigo at the Schottenstein Center",d:"7pm."}
 ]},
 {m:"Nov",n:5,items:[
   {p:"star",t:"Maybe Happy Ending",d:"Broadway in Columbus at the Ohio Theatre, 7:30pm."},
   {p:"free",t:"Wexner First Thursday",d:"Mark Dion artist talk plus the Sketch Series."},
   {p:"",t:"Blue Jackets vs. Dallas",d:"Nationwide Arena."},
   {p:"",t:"Kurt Vile and The Violators at the Newport",d:""}
 ]},
 {m:"Nov",n:12,items:[
   {p:"21+",t:"COSI After Dark: Game On!",d:"7–10pm."},
   {p:"",t:"Blue Jackets vs. Tampa Bay",d:"Nationwide Arena."},
   {p:"watch this",t:"Easton's Grand Illumination",d:"Usually lands mid-November; the 2026 date hasn't been announced."}
 ]},
 {m:"Nov",n:19,items:[
   {p:"pay what you want",t:"Hairspray opens at Short North Stage",d:"7pm preview at the Garden Theatre."},
   {p:"",t:"STS9 at the Newport",d:""},
   {p:"",t:"Ha Ha Tonka at Rumba Cafe",d:"7pm. Wildlights at the zoo opens the next night."}
 ]},
 {m:"Nov",n:26,items:[
   {p:"thanksgiving",t:"A quiet one",d:"Hairspray is dark and almost nothing else is programmed. Wildlights is technically running: confirm holiday hours with the zoo."}
 ]},
 {m:"Dec",n:3,items:[
   {p:"star",t:"Cocktails at the Conservatory: Sleigh Bell Sips",d:"5:30–9:30pm, $35, 21+."},
   {p:"",t:"Lord Huron at the Palace Theatre",d:"8pm."},
   {p:"free",t:"Wexner First Thursday",d:"Holiday crafts, a screening, and a bluemouth inc. performance."},
   {p:"",t:"Hairspray at the Garden Theatre",d:"7pm. Wildlights running at the zoo."}
 ]},
 {m:"Dec",n:10,items:[
   {p:"star",t:"BalletMet's Nutcracker opens",d:"7:30pm at the Ohio Theatre."},
   {p:"",t:"How the Grinch Stole Christmas",d:"Broadway in Columbus at the Palace, 7:30pm."},
   {p:"21+",t:"COSI After Dark: Blizzard Bash",d:"7–10pm."},
   {p:"",t:"Blue Jackets vs. Minnesota",d:"Nationwide Arena."}
 ]},
 {m:"Dec",n:17,items:[
   {p:"",t:"The Nutcracker",d:"Ohio Theatre, 7:30pm."},
   {p:"",t:"Shakey Graves at the Newport",d:""},
   {p:"",t:"Blue Jackets vs. Seattle",d:"7pm at Nationwide Arena."},
   {p:"",t:"Wildlights at the Columbus Zoo",d:"Running nightly through Jan 3."}
 ]}
];

window.PAGE = {
  day: "Thursday",
  researched: "August 20, 2026",
  calRange: "Aug 20 - Dec 17",
  comedyEyebrow: "Three reliable options a week",
  comedyIntro: "Shadowbox is the best-value date in the city on a Thursday: sketch comedy with a live rock band, your ticket includes a table, and select Thursdays are choose-your-own-price from $20. Get there 30 minutes early, food service stops when the show starts.",
  headlinersTitle: "Thursday headliners at the Funny Bone",
  headlinersNote: "Easton, doors 5:30, show 7:00, 21+. Buy from the club directly, resale sites were listing these at double.",
  sources: [
    ["Columbus Museum of Art","https://www.columbusmuseum.org/bam-thursdays"],
    ["COSI After Dark","https://cosi.org/afterdark/"],
    ["Franklin Park Conservatory","https://www.fpconservatory.org/cocktails/"],
    ["Wexner Center","https://wexarts.org/special-events/first-thursdays-fall-2026"],
    ["Shadowbox Live","https://shadowboxlive.org/"],
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["CAPA","https://www.capa.com/events/"],
    ["BalletMet","https://www.balletmet.org/"],
    ["Short North Stage","https://www.shortnorthstage.org/"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["WTF Music Trivia","https://wtfmusictrivia.com/play"],
    ["Ginger Rabbit","https://www.gingerrabbitjazz.com/music"],
    ["North Market","https://northmarket.org/events/"],
    ["Downtown Columbus","https://downtowncolumbus.com/events/"],
    ["Columbus Navigator","https://www.columbusnavigator.com/new-restaurants-columbus/"],
    ["614NOW","https://614now.com/category/food-drink/openings"],
    ["Columbus Zoo","https://www.columbuszoo.org/wildlights"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
