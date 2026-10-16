const itemList = document.getElementById("item-list");
const itemCount = document.getElementById("item-count");
const addItemButton = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");

let itemNumber = 1;

function updateCount() {
  itemCount.textContent = itemList.children.length;
}

function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "Item " + itemNumber;

  itemList.append(newItem);
  itemNumber++;
  updateCount();

  console.log("Added:", newItem.textContent);
}

function removeItem() {
  const lastItem = itemList.lastElementChild;

  if (lastItem === null) {
    console.log("The list is empty, there is nothing to remove.");
    return;
  }

  console.log("Removed:", lastItem.textContent);
  lastItem.remove();
  updateCount();
}

addItemButton.addEventListener("click", addItem);
removeItemButton.addEventListener("click", removeItem);
