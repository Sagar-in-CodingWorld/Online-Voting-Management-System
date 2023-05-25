import express, { Router } from "express";
import AddCandidate from "../controller/adminController.js";
import { deleteCandidate, getCandidate, newUser, signUpUser } from "../controller/citizenController.js";
import multer from 'multer'
import user from "../schema/adminSchema.js";

const router = express.Router();
router.post('/add/user', signUpUser)




// const strg = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, 'uploads')
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname)
//     }
// })
// const upld = multer({ storage: strg })
// router.post('/add/candidateIndex', upld.single('partyImage'), async (req, res) => {
// // router.post('/add/candidateIndex', upld.single('partyImage'), async (req, res) => {
//     const IN = new user()
//     IN.partyName = req.body.partyName
//     IN.partyImage = req.file.originalname
//     IN.save()
//     res.status(200).json('success')
// });



 








const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname) 
    }
})
const upload = multer({ storage: storage })
router.post('/add/candidate', upload.single('partyIndex'), async (req, res) => {
    const cd = new user()  
    cd.cdname = req.body.cdname
    cd.gender = req.body.gender 
    cd.gname = req.body.gname
    cd.relation = req.body.relation
    cd.mobile = req.body.mobile
    cd.email = req.body.email
    cd.epicNumber = req.body.epicNumber
    cd.dob = req.body.dob 
    cd.address = req.body.address
    cd.city = req.body.city 
    cd.state = req.body.state
    cd.zip = req.body.zip
    cd.partyName = req.body.partyName
    cd.partyIndex = req.file.originalname
    // cd.partyName = req.body.partyName
    // cd.partyImage = req.file.originalname
    cd.save()
    res.status(201).json('success')
}); 

 

router.post('/new', newUser);
router.get('/fetch/candidate', getCandidate)
router.post('/deleteCandidate', deleteCandidate)

export default router;    