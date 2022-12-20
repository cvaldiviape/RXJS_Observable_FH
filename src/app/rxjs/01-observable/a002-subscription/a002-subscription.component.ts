import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-a002-subscription',
  templateUrl: './a002-subscription.component.html',
  styleUrls: ['./a002-subscription.component.css']
})
export class A002SubscriptionComponent {

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

  public miInterval$: Observable<number> = new Observable<number>((subscribe) => {
    // Crear un contador
    let count = 1;
    const interval = setInterval(() => {
      // cada segundo
      subscribe.next(count++);
    }, 1000);

    setTimeout(() => {
      subscribe.complete(); // cuando se ejecute el "complete()" inmediatamente despues se ejecutara el return que tengo debajo, es decir, el "unsubscribe()",
                            // ahora cuando digamos haga un llamado nuevamente al "unsubscribe()", este ya no se ejecutara, debido a que el observable ya se completo,
                            // es decir, si hago esto:
                            //   miSubscription1.unsubscribe(); // en el primero ejecutara el complete(), el resto sera ignorado, osea, no se ejecutara.
                            //   miSubscription1.unsubscribe();
                            //   miSubscription1.unsubscribe();
    }, 2500);

    // Este return retorna una funcion, la cual se ejecutara cuando posteriormente se realice un "unsubscribe()"
    return () => {
      clearInterval(interval); // al hacer esto ya tengo garantizado que el "Observable" ya dejara de emitirse cuando realice un "unsubscribe()"
      console.log('Interval destruido');
    }
  });
  
  constructor() { 
    const miSubscription1 = this.miInterval$.subscribe(this.observer);
    const miSubscription2 = this.miInterval$.subscribe(this.observer);
    const miSubscription3 = this.miInterval$.subscribe(this.observer);

    // otra forma de hacer "unsubscribe()" a multiples subcriptions.
    miSubscription1.add(miSubscription2).add(miSubscription3); // hacerlo de esta manera, a diferencia del la formq de abajo, aqui solo se hara un "complete()" por los 3 subcriptions que he realizado, 
                                                               // en ves de 3 complete().

    // quiero que desubscribirme para que ya no mi Observable ya no este pendiente del flujo de datos.
    // setTimeout(() => {
    //   miSubscription1.unsubscribe();
    //   miSubscription2.unsubscribe();
    //   miSubscription3.unsubscribe();

    //   console.log('Completado timeout');
    // }, 3000);
    
  }

}