import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-a041-end-with',
  templateUrl: './a041-end-with.component.html',
  styleUrls: ['./a041-end-with.component.css']
})
export class A041EndWithComponent {
  // TODO - "endWith()": usa la misma logica de "startWith()", solo que ahora defino cual sera el ultimo valor que se emita.
  public listNumeros$: Observable<number> = of(1,2,3);

  constructor() { 
    this.listNumeros$.pipe(
      startWith('a','b','c'),
      endWith('x','y','z')
    ).subscribe(console.log)
  }

}