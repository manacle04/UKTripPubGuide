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
  },
};

const filters = [
  { key: "featured", label: "Dope Spots (Our Picks)" },
  { key: "darts", label: "Darts" },
  { key: "pool", label: "Pool Table" },
  { key: "good guinness", label: "Good Guinness" },
  { key: "good food", label: "Good Food" },
];

const state = {
  city: "London",
  activeFilters: new Set(),
};

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
const mapState = {};

function titleCase(tag) {
  if (tag === "featured") {
    return "★ Dope Spot ★";
  }

  if (tag === "recommended") {
    return "";
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
  const query = encodeURIComponent(`${spot.name}, ${spot.address}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function getSpotArea(city, spot) {
  return spotAreas[city]?.[spot.name] || city;
}

function getAllCitySpots(city) {
  return cityContent[city].spots.filter((spot) => !spot.name.toLowerCase().includes("milkshake"));
}

function getGeocodeKey(city, spot) {
  return `blimeyboys:${city}:${spot.name}:${spot.address}`;
}

async function geocodeSpot(city, spot) {
  const cacheKey = getGeocodeKey(city, spot);
  const cached = window.localStorage.getItem(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  const query = encodeURIComponent(`${spot.name}, ${spot.address}, ${city}, UK`);
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=gb&q=${query}`,
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

  const point = {
    lat: Number(results[0].lat),
    lon: Number(results[0].lon),
  };
  window.localStorage.setItem(cacheKey, JSON.stringify(point));
  return point;
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
    }).setView(config.center, config.zoom);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
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

async function populateMaps() {
  for (const city of cityOrder) {
    const mapEntry = mapState[city];
    if (!mapEntry) {
      continue;
    }

    const bounds = [];
    const spots = getAllCitySpots(city);

    for (const spot of spots) {
      try {
        const point = await geocodeSpot(city, spot);
        if (!point) {
          continue;
        }

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

function getVisibleSpots() {
  const currentSpots = cityContent[state.city].spots;

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

  sectionKicker.textContent = city.kicker;
  sectionTitle.textContent = state.city;
  sectionCopy.textContent = city.description;
  resultsSummary.textContent =
    visibleSpots.length === city.spots.length && state.activeFilters.size === 0
      ? `${city.spots.length} spots ready to browse`
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
  renderCityTabs();
  renderFilterButtons();
  renderMaps();
  renderSpots();
}

clearFiltersButton.addEventListener("click", () => {
  state.activeFilters.clear();
  render();
});

render();
createMap();
populateMaps();
