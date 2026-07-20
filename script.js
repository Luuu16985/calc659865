function moeda(valor){

return valor.toLocaleString('pt-BR',{

style:'currency',

currency:'BRL'

});

}

function calcular(){

let custo=parseFloat(document.getElementById("custo").value);

let venda=parseFloat(document.getElementById("venda").value);

let taxa=parseFloat(document.getElementById("parcela").value);

if(isNaN(custo)||isNaN(venda)){

alert("Preencha todos os campos.");

return;

}

let recebe=venda-(venda*taxa);

let lucro=recebe-custo;

let margem=(lucro/custo)*100;

document.getElementById("taxa").innerHTML=(taxa*100).toFixed(2)+" %";

document.getElementById("recebe").innerHTML=moeda(recebe);

document.getElementById("lucro").innerHTML=moeda(lucro);

document.getElementById("margem").innerHTML=margem.toFixed(2)+" %";

}