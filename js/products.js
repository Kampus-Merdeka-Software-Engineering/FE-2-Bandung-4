const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "Bali Paradise Bench",
    company: "Pesona Indonesia",
    image: "https://example.com/images/bali.jpg",
    price: 1500000, // Harga dalam Rupiah
    description:
      "Experience the serenity of Bali with our Bali Paradise Bench. Crafted with traditional Balinese design, this bench brings a touch of the island of the gods to your home.",
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "Yogyakarta Heritage Table",
    company: "Pesona Indonesia",
    image: "https://example.com/images/yogyakarta.jpg",
    price: 7500000, // Harga dalam Rupiah
    description:
      "Immerse yourself in the rich cultural heritage of Yogyakarta with our Yogyakarta Heritage Table. Meticulously crafted with intricate details, this table is a tribute to the city of art and culture.",
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "Jakarta City Accent Chair",
    company: "Orang Trip",
    image: "https://example.com/images/jakarta.jpg",
    price: 3500000, // Harga dalam Rupiah
    description:
      "Bring the hustle and bustle of Jakarta into your space with our Jakarta City Accent Chair. Designed for urban living, this chair captures the energy of the capital city.",
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "Wooden Chair of Bogor",
    company: "Orang Trip",
    image: "https://example.com/images/bogor.jpg",
    price: 4500000, // Harga dalam Rupiah
    description:
      "Embrace nature with the Wooden Chair of Bogor. Inspired by the lush greenery of Bogor, this chair brings the tranquility of a botanical garden to your home.",
  },
  // Produk lainnya
  {
    id: "recz42agdsf8dsfgd",
    title: "Sunset Over Raja Ampat Canvas",
    company: "Pesona Indonesia",
    image: "https://example.com/images/rajaampat.jpg",
    price: 950000, // Harga dalam Rupiah
    description:
      "Capture the breathtaking beauty of Raja Ampat with our Sunset Over Raja Ampat Canvas. This canvas print showcases the vibrant colors of the sunset over the stunning archipelago.",
  },
  {
    id: "recvb345ydfklsdf",
    title: "Surfing Paradise Poster",
    company: "Orang Trip",
    image: "https://example.com/images/surfing.jpg",
    price: 550000, // Harga dalam Rupiah
    description:
      "Bring the excitement of surfing into your space with our Surfing Paradise Poster. This poster features a thrilling surfing scene, perfect for adventure enthusiasts.",
  },
  {
    id: "recasdgf67esdf78a",
    title: "Borobudur Temple Puzzle",
    company: "Pesona Indonesia",
    image: "https://example.com/images/borobudur.jpg",
    price: 1200000, // Harga dalam Rupiah
    description:
      "Discover the wonders of Borobudur with our Borobudur Temple Puzzle. This intricately designed puzzle allows you to recreate the beauty of the world-famous Buddhist temple.",
  },
  {
    id: "recqw56784dfbdfg",
    title: "Mount Bromo Photography Book",
    company: "Orang Trip",
    image: "https://example.com/images/bromo.jpg",
    price: 2400000, // Harga dalam Rupiah
    description:
      "Embark on a visual journey with our Mount Bromo Photography Book. Filled with stunning images, this book captures the mesmerizing landscapes of Mount Bromo and its surroundings.",
  },
  {
    id: "recpo453twsdse23",
    title: "Traditional Batik Pillow Covers",
    company: "Pesona Indonesia",
    image: "https://example.com/images/batikpillow.jpg",
    price: 350000, // Harga dalam Rupiah
    description:
      "Add a touch of Indonesian culture to your home with our Traditional Batik Pillow Covers. These pillow covers feature intricate batik patterns, showcasing the artistry of Indonesian craftsmanship.",
  },
  {
    id: "rechjfg675rgfw32",
    title: "Beach Hammock for Two",
    company: "Orang Trip",
    image: "https://example.com/images/hammock.jpg",
    price: 850000, // Harga dalam Rupiah
    description:
      "Relax and unwind by the beach with our Beach Hammock for Two. This spacious hammock is perfect for enjoying the sea breeze and the sound of the waves.",
  },
  {
    id: "reczxc234rtyjhgf",
    title: "Tanjung Puting Wildlife Poster",
    company: "Pesona Indonesia",
    image: "https://example.com/images/tanjungputing.jpg",
    price: 550000, // Harga dalam Rupiah
    description:
      "Celebrate the rich biodiversity of Tanjung Puting with our Wildlife Poster. Featuring iconic wildlife from the national park, this poster is a tribute to Indonesian flora and fauna.",
  },
  {
    id: "recbty89oiuyt3245",
    title: "Scuba Diving Adventure Gear",
    company: "Orang Trip",
    image: "https://example.com/images/scubagear.jpg",
    price: 1800000, // Harga dalam Rupiah
    description:
      "Gear up for an underwater adventure with our Scuba Diving Adventure Gear. This set includes high-quality scuba diving essentials, ensuring a safe and enjoyable diving experience.",
  },
  {
    id: "recnbv67uiojhgfa",
    title: "Traditional Balinese Dance Art Print",
    company: "Pesona Indonesia",
    image: "https://example.com/images/balinesedance.jpg",
    price: 650000, // Harga dalam Rupiah
    description:
      "Bring the grace and beauty of traditional Balinese dance into your space with our Art Print. This print captures the intricate movements and vibrant costumes of Balinese dancers.",
  },
  {
    id: "rec56ghbvcxwqas32",
    title: "Adventure Backpack with Solar Charger",
    company: "Orang Trip",
    image: "https://example.com/images/backpack.jpg",
    price: 1200000, // Harga dalam Rupiah
    description:
      "Embark on your adventures fully equipped with our Adventure Backpack. This backpack features a built-in solar charger, ensuring your devices stay powered during your travels.",
  },
  {
    id: "recqwe45dfgvxc23s",
    title: "Ratu Boko Palace Night Lamp",
    company: "Pesona Indonesia",
    image: "https://example.com/images/ratuboko.jpg",
    price: 480000, // Harga dalam Rupiah
    description:
      "Illuminate your space with the mystical charm of Ratu Boko Palace. Our Night Lamp, inspired by this ancient archaeological site, adds a touch of Indonesian history to your home.",
  },
  {
    id: "recvbnmi8uythjki7",
    title: "Culinary Journey Cookbook",
    company: "Orang Trip",
    image: "https://example.com/images/cookbook.jpg",
    price: 550000, // Harga dalam Rupiah
    description:
      "Embark on a culinary journey with our Cookbook. Filled with recipes inspired by various travel destinations, this cookbook brings the flavors of the world to your kitchen.",
  },
  {
    id: "recxvnmki87uybvcf",
    title: "Komodo Island Explorer Map",
    company: "Pesona Indonesia",
    image: "https://example.com/images/komodoisland.jpg",
    price: 320000, // Harga dalam Rupiah
    description:
      "Plan your adventure to Komodo Island with our Explorer Map. This detailed map provides information on key attractions and hidden gems, making your trip unforgettable.",
  },
  {
    id: "recfgbnmiuytrewq3",
    title: "Adventure Seeker Camping Tent",
    company: "Orang Trip",
    image: "https://example.com/images/campingtent.jpg",
    price: 750000, // Harga dalam Rupiah
    description:
      "Calling all adventure seekers! Our Camping Tent is designed for outdoor enthusiasts. Whether you're camping in the mountains or by the beach, this tent is your reliable companion.",
  },
  {
    id: "recghbnji8uythbvf",
    title: "Wayang Kulit Shadow Puppet Set",
    company: "Pesona Indonesia",
    image: "https://example.com/images/wayangkulit.jpg",
    price: 280000, // Harga dalam Rupiah
    description:
      "Introduce the traditional art of Wayang Kulit to your home with our Shadow Puppet Set. Handcrafted by skilled artisans, these shadow puppets bring cultural richness to any space.",
  },
  {
    id: "recvbnju89iytrrew",
    title: "Traveler's Essential Toiletry Kit",
    company: "Orang Trip",
    image: "https://example.com/images/toiletrykit.jpg",
    price: 220000, // Harga dalam Rupiah
    description:
      "Stay organized on your travels with our Traveler's Essential Toiletry Kit. Compact and functional, this kit is designed to make your journeys hassle-free.",
  },
];
