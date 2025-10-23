const { toTitleCase, isIsogram, uniqueWords } = require('../src/level2');

describe('Level 2 – Lógica y Condiciones', () => {

  // -----------------------------
  test('toTitleCase: debería convertir texto a formato Título y manejar casos inválidos', () => {
    // Casos válidos
    expect(toTitleCase('hola mundo')).toBe('Hola Mundo');
    expect(toTitleCase('javaScript es genial')).toBe('Javascript Es Genial');
    expect(toTitleCase('  espacios   extras  ')).toBe('Espacios Extras');
    expect(toTitleCase('mAÑaNa dE sol')).toBe('Mañana De Sol');
    expect(toTitleCase('')).toBe('');
    expect(toTitleCase('   ')).toBe('');

    // Casos inválidos
    expect(toTitleCase(123)).toBe('');
    expect(toTitleCase(null)).toBe('');
    expect(toTitleCase(undefined)).toBe('');
  });

  // -----------------------------
  test('isIsogram: debería identificar correctamente si una palabra es un isograma y manejar casos inválidos', () => {
    // Casos válidos
    expect(isIsogram('murciélago')).toBe(true);
    expect(isIsogram('cereza')).toBe(false);
    expect(isIsogram('pingüino')).toBe(false);
    expect(isIsogram('lamp')).toBe(true);
    expect(isIsogram('Mundo')).toBe(true); // ignora mayúsculas
    expect(isIsogram('')).toBe(false);

    // Casos inválidos
    expect(isIsogram(123)).toBe(false);
    expect(isIsogram(null)).toBe(false);
    expect(isIsogram(undefined)).toBe(false);
    expect(isIsogram('    ')).toBe(false);
  });

  // -----------------------------
  test('uniqueWords: debería retornar las palabras únicas de un texto y manejar casos inválidos', () => {
    // Casos válidos
    const texto2 = 'Uno dos tres uno';
    expect(uniqueWords(texto2)).toEqual(['dos', 'tres']);

    const texto3 = 'Repite repite repite';
    expect(uniqueWords(texto3)).toEqual([]);

    const texto4 = 'Palabras únicas aquí';
    expect(uniqueWords(texto4)).toEqual(['palabras', 'únicas', 'aquí']);

    expect(uniqueWords('')).toEqual([]);
    expect(uniqueWords('   ')).toEqual([]);

    // Casos inválidos
    expect(uniqueWords(123)).toEqual([]);
    expect(uniqueWords(null)).toEqual([]);
    expect(uniqueWords(undefined)).toEqual([]);
  });
});
