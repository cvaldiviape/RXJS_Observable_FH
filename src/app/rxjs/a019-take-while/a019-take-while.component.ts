import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-a019-take-while',
  templateUrl: './a019-take-while.component.html',
  styleUrls: ['./a019-take-while.component.css']
})
export class A019TakeWhileComponent {
  // TODO - takeWhile(): toma todos los valore emitidos haste que No se cumpla cierta codicion, es igual a como trabajara con "while(){}" de JAVA.
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');


  constructor() { 
    this.click$.pipe(
      map<PointerEvent, Coordenadas>(({x, y}) => ({x, y})),
      // takeWhile(({y}) => y <= 150), // tomara todos los valores emitidos hasta que se cumpla esta condicion, despues de ello se completara el observable.
      takeWhile(({y}) => y <= 150, true), // si le coloco "true", ademas de completar el observable, se emitira el valor que rompio la condicion
    ).subscribe({
      next: (value) => {
        console.log('next:', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });
  }

}

interface Coordenadas {
  x: number;
  y: number
}