// import {user} from "../schema/candschema.js";

import user from "../schema/adminSchema.js";


const AddCandidate = async(req,res) =>{
    console.log(req.body);
  try{
    const userInfo = req.body;
    let User = new user(userInfo);
    User.save();
    res.status(201).json("Candidate Successfully Added");

  }catch(error){
      console.log("Error While Inserting Data", error);
  }
} 



export default AddCandidate