"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const preduzece_1 = __importDefault(require("../models/preduzece"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
const multer = require('multer');
const upload = multer({ dest: '/assets/' });
class KorisnikController {
    constructor() {
        this.login = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            let preduzece = true;
            preduzece_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }, (err, preduzece) => {
                if (err)
                    preduzece = false;
                else
                    res.json(preduzece);
            });
            if (!preduzece)
                korisnik_1.default.findOne({ 'korisnicko': korisnicko, 'lozinka': lozinka }, (err, korisnik) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(korisnik);
                });
        };
        this.registracija = (req, res) => {
            let imeIprezime = req.body.imeIprezime;
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            let telefon = req.body.telefon;
            let i_mejl = req.body.i_mejl;
            let nazivPreduzeca = req.body.nazivPreduzeca;
            let adresa = req.body.adresa;
            let pib = req.body.pib;
            let maticniBrojPreduzeca = req.body.maticniBrojPreduzeca;
            let preduzece = new preduzece_1.default({
                imeIprezime: req.body.imeIprezime,
                korisnicko: req.body.korisnicko,
                lozinka: req.body.lozinka,
                telefon: req.body.telefon,
                i_mejl: req.body.i_mejl,
                nazivPreduzeca: req.body.nazivPreduzeca,
                adresa: req.body.adresa,
                pib: req.body.pib,
                maticniBrojPreduzeca: req.body.maticniBrojPreduzeca
            });
            preduzece.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "poruka": "greska" });
                }
                else
                    res.json({
                        "poruka": "ok"
                    });
            });
        };
        /*
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
     */
        this.promenaLozinke = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            preduzece_1.default.findOne({ 'korisnicko': korisnicko }, (err, preduzece) => {
                if (err) {
                    korisnik_1.default.updateOne({ 'korisnicko': korisnicko }, { $set: { 'lozinka': lozinka } }, (err, resp) => {
                        if (err)
                            console.log(err);
                        else
                            res.json({ 'poruka': "Uspesno promenjena lozinka!" });
                    });
                }
                else {
                    preduzece_1.default.updateOne({ 'korisnicko': korisnicko }, { $set: { 'lozinka': lozinka } }, (err, resp) => {
                        if (err)
                            console.log(err);
                        else
                            res.json({ 'poruka': "Uspesno promenjena lozinka!" });
                    });
                }
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map