import { showLoading, hideLoading } from 'react-redux-loading-bar';
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
    console.log('Loading bar show started...');
    dispatch(showLoading());
    console.log(showLoading());
    try {
      dispatch(clearLeaderboardsActionCreator());
      const leaderBoards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderBoards));
    } catch (error) {
      return error(error?.message);
    }
    dispatch(hideLoading());

  };
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  clearLeaderboardsActionCreator,
  asyncReceiveLeaderboard,
};