// Ejercicio 15. Cobertura de domicilios
// Enunciado:
// Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
// cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
// primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km y
// hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
// cobertura".


const LIMITE_GRATIS = 3;
const COBERTURA_MAXIMA = 10;

const leerCantidad = (mensaje) => {
  let cantidad = Number(prompt(mensaje));
  while (isNaN(cantidad) || cantidad < 1 || cantidad !== Math.floor(cantidad)) {
    cantidad = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 1)"));
  }
  return cantidad;
};

const leerDistancias = (cantidad) => {
  let distancias = [];
  for (let i = 0; i < cantidad; i++) {
    distancias.push(Number(prompt("Distancia " + (i + 1) + ":")));
  }
  return distancias;
};

const obtenerEnvioGratis = (distancias) => {
  return distancias.filter((distancia) => distancia <= LIMITE_GRATIS);
};

const contarConEnvio = (distancias) => {
  let conEnvio = distancias.filter(
    (distancia) => distancia > LIMITE_GRATIS && distancia <= COBERTURA_MAXIMA
  );
  return conEnvio.length;
};

const buscarPrimeroFuera = (distancias) => {
  return distancias.find((distancia) => distancia > COBERTURA_MAXIMA);
};

const unirConComas = (lista) => {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    texto = texto + lista[i];
    if (i < lista.length - 1) {
      texto = texto + ", ";
    }
  }
  return texto;
};

let cantidad = leerCantidad("¿Cuántos pedidos?");
let distancias = leerDistancias(cantidad);

let gratis = obtenerEnvioGratis(distancias);
let contenidoGratis = unirConComas(gratis);
if (gratis.length === 0) {
  contenidoGratis = "(ninguno)";
}
console.log("Envío gratis (" + gratis.length + "): " + contenidoGratis);
console.log("Pagan envío: " + contarConEnvio(distancias));

let primeroFuera = buscarPrimeroFuera(distancias);
if (primeroFuera === undefined) {
  console.log("Todos los pedidos están en cobertura");
} else {
  console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
}
