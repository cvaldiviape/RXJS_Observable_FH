import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-a004-cuenta-regresiva',
  templateUrl: './a004-cuenta-regresiva.component.html',
  styleUrls: ['./a004-cuenta-regresiva.component.css']
})
export class A004CuentaRegresivaComponent implements OnInit {
  
/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0


  constructor() { }

  ngOnInit(): void {
    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================
  }

}
