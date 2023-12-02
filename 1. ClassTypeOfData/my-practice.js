/**
 * en: My First Resolution Applied by Diego Ceccon in the First Task of JavaScript Masterclass: Understanding and Documenting the Process
 * 
 * pt: Minha Primeira Resolução Aplicada por Diego Ceccon na Primeira Tarefa da Masterclass de JavaScript: Compreensão e Documentação do Processo
 */

function execute(input) {
    const columns = getColumnsSanitized(input);
    const tableName = getTableName(input);

    return {
        tableName,
        columns,
    };
}

function getColumnsSanitized(input) {
    try {
        const columns = extractColumns(input);
        return columns.split(",").map((value) => value.trimStart());
    } catch (error) {
        throw new Error(`Erro ao converter string de colunas em array. Trace: ${error}`);
    }
}

function extractColumns(input) {
    try {
        let regexToFindColumns = /\(([^)]+)\)/;
        return regexToFindColumns.exec(input)[1];
    } catch (error) {
        throw new Error(`Erro ao extrair dados das colunas. Trace: ${error}`);
    }
}

function getTableName(input) {
    try {
        let findTableName = /\btable\b\s+(\w+)/;
        return findTableName.exec(input)[1];
    } catch (error) {
        throw new Error(`Erro ao extrair dados do nome da tabela. Trace: ${error}`);
    }
}

console.log(
    execute(
        "create table author (id number, name string, age number, city string, state string, country string)"
    )
);
