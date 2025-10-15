import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {JsonPipe} from '@angular/common';

@Component({
  imports: [
    JsonPipe
  ],
  template: `
    <div>
      advice-details works! {{activatedRoute.snapshot.params | json}}
      <strong>Pobieram artykuł: {{activatedRoute.snapshot.params['adviceId'] }}</strong>
    </div>
  `,
  styles: ``
})
export class AdviceDetailsComponent implements OnInit {
  protected activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('ActivatedRoute', this.activatedRoute.snapshot.params['adviceId']);

    // CONSUMER
    this.activatedRoute.params.subscribe((params: Params) => {
      const myId = Number(params['adviceId']);
      if(!myId) {
        return console.error('adviceId NOT FOUND', myId)
      }
      console.log('Akcja do back-end ściągnij artykuł o id: ', params['adviceId'])
      console.log(typeof params['adviceId'])
      this.requestArticle(Number(params['adviceId']));
    })
  }

  requestArticle(id: number) {
    // backend-call... przez service
  }
}
