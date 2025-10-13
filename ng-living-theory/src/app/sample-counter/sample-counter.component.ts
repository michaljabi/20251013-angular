import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-counter',
  imports: [],
  template: `
    <div>
      {{ myLuckyNumber }} sample-counter works!
      <strong>{{ myLuckyNumber }}</strong>
      <button class="button is-danger" [title]="titleAttribute" (click)="sayHello()"> HELLO </button>
    </div>
  `,
  styles: ``
})
export class SampleCounterComponent {
    // myLuckyNumber: null | number = null;
    myLuckyNumber = 0;

    titleAttribute = 'Tooltip 🚀';

    myLinks: string[] = [];

    constructor() {
      setTimeout( () => {
        this.myLuckyNumber = 123;
      }, 3000)
      console.log('HELLO')

      // this.myLinks.push(1);
      // this.myLuckyNumber = 'ABS'
    }

    sayHello() {
      alert('Witaj na mojej stronie....')

      /*
      const h1 = document.querySelector('h1');
      if(h1) {
        h1.click()
      }
      */

      return 890;
    }
}
