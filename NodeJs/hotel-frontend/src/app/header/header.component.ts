import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any = null;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.auth.userChanged.subscribe((data) => {
      this.user = data;
    });
    // this.auth.ngOnInit();
    this.user = this.auth.user;
    console.log(this.user);
  }

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
  authClicked() {
    this.router.navigate(['/auth']);
  }
  signOutClicked() {
    this.auth.user = null;
    this.ngOnInit();
    this.router.navigate(['']);
  }
  getCart() {
    this.router.navigate(['/cart']);
  }
}
