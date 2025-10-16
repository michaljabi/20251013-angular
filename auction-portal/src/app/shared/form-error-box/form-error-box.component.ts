import {Component, Input} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form-error-box',
  standalone: false,
  template: `
    @if(errors) {
      <div class="alert alert-danger">
        {{ errors['min'] ? 'Minimalna cena to '+ errors['min']['min'] +' zł' : '' }}
        {{ errors['max'] ? 'Maksymalna cena to '+ + errors['max']['max']  +' zł' : '' }}
        {{ errors['required'] ? 'Pole jest wymagane' : '' }}
        {{ errors['minlength'] ? 'Nazwa musi zawierać ' + errors['minlength']['requiredLength'] + ' znaków' : '' }}
      </div>
    }
  `,
  styles: ``
})
export class FormErrorBoxComponent {
  @Input() errors: ValidationErrors | null = null;
}
