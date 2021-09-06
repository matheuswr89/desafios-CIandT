function calculaDistanciaBandaPercorre(numeroRodadaEnsaios,numeroShows) {
  //aqui eu descubro a distancia total percorrida por cada um individualmente no ensaio e multiplico pelo numero de ensaios
  let distanciaEnsaios = (2750 * numeroRodadaEnsaios) + (3250 * numeroRodadaEnsaios) + (2750 * numeroRodadaEnsaios) + (2250 * numeroRodadaEnsaios) + (2750 * numeroRodadaEnsaios) + (3750 * numeroRodadaEnsaios);
  //aqui eu descubro a distancia total percorrida por cada um individualmente no show e multiplico pelo numero de shows
  let distanciaToP = (750 * numeroShows)+  (1250 * numeroShows)+  (1250 * numeroShows)+  (750 * numeroShows)+  (500 * numeroShows)+  (750 * numeroShows);
  //aqui eu somo as distancias e multiplico por 2 para representar a ida e volta
  return (distanciaEnsaios + distanciaToP)*2;
}