export default function catsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CATS':
      return action.payload;
    case 'ADD_CAT':
      // 1. make a new copy of existing state (current list of cats) + our new cat
      return [...state, action.payload]
    default:
      return state;
  }
};

