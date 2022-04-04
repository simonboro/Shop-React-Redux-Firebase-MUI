import { actionsUserTypes } from "./actionsTypes";

export const setCurrentUser = (user) => {
  return {
    type: actionsUserTypes.SET_CURRENT_USER,
    payload: user,
  };
};
