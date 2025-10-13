import { Component } from '@angular/core';
import { MenuComponent } from './menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-view',
  imports: [MenuComponent, RouterOutlet],
  template: `
    <section class="columns mt-5">
      <app-menu />
      <div class="column is-9 content">
        <router-outlet />
      </div>
    </section>
  `,
  styles: ``,
})
export class MainViewComponent {}
