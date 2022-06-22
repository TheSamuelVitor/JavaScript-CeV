// operadores aritméticos em javascript
// + == soma
console.log(5+2)

// - == subtração
console.log(5-2)

// * == multiplicação
console.log(5*2)

// / == divisão
console.log(5/2)

// % == resto de divisão
console.log(5%2)

// ** == potência
console.log(5**2)

// ordem de precedência:
// 1. parenteses ()
// 2. potencia **
// 3. multiplicacao *, divisao /, resto da divisao %
// 4. adicao +, subtracao -
var a = 5+3
var b = a%5
var c = 5*b**2
var d = 10 - a/2
var e = 6*2/d
var f = b%e+4/e
console.log(a,b,c,d,e,f)

// auto atribuição:
var n = 3

// pode fazer c 
n = n+4
n+=4
console.log(n)

// incrementação
var  x = 5
x = x+1
x += 1
x++

x = x-1
x -= 1
x--

// operadores relacionais
// > maior que
console.log(5>2)

// < menor que
console.log(5<2)

// >= maior igual
console.log(5>=2)

// <= menor igual
console.log(5<=2)

// == retorna o valor boolean se 5 igual a 2
console.log(5==2)

// != retorna o valor boolean se 5 for diferente de 2
console.log(5!=2)

// operadores lógicos

// ! = negação
// negação de um valor boolean
// tabela verdade:
// !true = false
// !false = true

// && = conjunção/and
// tabela verdade:
// 1 && 1: 1
// 1 && 0: 0
// 0 && 1: 0
// 0 && 0: 0

// || = disjunção/or
// 1 || 1: 1
// 1 || 0: 0
// 0 || 1: 1
// 0 || 0: 0

// ordem de precedencia - operadores
// 1. arimeticos
// 2. relacionais
// 3. lógicos
// 3.1 negação !
// 3.2 conjunção &&
// 3.3 disjunção ||

// teste ternário
// [teste] ? [testeverdadeiro] : [testefalso]
var media = 5
media >= 7 ? console.log("Aprovado") : console.log("Reprovado")