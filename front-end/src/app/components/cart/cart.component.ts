import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  cart: Observable<any[]>;

  constructor(private sharedService: SharedService) {
    this.cart = this.sharedService.getCart();
  }



}
