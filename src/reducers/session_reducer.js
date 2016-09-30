import {browserHistory} from 'react-router';

export default function sessionReducer(state=[], action) {
  switch ( action.type ) {
    case 'LOG_IN_SUCCESS':
      sessionStorage.setItem('jwt', action.payload.jwt)
      browserHistory.push('/cats')
      // return action.payload;
    default:
      return state;
  }
};

