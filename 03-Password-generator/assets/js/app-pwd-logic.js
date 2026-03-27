/* Seleciona os elementos do DOM usando o método querySelector, que retorna o primeiro elemento 
que corresponde ao seletor CSS especificado */


// Elemento do controle deslizante
const controleDeslizante = document.querySelector('.app-pwd__slider')
// Botão de gerar senha
const btnGerarSenha = document.querySelector('.app-pwd__button')
//Botão para limpar o histórico de senhas
const btnLimparHistorico = document.querySelector('.app-pwd__button--clear')
// Elemento que mostra o tamanho da senha
const tamanhoSenha = document.querySelector('.app-pwd__size')
// Elemento que exibe a senha gerada
const displaySenha = document.querySelector('.app-pwd__output')
// Container da senha gerada
const containerSenha = document.querySelector('.app-pwd__result')
// Elemento de saudação
const displaySaudacao = document.querySelector('.app-pwd__welcome')
// Elemento de data e hora
const elementoDataeHora = document.querySelector('.app-pwd__datetime')






// Objeto que contém os conjuntos de caracteres possíveis para a geração de senha

const charsets = {
   numbers: "123456789",
   letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   charactersSpecials: "!@#$%&*"
}

/* Variáveis para armazenar a senha atual e o histórico de senhas */

const passwordHistory = []

/* Função que retorna uma saudação baseada na hora atual do dia


  /**
   * Regras da saudação:
   * 00:00 - 11:59 -> Bom dia
   * 12:00 - 17:59 -> Boa tarde
   * 18:00 - 23:59 -> Boa noite
   */

//   greeting = saudacao
const getGreeting = () => {
   // Criando objeto data
   const now = new Date()
   const hours = now.getHours()

   if (hours < 12) { return 'Bom dia' }
   if (hours < 18) { return 'Boa tarde' }
   if (hours > 18) { return 'Boa noite' }
}


/* Função que formata a data e hora atual em um formato legível
Utiliza vários métodos do objeto Date para obter os componentes da data */

const formatDateTime = () => {

   // Cria um objeto com a data e hora atual */
   const now = new Date()
   const date = now.getDate()
   const hours = now.getHours()
   //  Formata os minutos para sempre ter dois numeros com o 0 na frente entre 0 e 9
   const minutes = now.getMinutes().toString().padStart(2, '0')
   const seconds = now.getSeconds().toString().padStart(2, '0')
   // Array com os nomes dos dias da semana 
   const daysWeek = [
      'Domingo',
      'Segunda-Feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
   ]


   /** Obtém o dia da semana */
   const dayWeek = daysWeek[now.getDay()]
   /** Dados da data */
   const day = now.getDate().toString().padStart(2, '0');
   const month = (now.getMonth() + 1).toString().padStart(2, '0')
   const year = now.getFullYear()
   /** Retorna apenas a data e hora (sem saudação) */
   return `${dayWeek}, ${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`
}


/* Função que atualiza o cabeçalho com a saudação e a data/hora atual */
const updateHeader = () => {
   const greeting = getGreeting()
   const dateTime = formatDateTime()

   displaySaudacao.textContent = greeting
   elementoDataeHora.textContent = dateTime
}

/* Atualizar header a cada segundo */

// setInterval utilizamos para executar uma funcao a cada intervalo de tempo definido em milissegundos
setInterval(updateHeader, 1000)
updateHeader()


/* Exibe inicialmente o valor do slider*/

controleDeslizante.value = 12

/* Atualiza o valor exibido do tamanho da senha conforme o slider é movimentado */

const updateValueOfSlider = () => {
   tamanhoSenha.textContent = controleDeslizante.value
}

controleDeslizante.addEventListener('input', updateValueOfSlider)
updateValueOfSlider()

// Funcao para randomizar os characteres

function randomCharacters(stringCharacters, amountCharacters) {
   let result = "";
   
   // Fazemos um for percorrendo o item, que para limitarmos de acordo cm a quantidade de letras
   // e adicionando 1 item para nao ficar em looping infinito

   // Criando variavel item no proprio for pq agnt só vai usar pra isso
   for (let item = 0; item < amountCharacters; item++) {
     // Sorteia um posicao aleatoria
     const randomPosition = Math.floor(Math.random() * stringCharacters.length);
     // Adicionando a letra sorteada no resultado
     result += stringCharacters[randomPosition];
   }
   return result
}
   
   


/* Função principal para gerar a senha */

const generatePassword = () => {
   lettersUpper = undefined
   lettersLower = undefined
   numbers = undefined
   charactersSpecials = undefined
   const selectedInputs = []
   /* Obter os checkboxes selecionados */
   const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');

   checkedInputs.forEach((checkbox) => {

      if (checkbox.className == 'app-pwd__checkbox uppercase-check') { lettersUpper = charsets.letter.toUpperCase() }
      else if (checkbox.className == 'app-pwd__checkbox lowercase-check') { lettersLower = charsets.letter.toLowerCase() }
      else if (checkbox.className == 'app-pwd__checkbox numbers-check') { numbers = charsets.numbers }
      else if (checkbox.className == 'app-pwd__checkbox special-check') { charactersSpecials = charsets.charactersSpecials }
   })

   // String que armazenará todos os caracteres possíveis para a senha
   const passCharacters = `${lettersUpper ?? ""}${lettersLower ?? ""}${numbers ?? ""}${charactersSpecials ?? ""}`
   // Chamando a funcao e passando o tanto de caracteres e as letras possivels
   newPassword = randomCharacters(passCharacters, controleDeslizante.value)

   return newPassword

}

// Funcao para exibir senha
const showPassword = () => {
   /* Remove a classe 'hide' para exibir o container da senha */
   containerSenha.classList.remove('hide')
   /* Insere a senha gerada no elemento HTML */
   newPassword = generatePassword()
   displaySenha.textContent = newPassword
   /*  Armazena a senha atual na variável global para uso posterior (ex: copiar) */ 
   currentPassword = newPassword
   // Adiciona no primeiro item da lista
   passwordHistory.unshift(newPassword)
   if (passwordHistory.length > 3) {
      passwordHistory.pop()
   }

   const history = document.querySelector('.app-pwd__history')

   if (history) {
      history.style.display = 'block'
   }

   history.querySelector('.app-pwd__history-list').innerHTML = passwordHistory.map(senha => `<li class="app-pwd__history-item">${senha}</li>`).join('')
}



/* Gerenciamento do histórico de senhas:
unshift() adiciona a nova senha no início do array */


/*  Limita o histórico a 3 senhas:
Se o array tiver mais de 3 itens, pop() remove o último */

/* Atualizar a lista de histórico na interface: */

/* Remover a classe 'hide' para exibir o histórico */


/* Cria elementos <li> para cada senha no histórico:
1. map() transforma cada senha em um elemento HTML
2. join('') concatena todos os elementos em uma única string */



/* Função para copiar a senha gerada para a área de transferência */
const copyPassword = () => {
   // Exibe um alerta de sucesso
   alert('Senha copida')
   // Copia a senha usando a API Clipboard
   navigator.clipboard.writeText(newPassword)
}


/* Adicionar os event listeners para os eventos de clique */
// Gera nova senha
btnGerarSenha.addEventListener('click', showPassword)
containerSenha.addEventListener('click', copyPassword)
// Copia a senha

/* Função para limpar os dados e esconder os containers */

const clearData = () => {
   passwordHistory = ''
   currentPassword = ''

   containerSenha.classList.add('hide')
   const history = document.querySelector('.app-pwd__history')
   if (history) {
      history.style.display = 'none'
   }

   const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
   checkedInputs.forEach((checkbox) => {
      checkbox.check = true
   })

   controleDeslizante.value = 8
   tamanhoSenha.textContent = '8'


}


/* Adiciona o event listener para o botão de limpar */
btnLimparHistorico.addEventListener('click', clearData)




