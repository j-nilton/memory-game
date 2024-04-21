"use strict";
const cartas = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
const tabuleiro = [];
const cartasViradas = [];
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function exibirTabuleiro() {
    let output = '';
    for (let i = 0; i < tabuleiro.length; i++) {
        output += tabuleiro[i] + ' ';
        if ((i + 1) % 4 === 0) {
            output += '\n';
        }
    }
    alert(output);
}
function virarCarta(posicao) {
    if (!cartasViradas.includes(posicao)) {
        cartasViradas.push(posicao);
        tabuleiro[posicao] = cartas[posicao];
        exibirTabuleiro();
        if (cartasViradas.length === 2) {
            if (cartas[cartasViradas[0]] === cartas[cartasViradas[1]]) {
                alert('Parabéns! Você encontrou um par!');
            }
            else {
                alert('Tente novamente!');
                tabuleiro[cartasViradas[0]] = '_';
                tabuleiro[cartasViradas[1]] = '_';
            }
            cartasViradas.length = 0;
            exibirTabuleiro();
        }
    }
    else {
        alert('Carta já virada. Escolha outra.');
    }
}
// Inicialização do jogo
embaralhar(cartas);
for (let i = 0; i < 8; i++) {
    tabuleiro.push('_');
}
exibirTabuleiro();
while (tabuleiro.includes('_')) {
    const posicao = parseInt(prompt('Digite a posição da carta que deseja virar (de 0 a 7):'));
    if (posicao >= 0 && posicao <= 7) {
        virarCarta(posicao);
    }
    else {
        alert('Posição inválida. Tente novamente.');
    }
}
alert('Parabéns! Você encontrou todos os pares.');
