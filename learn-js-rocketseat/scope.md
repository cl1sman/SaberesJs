# Scope

* Escopo determina a visibilidade 

Nem sempre as variaveis estarão visiveis para o codigo de js, estando visivel para nós que estamos escrevendo o codigo. Algumas vezes o js não vai enxergar algumas variaveis.

# Block statement (uma declaração de bloco)
```js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // Bloco fechado
´´´

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

# var
```
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)

## let e const

js

// const e let são locais e só funcionam no escopo onde foram criadas

console.log('> existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> existe x depois do bloco? ', y)


Evitamos usar o var, porque ele é muito flexivel, ele permite diferentes escopos, e alteração de diferentes escopos, e isso causa bugs inesperados.