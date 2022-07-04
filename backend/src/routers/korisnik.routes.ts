import express from 'express'
import { KorisnikController } from '../controllers/korisnik.controller';
const multer  = require('multer')
const upload = multer({ dest: '/assets/' })


const korisnikRouter = express.Router();

korisnikRouter.route('/login').post(
    (req, res) => new KorisnikController().login(req, res)
)

korisnikRouter.route('/registracija').post( upload.array('photos',2),
    (req, res) => new KorisnikController().registracija(req, res)
)

korisnikRouter.route('/novalozinka').post(
    (req, res) => new KorisnikController().promenaLozinke(req, res)
)

export default korisnikRouter;   

