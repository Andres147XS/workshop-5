/**Caso 4
al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con 
la la vocal i así que todo lo que dirá es con la vocal “i”pedir el taxi. 
Convertir: "Taxi me puede llevar al hotel mariposas amarillas" */

let prayer = "Taxi me puede llevar al hotel mariposas amarillas"

let array = prayer.slice("")

let arr = []

for (i in array){
    if(array[i] == "a" || array[i] == "e" || array[i] == "o" || array[i] == "u"){
        arr.push("i")
    }else{
        arr.push(array[i])
    }
}

console.log(arr.join(""))