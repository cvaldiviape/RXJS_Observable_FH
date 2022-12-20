import { Component } from '@angular/core';
import { interval, timer, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-a007-interval-timer',
  templateUrl: './a007-interval-timer.component.html',
  styleUrls: ['./a007-interval-timer.component.css']
})
export class A007IntervalTimerComponent {

  public miObserver: Observer<any> = {
    next: (x) => console.log('next:', x),
    error: (err) => console.log('error:', err),
    complete: () => console.log('completado'),
  }
  // el "interval()" crear un observable, el cual es un contador que por default inicia de 0, ademas es asincrono por naturaleza.
  public miInterval$: Observable<any> = interval(1000);
  // el "timer()" es como el setTimerout(), es decir, se ejecutara despues de cierto tiempo definido. y es asincrono tambien.
  public miTimer$: Observable<any> = timer(5000); // se ejecutara despues de  5 segundos
  // public miTimer$: Observable<any> = timer(5000, 1000); // aqui le doy un comportamiento parecido al "interval()", el detalle es que ahora se creara un contador que iniciara despues de 5 segundos."

  constructor() { 
    // console.log('Inicio'); // comprobando que es asincrono el "interval()"
    // this.miInterval$.subscribe(this.miObserver);
    // console.log('Fin');


    // console.log('Inicio'); // comprobando que es asincrono el "interval()"
    // this.miTimer$.subscribe(this.miObserver);
    // console.log('Fin');

   
    // podemos usar esto para cuando queremos que se ejecute cierta tarea en un momento especifico del dia, como una notificion u otra cosa.
    let currentDate = new Date(); // ahora
    currentDate.setSeconds(currentDate.getSeconds() + 5); // estoy sumando 5 segundos a la hora actual.
    let miTimer2$: Observable<any> = timer(currentDate); 

    miTimer2$.subscribe(this.miObserver);

  }

}