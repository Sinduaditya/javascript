/* 
PENULISAN KODE IMPERATIF dan DEKLARATIF
*/

const names = ['Sindu', 'Aditya', 'Janadi']; // super

// IMPERATIF
const ImperatifOne = [];
for (let i = 0; i < names.length; i++) {
    ImperatifOne.push(`${names[i]} This Is Imperatif`)
}
console.log(ImperatifOne);

// DEKLARATIF
const DeklaratifOne = names.map((name) => `${name} This Is Deklaratif`);
console.log(DeklaratifOne);