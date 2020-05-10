import React from 'react';

import './App.css';
import Tabela from './Tabela';

const autores = [
  {
    nome: 'Paulo',
    livro: 'React',
    preco: '1000'
  },
  {
    nome: 'Daniel',
    livro: 'Java',
    preco: '99'
  },
  {
    nome: 'Marcos',
    livro: 'Design',
    preco: '150'
  },
  {
    nome: 'Bruno',
    livro: 'DevOps',
    preco: '100'
  },
  {
    nome: 'Henrique',
    livro: 'React/Node',
    preco: '2000'
  }
];

function App() {
  return (
    <Tabela autores = { autores } />
  );
}

export default App;
