import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Tak też można dopinać style z innych bibliotek (ale rozwiązanie z angular.json - jest bezpieczniejsze pod względem optymalizacji css)
// import "bootstrap/dist/css/bootstrap.css"


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
