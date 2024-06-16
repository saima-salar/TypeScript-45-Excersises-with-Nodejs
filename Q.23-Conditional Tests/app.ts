// Q.23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')


let car:string='subaru';

// Test 1 : Equality Comparision (True)

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru') //True


//Test 2 : Strict Equality Comparision (True)

console.log("Is car ==='subaru'? I predict True.")

console.log(car === 'subaru') //True



// Test 3 : Inequality Comparison (False)
console.log("Is car !='subaru'? I predict False.");
console.log(car != 'subaru'); //False



//Test 4 : Strict inequality Comparison (False)
console.log("Is car !=='subaru'? I predict False.");
console.log(car !== 'subaru'); //False


//Test 5 : less than comparison (False)
console.log("Is car <'subaru'? I predict False.");
console.log(car < 'subaru'); //False (Lexicographic comparison)



//Test 6 : Greater than comparison (False)
console.log("Is car >'subaru'? I predict False.");
console.log(car > 'subaru'); //False (Lexicographic comparison)



// Test 7: Less than or equal comparison(True)
console.log("Is car <='subaru'? I predict False.");
console.log(car <= 'subaru'); //True



// Test 8: Greater than or equal comparison(True)
console.log("Is car >='subaru'? I predict False.");
console.log(car >= 'subaru'); //True



// Test 9: Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car); //True ( non-empty string is truthy)



// Test 10: Checking falsiness (False)
console.log("Is !car? I predict False.");
console.log(!car); //True ( negation of the truthy value)

