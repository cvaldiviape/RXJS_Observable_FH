import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-a044-combine-latest',
  templateUrl: './a044-combine-latest.component.html',
  styleUrls: ['./a044-combine-latest.component.css']
})
export class A044CombineLatestComponent implements AfterViewInit {
  // TODO - "combineLatest()": ver IMAGEN.
  @ViewChild("miInputA") miInputA!: ElementRef<HTMLInputElement>;
  @ViewChild("miInputB") miInputB!: ElementRef<HTMLInputElement>;

  constructor() { 

  }

  ngAfterViewInit(): void {
    const obsA$: Observable<string> = fromEvent<KeyboardEvent>(this.miInputA?.nativeElement, 'keyup').pipe(
      pluck<KeyboardEvent, string>('target', 'value')
    );
    const obsB$: Observable<string>  = fromEvent<KeyboardEvent>(this.miInputB?.nativeElement, 'keyup').pipe(
      pluck<KeyboardEvent, string>('target', 'value')
    );

    combineLatest([
     obsA$,
     obsB$,
    ]).subscribe(console.log)
  }

}