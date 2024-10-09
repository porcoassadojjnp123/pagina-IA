const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Quem venceu as eleições de 2018?",

        alternativas: [
            "Bolsonaro",
            "Fenando Haddad",
        ]
    },
    
    {
        enunciado:"Qual foi a quantidade de votos do ganhador?",
       
        alternativas:[ 
            "57,8 milhões de votos.",
            "47 milhões de votos .",
        ]
},
{
    enunciado: "Qual era o partido de Jair Messias Bolsonaro?",

    alternativas:[
        "PSL.",
        "PSOL.",
    ]
    
},
{
    enunciado: "Qual era o partido de Fenando Haddad?",

    alternativas:[
        "PT.",
        "PDT.",
    ]
    
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternartivas();
}