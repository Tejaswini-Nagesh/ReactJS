
import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAIL} from "../constants/userConstant";
export const userReducer=(state={users:["a","b"]},action)=>{
    switch(action.type){
        case GET_USERS_REQUEST:
         return {loading:true,users:[]}
         break;
        case GET_USERS_SUCCESS:
            return{loading:false,users:action.payload}
            break;
        case GET_USERS_FAIL:
            return{loading:false,error:action.payload};
            break;
            default:
            return state;
    }

}