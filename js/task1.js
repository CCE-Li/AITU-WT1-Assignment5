const studentName = "LiYixin";
const studentGroup = "SE-2526";
const age = 19;
const averageGrade = 4.75;
const isEnrolled = true;

console.log("---------- Variables ----------");
console.log("studentName:", studentName, "| type:", typeof studentName);
console.log("studentGroup:", studentGroup, "| type:", typeof studentGroup);
console.log("age:", age, "| type:", typeof age);
console.log("averageGrade:", averageGrade, "| type:", typeof averageGrade);
console.log("isEnrolled:", isEnrolled, "| type:", typeof isEnrolled);

const x = 12;
const y = 5;

const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const remainder = x % y;
const power = x ** 2;

console.log("---------- Arithmetic operations ----------");
console.log(x + " + " + y + " = " + sum);
console.log(x + " - " + y + " = " + difference);
console.log(x + " * " + y + " = " + product);
console.log(x + " / " + y + " = " + quotient);
console.log(x + " % " + y + " = " + remainder);
console.log(x + " ** 2 = " + power);
console.log("Sum is greater than 15:", sum > 15);
console.log("x is odd:", x % 2 === 1);

const firstPart = "Hello";
const secondPart = "JavaScript";
const greeting = firstPart + ", " + secondPart + "!";
const summary = "My name is " + studentName + " and I study in group " + studentGroup + ".";

console.log("---------- String concatenation ----------");
console.log(greeting);
console.log(summary);
console.log("Total characters in greeting:", greeting.length);

const variablesList = document.getElementById("variables-list");
const arithmeticList = document.getElementById("arithmetic-list");
const concatenationOutput = document.getElementById("concatenation-output");

function addRow(list, label, value) {
  const row = document.createElement("li");
  const labelElement = document.createElement("span");
  const valueElement = document.createElement("span");

  labelElement.className = "label";
  labelElement.textContent = label;
  valueElement.className = "value";
  valueElement.textContent = value;

  row.append(labelElement, valueElement);
  list.append(row);
}

addRow(variablesList, "studentName (string)", studentName);
addRow(variablesList, "studentGroup (string)", studentGroup);
addRow(variablesList, "age (number)", age);
addRow(variablesList, "averageGrade (number)", averageGrade);
addRow(variablesList, "isEnrolled (boolean)", isEnrolled);

addRow(arithmeticList, x + " + " + y, sum);
addRow(arithmeticList, x + " - " + y, difference);
addRow(arithmeticList, x + " * " + y, product);
addRow(arithmeticList, x + " / " + y, quotient);
addRow(arithmeticList, x + " % " + y, remainder);
addRow(arithmeticList, x + " ** 2", power);

concatenationOutput.textContent = greeting + " " + summary;
