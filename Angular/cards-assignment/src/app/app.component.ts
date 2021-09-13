import { Component, DoCheck, OnInit } from '@angular/core';
import { CardComponent } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'cards-assignment';
  cardData: CardComponent[] = [];
  changeColor = '';
  idCard: string = '';
  itemCounter: number = 0;
  selected = [];
  onLoad = false;
  ngOnInit(): void {
    this.cardData.push(
      new CardComponent(1, 'Heading 1', 'Title of Card 1', 'detail of card 1')
    );
    this.cardData.push(
      new CardComponent(2, 'Heading 2', 'Title of Card 2', 'detail of card 2')
    );
    this.cardData.push(
      new CardComponent(3, 'Heading 3', 'Title of Card 3', 'detail of card 3')
    );
    this.cardData.push(
      new CardComponent(4, 'Heading 4', 'Title of Card 4', 'detail of card 4')
    );
    this.cardData.push(
      new CardComponent(5, 'Heading 5', 'Title of Card 5', 'detail of card 5')
    );
    this.cardData.push(
      new CardComponent(6, 'Heading 6', 'Title of Card 6', 'detail of card 6')
    );
    this.cardData.push(
      new CardComponent(7, 'Heading 7', 'Title of Card 7', 'detail of card 7')
    );
    this.cardData.push(
      new CardComponent(8, 'Heading 8', 'Title of Card 8', 'detail of card 8')
    );
    this.cardData.push(
      new CardComponent(9, 'Heading 9', 'Title of Card 9', 'detail of card 9')
    );

    this.retriveAllData();
  }

  ngDoCheck() {
    console.log('Changed Value');
  }

  onClick(event: Event) {
    const id = (event.target as Element).id;
    let ind: number = +id.slice(-1);

    ind = ind - 1; //get index of card clicked as array so do -1

    this.cardData[ind].count += 1; //increment card count

    this.cardData[ind].clicked = true; //set the clicked method in cardData array so color will change now
    this.idCard = id.slice(-1); //copy card id to change color
    this.changeColor = id + ' toggle-color';

    // console.log('Clicked card', id);
    this.itemCounter += 1; //increase the count of item

    console.log(this.cardData);

    this.selected = [];
    for (let cardItem of this.cardData) {
      if (cardItem.clicked) {
        this.selected.push({
          id: cardItem.id,
          count: cardItem.count,
        });
      }
    }
    console.log(this.selected); //get card id and count in current cart and store it
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(this.selected));
  }

  retriveAllData() {
    //show all items and quantity;
    let storedItems = JSON.parse(localStorage.getItem('cart'));
    console.log(storedItems);

    for (let storeItem of storedItems) {
      this.cardData[storeItem.id - 1].clicked = true;
      this.cardData[storeItem.id - 1].count = storeItem.count;
      this.itemCounter += storeItem.count; //update item counter
      console.log(this.cardData[storeItem.id - 1]);
    }

    this.onLoad = true;
  }
}
