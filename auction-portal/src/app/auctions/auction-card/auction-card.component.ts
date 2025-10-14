import {Component, Input} from '@angular/core';
import {AuctionItem} from '../auction-item';

@Component({
  selector: 'app-auction-card',
  imports: [],
  template: `
    <div class="card">
      @if(auctionItem) {
        <div class="card-header">{{ auctionItem.title }}</div>
        <img class="card-img" [src]="auctionItem.imgUrl" [alt]="auctionItem.title"/>
        <div class="card-body">
          <p class="card-text">{{auctionItem.description}}</p>
          <div class="d-flex justify-content-between align-content-center">
            <strong> {{auctionItem.price}} zł</strong>
            <button class="btn btn-primary">
              <i class="fa fa-cart-plus"></i> +
            </button>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class AuctionCardComponent {
  @Input({required: true}) auctionItem?: AuctionItem;
}
