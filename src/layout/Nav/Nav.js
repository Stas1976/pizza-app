import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/logo/pizza.png';
import BagIcon from '../../components/BagIcon/BagIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';

const Nav = ({ toggleDropDownCart, profile }) => {
  console.log(Object.keys(profile).length);

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

      <NavLink className={style.signup} to="/signup">
        <h4>Užsiregistruoti</h4>
      </NavLink>
      <NavLink className={style.login} to="/login">
        <h4>Prisijungti</h4>
      </NavLink>

      {toggleDropDownCart ? null : <CartDropDown />}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    toggleDropDownCart: state.cartReducer.toggleDropDownCart,
    showLogInModal: state.logInReducer.togglLogInModal,
    profile: state.profileReducer
  };
};

export default connect(mapStateToProps)(Nav);
