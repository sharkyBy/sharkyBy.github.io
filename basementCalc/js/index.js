import { store } from "./store.js";

window.addEventListener("load", firstLoad);


//Функция создает элементы при загрузке страницы

function firstLoad() {
  let body = document.getElementsByTagName("body")[0];
  setTable(body);
  let input = document.createElement("input");
  setAttributes(input, { "type": "text", "id": "result", "value": "0" });
  body.appendChild(input);
}


//Функция создает таблицу
function setTable(body) {

  let table = document.createElement("table");
  table.createCaption().innerHTML = "Исходные данные";
  let select = setSelect();

  //Создаем строки
  for (let i = 1; i <= 6; i++) {
    let tr = table.insertRow();
    //Создаем ячейки
    for (let j = 1; j <= 5; j++) {
      let td = document.createElement("td");
      j === 1 ? td.innerHTML = i :
        i === 1 & j === 2 ? td.innerHTML = store.table.tHead.name : false;

      if (i === 1 & j === 3) {
        setAttributes(td, { "colspan": "3", "id": "selectPanel" });
        td.appendChild(select);
      }
      if (i === 1 & j > 3) continue;

      if (i === 2 & j === 4) {
        setAttributes(td, { "name": "dataDin" });
        td.innerHTML = select.value;
      }
      i > 1 & j === 2 ? td.innerHTML = store.table.data[i - 2].name : false;
      i > 1 & j === 3 ? td.innerHTML = store.table.data[i - 2].symbol : false;
      i > 1 & j === 5 ? td.innerHTML = store.table.data[i - 2].unit : false;
      if (i === 6 & j === 4) {
        setAttributes(td, { "name": "dataDin" })
        td.innerHTML = Math.floor((3463 / (273 + Number(select.value)) / 9.8) * 1000) / 1000;
      }
      if (i > 2 & i < 6 & j === 4) {
        let input = document.createElement("input");
        setAttributes(td, { "name": "dataStat" });
        setAttributes(input, { "name": "static", "value": input.value });
        input.addEventListener("change", handleInput);
        td.appendChild(input);
      }

      tr.appendChild(td);

    }

  }
  return body.appendChild(table);
}

//Функция для установки атрибутов элементу
function setAttributes(el, attr) {
  for (let key in attr) {
    el.setAttribute(key, attr[key]);
  }
}

//Функция создания тега селект

function setSelect() {
  let select = document.createElement("select");
  setAttributes(select, { "id": "region" });
  let arr = store.table.tHead.region;
  arr.map((item) => {
    let option = document.createElement("option");
    option.innerHTML = item.district;
    setAttributes(option, { "value": item.tExt })
    select.appendChild(option)

  })
  select.addEventListener("change", () => handleTExt(select))
  return select
}

//Функция присваивает выбранной ячейке значение активного option
// function setTExt(el, val) {
//   el.innerHTML=val;
// }

//Функция изменяет значение температуры в ячейке таблицы
function handleTExt(sel) {
  let dataDinamic = document.getElementsByName("dataDin"); // получили NodeList
  let arr = Array.from(dataDinamic); //Преобразовали NodeList в массив
  return arr.map((item, index) => {
    index === 0 ? item.innerHTML = sel.value :
      index === 1 ? item.innerHTML = Math.floor((3463 / (273 + Number(sel.value)) / 9.8) * 1000) / 1000 : false;
  })
}

// function handleInput(e) {

//   let valInput = document.getElementsByName("static");
//   let arr = Array.from(valInput);
//   console.log(arr)
//   return arr.map( () => {
//     let val = item.value
//     console.log(val)
//   } )
// }



function handleInput(e) {
  let valInput = document.getElementsByName("static");
  let arr = Array.from(valInput);
  console.log(arr);
  return arr.map((item,index)=> {
     item.value;
     item.setAttribute("id",`"static_${index+1}"`) 
  console.log(item.value)
  }
  )
}



