import { Component } from '@angular/core';
import { from, of, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-a009-of-from',
  templateUrl: './a009-of-from.component.html',
  styleUrls: ['./a009-of-from.component.css']
})
export class A009OfFromComponent  {
  // TODO - "from()": crea un observable en base a un "array, object, promise, iterable, observable, etc"
  // public src$: Observable<any> = from([1,2,3,4,5]);
  // public src$: Observable<any> = from('Melek');
  public src$: Observable<any> = from(fetch('https://api.github.com/users/klerith'));

  // TODO - "of()": toma argumentos y genera un flujo, es decir, un observable"
  public src2$: Observable<any> = of(...[1,2,3,4,5]);

  public miObserver: Observer<any> = {
    next: (x) => console.log('next:' , x),
    error: (err) => console.log('error:' , err),
    complete: () => console.log('complete:'),
  }

  constructor() {
    
    // demostracion de que con el "from()" tambien puedo manejar promesas en el flujo de datos
    // this.src$.subscribe(( async (res) => {
    //   console.log(res);
    //   let data = await res.json(); // haciendo nuevamente una promesa para ver la data.
    //   console.log(data);
    // }));

    // demotracion que tambien puedo trabajar con iterables ne el "from()"
    let miIterable = this.miGenerador();

    // FORMA 1: recorrer mi iterable tradicionalmente
    // for(let num of miIterable){
    //   console.log(num)
    // }

    // FORMA 2: recorrer mi iterable con el "from()"
    from(miIterable).subscribe(this.miObserver); // la ventaja de recorrerlo con "from()" es que tambien podria aplicarle operadores.
  }

  miGenerador = function*(){ // mi funcion iterable
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }

}