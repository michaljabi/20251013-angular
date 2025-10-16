import {Component, EventEmitter, input, Input, output, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  // imports: [FormsModule],
  template: `
    <div class="input-group mb-3 w-100">
      <div class="input-group-prepend" (click)="superInput.focus()">
        <span class="input-group-text">
            <fa-icon icon="search" />
        </span>
      </div>
      <input #superInput
             [(ngModel)]="searchText"
             [placeholder]="placeholder"
             (input)="handleInputChange()"
             type="text"
             name="title"
             class="form-control"
      />
<!--      <input [(ngModel)]="searchText" type="text" name="title" class="form-control" />-->
    </div>
  `,
  styles: ``
})
// TO jest DUMMY component (czyli komponent, który jest "re-używalny").
// Nie wie, skąd pochodzi placeholder, nie wie kto odbierze searchTextChange
export class SearchBarComponent {
    searchText = '';
    @Input() placeholder = 'Szukaj...';
    @Output() searchTextChange = new EventEmitter<string>();

    // Nowoczesny zapis na syngałach + event emitter output() jako wrapper funkcyjny
    placeholderNew = input('Szukaj... sygnał')
    searchTextChangeNew = output<string>()

    handleInputChange() {
      this.searchTextChange.next(this.searchText);
      this.searchTextChangeNew.emit(this.searchText);
    }
}
