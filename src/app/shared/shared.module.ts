import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ScrollButtonComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    ScrollButtonComponent,
    SpinnerComponent,
  ]
})
export class SharedModule { }
