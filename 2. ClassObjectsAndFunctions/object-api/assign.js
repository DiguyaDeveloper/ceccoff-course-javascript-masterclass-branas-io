/**
 * Exemplo de como atribuir propriedades de outros objetos a um objeto selecionado
 */

const javascript = Object.create({});

Object.assign(
    javascript,
    {
        name: "javascript",
        year: 1995,
        paradigm: "00 and Functional",
    },
    {
        author: "Brendan Eich",
        influenceBy: "Java, Scheme and",
    }
);

console.log(javascript);