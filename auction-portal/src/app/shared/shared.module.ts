import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';
import { FormErrorBoxComponent } from './form-error-box/form-error-box.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchBarComponent,
    FormErrorBoxComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent,
    FontAwesomeModule,
    FormErrorBoxComponent
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
