// Ejercicio 7. Calificaciones de domicilios
// Enunciado:
// Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
// validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
// cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
// frecuente.

const CANTIDAD_CALIFICACIONES = 10;

const mostrarCalificacionInvalida = () => {
  console.log("Calificación inválida, debe ser un entero entre 1 y 5");
};

const leerCalificacionValida = (numero) => {
  let calificacion = Number(prompt("Calificación " + numero + ":"));
  while (isNaN(calificacion) || calificacion < 1 || calificacion > 5 ||
         calificacion !== Math.floor(calificacion)) {
    mostrarCalificacionInvalida();
    calificacion = Number(prompt("Calificación " + numero + ":"));
  }
  return calificacion;
};

const leerCalificaciones = (cantidad) => {
  let calificaciones = [];
  for (let i = 0; i < cantidad; i++) {
    calificaciones.push(leerCalificacionValida(i + 1));
  }
  return calificaciones;
};

const contarPorEstrellas = (calificaciones) => {
  let contadores = [0, 0, 0, 0, 0];
  for (let i = 0; i < calificaciones.length; i++) {
    let indice = calificaciones[i] - 1;
    contadores[indice] = contadores[indice] + 1;
  }
  return contadores;
};

const repetirCaracter = (caracter, veces) => {
  let texto = "";
  for (let i = 0; i < veces; i++) {
    texto = texto + caracter;
  }
  return texto;
};

const buscarPosicionMayor = (numeros) => {
  if (numeros.length === 0) {
    return -1;
  }
  let posicion = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[posicion]) {
      posicion = i;
    }
  }
  return posicion;
};

const mostrarGrafico = (contadores) => {
  for (let i = 0; i < contadores.length; i++) {
    let linea = "Estrellas " + (i + 1) + ":";
    if (contadores[i] > 0) {
      linea = linea + " " + repetirCaracter("*", contadores[i]);
    }
    linea = linea + " (" + contadores[i] + ")";
    console.log(linea);
  }
};

let calificaciones = leerCalificaciones(CANTIDAD_CALIFICACIONES);
let contadores = contarPorEstrellas(calificaciones);
mostrarGrafico(contadores);

let masFrecuente = buscarPosicionMayor(contadores) + 1;
console.log("Más frecuente: " + masFrecuente + " estrellas");
