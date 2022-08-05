"use strict";

var profissao;
(function (profissao) {
    profissao[profissao["atriz"] = 0] = "atriz";
    profissao[profissao["padeiro"] = 1] = "padeiro";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.padeiro
};
