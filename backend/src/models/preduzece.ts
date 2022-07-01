import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

let preduzeceSchema = new Schema({
    imeIprezime: {
        type: String
    },
    korisnicko: {
        type: String
    },
    lozinka: {
        type: String
    },
    telefon: {
        type: Number
    },
    i_mejl: {
        type: String
    },
    nazivPreduzeca: {
        type: String
    },
    adresa: {
        type: String
    },
    pib: {
        type: Number
    },
    maticniBrojPreduzeca: {
        type: Number
    }
}
)

export default mongoose.model('preduzeceModel', preduzeceSchema, 'preduzeca')