import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import Uzsakymas from './pages/Uzsakymas/Uzsakymas';
import Login from './components/LogIn/LogIn';
import SignUpModal from './components/SignUpModal/SignUpModal';
import Nav from './layout/Nav/Nav';
import Home from './pages/Home/Home';
import Picos from './pages/Picos/Picos';
import Uzkandziai from './pages/Uzkandziai/Uzkandziai';
import Desertai from './pages/Desertai/Desertai';
import Gerimai from './pages/Gerimai/Gerimai';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App({ orderConfirmation, showLogInModal }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUpModal} />
        {/* <ProtectedRoute /> */}
        <React.Fragment>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/picos" component={Picos} />
          <Route path="/uzkandziai" component={Uzkandziai} />
          <Route path="/desertai" component={Desertai} />
          <Route path="/gerimai" component={Gerimai} />

          <Route path="/uzsakymai" component={Uzsakymas} />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  return {
    orderConfirmation: state.cartReducer.toggleToOrderConfirmation
  };
};

export default connect(mapStateToProps)(App);
