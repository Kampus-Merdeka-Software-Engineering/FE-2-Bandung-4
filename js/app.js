// Definisi URL API
const apiUrl = "https://be-2-bandung-4-production.up.railway.app";
// Array untuk menyimpan data produk yang akan ditampilkan
let tampilProducts = [];

// Fungsi asinkron untuk mendapatkan data produk dari API
const getProductsAsync = async () => {
  try {
    const response = await fetch(`${apiUrl}/product`);
    const data = await response.json();
    tampilProducts = [...data];
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Fungsi untuk menampilkan produk awal pada halaman / index.html
const displayAwal = async () => {
  // Mendapatkan elemen dengan kelas 'tours' (tempat produk ditampilkan)
  const productsTampil = document.querySelector(".tours");

  if (!productsTampil) {
    return;
  }

  // Mendapatkan data produk
  await getProductsAsync();

  // Menampilkan pesan jika tidak ada produk yang cocok
  if (tampilProducts.length < 1) {
    productsTampil.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  // Menampilkan enam produk pertama di index.html
  const sixProducts = tampilProducts.slice(0, 6);

  productsTampil.innerHTML = sixProducts
    .map(
      ({ id, title, imageURL, description }) => `
      <div class="tour">
        <div class="tour-image">
          <img src="${imageURL}" alt="${title}">
        </div>
        <div class="tour-content">
          <h3>${title}</h3>
          <p>${description}</p>
          <div class="containerss"><a href="detail.html?id=${id}" class="semua">Lihat Detail</a></div>
        </div>
      </div>`
    )
    .join("");
};
let allProducts = []; // Menyimpan semua produk
let filteredProducts = []; // Menyimpan produk setelah filtrasi

const productsContainer = document.querySelector(".products-container");
const companiesDOM = document.querySelector(".companies");

const formatRupiah = (price) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    price
  );

const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/product`);
    allProducts = await response.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
  }
};

const displayProducts = (products) => {
  if (!productsContainer) {
    return;
  }

  // Menghapus konten sebelumnya
  productsContainer.innerHTML = "";

  // Menambahkan produk ke dalam kontainer
  products.forEach(({ id, title, imageURL, price }) => {
    const productArticle = document.createElement("article");
    productArticle.classList.add("product");
    productArticle.setAttribute("data-id", id);

    productArticle.innerHTML = `
      <a href="detail.html?id=${id}">
        <img src="${imageURL}" class="product-img img" alt="" />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${formatRupiah(price)}</span>
        </footer>
      </a>
    `;

    productsContainer.appendChild(productArticle);
  });
};

const displayButtons = async () => {
  try {
    const response = await fetch(`${apiUrl}/category`);
    const categories = await response.json();

    // Membuat array tombol kategori termasuk "all"
    const buttons = [
      { id: "all", name: "All" },
      ...new Set(categories.map(({ id, name }) => ({ id, name }))),
    ];

    // Menampilkan tombol kategori pada elemen dengan kelas 'companies'
    if (companiesDOM) {
      companiesDOM.innerHTML = buttons
        .map(
          (category) =>
            `<button class='category-btn' data-id="${category.id}">${category.name}</button>`
        )
        .join("");
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // display awal
  await displayAwal();
  // Menampilkan tombol kategori
  await displayButtons();
  // Mendapatkan semua produk
  await fetchAllProducts();
  // Menampilkan semua produk
  displayProducts(allProducts);

  // Menambahkan event listener untuk setiap klik pada tombol kategori
  if (companiesDOM) {
    companiesDOM.addEventListener("click", async (e) => {
      const el = e.target;

      try {
        if (el && el.classList.contains("category-btn")) {
          let categoryId = el.dataset.id;

          // Jika kategori yang diklik adalah "all", tampilkan semua produk
          if (categoryId === "all") {
            displayProducts(allProducts);
          } else {
            // Jika kategori tertentu diklik, ambil produk sesuai kategori
            const response = await fetch(
              `${apiUrl}/category/${categoryId}/product`
            );
            filteredProducts = await response.json();
            displayProducts(filteredProducts);
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });
  }
});
// Filter products based on URL parameters
const urlParams = new URLSearchParams(window.location.search);
const lokasiParam = urlParams.get("lokasi");
const tipeTripParam = urlParams.get("tipeTrip");
const bulanParam = urlParams.get("bulan");

filteredProducts = tampilProducts.filter(({ location, category, date }) => {
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

window.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "https://be-2-bandung-4-production.up.railway.app";
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productDetailContainer = document.querySelector(".product-detail");
  if (productId && productDetailContainer) {
    try {
      const response = await fetch(`${apiUrl}/product/${productId}`);
      const product = await response.json();
      const formattedDate = new Date(product.date).toLocaleDateString();
      const stringifydProduct = JSON.stringify(product);
      if (product) {
        productDetailContainer.innerHTML = `
          <img src="${product.imageURL}" class="img" alt="${product.title}" />
          <div class="product-info">
            <h3>${product.title}</h3>
            <h5>${formattedDate}<h5>
            <span>${product.location}</span>
            <h5>${product.jumlahOrang} Orang</h5> 
            <span>${formatRupiah(product.price)}</span>
            <p>${product.description}</p>
            <button class="btn" id="addToCartButton">Add to Cart</button>
          </div>`;

        // Attach event listener using JavaScript
        document
          .getElementById("addToCartButton")
          .addEventListener("click", () => {
            showOrderForm(product);
          });
      } else {
        console.warn("Product not found.");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  } else {
    console.warn("No product ID found in the URL.");
  }
});

let cart = {};
function showOrderForm(product) {
  // Isi elemen formulir dengan informasi produk
  cart = product;
  document.getElementById("formProductTitle").textContent = product.title;
  document.getElementById("formProductDate").textContent = product.date;
  document.getElementById("formJumlahOrang").textContent = 1;

  // Tampilkan formulir pemesanan
  document.getElementById("orderFormOverlay").style.display = "block";
}

function hideOrderForm() {
  // Sembunyikan formulir pemesanan
  document.getElementById("orderFormOverlay").style.display = "none";
}

function submitOrderForm(event) {
  event.preventDefault();

  // Menggunakan parseInt untuk mengubah nilai jumlahOrang menjadi tipe data number
  const jumlahOrang = parseInt(
    document.getElementById("jumlahOrang").value,
    10
  );

  const teleponPelanggan = parseInt(
    document.getElementById("teleponPelanggan").value
  );

  const formData = new FormData(document.getElementById("formPemesanan"));
  const requestBody = {};

  formData.forEach((value, key) => {
    requestBody[key] = value;
  });

  // Menyimpan nilai jumlahOrang dan teleponPelanggan yang sudah diubah ke dalam requestBody
  requestBody.jumlahOrang = jumlahOrang;
  requestBody.teleponPelanggan = teleponPelanggan;
  requestBody.idProduk = cart.id;

  debugger;
  // Kirim data ke backend (ganti URL sesuai dengan backend Anda)
  fetch(`${apiUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);

      // Tampilkan SweetAlert sukses
      Swal.fire({
        icon: "success",
        title: "Pesanan Berhasil!",
        text: "Terima kasih atas pesanan Anda.",
        confirmButtonColor: "#645cff",
      });

      // Sembunyikan formulir pemesanan setelah sukses
      hideOrderForm();

      // Tambahkan logika atau tindakan lainnya setelah sukses terposting ke backend
    })
    .catch((error) => {
      console.error("Error:", error);

      // Tampilkan SweetAlert error
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Gagal melakukan pemesanan. Silakan coba lagi.",
        confirmButtonColor: "#645cff",
      });
    });
}
