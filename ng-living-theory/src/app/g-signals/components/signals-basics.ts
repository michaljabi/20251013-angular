import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-signal-used-in-component',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Podstawy sygnałów"
      fileEntry="./app/g-signals/components/signals-basics.ts"
    >
      <div
        class="is-flex is-justify-content-center is-align-items-center is-column-gap-2"
      >
        <button class="button is-warning" (click)="handleUpdateCount(-2)">
          -
        </button>
        <div class="title m-0 is-4">{{ count() }}</div>
        <button class="button is-success" (click)="handleUpdateCount(2)">
          +
        </button>
      </div>
    </app-page-layout>
  `,
  styles: ``,
})
export class SignalsBasics {
  count = signal(200);

  handleUpdateCount(value: number) {
    this.count.update((c) => c + value);
  }
}
