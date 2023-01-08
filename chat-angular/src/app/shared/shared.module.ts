import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesComponent } from './bubbles/bubbles.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    BubblesComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BubblesComponent,
    NavComponent
  ]
})
export class SharedModule { }
