let numeros = [];
let soma = 0;
for(let i = 0; i <10; i++){
    numeros[i] = Number(prompt(`Digite o ${i + 1}° numero`));
    soma = soma + numeros
 document.write(`numeros = [${numeros}]<br>`);

 }