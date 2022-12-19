import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-a021-skip',
  templateUrl: './a021-skip.component.html',
  styleUrls: ['./a021-skip.component.css']
})
export class A021SkipComponent {
  // TODO - "skip()" me permite omitir N° valores que emite un observable.
  public listNumeroes: Observable<number> = from([1,2,3,4,5]);

  constructor() { 
    this.listNumeroes.pipe(
      skip(3) // omitire los 3 primeros valores que emita mi observable
    ).subscribe({
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