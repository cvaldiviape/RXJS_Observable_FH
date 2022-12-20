import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, asyncScheduler } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, tap, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-a026-throttle-time',
  templateUrl: './a026-throttle-time.component.html',
  styleUrls: ['./a026-throttle-time.component.css']
})
export class A026ThrottleTimeComponent implements AfterViewInit {
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

  @ViewChild("miInput") miInput!: ElementRef<HTMLInputElement>;
  public miInputObs$!: Observable<KeyboardEvent>;

  constructor() { }

  ngAfterViewInit(): void {
    // TODO - "throttleTime()": me permite omitir valores que se encuentren en un intervalo de tiempo, EJM:
    // EJM 1:
    this.click$.pipe(
      throttleTime(3000), // indico que cuando omita el primer valor, en el intervalo de los 3 segundos, aquellos valores emitidos seran ignorados, es decir, cuando llegue a 3 segundos, recien se emitira el segundos valor.
      map<PointerEvent, Coordenadas>(({x, y}) => ({x, y})),
    ).subscribe({
      next: (coordenadas) => {
        console.log('next:', coordenadas)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });


    // EJM 2:
    this.miInputObs$ = fromEvent<KeyboardEvent>(this.miInput?.nativeElement, 'keyup');

    this.miInputObs$.pipe(
      // si quisiera podria acceder al primer y ultimo valor emitido por este operador.
      throttleTime(1000, asyncScheduler, {
        leading: true, // para obtener el primer elemento
        trailing: true, // para obtener el ultimo elemento
      }),
      pluck<KeyboardEvent, string>('target', 'value'), // solo quiero el valor que tenga la propiedad "target" que a asu vez tiene la propiedad "value"
      distinctUntilChanged() // fue necesario agregare este opeador, ya que asi evito que emite un valor repetido de forma innecesaria, es decir, solo emita un proximo valor, si el anterior emitido ha "cambiado".
    ) 
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

    // TODO - imaginemos que tenemos un API que es capaz de regresar informacion demasiado rapido
  }

}

interface Coordenadas {
  x: number;
  y: number
}