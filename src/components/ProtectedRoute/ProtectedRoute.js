import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Nav from '../../layout/Nav/Nav';
import Home from '../../pages/Home/Home';
import Picos from '../../pages/Picos/Picos';
import Uzkandziai from '../../pages/Uzkandziai/Uzkandziai';
import Desertai from '../../pages/Desertai/Desertai';
import Gerimai from '../../pages/Gerimai/Gerimai';

const ProtectedRoute = props => {
  return (
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/picos" component={Picos} />
      <Route path="/uzkandziai" component={Uzkandziai} />
      <Route path="/desertai" component={Desertai} />
      <Route path="/gerimai" component={Gerimai} />
    </React.Fragment>
  );
};
export default ProtectedRoute;
