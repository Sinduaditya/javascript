//==== SET TIME OUT FUNCTION =====
/*JavaScript merupakan bahasa pemrograman yang menerapkan pola event-driven, baik pada environment Node.js maupun browser. Seluruh proses yang berjalan dipicu oleh sebuah event atau kejadian, contohnya DOMContentLoaded dalam browser atau process exit pada Node.js. Dengan pola event-driven itu, artinya kode yang ditulis dengan JavaScript tidak harus dijalankan secara berurutan, tetapi kode dapat dijalankan berdasarkan event atau bahkan dijadwalkan.

Ada satu fungsi dalam JavaScript yang digunakan untuk menjadwalkan pemanggilan sebuah kode sekaligus membuatnya berjalan secara asynchronous, yakni setTimeout(). Fungsi tersebut menerima dua argumen dengan penjelasan berikut.

Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.
Inilah contoh dari penggunaan fungsi setTimeout().*/
// # CONTOH 01

console.log("Selamat Datang !");

// dengan menggunakan set time out kita akan mendelay proses syconus dalam hal ini proses ini sudah berubah menjadi asycronus
setTimeout(() => {
    console.log("Terimakasih Sudah Mampir Silahkan Datag Kembali!");
    //  dengan set interval 3 detik / 3000
}, 3000);

console.log("Ada Yang Bisa kami bantu ?");