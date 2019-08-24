import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/pizza.png';
import BagIcon from '../../components/BagIcon/BagIcon';
import { connect } from 'react-redux';
import CartDropDown from '../../components/CartDropDown/CartDropDown';

const Nav = ({ toggleDropDownCart }) => {
  return (
    <nav className={style.header}>
      <NavLink
        className={style.logoContainer}
        activeClassName={style.active}
        to="/"
      >
        {/* Home */}
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
        <BagIcon />
      </div>
      {toggleDropDownCart ? null : <CartDropDown />}
    </nav>
  );
};

const mapStateToProps = state => {
  return { toggleDropDownCart: state.cartReducer.toggleDropDownCart };
};

export default connect(mapStateToProps)(Nav);
