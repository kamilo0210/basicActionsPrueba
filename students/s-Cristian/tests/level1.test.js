const { countCharacter, multiplyArray, joinWithHyphen } = require('../src/level1');

describe('Level 1 – Funciones Básicas', () => {

  // -----------------------------
  test('countCharacter: debería contar correctamente las apariciones de un carácter y manejar errores', () => {
    // Casos válidos
    expect(countCharacter('banana', 'a')).toBe(3);
    expect(countCharacter('BANANA', 'a')).toBe(3); // case-insensitive
    expect(countCharacter('murciélago', 'm')).toBe(1);
    expect(countCharacter('abc', 'z')).toBe(0);

    // Casos inválidos
    expect(() => countCharacter(123, 'a')).toThrow();
    expect(() => countCharacter('texto', 1)).toThrow();
    expect(() => countCharacter('texto', 'ab')).toThrow(); // más de un carácter
    expect(() => countCharacter(['a'], 'a')).toThrow();
  });

  // -----------------------------
  test('multiplyArray: debería multiplicar todos los números correctamente y manejar errores', () => {
    // Casos válidos
    expect(multiplyArray([2, 3, 4])).toBe(24);
    expect(multiplyArray([1, 5, 10])).toBe(50);
    expect(multiplyArray([5])).toBe(5);
    expect(multiplyArray([])).toBe(0); // arreglo vacío

    // Casos inválidos
    expect(() => multiplyArray('no array')).toThrow();
    expect(() => multiplyArray(123)).toThrow();
    expect(() => multiplyArray(null)).toThrow();
  });

  // -----------------------------
  test('joinWithHyphen: debería unir palabras con guiones y manejar errores', () => {
    // Casos válidos
    expect(joinWithHyphen(['hola', 'mundo'])).toBe('hola-mundo');
    expect(joinWithHyphen(['uno', 'dos', 'tres'])).toBe('uno-dos-tres');
    expect(joinWithHyphen(['solito'])).toBe('solito');
    expect(joinWithHyphen([])).toBe(''); // arreglo vacío

    // Casos inválidos
    expect(() => joinWithHyphen('hola')).toThrow();
    expect(() => joinWithHyphen(123)).toThrow();
    expect(() => joinWithHyphen(['hola', 2, 'mundo'])).toThrow();
    expect(() => joinWithHyphen([true, false])).toThrow();
  });
});
