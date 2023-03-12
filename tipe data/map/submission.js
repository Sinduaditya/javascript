const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);

// // 1. Membuat variabel currency dengan Map
// const currency = new Map([
//   ["USD", 14000],
//   ["JPY", 131],
//   ["SGD", 11000],
//   ["MYR", 3500],
// ]);

// // 2. Menghitung priceInIDR
// const priceInJPY = 5000;
// const priceInIDR = priceInJPY * currency.get("JPY");

// console.log(priceInIDR); // output: 655000