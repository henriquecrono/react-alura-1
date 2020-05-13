import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import './Home.css';

import Header from '../../Components/Header/Header';
import Table from '../../Components/Table/Table';
import Form from '../../Components/Form/Form';

import ApiService from '../../Utils/ApiService/ApiService';
import PopUp from '../../Utils/PopUp/PopUp';

// import ContaClicks from './ReactHooks';
// import { Button, Container } from './StyledComponents';


class Home extends Component {
  state = {
    authors: []
  }

  removeAuthor = id => {
    const { authors } = this.state;

    const filteredAuthors = authors.filter(author => author.id !== id);

    ApiService.RemoveAuthor(id)
      .then(res => ApiService.CatchErrors(res))
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ authors: [...filteredAuthors] });
          PopUp.showMessage('error', "Autor removido com sucesso");
        }
      })
      .catch(err => PopUp.showMessage('error', "Erro na comunicação com a API ao tentar remover o autor"));
  }

  submitListener = author => {
    ApiService.CreateAuthor(JSON.stringify(author))
      .then(res => ApiService.CatchErrors(res))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ authors: [...this.state.authors, author] });
          PopUp.showMessage('success', "Autor adicionado com sucesso");
        }
      })
      .catch(err => PopUp.showMessage('error', "Erro na comunicação com a API ao tentar criar o autor"));
  }

  componentDidMount() {
    ApiService.ListAuthors()
      .then(res => ApiService.CatchErrors(res))
      .then(res => {
        if (res.message === 'success') this.setState({ authors: [...this.state.authors, ...res.data] });
      })
      .catch(err => PopUp.showMessage('error', "Erro na comunicação com a API ao tentar listar os autores"));
  }

  render() {
    const fields = [
      { title: 'Autores', field: 'name' },
      { title: 'Livros', field: 'book' },
      { title: 'Preços', field: 'price' },
    ];

    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1 className="center-align">Casa do Código</h1>
          <Form submitListener={this.submitListener} />
          <Table
            fields={fields}
            data={this.state.authors}
            removeData={this.removeAuthor}
          />
          {/* <ContaClicks /> */}
          {/* <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </Container> */}
        </div>
      </>
    );
  }
}

export default Home;
