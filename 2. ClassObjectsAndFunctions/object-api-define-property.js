/**
 * Adiciona uma propriedade ao objeto com particularidades na configuração
 * Exemplo: Esconder a property tornando-a privada e acessível somente para quem necessita
 */

const javascript = {};

Object.defineProperty(javascript, "name", {
    value: "JavaScript"
});

// Expect console {}
console.log(javascript);

// Expect console []
console.log(Object.keys(javascript));

// Expect console []
console.log(Object.values(javascript));

// Expect console [[]]
console.log(Object.entries(javascript));

// Expect console 'JavaScript'
console.log(javascript.name);

/**
 * Enumerable permite deixar a propriedade visível
 */
Object.defineProperty(javascript, "name", {
    value: "JavaScript",
    enumerable: true
});

// Expect console { name: 'JavaScript' }
console.log(javascript);

/**
 * Writable permite alteração da variável
 */
Object.defineProperty(javascript, "name", {
    value: "JavaScript",
    enumerable: true,
    writable: true
});

javascript.name = "ECMAScript";

// Expect console { name: 'ECMAScript' }
console.log(javascript);