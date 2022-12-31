import { Component } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { finalize, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-a004-of',
  templateUrl: './a004-of.component.html',
  styleUrls: ['./a004-of.component.css']
})
export class A004OfComponent  {
  // "of()" permite crear un flujo de datos, el cual se comienzan a emitir hasta llegar al ultimo, cuando termine de emitir todos, se completa automaticamente.
  public miObs$: Observable<number> = of<number>(1,2,3,4,5,6).pipe(finalize(() => console.log("completado finalize"))); 
  // public miObs$: Observable<any> = of(...[1,2,3,4,5,6],2,3,4,5); 
  // public miObs$: Observable<any> = of([1,2], {a: 1, b: 2}, function(){}, true, Promise.resolve(true)); 

  public interval$: Observable<number> = interval(1000);

  constructor() {

    // En este caso tambien compruebo que mi "Observable" puede ejecutarse de forma "sincrona", es decir, se esta ejecutanto en el orden que se declarado.
    console.log("Inicio del observable"); 

    this.miObs$.pipe(
      // take(2),
      switchMap(() => this.interval$),
      // take(3)
    ).subscribe({
      next: (x) => console.log("next", x),
      error: (err) =>  console.log(err),
      complete: () => console.log("completado")
    });

    console.log("Fin del observable");

   }

}