var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

//msg.innerText = `Agora são ${hora} horas e ${minuto} minutos`
if (hora >= 0 && hora < 12) {
    document.body.style.background = '#ffa755'
} else if (hora >= 12 && hora <= 18) {
    document.body.style.background = '#914d0d'
} else {
    document.body.style.background = '#353333'
}

//Acima fica o código onde a cor do background conforme o horário
//Abaixo fica o código de todas as ações da calculadora

function calcnum(num){
    if (typeof gvisor == 'undefined'){
        document.calcform.visor.value = ''
    }
        document.calcform.visor.value = document.calcform.visor.value + num
        gvisor = 1
}

function calclimpar(){
    document.calcform.visor.value = ''
    delete gvalor
    delete goper
    delete gvisor
}

function calcoper (oper, valor1, valor2){
    if (oper == "somar"){
        var valor = parseFloat(valor1) + parseFloat(valor2)
    } else if (oper == "subtrair"){
        var valor = valor1 - valor2
    } else if (oper == "multiplicar"){
        var valor = valor1 * valor2
    } else if (oper == "dividir"){
        var valor = valor1 / valor2
    }
    return(valor)
}

function calcparse(oper){
    var valor = document.calcform.visor.value
    delete gvisor

    if (typeof goper != 'undefined' && oper == 'resultado'){
        gvalor = calcoper (goper, gvalor, valor)
        document.calcform.visor.value = gvalor
        delete oper
        delete gvalor
        return(0)
    }

    if (typeof gvalor != 'undefined'){
        gvalor = calcoper(goper, gvalor, valor)
        goper = oper
        document.calcform.visor.value = gvalor
    } else {
        gvalor = valor
        goper = oper
    }
}