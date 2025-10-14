import {Component} from '@angular/core';
import type {MenuItem} from './menu.item';
// import {NgFor} from '@angular/common';

// import {JsonPipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [ /*JsonPipe, UpperCasePipe*//*, NgFor // - potrzebne żeby *ngFor działało */],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse show">
<!--        {{ { name: 'Michał' } | json | uppercase }}-->
        <ul class="navbar-nav">
          @for (item of items; track item.label) {
            <li class="nav-item">
              <a class="nav-link" [href]="item.href">{{item.label}}</a>
            </li>
          } @empty {
            <li class="nav-item">Brak elementów  w menu</li>
          }
          <!-- starszy zapis w oparciu o dyrektywę strukturalną (*) trackBy opcjonalne -->
          <!--
          <li class="nav-item" *ngFor="let item of items; ">
            <a class="nav-link" [href]="item.href">{{item.label}}</a>
          </li>
          -->
          <!-- na depricated musimy uważać, bo jeśli jest w v20 to oznacza że w v21 już może nie być dostępne -->
        </ul>
      </div>
    </nav>
  `,
  styles: ``
})
export class MainMenuComponent {

    items: MenuItem[] = [
      { href: '/auctions', label: 'Aukcje' },
      { href: '/promotions', label: 'Promocje' },
      { href: '/advices', label: 'Podpowiadamy' },
    ];
}
