import  express, {Router} from "express";
import AddCandidate from "../controller/adminController.js";
import {getCandidate, newUser, signUpUser} from "../controller/citizenController.js";

const router = express.Router();

router.post('/add/user',signUpUser)
router.post('/add/candidate',AddCandidate);
router.post('/new',newUser);
router.get('/fetch/candidate',getCandidate)

export default router;    