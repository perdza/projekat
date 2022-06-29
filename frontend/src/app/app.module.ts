import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreduzeceComponent } from './preduzece/preduzece.component';
import { KupacComponent } from './kupac/kupac.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PreduzeceComponent,
    KupacComponent,
    AdminComponent,
    LoginComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
