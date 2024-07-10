let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: 85.9,
    engordar(p = 0) {
        console.log('Engordou!')
        this.peso += p
    },
    emagreceu(p = 0) {
        console.log('Emagreceu!')
        this.peso -= p
    }
}
amigo.emagreceu(35)
amigo.engordar(100)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)