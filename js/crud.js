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

  // Menampilkan data yang baru ditambahkan
  const table = document.getElementById("dataTable");
  const newRow = table.insertRow(-1);
  const cellNama = newRow.insertCell(0);
  const cellMaskapai = newRow.insertCell(1);
  const cellTanggal = newRow.insertCell(2);
  const cellAsal = newRow.insertCell(3);
  const cellTujuan = newRow.insertCell(4);
  const cellKodeBooking = newRow.insertCell(5);

  cellNama.innerHTML = nama;
  cellMaskapai.innerHTML = maskapai;
  cellTanggal.innerHTML = tanggal;
  cellAsal.innerHTML = asal;
  cellTujuan.innerHTML = tujuan;
  cellKodeBooking.innerHTML = kodeBooking;

  // Mereset form
  document.getElementById("bookingForm").reset();
  document.getElementById("dataId").value = "";
}
