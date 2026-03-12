class Senai {
    constructor(codigo, cidade, ano, qntdCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano = ano;
        this.qntdCursos = qntdCursos;
        this.idade = new Date().getFullYear() - ano

    }

    dadosEscola() {
        console.log(`\n=============================================================\n`)
        console.log(`==> R ELATÓRIO DA ESCOLA DA CIDADE DE ${this.cidade}`)
        console.log(`==> Código: ${this.codigo}`)
        console.log(`==> Fundação: ${this.ano} (${this.idade} anos de idade)`)
        console.log(`==> Capacidade: ${this.qntdCursos} Cursos Ativos`)
        console.log(`\n=============================================================\n`)
    }


}

const compararEscola = (escola1, escola2) => {
    console.log(`> Comparando oferta de cursos ${escola1.cidade} vs ${escola2.cidade}`)
    if (escola1.qntdCursos > escola2.qntdCursos){
        console.log(`Resultado: O SENAI ${escola1.cidade} possui mais cursos`);
    }else if (escola2.qntdCursos > escola1.qntdCursos) {
        console.log(`Resultado: o SENAI ${escola2.cidade} Possui mais cursos`)
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`)
    }
    console.log(`Status: ${escola1.cidade} (${escola1.qntdCursos}) | ${escola2.cidade} (${escola2.qntdCursos}) `)
}


const escolaA = new Senai(603, 'Araraquara', 2008, 2000);
const escolaB = new Senai(145, 'São Carlos', 2010, 1000);
const escolaC = new Senai(545, 'Américo Brasiliense', 2009)

compararEscola(escolaA, escolaB)
escolaA.dadosEscola();