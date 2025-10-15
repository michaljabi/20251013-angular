import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SearchBarComponent,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGavel,
      faPlus,
      faShoppingBasket,
      faUser,
      faSearch,
      faCartPlus,
      faEdit,
      faTag,
      faImage
    );
  }
}
