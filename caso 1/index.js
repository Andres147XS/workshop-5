// le pagaron 2 500 000

let money = 2500000

let opcion = parseInt(prompt("================== Menu ==================\
\n Opcion 1: Almojabana con gaseosa  precio: 15.000 $\
\n Opcion 2: Subway con gaseosa      precio: 23.000 $\
\n Opcion 3: No deseo comprar nada \
\n\
\n indique la opcion que desee:"))

switch (opcion) {
    
    case 1: console.log("Ha seleccionado comprar almojabana con gaseosa:")
    console.log("le caerá mal porque lleva mucho en el stand")
    console.log("Le quedan "+(money - 15000)+" de dinero disponible: ")
    break;

    case 2: console.log("Ha seleccionado comprar subway con gaseosa:")
    console.log("estará llenito y bien")
    console.log("Le quedan "+(money - 23000)+" de dinero disponible: ")
    break;

    case 3: console.log("No desea comprar nada")
    console.log("le tocara comprar algo en Medellín")
    break;
}