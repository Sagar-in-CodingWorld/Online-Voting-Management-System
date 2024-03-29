import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import Routes from './routes/route.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
const PORT = 8000;
app.use('/', Routes);
app.use('/uploads',express.static('uploads'))
 
const username = process.env.DB_USERNAME; 
const password = process.env.DB_PASSWORD;
Connection(username,password);

app.listen(PORT,()=> console.log(`Server listening to port number ${PORT}`)); 