/* Exercicios:
 1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento' que deve iniciar sempre como 'false' (escola fechada por padr5o).
 2. Crie o mdtodo 'abrirEscola()' para alterar o status pap 'true' 
 e exibir uma mensagem de boas-vindas.
 3. Crie o metodo 'fecharEscola()' para alterar o status para 'false'
 e avisar que as atividades encerraram. 
 4. Teste as funcionalidades nas instincias criadas. 
*/


class Senai {
    constructor(codigo, cidade, ano, qntdCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano = ano;
        this.statusFuncionamento = false
        this.qntdCursos = qntdCursos;
        this.idade = new Date().getFullYear() - ano

    }

    abrirEscola() {
        if (this.statusFuncionamento === false) {
            this.statusFuncionamento = true
            //  esse ?, é para especialmente boleanos, que dizemos oq vai retornar se for verdadeiro / falso
            console.log('=== UNIDADE: Araraquara ===')
            console.log(`==> Status:  ${this.statusFuncionamento ? "ABERTA" : "FECHADA"}`)
            console.log(`Idade ${this.ano} | Cursos: ${this.qntdCursos}`)
            console.log('==================================')
            console.log(`[SISTEMA] A escola SENAI ${this.cidade} começou o expediente, bem vindo!`)
            console.log('==================================')
        } else {
            console.log('A escola ja está aberta!')
        }
    }

    fecharEscola() {
        if (this.statusFuncionamento === true) {
            this.statusFuncionamento = false
            console.log('=== UNIDADE: Araraquara ===')
            console.log(`==> Status:  ${this.statusFuncionamento ? "ABERTA" : "FECHADA"}`)
            console.log(`Idade ${this.ano} | Cursos: ${this.qntdCursos}`)
            console.log('==================================')
            console.log(`[SISTEMA] A escola SENAI ${this.cidade} encerrou o expediente, até amanhã!`)
            console.log('==================================')
        } else {
            console.log('A escola ja está fechada!')
        }
    }




    dadosEscola() {
        console.log(`\n=============================================================\n`)
        console.log(`==> RELATÓRIO DA ESCOLA DA CIDADE DE ${this.cidade}`)
        console.log(`==> Código: ${this.codigo}`)
        console.log(`==> Fundação: ${this.ano} (${this.idade} anos de idade)`)
        console.log(`==> Capacidade: ${this.qntdCursos} Cursos Ativos`)
        console.log(`\n=============================================================\n`)
    }


}

const compararEscola = (escola1, escola2) => {
    console.log(`> Comparando oferta de cursos ${escola1.cidade} vs ${escola2.cidade}`)
    if (escola1.qntdCursos > escola2.qntdCursos) {
        console.log(`Resultado: O SENAI ${escola1.cidade} possui mais cursos`);
    } else if (escola2.qntdCursos > escola1.qntdCursos) {
        console.log(`Resultado: o SENAI ${escola2.cidade} Possui mais cursos`)
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`)
    }
    console.log(`Status: ${escola1.cidade} (${escola1.qntdCursos}) | ${escola2.cidade} (${escola2.qntdCursos}) `)
}


const escolaA = new Senai(603, 'Araraquara', 2008, 2000);
const escolaB = new Senai(145, 'São Carlos', 2010, 1000);
const escolaC = new Senai(545, 'Américo Brasiliense', 2009)

// compararEscola(escolaA, escolaB)
escolaA.dadosEscola()
escolaA.abrirEscola()
escolaA.fecharEscola()




// console.log(escolaB.statusFuncionamento)
// escolaB.fecharEscola()
// escolaA.dadosEscola();

