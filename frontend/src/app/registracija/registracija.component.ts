import { Component, OnInit } from '@angular/core';
import { Preduzece } from '../modeli/preduzece';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikServis: KorisniciService) { }

  ngOnInit(): void {
      this.preduzece = new Preduzece();
  }

  preduzece: Preduzece;
  message: string;
  
  imeIprezime: string;
  korisnicko_ime: string;
  lozinka: string;
  telefon: string;
  i_mejl: string;
  nazivPreduzeca: string;
  adresa: string;
  pib: number;
  maticniBrojPreduzeca: string;

  registracija(){
        this.korisnikServis.registracija(this.imeIprezime, this.korisnicko_ime, this.lozinka, this.telefon, this.i_mejl, this.nazivPreduzeca, this.adresa,
          this.pib, this.maticniBrojPreduzeca).subscribe(respObj =>{
          if(respObj['poruka'] == 'ok'){
            this.message = 'Preduzece dodato'
          }
          else{
            this.message = 'Greska'
          }
        });  
  }

}
