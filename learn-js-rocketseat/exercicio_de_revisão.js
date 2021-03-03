// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight) // é 'undefined'

/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
 *      * name: String
 *      * age: Number (integer)
 *      * stars: Number (float)
 *      * isSubscribed: Boolean
 */
// let name = 'Jorge'
// let age = 23
// let stars = 2.4
// let isSubscribed = true

/**
 *  4. A variável student abaixo é de que tipo de dados?
 *  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
 *  4.2 Mostre no console a seguinte mensagem:
 *      <name> de idade <age> pesa <weight> kg.
 * 
 *      Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
 */

 let student = {
     name: 'Maik',
     age: 23,
     weight: 69.9,
     isSubscribed: true
 };

 // console.log(typeof student)
 //console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

 /**
  * 5. Declare uma variável do tipo Array, de nome students e atribua a ela nunhum valor, ou seja, somente o Array vazio.
  */

let students = []

/**
 * 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
 */
// aqui, colocando um objeto dentro da Array
students = [
    student
]

//console.log(students)

/**
 * 7. Coloque no console o valor da posição zero do Array acima
 */

 //console.log(students[0])

 /**
  * 8. Crie um novo student e coloque na posição 1 do Array students
  */

  const john = {
      name: 'John',
      age: 23,
      weight: 74.8,
      isSubscribed: true
  }

  // reatribuindo em students
  students = [
      student,
      john
  ]

  // outra forma de fazer é
  students[1] = john // indico a posição em que vou atribuir o objeto John. (é uma forma não tão segura)

  console.log(students[1])

  /**
   * 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
   * 
   * console.log(a)
   * var a = 1
   * 
   * Resposta: Undefined, porque vai subir a "var a", mas ainda não foi atribuido o 1 quando console foi chamado.
   */