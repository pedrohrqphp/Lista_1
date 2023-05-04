/*Faça um programa que compare o valor de entrada digitado pelo usuário nas seguintes condições: se for
menor que 18 deverá imprimir a mensagem: “Você é adolescente” e aparecer a idade digitada, concatenando
o valor; se for maior que 18 e menor igual a 65 deverá imprimir: “Você é jovem”, e se for acima de 65
anos deverá imprimir você é idoso. (Deverá utilizar if..else if..else)*/

function idade() {
    let x = Number(prompt('Idade:'))

    if (x < 18) {
        alert('Você é adolescente = ' + x);
    }
    else if (x >= 18 && x <= 65) {
        alert('Você é jovem = ' + x);
    }
    else {
        alert('Você é idoso = ' + x);
    }
}