// Arguments object - No longer bound.

const add = function(a,b) {
    console.log(arguments);
    return a + b;
}

console.log(add(66, 1));

// this keyword - No longer bound.

// const user = {
//     name: 'Ujjawal',
//     cities: ['Patna', 'Darbhanga', 'Lucknow', 'Mumbai'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(`${this.name} has lived in ${city}`);
//         });
//     }
// }

const user = {
    name: 'Ujjawal',
    cities: ['Patna', 'Darbhanga', 'Lucknow', 'Mumbai'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => `${this.name} has lived in  ${city}`);
        return cityMessages;
    }
}

console.log(user.printPlacesLived());

// Challange Area

const multiplier = {
    numbers: [3, 6, 9],
    multiplyBy: 6,
    multiply() {
        const multiplyResult = this.numbers.map((number) => number*this.multiplyBy);
        return multiplyResult;
    }
};


console.log(multiplier.multiply());