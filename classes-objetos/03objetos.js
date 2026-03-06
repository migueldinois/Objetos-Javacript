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

