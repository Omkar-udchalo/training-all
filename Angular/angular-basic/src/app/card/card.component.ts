import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('cardData') cardItem: CardModel;
  @Output() clickCard = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    if (this.cardItem.clicked) {
      console.log('Card ' + this.cardItem.id + 'is clicked');
    }
  }

  onCardClicked() {
    console.log(this.cardItem.clicked);

    if (!this.cardItem.clicked) {
      //If card is already clicked dont add to cart so dont emit event
      this.cardItem.clicked = true;
      // console.log('Card' + this.cardItem.id);
      this.clickCard.emit(1);
      //passing event emitter in app.comp.ts
    }
  }
}
