"use strict";
var pessoaCorFavorita;
(function (pessoaCorFavorita) {
    pessoaCorFavorita["cor1"] = " amarelo ";
    pessoaCorFavorita["cor2"] = " lilas";
    pessoaCorFavorita["cor3"] = " rosa ";
    pessoaCorFavorita["cor4"] = " verde ";
})(pessoaCorFavorita || (pessoaCorFavorita = {}));
const labenuAluno = {
    nome: " rick",
    idade: 31,
    corFavorita: pessoaCorFavorita.cor1
};
console.log(labenuAluno);
//# sourceMappingURL=exercicio1.js.map