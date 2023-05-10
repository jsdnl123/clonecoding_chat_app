import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({
  counter,
  todos,
  posts,
});

export default rootReducer;
