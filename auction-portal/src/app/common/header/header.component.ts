import {Component, Input} from '@angular/core';

interface User {
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ appTitle }} {{luckyNumber}}</h1>
      <div> Zalogowany user: {{user.name}} {{user.lastName}} </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {
    @Input() appTitle = 'Auction Portal';
    @Input() luckyNumber = 900;

    @Input() user: User = { name: '', lastName: ''}
}
