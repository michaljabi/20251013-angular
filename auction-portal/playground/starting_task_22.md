## Zadanie 22 - formularz dodawania aukcji

1. Do strony `add-auctions-page` dodaj template:

```html
<section class="mt-2 row">
  <h2 class="my-4">Dodaj nową aukcję</h2>
  <div class="col-6">
    <img class="img-thumbnail"alt="Podgląd fotografii" [src]="'https://picsum.photos/id/1/600/600'" />
  </div>
  <div class="col-6">
    <form>
      <div class="form-group">
        <label for="auctionTitle">Nazwa aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon="edit"></fa-icon>
            </span>
          </div>
          <input class="form-control" id="auctionTitle" type="text" name="title" />
        </div>
      </div>
      <div class="form-group">
        <label for="auctionPrice">Cena aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon="tag"></fa-icon>
            </span>
          </div>
          <input class="form-control" id="auctionPrice" type="number" name="price" />
        </div>
      </div>

      <div class="form-group">
        <label for="img">Zdjecie</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon="image"></fa-icon>
            </span>
          </div>
          <input class="form-control" id="img" type="number" name="imgId" />
        </div>
      </div>

      <div class="form-group">
        <label for="auctionDescription">Szczegółowy opis</label>
        <div class="input-group mb-3">
          <textarea class="form-control" id="auctionDescription" rows="5" name="description"></textarea>
        </div>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" type="submit">
          <fa-icon icon="gavel"></fa-icon> Dodaj aukcję
        </button>
      </div>
    </form>
  </div>
</section>
```
2. Popraw importy, tak aby ikony poprawnie się wyświelały
3. Do `styles` dodaj wartości:

```css
    input.ng-invalid.ng-touched,
    textarea.ng-invalid.ng-touched {
      border: 1px solid #dc3545;
    }
```
4. wstrzyknij zależność `FormBuilder` z biblioteki `'@angular/forms'` jako pole `private` nazwane `fb` w klasie komponentu
5. Za chwilę razem skorzystamy z `FormBuilder` żeby zbudować formularz dodawania aukcji
