const hoverBox = document.getElementById("hover-box");
const overCount = document.getElementById("over-count");
const outCount = document.getElementById("out-count");

const originalColor = "#e2e8f0";
const hoverColor = "#2563eb";

let overEvents = 0;
let outEvents = 0;

function handleMouseOver() {
  hoverBox.style.backgroundColor = hoverColor;
  hoverBox.style.color = "#ffffff";
  hoverBox.textContent = "Mouse is over the box!";

  overEvents++;
  overCount.textContent = overEvents;
  console.log("mouseover - color changed to " + hoverColor);
}

function handleMouseOut() {
  hoverBox.style.backgroundColor = originalColor;
  hoverBox.style.color = "";
  hoverBox.textContent = "Move the mouse over this box";

  outEvents++;
  outCount.textContent = outEvents;
  console.log("mouseout - color restored to " + originalColor);
}

hoverBox.addEventListener("mouseover", handleMouseOver);
hoverBox.addEventListener("mouseout", handleMouseOut);
