import { Component, inject, OnInit } from '@angular/core';
import { VegetableService } from './vegetable.service';

@Component({
  selector: 'app-interested',
  template: `
    <header class="subtitle is-family-monospace">interested</header>
    <ul>
      @for (v of veggies; track v) {
        <li>{{ v }}</li>
      }
    </ul>
  `,
  providers: [
    /*
        Komponent jest hierarchiczny, co oznacza w praktyce,
        że jeśli odkomentujesz linię :21 poniżej (VegetableService),
        to zostanie przygotowana inna — druga instancja VegetableService i komponent nie otrzyma zmian,
        ponieważ komponent: communicate-with-long-distance będzie miał inną instancję!
    */
    // VegetableService
  ],
})
export class InterestedComponent implements OnInit {
  veggies: string[] = [];

  private vegetableService = inject(VegetableService);

  ngOnInit(): void {
    this.vegetableService.getAll().subscribe((vegetables: string[]) => {
      this.veggies = vegetables;
    });
  }
}
