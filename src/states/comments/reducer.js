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
          upVotesBy: commen.upVotesBy.includes(action.payload.userId)
            ? commen.upVotesBy.filter((id)=> id !== action.payload.userId)
            : commen.upVotesBy.concat([action.payload.userId]),
          downVotesBy: commen.downVotesBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return commen;
    });
  case ActionType.DOWN_VOTE_COMMENT:
    return comment.map((commen)=> {
      if (commen.id === action.payload.commentId){
        return {
          ...commen,
          downVotesBy: commen.downVotesBy.includes(action.payload.userId)
            ? commen.downVotesBy.filter((id)=> id !== action.payload.userId)
            : commen.downVotesBy.concat([action.payload.userId]),
          upVotesBy: commen.upVotesBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return commen;
    });
  // case ActionType.NEUTRALIZE_VOTE_COMMENT:
  //   return comment.map((commen)=> {
  //     if (commen.id === action.payload.commentId){
  //       return {
  //         ...commen,
  //         upVotesBy: commen.upVotesBy.filter((id)=> id !== action.payload.userId),
  //         downVotesBy: commen.downVotesBy.filter((id)=> id !== action.payload.userId),
  //       };
  //     }
  //     return commen;
  //   });
  case ActionType.NEUTRALIZE_VOTE_COMMENT:
    return comment.map((commen) => {
      if (commen.id === action.payload.commentId) {
        return {
          ...commen,
          upVotesBy: commen.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: commen.downVotesBy.filter((id) => id !== action.payload.userId),
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