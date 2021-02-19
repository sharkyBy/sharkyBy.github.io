

//Удаление строк из таблицы модального окна
export default function deleteRow(e) {
  e.target.parentElement.remove();
  // console.log(e.target)
  return renameRow();
}

//изменение номера строки
function renameRow() {
  let table = document.getElementById("thermal");
 
  for (let i = 1; i < table.children.length; i++) {
    let tr = table.children[i];
    tr.firstChild.innerHTML = i + 1
  }
}
