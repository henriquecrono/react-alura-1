import React, { Component, Fragment } from 'react';

import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
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

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  }

  render() {
    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        <ContaClicks />
      </Fragment>
    );
  }
}

export default App;
