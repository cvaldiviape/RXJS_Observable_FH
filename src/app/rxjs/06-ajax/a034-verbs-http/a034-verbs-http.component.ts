import { Component, OnInit } from '@angular/core';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-a034-verbs-http',
  templateUrl: './a034-verbs-http.component.html',
  styleUrls: ['./a034-verbs-http.component.css']
})
export class A034VerbsHttpComponent {
  public url = 'https://httpbin.org/delay/1';
  public obj: Persona = {
    id: 1,
    name: 'Saksa'
  }
  public header = {
    'mi-token': 'ABC123'
  }

  constructor() { 
    ajax.put(this.url, this.obj, this.header).subscribe({
      next: (value) => {
        console.log('PUT:', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });

    ajax.delete(this.url, this.header).subscribe({ // TODO - cuando "delete" no se permite enviar nada en el body, es decir, no puedo enviar un Objeto.
      next: (value) => {
        console.log('DELETE:', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });

    // TODO - otra forma de hacer peticiones HTTP. en este forma si puedo enviar data en el BODY.
    ajax({
      url: this.url,
      method: 'POST',
      headers: this.header,
      body: this.obj,
    }).subscribe({
      next: (value) => {
        console.log('POST:', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });;
  }

}

interface Persona {
  id: number;
  name: string;
}


// Ajax (RxJs) vs HttpClient
// - La realidad es que el equipo de Angular tomó Rxjs para desarrollar HttpClient. En comparación HttpClient te da interfaces, patrones y servicios listos para usar.
//   Si utilizas Rxjs,  puedes hacer lo que se te ocurra pero en algunos casos tendrás que realizar funciones desde 0.

// - Angular/common/http, está hecho por el equipo de Angular, por lo que siempre te asegurarán compatibilidad.
// - RXJS está hecho por "ReactiveX" quienes son ajenos a Angular. También podrías incluir el Fetch API nativo de JavaScript.