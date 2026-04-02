
// HTML, e estilizacao:

const dateContainer = document.createElement('div')
const hourContainer = document.createElement('div')
const dayOfWeekContainer = document.createElement('div')

// Adicionando o containenr principal no bodyy
document.body.append(dateContainer, hourContainer, dayOfWeekContainer)

// Funcoes para logica  

 function updateTimer() {
    const now = new Date();
    const weekDay = now.toLocaleString('pt-br', {weekday: 'long'})
    const day = now.toLocaleString('pt-br', {day:'2-digit'})
    const month = now.toLocaleString('pt-br', {month:'long'})
    const year = now.toLocaleString('pt-br', {year:'2-digit'})
    dateContainer.textContent = now.toLocaleDateString()
    hourContainer.textContent = now.toLocaleTimeString()
    dayOfWeekContainer.textContent = `${weekDay}, `
    
 }

 updateTimer()
 setInterval(updateTimer, 1000)

//  

function applyStyles() {
    const bodyTag = document.body.style;
    bodyTag.display = 'flex';
    bodyTag.justifyContent = 'center';
    bodyTag.alignItems = 'center';
    bodyTag.flexDirection = 'column';
    bodyTag.height = '100vh';
    bodyTag.fontSize = '40px';
    bodyTag.backgroundColor = 'blue';
    bodyTag.color = 'red';
}

applyStyles()

function getGreeting() {
    // Criando objeto data
    const now = new Date()
    const hours = now.getHours()
 
    if (hours < 12) { return 'Bom dia' }
    if (hours < 18) { return 'Boa tarde' }
    if (hours > 18) { return 'Boa noite' }
 }
 