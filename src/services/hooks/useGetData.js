import {api} from '../api'

export const useGetData = () =>{
    const getUser = async(rgm) => {
        try{
            const response = await api.get(`listar/${rgm}`)
            return response.data
        }catch(error){
            console.log({error})
            return {error}
        }
    }

    const createNewUser = async(data) => {
        try{
           
            const postResponse = await api.post('cadastrar/',data)
            return postResponse.status
        }catch(error){
            return error.message
        }
    }

    const updateUserData = async(rgm,data) => {
        try{
            console.log(data);
            const result = await api.put(`rgm/${rgm}`,data)
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
