import { Component } from '@angular/core';

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
      <input #superInput [(ngModel)]="searchText" type="text" name="title" class="form-control" />
<!--      <input [(ngModel)]="searchText" type="text" name="title" class="form-control" />-->
    </div>
  `,
  styles: ``
})
export class SearchBarComponent {
    searchText = '';
}
