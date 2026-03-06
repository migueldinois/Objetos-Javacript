const senai = {
    codigo: 603,
    cidade: 'Araraquara',
    descreverEscola: () => {
        console.log(`O código ${senai.codigo} pertence a 
        escola senai de ${senai.cidade}`)
    }
}

console.log(senai.descreverEscola())

