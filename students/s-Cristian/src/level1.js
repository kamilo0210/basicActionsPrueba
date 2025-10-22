/**
 * Invierte un string
 */
function invertirString(texto) {
  if (typeof texto !== 'string') {
    return '';
  }
  let resultado = '';
  for (let i = texto.length - 1; i >= 0; i--) {
    resultado += texto[i];
  }
  return resultado;
}

/**
 * Calcula el promedio de un array de números
 */
function calcularPromedio(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

/**
 * Cuenta las palabras en una oración
 */
function contarPalabras(texto) {
  if (typeof texto !== 'string' || texto.trim() === '') {
    return 0;
  }
  const palabras = texto.trim().split(/\s+/);
  return palabras.length;
}

module.exports = {
  invertirString,
  calcularPromedio,
  contarPalabras
};