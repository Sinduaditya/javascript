// PROMISE STATIC METHOD
/*
  Promise memiliki beberapa static method yang dapat digunakan untuk mempermudah penggunaan dalam berbagai kasus. Pada materi ini, kami akan membahas empat static method dari class Promise yang umum digunakan, yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any.
*/

// # Promise All Promise.All()
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
/*
  const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000)); contoh promise all reject
*/
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) =>
    console.log(values)
); // [1,2,3] setelah 3 detik

/* contoh promise.all catch eror
  Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups
*/

// # Promise Race Promise.Race()
/*
  Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(). Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
*/

const promrace1 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ups")), 1000)
);
const promrace2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promrace3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promrace1, promrace2, promrace3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error.message));

// $ Promise.allSettled()
/*
  Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format beriku
  Dari struktur objek yang dihasilkan, Anda bisa melihat bahwa Promise.allSettled() akan mengembalikan seluruh nilai Promise yang dijalankan, baik yang statusnya fulfilled ataupun rejected.
*/
const promiseallSet1 = new Promise((resolve) =>
    setTimeout(() => resolve(1), 1000)
);
const promiseallSet2 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error")), 2000)
);
const promiseallSet3 = new Promise((resolve) =>
    setTimeout(() => resolve(3), 3000)
);

Promise.allSettled([promiseallSet1, promiseallSet2, promiseallSet3]).then(
    (result) => console.log(result)
);

// # Promise.any()
/*
  Method Promise terakhir yang akan kami bahas adalah Promise.any(). Cara kerja method ini mirip seperti Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.
*/

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("1"), 1000)
);
const promiseResolve2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("2"), 2000)
);
const promiseResolve3 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("3"), 3000)
);

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
    .then((value) => console.log(value)) // 1
    .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("1")), 1000)
);
const promiseReject2 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("2")), 2000)
);
const promiseReject3 = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("3")), 3000)
);

Promise.any([promiseReject1, promiseReject2, promiseReject3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message)); // All Promises were rejected