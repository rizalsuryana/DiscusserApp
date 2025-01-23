import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { toast } from 'react-toastify';

const ActionType ={
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
  CLEAR_COMMENT: 'CLEAR_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};

const receiveCommentActionCreator = (comments) => {
  return {
    type: ActionType.RECEIVE_COMMENT,
    payload: {
      comments,
    }
  };
};

const createCommentActionCreator = ({ threadId, comment }) => {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      threadId,
      comment,
    }
  };
};

const clearCommentActionCreator = () => {
  return {
    type: ActionType.CLEAR_COMMENT,
  };
};

const upVoteCommentActionCreator = ({ threadId, commentId, userId }) => {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    }
  };
};

const downVoteCommentActionCreator = ({ threadId, commentId, userId }) => {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload:{
      threadId,
      commentId,
      userId,
    }
  };
};

const neutralizeCommentActionCreator = ({ threadId, commentId,  userId }) => {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload:{
      threadId,
      commentId,
      userId,
    }
  };
};


// thunk func

const asyncCreateComment = ({ threadId, comment }) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const responseComment = await api.createComment({
        threadId,
        comment,
      });

      dispatch(createCommentActionCreator(responseComment));
      toast('Sending your comment...');
    }
    catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncUpVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    try {
      dispatch(showLoading());
      dispatch(upVoteCommentActionCreator({
        commentId,
        threadId: detailThread?.id,
        userId: authUser?.id,
      }));
      await api.upVoteComment(detailThread?.id, commentId);
    } catch (error) {
      dispatch(upVoteCommentActionCreator({
        commentId,
        threadId: detailThread?.id,
        userId: authUser?.id,
      }));
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};


const asyncDownVoteComment = (commentId) => {
  return async (dispatch, getState) => {
    const { authUser, detailThread }= getState();
    try {
      dispatch(showLoading());
      dispatch(downVoteCommentActionCreator({
        commentId,
        threadId: detailThread?.id,
        userId: authUser?.id,
      }));
      await api.downVoteComment(detailThread?.id, commentId);
      console.log('API call completed');
    } catch (error) {
      dispatch(downVoteCommentActionCreator({
        commentId,
        threadId: detailThread?.id,
        userId: authUser?.id,
      }));
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

const asyncNeutralizeVoteComment = (commentId) => {
  return async (dispatch, getState) =>{
    const { authUser, detailThread } = getState();
    try {
      dispatch(showLoading());
      console.log('Dispatching NEUTRALIZE_VOTE_COMMENT action');
      dispatch(neutralizeCommentActionCreator({
        commentId,
        threadId: detailThread?.id,
        userId: authUser?.id,
      }));
      await api.neutralizeCommentVote(detailThread?.id, commentId);
      console.log('Neutralize vote API call successful');
    } catch (error) {
      console.log('Error in neutralize vote API call:', error);
      dispatch(neutralizeCommentActionCreator({
        commentId,
        threadId: detailThread?.id,
        userId: authUser?.id,
      }));
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
};

// end

export {
  ActionType,
  receiveCommentActionCreator,
  createCommentActionCreator,
  clearCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeCommentActionCreator,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment
};