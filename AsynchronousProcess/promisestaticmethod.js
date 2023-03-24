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