const { romanoADecimal, generarPrimos, cifradoCesar } = require('../src/level2');

describe('Nivel 2 – Lógica y Condiciones', () => {
  // -----------------------------
  test('romanoADecimal: debería convertir números romanos correctamente', () => {
    expect(romanoADecimal('IV')).toBe(4);
    expect(romanoADecimal('IX')).toBe(9);
    expect(romanoADecimal('XL')).toBe(40);
    expect(romanoADecimal('XCIX')).toBe(99);
    expect(romanoADecimal('C')).toBe(100);
    expect(romanoADecimal('')).toBe(0);
    expect(romanoADecimal('ABC')).toBe(0);
    expect(romanoADecimal(123)).toBe(0);
  });

  // -----------------------------
  test('generarPrimos: debería generar array de primos hasta n', () => {
    expect(generarPrimos(10)).toEqual([2, 3, 5, 7]);
    expect(generarPrimos(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(generarPrimos(2)).toEqual([2]);
    expect(generarPrimos(1)).toEqual([]);
    expect(generarPrimos(0)).toEqual([]);
    expect(generarPrimos('no es número')).toEqual([]);
  });

  // -----------------------------
  test('cifradoCesar: debería codificar texto correctamente', () => {
    expect(cifradoCesar('ABC', 3)).toBe('DEF');
    expect(cifradoCesar('xyz', 3)).toBe('abc');
    expect(cifradoCesar('Hola Mundo!', 1)).toBe('Ipmb Nvoep!');
    expect(cifradoCesar('abc', 26)).toBe('abc');
    expect(cifradoCesar('abc', -1)).toBe('zab');
    expect(cifradoCesar(123, 3)).toBe('');
    expect(cifradoCesar('texto', 'no es número')).toBe('texto');
  });
});