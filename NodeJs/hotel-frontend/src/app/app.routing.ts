import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'admin-order', component: AllOrdersComponent },
  { path: 'auth', component: LoginComponent },
  {
    path: 'delete-menu',
    component: DeleteMenuComponent,
    children: [{ path: ':id', component: DeleteMenuComponent }],
  },
  {
    path: 'detail',
    component: MenuDetailComponent,
    children: [{ path: ':id', component: MenuDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
