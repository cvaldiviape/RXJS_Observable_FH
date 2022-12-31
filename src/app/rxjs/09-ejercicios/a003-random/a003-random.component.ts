import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-a003-random',
  templateUrl: './a003-random.component.html',
  styleUrls: ['./a003-random.component.css'],
})
export class A003RandomComponent implements OnInit {
  /**
   * Ejercicio: Realizar que los dos observables finales,
   * emitan exactamente el mismo valor
   *
   * Tip: Hot Observable? subjects?
   */

  constructor() {}

  ngOnInit(): void {
    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
      take(5),
      map((val) => Math.round(Math.random() * 100))
    );
    // No tocar la creación del observable
    // ============================================

    // Estos dos observables deben de emitir exactamente los mismos valores
    reloj$.subscribe((val) => console.log('obs1', val));
    reloj$.subscribe((val) => console.log('obs2', val));
  }
}
