const book1 = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
};

const book2 = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
};

let equal = true;

for (const key in book1) {
    if (book1[key] !== book2[key]) {
        equal = false
    }
}

for (const key in book2) {
    if (book1[key] !== book2[key]) {
        equal = false
    }
}

console.log("Objetos iguais? ", equal)