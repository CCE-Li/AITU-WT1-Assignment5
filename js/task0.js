const studentName = "LiYixin";
const studentGroup = "SE-2526";

console.log("Student: " + studentName);
console.log("Group: " + studentGroup);

function showGreeting() {
  alert("Hello, JavaScript World!");
}

window.addEventListener("load", showGreeting);

document.getElementById("show-alert").addEventListener("click", showGreeting);
