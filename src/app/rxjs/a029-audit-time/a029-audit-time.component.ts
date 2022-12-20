import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-a029-audit-time',
  templateUrl: './a029-audit-time.component.html',
  styleUrls: ['./a029-audit-time.component.css']
})
export class A029AuditTimeComponent {
  // TODO - "auditTime()" emite el ultimo valor del Observable "click$" despues en un periodo de tiempo determinado, es decir,
  // TODO - si yo hago emito un valor en "click$", pasars 2 segundos y emitira el valor que haya emitido despues de ese primer click y asi sucesivamente.
  public click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

  constructor() { 

    this.click$.pipe(
      auditTime(2000),
      map<PointerEvent, Coordenadas>(({x, y}) => ({x, y})),
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

  // El "auditTime()" emite valores basado en el intervalo de tiempo que estableces... es decir, emite algo y luego espera "X" cantidad de segundos a ver si hay una nueva emisión y lo emite.  
  // El "SampleTime()", emite el último valor pero es como un cronómetro, siempre está pendiente de la cantidad de segundos que especificas y emite el último valor dentro de ese lapso de tiempo.

  // Igual, recuerda que aquí está la documentación para más información
  // https://rxjs-dev.firebaseapp.com/api/operators/auditTime
  // https://rxjs-dev.firebaseapp.com/api/operators/sampleTime

}

interface Coordenadas {
  x: number;
  y: number
}