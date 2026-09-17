// Un proveedor de estéreos ofrece un descuento del 10% sobre el precio sin IVA, de algún
// aparato si este cuesta $2000 o más. Además, independientemente de esto, ofrece un 5% de
// descuento si la marca es “NOSY”. Determinar cuánto pagaran, con IVA incluido, los clientes
// por la compra de su aparato.

let precio = 0;
let pago = 0;
let descuento = 0;
let marca = "";

const n = parseInt(prompt("Ingrese la cantidad de personas: "));
for(let i = 1; i<=n; i++){
    precio = parseFloat(prompt("Ingrese el precio del aparato: "));
    marca = prompt("Ingrese la marca del aparato: ");
    if(precio >= 2000){
        descuento = precio - (precio * 0.1);
    }else{
        descuento = precio;
    }

    if(marca == "NOSY" || marca == "nosy" || marca == "Nosy"){
        descuento = descuento - (descuento * 0.05);
    }
    console.log("IVA del 19% sobre el producto");
    pago = descuento + (descuento * 0.19);
    console.log(`La persona ${i} debe pagar un total de: $${pago} con IVA incluido`);
}