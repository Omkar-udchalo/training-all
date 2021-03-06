import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';
export class OrderModel {
  constructor(
    public title: string,
    public qty: string,
    public price: string,
    public imageUrl: string,
    public id: string
  ) {}
}

export class UserOrder {
  date: string = '';
  order: OrderModel[];
  status = 'placed';
  constructor(date: string, order: OrderModel[]) {
    this.date = date;
    this.order = order;
  }
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() users: any;

  userData: any = null;
  orders: any = [];
  userOrderData!: OrderModel[];

  userOrd: UserOrder[] = [];

  constructor(private auth: AuthService, private router: Router) {
    this.userData = this.auth.user ? this.auth.user : null;
    console.log(this.userData);

    this.ngOnInit();
    if (this.userData) {
      this.ngOnInit();
      {
        Object.keys(this.userData.order).forEach((key) => {
          console.log(this.userData.order[key]);
          this.orders.push(this.userData.order[key]);
        });
      }
      let orderIndex = 0;
      for (let item of this.orders) {
        let indexOfOrder = Object.keys(item).toString();
        let orderByDate = item[indexOfOrder];

        let currentDataOrder: OrderModel[] = [];
        if (orderByDate) {
          for (let i = 0; i < orderByDate.length; i++) {
            currentDataOrder[i] = new OrderModel(
              orderByDate[i].title,
              orderByDate[i].qty,
              orderByDate[i].price,
              orderByDate[i].imageUrl,
              orderByDate[i].id
            );
          }
        }

        this.userOrd[orderIndex] = new UserOrder(
          indexOfOrder,
          currentDataOrder
        );
        orderIndex++;
      }

      console.log(this.userOrd);
      this.userOrd.forEach((key) => {
        key.order.forEach((key2) => {
          console.log(key2.title);
        });
      });
    }
  }

  ngOnInit(): void {
    console.log(this.users);

    // this.auth.ngOnInit();
    if (!this.auth.user) {
      this.auth.ngOnInit();
      if (!this.auth.user) {
        this.router.navigate(['/menu']);
      }
    } else {
      this.getUserCartData(); //get all orders from db
    }
  }

  getUserCartData() {
    this.auth.getUserById(this.auth.user._id);
  }
}
