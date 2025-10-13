import { Component } from '@angular/core';

@Component({
  selector: 'app-vs-java',
  standalone: false,
  template: `
    <section class="columns mt-5">
      <app-vs-java-menu />
      <div class="column is-9 content">
        <router-outlet />
      </div>
    </section>
  `,
  styles: ``,
})
export class VsJavaComponent {}
