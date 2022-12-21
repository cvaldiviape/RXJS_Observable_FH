import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-a035-merge-all',
  templateUrl: './a035-merge-all.component.html',
  styleUrls: ['./a035-merge-all.component.css']
})
export class A035MergeAllComponent implements AfterViewInit {
  @ViewChild('miInput') miInput!: ElementRef<HTMLInputElement>;
  @ViewChild('orderList') orderList!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const miInputObs$ = fromEvent<KeyboardEvent>(this.miInput?.nativeElement, 'keyup');

    // TODO - "mergeAll()": es un operador de aplanamiento que sirve para trabajar con "Observables" que internamente retornar otro "Observable"
    miInputObs$.pipe(
      // esta esperando a que el usuario deje de escribir, y despues de 500 ms recien se emitira un valor.
      debounceTime<KeyboardEvent>(500), // indico que si se emite varios valores rapidamente, entonces que termine de emitir los valores, despues de ello tendra que pasar 500 ms para que pueda emitir un valor.
      pluck<KeyboardEvent, string>('target', 'value'),
      map<string, Observable<any>>((value) => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
      mergeAll<Observable<any>>(), // se va realizar una subcripcion de Observable que retornar el operador "map()" y por consiguiente emitir el resultado de esa subcripcion
      pluck<Observable<any>, any[]>('items')
    ).subscribe({
      next: (x) => {
        x.forEach(x => console.log(x.login))
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