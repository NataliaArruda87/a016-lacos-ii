/*Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, 
como no exemplo abaixo:
Utilize o for...of para resolver */

let paises = ["Egito", "Vietnã", "Italia", "Inglaterra", "Japão"]
let rank = 1

for(let j of paises) {
    console.log(`${rank++} - ${j}`)
}
