lado1 = Number(prompt("Digite o valor do primeiro lado:"));
lado2 = Number(prompt("Digite o valor do segundo lado:"));
lado3 = Number(prompt("Digite o valor do terceiro lado:"));
if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3> lado2){
    if (lado1 == lado2 == lado3){
        document.write(`triangulo equilatero`)
    }
    else if (lado1== lado2 && lado1 == lado3 && lado2 == lado3){
        document.write(`triangulo isóciles`)
    }
    else{
        document.write(`traingulo escaleno`)
    }
}
else {
    (`Esss valores não se formam um triangulo`)
}