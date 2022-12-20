import { Component } from '@angular/core';

@Component({
  selector: 'app-a030-fetch',
  templateUrl: './a030-fetch.component.html',
  styleUrls: ['./a030-fetch.component.css']
})
export class A030FetchComponent {
  public url = 'https://api.github.com/usexxrs?per_page=5';
  public miPromise = fetch(this.url);

  constructor() {
    // TODO - la finalidad de este ejercicio, es manejar el "fetch api", asi como tambien el manejo de errores, pero ello nos muentra que podemos manejar de mejor manera si trabajaramos con Observable,
    // TODO - justamente "rxjs" ya cuenta con un objeto "AJAX" para trabajar peticiones "HTTP".
    this.miPromise
      .then(this.handleErrors)
      .then(resp => resp.json())
      .then(json => console.log('data', json))
      .catch(err => console.warn('error', err));
  }

  handleErrors(res: Response): Response{
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res;
  }

}