import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink, Router} from '@angular/router';
import {JsonPipe} from '@angular/common';

@Component({
  imports: [RouterLink, JsonPipe],
  template: `
    <section>
      <h1>Strona nie znaleziona 😭 <code>404</code></h1>
      <div class="alert alert-warning">
        adres <code>/{{activatedRoute.snapshot.url}}</code> nie został odnaleziony
      </div>
      <button class="btn btn-primary" routerLink="/"> Powrót do 🏠</button>
      <div class="my-4">
        Klasyczne <code>DI</code> <strong>{{activatedRoute2.snapshot.queryParams | json}}</strong>
      </div>
      <button class="btn btn-primary" (click)="handleGoBack()"> Powrót do 🏠 ale w logice</button>
    </section>
  `,
  styles: ``
})
export class NotFoundPageComponent {

    // Najprostsza forma DI (poproszenia injectora o daną instancję) | najnowszy sposób użycie funkcji inject()
    // activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    activatedRoute = inject(ActivatedRoute);
    // analogicznie dla Router:
    private routerByFunction: Router = inject(Router);

    // stary dobry sposób DI (nadal działa) - wstrzykiwanie zależności przez konstruktor
    constructor(protected activatedRoute2: ActivatedRoute, private router: Router) {}

    handleGoBack() {
      this.router.navigate(['/']);
    }
}

// const activatedRoute = new ActivatedRoute();
//
// const myComponent = new NotFoundPageComponent(activatedRoute);
