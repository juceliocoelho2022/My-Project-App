import "./App.css";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <SayMyName nome="Jucelio" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome=" Jucelio"
        idade=" 41"
        profissao=" Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
