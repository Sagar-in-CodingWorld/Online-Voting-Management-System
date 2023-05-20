import mongoose  from "mongoose";

const Connection = async(username,password) =>{
    const URL = `mongodb://${username}:${password}@ac-ookcbax-shard-00-00.yheevrb.mongodb.net:27017,ac-ookcbax-shard-00-01.yheevrb.mongodb.net:27017,ac-ookcbax-shard-00-02.yheevrb.mongodb.net:27017/?ssl=true&replicaSet=atlas-5vg2k2-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
      await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
      console.log("Database connection SuccessFull");
    }catch(error){
        console.log('connection Error', error);
    }
}

export default Connection  