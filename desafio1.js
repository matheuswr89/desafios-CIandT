function retornaTempoArenaEmMilisegundos(distancia,velocidade) {
  //primeiro tranformo a distancia para metros, divido pela velocidade e depois multiplico
  //por mil para obter o tempo em milissigundos e arredondo para o mais proximo
  return Math.round(((distancia*1000)/velocidade)*1000);
}