import { ActionType } from './action';

const filteredReducer = (filtered = '', action = {}) => {
  switch (action.type){
  case ActionType.SET_FILTERED: {
    if (action.payload === filtered){
      return '';
    }
    return action.payload?.filters || filtered;
  }
  default:
    return filtered;
  }
};


export default filteredReducer;