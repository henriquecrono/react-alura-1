import React, { Component, Fragment } from 'react';

import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';

import ApiService from '../../Utils/ApiService/ApiService';
import PopUp from '../../Utils/PopUp/PopUp';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: 'Livros'
    };
  }

  componentDidMount() {
    ApiService.ListBooks()
      .then(res => ApiService.CatchErrors(res))
      .then(res => {
        if (res.message === 'success') {
          PopUp.showMessage('success', 'Livros listados com sucesso')
          this.setState({ books: [...this.state.books, ...res.data] })
        }
      })
      .catch(err => PopUp.showMessage('error', 'Falha na comunicação com a API ao listar os livros'));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1 className="center-align">Página de Livros</h1>
          <DataTable data={this.state.books} title={this.state.title} columns={['book']} />
        </div>
      </Fragment>
    );
  }
}

export default Books;