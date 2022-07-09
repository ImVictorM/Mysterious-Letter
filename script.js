const botaoCriaCarta = document.getElementById('criar-carta');

// eslint-disable-next-line max-lines-per-function
function criaCarta() {
  const textoCarta = document.getElementById('carta-texto').value.trim();
  const cartaGerada = document.getElementById('carta-gerada');
  if (textoCarta === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta';
  } else {
    const arrayPalavras = textoCarta.split(' ');
    for (let index = 0; index < arrayPalavras.length; index += 1) {
      const spanPalavra = document.createElement('span');
      spanPalavra.innerText = `${arrayPalavras[index]}`;
      cartaGerada.appendChild(spanPalavra);
    }
  }
}

botaoCriaCarta.addEventListener('click', criaCarta);
