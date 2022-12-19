import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

@Component({
  selector: 'app-a027-sample-time',
  templateUrl: './a027-sample-time.component.html',
  styleUrls: ['./a027-sample-time.component.css']
})
export class A027SampleTimeComponent {
  // TODO - sampleTime(): me permite definir que se omita el ultimo valor despues de un tiempo definido, es decir, nunca omitira el primer valor de mi Observable.
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

  constructor() {

    this.click$.pipe(
      sampleTime(2000),
      map<PointerEvent, Coordenadas>(({x, y}) => ({x, y})),
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