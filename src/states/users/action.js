import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';


const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users) => {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  };
};


const asyncRegisterUser = ({ name, email, password }) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      await api.register({
        name, email, password
      });
    } catch (error) {
      error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};