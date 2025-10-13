import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { WithJavaCompareModule } from './with-java-compare/with-java-compare.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    // Sprawia, że moduł z porównaniem z Javą jest dostępny w całej aplikacji
    importProvidersFrom(WithJavaCompareModule),
  ],
};
