import { Component } from '@angular/core';
import { from, Observable, range } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-a013-filter',
  templateUrl: './a013-filter.component.html',
  styleUrls: ['./a013-filter.component.css']
})
export class A013FilterComponent{
  public personajes: Personaje[] = [
    {
      tipo: 'heroe',
      nombre: 'Batman'
    },
    {
      tipo: 'heroe',
      nombre: 'Robin'
    },
    {
      tipo: 'villano',
      nombre: 'Joker'
    }
  ];
  public listObs$: Observable<Personaje> = from(this.personajes);
  public miRange$: Observable<number> = range(20,30); 

  constructor() { 
    this.miRange$.pipe(
      //     input
      filter<number>((x, index) => {
        console.log('index:', index)
        return ((x % 2) === 1)
      })
    ).subscribe(console.log);


    this.listObs$.pipe(
      filter<Personaje>(x => x.tipo === 'heroe') // filtrando solamente a los heroes
    ).subscribe(console.log);
  }

}

interface Personaje {
  tipo: string;
  nombre: string;
}