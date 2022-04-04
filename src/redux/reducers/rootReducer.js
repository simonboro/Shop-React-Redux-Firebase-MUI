import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  usersReducer: usersReducer,
});

export default rootReducer;
