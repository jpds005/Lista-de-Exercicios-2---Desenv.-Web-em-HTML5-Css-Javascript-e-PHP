/* 1) Escreva uma função chamada contarOcorrencias que receba um array de números e retorne um 
objeto contendo a frequência de cada número no array */

function contarOcorrencias(numeros) //criação da função
{ 
    const freq = {}; //cria um "dicionário" para armazenar os dados e a quantidade deles

    for (let numero of numeros) { //laço que passa número por número dos arrays
        if (freq[numero] == null) //se não tiver nenhuma quantidade do número...
        {
            freq[numero] = 1; //adiciona 1 à quantidade
        }
        else //se já tiver alguma quantidade do número
        { //
            freq[numero]++; //adiciona mais 1 à quantidade
        }
    }

    return freq; //retorna o "dicionário" de números e suas quantidades
}

const numeros = [1, 2, 2, 3, 1, 4, 2, 3]; //estabelece o array de números
console.log(contarOcorrencias(numeros)); //manda escrever o output da função
