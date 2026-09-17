// En un almacén se ha establecido una promoción de las llantas marca “Ponchadas”, dicha
// promoción consiste en lo siguiente: Si se compran menos de cinco llantas el precio es de
// $300 cada una, de $250 si se compran de cinco a 10 y de $200 si se compran mas de 10.
// Obtener la cantidad de dinero que N personas tienen que pagar por cada una de las llantas
// que compra y la que tiene que pagar por el total de la compra.

const n = parseInt(prompt("Ingrese la cantidad de clientes: "));
let precio;
let cntllantas;
let pago;

for(let i = 1; i<=n; i++){
    cntllantas = parseInt(prompt("Ingrese la cantidad de llantas que compro: "));
    if(cntllantas < 5){
        precio = 300;
    }
    else if(cntllantas >=5 && cntllantas <=10){
        precio = 250;
    }else{
        precio = 200;
    }
    pago = cntllantas * precio;
    console.log(`El total a pagar del cliente ${i} es de: $${pago}`);
}
