const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Quem venceu as eleições de 2018?",
    
        alternativas: [
            {
                texto:"Bolsonaro",
                afirmacao: "afirmação"
            },
            {
                texto:"Fenando Haddad",
                afirmacao: "afirmação"
            }
            
        ]
    },
    
    {
        enunciado:"Qual foi a quantidade de votos do ganhador?",
       
        alternativas:[ 
            {
            texto: "57,8 milhões de votos.",
            afirmacao: "afirmação"
        },
           {
            texto: "47 milhões de votos .",
            afirmacao: "afirmação"
           }
            
        ]
},
{
    enunciado: "Qual era o partido de Jair Messias Bolsonaro?",

    alternativas:[
        {
        texto:"PSL.",
        afirmacao: "afirmação"
    },
        {
            texto:"PSOL.",
            afirmacao:"afirmação"
        }

    ]
    
},
{
    enunciado: "Qual era o partido de Fenando Haddad?",

    alternativas:[
        {
        texto:"PT.",
        afirmacao: "afirmação"
    },
    {
        texto: "PDT.",
        afirmação: "afirmação"
    }
       
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
function mostraAlternartivas() {
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();