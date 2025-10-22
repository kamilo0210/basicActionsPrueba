const { busquedaBinaria, validarParentesis, comprimirRLE } = require('../src/level3');

describe('Nivel 3 – Algoritmos y Métricas', () => {
  // -----------------------------
  test('busquedaBinaria: debería encontrar elementos en array ordenado', () => {
    expect(busquedaBinaria([1, 3, 5, 7, 9], 5)).toBe(2);
    expect(busquedaBinaria([1, 3, 5, 7, 9], 1)).toBe(0);
    expect(busquedaBinaria([1, 3, 5, 7, 9], 9)).toBe(4);
    expect(busquedaBinaria([1, 3, 5, 7, 9], 4)).toBe(-1);
    expect(busquedaBinaria([10], 10)).toBe(0);
    expect(busquedaBinaria([], 5)).toBe(-1);
    expect(busquedaBinaria('no es array', 5)).toBe(-1);
  });

  // -----------------------------
  test('validarParentesis: debería validar paréntesis balanceados', () => {
    expect(validarParentesis('()')).toBe(true);
    expect(validarParentesis('()[]{}')).toBe(true);
    expect(validarParentesis('({[]})')).toBe(true);
    expect(validarParentesis('Hola (mundo [test])')).toBe(true);
    expect(validarParentesis('(()')).toBe(false);
    expect(validarParentesis('({[}])')).toBe(false);
    expect(validarParentesis(')(')).toBe(false);
    expect(validarParentesis('')).toBe(true);
    expect(validarParentesis(123)).toBe(false);
  });

  // -----------------------------
  test('comprimirRLE: debería comprimir strings correctamente', () => {
    expect(comprimirRLE('aaabbc')).toBe('aaabbc'); 
    expect(comprimirRLE('aaaaaa')).toBe('a6'); 
    expect(comprimirRLE('abcd')).toBe('abcd'); 
    expect(comprimirRLE('aabbcc')).toBe('aabbcc'); 
    expect(comprimirRLE('zzzzz')).toBe('z5'); 
    expect(comprimirRLE('aaaa')).toBe('a4'); 
    expect(comprimirRLE('')).toBe('');
    expect(comprimirRLE(123)).toBe('');
  });
});