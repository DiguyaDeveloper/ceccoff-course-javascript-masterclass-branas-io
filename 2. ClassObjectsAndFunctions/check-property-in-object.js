const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true
};

/**
 * Exibe 'true' para properiedades existentes e 'false' para propriedades não existentes
 */
console.log('title' in book);
console.log('author' in book);
console.log('pages' in book);
console.log('language' in book);
console.log('available' in book);
console.log('publisher' in book);