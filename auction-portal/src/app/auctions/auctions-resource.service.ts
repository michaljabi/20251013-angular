import {inject, Injectable} from '@angular/core';
import {AuctionItem, AuctionItemWithoutId} from './auction-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {Router} from '@angular/router';

// Tutaj przyszykujemy sobie tzw. Stateless Service
// będzie tylko pytał back-end o dane, nie będzie ich przechowywał.
@Injectable({
  providedIn: 'root'
})
export class AuctionsResourceService {

    private readonly httpClient = inject(HttpClient);
    private readonly backendUrl = 'http://localhost:3000/auctions'
    // router = inject(Router);

    getAll(): Observable<AuctionItem[]> {
      return this.httpClient.get<AuctionItem[]>(this.backendUrl);
    }

    addOne(item: AuctionItemWithoutId) {
      console.log('Dodano', item);
    }
}
