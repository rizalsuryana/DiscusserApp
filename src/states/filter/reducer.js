const initialState = '';

export default function filterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'filter/set':
      return action.payload.filter;
    default:
      return state;
  }
}