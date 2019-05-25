import * as axios from "axios";

const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';
const FETCH_POSTS_REQUEST = 'FETCH_POSTS';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const likePost = id => ({type: LIKE, id});
export const unlikePost = id => ({type: UNLIKE, id});
export const fetchPostsRequest = () => ({type: FETCH_POSTS_REQUEST});
export const fetchPostsSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPosts = () => function(dispatch) {
    //
    dispatch(fetchPostsRequest());
    axios.get('posts.json')
        .then(response => {
            dispatch(fetchPostsSuccess(response.data.posts))
        })
        .catch(error => {

        });
}

export default (state = {
    isFetching: false,
    posts: []
}, action)  => {
    switch (action.type) {
        case LIKE:
            return {
                ...state,
                posts: state.posts.map( p => {
                    if (p.id === action.id) {
                        return {...p, isLiked: true, likesCount: ++p.likesCount};
                    }
                    return p
                })
            }
        case UNLIKE:
            return {
                ...state,
                posts: state.posts.map( p => {
                    if (p.id === action.id) {
                        return {...p, isLiked: false, likesCpount: --p.likesCount};
                    }
                })
            }
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.posts
            };
        default:
            return state
    }
}