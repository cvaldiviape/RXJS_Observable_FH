import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-a031-fetch-rxjs',
  templateUrl: './a031-fetch-rxjs.component.html',
  styleUrls: ['./a031-fetch-rxjs.component.css'],
})
export class A031FetchRxjsComponent {
  public url = 'https://api.github.com/users?per_page=5';
  public miPromise = fetch(this.url);

  constructor() {
 
    ajax(this.url).pipe(
        pluck('response'),
        catchError(this.handleCatchError) // permite capturar cualquier tipo de error que se genere en el observable, 
                                          // ademas si quisiera podria, retornar otro Observable, si sucediera dicho error, ya que si o si debo retornar algo.
      )
      .subscribe({
        next: (users) => {
          console.log('next:', users);
        },
        error: (err) => { // TODO - NOTA: al manejar el operador "catchError()" cuando se genere alguna error, ya no entrara aqui.
          console.log('error:', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  handleCatchError = (err: AjaxError) => {
    console.warn('catchErro', err.message)
    return of([]);
  };

}
