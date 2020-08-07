import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Index';
import Contato from './pages/Contato/Index';
import Produtos from './pages/Produtos/Index';
import QuemSomos from './pages/QuemSomos/Index';

import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

export default function Routes() {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/quemsomos" component={QuemSomos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}