import mongoose from "mongoose";


const signUp = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    username: String,
    password: String
});

export const signUpSchema = mongoose.model('SignUp',signUp)


const newSchema = mongoose.Schema({
    state: String,
    district: String,
    assembly: String,
    firstName: String,
    lastName: String,
    gender: String,
    relativeFirstName: String,
    relativeSecondName: String,
    relativeRelation: String,
    mobile: Number,
    email: String,
    aadhar: Number,
    dob: Number,
    dobProofOption: Number,
    SAL: String,
    dobProof: String,
    house: Number,
    TV: String,
    postOffice: String,
    PinCode: Number,
    addressProofOption: String,
    addressProof: String,
    photo: String,
    familyMemberName: String,
    familyMemberRelation: String,
    familyMemberEpic: String,
    applicationForm: String,
    applicationFromDist: String,
    applicationFormState: String,
    resideForm: String,
    applicationPlace: String,
    today: String,
    captcha: String,
    jila: String,
    rajya: String,
});

export const newuser = mongoose.model('Registration', newSchema);

