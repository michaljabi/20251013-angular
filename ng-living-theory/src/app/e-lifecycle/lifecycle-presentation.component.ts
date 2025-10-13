import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecycleUpdateElementComponent } from './lifecycle-update-element.component';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-lifecycle-presentation',
  imports: [FormsModule, LifecycleUpdateElementComponent, SharedModule],
  template: `
    <app-page-layout
      pageTitle="Metody cyklu życia komponentu"
      fileEntry="./app/e-lifecycle/lifecycle-presentation.component.ts"
    >
      <div>
        <fieldset>
          <label class="label mx-3">
            Wpisz kod:
            <input class="input" [(ngModel)]="mySecret" />
          </label>
          <button
            class="button is-success m-3"
            (click)="handleVisibilityChange(true)"
          >
            Pokaż Komponent
          </button>
          <button
            class="button is-danger m-3"
            (click)="handleVisibilityChange(false)"
          >
            Ukryj Komponent
          </button>
        </fieldset>
        <div class="box">
          <h3>Sterowany komponent:</h3>
          @if (showComponent) {
            <app-lifecycle-update-element [secretCode]="mySecret" />
          }
        </div>
      </div>
    </app-page-layout>
  `,
})
export class LifecyclePresentationComponent {
  showComponent = true;
  mySecret = 's3cr3t';

  handleVisibilityChange(flag: boolean): void {
    this.showComponent = flag;
  }
}
