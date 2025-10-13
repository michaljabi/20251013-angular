import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../shared/shared-module';

@Component({
  imports: [ReactiveFormsModule, SharedModule],
  template: `
    <app-page-layout
      pageTitle="Formularze reaktywne"
      fileEntry="./app/d-forms/reactive-driven-form.component.ts"
    >
      <!-- kluczową rolę sprawuje tutaj opakowanie formularza w ngForm i wysłanie go przez handleFormSubmit -->
      <form
        [formGroup]="sampleForm"
        (ngSubmit)="handleFormSubmit()"
        (input)="errorMessage = ''"
      >
        <fieldset class="field">
          <label>
            Name:
            <input class="input" formControlName="name" />
          </label>
        </fieldset>
        <fieldset class="field">
          <label>
            Post:
            <textarea class="textarea" formControlName="post"></textarea>
          </label>
          @if (post?.invalid && (post?.dirty || post?.touched)) {
            <p class="help is-danger">
              {{
                post?.hasError('minlength') &&
                  'to pole powinno mieć min.' +
                    post?.getError('minlength').requiredLength +
                    ' znaków'
              }}
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
export class ReactiveDrivenFormComponent {
  private fb = inject(FormBuilder);

  sampleForm = this.fb.group({
    name: ['', Validators.required],
    post: new FormControl('', [Validators.minLength(20)]),
  });
  errorMessage = '';

  handleFormSubmit(): void {
    const { sampleForm } = this;
    console.log('Formularz', sampleForm);
    const value = sampleForm.value;

    if (sampleForm.invalid) {
      // Wywołanie "dotknięcia" wszystkich pól, aby pokazać błędy
      sampleForm.markAllAsTouched();
      this.errorMessage = 'Popraw błędy w formularzu !';
      return;
    }

    alert(JSON.stringify(value));
    sampleForm.reset();
  }

  // upraszczamy walidację:
  get post() {
    return this.sampleForm.get('post');
  }
}
