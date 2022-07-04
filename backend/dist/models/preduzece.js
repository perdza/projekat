"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
        type: String
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
});
exports.default = mongoose_1.default.model('preduzeceModel', preduzeceSchema, 'preduzeca');
/*,
slika: {
    type: Array
}
*/ 
//# sourceMappingURL=preduzece.js.map