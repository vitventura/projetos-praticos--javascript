const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItens);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");

    element.classList.add("grocery-item");

    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="tittle"> ${value}</p>
        <div class ="btn-container">
        <button type ="button" class ="edit-btn">
        <i class="fas fa-edit"></i>
        </button>
        <button type ="button" class ="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>`;

    const deleteBtn = document.querySelector(".delete-btn");
    const editBtn = document.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem)
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);
    container.classList.add("show-container");
    alertDisplay("item add cucess", "success");

    setDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value
  } else {
    alertDisplay("please, enter a value", "danger");
  }
}

function alertDisplay(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function clearItens() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }

  function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    list.classList.remove(element);
    alertDisplay("item removed", "danger");
  }

  function editItem(e) {
    const element = e.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
  }
}
function setDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
