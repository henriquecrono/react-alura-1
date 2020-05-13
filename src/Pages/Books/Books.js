import React, { Component, Fragment } from 'react';

import Header from '../../Components/Header/Header';
import Table from '../../Components/Table/Table';

import ApiService from '../../Utils/ApiService/ApiService';
import PopUp from '../../Utils/PopUp/PopUp';


class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
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
    const fields = [
      { title: 'Livros', field: 'book' },
    ];

    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1 className="center-align">Página de Livros</h1>
          <Table
            fields={fields}
            data={this.state.books}
          />
        </div>
      </Fragment>
    );
  }
}

export default Books;