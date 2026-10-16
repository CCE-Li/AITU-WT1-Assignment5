const liveInput = document.getElementById("live-input");
const liveOutput = document.getElementById("live-output");
const lastKey = document.getElementById("last-key");
const charCount = document.getElementById("char-count");

function handleKeyUp(event) {
  const value = liveInput.value;

  if (value.length === 0) {
    liveOutput.innerHTML = '<span class="placeholder">Waiting for input...</span>';
  } else {
    liveOutput.textContent = value;
  }

  lastKey.textContent = event.key;
  charCount.textContent = value.length;

  console.log("keyup event - key: " + event.key + " | value: " + value);
}

liveInput.addEventListener("keyup", handleKeyUp);
