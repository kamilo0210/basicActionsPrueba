// --- Funcion 1 ---
// Devuelve cuántas veces aparece un carácter específico en un texto
function countCharacter(text, char) {
  if (typeof text !== 'string' || typeof char !== 'string' || char.length !== 1) {
    throw new Error('Both arguments must be strings, and the second must be a single character');
  }
  return [...text].filter(c => c.toLowerCase() === char.toLowerCase()).length;
}

// --- Funcion 2 ---
// Multiplica todos los números en un arreglo
function multiplyArray(nums) {
  if (!Array.isArray(nums)) throw new Error('Input must be an array');
  if (nums.length === 0) return 0;
  return nums.reduce((product, num) => product * num, 1);
}

// --- Funcion 3 ---
// Une un arreglo de palabras en una sola cadena, separadas por guiones
function joinWithHyphen(words) {
  if (!Array.isArray(words)) throw new Error('Input must be an array');
  if (words.some(word => typeof word !== 'string')) {
    throw new Error('All elements in the array must be strings');
  }
  return words.join('-');
}

module.exports = { countCharacter, multiplyArray, joinWithHyphen };
