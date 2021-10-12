import { Component, OnInit } from '@angular/core';
import { AuthService, Cart, User } from '../auth.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  allUsers: User[] = [];
  orders: Cart[] = [];

  constructor(private auth: AuthService) {
    this.getData();
  }

  ngOnInit(): void {
    this.allUsers = [];
    this.orders = [];
    this.auth.getAllUsers();
    this.auth.allUsersChanged.subscribe((data) => {
      // console.log(data);
      let allUs: User[] = data;
      if (data) {
        for (let item of allUs) {
          if (item.role !== 'admin') {
            this.allUsers.push(item);
          }
        }

        this.printAllOrders();
      }
    });
  }
  printAllOrders() {
    console.log(this.allUsers);
    for (let user of this.allUsers) {
      // console.log(user);
      for (let item of user.order) {
        Object.keys(item).forEach((key) => {
          Object.keys(item[key]).forEach((key2) => {
            // console.log(item[key][key2]);
            let order: Cart = item[key][key2];
            this.orders.push(order);
            // console.log('d');
          });
        });
      }
    }
    console.log(this.orders);
  }

  getData() {
    if (!this.auth.users) {
      this.ngOnInit();
    } else {
      // console.log(this.allOrders);
      // this.auth.allUsersChanged.subscribe((data) => {
      // this.allOrders = data;
      // });
    }
  }

  changeStatusOrder() {
    console.log('order delivered');
  }
}
