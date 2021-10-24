

function addColorCollectionElem() {
    let indexId = 0;   
  
    return function () {
      const element = document.createElement("div");
      const showWindow = document.getElementById("show");

      element.setAttribute("class", "colorCollection");
      element.setAttribute("id", `elem_${indexId}`);
      element.setAttribute("data-color",`${showWindow.style.backgroundColor}`);

     
      element.style.backgroundColor = showWindow.style.backgroundColor;
      element.addEventListener("mouseover",toolTip);
      element.addEventListener("mouseout",toolTip);
    //   element.removeEventListener("mouseout",toolTip);
    //   element.removeEventListener("mouseout", deleteToolTip)
      const parrentElem = document.querySelector(".colorWrapper");
      parrentElem.append(element);
      

      if(element.style.backgroundColor >= "rgb(240, 240, 160)") {
          element.style.border = "1px solid black "
      }
      return indexId++     
  
    }
   
  }

function toolTip (event) {    
    let elem = event.target;
    if( elem.children.length == 0 & elem.tagName !="SPAN") {
    const span = document.createElement("span");    
    let attrValue = elem.getAttribute("data-color"); 
    
    console.log(attrValue.lastIndexOf(')'));
    console.log(attrValue.lastIndexOf(","));

    // //Определение цвета фона, при котором рамка будет выводиться темным цветом
    // let start = attrValue.lastIndexOf(",")+2;
    // let end = attrValue.lastIndexOf(")");
    // let bValue = attrValue.slice(start,end);
    // console.log(bValue);

  
    // borderColorReplace(elem,bValue);

    span.classList.add("toolTipActive");
    span.innerHTML = attrValue;  
    elem.append(span)  
    } else if(elem.children.length != 0 & elem.tagName !== "SPAN") {
        elem.children[0].classList.toggle("toolTipDeactive");
        elem.children[0].classList.toggle("toolTipActive")

    }
    
 
}


  export {addColorCollectionElem, toolTip}; 
