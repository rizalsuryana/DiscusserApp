import { ActionType } from './action';

const leaderBoardsReducer = (leaderBoards = null, action = {}) => {
  switch (action.type){
  case ActionType.RECEIVE_LEADERBOARDS:
    return action.payload.leaderBoards;
  case ActionType.CLEAR_LEADERBOARDS:
    return null;
  default:
    leaderBoards;
  }
};


export default leaderBoardsReducer;