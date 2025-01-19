import { ActionType } from './action';

const threadDetailReducer = (detailThread = {}, action = {}) => {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_DETAILS:
    return action.payload.detailThread;
  case ActionType.CLEAR_THREAD_DETAIL:
    return null;
  case ActionType.UP_VOTE_THREAD_DETAIL:
    return {
      ...detailThread,
      upVoteBy: detailThread.upVoteBy.includes(action.payload.userId)
        ? detailThread.upVoteBy.filter((id)=> id !== action.payload.userId)
        : detailThread.upVoteBy.concat([action.payload.userId]),
      downVoteBy: detailThread.downVoteBy.filter((id)=> id !== action.payload.userId),
    };
  case ActionType.DOWN_VOTE_THREAD_DETAIL:
    return {
      ...detailThread,
      downVoteBy: detailThread.downVoteBy.includes(action.payload.userId)
        ? detailThread.downVoteBy.filter((id)=> id !== action.payload.userId)
        : detailThread.downVoteBy.concat([action.payload.userId]),
      upVoteBy: detailThread.filter((id)=> id !== action.payload.userId),
    };
  case ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL:
    return {
      ...detailThread,
      upVoteBy: detailThread.upVoteBy.filter((id)=> id !== action.payload.userId),
      downVoteBy: detailThread.downVoteBy.filter((id)=> id !== action.payload.userId),
    };
  default:
    return detailThread;
  }
};


export default threadDetailReducer;