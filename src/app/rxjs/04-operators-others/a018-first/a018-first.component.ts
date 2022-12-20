import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a018-first',
  templateUrl: './a018-first.component.html',
  styleUrls: ['./a018-first.component.css'],
})
export class A018FirstComponent {
  // TODO - first(): toma el primer valor y se completa automaticamente, tambien se puede trabajar con condificionales.
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

  constructor() {
    this.click$.pipe(
      tap<PointerEvent>(console.log),
      map<PointerEvent, CustomEvent>(({clientY, clientX}) => ({  // hago esto para ya no recibir todo el objeto en el operador "first()", solo es eso xd.
        clientY,
        clientX
      })),
      // first<PointerEvent>(x => x.clientY >= 150) // indicando que tomara el primer valor que cumpla con esta condicion, despues de ello, se completara el observable.
      first<CustomEvent, CustomEvent>(x => x.clientY >= 150)  // indicando que tomara el primer valor que cumpla con esta condicion, despues de ello, se completara el observable.
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


interface CustomEvent{
  clientY: number; 
  clientX: number;
}
