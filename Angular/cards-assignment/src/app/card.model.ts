export class CardComponent {
  id: number;
  heading: string;
  title: string;
  detail: string;
  clicked: boolean = false;
  count: number = 0;
  constructor(id: number, heading: string, title: string, detail: string) {
    this.id = id;
    this.heading = heading;
    this.title = title;
    this.detail = detail;
    // this.clicked=clicked
  }
}
