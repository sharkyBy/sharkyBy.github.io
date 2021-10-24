
import {addColorCollectionElem, toolTip} from "./addColorCollectionElem.js";
import getRangeValue from "./getRangeValue.js";

//Добавление обработчика события на все элементы типа range
const getRange = document.querySelectorAll("input[type=range]")
getRange.forEach( elem => {
  elem.addEventListener("input", ()=>getRangeValue(colorValue));
  } 
  )

//Получение значения элементов range (по сути - значений цвета)
const colorValue = ()=> {
  let R, G, B; 
  getRange.forEach( elem => {   
  elem.id == "rangeR" ? R = elem.value:
  elem.id == "rangeG" ? G = elem.value:
  elem.id == "rangeB" ? B = elem.value: false;   

} )

return [R, G, B]
}



const addColor = addColorCollectionElem()
const btn = document.getElementById("addColor");
btn.addEventListener("click", addColor);

