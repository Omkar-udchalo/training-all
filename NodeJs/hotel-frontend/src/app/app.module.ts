import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FormsModule } from '@angular/forms';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    MenuCardComponent,
    MenuDetailComponent,
    LoaderComponent,
    AddMenuComponent,
    DeleteMenuComponent,
    LoginComponent,
    CartComponent,
    FooterComponent,
    OrdersComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRouting, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
