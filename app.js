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

// if (tentativas > 1) {
//     alert(`Parabéns você acertou! O número secreto era ${numeroSecreto}! Foram realizadas ${tentativas} tentativas.`)
// } else {
//     alert(`Parabéns você acertou! O número secreto era ${numeroSecreto}! Foi realizada apenas ${tentativas} tentativa!`)
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você acertou o número secreto (${numeroSecreto}) com apenas ${tentativas} ${palavraTentativa}.`)



// alert('Boas vindas ao nosso site!');
// let nome = "Lua"
// let idade = 25
// let numeroDeVendas = 50
// let saldoDispinivel = 1000
// let mensagemDeErro = "Erro! Preencha todos os campos"
// alert(mensagemDeErro);

// let nome2 = prompt('Qual o seu nome?');
// let idade2 = prompt('Qual a sua idade?');

// if (idade2 > 18) {
//     alert('Parabéns! Você tem a idade minima para tirar a habilitação!')
// } else {
//     alert('Infelizmente você não pode tirar a habilitação devido a ser menor de idade.')
// }
