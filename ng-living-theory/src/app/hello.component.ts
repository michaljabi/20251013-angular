import { Component } from '@angular/core';
import { SharedModule } from './shared/shared-module';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [SharedModule],
  template: `
    <app-page-layout pageTitle="Witaj?" fileEntry="./app/hello.component.ts">
      COŚ DOPISZE...
      <section class="message is-info">
        <div class="message-body">
          Wybierz!! interesujący Cię temat z menu po lewej. Zauważ tytuł
          <code>h3</code> w każdym komponencie, sygnalizuje jaki to komponent
          np. tutaj jesteś w <code>hello</code>
        </div>
      </section>
      <div class="notification">
        Po wybraniu linka z lewej, tutaj zostanie osadzony odpowiadający tej
        ścieżce - komponent. Szczegóły znajdziesz w plikach:
        <code>app-routing.module.ts</code> oraz <code>app.component.ts</code>
      </div>
    </app-page-layout>
  `,
})
export class HelloComponent {}
