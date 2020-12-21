import React from 'react';

const titulo = <h1>Essa é um titulo</h1>;
const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return ' Brayan ' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <>
      {titulo}
      <p>
        {true ? 'true' : 'false'} - {10}
        {mostrarNome('Moncks')}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
    </>
  );
};

export default App;
