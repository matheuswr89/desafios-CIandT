import math
def retorna_guiche_ingresso(ingresso_numero):
    # primeiro eu descubro a raiz quadrada do numero do ingresso e depois
    # eu arredondo para o próximo número
    return math.ceil(math.sqrt(ingresso_numero))