import './App.css';
import { GridFacil } from './components/GridFacil';
import { GridMedio } from './components/GridMedio';
import { GridDificil } from './components/GridDificil';
import { cardsFacil } from './data/cardsFacil'
import { cardsMedio } from './data/cardsMedio'
import { useState } from 'react';
import { cardsDificil } from './data/cardsDificil';

function App() {
  const [opions, setOptions] = useState(false)
  const [facil, setFacil] = useState(false)
  const [medio, setMedio] = useState(false)
  const [dificil, setDificil] = useState(false)

  return (
    <>
      {!opions && <div className='menu'>
        <h1>Jogo da Memoria dos animais </h1>
        <p>Selecione a dificuldade</p>
        <div className='menu-difuldades'>
          <button onClick={() => setOptions(true) & setFacil(true)} >Facil</button>
          &nbsp;
          &nbsp;
          <button onClick={() => setOptions(true) & setMedio(true)}>Medio</button>
          &nbsp;
          &nbsp;
          <button onClick={() => setOptions(true) & setDificil(true)}>Dificil</button>
        </div>
      </div>}

      <div className="App">
        {facil &&
          <>
            <button onClick={() => setOptions(false) & setFacil(false)}>Voltar Para o menu</button>
            <GridFacil cards={cardsFacil} />
          </>
        }
        {medio &&
          <>
            <button onClick={() => setOptions(false) & setMedio(false)}>Voltar Para o menu</button>
            <GridMedio cards={cardsMedio} />
          </>
        }
        {dificil &&
          <>
            <button onClick={() => setOptions(false) & setDificil(false)}>Voltar Para o menu</button>
            <GridDificil cards={cardsDificil} />
          </>
        }
      </div >
    </>
  );
}

export default App;
