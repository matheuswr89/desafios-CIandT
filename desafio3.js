function retornaPessoasPreferemUmUnicoPalco(quantidadePessoasEvento) {
  // Primeiro eu subtrai as porcentagem das pessoas que gostam dos palcos A e B, A e C, B e C, pelas pessoas que gostam dos três palcos que resultou em: 
  //A e B: 20 - 3 = 17  
  //A e C: 18 - 3 = 15
  //B e C: 10 - 0 = 7
  // Depois eu somei os resultados como mostrado a seguir:
  //A: 17 (resultado de A e B) + 15 (resultado de A e C) + 3 = 35
  //B: 17 (resultado de A e B) + 7 (resultado de B e C) + 3 = 27
  //C: 15 (resultado de A e C) + 7 (resultado de B e C) + 3 = 25
  // E finalmente eu pequei os resultados da soma anterior e subtrai pela porcentagem dos respectivos palcos(A, B, C) e somei o resultado das subtrações
  let porcentagemTotal = (45-35)+(33-27)+(34-25);
  // aqui eu retorno o numero de pessoas multiplicando a quantidadePessoasEvento por porcentagemTotal e depois divido por 100
  return Math.floor((quantidadePessoasEvento*porcentagemTotal)/100);
}