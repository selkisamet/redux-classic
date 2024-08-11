import counterReducer from "./counterReducers";
import themeReducer from "./themesReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    counterReducer,
    themeReducer
});

export default reducers;