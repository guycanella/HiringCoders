// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 31;

// String
const nome: string = 'Guilherme';

// Array
const valores: number[] = [23,45,17];
const valores2: Array<number> = [12,55,65];

// Tuple
let jogadores: [string,number,boolean];
jogadores = ['Vitor', 3, true];

// Enum
enum statusAprovacao{
    Aprovado,
    Pendente,
    Rejeitado
}

const stat: statusAprovacao = statusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123,'Vitor',false];
const retornoDaAPI2: any = {/* algum objeto */};

// Void
function printarNaTela(msg: string): void{
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(algumaCoisa: object){
    // .......
}

// Never
function loopInfinito(): never{
    while(true){}
}

function erro(msg: string): never {
    throw new Error(msg);
}

// Union Types
const nota: number | string = 5;
function exibirNota(nota: number | string){
    console.log(`A sua nota é ${nota}.`);
}

exibirNota(10);   // Aceita
exibirNota('10'); // Aceita

// Alias
type Funcionarios = string[] | number[];
const funcionarios: Funcionarios = ['Guilherme','Fulano','Ciclano'];

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // O ponto de interrogação deixa o atributo opcional
}

const contato1: Contato = {
    nome : 'Guilherme',
    telefone1 : '123456'
}

const contato2: Contato = {
    nome : 'Luiz',
    telefone1 : '7891011',
    telefone2 : '3655487'
}

// Assertion
const minhaIdade: any = 31;
(minhaIdade as number).toString();

// Não funciona
// const input = document.getElementById('numero1');
// console.log(input.value);

// Funciona
const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);