/*la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40 cm (largo) x 20 cm (ancho)*/
/*Hildebrando que va a abordar tiene una maleta de 60 cm (alto) x 40 cm (largo)x 20x cm*/

let array = []

let heigth = (55/60)
array.push(heigth)

let long = (40/40)
array.push(long)

let width = (20/20)
array.push(width)

console.log(array)

let min = Math.min(...array)
console.log(min)

let newHeigth = (min*60)
let newLong = (min*40)
let newWidth = (min*20)

console.log("El factor de reduccion para el alto es de: "+newHeigth)
console.log("El factor de reduccion para el largo es de: "+newLong)
console.log("El factor de reduccion para el largo es de: "+newWidth)