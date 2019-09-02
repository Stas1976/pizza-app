import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../actions/signUpAction';

import logo from '../../assets/logo/pizza.png';
import BagIcon from '../../components/BagIcon/BagIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';

const Nav = ({ toggleDropDownCart, profile, logOut, history }) => {
  return (
    <nav className={style.header}>
      <NavLink className={style.logoContainer} to="/">
        <img src={logo} alt="pizza logo" className={style.logo} />
      </NavLink>
      <div className={style.options}>
        <NavLink
          className={style.option}
          activeClassName={style.active}
          to="/picos"
        >
          Picos
        </NavLink>
        <NavLink
          className={style.option}
          activeClassName={style.active}
          to="/uzkandziai"
        >
          Užkandžiai
        </NavLink>
        <NavLink
          className={style.option}
          activeClassName={style.active}
          to="/desertai"
        >
          Desertai
        </NavLink>
        <NavLink
          className={style.option}
          activeClassName={style.active}
          to="/gerimai"
        >
          Gerimai
        </NavLink>
        <NavLink
          className={style.option}
          activeClassName={style.active}
          to="/uzsakymai"
        >
          Užsakymas
        </NavLink>
        <BagIcon />
      </div>

      {profile.email.length ? (
        <div className={style.profileContainer}>
          <p className={style.profileName}>
            {profile.firstName} {profile.lastName}
          </p>
          <span className={style.logout} onClick={() => logOut(history)}>
            Log Out
          </span>
        </div>
      ) : (
        <div>
          <NavLink className={style.signup} to="/signup">
            <h4>Užsiregistruoti</h4>
          </NavLink>
          <NavLink className={style.login} to="/login">
            <h4>Prisijungti</h4>
          </NavLink>
        </div>
      )}

      {toggleDropDownCart ? null : <CartDropDown />}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    toggleDropDownCart: state.cartReducer.toggleDropDownCart,
    profile: state.profileReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(Nav);
