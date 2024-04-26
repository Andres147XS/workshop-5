import { money } from "../caso-1/index.js";

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

money = money - 50000