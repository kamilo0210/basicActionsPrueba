/**
 * Búsqueda binaria en array ordenado
 * Retorna el índice del elemento o -1 si no existe
 */
function busquedaBinaria(array, objetivo) {
  if (!Array.isArray(array) || array.length === 0) {
    return -1;
  }
  
  let inicio = 0;
  let fin = array.length - 1;
  
  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    
    if (array[medio] === objetivo) {
      return medio;
    } else if (array[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }
  
  return -1;
}

/**
 * Valida si los paréntesis están balanceados
 * Soporta (), [], {}
 */
function validarParentesis(texto) {
  if (typeof texto !== 'string') {
    return false;
  }
  
  const pila = [];
  const pares = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const cerrados = [')', ']', '}'];
  
  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    
    if (pares[char]) {
      // Es apertura
      pila.push(char);
    } else if (cerrados.includes(char)) {
      // Es cierre
      if (pila.length === 0) {
        return false;
      }
      
      const ultimo = pila.pop();
      if (pares[ultimo] !== char) {
        return false;
      }
    }
  }
  
  return pila.length === 0;
}

/**
 * Comprime string usando Run-Length Encoding
 * Ejemplo: "aaabbc" -> "a3b2c1"
 */
function comprimirRLE(texto) {
  if (typeof texto !== 'string' || texto === '') {
    return '';
  }
  
  let resultado = '';
  let contador = 1;
  let caracterActual = texto[0];
  
  for (let i = 1; i < texto.length; i++) {
    if (texto[i] === caracterActual) {
      contador++;
    } else {
      resultado += caracterActual + contador;
      caracterActual = texto[i];
      contador = 1;
    }
  }
  
  // Agregar el último grupo
  resultado += caracterActual + contador;
  
  // Si la compresión es más larga, retornar el original
  if (resultado.length >= texto.length) {
    return texto;
  }
  
  return resultado;
}

module.exports = {
  busquedaBinaria,
  validarParentesis,
  comprimirRLE
};