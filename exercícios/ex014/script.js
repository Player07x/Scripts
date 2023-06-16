function carregar() {
    let msg, img, data, hora
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12) {
        img.src = 'imagens/day(edited).png'
        document.body.style.background='#A2D7FF'
    } else if (hora >=12 && hora < 18) {
        img.src = 'imagens/afternoon(edited).png'
        document.body.style.background='#FFC187'
    } else {
        img.src = 'imagens/night(edited).png'
        document.body.style.background='#35518F'
    }
}