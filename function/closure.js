function init() {
    const name = "Sindu Aditya"; //variable local di dalam scope fungi init

    function child() { //inner function, merupakan contoh closure
        console.log(`Hallo ${name}`); //memanggil variable yang ada di parent function
    }

    child();
}

init()

function testClosure() {
    const name = "Surya";

    function childTest() {
        console.log(`Hallo bang ${name}`);
    }
    // erbedaannya adalah fungsi childTest() dikembalikan (return) dari outer function-nya sebelum dieksekusi
    // maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di atas fungsi childTest() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.
    return childTest;
}

const myFunction = testClosure();

myFunction();


// membuat private method

// let angka = 0;

// const add = () => {
//     return ++angka;
// }

// console.log(add());
// console.log(add());
// // hindari assignment operator karna bisa menyebabkan bug
// angka = 23;
// console.log(add());

// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure

const plus = () => {
    // seolah olah variable let sama dengan private scope
    let angka = 0;
    return () => {
        return ++angka;
    }
}

const myClosure = plus();
console.log(myClosure());
console.log(myClosure());