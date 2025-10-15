import {Routes} from '@angular/router';
import {AdvicesPageComponent} from './advices-page/advices-page.component';
import {AdviceDetailsComponent} from './advices-page/advice-details.component';


export const advicesRoutes: Routes = [
  {
    path: '',
    component: AdvicesPageComponent,
    children: [
      { path: '', component: AdviceDetailsComponent}, // wejście na ścieżkę bez dodatkowego segmentu
      { path: ':adviceId', component: AdviceDetailsComponent}, // dynamiczny parametr adviceId

      // Do celów naukowych
      // Np. http://localhost:4200/advices/33/sample/2/nie-wiem/cos
      { path: ':adviceId/sample/:id/:category/cos', component: AdviceDetailsComponent}
    ]
  }
]
