export default function catsReducer(state=[],action){
  switch ( action.type ) {
    case 'FETCH_CATS':
      return action.payload;
    case 'ADD_CAT':
      action.payload.id = state.length + 1
      return [...state, action.payload];
    default:
      return state;
  }
}
