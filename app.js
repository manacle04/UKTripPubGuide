const cityContent = {
  Oxford: {
    kicker: "Most stacked list",
    description:
      "Loads of hand-picked Oxford options, with notes for late nights, cozy hangs, karaoke, football, and riverside stops.",
    spots: [
      {
        name: "The Fir Tree",
        address: "Oxford",
        note: "Closest option on the list.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Oxford Blue",
        address: "Oxford",
        note: "Another super close option.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Mad Hatter",
        address: "Oxford",
        note: "Private karaoke rooms when the night wants to get chaotic.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "Black Swan",
        address: "Oxford",
        note: "Usually dead unless soccer is on. Oxford Pub Guide specifically calls this one out as Irish with a good Guinness.",
        distance: "Within 1km",
        tags: ["featured", "good guinness"],
      },
      {
        name: "Half Moon",
        address: "Oxford",
        note: "Open latest during the week. Oxford Pub Guide specifically rates this one as having excellent Guinness.",
        distance: "Within 1km",
        tags: ["featured", "good guinness"],
      },
      {
        name: "Glamorous",
        address: "Oxford",
        note: "From your dope spots list: gay club energy and open late late.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Cape of Good Hope",
        address: "Oxford",
        note: "A little expensive, but sounds popping. WhatPub also lists regular food service here.",
        distance: "Within 1km",
        tags: ["featured", "good food"],
      },
      {
        name: "The Oranges and Lemons",
        address: "Oxford",
        note: "Super chill and cozy.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Old Black Horse",
        address: "Oxford",
        note: "Inn and hostel vibe if you want a pub with a stay-over feel. It also runs a full pub-food menu.",
        distance: "Within 1km",
        tags: ["featured", "good food"],
      },
      {
        name: "The City Arms",
        address: "Oxford",
        note: "Probably the best call for a soccer game.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "St James Tavern",
        address: "Oxford",
        note: "Often has live music, even if it is not the strongest overall pick.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Port Mahon",
        address: "Oxford",
        note: "Never been, but it made the shortlist. It has a proper food menu and Sunday roasts online.",
        distance: "Within 1km",
        tags: ["featured", "good food"],
      },
      {
        name: "The Star",
        address: "Oxford",
        note: "Called out as a sick spot.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Library",
        address: "Oxford",
        note: "Cozy choice for an easier night.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Cowley Retreat",
        address: "Oxford",
        note: "Expect a super young crowd.",
        distance: "Within 1km",
        tags: ["featured"],
      },
      {
        name: "The Chester Arms",
        address: "Oxford",
        note: "Never been, but it looks sick and the pub is especially known online for its steaks and food.",
        distance: "Within 1km",
        tags: ["featured", "good food"],
      },
      {
        name: "The Rusty Bicycle",
        address: "Oxford",
        note: "Kind of family-leaning, but useful if the group wants a softer pace. The pub pushes pizza and pub food heavily online.",
        distance: "Within 1km",
        tags: ["featured", "good food"],
      },
      {
        name: "Duke of Monmouth",
        address: "Oxford",
        note: "On the other side of the river.",
        distance: "Across river",
        tags: ["featured"],
      },
      {
        name: "Isis Farmhouse",
        address: "Oxford",
        note: "Farthest option, but right on the river. They also run pizzas and food service by the water.",
        distance: "Farthest",
        tags: ["featured", "good food"],
      },
      {
        name: "Turf Tavern",
        address: "7 Bath Place, Oxford OX1 3SU",
        note: "Classic hidden-lane Oxford pub and still one of the most recommended names in the city.",
        distance: "Worth checking",
        tags: ["featured", "recommended"],
      },
      {
        name: "The Gardener's Arms",
        address: "Oxford",
        note: "Also on the fun-to-try list. It is well known online for its vegetarian Thai food.",
        distance: "Worth checking",
        tags: ["featured", "good food"],
      },
      {
        name: "The Bookbinders",
        address: "Oxford",
        note: "Another spot that came recommended, with a full food menu and Sunday roast offering online.",
        distance: "Worth checking",
        tags: ["featured", "good food"],
      },
      {
        name: "Moo Moos Milkshakes",
        address: "Oxford",
        note: "From your original list. Not a pub, but kept in because you wanted every featured spot preserved.",
        distance: "Snack detour",
        tags: ["featured", "good food"],
      },
      {
        name: "Missing Bean",
        address: "14 Turl Street, Oxford OX1 3DQ",
        note: "Oxford specialty-coffee institution right in the centre, with house-roasted coffee and pastries.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Jericho Coffee Traders",
        address: "105 High Street, Oxford OX1 4BW",
        note: "One of Oxford's best-known specialty coffee names, with a flagship High Street espresso bar.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Society Cafe",
        address: "12-16 St Michael's Street, Oxford OX1 2DU",
        note: "Popular central Oxford cafe with strong espresso, brunch energy, and plenty of regulars.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Common Ground",
        address: "37-38 Little Clarendon Street, Oxford OX1 2HU",
        note: "Jericho coffee and community hangout serving Oxford-roasted beans in a calm daytime space.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "NewGround Coffee",
        address: "6 Ship Street, Oxford OX1 3DE",
        note: "Ethical specialty coffee spot in the centre with a café-and-wine-bar feel.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Queen's Lane Coffee House",
        address: "40 High Street, Oxford OX1 4AP",
        note: "Historic Oxford coffee house right on the High Street, easy to hit while walking the centre.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Jericho Coffee Traders Roastery",
        address: "Oxford Eco Centre, Roger House, Osney Mead, Oxford OX2 0ES",
        note: "A bigger roastery café option if you're heading out toward Osney and want a more coffee-first stop.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "The Bear Inn",
        address: "6 Alfred Street, Oxford OX1 4EH",
        note: "Oxford's oldest pub, right in the historic centre, with a strong classic-pub feel. Local Oxford pub guides also regularly single it out for Guinness.",
        distance: "Popular online pick",
        tags: ["recommended", "good food", "good guinness"],
      },
      {
        name: "The Grapes",
        address: "7 George Street, Oxford OX1 2AT",
        note: "Oxford CAMRA's City Pub of the Year for 2025 and a strong beer-focused stop.",
        distance: "Award winner",
        tags: ["recommended"],
      },
      {
        name: "The Perch",
        address: "Binsey Lane, Oxford OX2 0NG",
        note: "Historic riverside pub with a famous garden and a full food menu.",
        distance: "Riverside detour",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Royal Blenheim",
        address: "13 St Ebbes Street, Oxford OX1 1PT",
        note: "Repeatedly one of Oxford CAMRA's top city pubs and a serious real-ale stop, with food service on the pub site.",
        distance: "Ale favorite",
        tags: ["recommended", "good food"],
      },
      {
        name: "Wheatsheaf",
        address: "129 High Street, Oxford OX1 4DF",
        note: "WhatPub confirms a pool table here. I have not found a reliable darts-board source for this one yet.",
        distance: "Verified games pub",
        tags: ["recommended", "pool"],
        proofLabel: "See pool proof",
        proofUrl: "https://whatpub.com/pubs/OXF/C-50/wheatsheaf",
      },
      {
        name: "Chequers",
        address: "131 High Street, Oxford OX1 4DH",
        note: "Historic central Oxford pub; WhatPub says it has a dartboard and is the only city-centre pub with bar billiards upstairs.",
        distance: "Historic pick",
        tags: ["recommended", "darts", "good food"],
        proofLabel: "See darts proof",
        proofUrl: "https://whatpub.com/pubs/OXF/C-10/chequers",
      },
    ],
  },
  London: {
    kicker: "London pub guide",
    description:
      "London's most talked-about pubs right now, from classic Soho boozers to proper neighborhood locals and award-winning gastropubs.",
    spots: [
      {
        name: "The Roebuck",
        address: "50 Great Dover Street, London SE1 4YG",
        note: "On Great Dover Street in Southwark.",
        distance: "Featured pick",
        tags: ["featured", "good food"],
      },
      {
        name: "The Old Nun's Head",
        address: "15 Nunhead Green, London SE15 3QQ",
        note: "Time Out's best pub in London for 2025, known for queer-friendly community energy, events, and food service.",
        distance: "Top 2025 pub",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Coach & Horses",
        address: "29 Greek Street, Soho, London W1D 5DH",
        note: "Historic Soho institution. It made Time Out's 2025 Harp Guide for top-tier Guinness and the pub lists Guinness on draught.",
        distance: "Soho classic",
        tags: ["recommended", "good food", "good guinness"],
      },
      {
        name: "The Devonshire",
        address: "17 Denman Street, Soho, London W1D 7HW",
        note: "One of London's hottest pubs and one of the clearest good-Guinness calls online right now, with strong food upstairs too.",
        distance: "Hot Soho pick",
        tags: ["recommended", "good food", "good guinness"],
      },
      {
        name: "The French House",
        address: "49 Dean Street, Soho, London W1D 5BG",
        note: "Legendary Soho pub and a 2025 National Pub & Bar Awards London nominee, with its famous dining room upstairs.",
        distance: "Legendary stop",
        tags: ["recommended", "good food"],
      },
      {
        name: "Turner's Old Star",
        address: "14 Watts Street, Wapping, London E1W 2QG",
        note: "Proper East End pub. WhatPub says a pool table and dart board sit alongside the sports TVs.",
        distance: "Games-friendly local",
        tags: ["recommended", "pool", "darts", "good food"],
        proofLabel: "See darts proof",
        proofUrl: "https://whatpub.com/pubs/ELC/14257/turners-old-star-london",
      },
      {
        name: "Red Lion & Sun",
        address: "25 North Road, Highgate, London N6 4BE",
        note: "London Pub & Bar of the Year 2025, with classic Highgate pub energy, real fire, and full meal service.",
        distance: "Award winner",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Baring",
        address: "55 Baring Street, Hoxton, London N1 3DS",
        note: "National Pub & Bar Awards 2025 London nominee and a well-liked gastropub with strong dining.",
        distance: "Hoxton gastropub",
        tags: ["recommended", "good food"],
      },
      {
        name: "Walmer Castle",
        address: "58 Ledbury Road, Notting Hill, London W11 2AJ",
        note: "National Pub & Bar Awards 2025 nominee with a proper Notting Hill pub feel and a strong food menu.",
        distance: "Notting Hill pick",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Punch Bowl",
        address: "41 Farm Street, Mayfair, London W1J 5RP",
        note: "Mayfair's oldest pub and Muddy Stilettos' best London destination pub for 2025, with serious pub food upstairs and down.",
        distance: "Mayfair classic",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Pelican",
        address: "45 All Saints Road, London W11 1HE",
        note: "Named London's best pub in the 2025 Good Food Guide and praised by Michelin as a packed Notting Hill pub with gutsy British food.",
        distance: "Top food pub",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Hope",
        address: "48 West Street, Carshalton, Surrey SM5 2PR",
        note: "CAMRA's Greater London Pub of the Year 2025, built for proper beer people and a more traditional pub session.",
        distance: "CAMRA favorite",
        tags: ["recommended", "good food"],
      },
      {
        name: "Southampton Arms",
        address: "139 Highgate Road, London NW5 1LE",
        note: "Cult North London ale and cider house with bar snacks and one of the city's strongest old-school pub reputations.",
        distance: "Alehouse classic",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Parakeet",
        address: "256 Kentish Town Road, London NW5 2AA",
        note: "A hot Kentish Town gastropub that landed on the Good Food Guide's best UK pubs list for 2025.",
        distance: "Kentish Town pick",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Hero",
        address: "55 Shirland Road, London W9 2JD",
        note: "Public House Group's Maida Vale pub, with a cosy ground-floor pub and a stronger food offer upstairs.",
        distance: "Maida Vale pub",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Fat Badger",
        address: "310 Portobello Road, London W10 5TA",
        note: "Golborne Road pub and restaurant with cask ales downstairs and a much more ambitious British food programme upstairs.",
        distance: "Golborne Road pick",
        tags: ["recommended", "good food"],
      },
      {
        name: "Lamb Tavern",
        address: "10-12 Leadenhall Market, London EC3V 1LR",
        note: "Historic Leadenhall Market pub spread over multiple floors with proper British dishes and a big City crowd.",
        distance: "City classic",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Wren Tavern",
        address: "67-69 Watling Street, London EC4M 9DT",
        note: "One of the City pubs shortlisted for the 2025 National Pub & Bar Awards, blending pub food with after-work energy.",
        distance: "City award nominee",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Audley Public House",
        address: "41-43 Mount Street, London W1K 2RX",
        note: "Mayfair pub with classic bar snacks and a strong Guinness reputation on the official site.",
        distance: "Mayfair heavyweight",
        tags: ["recommended", "good food", "good guinness"],
      },
      {
        name: "Trafalgar Tavern",
        address: "Park Row, Greenwich, London SE10 9NW",
        note: "Grand riverside Greenwich pub full of naval history, with a big menu and one of London's best pub interiors.",
        distance: "Riverside icon",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Surprise",
        address: "6 Christchurch Terrace, Chelsea, London SW3 4AJ",
        note: "Well-regarded Chelsea freehouse with British-inspired cooking and a classic local-pub feel.",
        distance: "Chelsea local",
        tags: ["recommended", "good food"],
      },
      {
        name: "Hollydale Tavern",
        address: "115 Hollydale Road, Peckham, London SE15 2TF",
        note: "WhatPub says the front room has both a pool table and dartboard, plus food service and sports screens.",
        distance: "Peckham games pub",
        tags: ["recommended", "pool", "darts", "good food"],
        proofLabel: "Games proof",
        proofUrl: "https://whatpub.com/pubs/SEL/10679/hollydale-tavern-peckham",
      },
      {
        name: "Le Wouri",
        address: "78 Woolwich Church Street, London SE18 5NN",
        note: "WhatPub lists both a pool table and dartboard here, and it also calls out African food with grilled fish.",
        distance: "Woolwich games pub",
        tags: ["recommended", "pool", "darts", "good food"],
        proofLabel: "Games proof",
        proofUrl: "https://whatpub.com/pubs/SEL/10760/le-wouri",
      },
      {
        name: "Bricklayers Arms",
        address: "1 Hamilton Road, West Norwood, London SE27 9RZ",
        note: "Classic backstreet boozer in West Norwood. WhatPub says it has a dartboard in one room and a pool table in the other.",
        distance: "Backstreet local",
        tags: ["recommended", "pool", "darts"],
        proofLabel: "Games proof",
        proofUrl: "https://whatpub.com/pubs/SEL/10844/bricklayers-arms-west-norwood",
      },
      {
        name: "Ned's Bar",
        address: "458 Church Lane, Kingsbury, London NW9 8UA",
        note: "WhatPub says this long single-room local has both a pool table and a dartboard alongside big-screen sport.",
        distance: "Kingsbury games pub",
        tags: ["recommended", "pool", "darts"],
        proofLabel: "Games proof",
        proofUrl: "https://whatpub.com/pubs/NLD/6207/neds-bar-london",
      },
      {
        name: "Pride of Paddington",
        address: "1-3 Craven Road, London W2 3BP",
        note: "Lively Paddington Station pub with rooftop space and classic pub food, only a short walk from Paddington Square.",
        distance: "Paddington Square nearby",
        tags: ["recommended", "good food"],
      },
      {
        name: "Sawyers Arms",
        address: "8 London Street, London W2 1HL",
        note: "Reliable Paddington local just north of the station, known for easy pints and straightforward British pub grub.",
        distance: "Paddington Square nearby",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Bear",
        address: "8 Norfolk Place, London W2 1QL",
        note: "Fuller's pub a few minutes from Paddington Square with a polished beer list and proper pub menu.",
        distance: "Paddington Square nearby",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Cleveland Arms",
        address: "28 Chilworth Street, London W2 6DT",
        note: "Well-liked Paddington gastropub tucked into a quieter street, with stronger food than most station-side options.",
        distance: "Paddington Square nearby",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Cheese Barge",
        address: "Paddington Central, South Wharf Road, London W2 1NW",
        note: "User-added London stop: floating cheese-focused barge restaurant near Paddington with wine, plates, and canal energy.",
        distance: "New user addition",
        tags: ["featured", "good food"],
      },
      {
        name: "The Waterway",
        address: "54 Formosa Street, London W9 2JU",
        note: "User-added canal-side London pick with a roomy terrace and easy Maida Vale/Paddington session vibe.",
        distance: "New user addition",
        tags: ["featured", "good food"],
        mapsUrl: "https://maps.app.goo.gl/3csmCEHP1h4wJ7US8?g_st=iw",
      },
      {
        name: "Post Work Pub",
        address: "London",
        note: "User-added London pub stop from your latest note.",
        distance: "New user addition",
        tags: ["featured"],
        mapsUrl: "https://share.google/7g0Tm86PhMVrhvINp",
      },
      {
        name: "Coffee / Gelato Stop",
        address: "London",
        note: "User-added London coffee and gelato stop from your latest note.",
        distance: "New user addition",
        tags: ["featured", "coffee", "good food"],
        mapsUrl: "https://maps.app.goo.gl/v8mbhHuqBKoBuAcs7?g_st=ic",
      },
      {
        name: "Monmouth Coffee",
        address: "27 Monmouth Street, London WC2H 9EU",
        note: "A London classic for serious coffee, especially if you're around Covent Garden or Soho.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Kaffeine",
        address: "66 Great Titchfield Street, London W1W 7QJ",
        note: "One of Fitzrovia's benchmark specialty coffee shops and still a go-to for central London coffee runs.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Rosslyn Coffee",
        address: "78 Queen Victoria Street, London EC4N 4SJ",
        note: "Award-winning City coffee shop that regularly shows up in serious best-in-London lists.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Ozone Coffee",
        address: "11 Leonard Street, London EC2A 4AQ",
        note: "Shoreditch specialty coffee staple with brunch strength and a polished warehouse feel.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Prufrock Coffee",
        address: "23-25 Leather Lane, London EC1N 7TE",
        note: "Leather Lane favorite and one of London's most respected barista-driven coffee spots.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Allpress Espresso Dalston",
        address: "55 Dalston Lane, London E8 2NG",
        note: "Dalston roastery café with a big open room and consistently strong espresso.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Batch Baby",
        address: "The Rose Lipman Building, 43 De Beauvoir Road, London N1 5SF",
        note: "Award-winning De Beauvoir neighborhood cafe with a warmer, slower sit-down feel.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Formative Coffee",
        address: "Butler Place, London SW1H 0RH",
        note: "Sharp modern coffee spot tucked between Westminster and Victoria for a cleaner specialty stop.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Qima Cafe",
        address: "21 Warren Street, London W1T 5LT",
        note: "Fitzrovia coffee-and-patisserie stop known for higher-end beans and pastry game.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "WatchHouse Bermondsey",
        address: "199 Bermondsey Street, London SE1 3UW",
        note: "Modern coffee heavyweight with an especially good Bermondsey base if you're around south of the river.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Covent Garden Grind",
        address: "42 Maiden Lane, London WC2E 7LJ",
        note: "Very central Covent Garden coffee stop, perfect if you're bouncing around theatreland or the West End.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Soho Grind",
        address: "19 Beak Street, London W1F 9RP",
        note: "High-traffic Soho coffee stop that fits naturally into a central London pub or sightseeing day.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Waterloo Grind",
        address: "Unit 15 The Balcony, Waterloo Station, London SE1 7LY",
        note: "Easy South Bank and station coffee option in one of London's heaviest foot-traffic areas.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
    ],
  },
  Liverpool: {
    kicker: "Legend stop",
    description:
      "Liverpool now focuses on proper pubs and pub-style bars, with more historic city-centre boozers, standout interiors, arena-adjacent options, and a few verified pool-table spots.",
    spots: [
      {
        name: "Cavern Club",
        address: "10 Mathew Street, Liverpool L2 6RE",
        note: "From your featured list. Iconic Liverpool nightlife stop.",
        distance: "Featured pick",
        tags: ["featured"],
      },
      {
        name: "Café Tabac",
        address: "126 Bold Street, Liverpool L1 4JA",
        note: "A Liverpool institution and Time Out's top bar pick, with strong bohemian cafe-bar energy.",
        distance: "Top bar pick",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Liverpool Arts Bar",
        address: "22 Hope Street, Liverpool L1 9BY",
        note: "Creative live-music-friendly bar with snacks and a welcoming local feel.",
        distance: "Artsy hang",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Crafty Swine",
        address: "336-338 Smithdown Road, Liverpool L15 5AN",
        note: "Cozy gastropub with hearty breakfasts, pizzas, tapas, and a neighborhood feel.",
        distance: "Food-forward pub",
        tags: ["recommended", "good food"],
      },
      {
        name: "Hope & Anchor",
        address: "Maryland Street, Liverpool L1 9DE",
        note: "CAMRA says the games area includes three pool tables, and student nightlife coverage also calls out a dart board here.",
        distance: "Verified pool spot",
        tags: ["recommended", "pool", "darts", "good food"],
        proofLabel: "Games proof",
        proofUrl: "https://whatpub.com/pubs/MER/398/hope-anchor-liverpool",
      },
      {
        name: "Flute",
        address: "35 Hardman Street, Liverpool L1 9AS",
        note: "Popular student-friendly pub; CAMRA says it has multiple pool tables.",
        distance: "Student pub",
        tags: ["recommended", "pool", "good food"],
        proofLabel: "See pool proof",
        proofUrl: "https://whatpub.com/pubs/MER/89/flute-liverpool",
      },
      {
        name: "The Harp",
        address: "11-17 Harrington Street, Liverpool L2 9QA",
        note: "Irish sports bar in the city centre. CAMRA and the pub both call out pool.",
        distance: "Irish sports bar",
        tags: ["recommended", "pool", "good food"],
        proofLabel: "See pool proof",
        proofUrl: "https://theharpliverpool.co.uk/",
      },
      {
        name: "Philharmonic Dining Rooms",
        address: "36 Hope Street, Liverpool L1 9BX",
        note: "One of Liverpool's grandest historic pubs, with a famous interior and both lunchtime and evening meals.",
        distance: "Historic icon",
        tags: ["recommended", "good food"],
      },
      {
        name: "Hole in Ye Wall",
        address: "4 Hackins Hey, Liverpool L2 2AW",
        note: "Traditional city-centre side-street pub often claimed as Liverpool's oldest hostelry.",
        distance: "Old-school pick",
        tags: ["recommended"],
      },
      {
        name: "Baltic Fleet",
        address: "33A Wapping, Liverpool L1 8DQ",
        note: "Historic flat-iron pub by Albert Dock with a nautical interior, real ale focus, and a standout old-pub feel.",
        distance: "Dockside pub",
        tags: ["recommended"],
      },
      {
        name: "The Vines",
        address: "81 Lime Street, Liverpool L1 1JQ",
        note: "Also known as the Big House. One of Liverpool's great show pubs, and it keeps coming up in local best-Guinness conversations.",
        distance: "Showpiece pub",
        tags: ["recommended", "good guinness"],
      },
      {
        name: "Pen Factory",
        address: "13 Hope Street, Liverpool L1 9BQ",
        note: "Popular Hope Street pub with strong food, real ale, and a good pre-theatre location.",
        distance: "Hope Street favorite",
        tags: ["recommended", "good food"],
      },
      {
        name: "Red Lion",
        address: "36 Slater Street, Liverpool L1 4BX",
        note: "Retro-traditional pub with a games room and courtyard, useful if you want somewhere lively but still pub-first.",
        distance: "Late-night pub",
        tags: ["recommended"],
      },
      {
        name: "One O'Clock Gun",
        address: "Unit 3A, Britannia Pavilion, Royal Albert Dock, Liverpool L3 4AD",
        note: "Very close to M&S Bank Arena and Albert Dock. WhatPub lists food, real ale, and sports TV.",
        distance: "Arena nearby",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Pump House",
        address: "The Colonnades, Albert Dock, Liverpool L3 4AN",
        note: "Large historic dockside pub about a short walk from the arena, with food service and waterfront views.",
        distance: "Arena nearby",
        tags: ["recommended", "good food"],
      },
      {
        name: "The Bridewell",
        address: "1 Campbell Square, Liverpool L1 5FB",
        note: "Award-winning converted Victorian gaol pub with seating in old cells. VisitLiverpool specifically recommends it for a strong pint of Guinness.",
        distance: "Short walk to arena",
        tags: ["recommended", "good guinness"],
      },
      {
        name: "White Hart",
        address: "23 Hope Street, Liverpool L1 9BQ",
        note: "Good Hope Street pub for a pre-event pint, with real ale, sports TV, and a solid pub feel.",
        distance: "Hope Street option",
        tags: ["recommended"],
      },
      {
        name: "The Monro",
        address: "92 Duke Street, Liverpool L1 5AG",
        note: "Liverpool Echo readers voted this one among the city's best Guinness pours, and it regularly shows up in Liverpool Guinness roundups.",
        distance: "Duke Street",
        tags: ["recommended", "good guinness", "good food"],
      },
      {
        name: "Bold Street Coffee",
        address: "89 Bold Street, Liverpool L1 4GD",
        note: "A Liverpool staple for specialty coffee, brunch, and a central Bold Street caffeine reset.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "92 Degrees Coffee",
        address: "24 Hardman Street, Liverpool L1 9AX",
        note: "Liverpool-founded specialty coffee roaster with a strong Georgian Quarter base.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Mother Espresso",
        address: "82 Wood Street, Liverpool L1 4DQ",
        note: "Ropewalks coffee favorite with a minimalist room and a properly coffee-first menu.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "200 Degrees Coffee",
        address: "17-19 Bold Street, Liverpool L1 4DN",
        note: "Strong central Liverpool coffee option right on Bold Street with a bigger all-day cafe feel.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Neighbourhood Coffee",
        address: "Unit 22, The Sandon Estate, Sandon Way, Liverpool L5 9YN",
        note: "Liverpool roastery-driven coffee pick if you want a more serious beans-and-brewing stop.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Rococo Coffee House",
        address: "61 Lord Street, Liverpool L2 1TA",
        note: "Right off the main retail core, so it works well for a central Liverpool coffee stop.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
      {
        name: "Lovelocks Coffee Shop",
        address: "27 Old Haymarket, Liverpool L1 6ER",
        note: "Good central option near Lime Street and the main hotel and station flow.",
        distance: "Coffee stop",
        tags: ["coffee"],
      },
    ],
  },
};

const cityMapConfig = {
  London: {
    elementId: "map-london",
    center: [51.5072, -0.1276],
    zoom: 12,
  },
  Oxford: {
    elementId: "map-oxford",
    center: [51.752, -1.2577],
    zoom: 13,
  },
  Liverpool: {
    elementId: "map-liverpool",
    center: [53.4084, -2.9916],
    zoom: 12,
  },
};

const cityOrder = ["London", "Oxford", "Liverpool"];

const spotAreas = {
  London: {
    "The Roebuck": "Southwark",
    "The Old Nun's Head": "Nunhead",
    "The Coach & Horses": "Soho",
    "The Devonshire": "Soho",
    "The French House": "Soho",
    "Turner's Old Star": "Wapping",
    "Red Lion & Sun": "Highgate",
    "The Baring": "Hoxton",
    "Walmer Castle": "Notting Hill",
    "The Punch Bowl": "Mayfair",
    "The Pelican": "Notting Hill",
    "The Hope": "Carshalton",
    "Southampton Arms": "Kentish Town",
    "The Parakeet": "Kentish Town",
    "The Hero": "Maida Vale",
    "The Fat Badger": "Golborne Road",
    "Lamb Tavern": "Leadenhall",
    "The Wren Tavern": "St Paul's",
    "The Audley Public House": "Mayfair",
    "Trafalgar Tavern": "Greenwich",
    "The Surprise": "Chelsea",
    "Hollydale Tavern": "Peckham",
    "Le Wouri": "Woolwich",
    "Bricklayers Arms": "West Norwood",
    "Ned's Bar": "Kingsbury",
    "Pride of Paddington": "Paddington",
    "Sawyers Arms": "Paddington",
    "The Bear": "Paddington",
    "The Cleveland Arms": "Paddington",
    "The Cheese Barge": "Paddington",
    "The Waterway": "Little Venice",
    "Post Work Pub": "London",
    "Coffee / Gelato Stop": "London",
    "Monmouth Coffee": "Covent Garden",
    Kaffeine: "Fitzrovia",
    "Rosslyn Coffee": "City of London",
    "Ozone Coffee": "Shoreditch",
    "Prufrock Coffee": "Leather Lane",
    "Allpress Espresso Dalston": "Dalston",
    "Batch Baby": "De Beauvoir",
    "Formative Coffee": "Westminster",
    "Qima Cafe": "Fitzrovia",
    "WatchHouse Bermondsey": "Bermondsey",
  },
  Oxford: {
    "The Fir Tree": "Iffley Road",
    "The Oxford Blue": "Marston Street",
    "The Mad Hatter": "Iffley Road",
    "Black Swan": "St Clement's",
    "Half Moon": "St Clements",
    Glamorous: "Cowley Road",
    "The Cape of Good Hope": "Jericho",
    "The Oranges and Lemons": "St Clement's",
    "The Old Black Horse": "St Clement's",
    "The City Arms": "Cowley Road",
    "St James Tavern": "Cowley",
    "The Port Mahon": "St Clements",
    "The Star": "Rectory Road",
    "The Library": "Cowley Road",
    "The Cowley Retreat": "Cowley Road",
    "The Chester Arms": "East Oxford",
    "The Rusty Bicycle": "East Oxford",
    "Duke of Monmouth": "Osney",
    "Isis Farmhouse": "Iffley Meadows",
    "Turf Tavern": "City Centre",
    "The Gardener's Arms": "Plantation Road",
    "The Bookbinders": "Jericho",
    "Moo Moos Milkshakes": "Cowley Road",
    "Missing Bean": "City Centre",
    "Jericho Coffee Traders": "High Street",
    "Society Cafe": "City Centre",
    "Common Ground": "Jericho",
    "NewGround Coffee": "City Centre",
    "The Bear Inn": "City Centre",
    "The Grapes": "George Street",
    "The Perch": "Binsey",
    "The Royal Blenheim": "St Ebbes",
    Wheatsheaf: "High Street",
    Chequers: "High Street",
  },
  Liverpool: {
    "Cavern Club": "Mathew Street",
    "Café Tabac": "Bold Street",
    "The Liverpool Arts Bar": "Hope Street",
    "The Crafty Swine": "Smithdown Road",
    "Hope & Anchor": "Georgian Quarter",
    Flute: "Hardman Street",
    "The Harp": "City Centre",
    "Philharmonic Dining Rooms": "Hope Street",
    "Hole in Ye Wall": "Commercial District",
    "Baltic Fleet": "Baltic Triangle",
    "The Vines": "Lime Street",
    "Pen Factory": "Hope Street",
    "Red Lion": "Slater Street",
    "One O'Clock Gun": "Albert Dock",
    "The Pump House": "Albert Dock",
    "The Bridewell": "Campbell Square",
    "White Hart": "Hope Street",
    "The Monro": "Duke Street",
    "Bold Street Coffee": "Bold Street",
    "92 Degrees Coffee": "Hardman Street",
    "Mother Espresso": "Ropewalks",
    "200 Degrees Coffee": "Bold Street",
    "Neighbourhood Coffee": "Sandon",
  },
};

const filters = [
  { key: "featured", label: "★ Dope Spot ★" },
  { key: "darts", label: "Dartboard" },
  { key: "pool", label: "Pool Table" },
  { key: "good guinness", label: "Guinness" },
  { key: "good food", label: "Good Food" },
];

const modes = [
  { key: "guide", label: "Pubs" },
  { key: "randomizer", label: "Pub Randomizer" },
  { key: "coffee", label: "Coffee" },
  { key: "itinerary", label: "Trip Itinerary" },
];

const itineraryDays = [
  {
    date: "Friday, April 17",
    city: "London",
    items: ["Flight"],
  },
  {
    date: "Saturday, April 18",
    city: "London",
    items: ["Picnic party", "Bar night"],
  },
  {
    date: "Sunday, April 19",
    city: "London",
    items: [
      "Strawberry walking tour: Tower of London tour 10:00, 2-3 hours",
      "St. Paul's Cathedral",
      "London Bridge",
      "Tower of London",
      "Tower Bridge",
      "Borough Market",
      "Bermondsey Beer Mile",
      "Sunday roast at Blacklock 5:45pm",
      "Bars",
    ],
  },
  {
    date: "Monday, April 20",
    city: "London",
    items: [
      "Strawberry walking tour: London Westminster 10:30, 2 hours",
      "Buckingham Palace",
      "Changing of the Guard at 10:45",
      "Westminster Abbey",
      "Big Ben",
      "London Eye / river cruise",
      "Tate Modern",
      "Camden Market to get darts match outfit",
      "Savoy Grill / Bread Street (Gordon Ramsay, beef Wellington)",
      "Piccadilly Circus",
    ],
  },
  {
    date: "Tuesday, April 21",
    city: "Oxford",
    items: ["Bus from London", "Bars near Cesario", "Soccer match", "Late night at Half Moon and Glamorous"],
  },
  {
    date: "Wednesday, April 22",
    city: "Oxford",
    items: [
      "Punting",
      "Day bars near Cesario, then finish in town",
      "Maybe drunk museum drop-in",
      "Flight Club",
      "Walk around town",
      "Late night in town",
    ],
  },
  {
    date: "Thursday, April 23",
    city: "Liverpool",
    items: ["Drive from Oxford", "Darts match"],
  },
  {
    date: "Friday, April 24",
    city: "Liverpool",
    items: ["Beatles Museum", "Cavern Club"],
  },
  {
    date: "Saturday, April 25",
    city: "Oxford (Crown Hotel)",
    items: ["Drive from Liverpool", "Bar to watch soccer"],
  },
  {
    date: "Sunday, April 26",
    city: "Flight home",
    items: ["Bus to airport", "Flight home"],
  },
];

const itineraryMapQueries = {
  "Strawberry walking tour: Tower of London tour 10:00, 2-3 hours":
    "Tower of London, London EC3N 4AB, UK",
  "St. Paul's Cathedral": "St. Paul's Cathedral, St. Paul's Churchyard, London EC4M 8AD, UK",
  "London Bridge": "London Bridge, London SE1 9DD, UK",
  "Tower of London": "Tower of London, London EC3N 4AB, UK",
  "Tower Bridge": "Tower Bridge, Tower Bridge Road, London SE1 2UP, UK",
  "Bermondsey Beer Mile": "Bermondsey Beer Mile, Bermondsey, London SE1, UK",
  "Sunday roast at Blacklock 5:45pm": "Blacklock Soho, 24 Great Windmill Street, London W1D 7LG, UK",
  "Strawberry walking tour: London Westminster 10:30, 2 hours": "Westminster Abbey, Dean's Yard, London SW1P 3PA, UK",
  "Buckingham Palace": "Buckingham Palace, London SW1A 1AA, UK",
  "Changing of the Guard at 10:45": "Buckingham Palace, London SW1A 1AA, UK",
  "Westminster Abbey": "Westminster Abbey, Dean's Yard, London SW1P 3PA, UK",
  "Big Ben": "Big Ben, London SW1A 0AA, UK",
  "London Eye / river cruise": "London Eye, Riverside Building, County Hall, London SE1 7PB, UK",
  "Savoy Grill / Bread Street (Gordon Ramsay, beef Wellington)":
    "Savoy Grill, The Savoy, Strand, London WC2R 0EZ, UK",
  "Tate Modern": "Tate Modern, Bankside, London SE1 9TG, UK",
  "Borough Market": "Borough Market, 8 Southwark Street, London SE1 1TL, UK",
  "Notting Hill market": "Portobello Road Market, London W11 1LJ, UK",
  "Camden Market to get darts match outfit": "Camden Market, Camden Lock Place, London NW1 8AF, UK",
  "Piccadilly Circus": "Piccadilly Circus, London W1J 9HS, UK",
  "Soccer match": "Kassam Stadium, Grenoble Road, Oxford OX4 4XP, UK",
  "Late night at Half Moon and Glamorous": "Half Moon, 17-18 St Clement's Street, Oxford OX4 1AB, UK",
  Punting: "Magdalen Bridge Boathouse, High Street, Oxford OX1 4AU, UK",
  "Maybe drunk museum drop-in": "Oxford University Museum of Natural History, Parks Road, Oxford OX1 3PW, UK",
  "Flight Club": "Flight Club Oxford, Westgate Centre, Oxford OX1 1NZ, UK",
  "Darts match": "M&S Bank Arena Liverpool, King's Dock, Liverpool L3 4FP, UK",
  "Beatles Museum": "The Beatles Story Museum, Britannia Vaults, Albert Dock, Liverpool L3 4AD, UK",
  "Cavern Club": "Cavern Club, 10 Mathew Street, Liverpool L2 6RE, UK",
};

const state = {
  mode: "guide",
  city: "London",
  activeFilters: new Set(),
  randomizerRotation: 0,
  randomizerPick: null,
  randomizerSpinning: false,
};

const modeTabs = document.querySelector("#modeTabs");
const cityLabel = document.querySelector("#cityLabel");
const vibeLabel = document.querySelector("#vibeLabel");
const cityTabs = document.querySelector("#cityTabs");
const filterBar = document.querySelector("#filterBar");
const resultsSummary = document.querySelector("#resultsSummary");
const clearFiltersButton = document.querySelector("#clearFilters");
const sectionKicker = document.querySelector("#sectionKicker");
const sectionTitle = document.querySelector("#sectionTitle");
const sectionCopy = document.querySelector("#sectionCopy");
const spotGrid = document.querySelector("#spotGrid");
const spotCardTemplate = document.querySelector("#spotCardTemplate");
const mapCards = document.querySelectorAll("[data-city-map]");
const guideView = document.querySelector("#guideView");
const citySection = document.querySelector("#citySection");
const itineraryView = document.querySelector("#itineraryView");
const itineraryGrid = document.querySelector("#itineraryGrid");
const randomizerView = document.querySelector("#randomizerView");
const randomizerWheel = document.querySelector("#randomizerWheel");
const randomizerCity = document.querySelector("#randomizerCity");
const randomizerResult = document.querySelector("#randomizerResult");
const randomizerNote = document.querySelector("#randomizerNote");
const randomizerSpin = document.querySelector("#randomizerSpin");
const randomizerMapLink = document.querySelector("#randomizerMapLink");
const mapState = {};
const hasRandomizerUi = Boolean(
  randomizerView &&
    randomizerWheel &&
    randomizerCity &&
    randomizerResult &&
    randomizerNote &&
    randomizerSpin &&
    randomizerMapLink,
);

function titleCase(tag) {
  if (tag === "featured") {
    return "★ Dope Spot ★";
  }

  if (tag === "recommended") {
    return "";
  }

  if (tag === "darts") {
    return "Dartboard";
  }

  if (tag === "pool") {
    return "Pool Table";
  }

  return tag
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getTagSlug(tag) {
  return tag.replace(/\s+/g, "-");
}

function getFilterMarkup(filter) {
  if (filter.key !== "good guinness") {
    return filter.label;
  }

  return `
    <span class="guinness-filter" aria-label="Guinness">
      <svg viewBox="0 0 32 40" aria-hidden="true">
        <path d="M16 2 C18 7 22 8 26 8 C24 11 22 12 22 17 V29 C22 34 19 38 16 38 C13 38 10 34 10 29 V17 C10 12 8 11 6 8 C10 8 14 7 16 2 Z" fill="#c79a2b" stroke="#101010" stroke-width="2" />
        <path d="M17 10 C18 14 20 17 23 18" fill="none" stroke="#fff7e2" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      <span>Guinness</span>
    </span>
  `;
}

function getTagMarkup(tag) {
  if (tag === "good guinness") {
    return `
      <span class="guinness-filter" aria-label="Guinness">
        <svg viewBox="0 0 32 40" aria-hidden="true">
          <path d="M16 2 C18 7 22 8 26 8 C24 11 22 12 22 17 V29 C22 34 19 38 16 38 C13 38 10 34 10 29 V17 C10 12 8 11 6 8 C10 8 14 7 16 2 Z" fill="#c79a2b" stroke="#101010" stroke-width="2" />
          <path d="M17 10 C18 14 20 17 23 18" fill="none" stroke="#fff7e2" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <span>Guinness</span>
      </span>
    `;
  }

  return titleCase(tag);
}

function getGoogleMapsLink(spot) {
  if (spot.mapsUrl) {
    return spot.mapsUrl;
  }

  const query = encodeURIComponent(`${spot.name}, ${spot.address}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function getItineraryMapsLink(item) {
  const query = itineraryMapQueries[item];
  if (!query) {
    return null;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function getSpotArea(city, spot) {
  return spotAreas[city]?.[spot.name] || city;
}

function getAllCitySpots(city) {
  return cityContent[city].spots.filter((spot) => !spot.name.toLowerCase().includes("milkshake"));
}

function getRandomizerSpots(city) {
  return getAllCitySpots(city).filter((spot) => !spot.tags.includes("coffee"));
}

function getCoffeeSpots(city) {
  return getAllCitySpots(city).filter((spot) => spot.tags.includes("coffee"));
}

function getPubSpots(city) {
  return getAllCitySpots(city).filter((spot) => !spot.tags.includes("coffee"));
}

function getGeocodeKey(city, spot) {
  return `blimeyboys:v2:${city}:${spot.name}:${spot.address}`;
}

async function geocodeQuery(query) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=gb&q=${encodeURIComponent(query)}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const results = await response.json();
  if (!results.length) {
    return null;
  }

  return {
    lat: Number(results[0].lat),
    lon: Number(results[0].lon),
  };
}

async function geocodeSpot(city, spot) {
  const cacheKey = getGeocodeKey(city, spot);
  const cached = window.localStorage.getItem(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  const queries = [
    `${spot.name}, ${spot.address}, ${city}, UK`,
    `${spot.address}, ${city}, UK`,
    `${spot.name}, ${city}, UK`,
  ];

  for (const query of queries) {
    const point = await geocodeQuery(query);
    if (point) {
      window.localStorage.setItem(cacheKey, JSON.stringify(point));
      return point;
    }
  }

  return null;
}

function getFallbackPoint(city, index) {
  const fallbackCenters = {
    London: [51.5132, -0.1316],
    Oxford: [51.7537, -1.2584],
    Liverpool: [53.4067, -2.9876],
  };
  const [lat, lon] = fallbackCenters[city] || cityMapConfig[city].center;
  const ring = Math.floor(index / 8) + 1;
  const angle = (index % 8) * (Math.PI / 4);
  const latOffset = Math.sin(angle) * 0.006 * ring;
  const lonOffset = Math.cos(angle) * 0.01 * ring;

  return {
    lat: lat + latOffset,
    lon: lon + lonOffset,
  };
}

function buildPopupHtml(spot) {
  return `
    <div class="map-popup">
      <h4>${spot.name}</h4>
      <p>${spot.address}</p>
    </div>
  `;
}

function createDotMarker() {
  return window.L.divIcon({
    className: "map-dot-icon",
    html: '<span class="map-dot"></span>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -8],
  });
}

function createMap() {
  if (!window.L) {
    return;
  }

  cityOrder.forEach((city) => {
    const config = cityMapConfig[city];
    const element = document.getElementById(config.elementId);
    if (!element) {
      return;
    }

    const map = window.L.map(element, {
      zoomControl: false,
      scrollWheelZoom: false,
      preferCanvas: true,
    }).setView(config.center, config.zoom);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      detectRetina: true,
      maxZoom: 19,
      tileSize: 256,
      zoomOffset: 0,
    }).addTo(map);

    window.L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    mapState[city] = {
      map,
      markers: [],
    };
  });
}

function renderModeTabs() {
  modeTabs.innerHTML = "";

  modes.forEach((mode) => {
    if (mode.key === "randomizer" && !hasRandomizerUi) {
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill-button mode-button ${mode.key === state.mode ? "active" : ""}`;
    button.textContent = mode.label;
    button.setAttribute("aria-pressed", String(mode.key === state.mode));
    button.addEventListener("click", () => {
      state.mode = mode.key;
      render();
    });
    modeTabs.appendChild(button);
  });
}

async function populateMaps() {
  for (const city of cityOrder) {
    const mapEntry = mapState[city];
    if (!mapEntry) {
      continue;
    }

    mapEntry.markers.forEach((marker) => marker.remove());
    mapEntry.markers = [];

    const bounds = [];
    const spots = state.mode === "coffee" ? getCoffeeSpots(city) : getPubSpots(city);

    for (const [index, spot] of spots.entries()) {
      try {
        const point = (await geocodeSpot(city, spot)) || getFallbackPoint(city, index);

        const marker = window.L.marker([point.lat, point.lon], {
          icon: createDotMarker(),
        }).addTo(mapEntry.map);
        marker.bindPopup(buildPopupHtml(spot));
        mapEntry.markers.push(marker);
        bounds.push([point.lat, point.lon]);
      } catch (error) {
        console.error(`Unable to geocode ${spot.name}`, error);
      }
    }

    if (bounds.length) {
      mapEntry.map.fitBounds(bounds, {
        padding: [24, 24],
        maxZoom: cityMapConfig[city].zoom + 1,
      });
    } else {
      mapEntry.map.setView(cityMapConfig[city].center, cityMapConfig[city].zoom);
    }
  }
}

function renderCityTabs() {
  cityTabs.innerHTML = "";

  cityOrder.forEach((city) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill-button city-button ${city === state.city ? "active" : ""}`;
    button.textContent = city;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(city === state.city));
    button.addEventListener("click", () => {
      state.city = city;
      render();
    });
    cityTabs.appendChild(button);
  });
}

function renderMaps() {
  mapCards.forEach((card) => {
    const isActive = card.dataset.cityMap === state.city;
    card.classList.toggle("active", isActive);
  });

  const activeMap = mapState[state.city]?.map;
  if (activeMap) {
    window.setTimeout(() => {
      activeMap.invalidateSize();
    }, 0);
  }
}

function renderFilterButtons() {
  filterBar.innerHTML = "";

  filters.forEach((filter) => {
    const isActive = state.activeFilters.has(filter.key);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill-button filter-button filter-${getTagSlug(filter.key)} ${isActive ? "filter-active" : ""}`;
    button.innerHTML = getFilterMarkup(filter);
    button.setAttribute("aria-pressed", String(isActive));
    button.addEventListener("click", () => {
      if (isActive) {
        state.activeFilters.delete(filter.key);
      } else {
        state.activeFilters.add(filter.key);
      }
      render();
    });
    filterBar.appendChild(button);
  });
}

function renderItinerary() {
  itineraryGrid.innerHTML = "";

  itineraryDays.forEach((day) => {
    const card = document.createElement("article");
    card.className = "itinerary-card";
    card.innerHTML = `
      <div class="itinerary-card-head">
        <div>
          <p class="itinerary-date">${day.date}</p>
          <h3>${day.city}</h3>
        </div>
        <div class="itinerary-badge" aria-hidden="true">${day.city}</div>
      </div>
    `;

    const list = document.createElement("ul");
    list.className = "itinerary-list";

    day.items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "itinerary-item";

      const text = document.createElement("span");
      text.className = "itinerary-item-text";
      text.textContent = item;
      li.appendChild(text);

      const mapsLink = getItineraryMapsLink(item);
      if (mapsLink) {
        const link = document.createElement("a");
        link.className = "itinerary-map-link";
        link.href = mapsLink;
        link.target = "_blank";
        link.rel = "noreferrer noopener";
        link.textContent = "Google Maps";
        li.appendChild(link);
      }

      list.appendChild(li);
    });

    card.appendChild(list);
    itineraryGrid.appendChild(card);
  });
}

function buildWheelGradient(spots) {
  if (!spots.length) {
    return "conic-gradient(#153421 0deg 360deg)";
  }

  const colors = ["#f3d56b", "#00a7e1", "#8ad67e", "#e8624a", "#85592e", "#e58cff"];
  const step = 360 / spots.length;

  return `conic-gradient(${spots
    .map((_, index) => {
      const start = (index * step).toFixed(2);
      const end = ((index + 1) * step).toFixed(2);
      const color = colors[index % colors.length];
      return `${color} ${start}deg ${end}deg`;
    })
    .join(", ")})`;
}

function renderRandomizer() {
  if (!hasRandomizerUi) {
    return;
  }

  const spots = getRandomizerSpots(state.city);
  randomizerCity.textContent = state.city;
  randomizerWheel.style.background = buildWheelGradient(spots);
  randomizerWheel.style.transform = `rotate(${state.randomizerRotation}deg)`;

  if (!spots.length) {
    randomizerResult.textContent = `No pub picks ready for ${state.city}.`;
    randomizerNote.textContent = "Try a different city.";
    randomizerSpin.disabled = true;
    randomizerMapLink.classList.add("hidden-view");
    return;
  }

  randomizerSpin.disabled = state.randomizerSpinning;
  randomizerSpin.textContent = state.randomizerSpinning ? "Spinning..." : "Spin the Wheel";

  if (state.randomizerPick) {
    randomizerResult.textContent = state.randomizerPick.name;
    randomizerNote.textContent = state.randomizerPick.note;
    randomizerMapLink.href = getGoogleMapsLink(state.randomizerPick);
    randomizerMapLink.classList.remove("hidden-view");
  } else {
    randomizerResult.textContent = "Tap spin for a pub pick.";
    randomizerNote.textContent = "The wheel only uses pub and bar spots from the selected city.";
    randomizerMapLink.classList.add("hidden-view");
  }
}

function spinRandomizer() {
  if (!hasRandomizerUi) {
    return;
  }

  const spots = getRandomizerSpots(state.city);
  if (!spots.length || state.randomizerSpinning) {
    return;
  }

  const selectedIndex = Math.floor(Math.random() * spots.length);
  const step = 360 / spots.length;
  const segmentCenter = selectedIndex * step + step / 2;
  const target = 360 - segmentCenter;
  const extraTurns = 360 * (5 + Math.floor(Math.random() * 2));

  state.randomizerSpinning = true;
  state.randomizerPick = null;
  state.randomizerRotation += extraTurns + target;
  renderRandomizer();

  window.setTimeout(() => {
    state.randomizerSpinning = false;
    state.randomizerPick = spots[selectedIndex];
    renderRandomizer();
  }, 4300);
}

function getVisibleSpots() {
  const currentSpots = state.mode === "coffee" ? getCoffeeSpots(state.city) : getPubSpots(state.city);

  if (state.activeFilters.size === 0) {
    return currentSpots;
  }

  return currentSpots.filter((spot) =>
    Array.from(state.activeFilters).every((filter) => spot.tags.includes(filter)),
  );
}

function renderSpots() {
  const city = cityContent[state.city];
  const visibleSpots = getVisibleSpots();
  const allModeSpots = state.mode === "coffee" ? getCoffeeSpots(state.city) : getPubSpots(state.city);

  sectionKicker.textContent = state.mode === "coffee" ? "Coffee guide" : city.kicker;
  sectionTitle.textContent = state.city;
  sectionCopy.textContent =
    state.mode === "coffee"
      ? `Coffee-only picks for ${state.city}, separated from the pub map so daytime caffeine stops are easier to scan.`
      : city.description;
  resultsSummary.textContent =
    visibleSpots.length === allModeSpots.length && state.activeFilters.size === 0
      ? `${allModeSpots.length} spots ready to browse`
      : `${visibleSpots.length} matching spot${visibleSpots.length === 1 ? "" : "s"}`;

  spotGrid.innerHTML = "";

  if (visibleSpots.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <h3>No exact matches yet</h3>
      <p>Try clearing a filter or switch cities. These tags now come from a mix of your list plus internet research from venue pages, WhatPub, and city guides.</p>
    `;
    spotGrid.appendChild(emptyState);
    return;
  }

  visibleSpots.forEach((spot) => {
    const card = spotCardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".spot-city").textContent = state.city;
    card.querySelector(".spot-name").textContent = spot.name;
    card.querySelector(".spot-distance").textContent = getSpotArea(state.city, spot);
    card.querySelector(".spot-address").textContent = spot.address;
    card.querySelector(".spot-note").textContent = spot.note;
    card.querySelector(".map-link").href = getGoogleMapsLink(spot);

    const tagRow = card.querySelector(".tag-row");
    const visibleTags = spot.tags.filter((tag) => tag !== "recommended");

    visibleTags.forEach((tag) => {

      const tagEl = document.createElement("span");
      tagEl.className = `tag tag-${getTagSlug(tag)}`;
      tagEl.innerHTML = getTagMarkup(tag);
      tagRow.appendChild(tagEl);
    });

    spotGrid.appendChild(card);
  });
}

function render() {
  renderModeTabs();
  renderCityTabs();

  if (state.mode === "randomizer" && !hasRandomizerUi) {
    state.mode = "guide";
  }

  const isGuide = state.mode === "guide";
  const isCoffee = state.mode === "coffee";
  const isItinerary = state.mode === "itinerary";
  const isRandomizer = state.mode === "randomizer" && hasRandomizerUi;
  document.body.classList.toggle("itinerary-mode", isItinerary);
  guideView.classList.toggle("hidden-view", !(isGuide || isCoffee));
  citySection.classList.toggle("hidden-view", !(isGuide || isCoffee));
  itineraryView.classList.toggle("hidden-view", !isItinerary);
  if (randomizerView) {
    randomizerView.classList.toggle("hidden-view", !isRandomizer);
  }
  cityTabs.style.display = isGuide || isCoffee || isRandomizer ? "flex" : "none";
  cityLabel.style.display = isGuide || isCoffee || isRandomizer ? "block" : "none";

  if (isGuide) {
    renderFilterButtons();
    filterBar.style.display = "flex";
    vibeLabel.style.display = "block";
    resultsSummary.style.display = "block";
    clearFiltersButton.style.display = "inline-flex";
  } else if (isCoffee) {
    filterBar.innerHTML = "";
    filterBar.style.display = "none";
    vibeLabel.style.display = "none";
    resultsSummary.style.display = "block";
    clearFiltersButton.style.display = "none";
  } else {
    filterBar.style.display = "none";
    vibeLabel.style.display = "none";
    resultsSummary.style.display = "none";
    clearFiltersButton.style.display = "none";
  }

  if (isGuide || isCoffee) {
    renderMaps();
    renderSpots();
    populateMaps();
  } else if (isItinerary) {
    renderItinerary();
  } else {
    renderRandomizer();
  }
}

clearFiltersButton.addEventListener("click", () => {
  state.activeFilters.clear();
  render();
});

if (randomizerSpin) {
  randomizerSpin.addEventListener("click", spinRandomizer);
}

render();
createMap();
populateMaps();
