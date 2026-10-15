
// Ejercicio 13. La lista con forEach
// Enunciado:
// Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
// idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
// mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?

const leerCantidad = (mensaje) => {
  let cantidad = Number(prompt(mensaje));
  while (isNaN(cantidad) || cantidad < 1 || cantidad !== Math.floor(cantidad)) {
    cantidad = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 1)"));
  }
  return cantidad;
};

const leerProductos = (cantidad) => {
  let productos = [];
  for (let i = 0; i < cantidad; i++) {
    productos.push(prompt("Producto " + (i + 1) + ":"));
  }
  return productos;
};

const mostrarLista = (productos) => {
  console.log("Lista del mercado:");
  productos.forEach((producto, indice) => {
    console.log((indice + 1) + ". " + producto);
  });
  console.log("Total: " + productos.length + " productos");
};

let cantidad = leerCantidad("¿Cuántos productos?");
let productos = leerProductos(cantidad);
mostrarLista(productos);

// RESPUESTA A LA PREGUNTA DE LA GUÍA:
// ¿Se puede detener un forEach a la mitad, como en existeEnLista?
//
// No. forEach siempre visita TODOS los elementos. Un "return" dentro del
// callback solo termina esa vuelta (equivale a un "continue"), no el
// recorrido completo, y "break" ni siquiera es válido dentro de un callback.
// (La única forma de frenarlo es lanzar una excepción, que no es una solución
// sana para esto.)
//
// Qué dice eso sobre cuándo usarlo:
//  - Usar forEach cuando hay que hacer algo con CADA elemento sin excepción
//    (imprimir una lista, sumar a un acumulador, etc.).
//  - NO usarlo cuando hay que parar apenas se cumpla algo (buscar, validar
//    "existe alguno"): ahí conviene for/while con return anticipado, o find.
// ------------------------------------------------------------
