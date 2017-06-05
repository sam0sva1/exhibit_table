const filters = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return {
          ...state,
          [action.label]: !state[action.label]
      }
    default:
      return state;
  }
};

export default filters;
