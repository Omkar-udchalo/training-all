import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService, Cart } from '../auth.service';
import { MenuService } from '../menu-service.service';
export interface UserCart {
  title: string;
  price: string;
  qty: number;
  imageUrl: string;
}
export interface UserOrder {
  [date: string]: Cart[];
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  currentCart: Cart[] = [];
  constructor(private auth: AuthService, private menuService: MenuService) {}

  ngOnInit(): void {
    this.auth.userChanged.subscribe((data) => {
      let newCart = data.cart;
    });
    this.currentCart = this.auth.showCart();

    // console.log(this.userCart);
  }

  placeOrder() {
    // console.log(this.currentCart);
    let uOrder: UserOrder = {};
    uOrder[new Date().toString()] = this.currentCart;

    // console.log(uOrder);

    this.auth.placeOrder(uOrder, this.auth.user._id);
  }
}
