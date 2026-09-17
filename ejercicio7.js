// 70 personas se encuentran con un problema de comprar un automóvil o un terreno, los
// cuales cuestan exactamente lo mismo. Sabe que mientras el automóvil se devalúa, con el
// terreno sucede lo contrario. Esta persona comprara el automóvil si al cabo de tres años la
// devaluación de este no es mayor que la mitad del incremento del valor del terreno. Ayúdale
// a estas personas a determinar si deben o no comprar el automóvil.
for (let i = 1; i <= 70; i++) {
    let persona =parseInt(prompt("Ingrese el nombre de la persona " + i + ": "));
    let devaluacion = parseFloat(prompt("Ingrese la devaluación del automóvil en porcentaje: "));
    let incremento = parseFloat(prompt("Ingrese el incremento del valor del terreno en porcentaje: "));
    let mitadIncremento = incremento / 2;
    if (devaluacion <= mitadIncremento) {
        console.log("La persona " + persona + " debe comprar el automóvil.");
    } else {
        console.log("La persona " + persona + " no debe comprar el automóvil.");
    }
} 