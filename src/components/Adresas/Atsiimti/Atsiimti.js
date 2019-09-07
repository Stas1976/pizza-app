import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../../actions/addressAction';

class Atsiimti extends React.Component {
  state = {
    address: ''
  };

  submitAddress = address => {
    this.setState({ address });
  };
  render() {
    return (
      <form
        className={style.container}
        onSubmit={() => this.props.takeAwaySubmit(this.state.address)}
      >
        <div className={style.select}>
          <div>
            <input
              type="radio"
              name="address"
              value="antakalnio"
              onChange={() => this.submitAddress('antakalnio')}
            />
            <h4>Antakalnio g. 41</h4>
          </div>
          <div>
            <input
              type="radio"
              name="address"
              value="savanoriu"
              onChange={() => this.submitAddress('savanoriu')}
            />
            <h4>Savanorių pr. 1, Helios City</h4>
          </div>
        </div>
        <div className={style.address}>
          <ul className={style.list}>
            <li className={style.li}>Pr - Kt: 09:00 — 23:00</li>
            <li className={style.li}>Pn - Š: 09:00 — 00:00</li>
            <li className={style.li}>S : 09:00 — 23:00</li>
          </ul>
          <ul className={style.list}>
            <li className={style.li}>Pr - Kt: 09:00 — 23:00</li>
            <li className={style.li}>Pn - Š: 09:00 — 00:00</li>
            <li className={style.li}>S : 09:00 — 23:00</li>
          </ul>
        </div>
        <input type="submit" value="Pasirinkti" className={style.btn} />
      </form>
    );
  }
}

export default connect(
  null,
  action
)(Atsiimti);
