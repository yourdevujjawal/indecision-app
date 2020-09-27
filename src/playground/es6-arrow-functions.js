const square = function(x) {
    return x*x;
}


// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrowConcise = (x) => x * x;

console.log(squareArrowConcise(3));

//challange1

//use arrow function to get first name

// const getFirstName = (fullName) => {
//     const firstName = fullName.split(' ')[0]
//     return firstName;
// }

// console.log(getFirstName('Ujjawal Chatterjee'));

//arrow function expression syntax

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('Ujjawal Chatterjee'));