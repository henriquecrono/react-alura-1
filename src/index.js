import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './Pages/Home/Home';
import Authors from './Pages/Authors/Authors';
import Books from './Pages/Books/Books';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/autores' component={Authors} />
      <Route path='/livros' component={Books} />
      <Route path='/sobre' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
