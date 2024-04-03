let items = [];
const itemForm = document.getElementById("itemForm");
const itemTable = document
  .getElementById("itemTable")
  .getElementsByTagName("tbody")[0];

itemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const itemName = document.getElementById("itemName").value;
  if (itemName.trim() !== "") {
    const newItem = {
      id: Date.now(),
      name: itemName,
    };
    items.push(newItem);
    displayItems();
    itemForm.reset();
  }
});

function displayItems() {
  itemTable.innerHTML = "";
  items.forEach(function (item) {
    const row = itemTable.insertRow();
    row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>
                    <button onclick="editItem(${item.id})" class="btn btn-warning">Edit</button>
                    <button onclick="deleteItem(${item.id})" class="btn btn-danger">Delete</button>
                </td>
            `;
  });
}

function editItem(id) {
  const selectedItem = items.find((item) => item.id === id);
  if (selectedItem) {
    const newName = prompt("Enter new name for the item:", selectedItem.name);
    if (newName !== null && newName.trim() !== "") {
      selectedItem.name = newName;
      displayItems();
    }
  }
}

function deleteItem(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    displayItems();
  }
}
