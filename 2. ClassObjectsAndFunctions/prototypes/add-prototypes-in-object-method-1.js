const functionalLanguage = {
    paradigm: "Functional"
};

const scheme = {
    name: 'Scheme',
    year: 1975,
    __proto__: functionalLanguage
};

const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};

/**
 * Exibe quais propriedades fazem parte de Scheme e quais não fazem
 */
for (const key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}