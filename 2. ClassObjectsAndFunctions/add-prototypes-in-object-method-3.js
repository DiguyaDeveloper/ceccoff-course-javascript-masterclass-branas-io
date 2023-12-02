const functionalLanguage = {
    paradigm: "Functional"
};

const scheme = Object.create(functionalLanguage);
scheme.name = 'Scheme';
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = 'JavaScript';
javascript.year = 1995;
javascript.paradigm = 'POO';

/**
 * Exibe quais propriedades fazem parte de Scheme e quais não fazem
 */
for (const key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}

/**
 * Objetos herdam de seus prototypes por forma de Shadown
 * Sendo assim, objeto pode fazer Override das propriedades do Prototype
 */

// Expect console 'POO'
console.log(javascript.paradigm);

// Expect console 'Functional'
console.log(javascript.__proto__.paradigm);

// Expect console 'Functional'
console.log(Object.getPrototypeOf(javascript).paradigm);
