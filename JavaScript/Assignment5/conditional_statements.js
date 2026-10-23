// Conditional_Statments :

// Q1: Check if a number is positive, negative, or zero

let num1 = -4;

if (num1 > 0) {
    console.log("Number Is Positive")
} else if (num1 < 0) {
    console.log("Number Is Negative")
} else {
    console.log("Number Is Zero")
}


// Q2: Check whether a number is even or odd

let num2 = 7;

if (num2 % 2 === 0) {
    console.log("Number Is Even")
} else {
    console.log("Number Is Odd")
}

// Q3: Find the larger of two numbers

let a = 14;
let b = 11;


if (a > b) {
    console.log(a + " " + "is the Larger Number");
} else {
    console.log(b + "is the Larger Number");
}

// Q4: Grade Evaluation

let marks = 78;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// Q5: Leap Year Check

let year = 2026;

if (year % 400 === 0) {
    console.log("Leap Year");
} else if (year % 100 === 0) {
    console.log("Not a Leap Year");
} else if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// Q6: Day of the Week using Switch

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

// Q7: Simple Calculator using Switch

let cal1 = 10;
let cal2 = 5;
let operator = "/";

switch (operator) {
    case "+":
        console.log(cal1 + cal2);
        break;

    case "-":
        console.log(cal1 - cal2);
        break;

    case "*":
        console.log(cal1 * cal2);
        break;

    case "/":
        console.log(cal1 / cal2);
        break;

    default:
        console.log("Invalid Operator");
}

// Q8: Vowel or Consonant using Switch
let letter = "i";

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

// Q9: Traffic Light using Switch

let color = "red";

switch (color) {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Wait")
        break;
    case "green":
        console.log("Go")
        break;
    default:
        console.log("Invalid Color");
}


// Q10: Menu-Driven Program

let balance = 5000;

let choice = prompt("1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

switch (choice) {
    case "1":
        console.log("Balance: " + balance);
        break;

    case "2":
        let deposit = Number(prompt("Enter deposit amount:"));
        balance = balance + deposit;
        console.log("New Balance: " + balance);
        break;

    case "3":
        let withdraw = Number(prompt("Enter withdraw amount:"));
        balance = balance - withdraw;
        console.log("New Balance: " + balance);
        break;

    case "4":
        console.log("Thank You!");
        break;

    default:
        console.log("Invalid Choice");
}
