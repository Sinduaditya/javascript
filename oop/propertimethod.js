// C nya besar mendakan contructor
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // mendefinisikan nilai property di dalam class itu sendiri
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
        // this.chassisNumber = chassisNumber;
    }
}

const car1 = new Car("Suzuki", "white", 200);
const car2 = new Car("Honda", "black", 300);

// secara setandar property di dalam sebuah instance class bersifat mutable atau dapat di ubah nilainya 
// Car.chassisNumber = 'H Poff 1';

console.log(car1);
console.log(car2);


// ---accesssor property ( properti getter dan setter)
/*Sebab kita menetapkan getter dan setter untuk properti fullName, maka kita bisa mengakses properti tersebut melalui instance User. Ketika kita coba mendapatkan nilai properti fullName dengan cara user.fullName, method getter akan dijalankan dan nilai yang dikembalikan akan menjadi nilai dari properti tersebut. Begitu juga ketika kita coba menetapkan nilai properti fullName dengan cara user.fullName = “Fulan Fulanah”, kode di dalam method setter akan dijalankan */
class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }
}

const car = new Car('BMW', 'red', 200);
console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);

/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/