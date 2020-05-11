import React, { Component, Fragment } from 'react';

import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';

import ApiService from '../../Utils/ApiService/ApiService';
import PopUp from '../../Utils/PopUp/PopUp';

class Authors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      title: 'Autores'
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
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1 className="center-align">Página de Autores</h1>
          <DataTable data={this.state.names} title={this.state.title} columns={['name']} />
        </div>
      </Fragment>
    );
  }
}

export default Authors;