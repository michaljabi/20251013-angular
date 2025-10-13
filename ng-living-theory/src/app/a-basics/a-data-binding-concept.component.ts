import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-a-data-binding-concept',
  template: `
    <app-page-layout
      pageTitle="Koncepcja bindowania widoku"
      fileEntry="./app/a-basics/a-data-binding-concept.component.ts"
    >
      <div>
        <p class="notification is-info">
          Widok komunikuje się z {{ logic }} za pomocą specjalnego syntaxu.
        </p>
        <ul class="box">
          <li>
            <code>&#123; &#123;nazwaPolaWKlasie&#125;&#125;</code> - one Way data
            binding - dla
            <code>innerHTML</code>
          </li>
          <li>
            <code>[</code><code>innePole</code><code>]</code> - one Way data
            binding - dla atrybutów HTML
          </li>
          <li>
            <code>(</code><code>nazwaPolaWKlasie</code><code>)</code> - one Way
            data binding - dla event'ów
          </li>
        </ul>
        <div class="box">
          <div [title]="myTitle">Najedź na mnie aby zobaczyć tooltip !</div>
        </div>
        <div class="box">
          <div class="mb-3">
            <h6 class="title is-5">
              Angular natychmiastowo odpowiada na zmiany: {{ increment }}
            </h6>
          </div>
          <button class="button" (click)="handleButtonClick()">
            Kliknij po przykładowy event ({{ increment }})
          </button>
        </div>

        <div class="box">
          Możliwe jest również połączenie tego syntaxu <code>[]</code> +
          <code>()</code> co daje tzw. "Bananas in the box": <code>[()]</code> -
          two Way data binding, które omówimy w formularzach.
        </div>
        <div class="box">
          Znaki podwójnych nawiasów klamrowych, lub te z podwójnymi nawiasami
          kwadratowymi []="" dla atrybutów, można traktować jako
          <mark>portal w którym działa JavaScript</mark>
          <p class="notification">
            Przykładowo:
            <mark>{{ 2 + 3 + '!'.repeat(22) + 'a'.toUpperCase() }}</mark>
          </p>
          <p class="notification is-light">
            A dla atrybutów:
            <a
              class="has-text-link"
              [href]="['http://regex101', 'com'].join('.')"
              [target]="'_' + 'blank'"
            >
              Link Test...
            </a>
          </p>
        </div>
      </div>
    </app-page-layout>
  `,
  imports: [SharedModule],
})
export class ADataBindingConceptComponent {
  // UWAGA:
  // KAŻDE POLE używane na widoku HTML — NIE MOŻE być prywatne!
  logic = 'Logiką';
  myTitle = 'Witaj w Angular';
  increment = 0;

  handleButtonClick() {
    this.increment++;
  }
}
