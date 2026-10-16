const styleBox = document.getElementById("style-box");
const colorValue = document.getElementById("color-value");
const fontSizeValue = document.getElementById("font-size-value");

const colorButton = document.getElementById("change-color");
const fontSizeButton = document.getElementById("change-font-size");

const colors = ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3", "#ede9fe"];
const fontSizes = [20, 24, 28, 16];

let colorIndex = 0;
let fontSizeIndex = 0;

function changeBackgroundColor() {
  const color = colors[colorIndex];
  styleBox.style.backgroundColor = color;
  colorValue.textContent = color;
  console.log("Background color changed to " + color);

  colorIndex = (colorIndex + 1) % colors.length;
}

function changeFontSize() {
  const size = fontSizes[fontSizeIndex];
  styleBox.style.fontSize = size + "px";
  fontSizeValue.textContent = size + "px";
  console.log("Font size changed to " + size + "px");

  fontSizeIndex = (fontSizeIndex + 1) % fontSizes.length;
}

colorButton.addEventListener("click", changeBackgroundColor);
fontSizeButton.addEventListener("click", changeFontSize);
