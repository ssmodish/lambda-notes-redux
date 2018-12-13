import { FETCH_NOTES, NEW_NOTE } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_NOTE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}