/*
=========================================
REAUSABLE FUNCTION
==============
Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami percaya, dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.

Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach
*/

//====== ARRAY MAP =====
// Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function
// contoh
const newArray = ['Sindu', ' Aditya', 'Janadi'].map((name) => { return `${name} !` });
console.log(newArray);



// ====== ARRAY FILTER ===
/*
Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.

Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array
*/
// contoh
const students = [{
        name: 'Sindu',
        score: 90,
    },
    {
        name: 'Aditya',
        score: 86,
    },
    {
        name: 'Janadi',
        score: 50,
    }
];

const eligibleStudent = students.filter((student) => student.score > 85);
console.log(eligibleStudent);

// ========= ARRAY REDUCE
/*
Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.

Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa #contoh1
*/

// contoh01
const totalNilai = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalNilai);


// === ARRAY SOME
/*
array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean
Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap
#contoh 1
*/

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);


// ==== ARRAY FIND ====
/*Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.*/

const findSindu = students.find(student => student.name === 'Sindu');
console.log(findSindu);

// ==== ARRAY SORT
/*array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.*/
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

// ===== ARRAY EVERY
/*
array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.*/
const scores = [70, 85, 90];
const minimumScore = 65;

const examPased = scores.every(score => score >= minimumScore);
console.log(examPased); //true


// ==== ARRAY FOREACH
/*Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.
Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.*/

const names = ['Sindu', 'Aditya', 'Janadi'];
// IMPERATIF
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}!`);
}

// DEKLARATIF
names.forEach((name) => {
    console.log(`Hello ${name}!`);
});


// INFO
/*Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter*/
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Jeff') continue; // Bisa!

    console.log(`Hello, ${names[i]}!`);
}

names.forEach((name) => {
    if (name === 'Jeff') continue; // Tidak Bisa!
    console.log(`Hello, ${name}`);
});