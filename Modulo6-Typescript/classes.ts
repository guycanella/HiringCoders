class Data{
    dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1,1,2020);
console.log(data.dia);
// console.log(data.mes) // não funciona

const data2 = new Data(1,1); // Vai usar o ano de 1970 como default

class Pessoa{
    constructor(public nome: string, public idade: number, private cpf: string){}
}