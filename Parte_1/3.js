/*Utilizando o laço “While” utilize a mesma lógica com do laço “For”.*/

function contador2() {
    let idade = Number(prompt('Digite sua idade:'))
    let cont = 1

    while (idade >= cont) {
        if (cont == idade) {
            alert('Você tem essa idade = ' + idade)
            break
        }
        else {
            alert('Dados não encontrados')
            cont++
        }
    }
}