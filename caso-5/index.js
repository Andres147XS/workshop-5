import { money } from "../caso-1";
/*cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido,
 asi que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, 
 le pagara los 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. 
 Si hay empata, no pasa nada.

si el taxista gana, se descontará del dinero disponible */

let taxDriver = prompt("Señor taxista ingrese piedra papel o tijera: ").toLowerCase()
let passenger = prompt("Señor pasajero ingrese piedra papel o tijera: ").toLowerCase()

if (taxDriver === "piedra" && passenger === "piedra"){
    console.log("Empate")
}else if(taxDriver === "papel" && passenger === "papel"){
    console.log("Empate")
}else if (taxDriver === "tijera" && passenger === "tijera"){
    console.log("Empate")
}

if (taxDriver === "piedra" && passenger === "tijera"){
    console.log("Gana el taxista y el pasajero paga 300.000$")
    money = money - 300000
}else if(taxDriver === "papel" && passenger === "piedra"){
    console.log("Gana el taxista y el pasajero paga 300.000$")
    money = money - 300000
}else if (taxDriver === "tijera" && passenger === "papel"){
    console.log("Gana el taxista y el pasajero paga 300.000$")
    money = money - 300000
}else{
    console.log("Gana el pasajero y no paga la carrera")
}