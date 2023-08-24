import { useState } from 'react'
import './App.css'
import CardList from './components/CardList';

function App() {

  const [coresLista, setCoresLista] = useState([]);
  const [corNome, setCorNome] = useState('');
  const [corCodigo, setCorCodigo] = useState('');


  const validacao = document.querySelector('.error');
  const inputForm = document.querySelector('.form');
  const inputs = document.querySelectorAll('input');
  
  const handleCoresSubmit = (event) => {
    
    event.preventDefault();

    if(corNome.length >= 3 && corCodigo.length == 7) {
      
      const novaCor = {nome: corNome.trim(), codigo: corCodigo.trim()};
      setCoresLista( (state) => [...state, novaCor] );
      setCorNome("");
      setCorCodigo("");

      inputs.forEach(input => {
        input.style.border = "none";
      });
      inputForm.style.border = "none";
      validacao.style.display = "none";
      inputForm.style.background = "#202020";

    } else {

      inputs.forEach(input => {
        input.style.border = "1px solid #FF7070";
      });

      inputForm.style.border = "1px solid #FF7070";
      inputForm.style.background = "rgba(255, 0, 0, 0.1)";
      validacao.style.display = "block";

    }

  }

  return (
    <main className="app">
     
    <form className="form" onSubmit={handleCoresSubmit}>
      
      <h3> ADICIONE UMA NOVA COR </h3>
      
      <div className="form_input">
        
        <div className="input">
          <label > Nome </label>
          <input 
            type="text" 
            name="corNome" 
            id="corNome" 
            placeholder="Digite o nome da cor"
            onChange={(event) => setCorNome(event.target.value)}
            value={corNome}
          />
        </div>

        <div className="input">
          <label> Cor </label>
          <input 
            type="text" 
            name="corCodigo" 
            id="corCodigo" 
            placeholder="Insira sua cor no formato Hexadecimal"
            onChange={(event) => setCorCodigo(event.target.value)}
            value={corCodigo}
          />
        </div>

      </div>

      <div className="form_button">
        <button type="submit" 
        disabled={corNome === '' || corCodigo === ''}>
          Adicionar
        </button>
      </div>

    </form>

    <p className="error"> Por favor, verifique os dados inseridos no formulário </p>

    <section id="card" className="listaCores">

        <h3> CORES FAVORITAS </h3>

        <div className="listaContent">
          
          <CardList coresLista={coresLista}/>

        </div>

    </section>

    </main>
  )
}

export default App
