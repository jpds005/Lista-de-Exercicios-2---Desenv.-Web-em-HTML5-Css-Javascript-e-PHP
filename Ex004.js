/* 4) Crie uma função ehPalindromo que receba uma string e verifique se ela é um palíndromo (ou seja,
se pode ser lida da mesma maneira de trás para frente). */


function ehPalindromo(palavra) //criação da função
{ 

    let reverso = palavra.split(''); //divide a string em caracteres e arnazena em "reverso"
    reverso = reverso.reverse(); //reverte a ordem dos caracteres
    reverso = reverso.join(''); //junta os caracteres numa string
    
    if (palavra == reverso) //se a palavra for igual à seu reverso...
    {
        return palavra + " é um palíndromo!" //retorna a frase que é um palíndromo
    }
    else //se a palavra não for igual à seu reverso...
    {
        return palavra + " não é um palíndromo!" //retorna a frase que não é um palíndromo
    }
}

console.log(ehPalindromo("mussum")); //manda escrever o output da função
console.log(ehPalindromo("ana")); //manda escrever o output da função
console.log(ehPalindromo("gato")); //manda escrever o output da função
