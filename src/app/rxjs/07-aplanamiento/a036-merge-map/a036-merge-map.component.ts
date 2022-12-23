import { Component } from '@angular/core';
import { fromEvent, interval, Observable, of } from 'rxjs';
import { last, map, mergeMap, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-a036-merge-map',
  templateUrl: './a036-merge-map.component.html',
  styleUrls: ['./a036-merge-map.component.css']
})
export class A036MergeMapComponent  {
  // TODO - mergeMap(): no tiene limite de subcripciones internas y pueden estar activas simultaneamente.
  // TODO - NOTA: para que se complete mi Observable principal, tendria que completarse primero todos los Observables internos que paser por el "mergeMap()""
  public letras$: Observable<string> = of('a','b','c');
  public mouseDown$: Observable<Event> = fromEvent(document, 'mousedown')
  public mouseUp$: Observable<Event> = fromEvent(document, 'mouseup')
  public miInterval$: Observable<number> = interval(1);

  constructor() {
    this.letras$.pipe(
      mergeMap(letra => {
        return interval(1000).pipe(// retornar el producto del Observable "interval()"
                  map(x => letra + x), // si no colocara "letra" aqui, no se emitiria, es decir, solo seria emitido el "x".
                  take(3)
               );
      })
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


    this.mouseDown$.pipe(
      mergeMap(() => {
        return this.miInterval$.pipe(  // necesito detener este intervalo de tiempo cuando suelte el click, es decir, cuando em Observable "mouseUp$" emita un valor.
                  takeUntil(this.mouseUp$),
                  last() // para verl el ultimo segundos donde se detuvo el "miInterval$"
               )
      })
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

// TODO - "mergeAll()" vs "mergeMap()""
// Pues "mergeAll()"" fusionara todos los observables sin recibir parámetros y vas a obtener los datos propagados combinados.
// En cambio "mergeMap()"", recibe como parámetro cada valor que emite el observable de origen y crea un nuevo observable interno, 
// luego como resultado final o de salida aplana todos esos observables internos para combinar o fusionar los datos. En palabras
// menos técnicas, primero mapea y luego aplana.

// TODO - "mergeAll()" vs "mergeMap()""
// La diferencia únicamente seria en especificar el observable a "unir" con el observable principal. Me explico, tienes varios observables que 
// emiten distintos valores, con mergeAll() unirás todas estas emisiones y mostrara una sola salida. En cambio, con mergeMap() es necesario 
// especificar cuál será el siguiente valor que deseas unir al valor principal, obteniendo exactamente el mismo resultado que mergeAll.

}