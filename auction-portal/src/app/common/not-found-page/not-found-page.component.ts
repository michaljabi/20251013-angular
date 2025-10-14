import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section>
      <h1>Strona nie znaleziona 😭 <code>404</code></h1>
      <div class="alert alert-warning">
        adres <code>/promotions</code> nie został odnaleziony
      </div>
      <button class="btn btn-primary" routerLink="/"> Powrót do 🏠</button>
    </section>
  `,
  styles: ``
})
export class NotFoundPageComponent {

}
