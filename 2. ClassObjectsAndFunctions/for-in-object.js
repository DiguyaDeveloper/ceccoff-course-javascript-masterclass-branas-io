const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true
};

const book2 = {};

/**
 * Exibindo as chaves e valores do objeto book
 */
for (const key in book) {
    console.log("Key", key)
    console.log("Value", book[key])
    console.log("")
};

/**
 * Criando dinamicamente as chaves do objeto Book2
 */
for (const key in book) {
    book2[key] = book[key]
};

console.log('book2', book2)