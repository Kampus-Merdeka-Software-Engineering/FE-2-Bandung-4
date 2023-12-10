document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;

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
        ).then(() => {
          nameInput.value = "";
          emailInput.value = "";
          phoneInput.value = "";
          messageInput.value = "";
        });
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
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "#645cff",
    });
  }
});
