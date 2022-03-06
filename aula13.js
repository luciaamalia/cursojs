//mais sobre strings

/*
Se eu quiser escapar um caractere posso utilizar control barra \ 
Exemplo:
*/

//let umaString = "Um \"texto\"";
//console.log(umaString);


/*
Se eu quiser utilizar o comando console.log(umaString.charAt(6)); 
ele vai retornar o caractere (indice) solicitado dentro do parênteses
*/
//               01234567
//let umaString = "Um texto";

/* 
console.log(umaString.charAt(6));
console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ', 'dia.' ));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('texto')); // saída 3 pq é onde começa 
console.log(umaString.search(/x/)); // search encontra o num do índice = 5
console.log(umaString.replace('Um', 'Outro'));  // substituir uma palavra por outra
*/
//               0123456789
let umaString = "O rato roeu a roupa do rei de roma";
/*
console.log(umaString.replace(/r/g, '#')); /substituição
console.log(umaString.length); / verifica o tamanho da string

.slice : aonde eu quero que corte a string

*/
console.log(umaString.slice (-3));

