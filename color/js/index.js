import numbersTranslation from "./numbersTranslation.js";

const rangeR = document.getElementById("rangeR");
const rangeG = document.getElementById("rangeG");
const rangeB = document.getElementById("rangeB"); 

function getValueRange() {
  let rR = rangeR.value;
  let rG = rangeG.value;
  let rB = rangeB.value;
  //Задаем псевдоэлементу ::after текущее значение ползунка
  // Для этого свойству CSS присваиваем атрибут content: attr(data-red)
  //Вызываем элемент по id, обращаемся к пользовательскому атрибуту red 
  //при помощи свойства dataset 
  const attrR = document.getElementById("redS");
  const attrG = document.getElementById("greenS");
  const attrB = document.getElementById("blueS");
  attrR.dataset.red = rR;
  attrG.dataset.green = rG;
  attrB.dataset.blue = rB
  attrR.dataset.redPercent = `${Math.round(rR * 100 / 255)} %`;
  attrG.dataset.greenPercent = `${Math.round(rG * 100 / 255)} %`;
  attrB.dataset.bluePercent = `${Math.round(rB * 100 / 255)} %`;

  // console.log(attrR, attrG, attrB)
const showWindow = document.getElementById("show");
const resRgb = document.getElementById("resRgb");
const resHex = document.getElementById("resHex")
showWindow.style.backgroundColor = `rgb(${rR},${rG},${rB})`;

resRgb.textContent = `RGB( ${rR}, ${rG}, ${rB} )`
resHex.textContent = `HEX ${numbersTranslation(rR,rG,rB)}`

// const hexR = Number(rR);
// const hexG = Number(rG);
// const hexB = Number(rB);
// console.log(s.toString(16))

//метод num.toString(base) - возвращает строковое представление числа к системе счисления base (от 2 до 36)
//можно заменить функцию numberTranslation
// resHex.textContent = `HEX #${(hexR.toString(16)).toUpperCase()}${hexG.toString(16).toUpperCase()}${hexB.toString(16).toUpperCase()}`


}

rangeR.addEventListener("input",getValueRange);
rangeG.addEventListener("input",getValueRange);
rangeB.addEventListener("input",getValueRange);


