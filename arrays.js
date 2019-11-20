
// Challenge 1:
// Research on the following methods: 
// shift(), 
// unshift(), 
// slice(), 
// splice() 
// The shift() method removes a first item from an array and returns that removed element.
// This method changes the length of the array on which we are calling the shift() method. 
// Javascript Array Shift method is not pure function as it directly modifies the array.

// Javascript array unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// The slice() method returns the selected elements in an array, as a new array object. 
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// Note: The original array will not be changed.

// The Array.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements
//  and/or by adding new elements. 
 

// Create a program to demonstrate the uses of each method, some of these you may need more than one example.
//  (Pay attention: not all methods would permanently updates/make changes to the arrays themselves.
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------
//  Challenge 2: 
// Check out the Array constructor Array(). Research on the differences between [ ] and Array(),
// i.e. ['John'] vs Array('John') and [10] vs Array(10)
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------
// Challenge 3:
// Check out the .map() method and create a few examples on the uses of this method.
// --------------------------------------------------------------------------------------------------------------------
const multiplyingNumber=(num1,num2) =>  {
    return num1 * num2
}
console.log(multiplyingNumber(6,5))

let coffeeOrder = [
    "Sam - Hot Chocolate",
    "Dan - Sparklig Water",
    "Tom - Peppermint Tea"
];

let coffeeOrder = [
    "Sam - Hot Chocolate",
    "Dan - Sparklig Water",
    "Tom - Peppermint Tea"
];
console.log(coffeeOrder.length)

console.log(coffeeOrder);
let favouriteSong = [
    "me dewana tera",
    "terimere",
    "lahore"
];
favouriteSong.pop(3);
console.log(favouriteSong)

//Activity 1
let favouriteSport = [
    "Cricket",
    "football",
    "formula 1"
]

console.log(favouriteSport)

let favouriteSport = [
    "Cricket",
    "football",
    "formula 1"
]
favouriteSport.pop(2)
console.log(favouriteSport)

let favouriteSport = [
    "Cricket",
    "football",
    "formula 1"
]
favouriteSport.push("boxing","tennis")
console.log(favouriteSport)


let favouriteSport = [
    "Cricket",
    "football",
    "formula 1"
]
favouriteSport.shift()
console.log(favouriteSport)

let favouriteSport = [
    "cricket",
    "football",
    "formula1"
]
favouriteSport.unshift(yellow)
console.log(favouriteSport)

let favouriteSport = [
    "cricket",
    "football",
    "formula1"
]
console.log(favouriteSport.slice(1))
console.log(favouriteSport)

let favouriteSport = [
    "cricket",
    "football",
    "formula1"
]
console.log(favouriteSport.splice(2))
console.log(favouriteSport)
// challenge 3:


let randomNumber= ["1","2","3","4","5"]
let currentNumber="3";

while(currentNumber != "4"){
    console.log(currentNumber);
    currentNumber= randomNumber[Math.floor(Math.random()*4)];
}