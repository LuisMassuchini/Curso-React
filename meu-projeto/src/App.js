import HelloWorld from './components/HelloWorld';
import './App.css';
import SayMyname from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <HelloWorld/>
      <SayMyname nome="Felipe" />
      <SayMyname nome="João" />
      <SayMyname nome={nome} />
      <Pessoa 
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder/150" />
        <List/>

    </div>
  );
}

export default App;
