import {combineReducers, createStore} from "redux";
import blogReduser from "./blog-reducer";

let reducers = combineReducers({
    blog: blogReduser
});

let store = createStore(reducers);

export default store;