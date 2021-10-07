import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Menu, MenuService } from '../menu-service.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
})
export class MenuDetailComponent implements OnInit {
  menuId: string = '';
  menuDetail: any;
  constructor(
    private menuService: MenuService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      // console.log(params);
      this.menuId = params.id;
    });
    if (this.menuId) {
      this.menuService
        .getMenuById(this.menuId?.toString())
        .subscribe((data) => {
          this.menuDetail = data;
        });
    }
  }
}
