/* 2) Crie uma função chamada ordenarPorIdade que receba um array de objetos representando
pessoas, cada uma com nome e idade. A função deve retornar o array ordenado pela idade em
ordem crescente. */

function ordenarPorIdade(pessoas) 
{
    const cresc = []; //cria um array para armazenar as pessoas em ordem de idade crescnte

    for (let posicao_da_pessoa = 0; posicao_da_pessoa < pessoas.length; posicao_da_pessoa++) 
    //for que percorre cada pessoa no array "pessoas"
    {
        let a = 0; //índice que vai percorrer cresc e procurar uma idade menor que a da lista de pessoas
        
        while (a < cresc.length && pessoas[posicao_da_pessoa].idade >= cresc[a].idade)
        /* enquanto "a" for menor que o comprimento do array cresc; e enquanto a idade da pessoa atual no 
        array "pessoas" for maior ou igual à idade na posição "a" no array "cresc"... */
        {
            a++; //soma +1 no índice a para encontrar (e depois indicar) a posição certa em "pessoas"
        }

        cresc.splice(a, 0, pessoas[posicao_da_pessoa]); // insere a pessoa atual na posição "a" no array cresc
    }

    return cresc; //retorna o array de pessoas em ordem de idade crescente
}

const pessoas = [ ////estabelece o array de pessoas e suas respectivas idades
    { nome: 'Alice', idade: 25 },
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Carlos', idade: 35 }
];

console.log(ordenarPorIdade(pessoas)); //manda escrever o output da função
