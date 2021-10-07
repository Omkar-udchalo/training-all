import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Menu, MenuService } from '../menu-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  constructor(private menuService: MenuService) {}
  menu!: Menu;
  ngOnInit(): void {}

  onMenuAdded(formData: NgForm) {
    // console.log(formData.value);
    // console.log(this.menu);
    this.menu = new Menu(
      formData.value.menuname,
      formData.value.menudesc,
      formData.value.menuimg,
      formData.value.price
    );
    formData.reset();
    this.menuService.addMenu(this.menu);
    // console.log(this.menu);
  }
}
