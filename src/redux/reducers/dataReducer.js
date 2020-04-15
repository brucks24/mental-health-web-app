import { LOADING_DATA, GET_USER_DATA } from "../types";

const initialState = {
  user: [],
  users: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    default:
      return state;
  }
}