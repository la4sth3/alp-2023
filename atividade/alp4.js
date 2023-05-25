a= Number(prompt("Digite o valor do coeficiente a:"));
b= Number (prompt("Digite o valor do coeficiente b:"));
c= Number(prompt("Digite o valor do coeficiente c:"));
delta = a + b + c
if (delta >= 0){
    document.write(`é possivel calcular as raízes reais da equação.`)
}
else{
    document.write(`Não é possivel calcular as raízes reais da equação.`)
}