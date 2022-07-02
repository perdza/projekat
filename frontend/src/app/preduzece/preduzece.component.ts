import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisniciService } from '../servisi/korisnici.service';

@Component({
  selector: 'app-preduzece',
  templateUrl: './preduzece.component.html',
  styleUrls: ['./preduzece.component.css']
})
export class PreduzeceComponent implements OnInit {

  constructor(private ruter: Router, private korisnikServis: KorisniciService) { }

  ngOnInit(): void {
    this.trenutniKorisnikLozinka = sessionStorage.getItem('lozinka');
    this.trenutniKorisnikKorisnicko = sessionStorage.getItem('korisnicko');
  }

  staraLozinka: string;
  novaLozinka1: string;
  novaLozinka2: string;

  poruka: string;

  kliknuto: boolean=false;

  trenutniKorisnikLozinka: string;
  trenutniKorisnikKorisnicko: string;

  clickedButton(){
    this.kliknuto=true;  
  }

  promenaLozinke(){
    if(this.staraLozinka != this.trenutniKorisnikLozinka)
      this.poruka = "Pogresno uneta trenutna lozinka";
    else if(!(/^(?:([a-z]{1}(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{7,11})|([A-Z]{1}(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{7,11}))$/.test(this.novaLozinka1)))
      this.poruka = "Nova lozinka ne ispunjava uslove"
    else if(this.novaLozinka1 != this.novaLozinka2)
      this.poruka = "Unosi nove lozinke se ne poklapaju";
    else
    {
      this.korisnikServis.promenaLozinke(this.trenutniKorisnikKorisnicko, this.novaLozinka1).subscribe(res =>{
        alert(res['poruka'])
        sessionStorage.clear()
        this.ruter.navigate([""])
      })
    }
  }

}
