import {inject, Injectable} from '@angular/core';
import {AuctionItem, AuctionItemWithoutId} from './auction-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
// import {Router} from '@angular/router';

// Tutaj przyszykujemy sobie tzw. Stateless Service
// będzie tylko pytał back-end o dane, nie będzie ich przechowywał.
@Injectable({
  providedIn: 'root'
})
export class AuctionsResourceService {

    // DEV:
    //my-super.domain.com -> AJAX do http://localhost:3000/....
    // PROD:
    //my-super.domain.com -> AJAX do my-super.domain.com/api

    private readonly httpClient = inject(HttpClient);
    private readonly auctionEndpoint = `${environment.backendBaseUrl}/auctions`
    // router = inject(Router);

    getAll(): Observable<AuctionItem[]> {
      return this.httpClient.get<AuctionItem[]>(this.auctionEndpoint);
    }

    addOne(item: AuctionItemWithoutId): Observable<AuctionItem>  {
      console.log('Dodano', item);
      return this.httpClient.post<AuctionItem>(this.auctionEndpoint, item);
    }
}
