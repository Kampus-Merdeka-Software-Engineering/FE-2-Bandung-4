const products = [
  {
    id: "rec1Honeymoon",
    title: "Romantic Getaway in Bali",
    category: "honeymoon trip",
    location: "Bali",
    image:
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Um9tYW50aWMlMjBHZXRhd2F5JTIwaW4lMjBCYWxpfGVufDB8fDB8fHww",
    date: "2023-09-10",
    price: 2500000,
    description:
      "Experience a romantic honeymoon in the beautiful island of Bali. Explore stunning beaches and enjoy luxurious accommodations.",
  },
  {
    id: "rec2Honeymoon",
    title: "Cultural Retreat in Yogyakarta",
    category: "honeymoon trip",
    location: "Yogyakarta",
    image:
      "https://images.unsplash.com/photo-1630214801769-24784bfd2b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3VsdHVyYWwlMjBSZXRyZWF0JTIwaW4lMjBZb2d5YWthcnRhfGVufDB8fDB8fHww",
    date: "2023-09-15",
    price: 2800000,
    description:
      "Discover the rich culture of Yogyakarta on your honeymoon. Visit historic temples and indulge in traditional Javanese cuisine.",
  },
  {
    id: "rec3Honeymoon",
    title: "Island Paradise in Gili Islands",
    category: "honeymoon trip",
    location: "Gili Islands",
    image:
      "https://images.unsplash.com/photo-1587364125669-354c5735dd2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lsaSUyMGlzbGFuZHN8ZW58MHx8MHx8fDA%3D",
    date: "2023-09-20",
    price: 3000000,
    description:
      "Escape to the secluded and serene Gili Islands for a private and intimate honeymoon. Enjoy crystal-clear waters and white sandy beaches.",
  },
  {
    id: "rec4Honeymoon",
    title: "Luxury Retreat in Ubud",
    category: "honeymoon trip",
    location: "Ubud",
    image:
      "https://images.unsplash.com/photo-1544620463-76ddc1e5d416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFVidWR8ZW58MHx8MHx8fDA%3D",
    date: "2023-09-25",
    price: 3200000,
    description:
      "Indulge in a luxurious honeymoon retreat in the cultural heart of Bali, Ubud. Stay in exquisite resorts and pamper yourselves.",
  },
  {
    id: "rec5Honeymoon",
    title: "Tropical Paradise in Komodo Island",
    category: "honeymoon trip",
    location: "Komodo Island",
    image: "URL_GAMBAR_KOMODO_ISLAND",
    date: "2023-09-30",
    price: 3500000,
    description:
      "Embark on a tropical adventure in Komodo Island. Explore the unique flora and fauna and relax on pristine beaches.",
  },
  {
    id: "rec6Honeymoon",
    title: "Sunset Romance in Raja Ampat",
    category: "honeymoon trip",
    location: "Raja Ampat",
    image:
      "https://images.unsplash.com/photo-1561009226-7a820d647a40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFN1bnNldCUyMFJvbWFuY2UlMjBpbiUyMFJhamElMjBBbXBhdHxlbnwwfHwwfHx8MA%3D%3D",
    date: "2023-10-05",
    price: 3800000,
    description:
      "Experience unparalleled beauty and tranquility in Raja Ampat. Witness breathtaking sunsets and enjoy a romantic escape.",
  },
  {
    id: "rec7Honeymoon",
    title: "Beach Bliss in Lombok",
    category: "honeymoon trip",
    location: "Lombok",
    image: "URL_GAMBAR_LOMBOK",
    date: "2023-10-10",
    price: 3000000,
    description:
      "Relax on the pristine beaches of Lombok and enjoy the peaceful atmosphere for a perfect honeymoon getaway.",
  },
  {
    id: "rec8Honeymoon",
    title: "Serenity in Flores",
    category: "honeymoon trip",
    location: "Flores",
    image: "URL_GAMBAR_FLORES",
    date: "2023-10-15",
    price: 3200000,
    description:
      "Escape to the serene beauty of Flores. Discover hidden gems and create unforgettable memories on your honeymoon.",
  },
  {
    id: "rec9Honeymoon",
    title: "Adventure in Bromo",
    category: "honeymoon trip",
    location: "Bromo",
    image: "URL_GAMBAR_BROMO",
    date: "2023-10-20",
    price: 2800000,
    description:
      "Embark on an adventurous honeymoon in Bromo. Witness the stunning landscapes and enjoy a unique romantic experience.",
  },
  {
    id: "rec10Honeymoon",
    title: "Coastal Escape in Belitung",
    category: "honeymoon trip",
    location: "Belitung",
    image: "URL_GAMBAR_BELITUNG",
    date: "2023-10-25",
    price: 3300000,
    description:
      "Escape to the beautiful coastal landscapes of Belitung. Enjoy a romantic retreat with pristine beaches and turquoise waters.",
  },
  {
    id: "rec1Concert",
    title: "Java Jazz Festival",
    category: "concert trip",
    location: "Jakarta, Indonesia",
    image: "URL_GAMBAR_JAVA_JAZZ",
    date: "2023-11-01",
    price: 500000,
    description:
      "Experience the largest jazz festival in the Southern Hemisphere, Java Jazz Festival in the vibrant city of Jakarta.",
  },
  {
    id: "rec2Concert",
    title: "Ultra Music Festival",
    category: "concert trip",
    location: "Miami, USA",
    image: "URL_GAMBAR_ULTRA_MUSIC",
    date: "2023-11-10",
    price: 8000000,
    description:
      "Join the world-famous Ultra Music Festival in Miami for an electrifying experience featuring top electronic music artists.",
  },
  {
    id: "rec3Concert",
    title: "Tomorrowland",
    category: "concert trip",
    location: "Boom, Belgium",
    image: "URL_GAMBAR_TOMORROWLAND",
    date: "2023-11-20",
    price: 10000000,
    description:
      "Embark on a musical journey at Tomorrowland, one of the largest and most famous electronic dance music festivals in the world.",
  },
  {
    id: "rec4Concert",
    title: "Burning Man",
    category: "concert trip",
    location: "Black Rock City, USA",
    image: "URL_GAMBAR_BURNING_MAN",
    date: "2023-12-01",
    price: 12000000,
    description:
      "Join the unique and immersive Burning Man festival in the Nevada desert, featuring art, music, and self-expression.",
  },
  {
    id: "rec5Concert",
    title: "Coachella Valley Music and Arts Festival",
    category: "concert trip",
    location: "Indio, USA",
    image: "URL_GAMBAR_COACHELLA",
    date: "2023-12-10",
    price: 8500000,
    description:
      "Experience the iconic Coachella festival, known for its diverse lineup of music and arts in the California desert.",
  },
  {
    id: "rec6Concert",
    title: "Glastonbury Festival",
    category: "concert trip",
    location: "Pilton, UK",
    image: "URL_GAMBAR_GLASTONBURY",
    date: "2023-12-20",
    price: 9500000,
    description:
      "Join the legendary Glastonbury Festival, one of the largest and most iconic music festivals in the world.",
  },
  {
    id: "rec7Concert",
    title: "Sziget Festival",
    category: "concert trip",
    location: "Budapest, Hungary",
    image: "URL_GAMBAR_SZIGET",
    date: "2024-01-05",
    price: 7000000,
    description:
      "Experience the Sziget Festival, a major music and cultural festival held on the picturesque Óbuda Island in Budapest.",
  },
  {
    id: "rec8Concert",
    title: "Rock in Rio",
    category: "concert trip",
    location: "Rio de Janeiro, Brazil",
    image: "URL_GAMBAR_ROCK_IN_RIO",
    date: "2024-01-15",
    price: 11000000,
    description:
      "Join the massive Rock in Rio festival, featuring a diverse lineup of rock, pop, and electronic music in Rio de Janeiro.",
  },
  {
    id: "rec9Concert",
    title: "Wireless Festival",
    category: "concert trip",
    location: "London, UK",
    image: "URL_GAMBAR_WIRELESS",
    date: "2024-01-25",
    price: 6000000,
    description:
      "Experience the Wireless Festival in London, showcasing top artists in the genres of hip hop, electronic, and pop music.",
  },
  {
    id: "rec10Concert",
    title: "Sunburn Festival",
    category: "concert trip",
    location: "Goa, India",
    image: "URL_GAMBAR_SUNBURN",
    date: "2024-02-05",
    price: 5500000,
    description:
      "Join the Sunburn Festival in Goa, known for its lively atmosphere and top-tier DJs playing electronic dance music.",
  },
  {
    id: "rec11Concert",
    title: "Electric Daisy Carnival (EDC)",
    category: "concert trip",
    location: "Las Vegas, USA",
    image: "URL_GAMBAR_EDC",
    date: "2024-02-15",
    price: 9000000,
    description:
      "Experience the Electric Daisy Carnival (EDC) in Las Vegas, one of the largest electronic dance music festivals in the world.",
  },
  {
    id: "rec12Concert",
    title: "Lollapalooza",
    category: "concert trip",
    location: "Chicago, USA",
    image: "URL_GAMBAR_LOLLAPALOOZA",
    date: "2024-02-25",
    price: 7500000,
    description:
      "Join the iconic Lollapalooza festival in Chicago, featuring a diverse lineup of artists across various music genres.",
  },
  {
    id: "rec13Concert",
    title: "Exit Festival",
    category: "concert trip",
    location: "Novi Sad, Serbia",
    image: "URL_GAMBAR_EXIT",
    date: "2024-03-01",
    price: 6800000,
    description:
      "Experience the Exit Festival in the historic city of Novi Sad, Serbia, known for its diverse music genres and vibrant atmosphere.",
  },
  {
    id: "rec14Concert",
    title: "Pinkpop Festival",
    category: "concert trip",
    location: "Landgraaf, Netherlands",
    image: "URL_GAMBAR_PINKPOP",
    date: "2024-03-10",
    price: 7200000,
    description:
      "Join the Pinkpop Festival, one of the longest-running annual music festivals in the world, held in the Netherlands.",
  },
  {
    id: "rec15Concert",
    title: "Summer Sonic Festival",
    category: "concert trip",
    location: "Tokyo, Japan",
    image: "URL_GAMBAR_SUMMER_SONIC",
    date: "2024-03-20",
    price: 8900000,
    description:
      "Experience the Summer Sonic Festival in Tokyo, featuring a lineup of top Japanese and international artists.",
  },
  {
    id: "recGroupTrip4",
    title: "Cultural Journey in Jogjakarta",
    category: "group trip",
    location: "Jogjakarta",
    image: "URL_GAMBAR_JOGJAKARTA",
    date: "2023-09-30",
    price: 1800000,
    description:
      "Immerse yourself in the rich cultural heritage of Jogjakarta. Join our group trip to explore historic sites, traditional performances, and local art scenes.",
  },
  {
    id: "recGroupTrip5",
    title: "Trekking Adventure in Rinjani",
    category: "group trip",
    location: "Rinjani",
    image: "URL_GAMBAR_RINJANI",
    date: "2023-10-05",
    price: 2000000,
    description:
      "Calling all adventure seekers! Join us for a thrilling trekking adventure in Rinjani. Conquer the summit and enjoy the breathtaking views of the surrounding landscapes.",
  },
  {
    id: "recGroupTrip6",
    title: "Beach Retreat in Gili Islands",
    category: "group trip",
    location: "Gili Islands",
    image: "URL_GAMBAR_GILI_ISLANDS",
    date: "2023-10-10",
    price: 2200000,
    description:
      "Escape to the tropical paradise of Gili Islands with our group trip. Relax on white sandy beaches, snorkel in clear waters, and unwind in this idyllic setting.",
  },
  {
    id: "recGroupTrip7",
    title: "Nature Exploration in Borneo",
    category: "group trip",
    location: "Borneo",
    image: "URL_GAMBAR_BORNEO",
    date: "2023-10-15",
    price: 2300000,
    description:
      "Join our group trip to Borneo and explore the diverse wildlife and lush rainforests. Discover the beauty of nature and engage in eco-friendly activities.",
  },
  {
    id: "recGroupTrip8",
    title: "Cruise Adventure in Komodo",
    category: "group trip",
    location: "Komodo",
    image: "URL_GAMBAR_KOMODO",
    date: "2023-10-20",
    price: 2800000,
    description:
      "Embark on a cruise adventure to Komodo and witness the famous Komodo dragons. Enjoy island-hopping, snorkeling, and breathtaking landscapes.",
  },
  {
    id: "recGroupTrip9",
    title: "Culinary Delight in Bandung",
    category: "group trip",
    location: "Bandung",
    image: "URL_GAMBAR_BANDUNG",
    date: "2023-10-25",
    price: 1600000,
    description:
      "Join our group trip to Bandung and indulge in a culinary delight. Explore local markets, try diverse cuisines, and experience the vibrant food scene of the city.",
  },
  {
    id: "recGroupTrip10",
    title: "Cultural Immersion in Toraja",
    category: "group trip",
    location: "Toraja",
    image: "URL_GAMBAR_TORAJA",
    date: "2023-10-30",
    price: 2100000,
    description:
      "Immerse yourself in the unique culture of Toraja. Join our group trip to witness traditional ceremonies, explore historic sites, and experience the warmth of the locals.",
  },
];
