import * as axios from "axios";
import {fetchPostsSuccess} from "../redux/blog-reducer";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
});

export const postAPI = {
    getList() {
        return instanse.get('/posts.json')
            .then(response => response.data.posts);
    },
    getById(id) {
        return instanse.get(`/post.${id}.json`)
            .then(response => response.data.post);
    }
};