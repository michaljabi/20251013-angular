import { Component, effect, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-signal-effect',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Efekty uboczne po zmianie sygnału"
      fileEntry="./app/g-signals/components/signal-effect.ts"
    >
      <div
        class="is-flex is-justify-content-center is-align-items-center is-column-gap-2"
      >
        <button class="button is-warning" (click)="handleUpdateCount(-10)">
          -
        </button>
        <code class="is-4">{{ count() }}</code>
        <button class="button is-success" (click)="handleUpdateCount(10)">
          +
        </button>
      </div>
      <p>{{ message }}</p>
    </app-page-layout>
  `,
  styles: ``,
})
export class SignalEffect {
  message = '';
  count = signal(230);

  constructor() {
    effect(() => {
      const currentCount = this.count();
      this.message =
        currentCount > 250
          ? 'Liczba przekroczyła 250!'
          : currentCount < 220
            ? 'Liczba jest poniżej 220!'
            : '';
    });
  }

  handleUpdateCount(value: number) {
    this.count.update((c) => c + value);
  }
}
