// Elementos
// Botoes
const btnAlimentar = document.querySelector('#btn-alimentar')
const btnBrincar = document.querySelector('#btn-brincar')
const btnStatus = document.querySelector('#btn-status')
const btnDefinirNome = document.querySelector('#btn-definir-nome')
// Fome
const valorFome = document.querySelector('#valor-fome')
const barraFome = document.querySelector('#barra-fome')
// Felicidade
const valorFelicidade = document.querySelector('#valor-Felicidade')
const barraFelicidade = document.querySelector('#barra-Felicidade')

const mensagemPet = document.querySelector('#mensagem-pet')
const inputNome = document.querySelector('#input-nome')
const displayNome = document.querySelector('.display__nome')



const atualizarBarraValor = () => {
    // Fome
    valorFome.style.width = pet.fome
    barraFome.style.width = pet.fome + '%';

    // Felicidade
    valorFelicidade.style.width = pet.felicidade
    barraFelicidade.style.width - pet.felicidade + '%';

}

const pet = {
    nome: undefined,
    fome: 50,
    felicidade: 50,
    energia: 100,

    alimentar() {
        this.fome -= 15

        this.felicidade += 5
        if (this.felicidade > 100) {
            this.felicidade = 100
        }
        this.energia -= 5
        if (this.energia < 0) {
            this.energia = 0
        }
    },

    brincar() {
        this.felicidade += 20
        this.fome += 10
        if (this.energia > 20) {
            this.energia -= 15
        } else if (this.energia < 20) {
            mensagemPet.textContent = 'Estou muito cansado para brincar!'
        }

    }
}


btnBrincar.addEventListener('click', () => {
    pet.brincar()
    console.log(pet)
    atualizarBarraValor()

})

btnDefinirNome.addEventListener('click', () => {
    if (inputNome.value === '') {
        mensagemPet.textContent = 'Você deve preencher um nome para o seu bixinho!'
    } else {
        pet.nome = inputNome.value
        displayNome.textContent = pet.nome
    }

})
