// import { getFullTime } from './getFullTime.js'; 
function getFullTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

  const fullTimeString = `${day}${hours}${minutes}${seconds}${milliseconds}`;
  return Number(fullTimeString);
}

let nameItemAdd = document.querySelector("#nameItemAdd")
let buttonItemAdd = document.querySelector("#buttonItemAdd")

let todoItemList = document.querySelector(".todoItemList")
let itemList = document.querySelector(".itemList")

// let nameItemTodo = document.querySelector(".nameItem")


let numItem = 0
let data = []

// Criacao de itens na Todo e na Lista

buttonItemAdd.addEventListener("click", () => {
  handleCreateItem(nameItemAdd.value, false, getFullTime())
});

function handleCreateItem(name, status, id) {
  numItem++
  createItemTodo(name)
  createItemList(name)
  insertData(name, status, id, numItem)
  createListeners()
  nameItemAdd.value = ''
}

function createItemTodo(name) {
  let createItemTodo = document.createElement("div")
  createItemTodo.classList.add("itemTodo")
  createItemTodo.classList.add(`I${numItem}`)
  console.log(createItemTodo.classList[1])

  createItemTodo.innerHTML =
  `
    <div>
      <input type="checkbox" name="checkItem" class="checkItem">
      <input type="text" name="nameItem" class="nameItem" value="${name}">
    </div>
    <button class="buttonItemRemove">
      <img src="images/bin.png"alt="Alterar Nome Item">
    </button>
  `
    
  todoItemList.appendChild(createItemTodo)
}

function createItemList(name) {
  const item = document.createElement("li")
  item.className = "item"
  item.textContent = `${name}`

  itemList.appendChild(item)
}

function insertData(name, status, id, numItem) {
  data.push([name, status, id, numItem])
  console.log(data)
}

// Funcao para chamar criar onChange sem conflito
function createListeners() {
  createListenerName()
  createListenerCheck()
  createListenerRemove()
}

// Atualizando o nome na lista e na variavel data
function createListenerName() {
  let nameItensTodo = document.querySelectorAll(".nameItem")

  nameItensTodo.forEach(n => {
    n.addEventListener("change", () => {
      let indice = n.parentNode.parentNode.classList[1].split("")
      indice.splice(0, 1)
      console.log(indice)
      reloadName(n.value, Number(indice))
    })
  })
}

function reloadName(name, numItem) {
  reloadNameData(name, numItem)
  reloadNameList(name, numItem)
}

function reloadNameData(name, numItem){
  data[numItem-1][0] = name
  console.log(data[numItem-1])
  console.log(data)
}

function reloadNameList(name, numItem){
  let listItens = document.querySelectorAll(".item")
  listItens[numItem-1].innerHTML = name
}

// Atualizando o status na lista e na variavel data
function createListenerCheck() {
  let statusItensTodo = document.querySelectorAll(".checkItem")

  statusItensTodo.forEach(n => {
    n.addEventListener("change", () => {
      let indice = n.parentNode.parentNode.classList[1].split("")
      indice.splice(0, 1)
      console.log(indice)
      reloadStatus(n.checked, Number(indice))
    })
  })
}

function reloadStatus(status, numItem) {
  reloadStatusData(status, numItem)
  reloadStatusList(status, numItem)
}

function reloadStatusData(status, numItem){
  data[numItem-1][1] = status
  console.log(data[numItem-1])
  console.log(data)
}

function reloadStatusList(status, numItem){
  let listItens = document.querySelectorAll(".item")
  if(status) {
    listItens[numItem-1].style.textDecoration = "line-through"
    listItens[numItem-1].style.color = "#555"
  }
  else {
    listItens[numItem-1].style.textDecoration = "none"
    listItens[numItem-1].style.color = "#000"
  }
}

// Apagando Itens
function createListenerRemove() {
  let buttonsItemRemove = document.querySelectorAll(".buttonItemRemove")
  buttonsItemRemove.forEach(n => {
    n.addEventListener("click", () => {
      let indice = n.parentNode.classList[1].split("")
      indice.splice(0, 1)
      console.log(indice)
      reloadRemove(Number(indice))
    })
  })
}

function reloadRemove(numItem) {
  reloadRemoveData(numItem)
  reloadRemoveList(numItem)
}

function reloadRemoveData(numItem){
  data.splice(numItem-1, 1)
  console.log(data)
}

function reloadRemoveList(numItem){
  let listItensTodo = document.querySelectorAll(".itemTodo")
  let listItens = document.querySelectorAll(".item")

  listItensTodo[numItem-1].remove()
  listItens[numItem-1].remove()
}