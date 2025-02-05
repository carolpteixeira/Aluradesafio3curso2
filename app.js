function calculoIMC(altura, peso){
    let IMC = peso / (altura * altura);
    return IMC;
}

let peso = 104;
let altura = 1.71;
let resultado1 = calculoIMC(altura, peso);
console.log(`O IMC é ${resultado1}`);

function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }
    let fatorial = 1;
        for(let i = 2; i <= numero; i++){
            fatorial *= i;
        }
    
    return fatorial;
}
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function converterDolarParaReais(dolares){
    let reais = 4.80;
    let conversao = dolares*reais;
    return conversao;
}

let dolares = 15;
let resultado2 = converterDolarParaReais(dolares);
console.log(`A conversão de $${dolares} dólares para reais é R$${resultado2}`);

function salaRetangular(altura1, largura1){
    let areaR = altura1*largura1;
    let perimetroR = 2*(altura1+largura1);
    console.log(`A área da sala retangular de altura ${altura1} e largura ${largura1} tem ${areaR}m² e o perímetro tem ${perimetroR}m`);
}
let altura1 = 15;
let largura1 = 35;
salaRetangular(altura1, largura1);

function salaCircular(raio){
    let pi = 3.14;
    let area = pi*raio*raio;
    let perimetro = 2*pi*raio;
    console.log(`A área da sala circular de raio ${raio} tem ${area}m² e o perímetro tem ${perimetro}m`);
}

let raio = prompt('Digite o valor do raio da sala:');
salaCircular(raio);

function tabuada(num){
    for(let i = 0; i <= 10; i++) {
        let valor = num*i;
        console.log(`${num} * ${i} = ${valor}`);
    }
}

tabuada(15);