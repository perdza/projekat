import express from 'express'
import e from 'express';

import preduzeceModel from '../models/preduzece'
import korisnikModel from '../models/korisnik'

const multer  = require('multer')
const upload = multer({ dest: '/assets/' })

export class KorisnikController{

    login = (req: express.Request, res: express.Response) => {
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        let preduzece = true;

        preduzeceModel.findOne({'korisnicko' : korisnicko, 'lozinka' : lozinka}, (err, preduzece) =>{
            if (err) preduzece = false;
            else  res.json(preduzece) 
        })

        if(!preduzece)
        korisnikModel.findOne({'korisnicko' : korisnicko, 'lozinka' : lozinka}, (err, korisnik) =>{
            if (err) console.log(err)
            else  res.json(korisnik) 
        })
    }

     registracija = (req: express.Request, res: express.Response) => {

        let imeIprezime = req.body.imeIprezime;
        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;
        let telefon = req.body.telefon;
        let i_mejl = req.body.i_mejl;
        let nazivPreduzeca = req.body.nazivPreduzeca;
        let adresa = req.body.adresa;
        let pib = req.body.pib;
        let maticniBrojPreduzeca = req.body.maticniBrojPreduzeca;

        preduzeceModel.collection.insertOne({
            'imeIprezime':imeIprezime,
            'korisnicko':korisnicko,
            'lozinka': lozinka,
            'telefon': telefon,
            'i_mejl': i_mejl,
            'nazivPreduzeca': nazivPreduzeca,
            'adresa': adresa,
            'pib' : pib,
            'maticniBrojPreduzeca': maticniBrojPreduzeca,
            'slika': upload.req.files
        }).then(kor=>
            {res.json({'poruka': 'ok'})}).catch(err=>{
                res.json(err);
            })

        /*
        let preduzece = new preduzeceModel({
            imeIprezime: req.body.imeIprezime,
            korisnicko: req.body.korisnicko,
            lozinka: req.body.lozinka,
            telefon: req.body.telefon,
            i_mejl: req.body.i_mejl,
            nazivPreduzeca: req.body.nazivPreduzeca,
            adresa: req.body.adresa,
            pib: req.body.pib,
            maticniBrojPreduzeca: req.body.maticniBrojPreduzeca,
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
        */    
    }

    promenaLozinke = (req: express.Request, res: express.Response) => {

        let korisnicko = req.body.korisnicko;
        let lozinka = req.body.lozinka;

        preduzeceModel.findOne({'korisnicko' : korisnicko}, (err, preduzece) =>{
            if (err)
            {
                korisnikModel.updateOne({'korisnicko': korisnicko}, {$set: {'lozinka': lozinka}}, (err, resp) =>{
                    if(err) console.log(err)
                    else res.json({'poruka': "Uspesno promenjena lozinka!"})
                })
            }
            else
            {
                preduzeceModel.updateOne({'korisnicko': korisnicko}, {$set: {'lozinka': lozinka}}, (err, resp) =>{
                    if(err) console.log(err)
                    else res.json({'poruka': "Uspesno promenjena lozinka!"})
                })
            }
        })
    }

}