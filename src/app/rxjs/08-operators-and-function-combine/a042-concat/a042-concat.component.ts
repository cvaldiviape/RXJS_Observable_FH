import { Component } from '@angular/core';
import { concat, interval, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-a042-concat',
  templateUrl: './a042-concat.component.html',
  styleUrls: ['./a042-concat.component.css']
})
export class A042ConcatComponent  {
  // TODO - concat(): NO ES UN OPERADOR, este es una funcion que recibes "observables" como argumento, tambien puede recibir un iterable o un arreglo. Y con esos observables va crear un nuevo Observable, ver IMAGEN.
  public miInterval$: Observable<number> = interval(1000);

  constructor() { 
    // basicamente lo que hace es concatenar observable, PERO, para que comience a emitir el siguiente, es necesario que se complete el anterior.
    concat(
      this.miInterval$.pipe(take(3)),
      this.miInterval$.pipe(take(2)),
      [1,2,3,4],
      of('a', 'b')
    ).subscribe(console.log);
    
  }

}