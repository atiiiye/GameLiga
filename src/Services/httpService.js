import axios from 'axios'

//import packages
import { toast, Flip, Slide } from 'react-toastify'

//import utils
import { errorMessage, successMessage } from "../utils/messages";

axios.defaults.baseURL = "http://2.186.229.181:7580/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

const token = localStorage.getItem("token")
if(token) axios.defaults.headers.common["Authorization"] =`Bearer ${token}`


axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500

    if (!expectedError) {
        console.log('Logging the error', error);
        errorMessage("An unexpected error occurred, Try again");
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}