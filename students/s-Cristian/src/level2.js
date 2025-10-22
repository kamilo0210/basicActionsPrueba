/**
 * Convierte números romanos a decimal (hasta 100)
 */
function romanoADecimal(romano) {
  if (typeof romano !== 'string' || romano === '') {
    return 0;
  }
  
  const valores = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100
  };
  
  let resultado = 0;
  let anterior = 0;
  
  for (let i = romano.length - 1; i >= 0; i--) {
    const valor = valores[romano[i]];
    if (!valor) {
      return 0;
    }
    
    if (valor < anterior) {
      resultado -= valor;
    } else {
      resultado += valor;
    }
    anterior = valor;
  }
  
  return resultado;
}

/**
 * Genera un array de números primos hasta n
 */
function generarPrimos(n) {
  if (typeof n !== 'number' || n < 2) {
    return [];
  }
  
  const primos = [];
  
  for (let num = 2; num <= n; num++) {
    let esPrimo = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
    
    if (esPrimo) {
      primos.push(num);
    }
  }
  
  return primos;
}

/**
 * Codifica texto con cifrado César
 */
function cifradoCesar(texto, desplazamiento) {
  if (typeof texto !== 'string') {
    return '';
  }
  if (typeof desplazamiento !== 'number') {
    return texto;
  }
  
  let resultado = '';
  const shift = desplazamiento % 26;
  
  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    
    if (char >= 'a' && char <= 'z') {
      const codigo = ((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97;
      resultado += String.fromCharCode(codigo);
    } else if (char >= 'A' && char <= 'Z') {
      const codigo = ((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65;
      resultado += String.fromCharCode(codigo);
    } else {
      resultado += char;
    }
  }
  
  return resultado;
}

module.exports = {
  romanoADecimal,
  generarPrimos,
  cifradoCesar
};