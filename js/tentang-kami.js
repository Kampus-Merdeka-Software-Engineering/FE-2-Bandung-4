document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
      showSweetAlert(
        "Error",
        "Silakan lengkapi semua kolom formulir!",
        "error"
      );
      return;
    }

    const formData = {
      name,
      email,
      phone,
      message,
    };

    // Kirim data ke backend
    fetch("https://be-2-bandung-4-production.up.railway.app/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Terjadi kesalahan saat mengirim formulir.");
        }
        return response.json();
      })
      .then((data) => {
        showSweetAlert(
          "Success",
          "Pesan Anda berhasil dikirim! TERBAIK",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error:", error.message);
        showSweetAlert(
          "Error",
          "Terjadi kesalahan saat mengirim Pesan. Silakan coba lagi nanti.",
          "error"
        );
      });
  });

  function showSweetAlert(title, text, icon) {
    // Menampilkan SweetAlert
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "#645cff",
    });
  }
});
