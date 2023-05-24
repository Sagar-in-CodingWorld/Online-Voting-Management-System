import express, { Router } from "express";
import AddCandidate from "../controller/adminController.js";
import { getCandidate, newUser, signUpUser } from "../controller/citizenController.js";
import multer from 'multer'
import user from "../schema/adminSchema.js";

const router = express.Router();
router.post('/add/user', signUpUser)




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) 
    }
})
const upload = multer({ storage: storage })
router.post('/add/candidate', upload.single('cdimage'), async (req, res) => {
    const cd = new user() 
    cd.cdname = req.body.cdname
    cd.gender = req.body.gender 
    cd.gname = req.body.gname
    cd.relation = req.body.relation
    cd.mobile = req.body.mobile
    cd.email = req.body.email
    cd.epicNumber = req.body.epicNumber
    cd.dob = req.body.dob 
    cd.cdimage = req.file.originalname
    cd.address = req.body.address
    cd.city = req.body.city 
    cd.state = req.body.state
    cd.zip = req.body.zip
    cd.save()
    res.status(201).json('success')
}); 

 

router.post('/new', newUser);
router.get('/fetch/candidate', getCandidate)

export default router;    