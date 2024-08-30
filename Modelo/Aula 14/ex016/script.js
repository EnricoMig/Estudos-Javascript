function passada() {
    var comeco = document.getElementById("inicioTXT").value
    var chegada = document.getElementById("chegadaTXT").value
    var passada = document.getElementById("passadaTXT").value
    var msg = window.document.getElementById("mensagem")


    msg.innerHTML = 'Preencha o Formulario'
    if (comeco.length == 0 || chegada.length == 0 || passada.length == 0) {
        msg.innerHTML = "[ERRO] Faltam dados para seguir com o processor!"
    } else {
        msg.innerHTML = 'Contando...'
        let com = Number(comeco), fim = Number(chegada), passo = Number(passada)

        if(passo <= 0){
            window.alert("Numero de Passada inválida!\nPasso Começará em 1")
            passo = 1
        }

        if(com<fim){
            for(let c = com; c<=fim; c+=passo){
                msg.innerHTML += `${c} \u{1F449} `
            }
        } else{
            for(let c = com; c>=fim; c-=passo){
                msg.innerHTML += `${c} \u{1F449} `
            }
        }
        msg.innerHTML += `</br>\u{1f3c1}Você chegou!\u{1f3c1}`
    }


    
}