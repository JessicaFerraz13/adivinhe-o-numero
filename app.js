let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 0;

inicio();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    numeroDeTentativas = numeroDeTentativas + 1;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemDeAcerto = `Você descobriu o número secreto em ${numeroDeTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemDeAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
        limparCampo();
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroDeTentativas = 0;
    inicio();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function gerarNumeroAleatorio() {
    return numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
}

function inicio() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}