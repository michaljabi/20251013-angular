import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink, RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { SampleCounterComponent } from "./sample-counter/sample-counter.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SampleCounterComponent],
  template: `
    <main class="container mb-5">
      <header class="hero is-position-relative is-overflow-hidden" [class]="backgroundClass">
        <div class="hero-body">
          <app-sample-counter />
          <div class="title">{{ title }}</div>
          <div class="subtitle">{{ subtitle }}</div>
          <div
            class="is-position-absolute"
            [style]="{ right: '10px', bottom: '-5px' }"
          >
            <button class="button is-outlined mx-2" routerLink="/vs-java" routerLinkActive="is-focused">
              Compare to Java
            </button>
            <button class="button is-outlined" routerLink="/" routerLinkActive="is-focused" [routerLinkActiveOptions]="{ exact: true }">Theory</button>
          </div>
        </div>
      </header>
      <router-outlet />
    </main>
  `,
})
export class AppComponent implements OnInit {
  protected title = 'Angular Live Theory';
  protected subtitle = 'sprawdź jak działa...';

  backgroundClass = 'is-info';
  router = inject(Router); // Dependency Injection

  // metoda Lifecycle
  ngOnInit(): void {
    // Subskrypcja strumienia RxJS
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const isVaJavaSegment = event.url.startsWith('/vs-java');
        this.backgroundClass = isVaJavaSegment ? 'is-warning' : 'is-info';
        this.title = isVaJavaSegment
          ? 'Java(&Type)Script vs Java'
          : 'Angular Live Theory';
        this.subtitle = isVaJavaSegment
          ? 'porównanie TypeScript vs JavaScript vs Java'
          : 'sprawdź jak działa...';
      });
  }
}
