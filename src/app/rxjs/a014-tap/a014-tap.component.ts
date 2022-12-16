import { Component } from '@angular/core';
import { Observable, range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a014-tap',
  templateUrl: './a014-tap.component.html',
  styleUrls: ['./a014-tap.component.css']
})
export class A014TapComponent {
  public numeros$: Observable<number> = range(1, 5);

  constructor() {
    this.numeros$.pipe(
      // mi "tap()" tambien podria ingresar como parametros un "Observer" con sus "next", "error" y "complete"
      // ademas, los "tap()" son utiles para depurar la informacion que va fluyendo por mi observable, ya que podemos ver el flujo.
      tap(x => {
        console.log('antes', x);
        // return 100; // recalcar que asi yo ponga un "return" de algun valor, no hara nada, es decir, sera ignorado.
      }),
      map(x => x * 10),
      tap({
        next: (x) => console.log('despues', x),
        error: (err) => console.log('error', err),
        complete: () => console.log('completado')
      })
    ).subscribe(x => console.log('subs', x))
   }




}