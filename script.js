let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

let explica = document.querySelector('.explicacao')

var estaBloqueado = false;

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "O tipo usado para:  false",
    alternativaA : "String",
    alternativaB : "boolean",
    alternativaC : "int",
    correta      : "boolean",
    explicacao   : "false é um dos valores binarios do tipo boolean",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : 'O tipo usado para:  "ST"',
    alternativaA : "int",
    alternativaB : "double",
    alternativaC : "char",
    correta      : "char",
    explicacao   : "char é o tipo recomendado para poucos caracteres",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : 'O tipo usado para:  "false"',
    alternativaA : "String",
    alternativaB : "boolean",
    alternativaC : "int",
    correta      : "String",
    explicacao   : 'qualquer coisa colocada entre "" será String',
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O tipo usado para:  32.00",
    alternativaA : "String",
    alternativaB : "double",
    alternativaC : "int",
    correta      : "double",
    explicacao   : "valores que usam '.' são double",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O tipo usado para:  3200",
    alternativaA : "boolean",
    alternativaB : "double",
    alternativaC : "int",
    correta      : "int",
    explicacao   : "números sem ponto '.', são numeros do tipo int",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : 'O tipo usado para:  "C"',
    alternativaA : "char",
    alternativaB : "double",
    alternativaC : "int",
    correta      : "char",
    explicacao   : "char é o tipo recomendado para poucos caracteres",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : 'O tipo usado para:  "Olá, mundo"',
    alternativaA : "String",
    alternativaB : "boolean",
    alternativaC : "int",
    correta      : "String",
    explicacao   : 'valores entre "" são automaticamente do tipo String',
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "O tipo usado para:  3,14",
    alternativaA : "erro",
    alternativaB : "double",
    alternativaC : "int",
    correta      : "erro",
    explicacao   : "Esse valor em java leavaria à um erro, pois ',' não é indetificavel",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "O tipo usado para:  20",
    alternativaA : "String",
    alternativaB : "double",
    alternativaC : "int",
    correta      : "int",
    explicacao   : "números sem ponto '.', são numeros do tipo int",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "O tipo usado para:  true",
    alternativaA : "String",
    alternativaB : "double",
    alternativaC : "boolean",
    correta      : "boolean",
    explicacao   : "true é um dos valores binarios do tipo boolean",

}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    explica.textContent = null
    explica.classList.remove("ligado");
}

function bloquearAlternativas() {
    a.className += ' bloqueado'
    b.className += ' bloqueado'
    c.className += ' bloqueado'
    estaBloqueado = true
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    estaBloqueado = false
}

function verificarSeAcertou(nQuestao, resposta) {

    if(!estaBloqueado){
        bloquearAlternativas()
        let numeroDaQuestao = nQuestao.value
        console.log("Questão " + numeroDaQuestao)

        let respostaEscolhida = resposta.textContent
        //console.log("RespU " + respostaEscolhida)

        let certa = questoes[numeroDaQuestao].correta
        //console.log("RespC " + certa)

        if(respostaEscolhida == certa) {
            //console.log("Acertou")
            // respostaEsta.textContent = "Correta 😊"
            pontos += 10 // pontos = pontos + 10   
        } else {
            //console.log("Errou!")
            //respostaEsta.textContent = "Errada 😢"
            explica.textContent = questoes[numeroDaQuestao].explicacao
            explica.className +=" ligado";
        }


    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes

    
   
    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)    
            desbloquearAlternativas()
        }
    }, 3000)
 }

}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""
    

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'
    explica.style.display = 'none'

    // setTimeout(function() {
    //     pontos = 0 // zerar placar
    //     location.reload();
    // }, 2000)


    var btn = document.createElement('BUTTON');
    var lbl = document.createTextNode("Tentar de novo");
    btn.classList.add("botao");       
    btn.appendChild(lbl);
    document.getElementById("conteudos").appendChild(btn);    
    btn.onclick = function()
    {
        pontos = 0
        location.reload();
    }
    
}