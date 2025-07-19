alert('Boas vindas ao jogo do número secreto! Você terá que adivinhar qual é o número secreto!');
let numeroMaximo = 10
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    if (isNaN(chute)){
        chute = alert(`O valor digitado não é um número. Por favor tente novamente.`);
    } else {
            if (numeroSecreto == chute) {
            break;
            } else {
                if (chute > numeroSecreto) {
                alert(`O número ${chute} é maior que o número secreto. Por favor tente novamente.`);
                } else {
                alert(`O número ${chute} é menor que o número secreto. Por favor tente novamente.`);
                }
                tentativas++;
            }
        }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você acertou o número secreto (${numeroSecreto}) com apenas ${tentativas} ${palavraTentativa}.`)