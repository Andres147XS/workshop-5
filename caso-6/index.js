import { money } from "../caso-1/index.js";

let days = 0
let dead = 0

while (days < 4) {
  let option = parseInt(
    prompt(
      "============ LISTA DE OPCIONES ============\
    \n Opcion 1: Amarillo / Ir a piscina\
    \n Opcion 2: Verde / Caminata\
    \n Opcion 3: Rojo / Actividades en la playa\
    \n Opcion 4: Azul / Actividades dentro del hotel\
    \n Indique la opcion que desee: "
    )
  );
  switch (option) {
    case 1:
      console.log("Ha seleccionado amarillo podrá disfutar de la piscina");

      let option1 = prompt(
        "¿Desea ingresar a la piscina? tenga en cuenta que el agua huele raro (si/no)"
      );
      if (option1 == "si") {
        console.log(
          "Usted ha ingresado a la piscina por lo tanto fallece (Terminan las vacaciones)"
        );
        dead = days
        days = 5
      } else {
        console.log(
          "Usted no ha ingresado a la piscina, puede disfrutar su estadía fuera de ella");
          days = days+1
      }
      break;

    case 2:
      console.log("Ha seleccionado verde podrá disfutar de la caminata");

      let option2 = prompt(
        "¿Desea permanecer en la caminata hasta que finalice? (si/no)"
      );
      if (option2 == "si") {
        console.log("Ira a una hermosa cascada y se tomará fotos");
        days = days+1
      } else {
        console.log(
          "Usted no deseó continuar en la caminata le toco devolverse solo y como ya es de noche se perdió"
        );
        dead = days
        days = 5
      }
      break;

    case 3:
      console.log(
        "Ha seleccionado rojo podrá disfutar de las actividades en la playa"
      );

      let option3 = parseInt(
        prompt(
          "Indique que desea realizar: \
        \n Opcion 1: Jugar Voleibol\
        \n Opcion 2: Nadar en el mar y montar moto\
        \n Opcion 3: Tomar cocteles"
        )
      );

      if (option3 == 1) {
        console.log("Ha seleccionado Jugar Voleibol, La pasaras genial");
        days = days+1
      }
      if (option3 == 2) {
        console.log(
          "Ha seleccionado nadar y montar moto, disfrutalo al maximo"
        );
        days = days+1
      }
      if (option3 == 3) {
        console.log(
          "Ha seleccionado tomar cocteles, el trago está adulterado, te enfermaste y terminan las vacaciones"
        );
        dead = days
        days = 6
      }

      break;

    case 4:
      console.log(
        "Ha seleccionado azul podrá disfutar de las actividades dentro del hotel"
      );
      let option4 = parseInt(
        prompt(
          "Indique que desea realizar dentro del hotel: \
        \n Opcion 1: Jugar Bingo\
        \n Opcion 2: Bailar\
        \n Opcion 3: Apostar"
        )
      );

      if (option4 == 1) {
        console.log("Seleccionaste Jugar Bingo, Felicitaciones ganaste 300.000$");
        money = money + 300000
        days = days+1
      }
      if (option4 == 2) {
        console.log("Seleccionaste Bailar, Que la pases super bien");
        days = days+1
      }
      if (option4 == 3) {
        console.log(
          "Seleccionaste Apostar, Has perdido "+money+" y solo te queda el tiquete de vuelta, terminan las vacaciones"
        );
        dead = days
        days = 6
      }
      break;
  }
}

if(days == 4){
    console.log("Hildebrando termino sus vacaciones satisfactoriamente y duró "+days+" días en Macondo")
}

if(days == 5){
    console.log("Hildebrando ha muerto en las vacaciones "+dead+" y duró "+days+" días en Macondo")
}

if(days == 6){
    console.log("Usted termino las vacaciones antes de tiempo En Macondo")
}

console.log("Hildebrando se gastó "+money+" pesos en su viaje")