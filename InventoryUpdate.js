function updateInventory(arr1, arr2) {
    // Recorrer los elementos del nuevo inventario
  for (var i = 0; i < arr2.length; i++) {
    var found = false; // Variable para rastrear si se encontró el elemento en el inventario existente
    // Recorrer los elementos del inventario existente
    for (var j = 0; j < arr1.length; j++) {
      // Si se encuentra un elemento coincidente, actualizar la cantidad y marcarlo como encontrado
      if (arr2[i][1] === arr1[j][1]) {
        arr1[j][0] += arr2[i][0]; // Actualizar la cantidad
        found = true;
        //break;
      }
    }
    
    // Si el elemento no se encontró en el inventario existente, agregarlo al final del inventario
    if (!found) {
      arr1.push(arr2[i]);
    }
    }
  //Ordenar por nombre de producto
  arr1.sort((a, b) => {
   const name1 = a[1];
   const name2 = b[1];
  //Criterio de ordenamiento
    if (name1 < name2) {
       return -1;
     }
    if (name1 > name2) {
       return 1;
     }
       return 0;
     });

    console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
