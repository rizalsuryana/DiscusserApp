import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import toast from 'react-hot-toast';

const asyncPopulateUserAndThreads = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      toast.error(`Silahkan coba kembali ${error.message}`);
    } finally {
      dispatch(hideLoading());
    }
  };
};


export {
  asyncPopulateUserAndThreads
};