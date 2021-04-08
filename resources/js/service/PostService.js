import axios from 'axios';

axios.defaults.baseURL = './api/';

export default class PostService {

    /**
     * get all post from api
     */
    getAllPosts() {
        return axios.get('/posts');
    }

    /**
     * update and creat post from api
     * @param {get } post 
     */
    writePost(post){
        if (post.slug) {
            return axios.put(`/posts/${post.slug}`, post);
        }else return axios.post('/posts', post)
    }

    /**
     * delete post
     * @param {*} id 
     */
    deletePost(slug){
         return axios.delete(`/posts/${slug}`);
    }
}
