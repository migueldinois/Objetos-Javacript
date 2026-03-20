const quantidadeNumerosRecentes = 5;

const sliderMin = document.querySelector('.intervalo__slider--min')
const sliderMax = document.querySelector('.intervalo__slider--max')

const botaoSortear = document.querySelector('.area__button')
const elementoNumero = document.querySelector('.area__numero')

const spanValorMin = document.querySelector('.intervalo__valor--min')
const spanValorMax = document.querySelector('.intervalo__valor--max')

const listaNumeros = document.querySelector('.historico__lista')
const botaoLimparHistorico = document.querySelector('.sorteador__limpar')

const mensagem = document.querySelector('.area__mensagem')



const atualizarValorSlider = () => {
    spanValorMin.textContent = inputMin.value
    spanValorMax.textContent = inputMax.value
}

sliderMin.addEventListener('input', atualizarValorSlider)
sliderMax.addEventListener('input', atualizarValorSlider)
atualizarValorSlider()

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};

