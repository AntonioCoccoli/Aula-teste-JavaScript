let precoEtanol = 2.72;
let precoGasolina = 5.86;
//Ecolha o tipo de combustível e adicione na variável
let tipoCombustivel = 'Gasolina';
const kmPorLitro = 13;
let distanciaEmKm = 450;

let valorGastoNaViagem;

let mediaDeCombustivelGasto = distanciaEmKm / kmPorLitro;
if (tipoCombustivel === 'Etanol'){
    valorGastoNaViagem = mediaDeCombustivelGasto * precoEtanol;
}else {
    valorGastoNaViagem = mediaDeCombustivelGasto * precoGasolina;
}

console.log(valorGastoNaViagem.toFixed(2))
