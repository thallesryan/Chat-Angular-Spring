import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesComponent } from './bubbles/bubbles.component';



@NgModule({
  declarations: [
    BubblesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BubblesComponent
  ]
})
export class SharedModule { }
