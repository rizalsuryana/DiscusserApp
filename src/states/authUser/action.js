import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const ActionType ={
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    }
  };
};


const unsetAuthUserActionCreator = () => {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    }
  };
};

// thunk function

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
      toast.success('Login Berhasil');
    } catch (error){
      toast.error(`Silahkan coba kembali ${error.message}`);
    }
    dispatch(hideLoading());
  };
};


const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
    dispatch(hideLoading());
  };
};

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};