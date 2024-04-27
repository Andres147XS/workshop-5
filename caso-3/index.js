import { money } from "../caso-1/index.js";

function binaryToDecimal(binary) {
    return parseInt(binary,2);
}

function decimalToChar(decimal) {
    return String.fromCharCode(decimal);
}

const binaryPassword = "01110010_01101001_01110111_01101001";

const binaryArray = binaryPassword.split("_");

let password = "";
binaryArray.forEach(binary => {
    const decimal = binaryToDecimal(binary);
    const character = decimalToChar(decimal);
    password += character;
});

console.log("Contraseña descifrada:", password);

money = money - 50000