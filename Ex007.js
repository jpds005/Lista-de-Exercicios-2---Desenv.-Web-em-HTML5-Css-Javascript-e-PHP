/* 7) Escreva uma função multiplicarMatrizes que receba duas matrizes e retorne a multiplicação delas,
se possível. Lembre-se que, para multiplicar matrizes, o número de colunas da primeira deve ser
igual ao número de linhas da segunda. */

function multiplicarMatrizes(matrizA, matrizB) //criação da função
{

    // A) VERIFICANDO SE É POSSÍVEL FAZER A MULTIPLICAÇÃO

    const linhasB = matrizB.length; //cria uma constante que armazena o número de linhas da matriz B
    const colunasA= matrizA[0].length; //cria uma constante que armazena o número de colunas da matriz A


    if (colunasA !== linhasB) //se o número de colunas de A for diferente do de linhas de B
    {
        return "Número de colunas da matriz A não bate com o número de linhas da matriz B!"; //retorna essa frase
    }

    // B) CRIANDO A MATRIZ QUE VAI ARMAZENAR OS RESULTADOS (trabalharei com as linhas de A e colunas de B pra facilitar a conexão de i(A)xj(B))

    const linhasA = matrizA.length; //cria uma constante que armazena o número de colunas da matriz A
    const colunasB = matrizB[0].length; //cria uma constante que armazena o número de colunas da matriz A
    const matrizResultado = []; //cria um array que vai armazenar a matriz

    for (let i = 0; i < linhasA; i++) //for que vai passar por cada número de linhas da matriz A
    {
        matrizResultado[i] = []; //cria naquela linha do array matriz resultado um novo array

        for (let j = 0; j < colunasB; j++) //for que vai passar por cada número de colunas da matriz B
        {
            matrizResultado[i][j] = 0; //cria dentro do array recém criado da matriz resultante o valor 0 (trocarei depois)
        }
    }

    // C) REALIZANDO A MULTIPLICAÇÃO (trabalharei com as linhas de A e colunas de B pra facilitar a conexão de i(A)xj(B))

    for (let i = 0; i < linhasA; i++) //for que vai passar por cada número de linhas da matriz A
    {
        for (let j = 0; j < colunasB; j++) //for que vai passar por cada número de colunas da matriz B
        {
            let a = 0; 
            /* cria uma variável auxiliar "a", que nesse caso valerá 0 -> 1 -> 2 
            (3 colunas em A e 3 linhas em B == 3 elementos na hora da conta), 
            para trocar a linha/coluna de quem precisar para fazer a conta */
            while (a < colunasB) //enquanto a for menor que o número de colunas de B...
            {
                matrizResultado[i][j] += matrizA[i][a] * matrizB[a][j];
                /* A posição i,j da matrizResultado vai receber a multiplicação 
                dos elementos na posição matrizA i,a & matrizB a,j */
                a++; //soma +1 a "a"
            }
        }
    }

    return {matrizResultado}; //retorna a matriz resultado
}

const matrizA = [ //estabelece a matriz A
    [1, 2, 3],
    [4, 5, 6],
];

const matrizB = [ //estabelece a matriz B
    [7, 8],
    [9, 10],
    [11, 12]
];

console.log(multiplicarMatrizes(matrizA, matrizB)); //manda escrever o output da função
