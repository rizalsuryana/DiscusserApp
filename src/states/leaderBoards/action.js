import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
  CLEAR_LEADERBOARDS: 'CLEAR_LEADERBOARDS',
};

const receiveLeaderboardsActionCreator = (leaderBoards) => {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderBoards,
    }
  };
};

const clearLeaderboardsActionCreator = () => {
  return {
    type: ActionType.CLEAR_LEADERBOARDS,
  };
};

const asyncReceiveLeaderboard = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      dispatch(clearLeaderboardsActionCreator());
      const leaderBoards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderBoards));
    } catch (error) {
      return error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  clearLeaderboardsActionCreator,
  asyncReceiveLeaderboard,
};