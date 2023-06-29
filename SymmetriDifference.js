function sym(...args) {
    // Combina todos los conjuntos en uno Solo
    const combinedSet = new Set([].concat(...args));
  
    // Filtra los elementos que no están duplicados en el conjunto
    const result = [...combinedSet].filter(item => {
      // Comprueba la cantidad de veces que aparece el elemento en los conjuntos originales
      const count = args.reduce((acc, curr) => acc + curr.includes(item), 0);
      return count % 2 !== 0; // Solo se incluyen los elementos que aparecen un número impar de veces
    });
    console.log(result); 
    return result;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);