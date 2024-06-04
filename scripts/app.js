console.log('Scripts loaded!');

// Remember to inspect in Chrome, and click onto console to see errors!

// Create your varibles below this line

// Step 1: Declare two variables 'a' and 'b' and assign them numeric values.
// Example: let a; let b;
// Assign appropriate numeric values to these variables. For example 3 and 5
// I have used prompt here to allow you to enter numbers on page load!
// parseFloat() method is a JavaScript function used to convert strings into floating-point numbers
// :) Continue to Step 2
let a = parseFloat(prompt('Enter Number for a'));
let b = parseFloat(prompt('Enter Number for b'));

// Step 2: Use equality and inequality operators to compare the variables.
// Example: let isEqual;
// Use '==' to compare 'a' and 'b' for equality.

// Example: let isStrictEqual;
// Use '===' to compare 'a' and 'b' for strict equality.

// Example: let isNotEqual;
// Use '!=' to compare 'a' and 'b' for inequality.

// Example: let isStrictNotEqual;
// Use '!==' to compare 'a' and 'b' for strict inequality.

// Step 3: Perform basic mathematical operations.
// Example: let add;
// Add 'a' and 'b'.

// Example: let sub;
// Subtract 'b' from 'a'.

// Example: let multiply;
// Multiply 'a' and 'b'.

// Example: let power; use ** as the operator
// Raise 'a' to the power of 'b'.

// Example: let division;
// Divide 'a' by 'b'.

// Step 4: Use comparison operators to compare the variables.
// Example: let isGreaterThan;
// Check if 'a' is greater than 'b'.

// Example: let isGreaterOrEqual;
// Check if 'a' is greater than or equal to 'b'.

// Example: let isLessThan;
// Check if 'a' is less than 'b'.

// Example: let isLessOrEqual;
// Check if 'a' is less than or equal to 'b'.

// Step 5: Apply binary logic with short-circuit evaluation.
// Example: let andResult;
// Use '&&' to check if both 'a' and 'b' are greater than 5.

// Example: let orResult;
// Use '||' to check if either 'a' or 'b' is greater than 5.

//
// Do not edit below this line, this code will display the values on the page
//
function getBadge(value) {
    return value ? `<span class="badge bg-success">True</span>` : `<span class="badge bg-danger">False</span>`;
}

const resultsDiv = document.querySelector('#results');
resultsDiv.innerHTML = `
    <div class="container card mt-4">
        <div class="row m-2">
            <div class="col-md-3">
                <h2 class="card-title">Variables</h2>
                <p class="card-text">a: <strong>${a}</strong></p>
                <p class="card-text">b: <strong>${b}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Comparisons</h2>
                <p class="card-text">isEqual (a == b): <strong>${isEqual} ${getBadge(isEqual)}</strong></p>
                <p class="card-text">isStrictEqual (a === b): <strong>${isStrictEqual} ${getBadge(isStrictEqual)}</strong></p>
                <p class="card-text">isNotEqual (a != b): <strong>${isNotEqual} ${getBadge(isNotEqual)}</strong></p>
                <p class="card-text">isStrictNotEqual (a !== b): <strong>${isStrictNotEqual} ${getBadge(isStrictNotEqual)}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Mathematical</h2>
                <p class="card-text">Addition (a + b): <strong>${add}</strong></p>
                <p class="card-text">Subtraction (a - b): <strong>${sub}</strong></p>
                <p class="card-text">Multiply (a * b): <strong>${multiply}</strong></p>
                <p class="card-text">Power (a<sup>b</sup>): <strong>${power}</strong></p>
                <p class="card-text">Division (a / b): <strong>${division}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Logical</h2>
                <p class="card-text">isGreaterThan (a > b): <strong>${isGreaterThan} ${getBadge(isGreaterThan)}</strong></p>
                <p class="card-text">isGreaterOrEqual (a >= b): <strong>${isGreaterOrEqual} ${getBadge(isGreaterOrEqual)}</strong></p>
                <p class="card-text">isLessThan (a < b): <strong>${isLessThan} ${getBadge(isLessThan)}</strong></p>
                <p class="card-text">isLessOrEqual (a <= b): <strong>${isLessOrEqual} ${getBadge(isLessOrEqual)}</strong></p>
                <p class="card-text">andResult (a > 5 && b > 5): <strong>${andResult} ${getBadge(andResult)}</strong></p>
                <p class="card-text">orResult (a > 5 || b > 5): <strong>${orResult} ${getBadge(orResult)}</strong></p>
            </div>
        </div>
    </div>
`;