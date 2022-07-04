"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
});
exports.default = mongoose_1.default.model('korisnikModel', korisnikSchema, 'korisnici');
//# sourceMappingURL=korisnik.js.map