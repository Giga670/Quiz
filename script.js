
level=["Questão 2", "Questão 3", "Questão 4", "Questão 5", "Questão 6", "Questão 7", "Questão 8", "Questão 9", "Questão 10"]
i=0
const textoQuestao = document.getElementById("questao")
function passar(){
    textoQuestao.textContent= level[i]
    i=i+1
}
