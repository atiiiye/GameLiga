import { ADMIN_USER } from "../Actions/actionTypes";


function adminReducer(state = {}, action) {
    
    switch (action.type) {
        case ADMIN_USER:
            return {
                currentUser: { role: 'admin' }
            }
        default:
            return state;
    }
}


export default adminReducer;