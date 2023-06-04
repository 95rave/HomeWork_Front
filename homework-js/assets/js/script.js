"use strict";

const table = document.getElementById('chess');
let tr = '';

for (let i = 0; i < 8; i++) {
  tr += `<tr>`;
  
  for (let j = 0; j < 8; j++) {
    const isEvenRow = i % 2 === 0;
    const isOddColumn = j % 2 !== 0;
    
    const cellColorClass = isEvenRow ? (isOddColumn ? 'bg-black' : 'bg-white') : (isOddColumn ? 'bg-white' : 'bg-black');
    tr += `<td class="${cellColorClass}"></td>`;
  }
  
  tr += `</tr>`;
}

table.innerHTML = tr;
