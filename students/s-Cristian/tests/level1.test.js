const { invertirString, calcularPromedio, contarPalabras } = require('../src/level1');

describe('Nivel 1 – Funciones Básicas', () => {
  // -----------------------------
  test('invertirString: debería invertir strings correctamente', () => {
    expect(invertirString('hola')).toBe('aloh');
    expect(invertirString('JavaScript')).toBe('tpircSavaJ');
    expect(invertirString('12345')).toBe('54321');
    expect(invertirString('')).toBe('');
    expect(invertirString(123)).toBe('');
    expect(invertirString(null)).toBe('');
  });

  // -----------------------------
  test('calcularPromedio: debería calcular el promedio correctamente', () => {
    expect(calcularPromedio([10, 20, 30])).toBe(20);
    expect(calcularPromedio([5])).toBe(5);
    expect(calcularPromedio([1, 2, 3, 4, 5])).toBe(3);
    expect(calcularPromedio([])).toBe(0);
    expect(calcularPromedio('no es array')).toBe(0);
    expect(calcularPromedio(null)).toBe(0);
  });

  // -----------------------------
  test('contarPalabras: debería contar palabras correctamente', () => {
    expect(contarPalabras('Hola mundo')).toBe(2);
    expect(contarPalabras('  Espacios   múltiples   entre   palabras  ')).toBe(4);
    expect(contarPalabras('Una')).toBe(1);
    expect(contarPalabras('')).toBe(0);
    expect(contarPalabras('   ')).toBe(0);
    expect(contarPalabras(123)).toBe(0);
  });
});