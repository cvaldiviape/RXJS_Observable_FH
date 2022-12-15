import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-a001-observable',
  templateUrl: './a001-observable.component.html',
  styleUrls: ['./a001-observable.component.css']
})
export class A001ObservableComponent  {
  // TODO - creando mi OBSERVABLE
  public obs$: Observable<string> = new Observable<string>((subscribe) => {
    // TODO - la lista de valores que esta emitiendo mi subscribe
    subscribe.next('Hola');
    subscribe.next('Mundo');
    subscribe.next('Hola');
    subscribe.next('Mundo');

    // forzando un error
    // let a = undefined;
    // a?.nombre = 'Fernando';

    subscribe.complete(); // TODO - cuando se llama a esta funcion, ninguna emision posterior a la llamada del "complete()" va a ser notificada a sus constructores.
    
    subscribe.next('Hola');
    subscribe.next('Mundo');
  });

  // ? - creando mi OBSERVER - me da la facilidad de definir aqui mi observer y pasarlo como parametro al "subscribe()"
  public observer: Observer<any> = {
    next: (x) => {
      console.log('siguiente [next]:' + x);
    },
    error: (err) => {
      console.log('error [obs]:', err);
    },
    complete: () => {
      console.log('completado [obs]');
    }
  };

  constructor() {
    // TODO - este subscriber se ejecutara cada vez que el Observable emita un valor, es decir, como lo estoy haciendo en la linea 13.
  //   this.obs$.subscribe({  // TODO - este "subcribe()" vendria a ser el "subcriber" que tengo cuando inicializado mi "Observable" en la linea 11.
  //     next: (x) => {
  //       console.log("next: ", x);
  //     },
  //     error: (err) => { // TODO - el error debe suceder antes que el subcriber emita el complete()
  //       console.log("error: ", err);
  //     },
  //     complete: () => {
  //       console.log("el observable se completo");
  //     }
  //   });

    this.obs$.subscribe(this.observer);
   }

}
