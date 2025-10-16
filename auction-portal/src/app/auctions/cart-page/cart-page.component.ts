import { Component } from '@angular/core';
import {interval} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cart-page',
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  template: `
    <p>
      cart-page works! {{ number$ | async | json}}
      <!-- wykorzystanie async pipe sprawia że nie musisz kontrolować unsubscribe - Angular zrobi to za Ciebie. -->
    </p>
  `,
  styles: ``
})
export class CartPageComponent {
    number$ = interval(1000).pipe(map(n => ({ name: 'Michał', id:n })));
}
