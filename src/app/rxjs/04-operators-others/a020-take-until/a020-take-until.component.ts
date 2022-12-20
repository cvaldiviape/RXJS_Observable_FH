import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-a020-take-until',
  templateUrl: './a020-take-until.component.html',
  styleUrls: ['./a020-take-until.component.css']
})
export class A020TakeUntilComponent implements AfterViewInit {
  @ViewChild("miBoton") miBoton!: ElementRef<HTMLButtonElement>;
  public miBotonObs$!: Observable<PointerEvent>;
  public miContador$: Observable<number> = interval(1000);

  constructor() {
   
   }
  ngAfterViewInit(): void {
    // TODO - takeUntal(): es un operador que recibe como parametro otro "Observable"
    // cuando se emite un valor del observable "click$", entonces el observable "interval()" se completa, es decir, se traduciria como:
    // sigue recibiendo los valores y siguie emitiendolos hasta que el segundo "observable" emita su primer valor.

    this.miBotonObs$ = fromEvent<PointerEvent>(this.miBoton?.nativeElement, 'click')

    this.miContador$.pipe(
      takeUntil(this.miBotonObs$)
    ).subscribe({
      next: (value) => {
        console.log('next:', value) // la emision de los valores se completara cuando yo emita un valor en el observable "this.miBotonObs$", en este caso, sucedera cuando yo haga click.
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });
  }

  // NOTA: El "takeUntil", "takeWhile" entre otros nos sirven para hacer el "unsubscribe", no hay problema en usarlo.

}