/*1) Faça um programa que compare o valor de entrada digitado pelo usuário nas seguintes condições: se
for menor que 18 deverá imprimir a mensagem: “Você é adolescente” e aparecer a idade digitada,
concatenando o valor; se for maior que 18 e menor igual a 65 deverá imprimir: “Você é jovem”, e se for
acima de 65 anos deverá imprimir você é idoso. (Deverá utilizar if..else if..else)*/

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

/*2) Com laço “For” você deverá fazer a seguinte condição: quando o contador chegar ao número digitado
pelo usuário deverá imprimir uma mensagem: “Você tem essa idade: “ + idade (deve concatenar). Caso não
chegar a essa idade deverá imprimir: “Dados não encontrado!”*/

function contador1() {
    let idade = Number(prompt('Digite a sua idade:'))
    
    for (let i=1; i<=idade; i++) {
        if (i == idade) {
            alert('Você tem essa idade = ' + idade)
        }
        else{
            alert('Dados não encontrados!')
        }
    }
}

/*3) Utilizando o laço “While” utilize a mesma lógica com do laço “For”.*/

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

/*4) Explique a diferença entre o laço “do...while” e o laço “while”.*/

/*O "while" e o "do ... while" são duas estruturas de loop em JavaScript que permitem que você execute
repetidamente um bloco de código enquanto uma determinada condição for verdadeira. A principal
diferença entre as duas estruturas é que a instrução "do ... while" executa o bloco de código pelo
menos uma vez, mesmo que a condição não seja verdadeira, enquanto a instrução "while" verifica a
condição primeiro antes de executar o bloco de código.*/

/*5) Com laço “Switch case” faça a seguinte lógica: Com a entrada de dados do usuário caso for 1, deve
imprimir: “Gosto de anime Naruto”, caso 2: “One Punch é muito bom”, caso 3: “A série Supernatural é
muito boa”, caso 4: “Vikings com Ragnar era o melhor”, caso nenhuma das opções: você assiste algo que
não está na lista.*/

function caso() {
    console.log('Digite a opção que melhor te agrada:')
    console.log('1 = Naruto')
    console.log('2 = One Punch')
    console.log('3 = Supernatural')
    console.log('4 = Vikings')

    let n = Number(prompt('Digite a opção:'))
}