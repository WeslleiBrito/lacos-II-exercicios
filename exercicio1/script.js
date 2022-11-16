const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

// Método fácil
console.log('Método simplificado!')
for (let i = 0; i < array.length; i++) {
    let gols = array[i].join(', ')
    console.log(`Jogador ${i + 1}: ${gols}`)
}

// Método complexo
console.log('\nMétodo complexo!')
let arrayString = ''
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (j === 0) {
            arrayString += array[i][j]
        } else {
            arrayString += ', ' + array[i][j]
        }
    }
    console.log(`Jogador ${i + 1}: ${arrayString}`)
    arrayString = ''
}