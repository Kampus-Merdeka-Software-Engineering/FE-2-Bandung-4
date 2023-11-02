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
