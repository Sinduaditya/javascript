// === PROMISE ===
/*
  Selain sama-sama membutuhkan waktu, kesamaan lainnya terjadi pada hasil yang didapatkan. Di dunia nyata, janji bisa terpenuhi atau gagal. Contoh, jika teman Anda berjanji akan mengajak lari pada sore hari, bisa saja janji tersebut gagal terpenuhi karena hujan atau alasan lainnya. Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

  #Pending merupakan keadaan Promise sedang berjalan.
  #Fulfilled merupakan keadaan Promise yang terpenuhi.
  #Rejected merupakan keadaan Promise yang gagal terpenuhi.
*/
function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {
        //simulate network delay
        setTimeout(() => {
            const users = ['Sindu', 'Aditya', 'Janadi'];
            if (isOffline) {
                /*
                Catatan: Objek Promise dibuat dengan cara memanggil constructor Promise, yakni new Promise(). Kemudian di dalam constructor, Anda wajib memberikan argumen berupa fungsi yang di dalamnya terdapat operasi asynchronous. Fungsi tersebut juga diberikan akses terhadap dua argumen, yaitu resolve dan reject. Kedua argumen ini bisa Anda manfaatkan dalam membawa hasil dari proses asynchronous berupa data ataupun error.
                */
                reject(new Error('cannot retrieve users due offline!'));
                return;
            }
            /*
              Dalam kasus yang menyebabkan proses asynchronous error, kita bisa bawa error tersebut menggunakan reject, sedangkan pada kasus proses asynchronous berjalan sukses, kita bisa bawa nilai tersebut dengan resolve.
            */
            resolve(users);
        }, 3000);

    });
}

getUsers(false)
    /*
    Nilai yang dibawa oleh resolve() dapat diambil melalui fungsi .then() dan seketika status Promise akan berubah dari pending ke fulfilled. Di sisi lain, nilai yang dibawa oleh reject() dapat diambil melalui fungsi .catch() dan seketika status Promise akan berubah dari pending ke rejected.
    Perhatikan juga bahwa .then() dan .catch() selalu mengembalikan Promise, itulah yang menyebabkan pemanggilannya dapat berantai seperti .then().catch().
  */
    .then(users => console.log(users))
    .catch(err => console.log(err.message));