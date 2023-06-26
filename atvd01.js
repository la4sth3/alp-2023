vetor=[];
 for(let i = 0; i < 10; i++){
    let n =Number(prompt(`Digite o ${i + 1}° número`))
    vetor[i] = n * n;
}
document.write(`vetor = [${vetor}]`);

for(let i = 0; i < vetor.length; i ++){
 document.write(`<br> vetor[${i}] = [${vetor[i]}]`);
}