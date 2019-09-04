import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/signUpAction';

const DeleteProfileModal = ({
  profile,
  deleteProfile,
  toggleDeleteProfileModal
}) => {
  return (
    <React.Fragment>
      <div className={style.backdrop} />
      <div className={style.container}>
        <div onClick={toggleDeleteProfileModal} className={style.close}>
          <i className="fas fa-times" />
        </div>
        <h4>Ar Jus tikrain noritė ištrinti savo paskyrą</h4>
        <div className={style.form}>
          <button className={style.btn} onClick={toggleDeleteProfileModal}>
            Ne
          </button>
          <button
            className={style.btn}
            onClick={() => {
              deleteProfile(profile._id);
            }}
          >
            Taip
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.profileReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(DeleteProfileModal);
