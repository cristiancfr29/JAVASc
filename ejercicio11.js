const precio = parseFloat(prompt("Ingrese el precio del kilo de manzana: "));
let kilos = 0;
let pago = 0;
let descuento = 0;
const n = parseInt(prompt("Ingrese la cantidad de clientes: "));
for(let i = 1; i <= n; i++){
    kilos = parseFloat(prompt("Ingrese la cantidad de kilos que desea comprar: "));
    if(kilos <= 2){
        pago = kilos * precio;
    }else if(kilos >= 2.01 && kilos <= 5){
        descuento = precio - (precio * 0.1);
        pago = kilos * descuento;
    }else if(kilos >= 5.01 && kilos <= 10){
        descuento = precio - (precio * 0.15);
        pago = kilos * descuento;
    }else if(kilos >= 10.01){
        descuento = precio - (precio * 0.2);
        pago = kilos * descuento;
    }
    console.log(`El cliente ${i} debe pagar un total de: $${pago}`);
}