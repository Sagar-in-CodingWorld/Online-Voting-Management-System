import axios from "axios";
const URL = 'http://localhost:8000';

const addUser = async(data) =>{
    try{
         return await axios.post(`${URL}/add/user`,data);
    }catch(error){
        console.log("ERROR WHILE CALLING API",error);
    }
}

export const candidateIndex = async(data)=> {
  try{
        return await axios.post(`${URL}/add/candidateIndex`,data);
  }catch(error){
        console.log(`Error while calling candidateIndex API`,error);
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

export const deleteCandidate = async(data) =>{
  try{
      return await axios.post(`${URL}/deleteCandidate`,data);
  }catch(error){
      console.log('Error While Fetching Data', error);
  }
}

export {addUser,candidate,New}