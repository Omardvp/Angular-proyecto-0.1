import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './Libros/libros.component';
import { LibroComponent } from './Libro/libro.component';
import {LibrosService} from './Services/libros.service'
import {InicioComponent} from './inicio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
// import { FlexLayoutModule } from '@ngbracket/ngx-layout';
// import { FlexLayoutModule } from 'ngx-flexible-layout';

@NgModule({
  declarations: [
    AppComponent,
    // UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
    RegistrarComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),  
    [LibrosService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
