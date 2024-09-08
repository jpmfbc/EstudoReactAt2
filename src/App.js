import logo from './logo.svg';
import './App.css';
import * as moduloCalculadora from "./module.js";

function App() {
  
  const Calcular = () => {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let operacao = document.getElementById("operacao").value;

    if (isNaN(n1) || isNaN(n2)) {
      alert("Valores inválidos")
      return;
    }

    const resposta = operacao == "+" ? moduloCalculadora.soma(n1, n2) : operacao == "-" ? moduloCalculadora.subtracao(n1, n2) : operacao == "*" ? moduloCalculadora.multiplicacao(n1, n2) : moduloCalculadora.divisao(n1, n2);
    document.getElementById("resultado").value = `O resultado é ${resposta}`;
  }

  const operacoes = ["+", "-", "/", "*"];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
      </header>
      <br />
      <body>
        <input id="n1" defaultValue="0" type="number" />
        <select id="operacao">
          {operacoes.map(ope =>
          (
            <option value={ope}>{ope}</option>
          ))}
        </select>
        <input id="n2" defaultValue="0"  type="number" />
        <button onClick={Calcular}>=</button>
        <input id="resultado" readonly />
      </body>
    </div>
  );
}

export default App;
