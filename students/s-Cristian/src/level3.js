// --- Funcion 1 ---
/**
 * Ordena un array usando el algoritmo Bubble Sort
 * Retorna un nuevo array ordenado sin modificar el original.
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const resultado = [...arr];
  const n = resultado.length;

  for (let i = 0; i < n - 1; i++) {
    let cambiado = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (resultado[j] > resultado[j + 1]) {
        const temp = resultado[j];
        resultado[j] = resultado[j + 1];
        resultado[j + 1] = temp;
        cambiado = true;
      }
    }

    // Si no hubo intercambios, ya está ordenado
    if (!cambiado) break;
  }

  return resultado;
}


// --- Funcion 2 ---
/**
 * Encuentra la subsecuencia más larga de caracteres sin repetir
 * Ejemplo: "abcabcbb" → 3 ("abc")
 */
function longitudSubcadenaUnica(texto) {
  if (typeof texto !== 'string') {
    return 0;
  }

  let maxLongitud = 0;
  let inicio = 0;
  const mapa = new Map();

  for (let fin = 0; fin < texto.length; fin++) {
    const char = texto[fin];

    if (mapa.has(char) && mapa.get(char) >= inicio) {
      inicio = mapa.get(char) + 1;
    }

    mapa.set(char, fin);
    maxLongitud = Math.max(maxLongitud, fin - inicio + 1);
  }

  return maxLongitud;
}


// --- Funcion 3 ---
/**
 * Simula un algoritmo de cola de tareas (task queue)
 * Las tareas son objetos con prioridad (1 = alta, 2 = media, 3 = baja)
 * Siempre ejecuta primero las tareas de mayor prioridad.
 */
function procesarCola(tareas) {
  if (!Array.isArray(tareas) || tareas.length === 0) {
    return [];
  }

  const prioridadesValidas = [1, 2, 3];
  const colaFiltrada = tareas.filter(
    t => t && typeof t.nombre === 'string' && prioridadesValidas.includes(t.prioridad)
  );

  colaFiltrada.sort((a, b) => a.prioridad - b.prioridad);

  const resultados = [];

  for (let i = 0; i < colaFiltrada.length; i++) {
    const tarea = colaFiltrada[i];
    resultados.push(`Ejecutando: ${tarea.nombre} (prioridad ${tarea.prioridad})`);
  }

  return resultados;
}

module.exports = { bubbleSort, longitudSubcadenaUnica, procesarCola };
