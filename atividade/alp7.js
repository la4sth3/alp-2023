peso = Number(prompt("Digite seu peso em kg: "))
altura = Number(prompt("Digite sua altura em metros: "))

imc = Number(peso/altura ** 2)
if (imc < 18.5){
    document.write(`voce está abaixo do peso`)
}
else if ( imc >= 18.5 && imc<= 24.9){
    document.write(`voce está com peso normal`)
}
else if (imc >= 25 && imc <= 29.9){
    document.write(`voce está acima do peso`)
}
else if (imc >= 30 && imc <= 34.9){
    document.write(`voce está com Obesidade 1`)
}
else if (imc >= 35 && imc <= 39.9){
    document.write(`voce está com Obesidade 2`)
}
else if (imc >= 40){
    document.write(`voce está com Obesidade 3`)
}