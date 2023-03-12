// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut:

const user = {
  id: 24,
  displayName: "Aditya",
  fullName: "Sindu Aditya Janadi",
}

function introduce({
  displayName,
  fullName
}) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);