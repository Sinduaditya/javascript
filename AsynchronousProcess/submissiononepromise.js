/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *   
function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);	
}


module.exports = { getProvinces: getProvinces };
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

const { promisify } = require('util');

function getProvinces(countryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countryId === 'id') {
                resolve([
                    { id: 'id-jk', name: 'Jakarta' },
                    { id: 'id-bt', name: 'Banten' },
                    { id: 'id-jr', name: 'Jawa Barat' },
                ]);
            } else {
                // membawa eror tersebut menggunakan reject
                reject(new Error('Country Not Foound !'));
            }
        }, 1000);
    });
}
/*
  Dalam kode di atas, kita menggunakan promisify dari modul util untuk mengubah fungsi getProvinces dari callback-based menjadi Promise-based. Kemudian kita mengubah callback callback menjadi resolve dan reject di dalam Promise. Jika fungsi getProvinces dipanggil dengan countryId yang valid, maka Promise akan di-resolve dengan daftar provinsi sebagai nilai. Jika countryId tidak valid, Promise akan di-reject dengan pesan kesalahan 'Country not found
*/


getProvinces('id')
    .then(provinces => {
        console.log('Provinces:', provinces);
    })

.catch(error => {
    console.log('Eror:', error.message);
});