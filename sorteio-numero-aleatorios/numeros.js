

// Pegando Elementos

const inputMin = document.querySelector('.intervalo__slider intervalo__slider--min')
const inputMax = document.querySelector('.intervalo__slider intervalo__slider--max')
const buttonSortear = document.querySelector('.area__button')

const historicoNumeros = []

function validarCampos(valor1, valor2){
    if (valor1 == '' || valor2 == '') {
        mensagemResultado.textContent = 'Você deve preencher todos os campos'
        return false

    } else if (isNaN(valor1 || isNaN(valor2))){
        mensagemResultado.textContent = 'Digite apenas numeros'
        return false

    } else if (valor1 >= valor2) {
        mensagemResultado.textContent = 'O Valor Minimo deve ser menor que o Valor Maximo'
        return false
    } 
    else {
        return true
    }
}

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adicionarHistorico(numeroSorteado) {
    if (historicoNumeros.length < 5) {
        // Adicionando numero com o metodo push
        historicoNumeros.push(numeroSorteado)
    } else {
        // Deletando o primeiro numero da lista
        delete historicoNumeros[0]
    }
} 


buttonSortear.addEventListener('click', () =>{

    alert('Ivo você é top, eu consegui ta mt facin')
})

