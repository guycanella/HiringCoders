function fizzBuzz(inp){

    return (typeof(inp) !== 'number')           ? 'Não é um número'
         : ((inp % 3 === 0) && (inp % 5 === 0)) ? 'FizzBuzz'
         : ((inp % 3 === 0) && (inp % 5 !== 0)) ? 'Fizz'
         : ((inp % 3 !== 0) && (inp % 5 === 0)) ? 'Buzz'
         : inp;
}

function reverseAString(exp){
    let aux = '';
    for (let i=exp.length - 1; i >= 0; i--){
        aux = aux + exp[i];
    }

    return aux;
}

function convertToFahrenheit(temp){
    return (temp < -273.15) ? 'Essa temperatura não existe' : (temp*9/5) + 32;
}

console.log(convertToFahrenheit(100))