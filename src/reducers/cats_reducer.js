export default function catsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CATS':
    debugger;
      return action.payload;
    case 'ADD_CAT':
      // 1. make a new copy of existing state (current list of cats) + our new cat
      const id = state.length + 1
      return [...state, {id: id, name: action.payload}]
    default:
      return state;
  }
};

