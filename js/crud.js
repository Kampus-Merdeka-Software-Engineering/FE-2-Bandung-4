var data = []; // Array untuk menyimpan data pemesanan

function submitForm() {
  var nama = document.getElementById("nama").value;
  var maskapai = document.getElementById("maskapai").value;
  var tanggal = document.getElementById("tanggal").value;
  var asal = document.getElementById("asal").value;
  var tujuan = document.getElementById("tujuan").value;

  var kodeBooking = generateKodeBooking();

  // Memeriksa apakah ini operasi Create atau Update
  var dataId = document.getElementById("dataId").value;
  if (dataId === "") {
    // Create
    var newData = {
      nama: nama,
      maskapai: maskapai,
      tanggal: tanggal,
      asal: asal,
      tujuan: tujuan,
      kodeBooking: kodeBooking,
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

function generateKodeBooking() {
  var timestamp = new Date().getTime();
  return "BK" + timestamp;
}

function renderTable() {
  var tableBody = document.getElementById("data-body");
  tableBody.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = tableBody.insertRow(i);
    row.insertCell(0).innerHTML = data[i].nama;
    row.insertCell(1).innerHTML = data[i].maskapai;
    row.insertCell(2).innerHTML = data[i].tanggal;
    row.insertCell(3).innerHTML = data[i].asal;
    row.insertCell(4).innerHTML = data[i].tujuan;
    row.insertCell(5).innerHTML = data[i].kodeBooking;

    // Tombol Edit dan Delete
    var cell = row.insertCell(6);
    cell.innerHTML =
      "<button onclick='editData(" +
      i +
      ")'>Edit</button> <button onclick='deleteData(" +
      i +
      ")'>Delete</button>";
  }
}

function editData(index) {
  // Mengisi form dengan data yang akan diubah
  document.getElementById("nama").value = data[index].nama;
  document.getElementById("maskapai").value = data[index].maskapai;
  document.getElementById("tanggal").value = data[index].tanggal;
  document.getElementById("asal").value = data[index].asal;
  document.getElementById("tujuan").value = data[index].tujuan;
  document.getElementById("dataId").value = index;
}

function deleteData(index) {
  // Menghapus data dari array
  data.splice(index, 1);

  // Memperbarui tabel
  renderTable();
}
