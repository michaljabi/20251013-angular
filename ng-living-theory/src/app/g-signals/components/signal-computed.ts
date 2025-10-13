import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-signal-computed',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Sygnały 'wyliczane'"
      fileEntry="./app/g-signals/components/signal-computed.ts"
    >
      <div
        class="is-flex is-justify-content-center is-align-items-center is-column-gap-2"
      >
        <button class="button is-warning" (click)="handleUpdateCount(-1)">
          -
        </button>
        <code class="is-4">{{ count() }}</code>
        <button class="button is-success" (click)="handleUpdateCount(1)">
          +
        </button>
      </div>
      <div>
        <p>
          Wartość podwojona: <code>{{ computedCount() }}</code>
        </p>
        <p>
          Wartość poniesiona do potęgi: <code>{{ exponentialCount() }}</code>
        </p>
      </div>
    </app-page-layout>
  `,
  styles: ``,
})
export class SignalComputed {
  count = signal(2);
  computedCount = computed(() => this.count() * 2);
  exponentialCount = computed(() => this.count() * this.count());

  handleUpdateCount(value: number) {
    this.count.update((c) => c + value);
  }
}
