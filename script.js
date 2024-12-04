let buttonAdd = document.querySelector(".addItemButton")
let itemList = document.querySelector(".itemList")
let itemListChilds = document.querySelectorAll(".item");
let buttonCheck = document.querySelectorAll(".checkItem")
let data = []
let IDs = 0
let temp = 0

buttonAdd.addEventListener("click", () => {
  let inputItemAddName = document.querySelector("#nameItemAdd").value
  
  if(inputItemAddName) {
    console.log(inputItemAddName)
    handleCreateItem(inputItemAddName)
    itemListChilds = document.querySelectorAll(".item");
    insertData(inputItemAddName, false)
    inputItemAddName = ''
    return
  }

  alert("Insira um nome antes!")
})

function handleCreateItem(name) {
  let itemDiv = document.createElement("div")
  itemDiv.classList.add("item");
  
  itemDiv.innerHTML = 
  `<div>
    <input type="checkbox" name="checkItem" class="checkItem">
    <input type="text" name="nameItem" class="nameItem" value="${name}">
  </div>
  <button class="removeItemButton">
    <img src="images/bin.png"alt="Alterar Nome Item">
  </button>
  `;
  
  itemList.appendChild(itemDiv);

  let buttonRemove = itemDiv.querySelector(".removeItemButton");
  buttonRemove.addEventListener("click", () => {
    itemList.removeChild(itemDiv);
  });

  let buttonCheck = itemDiv.querySelector(".checkItem")
  buttonCheck.addEventListener("click", () => {
    temp++
    if(temp%2 == 0) {
      insertData(name, false)
    } else {
      insertData(name, true)
    }
  })
}

function insertData(name, status, bool) {
  data.push([name, status, IDs])
  if(bool) {
    IDs++
  }
  console.group(data[data.length-1])
}

function reloadData(name, status) {
  data[n] = ([name, status])
  console.group(data[n])
}





// let checkList = document.querySelectorAll(".checkItem")
// let nameList = document.querySelectorAll(".nameItem")

// function handleRegisterData() {
//   nameList.array.forEach(n => {
//     data.push({nameItem: nameList[n].value, statusItem: checkList[n].value})
//   });
// }