import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Uzsakymas from './pages/Uzsakymas/Uzsakymas';
import Login from './components/LoginModal/LoginModal';
import SignUpModal from './components/SignUpModal/SignUpModal';
import Nav from './layout/Nav/Nav';
import Picos from './pages/Picos/Picos';
import Uzkandziai from './pages/Uzkandziai/Uzkandziai';
import Desertai from './pages/Desertai/Desertai';
import Gerimai from './pages/Gerimai/Gerimai';

function App({ orderConfirmation, showLogInModal }) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUpModal} />
        <React.Fragment>
          <Nav />
          <Route exact path="/" component={Picos} />
          <Route exact path="/picos" component={Picos} />
          <Route path="/uzkandziai" component={Uzkandziai} />
          <Route path="/desertai" component={Desertai} />
          <Route path="/gerimai" component={Gerimai} />

          <Route path="/uzsakymai" component={Uzsakymas} />
        </React.Fragment>
      </Switch>
    </HashRouter>
  );
}
const mapStateToProps = state => {
  return {
    orderConfirmation: state.cartReducer.toggleToOrderConfirmation
  };
};

export default connect(mapStateToProps)(App);
