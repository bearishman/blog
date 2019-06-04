import * as axios from "axios";
import {postAPI} from "../api/api";

const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
const FETCH_POST_ERROR = 'FETCH_POST_ERROR';


export const fetchPostsRequest = () => ({type: FETCH_POST_REQUEST});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchPostError = error => ({type: FETCH_POST_ERROR, error});
export const fetchPost = (id) => function(dispatch) {
    dispatch(fetchPostsRequest());

    postAPI.getById(id)
        .then( post => {
            dispatch(fetchPostSuccess(post));
        })
        .catch( e => {
            dispatch(fetchPostError({type:'http', code:e.response.status}))
        });

};

export default (state = {isFetching: false, post: null, error: null}, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {...state, isFetching: true, error: null};
        case FETCH_POST_SUCCESS:
            return  {...state, isFetching: false, post: action.post};
        case FETCH_POST_ERROR:
            return {...state, isFetching: false, error: action.error};
        default:
            return state;
    }
}