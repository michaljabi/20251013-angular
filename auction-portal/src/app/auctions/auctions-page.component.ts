import {Component, inject, OnInit} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {AuctionsResourceService} from './auctions-resource.service';
import {AuctionCardComponent} from './auction-card/auction-card.component';
import {AuctionItem} from './auction-item';

@Component({
  imports: [JsonPipe, AuctionCardComponent],
  template: `
    <section>
      auctions-page works! {{ auctionsResourceService.getAll() | json}}

      @for(item of auctions; track item.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-auction-card [auctionItem]="item" />
        </div>
      }
    </section>
  `,
  styles: ``,
  // providers: [AuctionsResourceService]
})
export class AuctionsPageComponent implements OnInit {

    auctionsResourceService = inject(AuctionsResourceService);

    auctions: AuctionItem[] = [];

    // Jesteś w stanie sterować momentem wywołania tej metody podczas testowania komponentu.
    ngOnInit(): void {
      this.auctions = this.auctionsResourceService.getAll();
    }
}
