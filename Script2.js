function verificar() {
    let resultado, pais_origem
    resultado = document.querySelector('div#resultado')
    pais_origem = pais.value

    if (pais_origem != 'Brasil') {
        resultado.innerHTML += '<p>Você é estrangeiro!</p>'
    } else {
        resultado.innerHTML += '<p>Você é brasileiro!</p>'
    }
}