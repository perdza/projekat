"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const preduzece_1 = __importDefault(require("../models/preduzece"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.login = (req, res) => {
            let korisnicko = req.body.korisnicko;
            let lozinka = req.body.lozinka;
            let preduzece = true;
            preduzece_1.default.findOne({ 'korisnicko_ime': korisnicko, 'lozinka': lozinka }, (err, preduzece) => {
                if (err)
                    preduzece = false;
                else
                    res.json(preduzece);
            });
            if (!preduzece)
                korisnik_1.default.findOne({ 'korisnicko_ime': korisnicko, 'lozinka': lozinka }, (err, korisnik) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(korisnik);
                });
        };
        this.registracija = (req, res) => {
            let preduzece = new preduzece_1.default({
                imeIprezime: req.body.imeIprezime,
                korisnicko_ime: req.body.korisnicko_ime,
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
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map