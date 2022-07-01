import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../modeli/korisnik';
import { Preduzece } from '../modeli/preduzece';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private korisnikServis: KorisniciService, private ruter: Router) { }

  ngOnInit(): void {
  }

  korisnicko: string;
  lozinka: string;
  poruka: string;
  greska: boolean = false;

  login(){
      this.korisnikServis.login(this.korisnicko, this.lozinka).subscribe((povratnaVrednost: any) =>{
          if(povratnaVrednost.hasOwnProperty('pib'))
            this.ruter.navigate(['preduzece']);
          else if(povratnaVrednost.hasOwnProperty('brojLK'))
            this.ruter.navigate(['kupac']);
          else
          {
            this.poruka = "Pogresno uneti podaci";
            this.greska = true;
          }
      })
  }

}
