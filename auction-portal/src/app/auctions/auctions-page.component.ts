import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {AuctionsResourceService} from './auctions-resource.service';

@Component({
  imports: [JsonPipe],
  template: `
    <p>
      auctions-page works! {{ auctionsResourceService.getAll() | json}}
    </p>
  `,
  styles: ``,
  // providers: [AuctionsResourceService]
})
export class AuctionsPageComponent {

    auctionsResourceService = inject(AuctionsResourceService);
}
