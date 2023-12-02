/**
 * en: Resolution Applied by Rodrigo Branas in the JavaScript Masterclass Course: Understanding and Documenting the Process
 * 
 * pt: Resolução Aplicada por Rodrigo Branas no Curso JavaScript Masterclass: Compreensão e Documentação do Processo
 */

const statement = 'create table author (id number, name string, age number, city string, state string, country string)';

const regexp = /create table ([a-z]+) \((.+)\)/;

const parsedStatement = statement.match(regexp);

const tableName = parsedStatement[1];

let columns = parsedStatement[2];

columns = columns.split(", ");

console.log(tableName);

console.log(columns);


