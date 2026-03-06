class Senai{
    codigo;
    cidade;

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola ${this.cidade}`)
    }
}

const senaiArqa = new Senai();
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão'

senaiArqa.descreverEscola()
senaiMat.descreverEscola()