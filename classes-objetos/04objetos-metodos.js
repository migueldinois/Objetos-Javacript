const senai = {
    codigo: 603,
    cidade: 'Araraquara',
    descreverEscola: () => {
        console.log(`O código ${senai.codigo} pertence a 
        escola senai de ${senai.cidade}`)
    }
}

senai.codigo = 600;
senai.cidade = 'Matão'
console.log(senai.descreverEscola())

