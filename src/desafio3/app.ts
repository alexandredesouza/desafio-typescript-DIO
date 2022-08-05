/* O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = 0
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});*/

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if(campoSaldo){
    campoSaldo.innerHTML = '0';
}

function somarAoSaldo(soma: number) {
    if(campoSaldo && soma){
        let resultado = parseFloat(campoSaldo.innerText) + soma;
        campoSaldo.innerHTML = resultado.toString();
    } 
}

function limparSaldo() {
    if(campoSaldo){
        campoSaldo.innerHTML = '0';
    }
}

if (botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(parseFloat(soma.value));
    });
}

if (botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
