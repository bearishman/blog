import {applyMiddleware, combineReducers, createStore} from "redux";
import blogReduser from "./blog-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    blog: blogReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;