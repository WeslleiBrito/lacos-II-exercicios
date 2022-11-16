const multiplcadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numero = Number(prompt('Informe um número para criar a tabuada.'))

for (indice in multiplcadores) {
    console.log(multiplcadores[indice] * numero)
}