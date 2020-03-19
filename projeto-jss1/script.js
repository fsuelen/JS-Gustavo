function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#00ceff'

        img.src = './img/manha.png'

    } else if (hora >= 12 && hora < 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#915e41'



    } else {
        img.src = './img/noite.png'
        document.body.style.background = '#304a57'
    }







}