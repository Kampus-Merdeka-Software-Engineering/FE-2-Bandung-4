const apiUrl = "http://localhost:3000";
let tampilProducts = [];

const getProductsAsync = async () => {
  try {
    const response = await fetch(`${apiUrl}/product`);
    const data = await response.json();
    tampilProducts = [...data];
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const displayProduct = async () => {
  const productsTampil = document.querySelector(".tours");

  if (!productsTampil) {
    return;
  }

  await getProductsAsync();

  if (tampilProducts.length < 1) {
    productsTampil.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

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
          <a href="detail.html?id=${id}">Lihat Detail</a>
        </div>
      </div>`
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", displayProduct);

const formatRupiah = (price) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    price
  );

let filteredProducts = [...tampilProducts];
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (!productsContainer) {
    console.error("Products container not found.");
    return;
  }

  // Menampilkan pesan jika tidak ada produk yang cocok
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  // Menghapus konten sebelumnya
  productsContainer.innerHTML = "";

  // Menambahkan produk ke dalam kontainer
  filteredProducts.forEach(({ id, title, imageURL, price }) => {
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

const companiesDOM = document.querySelector(".companies");

const displayButtons = async () => {
  try {
    const response = await fetch(`${apiUrl}/category`);
    const categories = await response.json();

    const buttons = ["all", ...new Set(categories.map(({ name }) => name))];

    if (companiesDOM) {
      companiesDOM.innerHTML = buttons
        .map(
          (category) =>
            `<button class='category-btn' data-id="${category}">${category}</button>`
        )
        .join("");
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

displayButtons();

if (companiesDOM) {
  companiesDOM.addEventListener("click", async (e) => {
    const el = e.target;

    if (el && el.classList.contains("category-btn")) {
      try {
        let url = `${apiUrl}/product`;

        if (el.dataset.id !== "all") {
          url += `?category=${el.dataset.id}`;
        }

        const response = await fetch(url);
        filteredProducts = await response.json();

        // Memanggil fungsi displayProducts setelah mengubah filteredProducts
        displayProducts();
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    }
  });
}

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

const cart = [];

window.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "http://localhost:3000"; // Sesuaikan dengan URL API Anda
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productDetailContainer = document.querySelector(".product-detail");

  if (productId && productDetailContainer) {
    try {
      const response = await fetch(`${apiUrl}/product/${productId}`);
      const product = await response.json();

      if (product) {
        productDetailContainer.innerHTML = `
          <img src="${product.imageURL}" class="img" alt="${product.title}" />
          <div class="product-info">
            <h3>${product.title}</h3>
            <h5>${product.category.name}</h5>
            <span>${product.price}</span>
            <p>${product.description}</p>
            <button class="btn" onclick="addToCart()">Add to Cart</button>
          </div>`;
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

// Function to open the user information modal
const openUserInfoModal = () => {
  const modal = document.getElementById("userInfoModal");
  const closeBtn = document.querySelector(".close");
  const userInfoForm = document.getElementById("userInfoForm");
  const title = document.querySelector(".product-info h3");
  const price = document.querySelector(".product-info span");

  console.log(title.innerHTML, price.innerHTML);

  const titleField = modal.querySelector(".title-value");
  titleField.innerHTML = title.innerHTML;

  const priceField = modal.querySelector(".title-value");
  priceField.innerHTML = price.innerHTML;

  if (modal && closeBtn && userInfoForm) {
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close the modal when the user clicks outside the modal
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Handle form submission
    userInfoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Get user information
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      // Validate and process user information as needed

      // Close the modal
      modal.style.display = "none";

      // Perform any additional actions, e.g., update the cart with user information
      updateCartUI(name, email);
    });
  }
};

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
