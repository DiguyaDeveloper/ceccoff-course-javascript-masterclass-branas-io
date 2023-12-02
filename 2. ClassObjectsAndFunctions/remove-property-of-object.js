const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true
};

// Expect console 'true'
console.log('author' in book);

/**
 * Remove a propriedade author do objeto com operador delete
 */
delete book.author;

// Expect console 'false'
console.log('author' in book);