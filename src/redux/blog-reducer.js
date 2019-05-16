const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';


const initState = {
    posts: [
        {id: 1, title: 'Some title for post', text: 'Here we can write some text', date: '2019-05-15', likesCount: 0, isLiked: false}
    ],
    countPosts: 1,
    pageSize: 5
};

export const likePostAc = id => ({type: LIKE, id});
export const unlikePostAc = id => ({type: UNLIKE, id});

export default (state = initState, action)  => {
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

        default:
            return state
    }
}