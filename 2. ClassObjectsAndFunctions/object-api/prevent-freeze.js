/**
 * Freeze
 * Não permite atualizar propriedade
 * Não permite criar propriedades
 * Não permite excluir propriedades
 */

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

Object.seal(javascript);

javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;

console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));

/**
 * Object is not extensible
 * Modificar os acessos ao objeto o torna não extensível para prototypes
 */
Object.setPrototypeOf(javascript, {});