import React, { Component, Fragment } from 'react';

import Header from '../../Components/Header/Header';
import Table from '../../Components/Table/Table';

import ApiService from '../../Utils/ApiService/ApiService';
import PopUp from '../../Utils/PopUp/PopUp';


class Authors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
    };
  }

  componentDidMount() {
    ApiService.ListNames()
      .then(res => ApiService.CatchErrors(res))
      .then(res => {
        if (res.message === 'success') {
          PopUp.showMessage('success', 'Autores listados com sucesso')
          this.setState({ names: [...this.state.names, ...res.data] })
        }
      })
      .catch(err => PopUp.showMessage('error', 'Falha na comunicação com a API ao listar os autores'));
  }

  render() {
    const fields = [
      { title: 'Autores', field: 'name' },
    ];

    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1 className="center-align">Página de Autores</h1>
          <Table
            fields={fields}
            data={this.state.names}
          />
        </div>
      </Fragment>
    );
  }
}

export default Authors;