import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-a023-distinct-until-changed',
  templateUrl: './a023-distinct-until-changed.component.html',
  styleUrls: ['./a023-distinct-until-changed.component.css']
})
export class A023DistinctUntilChangedComponent {
  // TODO - distinctUntilChanged(): es similar a "distinct()", solo emitira valores que previamente no se hayan emitido, EJM: mira la imagen.
  public listNumerso$: Observable<number | string> = from([1,1,1,'1',2,3,3,4,4,4,4,5,5,1,1,'1',3,3]); 
  public personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
      nombre: 'Megaman'
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
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
      nombre: 'Megaman'
  },
  ];
  public listPersonajes$: Observable<Personaje> = from(this.personajes);

  constructor() {
    // EJM 1
    this.listNumerso$.pipe(
      distinctUntilChanged()
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
      // distinctUntilChanged() // NOTA: cuando este operador trabaja con objetos y lo dejamos asi, no se aplicara, debido a que cada objeto apunta a un espacio diferente de memoria, por lo tanto debemos hacer un ajuste más.
      distinctUntilChanged((personajeaAterior, personajeActual) => personajeaAterior.nombre === personajeActual.nombre) // AHORA SI ME DEBERIA FUNCIONAR XD.
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

