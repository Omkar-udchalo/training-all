import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuService } from '../menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  currentMenu: Menu[] = [];
  @Input() isAdmin: boolean = false;
  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.currentMenu = this.menuService.menus;
  }
  addToCart(menuClicked: Menu) {}

  deleteFromMenu(menuClicked: Menu) {
    // console.log('Deleteing the item');
    let menuId = menuClicked._id;
    if (menuId) {
      this.router.navigate(['/delete-menu'], { queryParams: { id: menuId } });
    }
  }
}
