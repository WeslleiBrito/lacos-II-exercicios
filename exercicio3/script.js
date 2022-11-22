const multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numero = Number(prompt('Informe um número para ser criado a tabuada'))

for (let valor of multiplicador) {
    let multiplicacao = valor * numero
    console.log(multiplicacao)
}