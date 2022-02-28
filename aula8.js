/*Lúcia Amália Alves tem 20 anos,
 pesa 58 kg e tem 1.58 de altura 
 e seu imc é de 23.233456176894723
 Lucia Amalia nasceu em 2001
 */


 const nome = 'Lúcia Amália';
 const sobrenome = 'Nogueira';
 const idade = 20;
 const peso = 58;
 const alturaEmM = 1.58;

 
 imc = peso / (alturaEmM * alturaEmM);
 anoNascimento = 2022 - idade;

 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
 console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
 console.log(`${nome} nasceu em ${anoNascimento}.`);