// //  Função anônima para gerar um numero aleatorio entre 1 e 15

// const gerarNumeroAleatorio = () => {
//     //  Esse math random gerar um numero aleatorio entre 1 e 0 
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`)

//     // Multiplicando por 15 para obter um numero entre 0 e 14 (exclusivo)
//     numeroAleatorio *= 15;
//     console.log(`Multiplicar: ${numeroAleatorio}`)

//     // Arredondando para baixo para tirar os numeros depois do .
//     numeroAleatorio = Math.floor(numeroAleatorio)
//     console.log(`Arredondar: ${numeroAleatorio}`)

//     // Somando 1, para manter o range de 1 e 15 (pois ele conta o zero, queremos comecar no 1)
//     numeroAleatorio += 1
//     console.log(`Somar ${1}: ${numeroAleatorio}`)

//     //  Numero final:
//     console.log(`Numero Final Sorteado: ${numeroAleatorio}`)
// }


//  Função anônima para gerar um numero de acordo com os parametros que o usuario enviar
const gerarNumeroInteiro = (minimo, maximo) => {
    if (minimo < maximo){
        //  Esse math random gerar um numero aleatorio entre 1 e 0 
        let numeroAleatorio = Math.random();
        console.log(`Sorteio: ${numeroAleatorio}`)
    
        // Multiplicando por pelo maximo para obter um numero entre o minimo e maximo do usuario (exclusivo)
        numeroAleatorio *= maximo;
        console.log(`Multiplicar: ${numeroAleatorio}`)
    
        // Arredondando para baixo para tirar os numeros depois do .
        numeroAleatorio = Math.floor(numeroAleatorio)
        console.log(`Arredondar: ${numeroAleatorio}`)
    
        // Somando o minimo, para manter o range de minimo e maximo (pois ele conta o zero)
        numeroAleatorio += minimo
        console.log(`Somar ${minimo}: ${numeroAleatorio}`)
    
        //  Numero final:
        return numeroAleatorio  
    } else {
        return `O numero minimo deve ser menor que o maximo`
    }

}

let numeroSorteado = gerarNumeroInteiro(1,100);
console.log(`Numero sorteado ${numeroSorteado}`)



const gerarNumeroAleatorioR = (min = 1, max = 15) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log(gerarNumeroAleatorioR())
console.log(gerarNumeroAleatorioR(10,15))