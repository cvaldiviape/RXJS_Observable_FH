import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-a022-distinct',
  templateUrl: './a022-distinct.component.html',
  styleUrls: ['./a022-distinct.component.css']
})
export class A022DistinctComponent  {
  // TODO - distinct(): es un operador que deja pasar los valores que no han sido emitidos por mi Observable, es decir, garantiza que no se vuelvan a emitir valores REPETIDOS.
  public listNumerso$: Observable<number | string> = from([1,1,1,'1',2,3,3,4,4,4,4,5,5]); 
  public personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
  ];
  public listPersonajes$: Observable<Personaje> = from(this.personajes);

  constructor() {
    // EJM 1
    this.listNumerso$.pipe(
      distinct()
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


    // EJM 2
    this.listPersonajes$.pipe(
      distinct(x => x.nombre) // indicando que no quiero que se repita los objetos que tenga el mismo "nombre"
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

interface Personaje {
  nombre: string;
}

