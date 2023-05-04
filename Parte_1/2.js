/*Com laço “For” você deverá fazer a seguinte condição: quando o contador chegar ao número digitado
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