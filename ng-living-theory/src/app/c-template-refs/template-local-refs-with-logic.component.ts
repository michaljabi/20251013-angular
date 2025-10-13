import { Component, ElementRef, viewChild } from '@angular/core';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-template-local-refs-with-logic',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Lokalna referencja - odniesienie w logice komponentu"
      fileEntry="./app/c-template-refs/template-local-refs-with-logic.component.ts"
    >
      <div>
        <label>
          Test:
          <input class="input" #testInput />
          <!-- Tutaj robimy to samo co w app-template-local-references z tym że po stronie logiki do widoku -->
        </label>
        <button class="button mt-2" (click)="handleButtonClick()">
          Ustaw focus na input
        </button>
      </div>
    </app-page-layout>
  `,
})
export class TemplateLocalRefsWithLogicComponent {
  // Aby odczytać referencję do natywnego elementu z widoku, potrzebujemy sygnał:
  // Jako locator w viewChild wpisujemy nazwę ref z #
  testInputRef = viewChild<ElementRef>('testInput');

  handleButtonClick(): void {
    // Dostęp do natywnego elementu jest po przez odniesienie:
    this.testInputRef()?.nativeElement?.focus();
  }
}
