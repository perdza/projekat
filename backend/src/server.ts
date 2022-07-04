import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import korisnikRouter from './routers/korisnik.routes';

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/baza')
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('db connected')
}
)

const ruter = express.Router();

ruter.use('/korisnici', korisnikRouter)

app.use('/', ruter)

app.listen(4000, () => console.log(`Express server running on port 4000`));