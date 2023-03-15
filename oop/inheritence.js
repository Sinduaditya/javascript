// superclass
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Person extends People { //subclass dari people
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
}

const tanjiro = new Person("Kamado Tanjiro", 16, "Demon Slayer");

console.log(tanjiro.name);
console.log(tanjiro.age);
console.log(tanjiro.job);
// console.log(tanjiro);