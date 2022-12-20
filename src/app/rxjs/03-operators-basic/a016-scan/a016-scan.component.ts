import { Component } from '@angular/core';
import { from, interval } from 'rxjs';
import { map, reduce, scan, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a016-scan',
  templateUrl: './a016-scan.component.html',
  styleUrls: ['./a016-scan.component.css']
})
export class A016ScanComponent {

  constructor() { 
    const listNumbers$ = from([1,2,3,4,5])

    // TODO - uso de "reduce()"
    listNumbers$.pipe(
      reduce((acumulador: number, valorActual: number) => {
        return acumulador + valorActual;
      }, 0), // "0" hace referencia al valor inicial
    ).subscribe({
      next: (x) => console.log('next', x),
      error: (err) => console.log('error', err),
      complete: () => console.log('complete')
    });

    // TODO - uso de "scan()", a diferencia del "reduce()", "scan()" me mostrara cada valor que se valla acumulando, es decir, no emitira un unico valor final como lo hace "reduce()"
    listNumbers$.pipe(
      scan((acumulador: number, valorActual: number) => {
        return acumulador + valorActual;
      }, 0), // "0" hace referencia al valor inicial
    ).subscribe({
      next: (x) => console.log('next', x),
      error: (err) => console.log('error', err),
      complete: () => console.log('complete')
    });


    // TODO - NOTA, el "scan()" podria ser la base al patron "REDUX" que consiste manejar el estado global de mi aplicacion en un unico objeto.
    const listUsers: Usuario[] = [
      { id: 'saksa', auth: false, token: null },
      { id: 'saksa', auth: true, token: 'ABC' },
      { id: 'saksa', auth: true, token: 'ABC123' },
    ];

    const state$ = from(listUsers).pipe(
      scan<Usuario>((acumulador, valorActual) => {
        return {...acumulador, ...valorActual};
      }, { edad: 33})
    );

    const id$ = state$.pipe(
      map(state => state.id)
    )

    id$.subscribe(console.log);
  }

}

interface Usuario {
  id?: string;
  auth?: boolean;
  token?: string | null;
  edad?: number
}