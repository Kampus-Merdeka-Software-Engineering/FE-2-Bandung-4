// Mengubah format harga menjadi rupiah
const formatRupiah = (price) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    price
  );

// Menduplikasi array products ke filteredProducts
let filteredProducts = [...products];

// Mengambil elemen DOM untuk menampilkan produk
const productsContainer = document.querySelector(".products-container");

// Fungsi untuk menampilkan produk di dalam DOM
const displayProducts = () => {
  // Menampilkan pesan jika tidak ada produk yang sesuai dengan pencarian
  if (!productsContainer || filteredProducts.length < 1) {
    if (productsContainer) {
      productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    }
    return;
  }

  // Mengisi kontainer produk dengan HTML hasil mapping dari filteredProducts
  if (productsContainer) {
    productsContainer.innerHTML = filteredProducts
      .map(
        ({ id, title, image, price }) => `<a href="detail.html?id=${id}">
      <article class="product" data-id="${id}">
        <img src="${image}" class="product-img img" alt="" />
        <footer>
          <h5 class="product-name">${title}</h5>
          <!-- Menampilkan harga dalam format rupiah -->
          <span class="product-price">${formatRupiah(price)}</span>
        </footer>
      </article></a>`
      )
      .join("");
  }
};

// Memanggil fungsi displayProducts untuk menampilkan produk awal
displayProducts();

// Event listener untuk input pencarian
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

if (form && searchInput) {
  form.addEventListener("keyup", () => {
    // Mendapatkan nilai input pencarian
    const inputValue = searchInput.value;
    // Memfilter produk berdasarkan judul sesuai dengan input pencarian
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );
    // Menampilkan produk yang sesuai dengan filter
    displayProducts();
  });
}

// Mengambil elemen DOM untuk menampilkan tombol perusahaan
const companiesDOM = document.querySelector(".companies");

// Fungsi untuk menampilkan tombol perusahaan di dalam DOM
const displayButtons = () => {
  // Mengambil daftar unik perusahaan dari produk
  const buttons = ["all", ...new Set(products.map(({ category }) => category))];
  // Menampilkan tombol perusahaan berdasarkan daftar unik
  if (companiesDOM) {
    companiesDOM.innerHTML = buttons
      .map(
        (category) =>
          `<button class='category-btn' data-id="${category}">${category}</button>`
      )
      .join("");
  }
};

// Memanggil fungsi displayButtons untuk menampilkan tombol perusahaan awal
displayButtons();

// Event listener untuk klik tombol perusahaan
if (companiesDOM) {
  companiesDOM.addEventListener("click", (e) => {
    const el = e.target;
    // Memfilter produk berdasarkan perusahaan sesuai dengan tombol yang diklik
    if (el && el.classList.contains("category-btn")) {
      filteredProducts =
        el.dataset.id === "all"
          ? [...products]
          : products.filter(({ category }) => category === el.dataset.id);
      // Mengosongkan nilai input pencarian
      if (searchInput) {
        searchInput.value = "";
      }
      // Menampilkan produk yang sesuai dengan filter
      displayProducts();
    }
  });
}

const cariTours = () => {
  const lokasiElement = document.getElementById("lokasi");
  const tujuanElement = document.getElementById("tujuan");
  const bulanElement = document.getElementById("bulan");

  if (lokasiElement && tujuanElement && bulanElement) {
    const lokasiValue = lokasiElement.value.toLowerCase();
    const tipeTripValue = tujuanElement.value.toLowerCase();
    const tanggalValue = bulanElement.value;

    // Mengambil bulan dari tanggal input
    const bulanValue = new Date(tanggalValue).getMonth() + 1;
  }
};

const urlParams = new URLSearchParams(window.location.search);
const lokasiParam = urlParams.get("lokasi");
const tipeTripParam = urlParams.get("tipeTrip");
const bulanParam = urlParams.get("bulan");

filteredProducts = products.filter(({ location, category, date }) => {
  const lokasiMatches = lokasiParam
    ? location.toLowerCase().includes(lokasiParam)
    : true;
  const tipeTripMatches = tipeTripParam
    ? category.toLowerCase().includes(tipeTripParam)
    : true;
  const bulanMatches = bulanParam
    ? new Date(date).getMonth() + 1 === parseInt(bulanParam)
    : true;

  return (lokasiMatches && tipeTripMatches) || bulanMatches;
});

displayProducts();

const cart = [];

window.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productDetailContainer = document.querySelector(".product-detail");

  if (productId && productDetailContainer) {
    const product = products.find(({ id }) => id === productId);

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

const addToCart = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    const productToAdd = products.find(({ id }) => id === productId);

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
};

const updateCartUI = () => {
  const cartDetailContainer = document.querySelector(".cart-detail");

  if (cartDetailContainer) {
    cartDetailContainer.innerHTML = "";

    cart.forEach(({ title, category, price }) => {
      const productItem = document.createElement("div");
      productItem.classList.add("cart-item");

      productItem.innerHTML = `
        <h4>${title}</h4>
        <p>${category}</p>
        <span>${price}</span>
      `;

      cartDetailContainer.appendChild(productItem);
    });
  }
};
