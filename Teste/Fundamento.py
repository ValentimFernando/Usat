array = [1,3,2]
matriz = [
    [1,2,3],
    [4,5,6]
]

def QuickSort(array):
    if len(array)<1:
        return array
    pivo = array[0]
    menor = []
    maior = []
    for i in array:
        if i < pivo:
            menor.append(i)
        elif i > pivo:
            maior.append(i)

    return QuickSort(menor) + [pivo] + QuickSort(maior)

def duplicador(array):
    new_array = []
    for i in array:
        new_array.append(i)
        new_array.append(i)
    return new_array

#def duplicatas(array):
    meu_set = set()
    for i in array:
        if i in meu_set:
            return True
        meu_set.add(i)
    return False
        
def ShellSort(array):
    n = len(array)
    gap = n//2
    while gap > 0:
        for i in range(gap, n):
            temp = array[i]
            j = i
            while j >= gap and array[j - gap] > temp:
                array[j] = array[j - gap]
                j -= gap
            array[j] = temp
        gap //= 2
    return array 

def soma_matriz(matriz):
    soma_total = 0
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            soma_total += matriz[i][j]
    return soma_total

def soma_acumulada(array):
    soma = 0
    for i in range(len(array)):
        soma += array[i]
    return soma

def pares(array):
    par = []
    for i in array:
        if i%2 == 0:
            par.append(i)
    
    if par == []:
        return None    
    else:
        p = len(par)
        return p
    

