// chap 1
// Qno1)
alert("Error! Please enter a valid password");
// Qno2)
alert("Welcome to JS land... \n Happy Coding!")
// Qno3)
alert("Welcome to JS land...")
// Qno4)
alert("Happy Coding! \n Prevent this page from creating additional dialogs.")
// Qno5)
alert("Hello... I can run JS through my web browser's console")
// chap2
// Qno1)
 var a="Jhone ";
 var b="Doe";
 alert(a+b);
// Qno2)
var c=15;
 var d=" years old";
 alert(c+d);
// Qno3)
var e="Certified Mobile ";
 var f="Application Development";
 alert(e+f);
// Qno4)
var g="PIZZA \n PIZZ \n PIZ \n PI \n P";
 alert(g);
// Qno5)
var h="My email address is example@emaple.com";
 alert(h);
// Qno6)
var l="I am trying to learn from the book A smarter \n way to learn JavaScript";
alert(l);
// chap 3
// Qno1)
var a="I am ";
var b= 15;
var c=" years old";
alert(a+b+c);
// Qno2)
var a="You have visited this sites ";
var b= 14;
var c=" times";
alert(a+b+c);
// Qno3) i)
var a="My birth year is ";
var b= 1990 ;
var c=" \n  \n Data type of my declared variable number is";
document.write(a+b+c) ;
// Qno4)
var m="\n John Doe ordered ";
var n= 5;
var o=" T-Shirt(s) on XYZ Clothing store";
document.write(m+n+o);
document.write(`
  <h1>Rules for naming JS variables</h1>
  <p> Variable names can only contain letters, digits, underscores (_), and dollar signs ($). For example $my_1stVariable</p>
  <p> Variables must begin with a letter, $ or _. For example $name, _name or name</p>
  <p> Variable names are case sensitive</p>
  <p> Variable names should not be JS keywords</p>
`);
// chap no 5)
// Qno 1)
let sum = 3 + 5;
document.write(sum + "<br><br>");
// Q no 2)
 var number = 8;  // initialized variable

    // Arithmetic operations
    var subtraction = number - 2;     // subtract 2
    var multiplication = number * 2;  // multiply by 2
    var division = number / 2;        // divide by 2
    var modulus = number % 3;         // modulus with 3

    // Display results
    document.write("<h2>Arithmetic Operations with " + number + "</h2>");
    document.write("Subtraction: " + subtraction + "<br>");
    document.write("Multiplication: " + multiplication + "<br>");
    document.write("Division:" + division + "<br>");
    document.write("Modulus:" + modulus + "<br><br>");
// Qno 3)
document.write(`
  <p> Value after variable declaration is undefined</p>
  <p>Initial Value:5</p>
  <p>Value after increment is :6</p>
  <p>Value after addition is :13</p>
  <p>Value after decrement is :12</p>
  <p>The reminder is :0</p>
  `)
// Qno 4)
  document.write(`
    <p>Total cost to buy 5 tickets to a movie is 3000PKR</p>
  `)
  // Q no 5)
  var num = 4; // the number whose table we want
    document.write("<h2>Multiplication Table of " + num + "</h2>");
    for (var i = 1; i <= 10; i++) {
      document.write(num + " x " + i + " = " + (num * i) + "<br><br>");
    }
    
  // Q no 6)
    var celsius = 25;

    // b. Convert Celsius to Fahrenheit
    var fahrenheitFromCelsius = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

    // c. Store Fahrenheit temperature in a variable
    var fahrenheit = 70;

    // d. Convert Fahrenheit to Celsius
    var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
    document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C<br><br>");
  // Q no 7)
  var priceItem1 = 650;
    var quantityItem1 = 3;
    var priceItem2 = 100;
    var quantityItem2 = 7;
    var shippingCharges = 100;

    // Calculate total cost
    var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

    // Display checkout details
    document.write("<h2>Shopping Cart</h2>");
    document.write("Price of item 1 is " + priceItem1 + "<br>");
    document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
    document.write("Price of item 2 is " + priceItem2 + "<br>");
    document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
    document.write("Shipping Charges " + shippingCharges + "<br><br>");
    document.write("Total cost of your order is " + totalCost + "<br><br>");
  // Q no 8)
  var totalMarks = 980;
    var marksObtained = 804;

    // Calculate percentage
    var percentage = (marksObtained / totalMarks) * 100;

    // Display result
    document.write("<h2>Marks Sheet</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage + "%<br><br>");
// Q no 9)
 var usdToPkr = 104.80;
    var sarToPkr = 28;

    // Perform calculation in a single expression
    var totalPkr = (10 * usdToPkr) + (25 * sarToPkr);

    // Display result
    document.write("<h2>Currency in PKR</h2>");
    document.write("Total Currency in PKR: " + totalPkr);
  // Q no 10)
   var num = 10;

    // Perform all calculations in a single expression
    var result = ((num + 5) * 10) / 2;

    // Display result
    document.write("<h2>Arithmetic Calculation</h2>");
    document.write("Initial number: " + num + "<br>");
    document.write("Result after ((num + 5) * 10) / 2 = " + result) + "<br><br>";
  // Q no 11)
   var currentYear = 2016;

    // b. Store birth year
    var birthYear = 1992;

    // c. Calculate possible ages
    var age1 = currentYear - birthYear;     // if birthday has already passed
    var age2 = age1 - 1;                    // if birthday has not yet passed

    // Display result
    document.write("<h2>Age Calculator</h2>");
    document.write("Current Year: " + currentYear + "<br>");
    document.write("Birth Year: " + birthYear + "<br>");
    document.write("Your age is:"+ age1 + "<br><br>");
   // Q no 12)
   var radius = 20;

    // b. Calculate circumference (2πr)
    var circumference = 125.67999999999999;

    // c. Calculate area (πr²)
    var area = Math.PI * radius * radius;

    // Display results
    document.write("<h2>The Geometrizer</h2>");
    document.write("Radius of circle: " + radius + "<br>");
    document.write("The circumference is " + circumference + "<br>");
    document.write("The area is " + area + "<br><br>");
   // Q no 13 )
    var favoriteSnack = "chocolate chip";

    // b. Current age
    var currentAge = 15;

    // c. Maximum age
    var maxAge = 65;

    // d. Estimated amount per day
    var amountPerDay = 3;

    // e. Calculate total for the rest of life
    var yearsRemaining = maxAge - currentAge;
    var totalSnacks = yearsRemaining * 365 * amountPerDay;

    // Display result
    document.write("<h2>The Lifetime Supply Calculator</h2>");
    document.write("Favorite Snack: " + favoriteSnack + "<br>");
    document.write("Current Age: " + currentAge + "<br>");
    document.write("Estimated Maximum Age: " + maxAge + "<br>");
    document.write("Amount of snacks per day: " + amountPerDay + "<br>");
    document.write("You will need " + totalSnacks + " " + favoriteSnack +
                   " to last you until the ripe old age of " + maxAge + ".");
    // chap 6 to 9
// Qno 1)
  document.write(`
    <p>Result: </p>
    <p>The value a is: 10</p>
    <p>..............................................</p>
    <p>The value ++a is: 11</p>
    <p>Now the value of a is: 11</p>
    <p>The value of a++ is: 11</p>
    <p>Now the value of a is: 12</p>
    <p>The value of --a is: 11</p>
    <p>Now the value of a is: 11</p>
    <p>The value of a-- is: 11</p>
    <p>Now the value of a is: 10</p>
    `)
// Qno 2)
    document.write(`
      <p>a is ??</p>
      <p>b is ??</p>
      <p>result is ??</p>
      `)
// Q no 3)
var userName = prompt("Enter you name");
    // Greet the user
    alert("Hello, " + userName + " Welcome to our website");
// Q no 4)
 var number = prompt("Enter a number to display its multiplication table:", "5");

    // If user leaves blank or cancels, default to 5
    if (number === null || number.trim() === "") {
      number = 5;
    } else {
      number = parseInt(number);
    }

    // Display multiplication table
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br><br>");
    }
  // Q no 5)
  // Subjects
    var subject1 = "English";
    var subject2 = "Math";
    var subject3 = "Urdu";

    // Total marks for each subject
    var totalMarksPerSubject = 100;

    // Obtained marks
    var obtained1 = 54;
    var obtained2 = 54;
    var obtained3 = 48;

    // Calculate totals
    var totalMarks = totalMarksPerSubject * 3;
    var totalObtained = obtained1 + obtained2 + obtained3;
    var percentage = (totalObtained / totalMarks) * 100;

    // Show result in table
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained1 + "</td><td>" + obtained1 + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained2 + "</td><td>" + obtained2 + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained3 + "</td><td>" + obtained3 + "%</td></tr>");
    document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage + "</th></tr>");
    document.write("</table>");
