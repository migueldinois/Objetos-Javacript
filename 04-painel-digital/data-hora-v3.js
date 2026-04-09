
// HTML, e estilizacao:

const greetingMessage = document.createElement('div')
const hourContainer = document.createElement('div')
const dayOfWeekContainer = document.createElement('div')
const buttonsDiv = document.createElement('div')

// Botoes
const darkModeButton = document.createElement('button')
const lightModeButton = document.createElement('button')

// Config
const config = {
    idioma: 'pt-br'
}


// Horas e datas
const now = new Date();
const weekDay = now.toLocaleString(config.idioma, { weekday: 'long' })
const day = now.toLocaleString(config.idioma, { day: '2-digit' })
const month = now.toLocaleString(config.idioma, { month: 'long' })
const year = now.toLocaleString(config.idioma, { year: 'numeric' })



// Adicionando o containenr principal no bodyy
function createElement(elemento) {
    document.body.append(elemento)
}

createElement(greetingMessage)
createElement(hourContainer)
createElement(dayOfWeekContainer)
createElement(buttonsDiv)
buttonsDiv.appendChild(darkModeButton)
buttonsDiv.appendChild(lightModeButton)

// Estilos
// 1. Objeto de Estilos (Dicionário CSS)
const darkTheme = {
    corpo: {
        backgroundColor: '#121212',
        color: '#00ff99',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)'
    },
    boasVindas: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    dataInfo: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    },
    botao: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#00844f',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

const lightTheme = {
    corpo: {
        backgroundColor: '#ffffff',
        color: '#222222',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
    },
    boasVindas: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: '#333333'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold',
        color: '#111111'
    },
    dataInfo: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#555555',
        opacity: '0.9'
    },
    botao: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#00c073',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}


// Funcoes para logica  

function getGreeting() {
    // Criando objeto data
    const now = new Date()
    const hours = now.getHours()

    if (hours < 12) { return 'Bom dia' }
    if (hours < 18) { return 'Boa tarde' }
    if (hours >= 18) { return 'Boa noite' }
}


function updateTimer() {
    const now = new Date();

    hourContainer.textContent = now.toLocaleTimeString(config.idioma)


}

function updateAll() {

    greetingMessage.textContent = `Olá, ${getGreeting()}`
    dayOfWeekContainer.textContent = `${weekDay}, ${day} de ${month} de ${year} `
}

updateAll()
updateTimer()
setInterval(updateTimer, 1000)

//  

function applyStyles(elemento, estilo) {
    Object.assign(elemento.style, estilo);
}

function darkModeAction() {
    applyStyles(document.body, darkTheme.corpo)
    applyStyles(greetingMessage, darkTheme.boasVindas);
    applyStyles(hourContainer, darkTheme.relogio);
    applyStyles(dayOfWeekContainer, darkTheme.dataInfo);

}
function lightModeAction() {
    applyStyles(document.body, lightTheme.corpo)
    applyStyles(greetingMessage, lightTheme.boasVindas);
    applyStyles(hourContainer, lightTheme.relogio);
    applyStyles(dayOfWeekContainer, lightTheme.dataInfo);
}


// Estilizando os botoes
applyStyles(darkModeButton, darkTheme.botao)
darkModeButton.textContent = 'Modo escuro'

applyStyles(lightModeButton, lightTheme.botao)
lightModeButton.textContent = 'Modo claro'

buttonsDiv.style.display = 'flex'
buttonsDiv.style.gap = '20px'

darkModeButton.addEventListener('click', darkModeAction)
lightModeButton.addEventListener('click', lightModeAction)

darkModeAction()