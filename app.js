alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 200
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo)
console.log(`Número secreto: ${numeroSecreto}`);
let chute
let tentativas = 1

while(chute != numeroSecreto){
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}.`)
        } else {
            alert(`O número secreto é menor que ${chute}.`)
        }
        tentativas ++
    }
}

let tent = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabens! Você acertou o número secreto com ${tentativas} ${tent}.`); // mostra o valor do número secreto armazenado na variável
