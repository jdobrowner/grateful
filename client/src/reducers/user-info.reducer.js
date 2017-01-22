import { SET_EMAIL, SET_NAME } from '../actions/types';

export default function userInfo(state = {}, action) {
  switch (action.type) {
    case SET_EMAIL:
    	return { ...state, email: action.payload };
    case SET_NAME:
    	return { ...state, name: action.payload };
    default:
    	return state;
  }
};
