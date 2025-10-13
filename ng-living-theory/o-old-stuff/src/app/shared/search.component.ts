import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'old-app-search',
  standalone: false,
  template: `
    <div>
      Search for:
      <input class="input" type="text" (input)="handleInput($event)" />
    </div>
  `,
  styles: ``
})
export class SearchComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() search = new EventEmitter<string>();

  handleInput(ev: Event) {
    if(ev.target) {
      const input = ev.target as HTMLInputElement;
      const value = input.value.trim();
      this.search.emit(value);
    }
  }
}
