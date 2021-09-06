class Challenge {
    public static boolean retornaSeHaEcoNoEstudio(Integer distancia) {
        //primeiro eu calculo a distancia minima para ter eco
        double distanciaMinima = (340*.1)/2;
        //depois eu verifico se a distancia é maior que a distancia minima
        // se é maior eu retorno true, caso contrario retorno false
        return distancia >= distanciaMinima ? true : false;
    }
}