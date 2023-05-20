// import { newuser } from "../schema/candschema.js";

import user from "../schema/adminSchema.js";
import {newuser, signUpSchema} from "../schema/citizenSchema.js";


export const signUpUser = async(req,res)=> {
  try{
    const signUpInfo = req.body;
    let newUserInfo = new signUpSchema(signUpInfo)
    newUserInfo.save();
    res.status(201).json("Sign Up Successfull")
    }catch(error){
      console.log("Error while inserting signInfo",error);
  }
}
export const newUser = async(req,res) =>{
  try{
    const newInfo = req.body;
    let newUser = new newuser(newInfo); 
    newUser.save(); 
    res.status(201).json("Candidate Successfully Added");

  }catch(error){
      console.log("Error While Inserting Data", error);
  }
} 


export const getCandidate = async (request, response)=> {
  try{
    const data = await user.find();
    response.status(200).json(data)
  }
  catch (err){
    response.status(404).json({message: err.message})
  }
}

