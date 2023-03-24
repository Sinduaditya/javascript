// === Promise Berantai
//  mengatasi measalah yang muncul dari callback hell

function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error("Not enough money to withdraw!"));
            }
            resolve(amount);
        }, 1000);
    });
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error("Not enough money to buy Ticket!"));
            }
            resolve("ticket-1");
        }, 1000);
    });
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error("no Ticket!"));
            }

            resolve("enjoy the movie !");
        }, 1000);
    });
}

function watchMovie() {
    withDrawMoney(10)
        .then((money) => {
            return buyCinemaTicket(money);
        })
        .then((ticket) => {
            return goInsideCinema(ticket);
        })
        .then((result) => {
            console.log(result);
        })

    .catch((error) => {
        console.log(error.message);
    });
}

watchMovie(); //enjoy the movie