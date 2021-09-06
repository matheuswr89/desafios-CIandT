import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Challenge {
    public static List<String> geraFrequenciaNota(Integer semitons) {
        System.out.println(semitons);
		// aqui eu defino as representações da ordem crescente em ordem alfabetica
		String[] notasCrescente = { "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#" };

		// aqui eu defino as representações da ordem descrecente na ordem original
		String[] notaDecrescente = { "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B" };

		// aqui eu faço o calculo da frequencia
		Double result = (440 * Math.pow(2, (semitons / 12f)));
		// aqui eu crio o array já adicionando o resultado da frequencia formatado
		List<String> array = new ArrayList<>();
		array.add(result % 1 == 0 ? String.valueOf(result.intValue()) : String.format("%.4f", result));

		int indice;
		// aqui eu verifico se o semitons é positivo ou negativo e adiciono no array
		// o indice da frequencia de acordo com o semitons
		if (semitons >= 0) {
			indice = (result >= (440 * 2)) ? notasCrescente.length - semitons : semitons;
			array.add(notasCrescente[indice > 0 ? indice : Math.abs(indice)]);
		} else {
			indice = (Math.abs(semitons) < 24) ? Arrays.asList(notaDecrescente).indexOf("A") + semitons
					: (semitons + (notasCrescente.length * 2)) + Arrays.asList(notaDecrescente).indexOf("A");
			array.add(notaDecrescente[indice]);
		}

		return array;
	}
}