import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'app-template-local-references',
  imports: [SharedModule],
  template: `
    <app-page-layout
      pageTitle="Lokalna referencja w template"
      fileEntry="./app/c-template-refs/template-local-references.component.ts"
    >
      <div>
        <label>
          Test:
          <input class="input" #testInput />
          <!--
            po takim zapisie z hash: # mamy dostęp do lokalnej referencji natywnego elementu DOM.
            co za tym idzie - posiadamy wszystkie natywne metody takie jak testInput.value
            albo
            testInput.focus();
            -->
        </label>
        <button class="button mt-2" (click)="testInput.focus()">
          Ustaw focus na input
        </button>
      </div>
    </app-page-layout>
  `,
})
export class TemplateLocalReferencesComponent {}
