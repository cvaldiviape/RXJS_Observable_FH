import { Component } from '@angular/core';
import { fromEvent, Observable, range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-a010-map',
  templateUrl: './a010-map.component.html',
  styleUrls: ['./a010-map.component.css']
})
export class A010MapComponent {

  public miRange$: Observable<number> = range(1, 5);
  public miKeyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

  constructor() { 
    this.miRange$.pipe(
       // input,  output
      map<number, string>((x) => (x * 10).toString()) // es buena practica definir la entrada y salida del map.
    ).subscribe(console.log);

    this.miKeyUp$.pipe(
      map<KeyboardEvent, string>(x => x.code)
    ).subscribe((code) => {
      console.log(code)
    });
  }

}