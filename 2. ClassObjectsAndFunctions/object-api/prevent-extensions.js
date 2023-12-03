/**
 * preventExtensions
 * Permite atualizar propriedade
 * Não permite criar propriedades
 * Permite excluir propriedades
 */

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

Object.preventExtensions(javascript);

javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;

console.log(javascript);
console.log(Object.isExtensible(javascript));