import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-a-style-is-hermetic',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Hermetyczność styli"
      fileEntry="./app/a-basics/a-style-is-hermetic.component.ts"
    >
      <div>
        <h1>Style w tym</h1>
        <h2>komponencie</h2>
        <h3>Nie obowiązują w innych</h3>
      </div>
    </app-page-layout>
  `,
  styles: [
    `
      h1 {
        background-color: chocolate;
        color: white;
        padding-left: 20px;
      }
      h2 {
        background-color: cornflowerblue;
        font-family: Consolas, monospace;
        font-size: small;
        text-align: center;
        color: white;
        padding: 2rem;
      }
      h3 {
        text-align: right;
      }
    `,
  ],
})
export class AStyleIsHermeticComponent {}
