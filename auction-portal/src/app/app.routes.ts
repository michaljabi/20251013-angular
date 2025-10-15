import { Routes } from '@angular/router';
import {AuctionsPageComponent} from './auctions/auctions-page.component';
import {NotFoundPageComponent} from './common/not-found-page/not-found-page.component';
import {CartPageComponent} from './auctions/cart-page/cart-page.component';
import {AddAuctionPageComponent} from './auctions/add-auction-page/add-auction-page.component';
import {PromotionsPageComponent} from './auctions/promotions-page/promotions-page.component';
import {AdvicesPageComponent} from './advices/advices-page/advices-page.component';

export const routes: Routes = [
  // redirect z głównej do /auctions po wejściu na aplikację naszą
  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
  // dopisz ścieżkę do /auctions
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'advices', component: AdvicesPageComponent },
  { path: 'cart', component: CartPageComponent },
  // catch all sla nieobsługiwanych ścieżek (404 TODO ):
  { path: '**', component: NotFoundPageComponent },
  // UWAGA: kolejność ścieżek ma znaczenie !
];

// new Array( new Object(), new Object(), new Object(), )
