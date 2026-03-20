

// Pegando Elementos

const inputMin = document.querySelector('.intervalo__slider--min')
const inputMax = document.querySelector('.intervalo__slider--max')
const buttonSortear = document.querySelector('.area__button')
const resultadoNumero = document.querySelector('.area__numero')
const spanValorMin = document.querySelector('.intervalo__valor--min')
const spanValorMax = document.querySelector('.intervalo__valor--max')
const historicoLista = document.querySelector('.historico__lista')
const historicoNumeros = []

const validarInputs = () => {
    if (inputMin.value >= inputMax.value) {
        historicoLista.innerHTML = 'O Valor Minimo deve ser menor que o Valor Maximo'
        return false
    }
    else {
        return true
    }
};


function sortearNumero(min, max) {
    if (validarInputs()){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



function adicionarHistorico(numeroSorteado) {
    if (historicoNumeros.length < 5) {
        // Adicionando numero com o metodo push
        historicoNumeros.push(numeroSorteado)
    } else {
        // Slice primeiro numero = de onde vai começar
        // Slice segundo numro = quantidade que vai deletar apartir do primeiro
        // Slice terceiro numero = os items
        historicoNumeros.splice(0, 1, numeroSorteado)
    }
}

// Atualizacao do SLider
const atualizarValorSlider = () => {
    spanValorMin.textContent = inputMin.value
    spanValorMax.textContent = inputMax.value
}
inputMin.addEventListener('input', atualizarValorSlider)
inputMax.addEventListener('input', atualizarValorSlider)
atualizarValorSlider()
// Fim da atualizacao do slider


buttonSortear.addEventListener('click', () => {
    if (validarInputs()){
    valorMIn = Number(inputMin.value)
    valorMax = Number(inputMax.value)
    numeroSorteado = sortearNumero(valorMIn, valorMax)
    resultadoNumero.textContent = numeroSorteado

    adicionarHistorico(numeroSorteado)
    historicoNumeros.forEach((numero) => {
        historicoLista.innerHTML = `<li>${numero}</li>`
    })
}}

)



