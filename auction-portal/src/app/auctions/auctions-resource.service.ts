import {Injectable} from '@angular/core';
import {AuctionItem, AuctionItemWithoutId} from './auction-item';
// import {Router} from '@angular/router';

// Tutaj przyszykujemy sobie tzw. Stateless Service
// będzie tylko pytał back-end o dane, nie będzie ich przechowywał.
@Injectable({
  providedIn: 'root'
})
export class AuctionsResourceService {

    // router = inject(Router);

    getAll(): AuctionItem[] {
      return [
        {
          id: "1",
          title: "Części do aparatu",
          imgUrl: "https://picsum.photos/id/36/200/200",
          description: "Jakiś opis",
          price: 2000
        }
      ];
    }

    addOne(item: AuctionItemWithoutId) {
      console.log('Dodano', item);
    }
}
