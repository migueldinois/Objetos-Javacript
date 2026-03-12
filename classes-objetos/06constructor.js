class Senai {
    constructor(codigo, cidade, ano) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano = ano;

    }

    dadosEscola() {
        console.log(`Unidade: ${this.cidade} | Codigo Interno: ${this.codigo}`)
    }

    mostrarIdade() {
        const date = new Date()
        
        let idade = (date.getFullYear() - Number(this.ano))
        console.log(`A escola senai da cidade ${this.cidade} tem ${idade} anos de idade`)
    }
}

const escolaA = new Senai(603, 'Araraquara', 2008);
const escolaB = new Senai(145, 'São Carlos', 2010);
const escolaC = new Senai(545, 'Américo Brasiliense', 2009)


escolaA.dadosEscola();
escolaA.mostrarIdade()
escolaB.dadosEscola();
escolaC.dadosEscola();

