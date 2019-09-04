import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '153902075343-ls0gfug3gkc2qhth2nphtop8l42p0r1r.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return (
      <div>
        <h3>Prisijungti Su Google</h3>
      </div>
    );
  }
}

export default GoogleAuth;
