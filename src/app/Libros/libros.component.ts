import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibrosService } from '../Services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];
  constructor(private librosService: LibrosService){
    // this.libros = librosService.obtenerLibros();
  }
  
  private librosSubscription !: Subscription;


  eliminarLibro(libro: string){
    // this.libros = this.libros.filter(p => p !== libro);

  }  

  guardarLibro(f: NgForm) {
    // console.log(f); // prueba ok
    if (f.valid){
      // this.libros.push(f.value.nombreLibro);
      this.librosService.agregarLibro(f.value.nombreLibro)
    } 
  }

  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.librosSubscription = this.librosService.librosSubject.subscribe( ()=> {
      this.libros = this.librosService.obtenerLibros();
    })
  }

  ngOnDestroy(){
   this.librosSubscription.unsubscribe()
  }
}
