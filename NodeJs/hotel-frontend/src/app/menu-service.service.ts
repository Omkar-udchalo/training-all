import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Menu {
  public _id?: string | null = null;
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MenuService implements OnInit {
  menus: Menu[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getMenuFromServer();
  }
  ngOnInit(): void {}

  getMenuFromServer() {
    this.menus = [];
    this.http.get('http://localhost:3000/menu').subscribe((data) => {
      let menuItems = JSON.parse(JSON.stringify(data).toString());
      console.log('data retrieved');
      for (let item of menuItems) {
        // console.log(item);
        this.menus.push(item);
      }
      console.log(this.menus);

      // for (let item of JSON.parse(data.toString())) {
      // }
    });
  }

  getMenuById(menuId: string) {
    // console.log('Menu by id ');
    return this.http.get(`http://localhost:3000/menu/${menuId}`);
  }

  addMenu(menu: Menu) {
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http
      .post<any>('http://localhost:3000/add-menu', menu)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/menu']);
      });
  }

  deleteItemFromMenu(menuId: string) {
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    const dataToDelete = { menuId: menuId };

    return this.http
      .post<any>('http://localhost:3000/delete-menu', dataToDelete)
      .subscribe((data) => {
        console.log(data);
        // this.router.navigate(['/delete-menu']);
      });
  }
}
