import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { receiveCommentActionCreator } from '../comments/action';

const ActionType ={
  RECEIVE_THREAD_DETAILS: 'RECEIVE_THREAD_DETAILS',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRALIZE_VOTE_THREAD_DETAIL: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
};



const receiveThreadDetailActionCreator = (detailThread) => {
  return {
    type: ActionType.RECEIVE_THREAD_DETAILS,
    payload: {
      detailThread,
    }
  };
};

const clearThreadDetailActionCreator = () => {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
};

const upVoteThreadDetailActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    }
  };
};

const downVoteThreadDetailActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    }
  };
};

const neutralizeVoteThreadDetailActionCreator = ({ threadId, userId }) => {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    }
  };
};


const asyncReceiveThreadDetail = (threadId) => {
  return async (dispatch) => {
    try {
      dispatch(clearThreadDetailActionCreator());
      dispatch(showLoading());
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
      dispatch(receiveCommentActionCreator(detailThread?.comments));
    } catch (error) {
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncUpVoteThreadDetail = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    try {
      dispatch(showLoading());
      dispatch(upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
      await api.upVoteThread(threadId);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncDownVoteThreadDetail = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    try {
      dispatch(showLoading());
      dispatch(downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
      await api.downVoteThread(threadId);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncNeutralizeVoteThreadDetail = (threadId) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    try {
      dispatch(showLoading());
      dispatch(neutralizeVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};


export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
};