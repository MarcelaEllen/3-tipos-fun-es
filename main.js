function oi() {
    console.log("Oi, quer calcular sua média?");
}

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

const exibirResultado = (resultado) => {
    console.log("A média dos números é:", resultado.toFixed(2));
}

oi();

const num1 = parseFloat(prompt("Digite o primeiro número"));
const num2 = parseFloat(prompt("Digite o segundo número"));
const num3 = parseFloat(prompt("Digite o terceiro número"));

const media = calcularMedia(num1, num2, num3); 
exibirResultado(media); 
