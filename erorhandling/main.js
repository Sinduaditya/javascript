// ===== Penanganan Eror ====
/*
  Javascript menggunakan try and catch untuk mengangkap respon eror yang ada di dalam codingan
*/
// try and catch finaly

try {
    console.log("Awal blok try!");
    // test eror code
    codeEror;
} catch (error) {
    /*
    Object error memiliki beberapa properti utama di dalamnya, yaitu:
    name : Nama error yang terjadi.
    message : Pesan tentang detail error.
    stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
    */
    console.log(error.name);
    console.log(error.massage);
    console.table(error.stack);
}
// dengan menggunakan finnaly maka hasil try berhasil atau pun eror blog nya akan teap di jalankan 
finally {
    console.log("Teteap Di jalankan walaupun eror dan berhasil");
}
// =================================IMPLEMENTATION
const json = '{ "name": "Yoda", "age": 20 }';

try {
    // JSON.parse() adalah melakukan konversi dari variable json sring
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}


// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }

/*
output
this is an error
*/