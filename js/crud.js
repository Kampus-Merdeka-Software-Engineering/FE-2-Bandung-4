function submitForm() {
  const nama = document.getElementById("nama").value;
  const maskapai = document.getElementById("maskapai").value;
  const tanggal = document.getElementById("tanggal").value;
  const asal = document.getElementById("asal").value;
  const tujuan = document.getElementById("tujuan").value;

  // Memeriksa apakah ada input yang kosong
  if (!nama || !maskapai || !tanggal || !asal || !tujuan) {
    alert("Semua kolom harus diisi!");
    return;
  }

  const kodeBooking = generateKodeBooking();

  // Memeriksa apakah ini operasi Create atau Update
  const dataId = document.getElementById("dataId").value;
  if (dataId === "") {
    // Create
    const newData = {
      nama,
      maskapai,
      tanggal,
      asal,
      tujuan,
      kodeBooking,
    };

    data.push(newData);
  } else {
    // Update
    data[dataId].nama = nama;
    data[dataId].maskapai = maskapai;
    data[dataId].tanggal = tanggal;
    data[dataId].asal = asal;
    data[dataId].tujuan = tujuan;
  }

  // Memperbarui tabel
  renderTable();

  // Mereset form
  document.getElementById("bookingForm").reset();
  document.getElementById("dataId").value = "";
}
