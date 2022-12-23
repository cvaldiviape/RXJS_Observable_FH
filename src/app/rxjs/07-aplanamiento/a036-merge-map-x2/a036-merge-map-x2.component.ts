import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, ObservableInput } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, mergeMap, pluck } from 'rxjs/operators';
import { GithubResponse } from '../../interfaces/github-response';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-a036-merge-map-x2',
  templateUrl: './a036-merge-map-x2.component.html',
  styleUrls: ['./a036-merge-map-x2.component.css']
})
export class A036MergeMapX2Component {

  @ViewChild('miInput') miInput!: ElementRef<HTMLInputElement>;
  @ViewChild('orderList') orderList!: ElementRef;
  public users: User[] = [];


  constructor() { }
  
  ngAfterViewInit(): void {
    const miInputObs$ = fromEvent<KeyboardEvent>(this.miInput?.nativeElement, 'keyup');

    // TODO -  cambiando "mergeAll" por "mergeMap"
    // miInputObs$.pipe(
    //   debounceTime<KeyboardEvent>(500), 
    //   pluck<KeyboardEvent, string>('target', 'value'),
    //   mergeMap<string, ObservableInput<Observable<GithubResponse>>>((value) => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
    //   // map<string, ObservableInput<Observable<GithubResponse>>>((value) => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
    //   // mergeAll<Observable<GithubResponse>>(), 
    //   pluck<Observable<GithubResponse>, User[]>('items')
    // ).subscribe(console.log);

                    // el "1" hace referencia a que tendre la respuesta con un retraso(delay) de 1 segundo
    const url = 'https://httpbin.org/delay/1?arg=';

    miInputObs$.pipe(
      pluck('target', 'value'),
      mergeMap(value => ajax.getJSON(url + value))
    ).subscribe(console.log);


  }

  
// TODO - "mergeAll()" vs "mergeMap()""
// Pues "mergeAll()" fusionara todos los observables sin recibir parámetros y vas a obtener los datos propagados combinados.
// En cambio "mergeMap()", recibe como parámetro cada valor que emite el observable de origen(principal) y crea un nuevo observable interno, 
// luego como resultado final o de salida aplana todos esos observables internos para combinar o fusionar los datos. En palabras
// menos técnicas, primero mapea y luego aplana.

// TODO - "mergeAll()" vs "mergeMap()""
// La diferencia únicamente seria en especificar el observable a "unir" con el observable principal. Me explico, tienes varios observables que 
// emiten distintos valores, con mergeAll() unirás todas estas emisiones y mostrara una sola salida. En cambio, con mergeMap() si tienes que 
// especificar cuál será el siguiente valor que deseas unir al valor principal, obteniendo exactamente el mismo resultado que mergeAll.

}