let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

// Bukan pure function tapi impure
// Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.
console.log(hitungLuasLingkaran(4)); //50.24
PI = 5;
console.log(hitungLuasLingkaran(4)); //80

//contoh pure function
const menghitungLuasLingkaran = (jaariJaari) => {
    // dengan memindahkan nilai PI secara konstan di dalam fungsi
    return 3.14 * (jaariJaari * jaariJaari);
}

console.log(menghitungLuasLingkaran(4));
// ============================================
// contoh  impure functuon
const createPersonWithAge = (age, person) => {
    // Namun alih-alih hanya membuat objek baru, ia juga malah mengubah nilai dari objek lama. Nah, hal inilah yang menyebabkan fungsi createPers
    onWithAge bukanlah pure
    function.
    person.age = age;
    return person;
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({

    person,
    newPerson
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/


// ============================================
// contoh pure function with destructuring object
const PersonWithAge = (age, personTes) => {
    return {...personTes, age };
};

const person = {
    name: 'Sindu'
};

const personNew = PersonWithAge(19, person);

console.log({
    person,
    personNew
});