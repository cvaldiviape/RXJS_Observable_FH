import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

@Component({
  selector: 'app-a032-get-json',
  templateUrl: './a032-get-json.component.html',
  styleUrls: ['./a032-get-json.component.css']
})
export class A032GetJsonComponent {
  // public url = 'https://api.github.com/users?per_page=5';
  public url = 'https://httpbin.org/delay/1'; // esta peticion me retorna los headers
  public headers = {
    'Content-type': 'application/json',
    'mi-token': 'ABC123',
  }
  // TODO - otra forma de realizar peticiones HTTP, donde tambien envio un "headers".
  public obs$: Observable<string> = ajax.getJSON(this.url, this.headers); 

  constructor() { 
    this.obs$.subscribe({
      next: (value) => {
        console.log('next:', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });
  }

}