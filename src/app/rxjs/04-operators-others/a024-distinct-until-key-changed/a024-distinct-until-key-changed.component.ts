import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-a024-distinct-until-key-changed',
  templateUrl: './a024-distinct-until-key-changed.component.html',
  styleUrls: ['./a024-distinct-until-key-changed.component.css'],
})
export class A024DistinctUntilKeyChangedComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Megaman',
    },
    {
      nombre: 'Megaman',
    },
    {
      nombre: 'Zero',
    },
    {
      nombre: 'Dr. Willy',
    },
    {
      nombre: 'X',
    },
    {
      nombre: 'X',
    },
    {
      nombre: 'X',
    },
    {
      nombre: 'Zero',
    },
    {
      nombre: 'Megaman',
    },
  ];
  public listPersonajes$: Observable<Personaje> = from(this.personajes);

  constructor() {
    this.listPersonajes$
      .pipe(
          // TODO - "distinctUntilKeyChanged()" es similar a "distinctUntilChanged()" solo que este esta orientado a que trabaje unicamente con Objetos.
        distinctUntilKeyChanged('nombre') // aqui indico  que tales objetos no se repitan si tienen el mismo valor en la propiedad "nombre", recodar que trabaja similar "distinctUntilChanged()".
      )
      .subscribe({
        next: (value) => {
          console.log('next:', value);
        },
        error: (err) => {
          console.log('error:', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

interface Personaje {
  nombre: string;
}
