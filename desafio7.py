import math
def tamanho_setor_busca(areamaior,areamenor):
    #aqui eu divido a areaMaior e a areaMenor pelo numero de setores (8) e subtraio ambos
  result = (areamaior/8)-(areamenor/8)
  return str(int(result) if result%1==0 else result)