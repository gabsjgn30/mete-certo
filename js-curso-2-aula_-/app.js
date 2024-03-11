let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextos(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextos("h1","Jogo do Mete Certo!");
    exibirTextos("p","Mete aí um número de 1 a 10");
}
exibirMensagemInicial()

function verificarMete() {
    let mete = document.querySelector("input").value;
        
    if (mete == numeroSecreto) {
        exibirTextos("h1","Meteu Certo!" );
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você Meteu o Número Secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextos("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute ("disabled");
        
    } else {
        if (mete > numeroSecreto) {
         exibirTextos ("p","O número secreto é menor");
        } else {
            exibirTextos ("p","O número secreto é maior");
        }
        tentativas++
        limparCampo()
    }
        
}


function gerarNumeroAleatorio() {
   let numeroMetido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeMetidaNaLista = listaDeNumerosSorteados.length;

    if (quantidadeMetidaNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(numeroMetido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroMetido);
    console.log(listaDeNumerosSorteados);
    return numeroMetido;
   }
}

function limparCampo() {
    mete = document.querySelector ("input");
    mete.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
