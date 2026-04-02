
// HTML, e estilizacao:

const dateContainer = document.createElement('div')
const hourContainer = document.createElement('div')
const dayOfWeekContainer = document.createElement('div')


// Adicionando o containenr principal no bodyy
function createElement(elemento) {
    document.body.append(elemento)
}

createElement(dateContainer)
createElement(hourContainer)
createElement(dayOfWeekContainer)

// Funcoes para logica  

 function updateTimer() {
    const now = new Date();
    dateContainer.textContent = now.toLocaleDateString()
    hourContainer.textContent = now.toLocaleTimeString()
    dayOfWeekContainer.textContent = now.toLocaleString('pt-br', {weekday: 'long'})
    
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