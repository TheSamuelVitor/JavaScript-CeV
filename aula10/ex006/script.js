// funções em javascript
// name = nome da função
// param = parametros da função

// function name(params) {
//    code
// }

var d = window.document.getElementById('area')

d.addEventListener('click', clicar)
d.addEventListener('mouseenter', entrar)
d.addEventListener('mouseleave', sair)

function clicar() {
    d.innerText = 'Clicou'
    d.style.backgroundColor = 'blue'
    d.style.border = 'none'
}

function entrar() {
    d.innerText = 'Entrou'
    d.style.backgroundColor = 'green'
    d.style.border = '5px solid black'
}

function sair() {
    d.innerText = 'Saiu'
    d.style.backgroundColor = 'red'
}