import addCells from './addCells.js';
import deleteRow from './deleteRow.js';

let btn = document.getElementById("addButton");
btn.addEventListener("click", addRow)



//Добавление строк в таблицу модального окна
export function addRow() {
  const table = document.getElementById("thermal");
  let tr = table.insertRow();
  setAttributes(tr, { "class": "thermal_row" })
  let delBtn = document.createElement("button");
  delBtn.innerHTML = "Удалить"
  setAttributes(delBtn, { "class": "delete" })
  delBtn.addEventListener("click", deleteRow)
  return addCells(table,tr,delBtn,setAttributes);
}



//Функция для установки атрибутов элементу
function setAttributes(el, attr) {
  for (let key in attr) {
    el.setAttribute(key, attr[key]);
  }
}
