import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-a040-start-with',
  templateUrl: './a040-start-with.component.html',
  styleUrls: ['./a040-start-with.component.css']
})
export class A040StartWithComponent {
  // TODO - "startWith()": es un operador que nos permite hacer una emision antes de que mi observable empiece a emitir por lo menos 1 valor sincrono.
  public listNumeros$: Observable<number> = of(1,2,3);

  constructor() { 
    this.listNumeros$.pipe(
      startWith(0) // basicamente defino que valor se emitira inicialmente, es decir, que se emitira antes de lo que emita "listNumeros$", puede ser cualquier tipo de dato, incluso puedo emitir otro observable,
                   // pero ello ya tendria que trabajar de la mano con un operador de aplanamiento.
    ).subscribe(console.log)
  }

}
