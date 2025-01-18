import { ActionType } from './action';

const commentReducer = (comment = [], action = {}) => {
  switch (action.type) {
  case ActionType.RECEIVE_COMMENT:
    return action.payload.comments;
  case ActionType.ADD_COMMENT:
    return [action.payload.comment, ...comment];
  case ActionType.CLEAR_COMMENT:
    return null;
  case ActionType.UP_VOTE_COMMENT:
    return comment.map((commen)=> {
      if (commen.id === action.payload.commentId){
        return {
          ...commen,
          upVoteBy: commen.upVoteBy.includes(action.payload.userId)
            ? commen.upVoteBy.filter((id)=> id !== action.payload.userId)
            : commen.upVoteBy.concat([action.payload.userId]),
          downVoteBy: commen.downVoteBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return commen;
    });
  case ActionType.DOWN_VOTE_COMMENT:
    return comment.map((commen)=> {
      if (commen.id === action.payload.commentId){
        return {
          ...commen,
          downVoteBy: commen.downVoteBy.includes(action.payload.userId)
            ? commen.downVoteBy.filter((id)=> id !== action.payload.userId)
            : commen.downVoteBy.concat([action.payload.userId]),
          upVoteBy: commen.upVoteBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return commen;
    });
  case ActionType.NEUTRALIZE_VOTE_COMMENT:
    return comment.map((commen)=> {
      if (commen.id === action.payload.commentId){
        return {
          ...commen,
          upVoteBy: commen.upVoteBy.filter((id)=> id !== action.payload.userId),
          downVoteBy: commen.downVoteBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return commen;
    });
  default:
    return comment;
  }
};


export {
  commentReducer,
};