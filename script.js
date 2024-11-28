// Fungsi untuk menghitung total harga
function hitungTotal() {
  // Ambil nilai dari setiap input jumlah
  const jumlahTempe = parseInt(document.getElementById('jumlah-tempe').value) || 0;
  const jumlahTahu = parseInt(document.getElementById('jumlah-tahu').value) || 0;
  const jumlahBakwan = parseInt(document.getElementById('jumlah-bakwan').value) || 0;
  const jumlahSate = parseInt(document.getElementById('jumlah-sate').value) || 0;

  // Harga satuan
  const hargaTempe = 7000;
  const hargaTahu = 5000;
  const hargaBakwan = 6000;
  const hargaSate = 10000;

  // Hitung total harga
  const totalHarga =
    jumlahTempe * hargaTempe +
    jumlahTahu * hargaTahu +
    jumlahBakwan * hargaBakwan +
    jumlahSate * hargaSate;

  // Tampilkan total harga pada elemen dengan id "total"
  document.getElementById('total').textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
}

// Event listener untuk tombol submit
document.getElementById('submit-button').addEventListener('click', function () {
  hitungTotal(); // Panggil fungsi hitung total saat tombol ditekan
  alert('Total harga berhasil dihitung!'); // Tampilkan alert sebagai konfirmasi
});
