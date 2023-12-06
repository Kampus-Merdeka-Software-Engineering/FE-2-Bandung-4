// // Fungsi untuk menampilkan form pemesanan
// function showOrderForm() {
//   const overlay = document.querySelector(".overlay");
//   const orderForm = document.getElementById("userInfoForm");

//   overlay.style.display = "flex";
//   orderForm.style.display = "block";
// }

// // Fungsi untuk menyembunyikan form pemesanan
// function hideOrderForm() {
//   const overlay = document.querySelector(".overlay");
//   const orderForm = document.getElementById("userInfoForm");

//   overlay.style.display = "none";
//   orderForm.style.display = "none";
// }
// // Fungsi untuk menangani pengiriman formulir
// function submitOrderForm(event) {
//   event.preventDefault(); // Mencegah formulir dikirim

//   // Di sini, Anda dapat menambahkan logika pengiriman formulir atau panggil fungsi lain yang diperlukan

//   // Menampilkan pesan sukses di dalam elemen dengan ID "pesanSukses"
//   const pesanSuksesElem = document.getElementById("pesanSukses");
//   if (pesanSuksesElem) {
//     pesanSuksesElem.textContent =
//       "Pesanan Berhasil! Terima kasih atas pesanan Anda.";
//   }

//   // Opsional: Anda juga dapat menambahkan logika untuk menutup formulir atau melakukan tindakan lain
//   hideOrderForm();
// }

// // Tambahkan event listener ke formulir untuk menangani pengiriman
// document
//   .getElementById("formPemesanan")
//   .addEventListener("submit", submitOrderForm);

// Tambahkan event listener ke elemen "X" pada formulir untuk menyembunyikan formulir saat diklik
document.querySelector(".popup-close").addEventListener("click", hideOrderForm);

// Tambahkan event listener ke overlay untuk menyembunyikan formulir saat overlay diklik
document.querySelector(".overlay").addEventListener("click", function (event) {
  if (event.target === this) {
    hideOrderForm();
  }
});
// Fungsi untuk menambah jumlah orang
function tambahJumlah() {
  const jumlahOrangInput = document.getElementById("jumlahOrang");
  jumlahOrangInput.value = parseInt(jumlahOrangInput.value) + 1;
}

// Fungsi untuk mengurangi jumlah orang
function kurangiJumlah() {
  const jumlahOrangInput = document.getElementById("jumlahOrang");
  const currentValue = parseInt(jumlahOrangInput.value);
  if (currentValue > 1) {
    jumlahOrangInput.value = currentValue - 1;
  }
}

// // ===============
// // Data
// // ===============
// let tampilProducts = [];

// const getProductsAsync = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       tampilProducts = [...products];
//       resolve();
//     }, 1000);
//   });
// };

// const displayProduct = async () => {
//   const productsTampil = document.querySelector(".tours");

//   if (!productsTampil) {
//     return;
//   }

//   await getProductsAsync();

//   if (tampilProducts.length < 1) {
//     productsTampil.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
//     return;
//   }

//   const sixProducts = tampilProducts.slice(0, 6);

//   productsTampil.innerHTML = sixProducts
//     .map(
//       ({ id, title, image, description }) => `
//       <div class="tour">
//         <div class="tour-image">
//           <img src="${image}" alt="${title}">
//         </div>
//         <div class="tour-content">
//           <h3>${title}</h3>
//           <p>${description}</p>
//           <a href="detail.html?id=${id}">Lihat Detail</a>
//         </div>
//       </div>`
//     )
//     .join("");
// };

// document.addEventListener("DOMContentLoaded", displayProduct);

// const formatRupiah = (price) =>
//   new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
//     price
//   );

// let filteredProducts = [...products];
// const productsContainer = document.querySelector(".products-container");

// const displayProducts = () => {
//   if (!productsContainer || filteredProducts.length < 1) {
//     if (productsContainer) {
//       productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
//     }
//     return;
//   }

//   if (productsContainer) {
//     productsContainer.innerHTML = filteredProducts
//       .map(
//         ({ id, title, image, price }) => `<a href="detail.html?id=${id}">
//       <article class="product" data-id="${id}">
//         <img src="${image}" class="product-img img" alt="" />
//         <footer>
//           <h5 class="product-name">${title}</h5>
//           <span class="product-price">${formatRupiah(price)}</span>
//         </footer>
//       </article></a>`
//       )
//       .join("");
//   }
// };

// displayProducts();

// const form = document.querySelector(".input-form");
// const searchInput = document.querySelector(".search-input");

// if (form && searchInput) {
//   form.addEventListener("keyup", () => {
//     const inputValue = searchInput.value;
//     filteredProducts = products.filter((product) =>
//       product.title.toLowerCase().includes(inputValue)
//     );
//     displayProducts();
//   });
// }

// const companiesDOM = document.querySelector(".companies");

// const displayButtons = () => {
//   const buttons = ["all", ...new Set(products.map(({ category }) => category))];

//   if (companiesDOM) {
//     companiesDOM.innerHTML = buttons
//       .map(
//         (category) =>
//           `<button class='category-btn' data-id="${category}">${category}</button>`
//       )
//       .join("");
//   }
// };

// displayButtons();

// if (companiesDOM) {
//   companiesDOM.addEventListener("click", (e) => {
//     const el = e.target;

//     if (el && el.classList.contains("category-btn")) {
//       filteredProducts =
//         el.dataset.id === "all"
//           ? [...products]
//           : products.filter(({ category }) => category === el.dataset.id);

//       if (searchInput) {
//         searchInput.value = "";
//       }

//       displayProducts();
//     }
//   });
// }

// const cariTours = () => {
//   const lokasiElement = document.getElementById("lokasi");
//   const tujuanElement = document.getElementById("tujuan");
//   const bulanElement = document.getElementById("bulan");

//   if (lokasiElement && tujuanElement && bulanElement) {
//     const lokasiValue = lokasiElement.value.toLowerCase();
//     const tipeTripValue = tujuanElement.value.toLowerCase();
//     const tanggalValue = bulanElement.value;

//     const bulanValue = new Date(tanggalValue).getMonth() + 1;
//   }
// };

// const urlParams = new URLSearchParams(window.location.search);
// const lokasiParam = urlParams.get("lokasi");
// const tipeTripParam = urlParams.get("tipeTrip");
// const bulanParam = urlParams.get("bulan");

// filteredProducts = products.filter(({ location, category, date }) => {
//   const lokasiMatches = lokasiParam
//     ? location.toLowerCase().includes(lokasiParam)
//     : true;
//   const tipeTripMatches = tipeTripParam
//     ? category.toLowerCase().includes(tipeTripParam)
//     : true;
//   const bulanMatches = bulanParam
//     ? new Date(date).getMonth() + 1 === parseInt(bulanParam)
//     : true;

//   return (lokasiMatches && tipeTripMatches) || bulanMatches;
// });

// displayProducts();

// const cart = [];

// window.addEventListener("DOMContentLoaded", async () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const productId = urlParams.get("id");
//   const productDetailContainer = document.querySelector(".product-detail");

//   if (productId && productDetailContainer) {
//     const product = products.find(({ id }) => id === productId);

//     if (product) {
//       productDetailContainer.innerHTML = `
//         <img src="${product.image}" class="img" alt="${product.title}" />
//         <div class="product-info">
//           <h3>${product.title}</h3>
//           <h5>${product.category}</h5>
//           <span>${product.price}</span>
//           <p>${product.description}</p><button class="btn" onclick="addToCart()">Add to Cart</button>
//         </div>`;
//     } else {
//       console.warn("Product not found.");
//     }
//   } else {
//     console.warn("No product ID found in the URL.");
//   }
// });

// // Function to open the user information modal
// const openUserInfoModal = () => {
//   const modal = document.getElementById("userInfoModal");
//   const closeBtn = document.querySelector(".close");
//   const userInfoForm = document.getElementById("userInfoForm");
//   const title = document.querySelector(".product-info h3");
//   const price = document.querySelector(".product-info span");

//   console.log(title.innerHTML, price.innerHTML);

//   const titleField = modal.querySelector(".title-value");
//   titleField.innerHTML = title.innerHTML;

//   const priceField = modal.querySelector(".title-value");
//   priceField.innerHTML = price.innerHTML;

//   if (modal && closeBtn && userInfoForm) {
//     modal.style.display = "block";

//     // Close the modal when the close button is clicked
//     closeBtn.addEventListener("click", () => {
//       modal.style.display = "none";
//     });

//     // Close the modal when the user clicks outside the modal
//     window.addEventListener("click", (event) => {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });

//     // Handle form submission
//     userInfoForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       // Get user information
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;

//       // Validate and process user information as needed

//       // Close the modal
//       modal.style.display = "none";

//       // Perform any additional actions, e.g., update the cart with user information
//       updateCartUI(name, email);
//     });
//   }
// };

// // Function to update the cart UI with user information
// const updateCartUI = (name, email) => {
//   const cartDetailContainer = document.querySelector(".cart-detail");

//   if (cartDetailContainer) {
//     cartDetailContainer.innerHTML = `
//       <h3>Shopping Cart</h3>
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//     `;
//   }
// };

// // Event listener for the "Add to Cart" button
// const addToCart = () => {
//   // Open the user information modal
//   openUserInfoModal();
// };

// // ===============
// // Page
// // ===============
// // Ketika di-scroll, navbar muncul
// // First check if the navbar element exists
// const navbar = document.querySelector(".Navbar");

// if (navbar) {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > navbar.offsetHeight) {
//       navbar.classList.add("fixed");
//     } else {
//       navbar.classList.remove("fixed");
//     }
//   });
// }

// // Mengeluarkan menu ketika diklik
// const navbarNav = document.querySelector(".navbar-nav");
// const menuButton = document.querySelector("#menu");

// if (navbarNav && menuButton) {
//   menuButton.onclick = () => {
//     navbarNav.classList.toggle("aktif");
//   };

//   // Jika klik diluar navbar dan menubar, maka akan kembali semula
//   document.addEventListener("click", (e) => {
//     const target = e.target;

//     // Jika target bukan menu atau navbar menu
//     if (!menuButton.contains(target) && !navbarNav.contains(target)) {
//       // Hapus class aktif dari navbar menu
//       navbarNav.classList.remove("aktif");
//     }
//   });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   try {
//     const viewAllButton = document.getElementById("viewAll");
//     const memoriesGrid = document.querySelector(".reasons");
//     const memoriesCards = document.querySelectorAll(".reason");

//     const itemsToShowInitially = 3;
//     let showingAll = false;

//     // Function to show or hide memories cards based on the button click
//     function toggleMemories() {
//       memoriesCards.forEach((card, index) => {
//         if (showingAll || index < itemsToShowInitially) {
//           card.style.display = "block";
//         } else {
//           card.style.display = "none";
//         }
//       });
//     }

//     // Toggle memories cards on page load
//     toggleMemories();

//     // Add event listener to the "View All" button
//     viewAllButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       showingAll = !showingAll;
//       toggleMemories();
//     });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// });

// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");
// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });
