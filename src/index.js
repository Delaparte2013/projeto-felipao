console.log(" Desafio Classificador de nível de Herói ")
let nomeHeroi = "Pedro";
let xp = 50000;
if(xp < 1000){ 
    xp = "Ferro"
}else if(1001 <= xp <= 2000){
    xp = "Bronze"
}else if(2001 <= xp <= 5000){
    xp = "Prata"
}else if(5001 <= xp <= 7000){
    xp = "Ouro"
}else if(7001 <= xp <= 8000 ){
    xp = "Platina"
}else if(8001 <= xp <= 9000){
    xp = "Ascendente"
}else if(9001 <= xp <= 10000){
    xp = "Imortal"
}else
    xp = "Radiante"

console.log("O herói de nome " + nomeHeroi + " está no nível " + xp);