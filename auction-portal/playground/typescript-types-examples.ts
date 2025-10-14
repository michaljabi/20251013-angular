import {AuctionItem} from '../src/app/auctions/auction-item';

type MoneyWithCurrency = {value: number, currency: 'PLN' | 'USD' | 'EUR'};

interface AuctionItemWithTags extends AuctionItem {
  tags: ('cool' | 'new' | 'popular')[];
}

const myPrice: MoneyWithCurrency = {
  value: 2000,
  currency: 'EUR'
};

const myAuction: AuctionItemWithTags = {
  id: '231',
  title: 'test',
  price: 2000,
  imgUrl: '',
  tags: ['new', 'popular', 'popular']
}


const myAuction2: AuctionItem = {
  id: '231',
  title: 'test',
  price: 2000,
  imgUrl: ''
}
