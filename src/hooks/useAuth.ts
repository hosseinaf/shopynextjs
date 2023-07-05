import callApi from "@/app/helper/callApi"
import useSWR from "swr"
import Cookies from "universal-cookie"
import { useAppDispatch } from "."
import { updateUser } from "@/redux/store/auth"

const useAuth=()=>{
    const dispatch=useAppDispatch();
    const cookie =new Cookies()
    const{data,error}=useSWR('user_me',()=>{

        return callApi().get('/user',{
            headers:{
                authorization:cookie.get('shopy_token')
            }
        })

    })
    
    
    dispatch(updateUser(data?.data?.user))
    return{user:data?.data?.user,error,loading:!data && !error}
}

export default useAuth