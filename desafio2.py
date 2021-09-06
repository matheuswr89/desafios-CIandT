import math
def retorna_tempo_minimo_em_minutos(p,s,n):
    #aqui eu pego o numero de pessoas e divido pelo numero de portões, multiplico pelos segundos, divido por 60 e arredondo para o mais proximo, e caso o numero de pessoas seja impar eu adiciono mais um que seja mais exato
    return math.ceil(((p/n)*s)/60) if p%2==0 else math.ceil(((p/n)*s)/60+1);