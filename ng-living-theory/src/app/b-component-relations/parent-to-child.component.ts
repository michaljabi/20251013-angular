import { Component } from '@angular/core';
import { ChildToParentComponent } from './child-to-parent.component';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-parent-to-child',
  imports: [ChildToParentComponent, SharedModule],
  template: `
    <app-page-layout
      pageTitle="Komunikacja pomiędzy komponentami"
      fileEntry="./app/b-component-relations/parent-to-child.component.ts"
    >
      <!-- Zobacz, przesyłamy do komponentu [] listę fruitList -->
      <!-- Jednocześnie podając callback na jego event "fruitClicked" -->
      <h5>Lista owoców z tego komponentu - wysłana do 'app-child-to-parent'</h5>
      <app-child-to-parent
        [fruits]="fruitList"
        (fruitClicked)="handleFruitClicked($event)"
      />
      @if (choice) {
        <div class="notification mt-4">
          Kliknięto na
          <span
            class="has-background-info p-2 has-text-dark has-radius-rounded"
          >
            {{ choice }}
          </span>
        </div>
      }
    </app-page-layout>
  `,
  styles: [],
})
export class ParentToChildComponent {
  fruitList = ['apple', 'banana', 'mango'];
  choice = '';

  handleFruitClicked(fruit: string) {
    this.choice = fruit;
  }
}
