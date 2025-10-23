const { bubbleSort, longitudSubcadenaUnica, procesarCola } = require('../src/level3');

describe('Nivel 3 – Algoritmos y Métricas', () => {

  // -----------------------------
  test('bubbleSort: debería ordenar correctamente un array y manejar casos inválidos', () => {
    // Casos válidos
    expect(bubbleSort([5, 2, 8, 1, 3])).toEqual([1, 2, 3, 5, 8]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]); // ya ordenado
    expect(bubbleSort([9, 9, 9])).toEqual([9, 9, 9]); // todos iguales
    expect(bubbleSort([])).toEqual([]); // vacío
    expect(bubbleSort([3])).toEqual([3]); // un solo elemento

    // Casos inválidos
    expect(bubbleSort('no es array')).toEqual([]);
    expect(bubbleSort(null)).toEqual([]);
    expect(bubbleSort(undefined)).toEqual([]);
  });

  // -----------------------------
  test('longitudSubcadenaUnica: debería calcular la longitud de la subcadena sin repetir más larga y manejar casos inválidos', () => {
    // Casos válidos
    expect(longitudSubcadenaUnica('abcabcbb')).toBe(3); // "abc"
    expect(longitudSubcadenaUnica('bbbbb')).toBe(1); // "b"
    expect(longitudSubcadenaUnica('pwwkew')).toBe(3); // "wke"
    expect(longitudSubcadenaUnica('')).toBe(0);
    expect(longitudSubcadenaUnica('abcdef')).toBe(6); // todo único
    expect(longitudSubcadenaUnica('aab')).toBe(2); // "ab"

    // Casos inválidos
    expect(longitudSubcadenaUnica(12345)).toBe(0);
    expect(longitudSubcadenaUnica(null)).toBe(0);
    expect(longitudSubcadenaUnica(undefined)).toBe(0);
  });

  // -----------------------------
  test('procesarCola: debería procesar tareas según prioridad y manejar casos inválidos', () => {
    // Casos válidos
    const tareas = [
      { nombre: 'Lavar platos', prioridad: 2 },
      { nombre: 'Estudiar', prioridad: 1 },
      { nombre: 'Ver TV', prioridad: 3 }
    ];
    expect(procesarCola(tareas)).toEqual([
      'Ejecutando: Estudiar (prioridad 1)',
      'Ejecutando: Lavar platos (prioridad 2)',
      'Ejecutando: Ver TV (prioridad 3)'
    ]);

    // Ignora tareas inválidas
    const conInvalidas = [
      { nombre: 'Comer', prioridad: 1 },
      { nombre: 123, prioridad: 1 },
      { nombre: 'Dormir', prioridad: 5 },
      null
    ];
    expect(procesarCola(conInvalidas)).toEqual(['Ejecutando: Comer (prioridad 1)']);

    // Casos límites
    expect(procesarCola([])).toEqual([]);
    expect(procesarCola(null)).toEqual([]);
    expect(procesarCola('no es array')).toEqual([]);
  });
});
