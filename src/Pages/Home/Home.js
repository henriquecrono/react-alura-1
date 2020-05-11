import React, { Component, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import './Home.css';

import Header from '../../Components/Header/Header';
import HomeTable from '../../Components/HomeTable/HomeTable';
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
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1 className="center-align">Casa do Código</h1>
          <HomeTable authors={this.state.authors} removeAuthor={this.removeAuthor} />
          <Form submitListener={this.submitListener} />
          {/* <ContaClicks /> */}
          {/* <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </Container> */}
        </div>
      </Fragment>
    );
  }
}

export default Home;
