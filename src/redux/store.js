import {applyMiddleware, combineReducers, createStore} from "redux";
import blogReduser from "./blog-reducer";
import postReduser from "./post-reduser";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    blog: blogReduser,
    post: postReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;