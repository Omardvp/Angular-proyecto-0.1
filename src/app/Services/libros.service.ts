import { Subject } from "rxjs";

export class LibrosService{
    librosSubject = new Subject();

    private libros = [
        'Rayuela', 
        'Revista Solo Futbol', 
        'El Grafico',
        'Isidoro Cañones'];

    agregarLibro(libroNombre: string){
        this.libros.push(libroNombre);
        this.librosSubject.next(this.libros.slice())
    }

    obtenerLibros(){
        return [...this.libros];
    }

    eliminarLibro(libroNombre: String) {
      this.libros = this.libros.filter( l => l !== libroNombre)
      this.librosSubject.next(this.libros.slice())
    }
}