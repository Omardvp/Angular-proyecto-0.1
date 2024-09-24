import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LibrosService } from '../Services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent {
  constructor(private librosService : LibrosService){

  }

  @Input() tituloLibro: string = '';
  
  @Output() libroClicked = new EventEmitter();
  
 onClicked() {
    // this.libroClicked.emit();
    this.librosService.eliminarLibro(this.tituloLibro)
  }
}
