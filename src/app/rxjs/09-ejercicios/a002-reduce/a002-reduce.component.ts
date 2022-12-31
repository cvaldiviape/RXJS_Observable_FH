import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-a002-reduce',
  templateUrl: './a002-reduce.component.html',
  styleUrls: ['./a002-reduce.component.css']
})
export class A002ReduceComponent implements OnInit {
  /**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */


  constructor() { }

  ngOnInit(): void {
    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

    from(datos).pipe(
      // Trabajar aquí
  
  
    ).subscribe( console.log ) // La salida debe de ser 32
  
  
  }

}
