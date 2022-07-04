import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let korisnikSchema = new Schema({
    korisnicko_ime: {
        type: String
    },
    loznka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    telefon: {
        type: String
    },
    brojLK: {
        type: Number
    }
})

export default mongoose.model('korisnikModel', korisnikSchema, 'korisnici')
