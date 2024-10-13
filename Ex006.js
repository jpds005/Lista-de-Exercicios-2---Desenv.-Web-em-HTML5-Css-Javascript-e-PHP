/* 6) Escreva uma função substituirElemento que receba um array, um valor antigo e um novo valor. A
função deve substituir todas as ocorrências do valor antigo pelo novo valor no array. */

function substituirElemento(array, vAntigo, vNovo) //criação da função
{
    tamanho = array.length; //cria uma constante que armazena o tamanho do array
    
    for (let i = 0; i < tamanho; i++) //for que vai passar por cada elemento
    {
        if (array[i] === vAntigo) //se o elemento for igual ao valor a ser alterado...
        {
            array[i] = vNovo; //substituir esse elemento
        }
    }
    return "Novo array: " + array; //retorna a frase que indica o novo array alterado
}

const array = [1, 2, 3, 2, 4, 2, 5]; //estabelece o array de números
const vAntigo = 2; //estabelece o valor a ser alterado
const vNovo = 9; //estabelece o substituto do valor

console.log(substituirElemento(array, vAntigo, vNovo)); //manda escrever o output da função
