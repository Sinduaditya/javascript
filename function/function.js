// name = "Sindu";

// function greeting() {
//   console.log(`Good Morning ${name}`);
// }

// greeting();

function greeting(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat Pagi ${name}!`);
  }
}

// function dapat menghasilkan output atau mengembalikan output
// greeting("Sindu", "English");
let greetingResult = greeting("Luthfi", "French");
console.log(greetingResult);


// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(10, 2);
// console.log(result);

// - EXPRESSION FUNCTION -
function expression(name, language) {
  if (language === "English") {
    console.log("Good Morning" + name + "!");
  } else if (language === "French") {
    console.log("Bonjour" + name + "!");
  } else {
    console.log("Selamat Pagi" + name + "!");
  }
}

console.log(expression("Rasyid", "English"));