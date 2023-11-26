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

// Menduplikasi array products ke filteredProducts
let filteredProducts = [...products];

// Mengambil elemen DOM untuk menampilkan produk
const productsContainer = document.querySelector(".tours");

// Fungsi untuk menampilkan produk di dalam DOM
const displayProducts = () => {
  // Menampilkan pesan jika tidak ada produk yang sesuai dengan pencarian
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  // Ambil 6 produk pertama dari array
  const sixProducts = filteredProducts.slice(0, 6);

  // Mengisi kontainer produk dengan HTML hasil mapping dari sixProducts
  productsContainer.innerHTML = sixProducts
    .map((product) => {
      const { id, title, image, description } = product;
      return `<div class="tour">
                <div class="tour-image">
                  <img src="${image}" alt="${title}">
                </div>
                <div class="tour-content">
                  <h3>${title}</h3>
                  <p>${description}</p>
                  <a href="detail.html?id=${id}">Lihat Detail</a>
                </div>
              </div>`;
    })
    .join("");
};

// Panggil fungsi untuk menampilkan produk saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayProducts);
