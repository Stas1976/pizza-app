import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Uzsakymas from './pages/Uzsakymas/Uzsakymas';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App({ orderConfirmation, showLogInModal }) {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute />

        <Route path="/uzsakymai" component={Uzsakymas} />
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
