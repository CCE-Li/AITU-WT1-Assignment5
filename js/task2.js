const messageParagraph = document.getElementById("message");
const changeTextButton = document.getElementById("change-text");

const messages = [
  "The paragraph text was changed by JavaScript!",
  "This is a different message, produced by another click.",
  "Every click replaces the text with a new string.",
  "The content is set with the textContent property.",
  "Back to the beginning - the next click starts over."
];

let messageIndex = 0;

function changeMessage() {
  messageParagraph.textContent = messages[messageIndex];
  console.log("Paragraph text changed to:", messages[messageIndex]);

  messageIndex = (messageIndex + 1) % messages.length;
}

changeTextButton.addEventListener("click", changeMessage);
