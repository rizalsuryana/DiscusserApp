import { act } from 'react';
import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type){
  case ActionType.RECEIVE_THREADS:
    return action.payload.threads;
  case ActionType.ADD_THREAD:
    return [action.payload.thread, ...threads];
  case ActionType.CLEAR_THREADS:
    return [];
  case ActionType.UP_VOTE_THREAD:
    return threads.map((thread)=> {
      if (thread.id === action.payload.threadId){
        return {
          ...thread,
          upVoteBy: thread.upVoteBy.includes(action.payload.userId)
            ? thread.upVoteBy.filter((id)=> id !== action.payload.userId)
            : thread.upVoteBy.concat([action.payload.userId]),
          downVoteBy: thread.downVoteBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return thread;
    });
  case ActionType.DOWN_VOTE_THREAD:
    return threads.map((thread)=> {
      if (thread.id === action.payload.threadId){
        return {
          ...thread,
          downVoteBy: thread.downVoteBy.includes(action.payload.userId)
            ? thread.downVoteBy.filter((id)=> id !== action.payload.userId)
            : thread.downVoteBy.concat([action.payload.userId]),
          upVoteBy: thread.upVoteBy.filter((id)=> id !== action.payload.userId)
        };
      }
      return thread;
    });
  case ActionType.NEUTRALIZE_THREAD:
    return threads.map((thread)=> {
      if (thread.id === action.payload.threadId){
        return {
          ...thread,
          upVoteBy: thread.upVoteBy.filter((id)=> id !== action.payload.userId),
          downVoteBy: thread.downVoteBy.filter((id)=> id !== action.payload.userId),
        };
      }
      return thread;
    });
  default:
    return threads;
  }
};



export default threadsReducer;