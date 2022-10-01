import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Trinity';
  genero: string = 'Femenino';

  invitacionMap = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  }

  clientes: string[] = ['Neo', 'Trinity'];
  ClientesMap= {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos # cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarCliente(genero: string){
    if(genero == 'Femenino'){
      this.nombre = 'Neo',
      this.genero = 'Masculino'
    } else{
      this.nombre = 'Trinity',
      this.genero = 'Femenino'
    }
  }

  borrarCliente(){
    if(this.clientes.length > 0){
      this.clientes.pop();
    }
  }

  //KeyvaluePipe
  persona = {
    nombre: 'Neo',
    edad: 28,
    dirección: 'NY, USA'
  }

  //JSONPipe

  juegos =[
    {
      nombre: 'COD',
      comprado: true
    },
    {
      nombre: 'Little Nightmares',
      comprado: false
    }
  ]

  //Async pipe

  miObservable = interval(2000); //0,1,2
  
  valorPromise = new Promise( (resolve, reject) =>{

    setTimeout(() => {
      resolve(  'Tenemos data de promesa' )
    }, 3500);
  } );
}
