import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower: string = 'neo';
 nombreUpper: string = 'NEO';
 nombreCompleto: string = 'NeO';

 fecha: Date = new Date();

}
