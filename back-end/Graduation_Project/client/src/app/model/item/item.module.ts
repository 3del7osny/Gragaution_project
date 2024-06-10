import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Item {
  image: string;
  name: string;
  price: number;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
