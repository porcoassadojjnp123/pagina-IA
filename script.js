const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

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
            texto: "57,8 milhões de votos",
            afirmacao: "afirmação"
        },
           {
            texto: "47 milhões de votos",
            afirmacao: "afirmação"
           }
            
        ]
},
{
    enunciado: "Qual era o partido de Jair Messias Bolsonaro?",

    alternativas:[
        {
        texto:"PSL",
        afirmacao: "afirmação"
    },
        {
            texto:"PSOL",
            afirmacao:"afirmação"
        }

    ]
    
},
{
    enunciado: "Qual era o partido de Fenando Haddad?",

    alternativas:[
        {
        texto:"PT",
        afirmacao: "afirmação"
    },
    {
        texto: "PDT",
        afirmacao: "afirmação"
    }
       
    ]
    
},
{
    enunciado: "Em 2018  o candidato Jair Messias Bolsonaro venceu o candidato Fenando Haddad com 57,8 milhões de votos o candidato Jair Messias Bolsonaro do PSL venceu o candidato Fenando Haddad do PT"
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResutado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>respsotaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respsotaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
}
function mostraResutado(){
  caixaResultado.textContent = ".Em 2018  o candidato Jair Messias Bolsonaro venceu o candidato Fenando Haddad com 57,8 milhões de votos o candidato Jair Messias Bolsonaro do PSL venceu o candidato Fenando Haddad do PT..";
  textoResultado.textContent += historiaFinal += afirmacoes + " ";
  caixaAlternativas.textContent = "";
}
mostraPergunta();