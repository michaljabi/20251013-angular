import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  template: `
    <section>
      <h1 class="title is-1">{{ pageTitle() }}</h1>
      <h4 class="subtitle is-family-code has-text-weight-normal p-2 mt-2 has-background-success-invert"
          [style]="{ borderBottom: '1px solid #ccc'}">
        {{ fileEntry() }}
      </h4>
      <ng-content/>
    </section>
  `,
  styles: ``,
})
export class PageLayoutComponent {
  pageTitle = input('Tytuł strony');
  fileEntry = input('./');
}
