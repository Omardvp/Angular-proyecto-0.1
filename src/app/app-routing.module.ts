import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import path from 'path';
// import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './Libros/libros.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';



const routes: Routes = [
  // {path: '', component: InicioComponent },
  {path: 'libros', component: LibrosComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent}, 
  {path: "",
    children:[
      {
      path: 'demo',
      loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule) 
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
