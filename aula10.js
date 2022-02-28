/*
    * Aritméticos
    * + Adição / Concatenação 
    * ** Potenciação   
    * % Resto da divisão
    * 
*/

/* Precedência dos operadores 

()
**
* / %
+ -

*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3)

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
console.log(contador);

//contador modifica o valor de um operador, porém não devemos utilizar const e sim let


/*
Ele não resolve quando há uma string,
porém se for algum número ele tenta resolver
*/

//NaN - Not a number - parseInt (inteiro), parseFloat(decimais), Number (qualquer um).
const num1 = 10;
const num2 = L5;
console.log(num1 * num2);
console.log(typeof num2);
