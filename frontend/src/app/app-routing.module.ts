import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { KupacComponent } from './kupac/kupac.component';
import { LoginComponent } from './login/login.component';
import { PreduzeceComponent } from './preduzece/preduzece.component';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "registracija", component: RegistracijaComponent},
  {path: "preduzece", component: PreduzeceComponent},
  {path: "kupac", component: KupacComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
