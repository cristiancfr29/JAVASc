// Ejercicio 1. Lista del mercado
// Enunciado:
// Pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un array.
// Al final mostrar la lista numerada desde 1 y el total de productos


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
  for (let i = 0; i < productos.length; i++) {
    console.log((i + 1) + ". " + productos[i]);
  }
  console.log("Total: " + productos.length + " productos");
};

let cantidad = leerCantidad("¿Cuántos productos?");
let productos = leerProductos(cantidad);
mostrarLista(productos);
