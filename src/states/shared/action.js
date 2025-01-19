import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateUserAndThreads = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};


export {
  asyncPopulateUserAndThreads
};