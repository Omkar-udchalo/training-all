import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() itemCount: number;
  @Output() clickCart = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onAddToCartClicked() {
    // console.log('cart click');
    this.clickCart.emit(1);
  }
}
