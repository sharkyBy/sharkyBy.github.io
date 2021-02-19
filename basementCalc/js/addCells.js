import resultDataEntry from './resultDataEntry.js';



export default function addCells(table,row,btn,func) {
  for (let i = 1; i <= 5; i++) {
    let td = document.createElement("td");
    let input = document.createElement("input");
    switch (i) {
      case 1:
        let numb = table.rows.length;
        td.innerHTML = numb - 1;
        break;
      case 2:
        func(input, { "class": "material-name", "type": "text", "value": "", "placeholder": "материал" });
        td.appendChild(input);

        break;
      case 3:
        func(input, { "class": "material-name", "type": "text", "value": "", "placeholder": "толщина" });
        td.addEventListener("input", resultDataEntry);
        td.appendChild(input);

        break;
      case 4:
        func(input, { "class": "material-name", "type": "text", "value": "", "placeholder": "коэффициент" });
        td.addEventListener("input", resultDataEntry);
        td.appendChild(input);

        break;
      case 5:
        func(input, { "class": "material-name res", "type": "text", "value": "", "readonly": "readonly" });
        td.appendChild(input);

        break;
      default:
        break;
    }
    row.appendChild(td);
    row.appendChild(btn)
  }
  return table.appendChild(row)
}