import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import 'bulma/css/bulma.css';

bootstrapApplication(AppComponent, appConfig).catch((err: unknown) =>
  console.error(err),
);
