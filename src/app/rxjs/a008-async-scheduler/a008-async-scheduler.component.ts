import { Component } from '@angular/core';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-a008-async-scheduler',
  templateUrl: './a008-async-scheduler.component.html',
  styleUrls: ['./a008-async-scheduler.component.css']
})
export class A008AsyncSchedulerComponent {
  // TODO - "asyncScheduler" crea una subcripcion, esta ultima es el producto de un "subcribe()"
  // se pronduncia "easin-eskechuler"

  constructor() {
    // estas 2 funcionalidades pa podriamos crear tambien con el "asyncScheduler"
    // setTimeout(() => {}, 3000);
    // setInterval(() => {}, 3000);



    // TODO - imitando un "timer"
    const funcionSaludar = () => {
      console.log('Hola Mundo');
    };
    const funcionSaludar2 = (name: any) => {
      console.log(`Hola ${name}`);
    };
    const funcionSaludar3 = (name: any, apellido: any) => {
      console.log(`Hola ${name} ${apellido}`);
    };
    // ejecutare la funcion "funcionSaludar()" despues dd 3 segundos
    // asyncScheduler.schedule(funcionSaludar, 3000);
    // asyncScheduler.schedule(funcionSaludar2, 3000, 'Mek'); // tambien podriamos pasarle un objeto
    // asyncScheduler.schedule(funcionSaludar3.bind(this, 'Mek', 'Fx'), 3000);


    // TODO - imitando un "interval"
    let stateInitial = 0;

    let subscription = asyncScheduler.schedule(function(state){ // el "state" puede ser un objeto, array, numero, string, etc.
      console.log('mi state', state);

      this.schedule(Number(state) + 1, 1000) // haciendo que comporte como un contador

    }, 3000, stateInitial);


    // cancelando subcription FORMA 1: con el "setTimeout()"
    setTimeout(() => {
      subscription.unsubscribe();
    }, 6000);

     // cancelando subcription FORMA 2: con el "asyncScheduler()"
     asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);

  }

}