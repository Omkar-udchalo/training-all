import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.css'],
})
export class DeleteMenuComponent implements OnInit {
  menuId: string = '';
  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.menuId = '';
    this.activatedRoute.queryParams.subscribe((params) => {
      this.menuId = params.id;
      console.log(this.menuId);
      if (this.menuId) {
        this.deleteItem();
      }
    });
  }

  deleteItem() {
    if (this.menuId !== '') {
      console.log('Delete item with ID ', this.menuId);
      this.menuService.deleteItemFromMenu(this.menuId);
      // this.menuService.getMenuFromServer();
      this.router.navigate(['/menu']);
    }
  }
}
