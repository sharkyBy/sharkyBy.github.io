//Вычисления
function resultDataEntry(e) {
  let index = e.target.parentElement.cellIndex;
  let thisValue = Number(e.target.value.replace(/,/, "."));
  let sibling;
  index == 2 ? sibling = e.target.parentElement.nextElementSibling.children[0].value :
    index === 3 ? sibling = e.target.parentElement.previousElementSibling.children[0].value : false;
  sibling = Number(sibling.replace(/,/, '.'));
  let res = Math.round(thisValue * sibling * 100) / 100;
  let result = e.target.parentElement.parentElement.cells[4].children[0];
  return result.value = res;

}

export default resultDataEntry;