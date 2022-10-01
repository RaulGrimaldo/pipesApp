import { Component } from '@angular/core';
import { Juego, Categoria } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ] 
})

export class OrdenarComponent {
  

  enMayusculas_: boolean = false;

  ordenarPor: string = '';

  juegos: Juego[] = [

    {
      nombre: 'Super Mario Bros 3',
      disponible: true,
      categoria: Categoria.A
    },
    {
      nombre: 'GTA VI',
      disponible: false,
      categoria: Categoria.D
    },
    {
      nombre: 'A Plague tale: Requiem',
      disponible: true,
      categoria: Categoria.B15
    },
    {
      nombre: 'Call Of Duty Modern Warfare II',
      disponible: false,
      categoria: Categoria.C
    }

  ];
  
  cambiar(): void{
    
    this.enMayusculas_ = !this.enMayusculas_;
  }  

  cambiarOrden(valor:string):void {
    this.ordenarPor = valor;
    
  }
  
}
