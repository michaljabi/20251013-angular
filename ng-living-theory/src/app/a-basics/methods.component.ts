import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-methods',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Używanie metod w klasie i eventów HTML na widoku"
      fileEntry="./app/a-basics/methods.component.ts"
    >
      <div class="box">
        <h4>{{ shouters }}</h4>
        <button class="button is-info my-2" (click)="addExclamationMark()">
          {{ btnName }}
        </button>
        <div
          tabindex="1"
          class="has-text-centered notification"
          (click)="btnName = 'OFF'"
          (keyup.enter)="btnName = 'OFF'"
        >
          Kliknij i wtedy: {{ btnName }}
        </div>
        <div
          class="box"
          (mouseover)="handleMouseOver('coś przesłane', 123)"
          (focus)="handleMouseOver('coś przesłane', 123)"
        >
          Najedź na mnie :)
        </div>
        <button
          class="button is-warning"
          (click)="handleNativeButtonEvent($event)"
        >
          Złap natywny event ($event syntax)
        </button>
      </div>
    </app-page-layout>
  `,
  styles: [],
})
export class MethodsComponent {
  shouters = '!';
  btnName = 'ON';

  addExclamationMark(): void {
    this.shouters += '!';
  }

  handleMouseOver(strThing: string, num: number): void {
    console.log(strThing, num);
  }

  handleNativeButtonEvent(ev: MouseEvent) {
    console.log(ev);
  }
}
