import { Component } from '@angular/core';
import { Observable, range, of, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-a006-range',
  templateUrl: './a006-range.component.html',
  styleUrls: ['./a006-range.component.css']
})
export class A006RangeComponent  {
  // NOTA: tanto el "range()" como el "of()" se ejecutan de forma sincrona, pero se puede convertir de forma asincrona usando "asyncScheduler".

  // "range" crea un observable que emite una secuencia de numeros en base a un rango, por defecto son sincronos, pero a su vez se pueden transformar en asincronos 
  // utilizando un "asyncScheduler". En este ejemplo se emitira valores de 1 al 5 y cuando se termine de emitir todos, se completara.
  public miObsRange$: Observable<any> = range(1,100); // OJO: aqui indico que se realizaran "100 emisiones" a partir  punto inicial que en este caso esel 1, es decir, no lo veamos que va emitir de 1 al 100 como tal.
  // public miObsRange$: Observable<any> = range(-5,10); // aqui comprubo que se trabaja con emision, es decir, no es que cuenta de -5 hasta el 5, sino, sera de -5 hasta 4.
  // public miObsRange$: Observable<any> = range(5); // si no le defino el "punto inicial", entonces por default tomara 0 y desde ahi se realizaran 5 emisiones.

  // haciendo que "range()" ahora sera asincrono.
  public miObsRangeAsincrono$: Observable<any> = range(1,100, asyncScheduler); // ahora que es asincronaa, se ejecutara primero linea 23 y 25, para despues ejecutarse el "subscribe()"


  constructor() { 
    console.log('Inicio');
    this.miObsRangeAsincrono$.subscribe(console.log);
    console.log('Fin');
  }

 

}
