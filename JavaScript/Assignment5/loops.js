{
//  Loops :

// Q1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2: Sum of first N natural numbers

let n = 6;
let i = 1;
let sum = 0;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log("Sum = " + sum);

// Q3: Multiplication table

let table = 4;


for (let i = 1 ; i<=10 ; i++){
    console.log(table + " " + "x" + " " + i + " " + "=" + " " + (table*i));
}

// Q4: Find the factorial of a number using a while loop.

let num = 7;
let a = 1;
let factorial = 1;

while(a <= num ){
    factorial = factorial * a;
    a++;    
}
console.log("factorial =" + factorial);


// Q5: Print numbers from 10 down to 1 using a for loop.

for(let b = 10 ; b >= 1 ; b-- ){
    console.log(b)    
}

// Q6: Print all even numbers up to N using a do-while loop.

let x = 20;
let y = 2;

do{
    console.log(y);
    y = y + 2;
}while(y <= 20);

// Q7: Sum of digits using while loop

let number = 174;
let total = 0;

while (number > 0) {
    let digit = number % 10;
    total = total + digit;
    number = Math.floor(number / 10);
}
console.log("Sum of digits = " + total);

// Q8: Print first 10 terms of Fibonacci sequence using for loop

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= 10; i++) {
    let next = first + second;
    console.log(next);

    first = second;
    second = next;
}

// Q9: Guessing game using do-while loop

let secretNumber = 7;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 10:"));
} while (guess !== secretNumber);

console.log("Correct! You guessed the number.");


// Q10: Check whether a number is prime using for loop

let primary = 7;
let isPrime = true;

if (primary <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primary; i++) {
        if (primary % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(primary + " is a prime primary");
} else {
    console.log(primary + " is not a prime primary");
}
}