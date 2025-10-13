import { Component } from '@angular/core';

@Component({
  selector: 'old-app',
  standalone: false,
  template: `
    <div>
      <old-app-header />
      <main class="container" >
        <old-app-menu />
          <section>
              <router-outlet></router-outlet>
          </section>
        <old-app-footer />
      </main>
    </div>
  `,
  styles: ``
})
export class OldAppComponent {

}
