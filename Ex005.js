/* 5) Escreva uma função somaMatriz que receba uma matriz (array 2D) de números e retorne a soma
de todos os elementos da matriz. */

function somaMatriz(matriz) //criação da função
{ 

    let soma = 0 //cria uma variável chamada "soma"
    const linhas = matriz.length //cria uma constante que armazena o número de linhas
    const colunas = matriz[0].length //cria uma constante que armazena o número de colunas
    
    for (let i = 0; i < linhas; i++) //for que vai passar por cada linha
    {
        for (let j = 0; j < colunas; j++) //for que vai passar por cada coluna
        {
            soma += matriz[i][j]; //será somado na variável "soma" o valor daquele elemento da matriz
        }
    }
    
    return "A soma dos elementos da matriz é " + soma; //retorna a frase que indica o valor da soma dos elementos
}

const matriz = [ //estabelece a matriz de números
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(somaMatriz(matriz)); //manda escrever o output da função
