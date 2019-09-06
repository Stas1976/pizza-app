import React, { Component } from 'react';
import style from './index.module.scss';
import * as action from '../../actions/googleAuthAction';
import { connect } from 'react-redux';

class GoogleAuth extends Component {
  state = { isSignedIn: null, name: '' };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '153902075343-ls0gfug3gkc2qhth2nphtop8l42p0r1r.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
          if (this.auth.isSignedIn.get()) {
            this.setState({ name: this.auth.currentUser.get().w3.ig });
          }
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
    console.log(this.state.name);
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
    this.props.onSignIn(this.state.name);
  };

  onSignOutClick = () => {
    this.auth.signOut();
    this.props.onSignOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignOutClick} className={style.btn}>
            <i className="fab fa-google"></i>
            <span className={style.span}>Atsijungti</span>
          </button>
          {this.state.name}
        </div>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className={style.btn}>
          <i className="fab fa-google"></i>
          <span className={style.span}>Prisijungti su Google</span>
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
  null,
  action
)(GoogleAuth);
