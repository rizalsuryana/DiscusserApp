import { ActionType } from './action';

const usersReducer = (users = [], action = {}) => {
  switch (action.type){
  case ActionType.RECEIVE_USERS:
    return action.payload.users;
  default:
    // users;
    return users;
  }
};

export default usersReducer;