
type Money = number;

// Kształt DTO z serwera (GET)
export interface AuctionItem {
  id: string;
  title: string;
  imgUrl: string;
  price: Money;
  description?: string;
}

// Żeby wysłać POST do serwera
export type AuctionItemWithoutId = Omit<AuctionItem, 'id'>;

