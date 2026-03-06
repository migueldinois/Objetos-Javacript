// let quadrado = {};
// let quadrado2 = {};
// let quadrado3 = [{}];

let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
    return this.lados * lado;  }

}
let quadrado2 = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
    return this.lados * lado;  }
}

console.log(quadrado2.perimetro(4))



// 01 Criar um objeto senai
// 02 acessar os dados chave
// 03 Incrementar dados/alerar o objeto
// 04 Excluir um valor do objeto

const senai = {
    codigo: 603,
    cidade: 'Araraquara',

};


console.log('--------------------------------');
senai.telefone = 1633035252;
senai.endereco = {
    rua: 'Hugo Negrini',
    bairro: 'Quitandinha',
    numero: '60'
};
senai.alunos = ['SESI', 'EEBA', 'COMUNIDADE'];
senai.alunos[2] = 'Tecnico'
senai.endereco.numero = 62;
console.log(senai)

