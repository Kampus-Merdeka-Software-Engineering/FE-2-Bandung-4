$(".btn-counter").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    count = $this.attr("data-count"),
    active = $this.hasClass("active"),
    multiple = $this.hasClass("multiple-count");

  // Menggunakan operator ternary untuk menyesuaikan nilai count
  count = !active || multiple ? ++count : --count;

  // Memperbarui nilai data-count pada elemen
  $this.attr("data-count", count);

  // Menggunakan toggleClass untuk menambah atau menghapus kelas 'active'
  $this.toggleClass("active", count > 0);
});
