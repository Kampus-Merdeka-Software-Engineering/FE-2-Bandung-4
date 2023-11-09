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
