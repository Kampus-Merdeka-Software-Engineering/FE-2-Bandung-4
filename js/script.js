// Ketika di-scroll, navbar muncul
// First check if the navbar element exists
const navbar = document.querySelector(".Navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
}

// Mengeluarkan menu ketika diklik
const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector("#menu");

if (navbarNav && menuButton) {
  menuButton.onclick = () => {
    navbarNav.classList.toggle("aktif");
  };

  // Jika klik diluar navbar dan menubar, maka akan kembali semula
  document.addEventListener("click", (e) => {
    const target = e.target;

    // Jika target bukan menu atau navbar menu
    if (!menuButton.contains(target) && !navbarNav.contains(target)) {
      // Hapus class aktif dari navbar menu
      navbarNav.classList.remove("aktif");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  try {
    const viewAllButton = document.getElementById("viewAll");
    const memoriesGrid = document.querySelector(".reasons");
    const memoriesCards = document.querySelectorAll(".reason");

    const itemsToShowInitially = 3;
    let showingAll = false;

    // Function to show or hide memories cards based on the button click
    function toggleMemories() {
      memoriesCards.forEach((card, index) => {
        if (showingAll || index < itemsToShowInitially) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // Toggle memories cards on page load
    toggleMemories();

    // Add event listener to the "View All" button
    viewAllButton.addEventListener("click", function (event) {
      event.preventDefault();
      showingAll = !showingAll;
      toggleMemories();
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

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
