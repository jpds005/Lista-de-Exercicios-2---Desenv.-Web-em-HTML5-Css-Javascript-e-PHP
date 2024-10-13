/* 3) Crie uma função separarParesImpares que receba um array de números e retorne um objeto com
dois arrays: um contendo os números pares e outro contendo os números ímpares. */

function separarParesImpares(numeros) //criação da função
{ 
    const pares = [] //cria um array para armazenar os números pares
    const impares = [] //cria um array para armazenar os números ímpares
    
    for(let numero of numeros) //laço que passa número por número do array numeros
    {
        if (numero % 2 == 0) //se o número for par...
        {
            pares.push(numero) //adiciona o número ao array "pares"
        }
        if (numero % 2 != 0) //se o número for ímpar...
        {
            impares.push(numero) //adiciona o número ao array "impares"
        }
    }
    return {pares, impares} //retorna os arrays "pares" e "impares"
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //estabelece o array de números
console.log(separarParesImpares(numeros)); //manda escrever o output da função
