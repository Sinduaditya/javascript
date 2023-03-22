// ==== POLA CALL BACK

function getUsers(isOffline, callback) {
    //simulate network delay
    setTimeout(() => {
        const users = ['Sindu', 'Aditya', 'Janadi'];


        if (isOffline) {
            callback(new Error('Cannot retrieve users due offline !'), null);
            return;
        }
        /*
          Argumen pertama dari fungsi callback merupakan error. Argumen ini hanya akan bernilai jika proses asynchronous gagal, sebaliknya biasanya bernilai null. Argumen kedua dari fungsi callback merupakan data yang dibawa ketika prosesnya berhasil. Jika proses asynchronous gagal, dia akan bernilai null.

          Selain itu, Anda juga perlu mengingat convention yang ditetapkan oleh Node.js bahwa argumen callback selalu diletakkan terakhir. Itulah alasan kami mendefinisikan argumen isOffline kemudian callback pada fungsi getUsers().
        */

        callback(null, users);
    }, 3000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('Process Failed:', error.message);
        return;
    }

    console.log('process success:', users);
}
getUsers(true, usersCallback);
getUsers(false, usersCallback);
// Process Failed: Cannot retrieve users due offline !
// process success: [ 'Sindu', 'Aditya', 'Janadi' ]
/*
  Proses yang dijalankan secara asynchronous, biasanya berpotensi menghasilkan error. Misalnya, sebuah fungsi yang mengambil data dari internet akan menghasilkan error ketika jaringan kita bermasalah. Contoh lainnya, ketika berkas tersebut tidak ditemukan, fungsi yang membacanya akan menghasilkan error.
  Dengan alasan tersebut, pada fungsi callback selain membawa argumen data, ia juga membawa argumen error. Argumen error hanya akan memiliki nilai ketika proses asynchronous gagal atau mengalami gangguan.
*/