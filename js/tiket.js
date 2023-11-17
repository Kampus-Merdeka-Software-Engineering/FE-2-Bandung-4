document.addEventListener("DOMContentLoaded", function () {
  const dataTiket = [
    {
      namaPesawat: "Garuda Indonesia",
      berangkat: "13.55 WIB",
      sampai: "17.30 WIT",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 2.408.220/orang",
      asal: "UPG (Sultan Hassanuddin)",
      imgSrc:
        "img/L’Indonésie _ l’huile de palme conditionnera les commandes d'avions _ Air Journal.jpg",
    },
    {
      namaPesawat: "Super Air Jet",
      berangkat: "06.45 WIB",
      sampai: "10.15 WIT",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 1.963.700/orang",
      asal: "UPG (Sultan Hassanuddin)",
      imgSrc: "img/Super Air Jet.jpg",
    },
    {
      namaPesawat: "Citilink",
      berangkat: "18.05 WIB",
      sampai: "21.30 WIT",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 1.964.056/orang",
      asal: "UPG (Sultan Hassanuddin)",
      imgSrc: "img/7ea16144-4c52-4ba4-abcd-d8150baeb085.jpg",
    },
    {
      namaPesawat: "Batik Air",
      berangkat: "00.30 WIB",
      sampai: "04.00 WIT",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 2.156.180/orang",
      asal: "UPG (Sultan Hassanuddin)",
      imgSrc: "img/Batik Air.jpg",
    },
    {
      namaPesawat: "Garuda Indonesia",
      berangkat: "15.00 WITA",
      sampai: "12.00 WIB",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 1.500.000/orang",
      asal: "DPS (Ngurah Rai)",
      imgSrc:
        "img/L’Indonésie _ l’huile de palme conditionnera les commandes d'avions _ Air Journal.jpg",
    },
    {
      namaPesawat: "Super Air Jet",
      berangkat: "14.30 WIA",
      sampai: "18.00 WIB",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 1.800.000/orang",
      asal: "DPS (Ngurah Rai)",
      imgSrc: "img/Super Air Jet.jpg",
    },
    // tolong nambahkan lagi
    {
      namaPesawat: "Citilink",
      berangkat: "08.30 WIB",
      sampai: "11.00 WIT",
      tujuan: "UPG (Sultan Hassanuddin)",
      harga: "Rp. 1.600.000/orang",
      asal: "DPS (Ngurah Rai)",
      imgSrc: "img/7ea16144-4c52-4ba4-abcd-d8150baeb085.jpg",
    },
    {
      namaPesawat: "Indonesia Air Asia",
      berangkat: "10.45 WIT",
      sampai: "14.15 WIB",
      tujuan: "CGK (Soekarno-Hatta)",
      harga: "Rp. 2.000.000/orang",
      asal: "UPG (Sultan Hassanuddin)",
      imgSrc: "img/The Best (And Worst) Flight Booking Resources For 2022_.jpg",
    },
    // ... (data Makassar lainnya) ...
    // Tambahkan 5 data berasal dari bandara Bali
    // ... (data Bali lainnya) ...
    {
      namaPesawat: "Batik Air",
      berangkat: "09.15 WIT",
      sampai: "12.30 WITA",
      tujuan: "DPS (Ngurah Rai)",
      harga: "Rp. 1.700.000/orang",
      asal: "UPG (Sultan Hassanuddin)",
      imgSrc: "img/Batik Air.jpg",
    },
    {
      namaPesawat: "Citilink",
      berangkat: "15.20 WIB",
      sampai: "18.45 WITA",
      tujuan: "DPS (Ngurah Rai)",
      harga: "Rp. 2.300.000/orang",
      asal: "CGK (Soekarno-Hatta)",
      imgSrc: "img/7ea16144-4c52-4ba4-abcd-d8150baeb085.jpg",
    },
    // ... (data Bali lainnya) ...
  ];

  // Tampilkan data tiket ke dalam HTML
  const tiketContainer = document.getElementById("tiketContainer");

  dataTiket.forEach((tiket) => {
    // Element tiket
    const tiketElement = document.createElement("div");
    tiketElement.classList.add("tiket");

    // Isi tiket
    tiketElement.innerHTML = `
  <div class="style">
  <h1 class="judul">Tiket Penerbangan</h1>
  <hr>
  <div class="detail-tiket">
      <p class="nama-pesawat">${tiket.namaPesawat}</p>
      <p class="asal">Asal: ${tiket.asal}</p>
      <p class="waktu">Berangkat: ${tiket.berangkat}</p>
      <p class="waktu">Sampai: ${tiket.sampai}</p>
      <p class="tujuan">Tujuan: ${tiket.tujuan}</p>
      <p class="harga">Harga: ${tiket.harga}</p>
  </div>
  <img src="${tiket.imgSrc}" alt="${tiket.namaPesawat}">
  <a href="pesan-tiket.html" class="tombol-pesan">Pesan Tiket</a>
  </div>
      `;

    tiketContainer.appendChild(tiketElement);
  });
});
