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

const charsets =  {
    numbers: [0,1,2,3,4,5,6,7,8,9],
    letter: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'r', 't', 'u', 'v',
        'w', 'x', 'y', 'z'],
    charactersSpecials: ['!', '@', '#', '$', '%', '&', '*']
}

/* Variáveis para armazenar a senha atual e o histórico de senhas */

let newPassword = []
let passwordHistory = []

/* Função que retorna uma saudação baseada na hora atual do dia


  /**
   * Regras da saudação:
   * 00:00 - 11:59 -> Bom dia
   * 12:00 - 17:59 -> Boa tarde
   * 18:00 - 23:59 -> Boa noite
   */

//   greeting = saudacao
  const getGreeting =  () => {
    // Criando objeto data
    const now = new Date()
    const hours = now.getHours()
    
    if (hours < 12) {return 'Bom dia'}
    if (hours < 18 ) {return 'Boa tarde'}
    if (hours > 18) {return 'Boa noite'}
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
   const seconds = now.getSeconds()
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

/* Inicializar header */


/* Exibe inicialmente o valor do slider*/


/* Atualiza o valor exibido do tamanho da senha conforme o slider é movimentado */


/* Função principal para gerar a senha */

// String que armazenará todos os caracteres possíveis para a senha

  /* Obter os checkboxes selecionados */




  /* Construir o charset baseado nas opções selecionadas */
 

  /* Se nenhuma opção estiver selecionada, selecionar todas */
 

  // Inicializa uma string vazia para armazenar a senha gerada
 


  /* Loop que itera pelo número de caracteres definido no slider
 Usa o operador de incremento (++) para aumentar o contador */

  
    /* Adiciona um caractere aleatório à senha:
    1. Math.random() gera um número decimal entre 0 e 1
    2. Multiplicado pelo comprimento do charset para obter um índice válido
    3. Math.floor() arredonda para baixo para obter um índice inteiro
    4. charAt() retorna o caractere na posição do índice calculado */

  
  /* Remove a classe 'hide' para exibir o container da senha */
  

  /* Insere a senha gerada no elemento HTML */

 
  /*  Armazena a senha atual na variável global para uso posterior (ex: copiar) */
  
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

  // Exibe um alerta de sucesso
 // Copia a senha usando a API Clipboard


/* Adicionar os event listeners para os eventos de clique */
 // Gera nova senha
  // Copia a senha

/* Função para limpar os dados e esconder os containers */

  // Limpa o histórico de senhas
 

  /* Esconder os containers */
 

  /* Reseta os checkboxes para o estado inicial (marcados) */


  /* Reseta o slider para o valor inicial */
  

/* Adiciona o event listener para o botão de limpar */




