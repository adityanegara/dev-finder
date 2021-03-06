import api from "./api"

const searchUser = async (keyword) =>{
    try{
        const response = await api.get(`users/${keyword}`);
        return response.data;
    } catch(error){
        return error.response.data;
    }
}

export {searchUser};