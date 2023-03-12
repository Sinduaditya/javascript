//OBJECT {}
const character = {
    name: "Sindu Aditya Janadi",
    school: "SMK 8 N Semarang",
    class: "XI RPL 3",
    nis: "9718",
    addres: "Jalan Bangetayu Kulon RT 3 RW 2",
    "haloo": "Selamat Pagi Dunia !!!",
    parents: "Suwardi"
};
// Krika kita menggunakan assignment operator dan property/key nya sudah ada , maka nilai di dalamnya akan tergantikan dengan nilai yang baru. sedangkan jika properti dengan nama key yang di tentukan tidak di temukan , maka property baru akan di tambahkan ke object


// Menambahkan properti ke dalan variabel dengan (=)
character.position = "Head of Rohis";
character.name = "Aydin Ilham Prawn";
character["nis"] = 9781;
// Menghapus property didalam sebuah variavle dengan (delete)
delete character.addres;
console.log(character);