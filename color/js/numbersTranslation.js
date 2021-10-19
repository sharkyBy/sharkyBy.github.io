
export default function numbersTranslation(r,g,b) {
    const hexR1 = (r-  r % 16) / 16;
    const hexR2 = (r % 16);
    const hexG1 = (g - g % 16) / 16;
    const hexG2 = (g % 16);
    const hexB1 = (b - b % 16) / 16;
    const hexB2 = (b % 16);

    const hexArr = [hexR1, hexR2, hexG1, hexG2, hexB1, hexB2];
  
   let hex = hexArr.map(item => {
        return (
           item == 10 ? "A":
        item == 11 ? "B":
        item == 12 ? "C":
        item == 13 ? "D":
        item == 14 ? "E":
        item == 15 ? "F":item
        )
        

    })

    return `#${hex.join('')}`

}