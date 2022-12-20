import { Component } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-a028-sample',
  templateUrl: './a028-sample.component.html',
  styleUrls: ['./a028-sample.component.css']
})
export class A028SampleComponent  {
  // TODO - "simple(click$)": emite el ultimo valor del observable en este caso "miInterval$", solo despues de que el observable "click$" emitio un valor.
  // TODO - NOTA: si para cuando mi observable "click$" emite un valor y en el observable "miInterval$" no ha emitido algun otro valor, entonces no se emitira NADA,
  // TODO - NOTA: ademas, cuando el obserable "miInterval$" se complete, entonces el observable "click$" tambien se completara.
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');
  public miInterval$: Observable<number> = interval(1000);

  constructor() { 
    this.miInterval$.pipe(
      sample(this.click$)
    ).subscribe({
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