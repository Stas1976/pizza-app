import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';
import UzsakymasHead from '../../components/UzsakymasHead/UzsakymasHead';
import UzsakymasBody from '../../components/UzsakymasBody/UzsakymasBody';
import Footer from '../../components/Footer/Footer';
import Adresas from '../../components/Adresas/Adresas';
import OrderComplete from '../../components/OrderComplete/OrderComplete';

class Uzsakymas extends React.Component {
  state = {
    activeStep: 0
  };

  nextStep = activeStep => this.setState({ activeStep });

  render() {
    const { activeStep } = this.state;
    return (
      <div className={style.container}>
        <UzsakymasHead activeStep={activeStep} />
        <hr />
        {activeStep === 0 ? (
          <UzsakymasBody nextStep={this.nextStep} />
        ) : activeStep === 1 ? (
          <Adresas nextStep={this.nextStep} />
        ) : (
          <OrderComplete />
        )}
        {/* <route path  */}
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  action
)(Uzsakymas);
