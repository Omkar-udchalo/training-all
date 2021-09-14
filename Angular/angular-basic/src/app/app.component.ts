import { Component, OnChanges, OnInit } from '@angular/core';

import { CardModel } from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cardData: CardModel[] = [];
  numItems: number = 0;
  itemsAlreadyInCart = [];
  ngOnInit(): void {
    this.cardData.push(
      new CardModel(1, 'Heading 1', 'Title of Card 1', 'detail of card 1')
    );
    this.cardData.push(
      new CardModel(2, 'Heading 2', 'Title of Card 2', 'detail of card 2')
    );
    this.cardData.push(
      new CardModel(3, 'Heading 3', 'Title of Card 3', 'detail of card 3')
    );
    this.cardData.push(
      new CardModel(4, 'Heading 4', 'Title of Card 4', 'detail of card 4')
    );
    this.cardData.push(
      new CardModel(5, 'Heading 5', 'Title of Card 5', 'detail of card 5')
    );
    this.cardData.push(
      new CardModel(6, 'Heading 6', 'Title of Card 6', 'detail of card 6')
    );
    this.cardData.push(
      new CardModel(7, 'Heading 7', 'Title of Card 7', 'detail of card 7')
    );
    this.cardData.push(
      new CardModel(8, 'Heading 8', 'Title of Card 8', 'detail of card 8')
    );
    this.cardData.push(
      new CardModel(9, 'Heading 9', 'Title of Card 9', 'detail of card 9')
    );

    console.log(this.retriveData());
  }

  retriveData() {
    if (localStorage.getItem('cart')) {
      this.itemsAlreadyInCart = JSON.parse(localStorage.getItem('cart'));
      for (let id of this.itemsAlreadyInCart) {
        for (let item of this.cardData) {
          if (item.id === id.itemId) {
            item.clicked = true;
          }
        }
      }
      this.numItems = this.itemsAlreadyInCart.length;
      return this.cardData;
    }
  }

  onCardClicked(data) {
    this.numItems += 1;
    // console.log('Cart Items' + this.numItems);
  }

  addingToCart() {
    console.log(this.cardData);
    for (let item of this.cardData) {
      if (item.clicked) {
        this.itemsAlreadyInCart.push({ itemId: item.id });
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.itemsAlreadyInCart));
  }
}
