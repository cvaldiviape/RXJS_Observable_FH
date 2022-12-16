import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-a012-map-to',
  templateUrl: './a012-map-to.component.html',
  styleUrls: ['./a012-map-to.component.css']
})
export class A012MapToComponent {

  public miKeyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

  constructor() { 
     // TODO - "mapTo()" me permite transforma la entrada a una valor especifico en la salida.
    this.miKeyUp$.pipe(
      mapTo<KeyboardEvent, string>('tecla presionada') // voy a transformar
    ).subscribe((x) => {
      console.log(x)
    });

  }

}