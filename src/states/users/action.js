import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
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
      toast('Account Created !');
    } catch (error) {
      toast.error(error.message);
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