// buggy-sample.js

function addNumbers(a, b) {
    // Missing input validation
    return a + b
}

const result = addNumbers("5", 10) // Wrong input type: string + number
console.log("Result:", result)
