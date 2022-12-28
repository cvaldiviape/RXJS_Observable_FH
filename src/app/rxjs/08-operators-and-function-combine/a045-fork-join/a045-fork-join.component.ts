import { Component } from '@angular/core';
import { forkJoin, interval, Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-a045-fork-join',
  templateUrl: './a045-fork-join.component.html',
  styleUrls: ['./a045-fork-join.component.css']
})
export class A045ForkJoinComponent  {
  // TODO - "forkJoin()": trabaja solamente con Observables finitos.
  public listNumeros$: Observable<number> = of(1,2,3,4);
  public miInterval$: Observable<number> = interval(1000).pipe(take(3));
  public letras$: Observable<string> = of('a', 'b', 'c').pipe(delay(3500)); // se agrego un delay, para indicar que va comenzar a emitir valores despues de 3.5 segundos.

  constructor() { 
    // forkJoin([
    //   this.listNumeros$,
    //   this.miInterval$,
    //   this.letras$
    // ]).subscribe(console.log);

    // TODO - forma 1 de setear el forkJoin
    forkJoin([
      this.listNumeros$,
      this.miInterval$,
      this.letras$
    ]).subscribe({
      next: (value) => {
        console.log('FORMA 1:');
        console.log('numeros:', value[0]);
        console.log('intervalo:', value[1]);
        console.log('letras:', value[2])
      },
    });

    // TODO - forma 2 de setear el forkJoin
    forkJoin({
      listNumeros: this.listNumeros$,
      miInterval: this.miInterval$,
      letras: this.letras$
    }).subscribe({
      next: (value) => {
        console.log('FORMA 2:');
        console.log('numeros:', value.listNumeros);
        console.log('intervalo:', value.miInterval);
        console.log('letras:', value.letras)
      },
    });
  }

  
}
