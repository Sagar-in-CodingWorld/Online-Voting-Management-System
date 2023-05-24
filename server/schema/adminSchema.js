import mongoose from "mongoose";


const candidateSchema = mongoose.Schema({
    cdname: String,
    gender: String,
    gname: String,
    relation: String,
    mobile: Number,
    email: String,
    epicNumber: String,
    dob: String,
    cdimage:String,
    address: String,
    city: String,
    state: String,
    zip: Number
});

const user = mongoose.model('candidate', candidateSchema);

export default user;