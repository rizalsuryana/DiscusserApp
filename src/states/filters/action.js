const ActionType = {
  SET_FILTERED: 'SET_FILTERED',
};

const setFilteredActionCreator = (filters) => {
  return {
    type: ActionType.SET_FILTERED,
    payload: {
      filters,
    }
  };

};

export { ActionType, setFilteredActionCreator };