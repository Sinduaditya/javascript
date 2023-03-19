/*
=========================================
IMUTABILITY
==============
Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.

Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru..
#contoh01
______________________
Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini: #contoh02
*/

// contoh01
const names = ['Sindu', 'Aditya', 'Janadi'];
const newNames = names.map((name) => `${name}!`);

console.log({
    names,
    newNames,
});


// contoh02
const user = {
    firstname: 'Harry',
    lastName: 'Protter', //ups typo
}


const createNewUserWithNewLastName = (newLastName, user) => {
    return {...user, lastName: newLastName }
}

const newUser = createNewUserWithNewLastName('Potter', user);
console.log(newUser);