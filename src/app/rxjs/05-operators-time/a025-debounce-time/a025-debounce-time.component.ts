import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a025-debounce-time',
  templateUrl: './a025-debounce-time.component.html',
  styleUrls: ['./a025-debounce-time.component.css']
})
export class A025DebounceTimeComponent implements AfterViewInit  {
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

  @ViewChild("miInput") miInput!: ElementRef<HTMLInputElement>;
  public miInputObs$!: Observable<KeyboardEvent>;

  constructor() {
    // TODO - "debounceTime()": me permite definir que un valor se emita despues de un tiempo definido, ademas retringe la cantidad de valores que se emitan cada cierto tiempo, veamos el EJM:
    // this.click$.pipe(
    //   debounceTime(3000) // en este caso indico que el primera valor se emita despues de 3 segundos, posteriormente cuando se emita otro valor repetidas veces, es decir, si emito varios valores en menos de 3 segundos,
    //                      // se bloqueara mi observable, osea, esperara a que este haciendo spam de los valores emitidos, cuando deje de hacer spam, pasaran 3 segungos y "RECIEN SE EMITIRA EL SIGUIENTE VALOR".
    // ).subscribe({
    //   next: (value) => {
    //     console.log('next:', value)
    //   },
    //   error: (err) => {
    //     console.log('error:', err)
    //   },
    //   complete: () => {
    //     console.log('complete')
    //   }
    // });

   }

  ngAfterViewInit(): void {
    this.miInputObs$ = fromEvent<KeyboardEvent>(this.miInput?.nativeElement, 'keyup');

    this.miInputObs$.pipe(
      debounceTime(1000), // con esto evite que se vuelva a emitir "diferentes o iguales" valores, es decir, despues q escribi en mi "input" pasara 1 segundos para que recien se emita el valor final que deseo.
      pluck<KeyboardEvent, string>('target', 'value'), // solo quiero el valor que tenga la propiedad "target" que a asu vez tiene la propiedad "value"
      distinctUntilChanged() // fue necesario agregare este opeador, ya que asi evito que emite un valor repetido de forma innecesaria, es decir, solo emita un proximo valor, si el anterior emitido ha "cambiado".
    ) // TODO - este tipo de ejercicio lo podria aplicar cuando realizo peticiones HTTP, es decir, evitaria estar haciendo peticiones de forma innecesaria, y asi mejoraria el rendimiento de mi aplicacion.
    .subscribe({
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