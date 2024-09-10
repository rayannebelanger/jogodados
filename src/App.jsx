import React, { useState } from 'react';

function App() {
  const [dado1, colocarNumero1] = useState(1);
  const [dado2, colocarNumero2] = useState(1);
  const [resultado, mostrar] = useState('');
  const [contadorVitoria, mostrarVitoria] = useState(0);
  const [contadorDerrota, mostrarDerrota] = useState(0);
  const [score, contagemScore] = useState (0);

  function jogar() {
    const aleatorio1 = Math.floor(Math.random() * 6) + 1;
    const aleatorio2 = Math.floor(Math.random() * 6) + 1;

    colocarNumero1(aleatorio1);
    colocarNumero2(aleatorio2);

    const somaNumeros = aleatorio1 + aleatorio2;

    if(somaNumeros == 7 || somaNumeros == 11) {
      mostrar('Ganhou, sortudo!!');
      mostrarVitoria(contadorVitoria + 1);
      contagemScore(score + 1);
    } else {
      mostrar('Perdeu, azarado!!');
      mostrarDerrota(contadorDerrota + 1);
      contagemScore(score + 1);
    }
  }

const percentualVitoria = score > 0 ? (contadorVitoria / score) * 100 : 0;

  return (
    <div>
      <h1>Tente a sua sorte!</h1>
      <p>Gire os dados e caso a soma dos dois dados for 7 ou 11, você ganha!</p>

      <h3>Dado 1: {dado1}</h3>
      <h3>Dado 2: {dado2}</h3>
      <button onClick={jogar}>Jogar</button>
      <h3>{resultado}</h3>

      <h2>Percentual derrota e vitória:</h2>
      <p>Vitória: {contadorVitoria}</p>
      <p>Total de jogadas: {score}</p>
      <p>Score: {contadorVitoria}/{score}</p>
      <p>Porcentagem de vitória: {percentualVitoria.toFixed(2)}%</p>
    </div>
  )
}

export default App