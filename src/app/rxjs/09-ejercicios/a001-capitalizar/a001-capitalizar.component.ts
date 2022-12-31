import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a001-capitalizar',
  templateUrl: './a001-capitalizar.component.html',
  styleUrls: ['./a001-capitalizar.component.css']
})
export class A001CapitalizarComponent implements OnInit {
  /**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */

  constructor() { }

  ngOnInit(): void {
    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    for( let nombre of nombres ) {
      console.log( capitalizar(nombre) )
    }
  }

}
