import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private menuService: MenuService, private router: Router) {}
  getMenu() {
    this.menuService.getMenuFromServer();
    this.router.navigate(['/menu']);
  }

  getHome() {
    this.router.navigate(['']);
  }

  onMenuAddedClicked() {
    this.router.navigate(['/add-menu']);
  }
  onMenuDelClicked() {
    this.router.navigate(['/delete-menu']);
  }

  ngOnInit(): void {}
}
