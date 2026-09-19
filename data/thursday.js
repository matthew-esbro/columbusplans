/* ---------------- data ---------------- */
var PLACES = [
 {n:"Amara", hood:"Downtown", kind:"dinner", opened:"Jul 2026", d:"Josh Dalton's Mediterranean room on the Scioto Mile, with a riverfront patio pointed at the skyline. Crudo, wagyu skewers, and the hummus everyone writes about. Lunch runs Thursdays too.", hours:"Thu 11am-2pm, 5-10pm", conf:"ok", res:"Advised", url:"https://www.eatamara.com/"},
 {n:"Losanti", hood:"Franklinton", kind:"dinner", opened:"Feb 2026", d:"Italian steakhouse in the Gravity complex: steaks butchered daily, house pasta, oysters, and a slow-roasted giant meatball off the chef's grandmother's recipe.", hours:"Thu 4-10pm", conf:"ok", res:"Book ahead", url:"https://losantisteakhouse.com"},
 {n:"Metsi's Wood-Fired Italian", hood:"Italian Village", kind:"dinner", opened:"Jun 2025", d:"From the Chapman's Eat Market and Ginger Rabbit team. Two floors around a wood hearth driving the pastas and grilled meats, with happy hour the first two hours.", hours:"Thu 4-9pm, HH 4-6", conf:"ok", res:"Walk-ins ok", url:"https://www.metsisitalian.com/"},
 {n:"Wolf's Ridge at The Worthington Inn", hood:"Worthington", kind:"dinner", opened:"Apr 2026", d:"The 1831 inn reopened after eight dark years, now run by Wolf's Ridge. Blonde French onion soup with raclette, sirloin filet over sunchoke puree, sticky toffee pudding.", hours:"Thu 11am-10pm", conf:"ok", res:"Recommended", url:"https://www.worthingtoninn.com/restaurant"},
 {n:"Bar Italia", hood:"Easton", kind:"dinner", opened:"Jun 2025", d:"Bar-centric with an open kitchen. Handmade pasta, crispy chicken limone, short rib garganelli, a lasagna built to split. The happy hour is three hours long.", hours:"Thu 11am-10pm, HH 3-6", conf:"ok", res:"Books heavily", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {n:"House of Creole", hood:"Short North", kind:"dinner", opened:"Jul 2025", d:"Shrimp and grits, blackened salmon, cornbread, and a cocktail list that isn't shy. Southern service in the middle of High Street, and it opens at 3 if you want an early table.", hours:"Thu 3-9:30pm", conf:"ok", res:"Recommended", url:"https://houseofcreole.com/locations"},
 {n:"The 1126", hood:"Short North", kind:"dinner", opened:"Sep 2025", d:"A proper sit-down sushi bar in the old Parlor Room space: traditional technique, contemporary plating.", hours:"Thu 3-10pm", conf:"ok", res:"Call ahead", url:"https://www.the1126restaurant.com/"},
 {n:"Mezcla", hood:"Italian Village", kind:"dinner", opened:"Reopened Jun 2026", d:"Latin small plates and loud cocktails in a room the neighborhood crowdfunded back open after a van drove into it. Named a best new restaurant of 2026.", hours:"Thu 4-10pm", conf:"ok", res:"Resy", url:"https://www.mezclacocina.com/"},
 {n:"The Boat House at Confluence Park", hood:"Downtown", kind:"dinner", opened:"Reopened Aug 2025", d:"Glass-walled and right on the river: probably the best view from a table in Columbus. Caviar frites, seafood tower, prime rib. Their site was not reachable this week, so call.", hours:"Call to confirm", conf:"warn", res:"Book ahead", url:"https://www.boathouserestaurantoh.com/"},
 {n:"isla", hood:"Merion Village", kind:"dinner", opened:"Jul 2025", d:"Eight courses at a shared table or nine at the chef's counter over the kitchen. The most ambitious new room in the city: save it for an anniversary and book well out.", hours:"Check the Tock calendar", conf:"warn", res:"Prepaid, Tock", url:"https://www.exploretock.com/isla--columbus/"},
 {n:"Tabla", hood:"Northeast", kind:"dinner", opened:"Jul 2026", d:"Modern Indian with a full bar off Morse Road, and live Bollywood music some nights. Hours still are not posted on their site, so call before you drive out.", hours:"Unposted", conf:"warn", res:"Call first", url:"https://www.tablacuisine.com/locations/"},

 {n:"Astra Rooftop", hood:"Arena District", kind:"drinks", opened:"Jul 2025", d:"Skyline views atop the AC Hotel, flaming tomahawks carved tableside, and a cocktail list that photographs well. More party than hush.", hours:"Thu 4-11pm, HH 4-6", conf:"ok", res:"Book ahead", url:"https://astracolumbus.com/"},
 {n:"Let Me Roll It", hood:"Weinland Park", kind:"drinks", opened:"Aug 2026", d:"A 1970s listening bar with no screens and no playlists: everything comes off vinyl and cassette, and bringing a record in gets you a drink. Hours are finally posted.", hours:"Thu 5pm-midnight", conf:"ok", res:"Walk in", url:"https://www.letmerollitbar.com/"},
 {n:"The Shapeshifter", hood:"Franklinton", kind:"drinks", opened:"Jun 2026", d:"A cocktail bar whose entire theme, decor and menu together, changes on a rotation. Which makes it the rare bar that's a different date every few months.", hours:"Thu 5-11pm", conf:"ok", res:"Walk in", url:"https://www.shapeshiftercolumbus.com/"},
 {n:"Cordial Cocktail Club", hood:"Victorian Village", kind:"drinks", opened:"Jun 2026", d:"The Bottle Shop rebranded: same wine program and staff, sharper cocktail list. Palomino Coffee runs out of the same room during the day.", hours:"Thu 3-11pm", conf:"ok", res:"Walk in", url:"https://cordialcbus.com"},
 {n:"Lani Rooftop Lounge", hood:"Powell", kind:"drinks", opened:"Apr 2026", d:"Powell's first rooftop: fire pit, harissa cauliflower, burrata flatbread. Worth the drive when you want a night that isn't the Short North.", hours:"Thu 4-10pm", conf:"ok", res:"OpenTable", url:"https://lanirooftop.com/"},
 {n:"Welcome to the Farm", hood:"Short North", kind:"drinks", opened:"Aug 2026", d:"Chase Rice's country bar on the ground floor of Good Night John Boy: rotating country DJs, live music, a deep bourbon list. It now hosts Thursday trivia at 7, so the doors are open.", hours:"Not separately posted", conf:"warn", res:"Walk in", url:"https://welcometothefarm.com/"},
 {n:"K Vida Modern Mexican Bar", hood:"Italian Village", kind:"drinks", opened:"Sep 2026", d:"Modern Mexican plus Cuban, Venezuelan, Colombian, Peruvian and Puerto Rican dishes, in the old Zaftig brewery space on 5th. Newest room on this page.", hours:"Thu 11am-11pm reported", conf:"warn", res:"Walk in", url:"https://www.kvidabar.com/"},
 {n:"Huli Huli Tiki Lounge", hood:"Downtown", kind:"drinks", opened:"May 2026", d:"Downtown's first tiki bar since 2019, in the old Jury Room at 22 E. Mound. Hand-carved wood, custom Moai, about twelve bar seats. Only the Powell hours are posted online.", hours:"Downtown hours unposted", conf:"warn", res:"No reservations", url:"https://www.hulihulipowell.com/"},
 {n:"Proof by the Alibi", hood:"Old North", kind:"drinks", opened:"Apr 2026", d:"From the Alibi team but with an entirely separate menu. Low light, laid out for two people talking, with a private back room.", hours:"Daily 4pm-midnight reported", conf:"warn", res:"Not required", url:"https://www.columbusnavigator.com/speakeasy-style-cocktail-bar-old-north/"},
 {n:"The Daily Etcetera", hood:"German Village", kind:"drinks", opened:"Jun 2026", d:"Five separate patio spaces, which nothing else in German Village can say. Craft beer plus an actual cocktail list now. The group site still does not post its hours.", hours:"Hours unposted", conf:"warn", res:"Walk in", url:"https://thedailygrowler.com/locationhours/"},

 {n:"Mid City Garage", hood:"German Village", kind:"casual", opened:"2025", d:"Roll-up doors, patio lights, thin-crust pizza and a full cocktail bar that stays open at least an hour past the kitchen. Full Throttle Trivia sets up at 7 on Thursdays.", hours:"Thu kitchen 4-10pm", conf:"ok", res:"Walk in", url:"https://www.midcitygarage.com/"},
 {n:"Allora Kitchen & Bar", hood:"Clintonville", kind:"casual", opened:"Mar 2026", d:"Scratch Mediterranean-American in the old Gallo's space, with craft cocktails and the longest hours on this page: the reliable answer when nothing else is open.", hours:"Thu 11am-10pm", conf:"ok", res:"Accepted", url:"https://allorakitchenbar.com/"},
 {n:"Dim Sum Asian Bistro", hood:"Grandview", kind:"casual", opened:"Late 2025", d:"Hong Kong-style dim sum, 55 items, all of it meant to be pushed across the table at each other. The weekday happy hour runs a full three hours.", hours:"Thu 11am-9pm, HH 3-6", conf:"ok", res:"Walk in", url:"https://www.dimsumab.com/"},
 {n:"Mizu No Kaori", hood:"German Village", kind:"casual", opened:"2025", d:"The neighborhood's first ramen shop: tonkotsu with black garlic oil, spicy miso, and a real vegan bowl. Their site would not load this week.", hours:"Call to confirm", conf:"warn", res:"No reservations", url:"https://mizunokaoriramen.com/en"},
 {n:"Honest Friend Brewing", hood:"South Side", kind:"casual", opened:"2024-25", d:"Named a top-ten brewery in the country this year. Specializes in 3.5-5% beer, which is the correct move on a weeknight. Community art on the walls, food trucks outside.", hours:"Not posted on their site", conf:"warn", res:"Walk in", url:"https://www.honestfriendbrewing.com/"},

 {n:"Coldbar", hood:"Italian Village", kind:"soon", opened:"Still not open", d:"A 32-foot bar serving only cold dishes: crudo, carpaccio, oysters, terrines, caviar, deviled eggs with chili crisp shoyu. From the chef behind Mezcla. The August target slipped.", hours:"Not open yet", conf:"warn", res:", ", url:"https://columbusunderground.com/mezcla-owner-to-bring-new-cocktail-bar-to-italian-village-ak1/"},
 {n:"Canario", hood:"Short North", kind:"soon", opened:"Announced Sep 2026", d:"Forty-two seats near Goodale Park from Marco Piazza and chef Jeremy Nelson, running an eight-course tasting menu alongside a la carte. No opening date announced yet.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/canario-bringing-intimate-chef-driven-dining-experience-to-columbus-short-north/"},
 {n:"Medley Kitchen", hood:"Hilliard", kind:"soon", opened:"Fall 2026", d:"Global small plates: tapas, dim sum and mezze treatments of the same ingredients, side by side. Dinner only at launch.", hours:"Not open yet", conf:"warn", res:", ", url:"https://whatnow.com/columbus/restaurants/new-columbus-restaurant-medley-kitchen-reveals-global-small-plate-concept-ahead-of-fall-opening/"},
 {n:"Fourteen & Ember", hood:"Pickerington", kind:"soon", opened:"Fall 2026", d:"Steak-forward dining in a restored 1924 general store, with a members-only speakeasy directly underneath.", hours:"Not open yet", conf:"warn", res:", ", url:"https://614now.com/2026/food-drink/group-behind-local-cantina-bendi-wok-opening-members-only-speakeasy-new-upscale-eatery-serving-steak-pizza"}
];

var WEEKLY = [
 {t:"9:00-11:00pm", cat:"music", n:"Thomas Crumley at Club Diversity", w:"Brewery District", d:"Piano and vocals every Thursday in a Victorian house turned piano bar. A nightcap with a soundtrack, and no cover posted.", p:"No cover", conf:"ok", url:"https://clubdiversity.com/entertainment-events/"},
 {t:"Doors 5:30pm", cat:"music", n:"Ginger Rabbit Jazz Lounge", w:"Short North", d:"A basement room that may be the best date-night space in the city. The lounge runs 5:30 to 10 on Thursdays; set times and cover move week to week, so check the ticket page.", p:"Check listing", conf:"warn", url:"https://gingerrabbitjazz.turntabletickets.com/"},
 {t:"6:30-8:30pm", cat:"music", n:"Jazz Night with The Brewtet", w:"Zaftig Brewing · Worthington", d:"A house band backing a different guest artist every week, so it never repeats. The brewery moved its site to drinkzaftig.com and the calendar was down this week.", p:"Free", conf:"warn", url:"https://www.drinkzaftig.com/"},
 {t:"9:00pm", cat:"music", n:"Live band karaoke at Bristol Republic", w:"Short North", d:"Karaoke with an actual band behind you: the only one in town. The bar runs to 1am Thursdays, but the schedule posts week to week on Instagram.", p:"No cover", conf:"warn", url:"https://www.bristolrepublic.com/"},

 {t:"All day", cat:"food", n:"$3 oyster night at The Pearl", w:"Short North", d:"Raw, baked or fried, three dollars each, all night. Happy hour 4 to 6 stacks half-off snacks, starters and pub burgers on top.", p:"$3 each", conf:"ok", url:"https://thepearlrestaurant.com/locations-menus/short-north/events/"},
 {t:"4:00-6:00pm", cat:"food", n:"Half-off handhelds at SoCal", w:"Short North", d:"The Thursday handheld deal runs inside happy hour, not all night. Same window brings half-price sushi and starters, $6 drafts and wells, and $3 oysters.", p:"1/2 off", conf:"ok", url:"https://socalkitchenandbar.com/events/"},
 {t:"3:00-6:00pm", cat:"food", n:"The Thursday happy hour circuit", w:"Citywide", d:"All confirmed on the venues' own sites this week: Bar Italia and Dim Sum Asian Bistro 3 to 6, Astra, Metsi's, SoCal and The Pearl 4 to 6. Start early and the night costs half.", p:"Varies", conf:"ok", url:"https://www.baritalia.com/locations/ohio/columbus"},
 {t:"Evening", cat:"food", n:"Thursday wine tasting at House Wine", w:"Old Worthington", d:"Four or five wines from around the world, guided, for fifteen dollars. The store runs 11 to 9 but the tasting start time isn't posted, so call to pin it down.", p:"$15", conf:"warn", url:"https://housewineonhigh.com/"},

 {t:"7:00pm", cat:"trivia", n:"WTF Music Trivia at Land-Grant", w:"Franklinton", d:"Music trivia every Thursday in the taproom and beer garden, which stays open to 10. Prizes, no cover.", p:"Free", conf:"ok", url:"https://landgrantbrewing.com/tag/thursdays/"},
 {t:"7:00pm", cat:"trivia", n:"Full Throttle Trivia at Mid City Garage", w:"German Village", d:"Trivia under the roll-up doors while the kitchen is still on, which is the rare version of this that comes with good pizza.", p:"Free", conf:"ok", url:"https://www.midcitygarage.com/"},
 {t:"8:00-10:00pm", cat:"trivia", n:"Themed trivia at The Forge Tavern", w:"Bethel Rd", d:"A different theme every week, from 90s pop culture to Dungeon Crawler Carl, plus a full cocktail bar and a wall of 500 board games. Recent weeks sold out, so reserve.", p:"$5", conf:"ok", url:"https://theforgetavern.com/events/"},
 {t:"7:00-8:00pm", cat:"trivia", n:"The Excesss Trivia circuit", w:"Five venues", d:"Same crew, five rooms: Welcome to the Farm in the Short North, Park St. Tavern, Ohio Brewing and Olentangy River Brewing in Lewis Center all at 7, then Zeno's at 8.", p:"Free", conf:"ok", url:"https://triviacolumbus.com/"},
 {t:"7:00-9:00pm", cat:"trivia", n:"Thursday Trivia at Understory", w:"Old North", d:"Rotating theme, sign up by 6:45, first place takes a $50 gift card. The event page has gone stale, so confirm before you build a night around it.", p:"Free", conf:"warn", url:"https://www.understorycbus.com/public-events/thursday-trivia"},

 {t:"9:00-11:00pm", cat:"dance", n:"Ladies 'N Line at PBR Cowboy Bar", w:"Easton", d:"Instruction then open dancing, live acoustic sets from 6:30, and a mechanical bull if the night goes that way. $3 wells and $3 Miller Lite, 21+ after 9.", p:"No cover", conf:"ok", url:"https://pbrcowboybar.com/columbus/"},
 {t:"7:00-10:00pm", cat:"dance", n:"Karaoke, eleven rooms deep", w:"Citywide", d:"Budd Dairy, North Market Bridge Park and Otie's in Hilliard at 7, VHS Social Club at 8, Blue Danube and Eldorado's and Oldfield's at 9, Fours on High and High Beck at 10.", p:"Free", conf:"ok", url:"https://karaokecolumbus.com/"},

 {t:"5:00-9:00pm", cat:"culture", n:"Free Thursday evenings at the Columbus Museum of Art", w:"Discovery District", d:"BAM season ended September 10, but the museum still stays open Thursdays to 9 and admission is free from 5pm. The cheapest good date on this page.", p:"Free", conf:"ok", url:"https://www.columbusmuseum.org/plan-your-visit"},
 {t:"7:00pm", cat:"culture", n:"Speak of the Devil at Shadowbox Live", w:"Brewery District", d:"A haunting rock experience built on Ozzy and Black Sabbath, playing every Thursday through November 12. Your ticket includes the table and there's a full bar and kitchen.", p:"Ticketed", conf:"ok", url:"https://shadowboxlive.org/"},
 {t:"10:00am-10:00pm", cat:"culture", n:"Otherworld", w:"East side", d:"Forty-some rooms of walk-through sci-fi art, and Thursday is the first night of the week it stays open to 10. Thirty dollars, timed tickets online.", p:"$30", conf:"ok", url:"https://www.otherworld.com/main/tickets-and-hours"},
 {t:"5:00-9:00pm", cat:"culture", n:"Pumpkins Aglow at the Conservatory", w:"Franklin Park · October", d:"More than 700 hand-carved pumpkins in themed displays. Thursdays October 8, 15 and 22 only: October 29 is closed to the public for the Cocktails party.", p:"Ticketed", conf:"ok", url:"https://www.fpconservatory.org/exhibitions/pumpkins-aglow/"},
 {t:"6:15pm", cat:"culture", n:"Powell Pub Run", w:"Powell", d:"Three or four miles as a group, then beer. It now starts from Ill Mannered Brewing on Grace Drive, not Nocterra, so check the address before you park.", p:"Free", conf:"ok", url:"https://columbusrunning.com/pages/free-weekly-runs-walks"}
];

var MONTHLY = [
 {t:"2nd Thu", n:"COSI After Dark", w:"Franklinton · 21+", d:"The science museum, adults only, themed, 7 to 10. October 8 is a Halloween tattoo carnival, November 12 is Game On, December 10 is Blizzard Bash.", p:"Ticketed", conf:"ok", url:"https://cosi.org/afterdark/"},
 {t:"1st Thu", n:"First Thursdays at the Wexner Center", w:"OSU campus", d:"Free late night with galleries open to 8. October 1 is the Lambert lecture from Cecile Fromont, November 5 is a Mark Dion artist talk, December 3 adds bluemouth inc.", p:"Free", conf:"ok", url:"https://wexarts.org/special-events/first-thursdays-fall-2026"},
 {t:"Select Thu", n:"Cocktails at the Conservatory", w:"Franklin Park · 21+", d:"A themed party in the glasshouses, 5:30 to 9:30. September 24 is TAILgate, October 29 is Spirits & Spells, December 3 is Sleigh Bell Sips. Reservations close the night before and these sell out.", p:"$35 · $30 members", conf:"ok", url:"https://www.fpconservatory.org/cocktails/"},
 {t:"3rd Thu", n:"Live music happy hour at North Market Downtown", w:"Downtown", d:"On the market's own calendar for October 15, November 19 and December 17, layered on top of the regular happy hour.", p:"Free", conf:"ok", url:"https://northmarket.org/events/"},
 {t:"3rd Thu", n:"Jazz at Sunset at Honest Friend Brewing", w:"South Side", d:"Alex Daniel and friends, 7 to 9, free, in one of the best-regarded taprooms in the country right now. Only September was posted, so confirm the fall dates.", p:"Free", conf:"warn", url:"https://www.honestfriendbrewing.com/events-calendar"}
];

var COMEDY = [
 {t:"Thu 7:00pm", n:"Columbus Funny Bone", w:"Easton · 21+", d:"A touring headliner almost every Thursday through New Year's Eve, and the prices swing from $23 to $59 depending on the name. Full schedule below.", p:"$23-$59", conf:"ok", url:"https://columbus.funnybone.com/calendar/"},
 {t:"Thu 7:00pm", n:"Holiday Hoopla at Shadowbox Live", w:"Brewery District · from Nov 19", d:"Shadowbox's holiday sketch comedy and music show, Thursdays November 19, December 3, 10 and 17. Art for All lets you set your own price from $20 on one of the first two Thursdays.", p:"From $20", conf:"ok", url:"https://shadowboxlive.org/"},
 {t:"Sat only", n:"Screamers is not a Thursday show", w:"Brewery District", d:"Worth knowing before you plan around it: the nightmare-themed sketch show now plays Saturdays at 7 only, through November 14. Thursdays at Shadowbox are the Ozzy tribute instead.", p:"Ticketed", conf:"ok", url:"https://shadowboxlive.org/events/screamers-a-nightmare-fueled-sketch-comedy-and-music-experience/"},
 {t:"Some Thu", n:"The Attic Comedy Club", w:"Olde Towne East", d:"The club is listing its own Oak Street address again after the stretch at The Walrus. Thursday headliners land some weeks; their calendar would not load this week, so check first.", p:"$15-$30", conf:"warn", url:"https://theatticcolumbus.standuptix.com/calendar"},
 {t:"Some Thu", n:"The Nest Theatre", w:"Old North", d:"The city's only dedicated improv theater: Chicago longform, ComedySportz, and an improvised musical. Mostly Fri and Sat with occasional Thursdays.", p:"Check site", conf:"warn", url:"https://nesttheatre.com/shows/"}
];

var FUNNYBONE = [
 ["Sep 24","Dr. Kojo","$37-59"],["Oct 1","Rocky Horror Tribute Drag Show","$27-42"],["Oct 8","Drew Lynch","$37-47"],
 ["Oct 15","Lil Sasquatch","$29-34"],["Oct 22","Carlos Santos","$25-35"],["Oct 29","To be announced","$32-42"],
 ["Nov 5","Anthony Rodia","$37-47"],["Nov 12","Michael Loftus","$23"],["Nov 19","Ify Nwadiwe","$25-30"],
 ["Dec 3","Nasser Al-Rayess","$37-57"],["Dec 17","Sarah Colonna","$27-37"],["Dec 31","Dale Jones · New Year's Eve","$25-85"]
];

var CAL = [
 {m:"Sep",n:24,items:[
   {p:"star",t:"Cocktails at the Conservatory: Ultimate TAILgate",d:"5:30-9:30pm, $35, 21+. Reservations close at midnight tonight and these sell out."},
   {p:"opening night",t:"Sweeney Todd opens at Short North Stage",d:"Garden Theatre, through October 18. Limited student rush and pay-what-you-want tickets at the door two hours before curtain."},
   {p:"",t:"Blue Jackets preseason vs. Pittsburgh",d:"7pm at Nationwide Arena. Preseason seats go cheap."},
   {p:"",t:"Ole 60 at KEMBA Live!",d:"Off the Grid Tour, doors 6pm, outdoors rain or shine."},
   {p:"last call",t:"Final Downtown Farmers Market of the season",d:"Columbus Commons, alongside the Food Truck Food Court."}
 ]},
 {m:"Oct",n:1,items:[
   {p:"star",t:"Blue Jackets home opener vs. Buffalo",d:"7pm at Nationwide Arena."},
   {p:"free",t:"Wexner First Thursday",d:"Galleries to 8pm, plus the Lambert Family Lecture from Cecile Fromont at 6."},
   {p:"last call",t:"Jagged Little Pill, final Thursday",d:"7:30pm, Studio One at the Riffe Center. The run closes October 4."},
   {p:"",t:"Rocky Horror Tribute Drag Show at the Funny Bone",d:"7pm, $27-42."}
 ]},
 {m:"Oct",n:8,items:[
   {p:"star",t:"Death Becomes Her",d:"Broadway in Columbus at the Ohio Theatre, running October 6 to 11."},
   {p:"21+",t:"COSI After Dark: Halloween Tattoo Carnival",d:"7-10pm."},
   {p:"",t:"Pumpkins Aglow at the Conservatory",d:"5-9pm, more than 700 carved pumpkins."},
   {p:"",t:"Drew Lynch at the Funny Bone",d:"7pm, $37-47."},
   {p:"",t:"BRENN! at the Newport",d:"Amateur at Best World Tour, doors 7pm."}
 ]},
 {m:"Oct",n:15,items:[
   {p:"star",t:"Pumpkins Aglow at the Conservatory",d:"5-9pm. Two Thursdays of this left after tonight."},
   {p:"last call",t:"Sweeney Todd, final Thursday",d:"Garden Theatre. The run ends October 18."},
   {p:"free",t:"Live music happy hour at North Market Downtown",d:"On top of the regular happy hour."},
   {p:"",t:"Lil Sasquatch at the Funny Bone",d:"7pm, $29-34: the cheapest headliner Thursday of the fall after Michael Loftus."}
 ]},
 {m:"Oct",n:22,items:[
   {p:"star",t:"BalletMet: Marilyn",d:"Davidson Theatre, running October 16 to 24."},
   {p:"opening night",t:"The Rocky Horror Show opens at Short North Stage",d:"Garden Theatre, through October 31."},
   {p:"",t:"Pumpkins Aglow at the Conservatory",d:"5-9pm, the last Thursday of the run."},
   {p:"",t:"Carlos Santos at the Funny Bone",d:"7pm, $25-35."}
 ]},
 {m:"Oct",n:29,items:[
   {p:"star",t:"Cocktails at the Conservatory: Spirits & Spells",d:"5:30-9:30pm, $35, 21+."},
   {p:"heads up",t:"Pumpkins Aglow is closed to the public tonight",d:"The Conservatory confirms no reservations tonight because of the 21+ party. Go October 22 instead."},
   {p:"",t:"Speak of the Devil at Shadowbox Live",d:"7pm, the Ozzy and Black Sabbath show."},
   {p:"",t:"Funny Bone headliner still unannounced",d:"7pm, $32-42, the club has it listed as updating."}
 ]},
 {m:"Nov",n:5,items:[
   {p:"star",t:"Maybe Happy Ending",d:"Broadway in Columbus at the Ohio Theatre, running November 3 to 8."},
   {p:"",t:"Blue Jackets vs. Dallas",d:"7pm at Nationwide Arena."},
   {p:"free",t:"Wexner First Thursday",d:"Mark Dion artist talk at 4, the Sketch Series at 6, galleries to 8."},
   {p:"",t:"Anthony Rodia at the Funny Bone",d:"7pm, $37-47."}
 ]},
 {m:"Nov",n:12,items:[
   {p:"21+",t:"COSI After Dark: Game On!",d:"7-10pm."},
   {p:"",t:"Blue Jackets vs. Tampa Bay",d:"7pm at Nationwide Arena."},
   {p:"last call",t:"Speak of the Devil, final Thursday",d:"7pm at Shadowbox. The run closes November 15."},
   {p:"",t:"Michael Loftus at the Funny Bone",d:"7pm, $23: the cheapest headliner Thursday of the year."}
 ]},
 {m:"Nov",n:19,items:[
   {p:"star",t:"Holiday Hoopla opens at Shadowbox Live",d:"7pm. Art for All lets you set your own price from $20 on one of the first two Thursdays, and this is one of them."},
   {p:"opening night",t:"Hairspray opens at Short North Stage",d:"Garden Theatre, running through December 20."},
   {p:"free",t:"Live music happy hour at North Market Downtown",d:"Third Thursday, on the market's own calendar."},
   {p:"",t:"Ify Nwadiwe at the Funny Bone",d:"7pm, $25-30."},
   {p:"plan ahead",t:"Wildlights opens tomorrow night",d:"The Columbus Zoo runs it November 20 through January 3, included with zoo admission."}
 ]},
 {m:"Nov",n:26,items:[
   {p:"thanksgiving",t:"A quiet one",d:"The Funny Bone and Shadowbox are both dark tonight and almost nothing else is programmed. Wildlights is running: confirm holiday hours with the zoo."}
 ]},
 {m:"Dec",n:3,items:[
   {p:"star",t:"Cocktails at the Conservatory: Sleigh Bell Sips",d:"5:30-9:30pm, $35, 21+. It runs December 2 and 3 this year."},
   {p:"",t:"Lord Huron at the Palace Theatre",d:"8pm."},
   {p:"free",t:"Wexner First Thursday",d:"Cookie decorating and collage 5 to 7, a screening, and bluemouth inc. at 6 and 8."},
   {p:"",t:"Holiday Hoopla at Shadowbox Live",d:"7pm."},
   {p:"",t:"Nasser Al-Rayess at the Funny Bone",d:"7pm, $37-57."}
 ]},
 {m:"Dec",n:10,items:[
   {p:"star",t:"BalletMet's Nutcracker opens",d:"Running December 10 to 27. Check the venue when you book."},
   {p:"",t:"How the Grinch Stole Christmas",d:"Broadway in Columbus, running December 8 to 13."},
   {p:"21+",t:"COSI After Dark: Blizzard Bash",d:"7-10pm."},
   {p:"",t:"Blue Jackets vs. Minnesota",d:"7pm at Nationwide Arena."}
 ]},
 {m:"Dec",n:17,items:[
   {p:"star",t:"Sarah Colonna at the Funny Bone",d:"7pm, $27-37."},
   {p:"",t:"Blue Jackets vs. Seattle",d:"7pm at Nationwide Arena."},
   {p:"",t:"The Nutcracker and Hairspray both play tonight",d:"BalletMet downtown, Short North Stage at the Garden Theatre."},
   {p:"free",t:"Live music happy hour at North Market Downtown",d:"Third Thursday."},
   {p:"",t:"Wildlights at the Columbus Zoo",d:"Running nightly through January 3."}
 ]}
];

window.PAGE = {
  day: "Thursday",
  researched: "September 19, 2026",
  calRange: "Sep 24 - Dec 17",
  comedyEyebrow: "One reliable club night a week",
  comedyIntro: "Correct a common assumption first: Shadowbox on a Thursday is not the sketch comedy show right now. Screamers moved to Saturdays only, and Thursdays through November 12 are Speak of the Devil, an Ozzy and Black Sabbath rock tribute. The dependable Thursday laugh is the Funny Bone headliner at Easton, and from November 19 Shadowbox's Holiday Hoopla takes the Thursday slot with pay-what-you-want pricing from $20 on an early date.",
  headlinersTitle: "Thursday headliners at the Funny Bone",
  headlinersNote: "Easton, doors 5:30, show 7:00, 21+. Buy from the club directly, resale sites were listing these at double. There is no Thursday show on November 26 or December 10.",
  sources: [
    ["Columbus Funny Bone","https://columbus.funnybone.com/calendar/"],
    ["Shadowbox Live","https://shadowboxlive.org/"],
    ["Columbus Museum of Art","https://www.columbusmuseum.org/plan-your-visit"],
    ["COSI After Dark","https://cosi.org/afterdark/"],
    ["Franklin Park Conservatory","https://www.fpconservatory.org/cocktails/"],
    ["Pumpkins Aglow","https://www.fpconservatory.org/exhibitions/pumpkins-aglow/"],
    ["Wexner Center","https://wexarts.org/special-events/first-thursdays-fall-2026"],
    ["CAPA","https://www.capa.com/events/"],
    ["Broadway in Columbus","https://www.capa.com/events/broadway-in-columbus/"],
    ["BalletMet","https://www.balletmet.org/"],
    ["Short North Stage","https://www.shortnorthstage.org/"],
    ["Blue Jackets schedule","https://www.nhl.com/bluejackets/schedule"],
    ["PromoWest / Newport","https://promowestlive.com/columbus/newport-music-hall"],
    ["Excesss Trivia","https://triviacolumbus.com/"],
    ["Excesss Karaoke","https://karaokecolumbus.com/"],
    ["North Market","https://northmarket.org/events/"],
    ["Otherworld","https://www.otherworld.com/main/tickets-and-hours"],
    ["Columbus Running Company","https://columbusrunning.com/pages/free-weekly-runs-walks"],
    ["Columbus Zoo","https://www.columbuszoo.org/wildlights"],
    ["Columbus Navigator","https://www.columbusnavigator.com/new-restaurants-columbus/"],
    ["614NOW","https://614now.com/category/food-drink/openings"]
  ],
  places: PLACES, weekly: WEEKLY, monthly: MONTHLY, comedy: COMEDY, headliners: FUNNYBONE, cal: CAL
};
