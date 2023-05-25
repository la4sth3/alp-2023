centro_x = Number(prompt("Digite a coordenada X do centro do círculo: "))
centro_y = Number(prompt("Digite a coordenada Y do centro do círculo: "))
raio = Number(prompt("Digite o raio do círculo:"))

ponto_x = Number(prompt("Digite a coordenada X do ponto: "))
ponto_y = Number(prompt("Digite a coordenada Y do ponto: "))

distancia = Math.sqrt((ponto_x - centro_x) ** 2 + (ponto_y - centro_y) ** 2)

if (distancia <= raio){
    document.write(`o ponto está dentro do círculo`)
}
else{
    document.write(`o ponto está fora do cículo`)
}