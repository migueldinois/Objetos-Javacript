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

historicoNumeros = []


const validarInputs = () => {
    if (sliderMin.value >= sliderMax.value) {
        mensagem.textContent = 'O Valor Minimo deve ser menor que o Valor Maximo (Ajuste automatico aplicado!)'
        return false
    }
    else {
        return true
    }
};



// COMECO LOGICA ATUALIZAR VALOR SLIDE
const atualizarValorSlider = () => {

    spanValorMin.textContent = sliderMin.value
    spanValorMax.textContent = sliderMax.value
}

atualizarValorSlider()
// FIM LOGICA ATUALIZAR VALOR SLIDE

const sortearNumero = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const atualizarTexto = (elemento, valor) => {
    elemento.textContent = valor;
};


const adicionarHistorico = (numeroSorteado) => {

    const itemHistorico = document.createElement('li');
    itemHistorico.textContent = numeroSorteado

    itemHistorico.addEventListener('click', () => {
        // Copiando o numero ao clicar
        navigator.clipboard.writeText(numeroSorteado)
    });

    return itemHistorico
};

const atualizandoListaHistorico = (lista, item, limite) => {
    // Adiciona no primeiro da lista 
    lista.unshift(item); 
    // verifica se o tanto de itens da lista é maior que o limite
    if (lista.length > limite) {
        // se for, vai tirar o ultimo item da lista
        lista.pop(); 
    }
};


const limparHistorico = () => {
    if (confirm('Deseja realmente limpar o historico de sorteios?')){
        listaNumeros.textContent = '';
        elementoNumero.textContent = '0';
    }
}

botaoLimparHistorico.addEventListener('click', limparHistorico)

botaoSortear.addEventListener('click', () => {
    if (validarInputs()) {
        const valorMin = Number(sliderMin.value);
        const valorMax = Number(sliderMax.value);
        const numeroSorteado = sortearNumero(valorMin, valorMax);
        
        mensagem.textContent = ''

        atualizarTexto(elementoNumero,numeroSorteado)
        
        atualizandoListaHistorico(historicoNumeros, numeroSorteado, quantidadeNumerosRecentes);

        listaNumeros.innerHTML = ''; 
        // Pegando os items da lista e adiconando ao historico 
        historicoNumeros.forEach((numero) => {
            const itemListaHistorico = adicionarHistorico(numero);
            listaNumeros.appendChild(itemListaHistorico);
        });
    }
});

// Resolução do desafio


const validarIntervalo = () => {
    if (sliderMin.value >= sliderMax.value){
        sliderMax.value = sliderMin.value
        atualizarValorSlider()
        mensagem.textContent = 'O Valor Minimo deve ser menor que o Valor Maximo (Ajuste automatico aplicado!)'
    } else {
        atualizarValorSlider()
        mensagem.textContent = ''
    }
    
}

sliderMin.addEventListener('input', validarIntervalo)
sliderMax.addEventListener('input', validarIntervalo)