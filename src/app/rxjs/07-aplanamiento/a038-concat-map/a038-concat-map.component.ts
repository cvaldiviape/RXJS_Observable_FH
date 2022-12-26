import { Component } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-a038-concat-map',
  templateUrl: './a038-concat-map.component.html',
  styleUrls: ['./a038-concat-map.component.css']
})
export class A038ConcatMapComponent {
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
  public miInterval$: Observable<number> = interval(1000);

  constructor() { 

    this.click$.pipe(
      // switchMap(() => this.miInterval$.pipe(take(3))) // recordemos que con "switchMap" cuando yo emita un nuevo valor en "click$" se hara un subscribe de "miInterval$", es decir, se cancelara la emision anterior y se emitirta
                                                      // el productor de la subcripcion de "miInterval$", pero habra un momento donde yo quisiera que cuando emita un nuevo valor en "click$" se mantenga ese nuevo flujo que genera
                                                      // "miInterval$", para ello sera necesario hacer uso de "concatMap".
      concatMap(() => this.miInterval$.pipe(take(3))) // cada vez que yo emita un valor en "click$" el flujo de genere "miIinterval$" pasara a una COLA, es decir, cada vez que emita un valor en "click$" se generara un nuevo flujo, 
                                                      // pero no se dispara hasta que termine de completarse el anterior, es decir, digamos que yo emite 4 valores en "click$", en el primer valor que emita se generara y fluira un 
                                                      // flujo, despues cuando yo emita el segundo valor, tambien generara un nuevo flujo, PERO este ultimo no se generara HASTA QUE EL ANTERIOR SE COMPLETE, y asi sucesivamente
                                                      // en el tercer y cuarto valor que emite en "click$".
                                                      // En resumen cada flujo va ser ejecutado en secuencia, uno detras de otro, pero siempre respetando que uno termine para que se comience a dispara el siguiente.
                                                      // Como su nombre lo indica "concatena observables/flujos".
    ).subscribe(console.log);

  }

}