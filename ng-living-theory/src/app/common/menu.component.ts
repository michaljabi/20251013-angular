import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="menu column">
      <p class="menu-label">Część A - <strong>Podstawy</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/sample" routerLinkActive="is-active"> Przykład wygenerowanego komponentu </a>
        </li>
        <li>
          <a routerLink="/data-binding" routerLinkActive="is-active"> Bindowanie danych </a>
        </li>
        <li>
          <a routerLink="/hermetic-style" routerLinkActive="is-active"> Hermetyczność stylu </a>
        </li>
        <li>
          <a routerLink="/basic-directives" routerLinkActive="is-active"> Dyrektywy w template </a>
        </li>
        <li>
          <a routerLink="/for-of-loop" routerLinkActive="is-active"> Pętla For-Of w template </a>
        </li>
        <li>
          <a routerLink="/methods" routerLinkActive="is-active"> Metody </a>
        </li>
      </ul>
      <p class="menu-label">Część B - <strong>Komunikacja</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/parent-child" routerLinkActive="is-active"> Relacja parent - child </a>
        </li>
        <li>
          <a routerLink="/long-distance" routerLinkActive="is-active"> Daleka odległość... </a>
        </li>
        <li>
          <a routerLink="/server-side" routerLinkActive="is-active"> Dane z serwera API</a>
        </li>
      </ul>
      <p class="menu-label">Część C - <strong>Pipes i refs</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/pipes" routerLinkActive="is-active"> Pipes na template </a>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <a routerLink="/template-ref" routerLinkActive="is-active"> Ref na widoku </a>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <a routerLink="/template-ref-in-logic" routerLinkActive="is-active"> Ref w logice komponentu </a>
        </li>
      </ul>
      <p class="menu-label">Część D - <strong>Formularze</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/forms" routerLinkActive="is-active"> Template driven forms </a>
        </li>
        <li>
          <a routerLink="/reactive-forms" routerLinkActive="is-active"> Reactive driven forms </a>
        </li>
      </ul>
      <p class="menu-label">Część E - <strong>Cykl życia</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/lifecycle" routerLinkActive="is-active"> Metody lifecycle</a>
        </li>
      </ul>
      <p class="menu-label">Część F - <strong>Testowanie</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/to-test" routerLinkActive="is-active"> Komponent poddany testom (podgląd)</a>
        </li>
      </ul>
      <p class="menu-label">Część G [dodatek] - <strong>Sygnały</strong></p>
      <ul class="menu-list">
        <li>
          <a routerLink="/signals-basics" routerLinkActive="is-active">
            <em>signals</em> zamiast <em>zone.js</em>
          </a>
          <a routerLink="/signal-computed" routerLinkActive="is-active"> Stan wyliczany </a>
          <a routerLink="/signal-effect" routerLinkActive="is-active"> Efekty uboczne </a>
          <a routerLink="/signal-store" routerLinkActive="is-active"> Signal store </a>
        </li>
      </ul>
    </nav>
  `,
})
export class MenuComponent {}
