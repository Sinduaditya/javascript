const json = '{ "name" : "Sindu", "age": 20 }';

try {
    const user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name); //undifine hasilnya bila di dalam variable json tidak ada datanya
    console.log(user.age); //20
} catch (error) {
    console.log(`JSON Error:${error.message}`);
}

/*
===========IF ELSE IF CATCH EROR==========
Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
*/

try {
    const auth = JSON.parse(json);
    if (!auth.name) {
        throw new SyntaxError("'name' is required.")
    }
    console.log(auth.name);
    console.log(auth.age);
    erorCode; //contoh eror ( undefine)
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error:${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.massage);
    } else {
        console.log(error.stack);
    }
}