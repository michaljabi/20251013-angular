import {Component, inject} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {AuctionsResourceService} from '../auctions-resource.service';
import {AuctionItem, AuctionItemWithoutId} from '../auction-item';

@Component({
  selector: 'app-add-auction-page',
  imports: [SharedModule, ReactiveFormsModule, JsonPipe],
  template: `
    <section class="mt-2 row">
      <h2 class="my-4">Dodaj nową aukcję</h2>
      <div class="col-6">
        <img class="img-thumbnail" alt="Podgląd fotografii" [src]="imgUrl" />
      </div>
      <div class="col-6">
        <form [formGroup]="auctionForm" (submit)="handleSubmit()">
          <div class="form-group">
            <label for="auctionTitle">Nazwa aukcji *</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text">
                <fa-icon icon="edit"></fa-icon>
              </span>
              </div>
              <input class="form-control" id="auctionTitle" type="text" formControlName="title" />
            </div>
<!--            {{ auctionForm.controls.title.touched }}-->
            @let myTitle = auctionForm.controls.title;

            @if(myTitle.touched && title.invalid) {
              <!--<div class="alert alert-danger">
                {{ title.errors?.['required'] ? 'Pole jest wymagane' : '' }}
                {{ title.errors?.['minlength'] ? 'Minimalna nazwa aukcji musi zawierać ' + title.errors?.['minlength']['requiredLength'] + ' znaków' : '' }}
              </div>-->
              <app-form-error-box [errors]="title.errors" />
            }

          </div>
          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon="tag"></fa-icon>
            </span>
              </div>
              <input class="form-control" id="auctionPrice" type="number" formControlName="price" />
            </div>
            @let price = auctionForm.controls.price;
            @if(price.touched && price.invalid) {
              <app-form-error-box [errors]="price.errors" />
            }
          </div>
          <div class="form-group">
            <label for="img">Zdjecie</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon="image"></fa-icon>
            </span>
              </div>
              <input class="form-control" id="img" type="number" formControlName="imgId" />
            </div>
            @if( auctionForm.controls.imgId.touched && auctionForm.controls.imgId.invalid) {
              <div class="alert alert-danger">
                {{ auctionForm.controls.imgId.errors | json }}
              </div>
            }
          </div>
          <div class="form-group">
            <label for="auctionDescription">Szczegółowy opis</label>
            <div class="input-group mb-3">
              <textarea class="form-control" id="auctionDescription" rows="5" formControlName="description"></textarea>
            </div>
          </div>

          <div formArrayName="tags" class="mb-4">
            <button type="button" class="btn btn-outline-success mb-2" (click)="handleAddTag()">
              <fa-icon icon="plus"/> Tag
            </button>
            @for(tag of auctionForm.controls.tags.controls; track tag) {
              <div class="form-group" [formGroup]="tag" >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {{ $index + 1 }}. <fa-icon icon="tag" />
                    </span>
                  </div>
                  <input class="form-control" formControlName="tagName" />
                  <button class="btn btn-outline-danger" type="button" (click)="handleRemoveTag($index)">
                    ➖
                  </button>
                </div>
              </div>
            }
          </div>


          <div class="text-right">
            <button class="btn btn-primary" type="submit" [style.opacity]="auctionForm.invalid ? 0.6 : 1">
              <fa-icon icon="gavel"></fa-icon> Dodaj aukcję
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: `
    input.ng-invalid.ng-touched,
    textarea.ng-invalid.ng-touched {
      border: 2px solid #dc3545;
    }
  `
})
export class AddAuctionPageComponent {
    private fb = inject(FormBuilder).nonNullable;
    private auctionResourceService = inject(AuctionsResourceService);

    auctionForm = this.fb.group({
      // title: new FormControl('??'),
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, [Validators.required, Validators.min(10), Validators.max(10_000_000)]],
      imgId: [12, [Validators.min(0), Validators.max(1084)]],
      description: [''],
      tags: this.fb.array([
        this.fb.group({
          tagName: ['']
        })
      ])
    })

    get title() {
      return this.auctionForm.controls.title
    }

    get imgUrl() {
      return `https://picsum.photos/id/${this.auctionForm.value.imgId}/600/600`
    }

    get tags() {
      return this.auctionForm.controls.tags
    }

    handleAddTag() {
      this.tags.push(this.fb.group({ tagName: [''] }))
    }

    handleRemoveTag(idx: number) {
      this.tags.removeAt(idx)
    }

    handleSubmit() {

      console.log('Wartości', this.auctionForm.value)

      if(this.auctionForm.invalid) {
        this.auctionForm.markAllAsTouched();
        return;
      }

      //console.log(this.imgUrl)
      // this.auctionForm.value.

      // const { title = '', price = 10, description = '' } = this.auctionForm.value;

      const newAuction: AuctionItemWithoutId = {
        title: String(this.auctionForm.value.title),
        // price: Number(this.auctionForm.value.price),
        price: this.auctionForm.controls.price.value,
        imgUrl: this.imgUrl,
        description: String(this.auctionForm.value.description)
      }

      this.auctionResourceService.addOne(newAuction).subscribe({
        next: (auctionItem: AuctionItem) => {
          console.log('Nowe id to:', auctionItem.id);
          this.auctionForm.reset();
        },
        error: (err: Error) => {
          console.error('Error', err);
        }
      })
    }
}
