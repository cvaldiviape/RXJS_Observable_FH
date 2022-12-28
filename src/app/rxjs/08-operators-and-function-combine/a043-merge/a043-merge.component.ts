import { Component } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-a043-merge',
  templateUrl: './a043-merge.component.html',
  styleUrls: ['./a043-merge.component.css']
})
export class A043MergeComponent {
  // TODO - "merge()": NO ES UN OPERADOR, es una funcion que une 2 o más observables, y el resultado sera el producto de todos los observables combinados simultaneamente, y solo
  // TODO -            se completara cuandos todos los observables que unidos se hayan completado.
  public keyup$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'keyup');
  public click$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'click');

  constructor() { 
    merge(
      this.keyup$.pipe(pluck('type')), 
      this.click$.pipe(pluck('type')), 
    ).subscribe(console.log)
  }

}