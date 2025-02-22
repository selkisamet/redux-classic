import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";


export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());