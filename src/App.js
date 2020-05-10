import React, { Component } from 'react';

import './App.css';
import Tabela from './Tabela';
import ContaClicks from './ReactHooks';

class App extends Component {
  state = {
    autores: [
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
    ]
  }

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <ContaClicks />
      </div>
    );
  }
}

export default App;
