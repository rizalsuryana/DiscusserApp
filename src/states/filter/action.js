export function setFilter(filter) {
  return {
    type: 'filter/set',
    payload: { filter }
  };
}