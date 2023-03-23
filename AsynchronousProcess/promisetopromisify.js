// === PROMISIFY
/*Jelaskan apa perbedaan dari callback dan Promise?
Beberapa hal penting perbedaan callback dan promise adalah : Callback adalah function sedangkan promise adalah object. Callback di kirim melalui parameter, sedangkan promise mengembalikan object. Callback digunakan untuk menghandle succes dan failure,sedangkan promise tidak*/

const { promisify } = require('util');

function getUsers(isOffline, callback) {
    //simulate network delay
    setTimeout(() => {
        const users = ['Sindu', 'Aditya', 'Janadi'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}


const getUsersPromise = promisify(getUsers);


getUsersPromise(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));

getUsersPromise(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));