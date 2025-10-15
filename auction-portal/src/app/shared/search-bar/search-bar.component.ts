import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  template: `
    <div class="input-group mb-3 w-100">
      <div class="input-group-prepend" (click)="superInput.focus()">
        <span class="input-group-text"> 🔍 </span>
      </div>
      <input #superInput type="text" name="title" class="form-control" />
    </div>
  `,
  styles: ``
})
export class SearchBarComponent {

}
