import React, { useState, useEffect } from 'react';
import Select  from './Select';


function Exemplo(props) {
  const [count, setCount] = useState(0);
  
  function getItem(e) {
    let item = props.data.find(item => item.id == e.target.value)
    props.setSelected(item)
  }

  return (
    <select onChange={e => getItem(e)}>
      <option>--------------------</option>
      {
        props.data.map(item => 
          <option value={item.id} key={Math.random()}>{item.descricao}</option>
        )
      }
    </select>
  );
}


function App() {

  const [estados, setEstados] = useState([
    {
      id: 1,
      descricao: 'Minas Gerais',
      sigla: 'MG'
    },
    {
      id: 2,
      descricao: 'Rio de Janeiro',
      sigla: 'RJ'
    },
    {
      id: 3,
      descricao: 'São Paulo',
      sigla: 'SP'
    }
  ]);

  const estados2 = [
    {
      id: 1,
      descricao: 'Minas Gerais',
      sigla: 'MG'
    }, {
      id: 2,
      descricao: 'Rio de Janeiro',
      sigla: 'RJ'
    }, {
      id: 3,
      descricao: 'São Paulo',
      sigla: 'SP'
    }, {
      id: 4,
      descricao: 'Paraná',
      sigla: 'PR'
    }
  ]
  
  
  const [estado, setEstado] = useState({id: null, descricao: 'Vazio'})
  const mg = {
    id: 1,
    descricao: 'Minas Gerais',
    sigla: 'MG'
  }

  return (
    <div>
      <div>
        <Select data={estados} selected={estado} setSelected={setEstado} />
      </div>
      <div>
        <b>Selecionado:</b>: {estado.sigla}
      </div>
      <div>
        <button onClick={e => setEstado(mg)}>Selecionar MG</button>
      </div>
      <div>
        <button onClick={e => setEstados(estados2)}>ADD PR</button>
      </div>
      <div>
        <Exemplo data={estados} selected={estado} setSelected={setEstado} />
      </div>
    </div>
  );
}

export default App;
