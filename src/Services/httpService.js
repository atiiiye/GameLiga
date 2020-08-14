import axios from 'axios'

//import packages
import { toast, Flip, Slide } from 'react-toastify'

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status > 400 &&
        error.response.status < 500

    if (!expectedError) {
        console.log('Logging the error', error);
        toast.error('An unexpected error occurred ', {
            className: 'toast-container-error',
            draggable: true,
            position: "top-right",
            transition: Slide,
            autoClose: 3500,

        })
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}