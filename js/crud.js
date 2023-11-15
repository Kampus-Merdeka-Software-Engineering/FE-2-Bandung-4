// Fungsi untuk membuat pesan konfirmasi
function showConfirmation(pesan) {
    var result = confirm(pesan);
    return result;
  }
  
  // Fungsi untuk menyimpan data
  function saveData() {
    // Validasi data
    if (document.getElementById("kode_pesawat").value == "") {
      alert("Kode pesawat harus diisi!");
      return;
    }
  
    if (document.getElementById("asal").value == "") {
      alert("Asal harus diisi!");
      return;
    }
  
    if (document.getElementById("tujuan").value == "") {
      alert("Tujuan harus diisi!");
      return;
    }
  
    if (document.getElementById("tanggal_berangkat").value == "") {
      alert("Tanggal berangkat harus diisi!");
      return; 
  }}