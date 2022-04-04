import { actionsUserTypes } from "../actions/actionsTypes";

const initialState = {
  currentUser: null,
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsUserTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
