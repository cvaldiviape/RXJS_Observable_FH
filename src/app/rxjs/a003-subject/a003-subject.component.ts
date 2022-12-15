import { Component } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-a003-subject',
  templateUrl: './a003-subject.component.html',
  styleUrls: ['./a003-subject.component.css']
})
export class A003SubjectComponent  {

  // ? - creando mi OBSERVER - me da la facilidad de definir aqui mi observer y pasarlo como parametro al "subscribe()"
  public observer: Observer<any> = {
    next: (x) =>  console.log('siguiente [next]:' + x),
    error: (err) => console.log('error [obs]:', err),
    complete: () => console.log('completado [obs]'),
  };
  public miInterval$: Observable<number> = new Observable<number>(subscribe => {

    const intervalXD = setInterval(() => {
      subscribe.next(Math.random())
    }, 1000);

    return () => {
      clearInterval(intervalXD);
      console.log("Se ejecute el ubsubscribe xd");
    }
  });
  // Subject, caracteristicas:
  // 1- Casteo multiple: hace referencia a que muchas subscripciones van a estar sujetas a este mismo "Subject/Observable" y va servirme para distrubuir "LA MISMA INFORMACION" a todos los lugares donde esten subscritos
  // 2- Tambien es un "Observer".
  // 3- Se puede manejar el "next", "error" y "complete".
  public miSubject$: Subject<any> = new Subject<any>(); 

  constructor() { 
   const intervalSubscription = this.miInterval$.subscribe(this.miSubject$);

    // AQUI SE EMITEN INFORMACIONES DISTINTAS EN CADA "subscribe()", ASI QUE PARA QUE CADA SUBCRIBE TENGA LA MISMA INFORMACION, ES NECESARIO USAR EL "miSubject$"
    // const subs1 = this.miInterval$.subscribe(x => console.log('subs1:' , x));
    // const subs2 = this.miInterval$.subscribe(x => console.log('subs2:' , x));

    // lo que sucedara, sera que el "subcribe()" se aplicara indirectamente al observable ""miInterval$", digamos que lo he enlazado,
    // ademas, ahora se emitira la misma informacion tanto en el "primer subscribe()" como en el "segundo subscribe()""
    const subs1 = this.miSubject$.subscribe(this.observer);
    const subs2 = this.miSubject$.subscribe(this.observer);

    // haciendo que mi "miSubject$" emite un valor a los 3 segundos y se complete.
    setTimeout(() => {
      // la ventaja de usar "Subjects", es que como tambien se comportan como "observers", pueden emitir valores y completarse ellos mismos.
      // es decir, tengo el poder se insertar valores al flujo de datos.
      this.miSubject$.next(10);
      this.miSubject$.complete();

      intervalSubscription.unsubscribe(); // haciendo unsubscribe() de linea 43 y 44.
    }, 3500);

    // Cuando la data es producida por el "Observable" en si mismo, es considerado un "Cold Observable". Pero cuando la data es producida
    // FUERA del observable, es llamado "Hot Observable". es decir, un "Subject" me permite transformar un "Cold Observable" a un "Hot Observable",
    // ya que puede producir data desde FUERA. ejm: this.miSubject$.next(10);
    
  }


}
