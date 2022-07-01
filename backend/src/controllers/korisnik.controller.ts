import express from 'express'

import preduzeceModel from '../models/preduzece'
import korisnikModel from '../models/korisnik'

export class KorisnikController{

    login = (req: express.Request, res: express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        //console.log(korisnicko)
        //console.log(lozinka)

        let preduzece = true;

        preduzeceModel.findOne({'korisnicko_ime' : korisnicko, 'lozinka' : lozinka}, (err, preduzece) =>{
            if (err) preduzece = false;
            else  res.json(preduzece) 
        })

        if(!preduzece)
        korisnikModel.findOne({'korisnicko_ime' : korisnicko, 'lozinka' : lozinka}, (err, korisnik) =>{
            if (err) console.log(err)
            else  res.json(korisnik) 
        })
    }

     registracija = (req: express.Request, res: express.Response) => {

        let preduzece = new preduzeceModel({
            imeIprezime: req.body.imeIprezime,
            korisnicko_ime: req.body.korisnicko_ime,
            lozinka: req.body.lozinka,
            telefon: req.body.telefon,
            i_mejl: req.body.i_mejl,
            nazivPreduzeca: req.body.nazivPreduzeca,
            adresa: req.body.adresa,
            pib: req.body.pib,
            maticniBrojPreduzeca: req.body.maticniBrojPreduzeca
        })

        preduzece.save((err, resp) =>{
            if(err) {
                console.log(err);
                res.status(400).json({"poruka" : "greska"})
            }
            else res.json({
                "poruka": "ok"
            })
        })
        
    }
}