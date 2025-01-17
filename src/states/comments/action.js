import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

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

const downVoteCommentActionCreator = ({ threadId, userId, commentId }) => {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload:{
      threadId,
      userId,
      commentId,
    }
  };
};

const neutralizeCommentActionCreator = (threadId, commentId, userId) => {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload:{
      threadId,
      commentId,
      userId
    }
  };
};


// thunk func

// I'll make ice cream + avocado first .... :p

// end

export {
  ActionType,
  receiveCommentActionCreator,
  createCommentActionCreator,
  clearCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeCommentActionCreator

};