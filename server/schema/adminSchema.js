import mongoose from "mongoose";


const candidateSchema = mongoose.Schema({
    // cdname:String,
    // cdnum:Number,
    // cddis:String,
    // cdla:String,
    // party:String,
    // mail:String,

    cdName: String,
    gender: String,
    gName: String,
    relation: String,
    mobile: Number,
    email: String,
    epicNumber: String,
    dob: String,
    address: String,
    city: String,
    state: String,
    zip: Number
});

const user = mongoose.model('candidate', candidateSchema);

export default user;