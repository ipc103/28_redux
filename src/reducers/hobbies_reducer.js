export default function hobbiesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_HOBBIES':
      return action.payload;
    default:
      return state;
  }
};

