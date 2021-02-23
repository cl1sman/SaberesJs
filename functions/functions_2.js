// função anonima, ou function expression; functioin anonymous

let total = 0

// parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2 // usar palavras chaves
    return total
}

// este number1 e 2 é diferente do que está no scopo da função
let number1 = 34
let number2 = 25 
// sum(number1, number2) // arguments - argumentos

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`) // argumentos
// aqui a função é executada, então posso chamar itens desta função
console.log(total) // caso fosse informado antes, daria um erro de referencia. isso porque não coloquei nenhum operador especial antes do total. Como eu não coloquei nenhum operador especial antes de total, ele pode ser usado fora do escopo, e isso pode dar ruim. Se antes desta função declarar um "let total = 0", terei problemas, pois não será mais zero, porque este total vai ser enxergado fora deste escopo.