
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
  // console.log(attrR, attrG, attrB)
const showWindow = document.getElementById("show");
const resVal = document.getElementById("resVal")
showWindow.style.backgroundColor = `rgb(${rR},${rG},${rB})`;
resVal.textContent = `RGB( ${rR}, ${rG}, ${rB} )`

}

rangeR.addEventListener("input",getValueRange);
rangeG.addEventListener("input",getValueRange);
rangeB.addEventListener("input",getValueRange);