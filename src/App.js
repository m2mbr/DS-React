import React, { useState, useEffect } from 'react';
import Select from './Select';

function App() {
  const [estados, setEstados] = useState([
    {
      id: 1,
      descricao: 'Minas Gerais',
      sigla: 'MG',
    },
    {
      id: 2,
      descricao: 'Rio de Janeiro',
      sigla: 'RJ',
    },
    {
      id: 3,
      descricao: 'São Paulo',
      sigla: 'SP',
    },
  ]);

  const [estado, setEstado] = useState({ id: null, descricao: 'Vazio' });
  const mg = {
    id: 1,
    descricao: 'Minas Gerais',
    sigla: 'MG',
  };

  return (
    <div>
      <div>
        <Select data={estados} selected={estado} setSelected={setEstado} />
      </div>
      <div>
        <b>Selecionado:</b>: {estado.sigla}
      </div>
      <div>
        <button onClick={(e) => setEstado(mg)}>Selecionar MG</button>
      </div>
    </div>
  );
}

export default App;
