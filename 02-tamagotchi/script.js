// Elementos
// Botoes
const btnAlimentar = document.querySelector('.btn-alimentar')
const btnBrincar = document.querySelector('.btn-brincar')
const btnStatus = document.querySelector('.btn-status')
// Fome
const valorFome = document.querySelector('.valor-fome')
const barraFome = document.querySelector('.barra-fome')
// Felicidade
const valorFelicidade = document.querySelector('.valor-Felicidade')
const barraFelicidade = document.querySelector('.barra-Felicidade')









const pet = {
    nome: undefined,
    fome: 50,
    felicidade: 50,
    energia: 100,

    
    alimentar() {
        this.fome -= 15
        if (this.fome < 0){
            this.fome = 0
        }
        this.felicidade += 5
        if (this.felicidade > 100){
            this.felicidade = 100
        }
        this.energia -= 5
        if (this.energia < 0){
            this.energia = 0
        }
    }
}

