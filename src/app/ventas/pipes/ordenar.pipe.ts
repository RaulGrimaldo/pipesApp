import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(juegos: Juego[], ordenarPor: string = 'sin valor'): Juego[] {
    
    switch (ordenarPor) {
      case 'nombre':
        
        return  juegos = juegos.sort( (a, b) => (a.nombre > b.nombre)?1:-1);
      
      case 'disponible':
        
        return  juegos = juegos.sort( (a, b) => (a.disponible > b.disponible)?-1:1);

      case 'categoria':
        
        return  juegos = juegos.sort( (a, b) => (a.categoria > b.categoria)?1:-1);
      
        default:
        return juegos;
    }
    
  }

}
