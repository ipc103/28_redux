export default function catsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CATS':
      return action.payload;
    case 'ADD_CAT':
      let id = state.length
      return [...state, {id: id, name: action.payload.name}]
    default:
      return state;
  }
};
