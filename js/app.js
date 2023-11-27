// Mengubah format harga menjadi rupiah
const formatRupiah = (price) => {
  // Menggunakan Intl.NumberFormat untuk mengonversi harga ke format rupiah
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  return formattedPrice;
};

// Menduplikasi array products ke filteredProducts
let filteredProducts = [...products];

// Mengambil elemen DOM untuk menampilkan produk
const productsContainer = document.querySelector(".products-container");

// Fungsi untuk menampilkan produk di dalam DOM
const displayProducts = () => {
  // Menampilkan pesan jika tidak ada produk yang sesuai dengan pencarian
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  // Mengisi kontainer produk dengan HTML hasil mapping dari filteredProducts
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<a href="detail.html?id=${id}">
      <article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <!-- Menampilkan harga dalam format rupiah -->
            <span class="product-price">${formatRupiah(price)}</span>
          </footer>
        </article></a>`;
    })
    .join("");
};

// Memanggil fungsi displayProducts untuk menampilkan produk awal
displayProducts();

// Event listener untuk input pencarian
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  // Mendapatkan nilai input pencarian
  const inputValue = searchInput.value;
  // Memfilter produk berdasarkan judul sesuai dengan input pencarian
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  // Menampilkan produk yang sesuai dengan filter
  displayProducts();
});

// Mengambil elemen DOM untuk menampilkan tombol perusahaan
const companiesDOM = document.querySelector(".companies");

// Fungsi untuk menampilkan tombol perusahaan di dalam DOM
const displayButtons = () => {
  // Mengambil daftar unik perusahaan dari produk
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  // Menampilkan tombol perusahaan berdasarkan daftar unik
  companiesDOM.innerHTML = buttons
    .map((category) => {
      return `<button class='category-btn' data-id="${category}">${category}</button>`;
    })
    .join("");
};

// Memanggil fungsi displayButtons untuk menampilkan tombol perusahaan awal
displayButtons();

// Event listener untuk klik tombol perusahaan
companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  // Memfilter produk berdasarkan perusahaan sesuai dengan tombol yang diklik
  if (el.classList.contains("category-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.category === el.dataset.id;
      });
    }
    // Mengosongkan nilai input pencarian
    searchInput.value = "";
    // Menampilkan produk yang sesuai dengan filter
    displayProducts();
  }
});

// ...

function cariTours() {
  const lokasiValue = document.getElementById("lokasi").value.toLowerCase();
  const tipeTripValue = document.getElementById("tujuan").value.toLowerCase();
  const tanggalValue = document.getElementById("bulan").value;

  // Mengambil bulan dari tanggal input
  const bulanValue = new Date(tanggalValue).getMonth() + 1;
}

const urlParams = new URLSearchParams(window.location.search);
const lokasiParam = urlParams.get("lokasi");
const tipeTripParam = urlParams.get("tipeTrip");
const bulanParam = urlParams.get("bulan");

filteredProducts = products.filter((product) => {
  const lokasiMatches = lokasiParam
    ? product.location.toLowerCase().includes(lokasiParam)
    : true; // Tampilkan jika lokasiParam tidak ada atau null

  const tipeTripMatches = tipeTripParam
    ? product.category.toLowerCase().includes(tipeTripParam)
    : true; // Tampilkan jika tipeTripParam tidak ada atau null

  // Membandingkan bulan dari tanggal produk dengan bulan yang diambil dari parameter
  const bulanMatches = bulanParam
    ? new Date(product.date).getMonth() + 1 === parseInt(bulanParam)
    : true; // Tampilkan jika bulanParam tidak ada atau null

  return lokasiMatches || (tipeTripMatches && bulanMatches);
});

displayProducts();

const cart = [];
window.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productDetailContainer = document.querySelector(".product-detail");

  if (productId) {
    const product = products.find((product) => product.id === productId);

    if (product) {
      productDetailContainer.innerHTML = `
        <img src="${product.image}" class="img" alt="${product.title}" />
        <div class="product-info">
          <h3>${product.title}</h3>
          <h5>${product.category}</h5>
          <span>${product.price}</span>
          <p>${product.description}</p><button class="btn" onclick="addToCart()">Add to Cart</button>
        </div>`;
    } else {
      console.warn("Product not found.");
    }
  } else {
    console.warn("No product ID found in the URL.");
  }
});

function addToCart() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      cart.push(productToAdd);
      console.log("Product added to cart:", productToAdd);
      updateCartUI();
    } else {
      console.warn("Product not found.");
    }
  } else {
    console.warn("No product ID found in the URL.");
  }
}

function updateCartUI() {
  const cartDetailContainer = document.querySelector(".cart-detail");

  cartDetailContainer.innerHTML = "";

  cart.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("cart-item");

    productItem.innerHTML = `
      <h4>${product.title}</h4>
      <p>${product.category}</p>
      <span>${product.price}</span>
    `;

    cartDetailContainer.appendChild(productItem);
  });
}
