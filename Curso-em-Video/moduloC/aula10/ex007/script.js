function clicar() {
    var botaosomar = window.document.getElementById('botao')
    var resultado = window.document.getElementById('res')

    var txt1 = window.document.getElementById('txtn1')
    var txt2 = window.document.getElementById('txtn2')

    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)

    var s = n1+n2

    resultado.innerText = `${s}`
}