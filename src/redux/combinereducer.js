import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import reducer from "./reducer";

export default combineReducers({ reducer, visibilityFilter });