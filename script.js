
level=["Questão 2", "Questão 3", "Questão 4", "Questão 5", "Questão 6", "Questão 7", "Questão 8", "Questão 9", "Questão 10"]
i=0
const textoQuestao = document.getElementById("questao")
function passar(){
    textoQuestao.textContent= level[i]
    i=i+1
}
idx=0
const pergunta= document.getElementById("pergunta")
const bo1= document.getElementById("bo1")
const bo2= document.getElementById("bo2")
const bo3= document.getElementById("bo3")
const bo4= document.getElementById("bo4")
const perguntas=[["Qual foi a região mais atingida nas duas grandes guerras?","Ásia","Europa"," América do Norte","África", 2]]
document.getElementById("idx").textContent = idx+1
pergunta.textContent = perguntas[indx][0]
bo1.textContent = levels[idx][1]
bo2.textContent = levels[idx][2]
bo3.textContent = levels[idx][3]
bo4.textContent = levels[idx][4]
function respostas(res){
    if (res == perguntas[idx][5]){
        indx++;
        document.getElementById("indx").textContent = indx+1
        pergunta.textContent = perguntas[idx][0]
        bo1.textContent = perguntas[idx][1]
        bo2.textContent = perguntas[idx][2]
        bo3.textContent = perguntas[idx][3]
        bo4.textContent = perguntas[idx][4]
    }
}