import { Component } from '@angular/core';
import { fromEvent, Observable, range } from 'rxjs';
import { map, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-a011-pluck',
  templateUrl: './a011-pluck.component.html',
  styleUrls: ['./a011-pluck.component.css']
})
export class A011PluckComponent  {
  public miKeyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');

  constructor() { 
 
    // this.miKeyUp$.pipe(
    //   map<KeyboardEvent, string>(x => x.code)
    // ).subscribe((code) => {
    //   console.log(code)
    // });

     // TODO - "pluck()" es un operador que me extrae el valor de un objecto, ejm digamos que tengo "{ name: 'melek' }"", entonces mi salida sera "melek"
    this.miKeyUp$.pipe(
      // pluck<KeyboardEvent, string>('key') // solo me interesa extraer el valor de la propiedad "key" de mi objecto "KeyboardEvent"
      pluck<KeyboardEvent, string>('target', 'baseURI') // si deseo obtener valores de objectos anidados, debere hacer asi, es decir, de este objecto anidado, ejm:
                                                        //   target: {
                                                        //     baseURI: 'valor'
                                                        //   }
    ).subscribe((key) => {
      console.log(key)
    });
  }

}