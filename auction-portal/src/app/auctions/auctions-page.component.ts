import {Component, inject, OnInit} from '@angular/core';
import {AuctionsResourceService} from './auctions-resource.service';
import {AuctionCardComponent} from './auction-card/auction-card.component';
import {AuctionItem} from './auction-item';
import {SharedModule} from '../shared/shared.module';

@Component({
  imports: [AuctionCardComponent, SharedModule],
  template: `
    <section>
      <h2>Nasze aukcje({{filterAuctionBy}}):</h2>
      <app-search-bar placeholder="Szukaj aukcji..." (searchTextChange)="filterAuctionBy = $event" />
      <div class="row">
        @for(item of auctions; track item.id) {
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <app-auction-card [auctionItem]="item" />
          </div>
        } @empty {
          @if(isAuctionsLoading) {
            <div class="alert alert-info">Ładowanie aukcji....</div>
          }
          @if (errorMessage) {
            <div class="alert alert-danger">{{errorMessage}}</div>
          }
        }
      </div>
    </section>
  `,
  styles: ``,
  // providers: [AuctionsResourceService]
})
export class AuctionsPageComponent implements OnInit {

    auctionsResourceService = inject(AuctionsResourceService);

    filterAuctionBy = '';
    auctions: AuctionItem[] = [];
    isAuctionsLoading = false;
    errorMessage = '';

    // Jesteś w stanie sterować momentem wywołania tej metody podczas testowania komponentu.
    ngOnInit(): void {
      this.isAuctionsLoading = true
      this.auctionsResourceService.getAll().subscribe({
        next: (auctions: AuctionItem[]) => {
          this.auctions = auctions;
          this.isAuctionsLoading = false
        },
        error: (err: Error) => {
          console.error('Error', err);
          this.errorMessage = 'Nie udało się pobrać aukcji.'
          this.isAuctionsLoading = false
        }/*,
        complete: () => {
          console.log('Completed');
        }*/
      });
    }
}
