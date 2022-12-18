import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a017-take',
  templateUrl: './a017-take.component.html',
  styleUrls: ['./a017-take.component.css']
})
export class A017TakeComponent {
  // TODO - take(): es un operador util cuando queremos limitar la cantidad de valores emitidos por un observable. Ademas, cuando emite el ultimo valor, el observable se completa automaticamente.
  public listNumeros$: Observable<number> = of(1,2,3,4,5);

  constructor() { 
  
   this.listNumeros$.pipe(
     tap(x => console.log('tap', x)),
     take(3) // indicando que solo voy a tomar los 3 primeros valores, y que despues se completara el observable.
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
