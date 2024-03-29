import express from 'express'
import { KorisnikController } from '../controllers/korisnik.controller';


const korisnikRouter = express.Router();

korisnikRouter.route('/login').post(
    (req, res) => new KorisnikController().login(req, res)
)

korisnikRouter.route('/registracija').post(
    (req, res) => new KorisnikController().registracija(req, res)
)

export default korisnikRouter;   

