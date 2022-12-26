import { Component } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, exhaustMap, switchMap, take } from 'rxjs/operators';
@Component({
  selector: 'app-a039-exhaust-map',
  templateUrl: './a039-exhaust-map.component.html',
  styleUrls: ['./a039-exhaust-map.component.css']
})
export class A039ExhaustMapComponent {
  // TODO - "exhaustMap()": solo mantiene un flujo activo, antes de poder añadir otra flujo, pero si en el momento que ya no tenga ningu flujo activo, AHI SI, podra recibir el nuevo flujo.
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
  public miInterval$: Observable<number> = interval(1000);

  constructor() {

    this.click$.pipe(
      exhaustMap(() => this.miInterval$.pipe(take(3)))
      // es util cuando tenemos elementos que estan espameando mucho o estas lazando muchos eventos rapidamente, es decir, sera necesario cuando tengamos observables que emiten muchos valores
      // de los cuales la mayoria queremos ignorar, por ejemplo que un usuario haga click en una boton y presione varias veces, o en una formulario cuando un usuario presiona el boton submit
      // varias veces, lo cual podria generar un "doble submit" de forma innecesaria.
    ).subscribe(console.log);

   }

}