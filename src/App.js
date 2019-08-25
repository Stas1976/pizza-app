import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './layout/Nav/Nav';

import Home from './pages/Home/Home';
import Picos from './pages/Picos/Picos';
import Uzkandziai from './pages/Uzkandziai/Uzkandziai';
import Desertai from './pages/Desertai/Desertai';
import Gerimai from './pages/Gerimai/Gerimai';
import { connect } from 'react-redux';
import Uzsakymas from './pages/Uzsakymas/Uzsakymas';

function App({ orderConfirmation }) {
  return (
    <div>
      {orderConfirmation ? (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/picos" component={Picos} />
            <Route path="/uzkandziai" component={Uzkandziai} />
            <Route path="/desertai" component={Desertai} />
            <Route path="/gerimai" component={Gerimai} />
          </Switch>
        </BrowserRouter>
      ) : (
        <Uzsakymas />
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    orderConfirmation: state.cartReducer.toggleToOrderConfirmation
  };
};

export default connect(mapStateToProps)(App);
