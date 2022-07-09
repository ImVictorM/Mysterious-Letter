const botaoCriaCarta = document.getElementById('criar-carta');

function pegarAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// eslint-disable-next-line max-lines-per-function
function criaCarta() {
  const textoCarta = document.getElementById('carta-texto').value.trim();
  const cartaGerada = document.getElementById('carta-gerada');
  if (textoCarta === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerText = '';
    const arrayPalavras = textoCarta.split(' ');
    for (let index = 0; index < arrayPalavras.length; index += 1) {
      const spanPalavra = document.createElement('span');
      spanPalavra.style.display = 'inline-block';
      spanPalavra.classList.add(pegarAleatorio(grupoEstilo), pegarAleatorio(grupoTamanho));
      spanPalavra.classList.add(pegarAleatorio(rotacao), pegarAleatorio(inclinacao));
      spanPalavra.innerText = `${arrayPalavras[index]}`;
      cartaGerada.appendChild(spanPalavra);
    }
  }
}

botaoCriaCarta.addEventListener('click', criaCarta);
