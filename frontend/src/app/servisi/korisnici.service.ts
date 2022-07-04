import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'


  registracija(imeIprezimeForma, korisnicko_imeForma, lozinkaForma, telefonForma, i_mejlForma, nazivPreduzecaForma, adresaForma, pibForma, maticniBrojPreduzecaForma){
    const data = {
      imeIprezime: imeIprezimeForma,
      korisnicko: korisnicko_imeForma,
      lozinka: lozinkaForma,
      telefon: telefonForma, 
      i_mejl: i_mejlForma,
      nazivPreduzeca: nazivPreduzecaForma,
      adreasa: adresaForma,
      pib: pibForma,
      maticniBrojPreduzeca: maticniBrojPreduzecaForma
    }
    return this.http.post(`${this.uri}/korisnici/registracija`, data)
  }


  login(korisnickoIzForme, lozinkaIzForme){
    const data = {
      korisnicko: korisnickoIzForme,
      lozinka: lozinkaIzForme
    }
    return this.http.post(`${this.uri}/korisnici/login`, data);
  }

  promenaLozinke(korisnicko, novaLozinka){
    const data = {
      korisnicko : korisnicko,
      lozinka: novaLozinka
    }
    return this.http.post(`${this.uri}/korisnici/novalozinka`, data);
  }

}