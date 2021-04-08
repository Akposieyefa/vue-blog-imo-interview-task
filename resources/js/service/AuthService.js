import axios from 'axios';

axios.defaults.baseURL = './api';

export default class PostService {

    /**
     * user registration
     * @param {get } user
     */
    registerUser(user){
        return axios.post('/auth/register', user)
    }

    /**
     * user login
     */
    loginUser(user){
       return axios.post('/auth/login', user)
   }

}
