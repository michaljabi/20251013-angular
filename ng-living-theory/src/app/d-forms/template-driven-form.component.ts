import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';

@Component({
  imports: [FormsModule, SharedModule],
  template: `
    <app-page-layout
      pageTitle="Formularze w 'template'"
      fileEntry="./app/d-forms/template-driven-form.component.ts"
    >
      <!-- kluczową rolę sprawuje tutaj opakowanie formularza w ngForm i wysłanie go przez handleFormSubmit -->
      <form
        #sampleForm="ngForm"
        (ngSubmit)="handleFormSubmit(sampleForm)"
        (input)="errorMessage = ''"
      >
        <fieldset class="field">
          <label>
            Name:
            <input class="input" name="name" ngModel required />
          </label>
        </fieldset>
        <fieldset class="field">
          <label>
            Post:
            <textarea
              class="textarea"
              name="post"
              #post="ngModel"
              ngModel
              required
            >
            </textarea>
          </label>
          @if (post.errors && (post.dirty || post.touched)) {
            <p class="help is-danger">
              {{ post.hasError('required') && 'to pole jest wymagane' }}
            </p>
          }
        </fieldset>
        <fieldset style="text-align: right">
          <button class="button is-primary" type="submit">
            Wyślij formularz
          </button>
        </fieldset>
        @if (errorMessage) {
          <div class="notification is-danger mt-3">
            {{ errorMessage }}
          </div>
        }
      </form>
    </app-page-layout>
  `,
  styles: [
    `
      input.ng-touched.ng-invalid,
      textarea.ng-touched.ng-invalid {
        border: 3px solid #f14668;
      }
    `,
  ],
})
export class TemplateDrivenFormComponent {
  // Zauważ że korzystamy z tzw event bubbling w HTML, jeśli ktoś zaczyna pisać w formularzu (input)
  // To kasujemy błędy (spójrz na <form..... (input)="errorMessage = ''"
  errorMessage = '';

  handleFormSubmit(sampleForm: NgForm): void {
    console.log('Formularz', sampleForm);
    const value = sampleForm.value;

    if (sampleForm.invalid) {
      // Wywołanie "dotknięcia" wszystkich pól, aby pokazać błędy
      sampleForm.form.markAllAsTouched();
      this.errorMessage = 'Popraw błędy w formularzu !';
      return;
    }

    alert(JSON.stringify(value));
    sampleForm.resetForm();
  }
}
