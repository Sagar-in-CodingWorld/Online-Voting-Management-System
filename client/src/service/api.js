import axios from "axios";
const URL = 'http://localhost:8000';

const addUser = async(data) =>{
    try{
         return await axios.post(`${URL}/add/user`,data);
    }catch(error){
        console.log("ERROR WHILE CALLING API",error);
    }
}

const candidate = async(data) =>{
    try{
           return await axios.post(`${URL}/add/candidate`,data);
    }catch(error){
      console.log('error while calling API',error);
    }
}

const New = (data) =>{ 
  try{
         return axios.post(`${URL}/new`,data);
  }catch(error){
    console.log('error while calling API',error);
  }
}

export const getCandidate = async()=> {
  try{
      return await axios.get(`${URL}/fetch/candidate`);
  }
  catch(err){
    console.log('Error while fetching Candidates',err);
  }
}

export {addUser,candidate,New}