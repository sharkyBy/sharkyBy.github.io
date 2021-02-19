import {addRow} from "./addRow.js";
import resultDataEntry from './resultDataEntry.js';

let _materialWeight = document.getElementById("weight");
let _materialCoeff = document.getElementById("coeff");
let _sel = document.getElementById("region");


function onEvent(el,event,func) {
  return el.addEventListener(event,func,false);
}

onEvent(_materialWeight,"input",resultDataEntry);
onEvent(_materialCoeff,"input",resultDataEntry);
onEvent(_sel,"change",()=>setActiveOption("regTemp"))
onEvent(_sel,"change",()=>setOutsideAir("outsideair"))

//Устанавливаем температуру активного поля option
function setActiveOption(id) { 
  let el = document.getElementById(id);
  return el.value = _sel.value;
  
}

//Плотность наружного воздуха
function setOutsideAir(id) {
  let el = document.getElementById(id);
  return el.value = Math.round((3463 / (273 + Number(_sel.value)) / 9.8) * 1000) / 1000
}

