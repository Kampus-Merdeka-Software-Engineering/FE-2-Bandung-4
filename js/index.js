// ketika di scroll navbarnya muncul
const navbar = document.querySelector(".Navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// mengeluarkan menu ketika di klik
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};

// jika klik diluar navbar dan menubar, maka akan kembali semula
const klik = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  const target = e.target;

  // Jika target bukan menu atau navbar menu
  if (!klik.contains(target) && !navbarNav.contains(target)) {
    // Hapus class aktif dari navbar menu
    navbarNav.classList.remove("aktif");
  }
});

// Menggunakan const dan let untuk deklarasi variabel
function cariTiket() {
  // Dapatkan nilai dari input form
  const asal = document.getElementById("asal").value;
  const tujuan = document.getElementById("tujuan").value;
  const tanggal = document.getElementById("tanggal").value;
  const maskapai = document.getElementById("Maskapai").value;

  // Lakukan validasi
  if (!asal || !tujuan || !tanggal || !maskapai) {
    alert("Semua kolom harus diisi!");
    return;
  }

  // Lakukan logika pencarian (Anda bisa memodifikasi ini sesuai kebutuhan)
  const hasilPencarian = cariTiketDariServer(asal, tujuan, tanggal, maskapai);

  // Tampilkan hasil pencarian di elemen hasilPencarian
  tampilkanHasilPencarian(hasilPencarian);
}

// Menggunakan arrow function
function cariTiketDariServer(asal, tujuan, tanggal, maskapai) {
  const hasilPencarian = [
    { maskapai: "Garuda", harga: 1000000, waktu: "08:00" },
    { maskapai: "Lion Air", harga: 800000, waktu: "10:00" },
  ];

  return hasilPencarian;
}

// Menggunakan template literals dan forEach
function tampilkanHasilPencarian(hasilPencarian) {
  const hasilPencarianElem = document.getElementById("hasilPencarian");
  hasilPencarianElem.innerHTML = ""; // Bersihkan hasil pencarian sebelumnya

  // Tambahkan hasil pencarian ke elemen
  const ul = document.createElement("ul");
  hasilPencarian.forEach((tiket) => {
    const li = document.createElement("li");
    li.textContent = `${tiket.maskapai} - Harga: ${tiket.harga} - Waktu: ${tiket.waktu}`;
    ul.appendChild(li);
  });

  hasilPencarianElem.appendChild(ul);
}
