import {api} from '../api'

export const useGetData = () =>{
    const getUser = async(id) => {
        try{
            const response = await api.get(`/${id}`)
            return response.data
        }catch(error){
            console.log({error})
            return {error}
        }
    }

    const createNewUser = async(data) => {
        try{
            const postResponse = await api.post('/',data)
            return postResponse.status
        }catch(error){
            return {error}
        }
    }

    const updateUserData = async(id,data) => {
        try{
            const result = await api.put(`/${id}/`,data)
            return result.status
        }catch(error){
            return {error}
        }
    }

    return{
        getUser,
        createNewUser,
        updateUserData,
    }
}
