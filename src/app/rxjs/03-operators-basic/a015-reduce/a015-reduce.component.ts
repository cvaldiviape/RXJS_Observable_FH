import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a015-reduce',
  templateUrl: './a015-reduce.component.html',
  styleUrls: ['./a015-reduce.component.css']
})
export class A015ReduceComponent  {

  constructor() { 
    // haciendo uso de "reduce" de javascript, es decir, sin operador.
    const listNumbers = [1,2,3,4,5];
    const totalReducer = (acumulador: number, valorActual: number) => {
      return acumulador + valorActual;
    }
    const valorInitial = 0;
    const total = listNumbers.reduce(totalReducer, valorInitial);

    console.log('total:', total);

    // haciendo uso del operador "reduce"
    const miInterval$ = interval(1000);

    miInterval$.pipe(
      take(4), // "take()" completara el observable cuando se cumpla cierta condicion, para este caso, indico que se completara cuando llegue a 3, es decir, solo se tomara los 3 primeros valores que emita mi "Observable"
      tap(console.log),
      reduce((acumulador: number, valorActual: number) => {
        return acumulador + valorActual;
      }, 0), // "0" hace referencia al valor inicial
    ).subscribe({
      next: (x) => console.log('next', x),
      error: (err) => console.log('error', err),
      complete: () => console.log('complete')
    });

  }

}