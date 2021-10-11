import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Menu, MenuService } from '../menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  currentMenu: Menu[] = [];
  @Input() isAdmin: boolean = false;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.ngOnInit();
    // this.menuService.getMenuFromServer();
    this.currentMenu = this.menuService.menus;
  }
  addToCart(menuClicked: Menu) {
    // console.log(menuClicked);
    if (menuClicked._id) {
      // console.log('clicked add to cart');

      this.auth.addToCart(menuClicked);
    }
  }

  deleteFromMenu(menuClicked: Menu) {
    // for(let item of this.currentMenu){
    //   if(item._id===menuC)
    // }
    // console.log('Deleteing the item');
    let menuId = menuClicked._id;
    if (menuId) {
      this.router.navigate(['/delete-menu'], { queryParams: { id: menuId } });
    }
  }
}
