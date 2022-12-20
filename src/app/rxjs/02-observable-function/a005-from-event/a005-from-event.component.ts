import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-a005-from-event',
  templateUrl: './a005-from-event.component.html',
  styleUrls: ['./a005-from-event.component.css']
})
export class A005FromEventComponent {
  // Eventos del DOM
  public src1$!: Observable<PointerEvent>;
  public src2$!: Observable<KeyboardEvent>;

  constructor() { 
      // "fromEvent()" me permite convertir un evento a un "Observable" en la cual pudo subcribirme
      this.src1$ = fromEvent<PointerEvent>(document, 'click'); // si no se que tipo de evento va producir, solo hago un console.log() en el subcribe, y ahi me dira ello.
      this.src2$ = fromEvent<KeyboardEvent>(document, 'keyup');
  
      this.src1$.subscribe(event => {
        console.log(event.x);
        console.log(event.y);
      });
      this.src2$.subscribe(event => console.log(event.key)); // ahora puedo acceder a la propiedad "key" gracias a que defini el tipo de evento que emitira mi Observable, el cual es en este caso "KeyboardEvent"
  }

}