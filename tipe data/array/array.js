let myArray = ["Susu", 42.5, 22, true, "Programming"];
// console.log(myArray);
//Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.
// Array dimulai dari 0

// console.log(myArray[1]);
//Maka yang akan di akses adalah nilai(42.5)

// Tag push digunakan untuk menambahkan data array
// myArray.push('Javascript');

// myArray.pop();
// Sedangkan untuk mengeluarkan data atau element tereakhir dari array kita bisa menggunakan metode pop()
// jika di jalankan maka data Programing akan menghilang atau di keluarkan dari data variable myArray

// console.log("Panjang array ku =" + myArray.length + ".")
// yag length di gunakan untuk mengcek panbjang array di buat oleh sebuah varriable

//Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, 
// sementara unshift() digunakan untuk menambahkan elemen di awal array.
// myArray.shift();
// myArray.unshift("Aple");

// Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword delete
// delete myArray[1];

// perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode splice() seperti ini:
// Dengan menggunakan splice kita menghapus data dari index array tanpa membuatnya kosong berbeda dengan menggunakan delete
myArray.splice(2, 1);
console.log(myArray);