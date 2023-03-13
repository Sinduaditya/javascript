// __REGULAR FUNCTION
// // function declaration
function sayCuasong(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function(name) {
    console.log(`Nama saya ${name}`)
}

// __Arrow
// function expression
const sayHello = (greet) => {
        console.log(`${greet}!`)
    }
    // jika hanya memiliki satu parameter maka
const sayNameex = name => {
    console.log(`Nama saya ${name}`)
}

// jika tidak memiliki parameter 
const withOut = () => {
    console.log("haloo gaisss!");
}

withOut();

sayHello('Sindu');
sayNameex('Rosy');