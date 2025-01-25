import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType ={
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  CLEAR_THREADS: 'CLEAR_THREADS',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_THREAD: 'NEUTRALIZE_THREAD',
  TOGGLE_CATEGORY_THREAD: 'TOGGLE_CATEGORY_THREAD',

};


const receiveThreadsActionCreator = (threads) => {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    }
  };
};

const addThreadActionCreator = (thread) => {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  };
};

const clearThreadActionCreator = () => {
  return {
    type: ActionType.CLEAR_THREADS,
  };
};

const toggleCategoryThreadActionCreator = (category) => {
  return {
    type: ActionType.TOGGLE_CATEGORY_THREAD,
    payload: {
      category,
    }
  };
};

const upVoteThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    }
  };
};

const downVoteThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload:{
      threadId,
      userId
    }
  };
};

const neutralizeThreadActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.NEUTRALIZE_THREAD,
    payload: {
      threadId,
      userId,
    }
  };
};

const asyncAddThread = ({ title, body, category }) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const responseThread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(responseThread));
    } catch (error) {
      error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncUpVoteThread = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser, threads } = getState();
    try {
      dispatch(showLoading());
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
      await api.upVoteThread(threadId);
    } catch (error) {
      error(error?.message);
      dispatch(receiveThreadsActionCreator(threads));
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncDownVoteThread = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser, threads } = getState();
    try {
      dispatch(showLoading());
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
      await api.downVoteThread(threadId);
    } catch (error) {
      error(error?.message);
      dispatch(receiveThreadsActionCreator(threads));
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncNeutralizeVoteThread = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser, threads } = getState();
    try {
      dispatch(showLoading());
      dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      error(error?.message);
      dispatch(receiveThreadsActionCreator(threads));
    } finally {
      dispatch(hideLoading());
    }
  };
};


export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  clearThreadActionCreator,
  toggleCategoryThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeThreadActionCreator,
  asyncAddThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncUpVoteThread,
};