import { Pipe, PipeTransform } from '@angular/core';
import {AuctionItem} from './auction-item';

@Pipe({
  name: 'auctionSearch'
})
export class AuctionSearchPipe implements PipeTransform {

  transform(inputAuctions: AuctionItem[], searchText = ''): AuctionItem[] {
    return inputAuctions.filter(a => a.title.toLowerCase().includes(searchText.toLowerCase()));
  }

}
