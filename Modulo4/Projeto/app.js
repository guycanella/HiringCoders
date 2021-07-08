const livros = require('./database');

// pegar o input
const readline = require('readline-sync');
const entradaInicial = readline.question('Deseja buscar um livro? S/N');

// Se sim, a gente mostra as categorias disponíveis e pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:');
    console.log(livros.map(livro => livro.categoria));

    const entradaCategoria = readline.question('Qual categoria você escolhe?');
    const retorno = livros.filter(livro => livro.categoria.toLocaleUpperCase() === entradaCategoria.toLocaleUpperCase());
    console.table(retorno);
}else{
    console.log('Esses são todos os livros disponíveis:');
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.table(livrosOrdenados);
}