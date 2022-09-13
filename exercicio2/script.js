/*Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número,
de 1 a 10.
Utilize o for...in para resolver*/

let inputUsuario = prompt("Digite um numero:")
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in tabuada) {
    console.log(`${tabuada[i]} x ${inputUsuario} = ${inputUsuario * tabuada[i]}`)
}

