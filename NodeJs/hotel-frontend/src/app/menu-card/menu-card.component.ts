import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Menu, MenuService } from '../menu-service.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent implements OnInit {
  @Input() isAdmin!: boolean;
  @Output() addToCardClicked = new EventEmitter<Menu>();
  @Output() deleteCardClicked = new EventEmitter<Menu>();
  currentMenu: Menu[] = [];
  constructor(
    private menuService: MenuService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.currentMenu = this.menuService.menus;
  }
  onAddToCart(index: number) {
    // if (!this.auth.user) {
    //   this.router.navigate(['/auth']);
    //   return;
    // }
    if (!this.isAdmin) {
      this.addToCardClicked.emit(this.currentMenu[index]);
    }
  }
  onDelete(index: number) {
    // console.log('Delete clicked for ');
    // console.log(this.currentMenu[index]);
    this.deleteCardClicked.emit(this.currentMenu[index]);
  }
  onDetailClicked(index: number) {
    this.router.navigate(['/detail'], {
      queryParams: { id: this.currentMenu[index]._id },
    });
  }
}
