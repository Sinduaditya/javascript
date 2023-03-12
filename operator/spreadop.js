// SPREAD OPERATOR
// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
//dengan spread operator kita menyebarkan nilai nilai tersebut
// dengan menambahkan titik tiga (...)
// Terlihat perbedaannya? Mengapa bisa demikian? Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array-nya. Sehingga jika kita menuliskan kode seperti ini:
console.log(...favorites);
// Sama saja dengan kita menuliskan kode seperti ini
// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
// console.log(favorites);


// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
const cake = ["Kue susu", "Kue Kering", "Kue Basah", "Kue Pie"];
const fish = ["Ikan Bandeng", "Iken Lele", "Ikan Nila", "Ikan Tongkol", true, 80]

// let AllRole = [cake, fish];
// Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya, variabel allFavorites menjadi array baru yang menampung dua array di dalamnya. Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?
const AllRole = [...cake, ...fish];
// Yaps dengan menggunakan spread operator nilai tersebut dapat tergabung
console.log(AllRole);


// Spread operator with object
// Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
const obj1 = {
    firstname: 'Sindu',
    Age: 17
};

const obj2 = {
    lastname: 'Janadi',
    gender: 'Laki-Laki'
};

let Allobj = {
    ...obj1,
    ...obj2
};
console.log(Allobj);

// Kesimpulannya 
// Spread Opwrator bisa digunnakan untuk tipe data object dan array
// Spread Op di gunakan untuk menggabungkan 2 variable(dengan tipe datanya) ke dalam variable baru