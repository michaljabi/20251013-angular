import { Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AuctionsPageComponent} from './auctions/auctions-page.component';

export const routes: Routes = [
  // redirect z głównej do /auctions po wejściu na aplikację naszą
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  // dopisz ścieżkę do /auctions
  { path: 'auctions', component: AuctionsPageComponent },
  // catch all sla nieobsługiwanych ścieżek (404 TODO ):
  { path: '**', component: HeaderComponent }
];
