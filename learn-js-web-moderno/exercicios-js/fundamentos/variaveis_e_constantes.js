var a = 3
let b = 4 // uso let, var não é tão confiavel

var a = 30 // você pode declarar a mesma vareavel duas vezes.
// let b = 40 // SyntaxError: Identifier 'b' has already been declared -> não posso redeclarar. Desta forma, usar, sem a palavra reservada let
b = 40

console.log(a, b)

a = 340
b = 234

console.log(a, b)

const c = 5 // tudo que não precisa mudar, usa const (constante)
// c = 50 // TypeError: Assignment to constant variable. -> é uma constante, não posso muda-la
console.log(c)