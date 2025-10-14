import { Routes } from '@angular/router';
import {AuctionsPageComponent} from './auctions/auctions-page.component';
import {NotFoundPageComponent} from './common/not-found-page/not-found-page.component';

export const routes: Routes = [
  // redirect z głównej do /auctions po wejściu na aplikację naszą
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  // dopisz ścieżkę do /auctions
  { path: 'auctions', component: AuctionsPageComponent },
  // catch all sla nieobsługiwanych ścieżek (404 TODO ):
  { path: '**', component: NotFoundPageComponent },
  // UWAGA: kolejność ścieżek ma znaczenie !
];

// new Array( new Object(), new Object(), new Object(), )
