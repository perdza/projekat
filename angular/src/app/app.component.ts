import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  contact: Contact;


  ngOnInit() {
    this.contact = new Contact();
  }

  upisi() {
    localStorage.setItem('contact', JSON.stringify(this.contact));
    alert("Uspesno upisane informacije u LocalStorage")
  }

}
