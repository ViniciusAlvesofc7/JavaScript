let num = [3, 7, 5, 4, 6]

//num.push(1)

num.sort()

console.log(`nosso Vetor é o ${num}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('o valor não foi enccontrado')
} else {
     console.log(`valor 4 está na posição ${pos}`)
}