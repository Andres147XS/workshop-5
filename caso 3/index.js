/*Caso 3

ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar a las 3 am 
para Macondo, se encuentra con el problema de que el wifi del aeropuerto está fallando, y necesita asegurar 
su reserva en el hotel para el siguiente día, caminando por el aeropuerto encuentra wifi, la red se llama "
 ElPassEs: 01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números binarios, además cobran 50.000 la hora.
Tienen que crear un código que convierta los números binarios, a decimales y luego a caracteres */

// Función para convertir un número binario a decimal
function binaryToDecimal(binary) {
    return parseInt(binary,2);
}

// Función para convertir un decimal a un caracter ASCII
function decimalToChar(decimal) {
    return String.fromCharCode(decimal);
}

// Contraseña en números binarios
const binaryPassword = "01110010_01101001_01110111_01101001";

// Separar los números binarios por el guion bajo "_"
const binaryArray = binaryPassword.split("_");

// Convertir cada número binario a decimal y luego a caracter
let password = "";
binaryArray.forEach(binary => {
    const decimal = binaryToDecimal(binary);
    const character = decimalToChar(decimal);
    password += character;
});

// Imprimir la contraseña
console.log("Contraseña descifrada:", password);
