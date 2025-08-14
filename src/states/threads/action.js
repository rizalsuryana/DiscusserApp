import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  CLEAR_THREADS: 'CLEAR_THREADS',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_THREAD: 'NEUTRALIZE_THREAD',
  TOGGLE_CATEGORY_THREAD: 'TOGGLE_CATEGORY_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: { threads },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: { thread },
});

const clearThreadActionCreator = () => ({
  type: ActionType.CLEAR_THREADS,
});

const toggleCategoryThreadActionCreator = (category) => ({
  type: ActionType.TOGGLE_CATEGORY_THREAD,
  payload: { category },
});

const upVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD,
  payload: { threadId, userId },
});

const downVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD,
  payload: { threadId, userId },
});

const neutralizeThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRALIZE_THREAD,
  payload: { threadId, userId },
});

// Thunks
const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
    toast.success('Thread berhasil dibuat! 🎉');
  } catch (error) {
    toast.error(`Gagal membuat thread: ${error?.message}`);
  } finally {
    dispatch(hideLoading());
  }
};

const asyncUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser, threads } = getState();
  dispatch(showLoading());
  try {
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    await api.upVoteThread(threadId);
  } catch (error) {
    toast.error(`Silahkan coba kembali ${error.message}`);
    dispatch(receiveThreadsActionCreator(threads));
  } finally {
    dispatch(hideLoading());
  }
};

const asyncDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser, threads } = getState();
  dispatch(showLoading());
  try {
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    await api.downVoteThread(threadId);
  } catch (error) {
    toast.error(`Silahkan coba kembali ${error.message}`);
    dispatch(receiveThreadsActionCreator(threads));
  } finally {
    dispatch(hideLoading());
  }
};

const asyncNeutralizeVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser, threads } = getState();
  dispatch(showLoading());
  try {
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    await api.neutralizeThreadVote(threadId);
  } catch (error) {
    toast.error(`Silahkan coba kembali ${error.message}`);
    dispatch(receiveThreadsActionCreator(threads));
  } finally {
    dispatch(hideLoading());
  }
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
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
