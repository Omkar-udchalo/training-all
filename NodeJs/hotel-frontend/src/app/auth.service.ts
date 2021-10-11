import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserOrder } from './cart/cart.component';
import { Menu } from './menu-service.service';
export class Cart {
  title: string = '';
  price: string = '';
  id: string | null | undefined = '';
  qty: number = 0;
  imageUrl: string = '';
  constructor(
    id: string | null | undefined,
    qty: number,
    price: string,
    title: string,
    imageUrl: string
  ) {
    this.id = id;
    this.qty = qty;
    this.price = price;
    this.title = title;
    this.imageUrl = imageUrl;
  }
}
export class User {
  name: string;
  email: string;
  password: string;
  mobile: string;
  cart: Cart[] = [];
  order = [];
  constructor(name: string, email: string, password: string, mobile: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    // this.cart = cart;
  }
}
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  userChanged = new Subject<string>();
  user: any = null;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getUserLocal();
  }

  getUserLocal() {
    let userId = localStorage.getItem('userId');
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http
      .get(`http://localhost:3000/user/${userId}`)
      .subscribe((data) => {
        // console.log(data);
        this.user = data;
        this.userChanged.next(this.user);
      });
  }

  signup(user: User) {
    console.log(user);

    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http
      .post<any>('http://localhost:3000/signup', user)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/menu']);
      });
  }

  login(email: string, password: string) {
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    const userData = {
      email: email,
      password: password,
    };

    return this.http
      .post<any>('http://localhost:3000/login', userData)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        localStorage.setItem('userId', data._id);
        this.router.navigate(['/menu']);
      });
  }

  addToCart(menu: Menu) {
    console.log('in add to cart');

    if (!this.user.cart.length) {
      this.user.cart.push(
        new Cart(menu._id, 1, menu.price, menu.title, menu.imageUrl)
      );
      // console.log(this.user.cart);
    } else {
      let currentCart = this.user.cart;
      let flag = false;
      for (let item of currentCart) {
        if (item.id === menu._id) {
          item.qty += 1;
          flag = true;
          break;
        }
      }
      //new item in cart
      if (!flag) {
        this.user.cart.push(
          new Cart(menu._id, 1, menu.price, menu.title, menu.imageUrl)
        );
      }
    }

    console.log(this.user.cart);
  }
  showCart() {
    try {
      if (this.user.cart) {
        return this.user.cart;
      }
    } catch (err) {
      return [];
    }
    // return [];
    // return this.user.cart ? this.user.cart : [];
  }

  placeOrder(cart: UserOrder) {
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    this.user.order = cart;

    return this.http
      .post<any>('http://localhost:3000/order', this.user)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/order']);
      });
  }
}
