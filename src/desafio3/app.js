"use strict";

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo) {
    campoSaldo.innerHTML = '0';
}
function somarAoSaldo(soma) {
    if (campoSaldo && soma) {
        let resultado = parseFloat(campoSaldo.innerText) + soma;
        campoSaldo.innerHTML = resultado.toString();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '0';
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(parseFloat(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
