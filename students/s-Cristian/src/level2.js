// --- Funcion 1 ---
/**
 * Capitaliza cada palabra de una oración (Title Case)
 */
function toTitleCase(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    return '';
  }

  const words = text.toLowerCase().trim().split(/\s+/);
  const capitalized = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const cap = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized.push(cap);
  }

  return capitalized.join(' ').trim();
}

// --- Funcion 2 ---
/**
 * Determina si una palabra es un isograma
 * (no tiene letras repetidas, ignorando mayúsculas/minúsculas)
 */

function isIsogram(word) {
  if (typeof word !== 'string' || word.trim() === '') {
    return false;
  }

  const seen = [];
  const lower = word.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    const char = lower[i];
    if (/[a-záéíóúüñ]/.test(char)) {
      if (seen.includes(char)) {
        return false;
      }
      seen.push(char);
    }
  }

  return true;
}


/**
 * Encuentra las palabras únicas de un texto (sin repetir)
 */
function uniqueWords(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    return [];
  }

  const stopwords = ['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'o', 'de'];
  const words = text
    .toLowerCase()
    .replace(/[^\wáéíóúüñ\s]/gi, '')
    .split(/\s+/)
    .filter(w => w && !stopwords.includes(w));

  const counts = {};
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    counts[w] = (counts[w] || 0) + 1;
  }

  const uniques = [];
  for (const w in counts) {
    if (counts[w] === 1) {
      uniques.push(w);
    }
  }

  return uniques;
}

module.exports = { toTitleCase, isIsogram, uniqueWords };
