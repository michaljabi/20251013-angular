import { Component } from '@angular/core';

@Component({
  selector: 'app-vs-java-menu',
  standalone: false,
  template: `
    <nav class="menu column">
      <ng-container *ngFor="let menuLink of menuLinks">
        <p class="menu-label">{{ menuLink.label }}</p>
        <ul class="menu-list">
          <li *ngFor="let link of menuLink.list" >
            <a [routerLink]="'/vs-java' + link.href" routerLinkActive="is-active"> {{ link.text }} </a>
          </li>
        </ul>
      </ng-container>
    </nav>
  `,
})
export class VsJavaMenuComponent {
  menuLinks = [
    {
      label: 'Podobieństwa',
      list: [
        { href: '/types', text: 'Działanie typów' },
        { href: '/oop-support', text: 'Wsparcie OOP' },
        { href: '/syntax-and-conventions', text: 'Składnia i konwencje' },
        { href: '/package-managing', text: 'Zarządzanie projektem i paczkami' },
        { href: '/type-inference', text: 'Wnioskowanie typów' },
      ],
    },
    {
      label: 'Różnice',
      list: [
        {
          href: '/functions-first-class-citizens',
          text: 'Funkcje jako obywatele pierwszej kategorii',
        },
        { href: '/single-threaded', text: 'Jednowątkowość' },
        { href: '/structurally-typed', text: 'Typowanie strukturalne' },
        { href: '/no-overload', text: 'Brak przeładowań' },
      ],
    },
    {
      label: 'Cechy specjalne JS',
      list: [
        { href: '/asynchronicity', text: 'Asynchroniczność' },
        { href: '/syntactic-sugar', text: 'Lukier składniowy' },
        { href: '/anything-to-condition', text: 'Cokolwiek do if()' },
        { href: '/triple-equality-sign', text: 'Potrójny znak równości' },
        { href: '/optional-semicolon', text: 'Opcjonalny średnik' },
      ],
    },
    {
      label: 'Ulepszenie dzięki TypeScript',
      list: [
        { href: '/keep-the-shape', text: 'Pilnowanie kształtu' },
        { href: '/take-away-the-dynamics', text: 'Zabranie dynamiki' },
        { href: '/types-and-interfaces', text: 'Typy i interfejsy' },
      ],
    },
    {
      label: 'Nowości ES.next',
      list: [
        { href: '/async-await', text: 'Async/Await' },
        { href: '/arrow-functions', text: 'Funkcje strzałkowe' },
        {
          href: '/class-keyword-and-improvements',
          text: 'Słowo kluczowe class i ulepszenia',
        },
        { href: '/spread-operator', text: 'Operator spread' },
        { href: '/rest-operator', text: 'Operator rest' },
        { href: '/destructuring', text: 'Destrukturyzacja' },
        {
          href: '/object-property-shorthand',
          text: 'Składanie obiektów',
        },
      ],
    },
  ];
}
