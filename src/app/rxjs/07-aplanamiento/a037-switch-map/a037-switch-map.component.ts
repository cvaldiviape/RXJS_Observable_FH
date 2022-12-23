import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-a037-switch-map',
  templateUrl: './a037-switch-map.component.html',
  styleUrls: ['./a037-switch-map.component.css']
})
export class A037SwitchMapComponent {
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
  public miInteval$: Observable<number> = interval(1000);

  constructor() { 
    this.click$.pipe(
      // mergeMap(() => this.miInteval$), // en el momento que yo haga click, se comenzara a emitir valores de mi Observable interno.
                                          // ademas, cuando yo haga click varias veces, entonces generare varios flujos para el mismo 
                                          // Observable "miInteval$", lo cual en ciertos casos puede q no se desee. Ahi en donde podria usar "switchMap()"
      switchMap(() => this.miInteval$)    // en este caso cuando yo haga click varias veces, no se generaran varios flujos, es decir, solo
                                          // se matendra el ultimo flujo en emision, es decir, el "switchMap()" se encargara de cancelar
                                          // los flujos anteriores, para asi solo quedarse emitiendo el ultimo flujo de informacion.
    ).subscribe(console.log);
  }
  
  // TODO - NOTA: en resumen "switchMap()" solo mantendra una subcripcion interna activa, 
  // TODO -                  "mergeMap()" mantiene todas las subcriociones que quiera o necesite.

}