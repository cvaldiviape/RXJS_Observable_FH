import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-a033-get-json-vs-ajax',
  templateUrl: './a033-get-json-vs-ajax.component.html',
  styleUrls: ['./a033-get-json-vs-ajax.component.css']
})
export class A033GetJsonVsAjaxComponent  {
  // public url = 'https://api.github.com/users?per_page=5';
  public url = 'https://httpbin.org/desssslay/1'; // esta peticion me retorna los headers

  public obsGetJson$: Observable<string> = ajax.getJSON(this.url);
  public obsAjax$: Observable<AjaxResponse> = ajax(this.url);  

  constructor() { 
    // TODO - getJSON()
    this.obsGetJson$.pipe(
      catchError(this.handleCatchError))
    .subscribe({
      next: (value) => {
        console.log('getJSON', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });

    // TODO - ajax() - me mostrara mas información acerca de la peticion que realice.
    this.obsAjax$.pipe(
      catchError(this.handleCatchError))
    .subscribe({
      next: (value) => {
        console.log('ajax', value)
      },
      error: (err) => {
        console.log('error:', err)
      },
      complete: () => {
        console.log('complete')
      }
    });
  }

  handleCatchError = (err: AjaxError) => {
    console.warn('catchErro', err.message)
    return of({
      ok: false,
      users: [],
    });
  };
  
}