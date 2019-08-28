import React from 'react';
import style from './index.module.scss';
import AdresInput from './AdresInput/AdressInput';
import Atsiimti from './Atsiimti/Atsiimti';

class Adresas extends React.Component {
  state = {
    activeItem: 0
  };

  toggleComponent = activeItem => {
    this.setState({ activeItem });
  };

  render() {
    const { nextStep } = this.props;

    return (
      <div className={style.container}>
        <h2 className={style.h2}>Kur pristatyti?</h2>
        <div className={style.selectDelivery}>
          <input
            className={this.state.activeItem ? style.btn : style.activeBtn}
            type="button"
            onClick={() => this.toggleComponent(0)}
            value="Pristatymas"
          />
          <input
            className={!this.state.activeItem ? style.btn : style.activeBtn}
            type="button"
            onClick={() => this.toggleComponent(1)}
            value="Išsinešimui"
          />
          <input className={style.emptyInput} type="button" />
        </div>
        <div className={style.adress}>
          {this.state.activeItem ? (
            <Atsiimti nextStep={nextStep} />
          ) : (
            <AdresInput nextStep={nextStep} />
          )}
        </div>
      </div>
    );
  }
}

export default Adresas;
