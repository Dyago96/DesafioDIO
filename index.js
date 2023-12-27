console.log ("calcular ranked");
function calcularRanked (vitorias, derrotas){
    var saldovitorias = vitorias - derrotas;
    var nivel;

    if (vitorias < 10){
        nivel = "ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel "lindário";
    } else {
        nivel = "imortal";
    }

    return {saldoVitorias,nivel };

}

// exemplo de uso da função
var vit = parseInt (prompt("digite a quantidade de vitorias: "));
var der = parseInt (prompt("digite a quantidade derrotas: "));

var resultado = calcularRanked(vit, der);

// exibindo a mensagem de saída 
console.log ("O herói tem um saldo de " + resultado.saldoVitorias + "e está no nivel de " + resultado.nivel);